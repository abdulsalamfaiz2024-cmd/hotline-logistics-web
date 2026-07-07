import os
from PIL import Image

def compress_image(file_path, max_width=1600, quality=80):
    try:
        initial_size = os.path.getsize(file_path)
        img = Image.open(file_path)
        
        # Determine max width based on image purpose
        filename = os.path.basename(file_path).lower()
        if "logo" in filename:
            max_width = 400
        elif any(x in filename for x in ["freight", "service", "solutions", "warehouse"]):
            max_width = 800
            
        # Resize if width exceeds max_width
        width, height = img.size
        if width > max_width:
            new_height = int(height * (max_width / width))
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
        # Save compressed version
        ext = os.path.splitext(file_path)[1].lower()
        if ext in [".jpg", ".jpeg"]:
            img.save(file_path, "JPEG", quality=quality, optimize=True)
        elif ext == ".png":
            # If PNG is huge and doesn't need alpha channel, convert to RGB to save as JPEG-like compression
            # But since we want to keep the extension (.png) to avoid code changes, we compress it as PNG
            if img.mode in ("RGBA", "LA"):
                # Optimize PNG with alpha channel
                img.save(file_path, "PNG", optimize=True)
            else:
                # Quantize PNG without alpha channel (reduces size by 70-80%)
                img = img.convert("P", palette=Image.Palette.ADAPTIVE, colors=256)
                img.save(file_path, "PNG", optimize=True)
                
        final_size = os.path.getsize(file_path)
        savings = (initial_size - final_size) / 1024
        percent = (initial_size - final_size) / initial_size * 100 if initial_size > 0 else 0
        print(f"Compressed: {filename} | {initial_size/1024:.1f}KB -> {final_size/1024:.1f}KB (-{savings:.1f}KB, {percent:.1f}%)")
    except Exception as e:
        print(f"Error compressing {file_path}: {e}")

def main():
    images_dir = "public/images"
    if not os.path.exists(images_dir):
        print(f"Images directory {images_dir} does not exist!")
        return
        
    print("Starting image compression...")
    for filename in os.listdir(images_dir):
        file_path = os.path.join(images_dir, filename)
        if os.path.isfile(file_path) and os.path.splitext(filename)[1].lower() in [".jpg", ".jpeg", ".png"]:
            compress_image(file_path)
    print("Image compression complete!")

if __name__ == "__main__":
    main()
