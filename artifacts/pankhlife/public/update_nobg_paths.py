import re

file_path = r"c:\Users\HP\Downloads\Zen-Flow-Design (1)\Zen-Flow-Design\artifacts\pankhlife\src\data\products.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

images_to_replace = [
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

for img in images_to_replace:
    if img.endswith(".jpeg"):
        new_img = img.replace(".jpeg", "_nobg.jpg")
    else:
        new_img = img.replace(".jpg", "_nobg.jpg")
        
    content = content.replace(f'"{img}"', f'"{new_img}"')
    content = content.replace(f'"/{img}"', f'"/{new_img}"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated products.ts for nobg images safely")
