import fitz
import os

pdf_path = r"c:\Users\HP\Downloads\Zen-Flow-Design (1)\Zen-Flow-Design\artifacts\pankhlife\public\certification.pdf"
output_dir = r"c:\Users\HP\Downloads\Zen-Flow-Design (1)\Zen-Flow-Design\artifacts\pankhlife\public\certifications"

os.makedirs(output_dir, exist_ok=True)

doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    output_path = os.path.join(output_dir, f"cert_{i+1}.png")
    pix.save(output_path)
    print(f"Saved {output_path}")

print("Done extracting certificates.")
