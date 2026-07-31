from PIL import Image
import os

def crop_horizontal(img_path, num_pieces, output_names):
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return
    try:
        img = Image.open(img_path)
        width, height = img.size
        piece_width = width // num_pieces
        for i in range(num_pieces):
            left = i * piece_width
            right = (i + 1) * piece_width
            cropped = img.crop((left, 0, right, height))
            cropped.save(output_names[i])
            print(f"Saved {output_names[i]}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

def crop_grid(img_path, rows, cols, output_names):
    if not os.path.exists(img_path):
        print(f"File not found: {img_path}")
        return
    try:
        img = Image.open(img_path)
        width, height = img.size
        piece_width = width // cols
        piece_height = height // rows
        
        idx = 0
        for r in range(rows):
            for c in range(cols):
                if idx < len(output_names):
                    left = c * piece_width
                    top = r * piece_height
                    right = (c + 1) * piece_width
                    bottom = (r + 1) * piece_height
                    cropped = img.crop((left, top, right, bottom))
                    cropped.save(output_names[idx])
                    print(f"Saved {output_names[idx]}")
                idx += 1
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

crop_horizontal("WhatsApp Image 2026-07-24 at 9.33.25 AM.jpeg", 2, ["papaya_scrub.jpg", "kumkumadi_scrub.jpg"])
crop_horizontal("WhatsApp Image 2026-07-24 at 9.33.26 AM (1).jpeg", 3, ["keratin_shampoo.jpg", "conditioner.jpg", "amla_shampoo.jpg"])
crop_grid("WhatsApp Image 2026-07-24 at 9.33.26 AM (2).jpeg", 2, 2, ["divine_lotus_soap.jpg", "apricot_soap.jpg", "sandalwood_soap.jpg", "coffee_soap.jpg"])
crop_horizontal("WhatsApp Image 2026-07-24 at 9.33.26 AM.jpeg", 2, ["radiant_facewash.jpg", "sandalwood_facewash.jpg"])
crop_horizontal("WhatsApp Image 2026-07-24 at 9.33.27 AM (1).jpeg", 2, ["sandalwood_showergel.jpg", "oud_showergel.jpg"])
crop_horizontal("WhatsApp Image 2026-07-24 at 9.33.35 AM.jpeg", 2, ["peach_lotion.jpg", "kumkumadi_lotion.jpg"])
