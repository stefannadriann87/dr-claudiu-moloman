#!/usr/bin/env python3
from pathlib import Path

from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
SAGE = (47, 93, 80, 255)
CREAM = (247, 243, 235, 255)
CROSS = (197, 106, 60, 255)


def rotated_ellipse(canvas: Image.Image, cx: float, cy: float, rx: float, ry: float, angle: float) -> None:
    w, h = int(rx * 2) + 4, int(ry * 2) + 4
    pad = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(pad)
    draw.ellipse((2, 2, w - 3, h - 3), fill=CREAM)
    pad = pad.rotate(angle, resample=Image.Resampling.BICUBIC, expand=True)
    canvas.alpha_composite(pad, (int(cx - pad.width / 2), int(cy - pad.height / 2)))


def draw_logo(size: int) -> Image.Image:
    scale = size / 64
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    draw.ellipse((0, 0, size - 1, size - 1), fill=SAGE)

    rotated_ellipse(img, 17 * scale, 21 * scale, 6.2 * scale, 7.6 * scale, 24)
    rotated_ellipse(img, 26 * scale, 14.4 * scale, 5.8 * scale, 7.2 * scale, 7)
    rotated_ellipse(img, 38 * scale, 14.4 * scale, 5.8 * scale, 7.2 * scale, -7)
    rotated_ellipse(img, 47 * scale, 21 * scale, 6.2 * scale, 7.6 * scale, -24)

    pad = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    pad_draw = ImageDraw.Draw(pad)
    pad_draw.ellipse(
        (int(16.6 * scale), int(25 * scale), int(47.4 * scale), int(49 * scale)),
        fill=CREAM,
    )
    img.alpha_composite(pad)

    draw = ImageDraw.Draw(img)
    x1, y1 = 29.1 * scale, 31.4 * scale
    x2, y2 = 34.9 * scale, 46.6 * scale
    hx1, hy1 = 24.4 * scale, 36.1 * scale
    hx2, hy2 = 39.6 * scale, 41.9 * scale
    radius = max(1, int(1.4 * scale))
    draw.rounded_rectangle((x1, y1, x2, y2), radius=radius, fill=CROSS)
    draw.rounded_rectangle((hx1, hy1, hx2, hy2), radius=radius, fill=CROSS)
    return img


def save_ico(path: Path) -> None:
    sizes = [(16, 16), (32, 32), (48, 48)]
    draw_logo(48).convert("RGBA").save(path, format="ICO", sizes=sizes)


def main() -> None:
    app = ROOT / "src" / "app"
    public = ROOT / "public"
    save_ico(app / "favicon.ico")
    save_ico(public / "favicon.ico")
    draw_logo(32).save(app / "icon.png")
    draw_logo(180).save(app / "apple-icon.png")
    draw_logo(192).save(public / "icon-192.png")
    draw_logo(512).save(public / "icon-512.png")
    (public / "favicon.svg").write_text((public / "logo.svg").read_text(), encoding="utf-8")
    (app / "icon.svg").write_text((public / "logo.svg").read_text(), encoding="utf-8")
    print("Favicon files written.")


if __name__ == "__main__":
    main()
