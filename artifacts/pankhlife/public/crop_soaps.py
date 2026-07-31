from PIL import Image
import numpy as np

soaps = [
    "divine_lotus_soap.jpg",
    "apricot_soap.jpg",
    "sandalwood_soap.jpg",
    "coffee_soap.jpg"
]

def trim_white(img_path):
    print(f"Trimming {img_path}...")
    img = Image.open(img_path).convert("RGB")
    arr = np.array(img)
    
    # Foreground is anything NOT white/light-grey
    # We'll set a threshold of 240 (anything above 240 is considered white background)
    fg_mask = (arr[:,:,0] < 240) | (arr[:,:,1] < 240) | (arr[:,:,2] < 240)
    
    rows = np.any(fg_mask, axis=1)
    cols = np.any(fg_mask, axis=0)
    
    if not rows.any():
        print(f"Skipping {img_path}, no foreground found")
        return
        
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    
    # Add a small padding (5 pixels)
    pad = 5
    h, w = arr.shape[:2]
    rmin = max(0, rmin - pad)
    rmax = min(h - 1, rmax + pad)
    cmin = max(0, cmin - pad)
    cmax = min(w - 1, cmax + pad)
    
    cropped = img.crop((cmin, rmin, cmax + 1, rmax + 1))
    new_path = img_path.replace(".jpg", "_cropped.jpg")
    cropped.save(new_path, "JPEG", quality=95)
    print(f"Saved {new_path}")

for soap in soaps:
    trim_white(soap)
