from PIL import Image

def remove_white_bg(input_path, output_path, tolerance=230):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        data = img.getdata()

        new_data = []
        for item in data:
            # Check if the pixel is close to white
            if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
                # Change white to transparent
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)

        img.putdata(new_data)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} -> {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process the standalone logo
remove_white_bg(r"C:\Users\Pro\Downloads\logo.jpeg", "public/images/logo.png", 230)
remove_white_bg(r"C:\Users\Pro\Downloads\logo.jpeg", "src/app/icon.png", 230)

# Process the logo with text
remove_white_bg(r"C:\Users\Pro\Downloads\logo_with_text.jpeg", "public/images/logo_with_text.png", 230)
