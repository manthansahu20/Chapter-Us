# Our Story — Om × Alaka

A cinematic, scroll-driven friendship website. Built with plain HTML/CSS/JS, GSAP + ScrollTrigger for animation, and Lenis for smooth scrolling. No build step, no backend — works as a static site straight out of the folder.

## 1. Add your content

Everything content-related lives in **one place**: the `friendshipData` object at the top of `script.js`. You should not need to touch `index.html` for normal edits.

```
script.js
└── const friendshipData = { ... }
```

- **person1 / person2** — already set to Om / Alaka.
- **memories** — Chapter 03 gallery. Each entry needs an `image` path, `date`, `title`, `caption`.
- **chaos** — Chapter 04 inside-joke cards.
- **stats** — Chapter "numbers" section. Use a plain number (it will count up) or text like `"∞"`, `"999+"`, `"100%"`.
- **playlist** — Chapter 05 player. Each entry needs `title`, `artist`, `audio` (mp3 path), `cover` (image path).
- **finalPhotos** — the closing full-screen photo sequence.
- **letter** — the "Things I Never Say" message. Edit the text directly (multi-line is fine).

## 2. Add your photos

Drop your images into `assets/photos/` using the filenames referenced in `friendshipData` (`photo1.jpg`, `photo2.jpg`, …), or point the `image`/`cover` fields at whatever filenames you actually use.

Until a real file exists, the site shows an elegant placeholder tile automatically — nothing breaks, so you can preview the whole site before your photos are in place.

## 3. Music

Already wired up — 6 tracks are in `assets/music/` (`song1.mp3`–`song6.mp3`) and mapped in `friendshipData.playlist` in `script.js`. To swap a track later: replace the mp3 file and update its `title` / `artist` / `audio` path in that array.

## 4. Preview locally

Because the page is fetched with `fetch`-like relative paths, open it through a local server rather than double-clicking the file (otherwise some browsers block local file access):

```bash
cd friendship-story
python3 -m http.server 8000
# then open http://localhost:8000
```

## 5. Deploy to GitHub Pages

1. Push this folder to a GitHub repo (keep `index.html` at the repo root, or in `/docs` if you prefer).
2. Repo → **Settings → Pages** → set the source branch/folder.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## Structure

```
friendship-story/
├── index.html      → all 11 sections, semantic markup, no inline content
├── style.css        → design tokens at the top of the file (colors, type, easing)
├── script.js         → friendshipData config + all animation/interaction logic
├── assets/
│   ├── photos/        → your images go here
│   ├── music/          → your mp3s go here
│   └── icons/
└── README.md
```

## Notes

- Respects `prefers-reduced-motion` — animations are skipped for visitors who've asked for reduced motion at the OS level.
- The gallery, chaos cards, stats, playlist, and final-photo sequence are all generated from `friendshipData` — add or remove entries freely, the layout adapts.
- Color tokens (`--void`, `--navy`, `--blue`, `--warm`, etc.) are declared at the top of `style.css` under `:root` if you want to shift the palette.
