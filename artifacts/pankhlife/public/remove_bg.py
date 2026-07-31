import os
from PIL import Image
from rembg import remove

images = [
    "papaya_scrub.jpg",
    "kumkumadi_scrub.jpg",
    "keratin_shampoo.jpg",
    "conditioner.jpg",
    "amla_shampoo.jpg",
    "divine_lotus_soap.jpg",
    "apricot_soap.jpg",
    "sandalwood_soap.jpg",
    "coffee_soap.jpg",
    "radiant_facewash.jpg",
    "sandalwood_facewash.jpg",
    "sandalwood_showergel.jpg",
    "oud_showergel.jpg",
    "WhatsApp Image 2026-07-24 at 9.33.27 AM.jpeg",
    "peach_lotion.jpg",
    "kumkumadi_lotion.jpg"
]

def process_image(img_path):
    if not os.path.exists(img_path):
        print(f"Not found: {img_path}")
        return
    
    try:
        print(f"Processing {img_path}...")
        input_image = Image.open(img_path)
        
        # Remove background
        output_image = remove(input_image)
        
        # Crop to bounding box
        bbox = output_image.getbbox()
        if bbox:
            output_image = output_image.crop(bbox)
        
        # Create a white background instead of transparent
        # Since the user specifically requested "set the background as white"
        white_bg = Image.new("RGBA", output_image.size, "WHITE")
        white_bg.paste(output_image, (0, 0), output_image)
        final_image = white_bg.convert("RGB")
        
        new_path = os.path.splitext(img_path)[0] + "_nobg.jpg"
        final_image.save(new_path, format="JPEG", quality=95)
        print(f"Saved {new_path}")
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

for img in images:
    process_image(img)
