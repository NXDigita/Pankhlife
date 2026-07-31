from PIL import Image
import numpy as np
import os
from collections import deque

def is_grey(pixel, tolerance=25):
    """Check if a pixel is grey (R≈G≈B)."""
    r, g, b = int(pixel[0]), int(pixel[1]), int(pixel[2])
    avg = (r + g + b) / 3
    return (abs(r - avg) < tolerance and 
            abs(g - avg) < tolerance and 
            abs(b - avg) < tolerance)

def is_near_white(pixel, threshold=210):
    """Check if a pixel is near white."""
    return int(pixel[0]) >= threshold and int(pixel[1]) >= threshold and int(pixel[2]) >= threshold

def flood_fill_from_seeds(arr, seed_mask, grey_tol=30, white_thresh=200):
    """
    BFS flood fill from seed positions.
    Floods through pixels that are either:
    - Grey (R≈G≈B) with any brightness
    - Near white (marble/surface)
    """
    h, w = arr.shape[:2]
    visited = np.zeros((h, w), dtype=bool)
    bg = np.zeros((h, w), dtype=bool)
    
    queue = deque()
    # Seed from all border pixels
    for r in range(h):
        queue.append((r, 0))
        queue.append((r, w-1))
    for c in range(w):
        queue.append((0, c))
        queue.append((h-1, c))
    
    while queue:
        r, c = queue.popleft()
        if r < 0 or r >= h or c < 0 or c >= w or visited[r, c]:
            continue
        visited[r, c] = True
        
        px = arr[r, c].astype(int)
        r_val, g_val, b_val = px[0], px[1], px[2]
        avg = (r_val + g_val + b_val) / 3
        
        # Grey pixel: R≈G≈B (studio wall)
        is_g = (abs(r_val - avg) < grey_tol and 
                abs(g_val - avg) < grey_tol and 
                abs(b_val - avg) < grey_tol)
        
        # Near-white pixel: marble surface, white top of jar, reflections
        is_w = r_val >= white_thresh and g_val >= white_thresh and b_val >= white_thresh
        
        if is_g or is_w:
            bg[r, c] = True
            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1),(-1,-1),(-1,1),(1,-1),(1,1)]:
                queue.append((r+dr, c+dc))
    
    return bg

def process(src, dst, grey_tol=32, white_thresh=195):
    if not os.path.exists(src):
        print(f"  SKIP: {src}")
        return
    
    print(f"Processing {src}...")
    img = Image.open(src).convert("RGB")
    arr = np.array(img, dtype=np.uint8)
    
    bg = flood_fill_from_seeds(arr, None, grey_tol=grey_tol, white_thresh=white_thresh)
    
    # Replace background with white
    arr_out = arr.copy()
    arr_out[bg] = [255, 255, 255]
    
    # Find tight bounding box of non-background
    fg = ~bg
    rows = np.any(fg, axis=1)
    cols = np.any(fg, axis=0)
    
    if not rows.any():
        print(f"  WARN: all background detected, saving original")
        img.save(dst, "JPEG", quality=95)
        return
    
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    
    pad = 8
    h, w = arr.shape[:2]
    rmin = max(0, rmin - pad)
    rmax = min(h-1, rmax + pad)
    cmin = max(0, cmin - pad)
    cmax = min(w-1, cmax + pad)
    
    result = Image.fromarray(arr_out).crop((cmin, rmin, cmax+1, rmax+1))
    result.save(dst, "JPEG", quality=95)
    print(f"  OK -> {dst} (cropped to {cmax-cmin}x{rmax-rmin})")

# Images with grey studio backgrounds - use higher tolerance
studio_images = [
    ("papaya_scrub.jpg",         "papaya_scrub_nobg.jpg",        35, 190),
    ("kumkumadi_scrub.jpg",      "kumkumadi_scrub_nobg.jpg",     35, 190),
    ("keratin_shampoo.jpg",      "keratin_shampoo_nobg.jpg",     25, 200),
    ("conditioner.jpg",          "conditioner_nobg.jpg",         25, 200),
    ("amla_shampoo.jpg",         "amla_shampoo_nobg.jpg",        25, 200),
    ("divine_lotus_soap.jpg",    "divine_lotus_soap_nobg.jpg",   20, 210),
    ("apricot_soap.jpg",         "apricot_soap_nobg.jpg",        20, 210),
    ("sandalwood_soap.jpg",      "sandalwood_soap_nobg.jpg",     20, 210),
    ("coffee_soap.jpg",          "coffee_soap_nobg.jpg",         20, 210),
    ("radiant_facewash.jpg",     "radiant_facewash_nobg.jpg",    20, 210),
    ("sandalwood_facewash.jpg",  "sandalwood_facewash_nobg.jpg", 20, 210),
    ("sandalwood_showergel.jpg", "sandalwood_showergel_nobg.jpg",28, 195),
    ("oud_showergel.jpg",        "oud_showergel_nobg.jpg",       28, 195),
    ("WhatsApp Image 2026-07-24 at 9.33.27 AM.jpeg", "silk_balance_cream_nobg.jpg", 20, 210),
    ("peach_lotion.jpg",         "peach_lotion_nobg.jpg",        28, 195),
    ("kumkumadi_lotion.jpg",     "kumkumadi_lotion_nobg.jpg",    28, 195),
]

for src, dst, grey_tol, white_thresh in studio_images:
    process(src, dst, grey_tol=grey_tol, white_thresh=white_thresh)

print("\nAll done!")
