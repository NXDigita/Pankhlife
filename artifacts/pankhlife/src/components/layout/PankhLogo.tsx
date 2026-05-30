import { useEffect, useState } from "react";

interface PankhLogoProps {
  variant?: "navbar" | "full";
  className?: string;
}

export function PankhLogo({ variant = "navbar", className = "h-10 w-auto" }: PankhLogoProps) {
  const [imgSrc, setImgSrc] = useState<string>("");

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.jpeg";
    img.crossOrigin = "anonymous"; // prevent canvas tainted errors
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = img;
      canvas.width = width;
      canvas.height = height;

      // Draw original image
      ctx.drawImage(img, 0, 0);

      // Get pixel data to filter white background
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      // Convert pure white and near-white to transparent
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Make pure/near white transparent (threshold > 240 on all RGB channels)
        if (r > 242 && g > 242 && b > 242) {
          data[i + 3] = 0; // Set Alpha to 0
        }
      }
      ctx.putImageData(imgData, 0, 0);

      // Mask out tagline and TM if it's the navbar variant
      if (variant === "navbar") {
        // Tagline is at the bottom (clear the bottom ~28% of the image)
        const taglineStartHeight = height * 0.72;
        ctx.clearRect(0, taglineStartHeight, width, height - taglineStartHeight);

        // TM mark is at the top right of the "kh" letters
        const tmLeft = width * 0.78;
        const tmTop = height * 0.28;
        const tmWidth = width * 0.13;
        const tmHeight = height * 0.10;
        ctx.clearRect(tmLeft, tmTop, tmWidth, tmHeight);
      } else {
        // Full variant retains the tagline, but we can clear the TM mark if wanted
        // Let's clear just the TM mark to keep it exceptionally clean
        const tmLeft = width * 0.78;
        const tmTop = height * 0.28;
        const tmWidth = width * 0.13;
        const tmHeight = height * 0.10;
        ctx.clearRect(tmLeft, tmTop, tmWidth, tmHeight);
      }

      // Save processed canvas as a high-quality data URL
      setImgSrc(canvas.toDataURL("image/png"));
    };
  }, [variant]);

  if (!imgSrc) {
    // Elegant pulsing skeleton while image loads
    return (
      <div className={`animate-pulse bg-muted/20 rounded-md ${className}`} style={{ aspectRatio: "1.4", minWidth: "120px" }} />
    );
  }

  return (
    <img
      src={imgSrc}
      alt="Pankh Life Logo"
      className={`${className} transition-opacity duration-300`}
    />
  );
}
