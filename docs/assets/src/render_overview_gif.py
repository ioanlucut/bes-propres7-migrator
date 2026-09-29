#!/usr/bin/env python3
"""Render docs/assets/overview.gif, the animated overview at the top of the README.

Every frame is drawn with Pillow, so the animation is reproducible from this file alone:

    python3 -m pip install pillow
    python3 docs/assets/src/render_overview_gif.py

Fonts are Inter and JetBrains Mono (SIL Open Font License); they are downloaded once into
~/.cache/bes-propres7-migrator/fonts.
"""

from __future__ import annotations

import hashlib
import io
import math
import urllib.request
import zipfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[3]
OUTPUT = ROOT / "docs" / "assets" / "overview.gif"
FONTS_DIR = Path.home() / ".cache" / "bes-propres7-migrator" / "fonts"
INTER_ZIP = "https://github.com/rsms/inter/releases/download/v4.1/Inter-4.1.zip"
JETBRAINS_MONO_ZIP = "https://github.com/JetBrains/JetBrainsMono/releases/download/v2.304/JetBrainsMono-2.304.zip"
ARCHIVE_SHA256 = {
    INTER_ZIP: "9883fdd4a49d4fb66bd8177ba6625ef9a64aa45899767dde3d36aa425756b11e",
    JETBRAINS_MONO_ZIP: "6f6376c6ed2960ea8a963cd7387ec9d76e3f629125bc33d1fdcd7eb7012f7bbf",
}
FONT_SOURCES = {
    "Inter-Regular.ttf": (INTER_ZIP, "extras/ttf/Inter-Regular.ttf"),
    "Inter-SemiBold.ttf": (INTER_ZIP, "extras/ttf/Inter-SemiBold.ttf"),
    "Inter-Bold.ttf": (INTER_ZIP, "extras/ttf/Inter-Bold.ttf"),
    "JetBrainsMono-Regular.ttf": (JETBRAINS_MONO_ZIP, "fonts/ttf/JetBrainsMono-Regular.ttf"),
}

WIDTH, HEIGHT = 1200, 675
FPS = 20

# Colours follow ProPresenter's dark UI and its default group colours.
BG = (21, 23, 28)
PANEL = (31, 35, 43)
BORDER = (48, 54, 66)
TEXT = (236, 238, 243)
MUTED = (150, 158, 173)
ACCENT = (245, 158, 11)
VERSE = (47, 109, 181)
CHORUS = (184, 38, 79)
MACRO = (52, 199, 89)
BAD = (239, 83, 80)
GROUP_COLOURS = {"Blank": BG, "Verse 1": VERSE, "Chorus": CHORUS, "Verse 2": VERSE}


# ---------------------------------------------------------------------------
# Fonts


def ensure_fonts() -> None:
    FONTS_DIR.mkdir(parents=True, exist_ok=True)
    archives: dict[str, zipfile.ZipFile] = {}
    for name, (url, member) in FONT_SOURCES.items():
        target = FONTS_DIR / name
        if target.exists():
            continue
        if url not in archives:
            with urllib.request.urlopen(url) as response:
                data = response.read()
            if hashlib.sha256(data).hexdigest() != ARCHIVE_SHA256[url]:
                raise RuntimeError(f"Checksum mismatch for {url}")
            archives[url] = zipfile.ZipFile(io.BytesIO(data))
        target.write_bytes(archives[url].read(member))


_font_cache: dict[tuple[str, int], ImageFont.FreeTypeFont] = {}


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    key = (name, size)
    if key not in _font_cache:
        _font_cache[key] = ImageFont.truetype(str(FONTS_DIR / name), size)
    return _font_cache[key]


def sans(size: int) -> ImageFont.FreeTypeFont:
    return font("Inter-Regular.ttf", size)


def semibold(size: int) -> ImageFont.FreeTypeFont:
    return font("Inter-SemiBold.ttf", size)


def bold(size: int) -> ImageFont.FreeTypeFont:
    return font("Inter-Bold.ttf", size)


def mono(size: int) -> ImageFont.FreeTypeFont:
    return font("JetBrainsMono-Regular.ttf", size)


# ---------------------------------------------------------------------------
# Drawing helpers


def clamp(value: float, low: float = 0.0, high: float = 1.0) -> float:
    return max(low, min(high, value))


def ease(value: float) -> float:
    value = clamp(value)
    return 4 * value**3 if value < 0.5 else 1 - (-2 * value + 2) ** 3 / 2


def progress(t: float, start: float, duration: float) -> float:
    return ease((t - start) / duration)


def mix(colour: tuple[int, int, int], alpha: float, background: tuple[int, int, int] = BG) -> tuple[int, int, int]:
    alpha = clamp(alpha)
    return tuple(round(b + (c - b) * alpha) for c, b in zip(colour, background))


def text(draw: ImageDraw.ImageDraw, xy: tuple[float, float], value: str, face: ImageFont.FreeTypeFont,
         colour: tuple[int, int, int], anchor: str = "la") -> None:
    draw.text(xy, value, font=face, fill=colour, anchor=anchor)


def document_icon(draw: ImageDraw.ImageDraw, cx: float, cy: float, colour: tuple[int, int, int], bg: tuple[int, int, int]) -> None:
    w, h, fold = 34, 42, 10
    x0, y0 = cx - w / 2, cy - h / 2
    draw.polygon([(x0, y0), (x0 + w - fold, y0), (x0 + w, y0 + fold), (x0 + w, y0 + h), (x0, y0 + h)], outline=colour, width=3)
    draw.line([(x0 + w - fold, y0), (x0 + w - fold, y0 + fold), (x0 + w, y0 + fold)], fill=colour, width=3)
    for i in range(3):
        draw.line([(x0 + 8, y0 + 18 + i * 7), (x0 + w - 8 - (i == 2) * 8, y0 + 18 + i * 7)], fill=colour, width=2)


def gear_icon(draw: ImageDraw.ImageDraw, cx: float, cy: float, colour: tuple[int, int, int], bg: tuple[int, int, int]) -> None:
    for i in range(8):
        angle = i * math.pi / 4
        x, y = cx + math.cos(angle) * 20, cy + math.sin(angle) * 20
        draw.ellipse([x - 5, y - 5, x + 5, y + 5], fill=colour)
    draw.ellipse([cx - 18, cy - 18, cx + 18, cy + 18], fill=colour)
    draw.ellipse([cx - 7, cy - 7, cx + 7, cy + 7], fill=bg)


def braces_icon(draw: ImageDraw.ImageDraw, cx: float, cy: float, colour: tuple[int, int, int], bg: tuple[int, int, int]) -> None:
    text(draw, (cx, cy + 2), "{ }", bold(40), colour, "mm")


def cloud_icon(draw: ImageDraw.ImageDraw, cx: float, cy: float, colour: tuple[int, int, int], bg: tuple[int, int, int]) -> None:
    draw.ellipse([cx - 26, cy - 6, cx - 2, cy + 18], outline=colour, width=3)
    draw.ellipse([cx - 12, cy - 20, cx + 16, cy + 8], outline=colour, width=3)
    draw.ellipse([cx + 4, cy - 6, cx + 28, cy + 18], outline=colour, width=3)
    draw.rectangle([cx - 14, cy + 2, cx + 16, cy + 15], fill=bg)
    draw.line([(cx - 14, cy + 18), (cx + 16, cy + 18)], fill=colour, width=3)


def screen_icon(draw: ImageDraw.ImageDraw, cx: float, cy: float, colour: tuple[int, int, int], bg: tuple[int, int, int]) -> None:
    draw.rounded_rectangle([cx - 28, cy - 20, cx + 28, cy + 14], radius=4, outline=colour, width=3)
    draw.line([(cx, cy + 14), (cx, cy + 22)], fill=colour, width=3)
    draw.line([(cx - 12, cy + 22), (cx + 12, cy + 22)], fill=colour, width=3)
    draw.line([(cx - 16, cy - 8), (cx + 16, cy - 8)], fill=colour, width=2)
    draw.line([(cx - 12, cy), (cx + 12, cy)], fill=colour, width=2)


def cross_icon(draw: ImageDraw.ImageDraw, cx: float, cy: float, colour: tuple[int, int, int]) -> None:
    draw.ellipse([cx - 14, cy - 14, cx + 14, cy + 14], outline=colour, width=3)
    draw.line([(cx - 6, cy - 6), (cx + 6, cy + 6)], fill=colour, width=3)
    draw.line([(cx - 6, cy + 6), (cx + 6, cy - 6)], fill=colour, width=3)


def heading(draw: ImageDraw.ImageDraw, t: float, start: float, eyebrow: str, title: str) -> None:
    alpha = progress(t, start, 0.5)
    text(draw, (60, 52), eyebrow.upper(), semibold(16), mix(ACCENT, alpha))
    text(draw, (60, 78), title, bold(34), mix(TEXT, alpha))


def caption(draw: ImageDraw.ImageDraw, value: str, alpha: float, y: int = 590) -> None:
    text(draw, (WIDTH / 2, y), value, sans(22), mix(MUTED, alpha), "mm")


# ---------------------------------------------------------------------------
# Scenes. Each takes the time since the scene started, in seconds.

PROBLEM_ROWS = [
    "Every typo fixed slide by slide, in the app",
    "Every arrangement built by hand, chorus by chorus",
    "Every change copied onto the presentation Mac",
]


def scene_problem(draw: ImageDraw.ImageDraw, t: float) -> None:
    heading(draw, t, 0, "The problem", "A worship library of ~1,900 songs, kept by hand")
    for index, row in enumerate(PROBLEM_ROWS):
        alpha = progress(t, 0.8 + index * 0.9, 0.5)
        y = 230 + index * 95
        box = [60, y - 38, WIDTH - 60, y + 38]
        draw.rounded_rectangle(box, radius=14, fill=mix(PANEL, alpha), outline=mix(BORDER, alpha), width=2)
        cross_icon(draw, 110, y, mix(BAD, alpha, PANEL if alpha > 0 else BG))
        text(draw, (150, y), row, sans(26), mix(TEXT, alpha, PANEL), "lm")
    caption(draw, "Slow, error-prone, and it drifts between machines.", progress(t, 4.0, 0.6), 575)


PIPELINE = [
    ("Song file", "text in Git", document_icon),
    ("GitHub Actions", "on every merge", gear_icon),
    ("Migrator", "text → protobuf", braces_icon),
    ("Google Drive", "only what changed", cloud_icon),
    ("ProPresenter", "presentation Mac", screen_icon),
]
PIPELINE_CAPTIONS = [
    "A lyric fix is edited in a plain .txt file and merged on GitHub.",
    "The merge triggers the migrator in CI; a deploy takes about 30 seconds.",
    "Each song is parsed and encoded in ProPresenter's native protobuf format.",
    "Only new, changed or renamed songs are uploaded, into a timestamped folder.",
    "A cron job on the presentation Mac moves them into the library.",
]
NODE_W, NODE_H, NODE_GAP, NODE_Y = 184, 164, 45, 250
STAGE_SECONDS = 2.4


def node_x(index: int) -> float:
    total = len(PIPELINE) * NODE_W + (len(PIPELINE) - 1) * NODE_GAP
    return (WIDTH - total) / 2 + index * (NODE_W + NODE_GAP)


def scene_pipeline(draw: ImageDraw.ImageDraw, t: float) -> None:
    heading(draw, t, 0, "The solution: songs as code", "Edit text, merge, and the slides follow")
    intro = progress(t, 0.2, 0.6)
    travel = t - 1.0
    stage = int(clamp(travel / STAGE_SECONDS, 0, len(PIPELINE) - 1))
    within = travel - stage * STAGE_SECONDS
    mid_y = NODE_Y + NODE_H / 2

    for index in range(len(PIPELINE) - 1):
        x0, x1 = node_x(index) + NODE_W, node_x(index + 1)
        draw.line([(x0 + 6, mid_y), (x1 - 6, mid_y)], fill=mix(BORDER, intro), width=4)
        filled = clamp((travel - index * STAGE_SECONDS - 1.2) / 1.2)
        if filled > 0:
            draw.line([(x0 + 6, mid_y), (x0 + 6 + (x1 - x0 - 12) * ease(filled), mid_y)], fill=ACCENT, width=4)

    for index, (title, subtitle, icon) in enumerate(PIPELINE):
        x = node_x(index)
        reached = travel >= index * STAGE_SECONDS
        active = reached and stage == index
        border = ACCENT if active else (mix(ACCENT, 0.45, BORDER) if reached else BORDER)
        draw.rounded_rectangle([x, NODE_Y, x + NODE_W, NODE_Y + NODE_H], radius=18,
                               fill=mix(PANEL, intro), outline=mix(border, intro), width=3 if active else 2)
        icon_colour = mix(ACCENT if reached else MUTED, intro, PANEL)
        icon(draw, x + NODE_W / 2, NODE_Y + 50, icon_colour, PANEL)
        text(draw, (x + NODE_W / 2, NODE_Y + 104), title, semibold(20), mix(TEXT, intro, PANEL), "mm")
        text(draw, (x + NODE_W / 2, NODE_Y + 134), subtitle, sans(16), mix(MUTED, intro, PANEL), "mm")

    if travel >= 0:
        moving = clamp((within - 1.2) / 1.2) if stage < len(PIPELINE) - 1 else 0
        x = node_x(stage) + NODE_W / 2 + (NODE_W + NODE_GAP) * ease(moving)
        is_pro = stage > 2 or (stage == 2 and moving > 0.5)
        label = "blessed-assurance.pro" if is_pro else "blessed-assurance.txt"
        colour = ACCENT if is_pro else TEXT
        face = mono(16)
        width = draw.textlength(label, font=face) + 28
        tip = x
        x = clamp(x, node_x(0) + width / 2, node_x(len(PIPELINE) - 1) + NODE_W - width / 2)
        top = NODE_Y - 58
        draw.rounded_rectangle([x - width / 2, top, x + width / 2, top + 34], radius=17, fill=PANEL, outline=colour, width=2)
        text(draw, (x, top + 17), label, face, colour, "mm")
        draw.polygon([(tip - 7, top + 34), (tip + 7, top + 34), (tip, top + 42)], fill=colour)

        caption_alpha = clamp(within / 0.4) * (1 - clamp((within - (STAGE_SECONDS - 0.3)) / 0.3) if stage < len(PIPELINE) - 1 else 1)
        text(draw, (WIDTH / 2, 492), f"{stage + 1} / {len(PIPELINE)}", semibold(16), mix(ACCENT, caption_alpha))
        caption(draw, PIPELINE_CAPTIONS[stage], caption_alpha, 540)


SONG_LINES = [
    ("[title]", MUTED),
    ("Blessed Assurance {id: {…}, contentHash: {…}}", TEXT),
    ("", TEXT),
    ("[sequence]", MUTED),
    ("v1,c,v2,c", ACCENT),
    ("", TEXT),
    ("[v1]", MUTED),
    ("Blessed assurance, Jesus is mine!", TEXT),
    ("[c]", MUTED),
    ("This is my story, this is my song,", TEXT),
    ("[v2]", MUTED),
    ("Perfect submission, perfect delight,", TEXT),
]
GROUPS = ["Blank", "Verse 1", "Chorus", "Verse 2"]
ARRANGEMENT = ["Blank", "Verse 1", "Chorus", "Verse 2", "Chorus"]
SEQUENCE_TOKENS = [None, "v1", "c", "v2", "c"]


def pill(draw: ImageDraw.ImageDraw, x: float, y: float, label: str, alpha: float) -> float:
    face = semibold(16)
    width = draw.textlength(label, font=face) + 24
    colour = GROUP_COLOURS[label]
    outline = TEXT if label == "Blank" else colour
    draw.rounded_rectangle([x, y, x + width, y + 32], radius=6, fill=mix(colour, alpha, PANEL), outline=mix(outline, alpha, PANEL), width=2)
    text(draw, (x + width / 2, y + 16), label, face, mix(TEXT, alpha, PANEL), "mm")
    return width


def slide(draw: ImageDraw.ImageDraw, x: float, y: float, label: str, alpha: float) -> None:
    w, h = 98, 74
    colour = GROUP_COLOURS[label]
    draw.rounded_rectangle([x, y, x + w, y + h], radius=6, fill=mix((12, 13, 16), alpha, PANEL), outline=mix(BORDER, alpha, PANEL), width=2)
    draw.rectangle([x + 2, y + h - 18, x + w - 2, y + h - 2], fill=mix(colour if label != "Blank" else (0, 0, 0), alpha, PANEL))
    text(draw, (x + 8, y + h - 10), label, semibold(11), mix(TEXT, alpha, PANEL), "lm")
    if label == "Blank":
        draw.rounded_rectangle([x + 6, y + 6, x + 22, y + 22], radius=3, outline=mix(MACRO, alpha, PANEL), width=2)
        text(draw, (x + 14, y + 14), "M", bold(11), mix(MACRO, alpha, PANEL), "mm")
    else:
        for i, length in enumerate((64, 56, 60)):
            left = x + (w - length) / 2
            draw.rounded_rectangle([left, y + 16 + i * 10, left + length, y + 20 + i * 10], radius=2, fill=mix((210, 214, 222), alpha, PANEL))


def scene_transform(draw: ImageDraw.ImageDraw, t: float) -> None:
    heading(draw, t, 0, "What the migrator writes", "Plain text in, a ready-to-play presentation out")
    intro = progress(t, 0.2, 0.6)
    left, top = 60, 140
    draw.rounded_rectangle([left, top, left + 500, top + 400], radius=16, fill=mix(PANEL, intro), outline=mix(BORDER, intro), width=2)
    text(draw, (left + 22, top + 20), "blessed-assurance.txt", semibold(15), mix(MUTED, intro, PANEL))
    step = int(clamp((t - 1.6) / 0.9, -1, len(ARRANGEMENT) - 1)) if t >= 1.6 else -1
    active_token = SEQUENCE_TOKENS[step] if step >= 0 else None
    occurrence = ARRANGEMENT[: step + 1].count(ARRANGEMENT[step]) if step >= 0 else 0
    for index, (line, colour) in enumerate(SONG_LINES):
        y = top + 58 + index * 27
        if line == "v1,c,v2,c" and active_token:
            tokens = line.split(",")
            cursor = left + 22
            seen = 0
            for token_index, token in enumerate(tokens):
                label = token + ("," if token_index < len(tokens) - 1 else "")
                width = draw.textlength(token, font=mono(16))
                if token == active_token:
                    seen += 1
                    if seen == occurrence:
                        draw.rounded_rectangle([cursor - 4, y - 3, cursor + width + 4, y + 23], radius=4, fill=mix(ACCENT, 0.25, PANEL), outline=ACCENT, width=2)
                text(draw, (cursor, y), label, mono(16), mix(colour, intro, PANEL))
                cursor += draw.textlength(label, font=mono(16))
        else:
            text(draw, (left + 22, y), line, mono(16), mix(colour, intro, PANEL))

    right = left + 520
    draw.rounded_rectangle([right, top, WIDTH - 60, top + 400], radius=16, fill=mix(PANEL, intro), outline=mix(BORDER, intro), width=2)
    text(draw, (right + 22, top + 20), "ProPresenter 7", semibold(15), mix(MUTED, intro, PANEL))
    text(draw, (right + 22, top + 66), "Groups", sans(15), mix(MUTED, intro, PANEL), "lm")
    x = right + 120
    for index, label in enumerate(GROUPS):
        x += pill(draw, x, top + 50, label, progress(t, 0.6 + index * 0.12, 0.35)) + 8
    text(draw, (right + 22, top + 116), "BES", semibold(15), mix(TEXT, intro, PANEL), "lm")
    text(draw, (right + 22, top + 136), "arrangement", sans(12), mix(MUTED, intro, PANEL), "lm")
    x = right + 120
    for index, label in enumerate(ARRANGEMENT):
        alpha = progress(t, 1.6 + index * 0.9, 0.35)
        x += pill(draw, x, top + 104, label, alpha) + 8
        slide(draw, right + 22 + index * 108, top + 180, label, alpha)

    macro_alpha = progress(t, 1.9, 0.4)
    text(draw, (right + 22, top + 290), "▲ runs the setup macro", sans(15), mix(MACRO, macro_alpha, PANEL))
    chorus_alpha = progress(t, 5.3, 0.4)
    text(draw, (right + 22, top + 330), "The chorus is defined once and played twice.", sans(16), mix(TEXT, chorus_alpha, PANEL))
    text(draw, (right + 22, top + 356), "The operator only ever presses →", sans(16), mix(MUTED, chorus_alpha, PANEL))
    caption(draw, "Slides, groups, arrangement, CCLI data and macro, straight from the text file.", progress(t, 6.0, 0.5), 590)


def scene_diff(draw: ImageDraw.ImageDraw, t: float) -> None:
    heading(draw, t, 0, "Incremental deploys", "Only what changed gets shipped")
    cards = [
        ("songs parsed", 1935, "every deploy reads the whole library"),
        ("song changed", 1, "found by id and content hash"),
        (".pro uploaded", 1, "into a new timestamped folder"),
    ]
    width, gap, top = 330, 45, 210
    start = (WIDTH - 3 * width - 2 * gap) / 2
    for index, (label, target, note) in enumerate(cards):
        appear = 0.5 + index * 1.1
        alpha = progress(t, appear, 0.4)
        count = round(target * progress(t, appear, 0.8))
        x = start + index * (width + gap)
        highlight = index == 2
        draw.rounded_rectangle([x, top, x + width, top + 220], radius=18, fill=mix(PANEL, alpha),
                               outline=mix(ACCENT if highlight else BORDER, alpha), width=3 if highlight else 2)
        text(draw, (x + width / 2, top + 80), f"{count:,}", bold(72), mix(ACCENT if highlight else TEXT, alpha, PANEL), "mm")
        text(draw, (x + width / 2, top + 145), label, semibold(22), mix(TEXT, alpha, PANEL), "mm")
        text(draw, (x + width / 2, top + 180), note, sans(16), mix(MUTED, alpha, PANEL), "mm")
        if index < 2:
            arrow_alpha = progress(t, appear + 0.6, 0.4)
            ax = x + width + gap / 2
            draw.polygon([(ax - 8, top + 98), (ax + 10, top + 110), (ax - 8, top + 122)], fill=mix(MUTED, arrow_alpha))
    caption(draw, "Example: a one-line lyric fix ships a single file, in about 30 seconds.", progress(t, 3.6, 0.5), 540)


def scene_end(draw: ImageDraw.ImageDraw, t: float) -> None:
    text(draw, (WIDTH / 2, 135), "SONGS AS CODE", semibold(20), mix(ACCENT, progress(t, 0.0, 0.5)), "mm")
    lines = [("Edit a text file.", TEXT), ("Merge.", TEXT), ("It's in ProPresenter.", ACCENT)]
    for index, (line, colour) in enumerate(lines):
        alpha = progress(t, 0.2 + index * 0.7, 0.5)
        text(draw, (WIDTH / 2, 220 + index * 80), line, bold(54), mix(colour, alpha), "mm")
    text(draw, (WIDTH / 2, 520), "github.com/ioanlucut/bes-propres7-migrator", mono(20), mix(MUTED, progress(t, 2.4, 0.5)), "mm")


SCENES = [
    (scene_problem, 6.0),
    (scene_pipeline, 1.0 + STAGE_SECONDS * len(PIPELINE) + 0.8),
    (scene_transform, 8.5),
    (scene_diff, 6.0),
    (scene_end, 4.5),
]
FADE_SECONDS = 0.35


# ---------------------------------------------------------------------------
# Rendering


def render_frames() -> list[Image.Image]:
    frames = []
    for scene, duration in SCENES:
        for index in range(round(duration * FPS)):
            t = index / FPS
            image = Image.new("RGB", (WIDTH, HEIGHT), BG)
            scene(ImageDraw.Draw(image), t)
            fade = min(clamp(t / FADE_SECONDS), clamp((duration - t) / FADE_SECONDS))
            if fade < 1:
                image = Image.blend(Image.new("RGB", (WIDTH, HEIGHT), BG), image, ease(fade))
            frames.append(image)
    return frames


def to_gif(frames: list[Image.Image]) -> None:
    # One shared palette, sampled across the animation, keeps colours stable and the file small.
    sample = Image.new("RGB", (WIDTH, HEIGHT * 6))
    for index, frame in enumerate(frames[:: max(1, len(frames) // 6)][:6]):
        sample.paste(frame, (0, index * HEIGHT))
    palette = sample.quantize(colors=128, method=Image.Quantize.MEDIANCUT)

    paletted, durations = [], []
    frame_ms = round(1000 / FPS)
    for frame in frames:
        quantized = frame.quantize(palette=palette, dither=Image.Dither.NONE)
        if paletted and quantized.tobytes() == paletted[-1].tobytes():
            durations[-1] += frame_ms
            continue
        paletted.append(quantized)
        durations.append(frame_ms)

    durations[-1] += 1500
    paletted[0].save(OUTPUT, save_all=True, append_images=paletted[1:], duration=durations, loop=0, optimize=True, disposal=1)
    print(f"{OUTPUT.relative_to(ROOT)}: {len(paletted)} frames, {sum(durations) / 1000:.1f} s, {OUTPUT.stat().st_size / 1e6:.2f} MB")


if __name__ == "__main__":
    ensure_fonts()
    to_gif(render_frames())
