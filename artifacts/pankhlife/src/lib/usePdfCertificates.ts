import { useEffect, useMemo, useRef, useState } from "react";
import { GlobalWorkerOptions, getDocument, type PDFDocumentProxy } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

type CertificateMeta = {
  pageNumber: number;
  title: string;
};

export type CertificateItem = CertificateMeta & {
  thumbUrl?: string;
  fullUrl?: string;
};

type RenderKind = "thumb" | "full";

const CERT_PDF_URL = "/certification.pdf";

function cleanTitle(raw: string) {
  return raw
    .replace(/\s+/g, " ")
    .replace(/[|•·]/g, " ")
    .trim();
}

async function extractPageTitle(doc: PDFDocumentProxy, pageNumber: number) {
  const page = await doc.getPage(pageNumber);
  const text = await page.getTextContent();
  const strings = text.items
    .map((i: any) => (typeof i?.str === "string" ? i.str : ""))
    .map(cleanTitle)
    .filter(Boolean);

  const firstMeaningful =
    strings.find((s) => s.length >= 18) ??
    strings.find((s) => s.length >= 10) ??
    strings[0];

  return firstMeaningful || `Certificate ${pageNumber}`;
}

async function renderPageToWebpUrl(
  doc: PDFDocumentProxy,
  pageNumber: number,
  kind: RenderKind
) {
  const page = await doc.getPage(pageNumber);
  const scale = kind === "thumb" ? 0.5 : 1.6;
  const viewport = page.getViewport({ scale });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("Canvas 2D context unavailable");

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(viewport.width * dpr);
  canvas.height = Math.floor(viewport.height * dpr);
  canvas.style.width = `${Math.floor(viewport.width)}px`;
  canvas.style.height = `${Math.floor(viewport.height)}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  await page.render({ canvasContext: ctx as any, viewport }).promise;

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("Failed to create image blob"))),
      "image/webp",
      kind === "thumb" ? 0.7 : 0.82
    );
  });

  return URL.createObjectURL(blob);
}

export function usePdfCertificates() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<CertificateItem[]>([]);

  const docRef = useRef<PDFDocumentProxy | null>(null);
  const urlCache = useRef<Map<string, string>>(new Map());

  useEffect(() => {
    GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setLoading(true);
        setError(null);

        const task = getDocument(CERT_PDF_URL);
        const doc = await task.promise;
        if (cancelled) return;

        docRef.current = doc;

        const pageNumbers = Array.from({ length: doc.numPages }, (_, i) => i + 1);
        const metas: CertificateMeta[] = await Promise.all(
          pageNumbers.map(async (pageNumber) => ({
            pageNumber,
            title: await extractPageTitle(doc, pageNumber),
          }))
        );

        if (cancelled) return;
        setItems(metas);
      } catch (e: any) {
        if (cancelled) return;
        setError(e?.message || "Failed to load certifications");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      for (const url of urlCache.current.values()) URL.revokeObjectURL(url);
      urlCache.current.clear();
    };
  }, []);

  const api = useMemo(() => {
    async function ensureImage(pageNumber: number, kind: RenderKind) {
      const key = `${kind}:${pageNumber}`;
      const cached = urlCache.current.get(key);
      if (cached) return cached;

      const doc = docRef.current;
      if (!doc) throw new Error("PDF not loaded yet");

      const url = await renderPageToWebpUrl(doc, pageNumber, kind);
      urlCache.current.set(key, url);
      return url;
    }

    async function ensureThumb(pageNumber: number) {
      return ensureImage(pageNumber, "thumb");
    }

    async function ensureFull(pageNumber: number) {
      return ensureImage(pageNumber, "full");
    }

    return { ensureThumb, ensureFull };
  }, []);

  return { loading, error, items, ...api };
}
