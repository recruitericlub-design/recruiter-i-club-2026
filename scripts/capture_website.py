import os
import time
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"e:\сайт Recruiter I Club\hirex-portal-2026\screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_URL = "https://recruiter-i-club-2026.vercel.app"

PAGES = [
    {"name": "homepage", "url": BASE_URL},
    {"name": "about", "url": f"{BASE_URL}/about"},
]

def capture_all():
    print(f"Starting screenshot capture to {OUTPUT_DIR}...")
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="msedge", headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 900},
            device_scale_factor=1.25
        )
        page = context.new_page()

        for page_info in PAGES:
            name = page_info["name"]
            url = page_info["url"]
            print(f"Capturing {name} from {url}...")
            try:
                page.goto(url, wait_until="networkidle", timeout=60000)
                
                # Auto-scroll to trigger lazy loading of all images
                page.evaluate("""
                    async () => {
                        await new Promise((resolve) => {
                            let totalHeight = 0;
                            let distance = 400;
                            let timer = setInterval(() => {
                                let scrollHeight = document.body.scrollHeight;
                                window.scrollBy(0, distance);
                                totalHeight += distance;
                                if(totalHeight >= scrollHeight){
                                    clearInterval(timer);
                                    window.scrollTo(0, 0);
                                    resolve();
                                }
                            }, 100);
                        });
                    }
                """)
                time.sleep(3) # Wait for all lazy images to render
                
                # Full page screenshot
                full_path = os.path.join(OUTPUT_DIR, f"{name}_full.png")
                page.screenshot(path=full_path, full_page=True)
                print(f"  -> Saved full screenshot: {full_path}")

                slice_full_image(full_path, name)

            except Exception as e:
                print(f"  Error capturing {name}: {e}")

        browser.close()
    print("Capture and slicing complete!")

def slice_full_image(image_path, prefix):
    try:
        im = Image.open(image_path)
        w, h = im.size
        slice_height = 1125
        overlap = 100
        step = slice_height - overlap
        
        slice_num = 1
        y = 0
        while y < h:
            y_end = min(y + slice_height, h)
            box = (0, y, w, y_end)
            cropped = im.crop(box)
            slice_filename = os.path.join(OUTPUT_DIR, f"{prefix}_slice_{slice_num:02d}.jpg")
            cropped.convert("RGB").save(slice_filename, "JPEG", quality=90)
            print(f"    Saved slice {slice_num:02d}: {slice_filename}")
            
            if y_end >= h:
                break
            y += step
            slice_num += 1

    except Exception as e:
        print(f"  Error slicing {image_path}: {e}")

if __name__ == "__main__":
    capture_all()
