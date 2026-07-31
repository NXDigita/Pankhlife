from PIL import Image
import numpy as np
from collections import deque

def fix_papaya():
    """
    The papaya scrub has a dark green body on grey background.
    We flood fill from corners but use a NARROW tolerance 
    specifically tuned to the grey wall color.
    """
    img = Image.open("papaya_scrub.jpg").convert("RGB")
    arr = np.array(img, dtype=np.uint8)
    h, w = arr.shape[:2]
    
    # Sample corner colors (the grey wall)
    corners = []
    for r, c in [(0, 0), (0, w//2), (5, 5), (0, w-1), (5, w-5)]:
        corners.append(arr[r, c].astype(int))
    bg_color = np.mean(corners, axis=0)
    print(f"Detected bg color: {bg_color}")
    
    visited = np.zeros((h, w), dtype=bool)
    bg = np.zeros((h, w), dtype=bool)
    queue = deque()
    
    # Seed from top border only (the grey wall is on top and sides)
    for c in range(w):
        queue.append((0, c))
    for r in range(h):
        queue.append((r, 0))
        queue.append((r, w-1))
    # Also seed bottom (white marble reflection)
    for c in range(w):
        queue.append((h-1, c))
    
    while queue:
        r, c = queue.popleft()
        if r < 0 or r >= h or c < 0 or c >= w or visited[r, c]:
            continue
        visited[r, c] = True
        
        px = arr[r, c].astype(int)
        
        # Is it grey-ish? (close to the bg_color detected from corners)
        diff_from_bg = np.abs(px - bg_color)
        close_to_bg = np.all(diff_from_bg <= 28)
        
        # Is it near-white (marble surface / reflections)?
        is_white = px[0] >= 200 and px[1] >= 200 and px[2] >= 200
        
        # Is it pure grey (R~G~B, desaturated)
        avg = (px[0] + px[1] + px[2]) / 3
        is_grey = (abs(px[0] - avg) < 20 and abs(px[1] - avg) < 20 and abs(px[2] - avg) < 20 and avg > 100)
        
        if close_to_bg or is_white or is_grey:
            bg[r, c] = True
            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1),(-1,-1),(-1,1),(1,-1),(1,1)]:
                queue.append((r+dr, c+dc))
    
    arr_out = arr.copy()
    arr_out[bg] = [255, 255, 255]
    
    fg = ~bg
    rows = np.any(fg, axis=1)
    cols = np.any(fg, axis=0)
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    pad = 8
    rmin = max(0, rmin - pad)
    rmax = min(h-1, rmax + pad)
    cmin = max(0, cmin - pad)
    cmax = min(w-1, cmax + pad)
    
    result = Image.fromarray(arr_out).crop((cmin, rmin, cmax+1, rmax+1))
    result.save("papaya_scrub_nobg.jpg", "JPEG", quality=95)
    print(f"Saved papaya_scrub_nobg.jpg")

fix_papaya()
