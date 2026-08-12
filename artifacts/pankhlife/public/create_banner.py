from PIL import Image
import sys
import os

def create_collage(img1_path, img2_path, img3_path, output_path):
    print("Loading images...")
    try:
        img1 = Image.open(img1_path)
        img2 = Image.open(img2_path)
        img3 = Image.open(img3_path)
    except Exception as e:
        print(f"Error loading images: {e}")
        return

    # Resize images to have the same height for a horizontal banner
    target_height = 800
    
    def resize_to_height(img, height):
        aspect_ratio = img.width / img.height
        new_width = int(height * aspect_ratio)
        return img.resize((new_width, height), Image.Resampling.LANCZOS)
        
    print("Resizing images to fit the banner...")
    img1_resized = resize_to_height(img1, target_height)
    img2_resized = resize_to_height(img2, target_height)
    img3_resized = resize_to_height(img3, target_height)
    
    total_width = img1_resized.width + img2_resized.width + img3_resized.width
    
    # Create the collage
    print("Stitching collage...")
    collage = Image.new('RGB', (total_width, target_height), (250, 249, 246))
    
    collage.paste(img1_resized, (0, 0))
    collage.paste(img2_resized, (img1_resized.width, 0))
    collage.paste(img3_resized, (img1_resized.width + img2_resized.width, 0))
    
    print(f"Saving beautiful collage to {output_path}...")
    collage.save(output_path, quality=95)
    print("Done! The banner has been successfully created.")

if __name__ == "__main__":
    print("Bath Salts Banner Collage Creator")
    print("---------------------------------")
    
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Define expected paths
    img1 = os.path.join(base_dir, "img1.jpg")
    img2 = os.path.join(base_dir, "img2.jpg")
    img3 = os.path.join(base_dir, "img3.jpg")
    output = os.path.join(base_dir, "bath_salts_banner.png")
    
    if not (os.path.exists(img1) and os.path.exists(img2) and os.path.exists(img3)):
        print("ERROR: Could not find the source images.")
        print(f"Please ensure you have uploaded the 3 exact images to the 'public' folder as:")
        print(f"  - {img1}")
        print(f"  - {img2}")
        print(f"  - {img3}")
    else:
        create_collage(img1, img2, img3, output)
