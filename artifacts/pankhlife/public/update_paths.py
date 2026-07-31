import re

file_path = r"c:\Users\HP\Downloads\Zen-Flow-Design (1)\Zen-Flow-Design\artifacts\pankhlife\src\data\products.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

replacements = {
    '"p9"': '"/papaya_scrub.jpg"',
    '"p10"': '"/kumkumadi_scrub.jpg"',
    '"p11"': '"/keratin_shampoo.jpg"',
    '"p12"': '"/conditioner.jpg"',
    '"p13"': '"/amla_shampoo.jpg"',
    '"p14"': '"/divine_lotus_soap.jpg"',
    '"p15"': '"/apricot_soap.jpg"',
    '"p16"': '"/sandalwood_soap.jpg"',
    '"p17"': '"/coffee_soap.jpg"',
    '"p18"': '"/radiant_facewash.jpg"',
    '"p19"': '"/sandalwood_facewash.jpg"',
    '"p20"': '"/sandalwood_showergel.jpg"',
    '"p21"': '"/oud_showergel.jpg"',
    # p22 is Day Cream, no change
    '"p23"': '"/peach_lotion.jpg"',
    '"p24"': '"/kumkumadi_lotion.jpg"'
}

# The structure is:
# id: "pX",
# ...
# image: "/WhatsApp...",
# We can find the id, then the next image line, and replace it.

for p_id, new_img in replacements.items():
    # Regex to find the id line, followed by some lines, followed by the image line
    pattern = r'(id:\s*' + p_id + r',.*?image:\s*)"[^"]+"'
    content = re.sub(pattern, r'\1' + new_img, content, flags=re.DOTALL)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated products.ts")
