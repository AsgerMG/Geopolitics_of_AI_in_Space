# The Next Frontier of AI Isn't a Model. It's an Orbit.

## Sciences Po — course hub submission (Group 2)

This directory is the **final static site** for Group 2, intended for the class repository  
[**AABK6/geopolitics-ai-scpo-hub**](https://github.com/AABK6/geopolitics-ai-scpo-hub).

| Requirement | This project |
| --- | --- |
| Entry file | **`index.html`** (in this folder) |
| Build step | **None** — plain HTML, CSS, and JavaScript (ES modules). No React/Vue, no `npm run build`, no `package.json` in this folder. |
| Self-contained | All assets under this folder. Imports stay inside `projects/group-2/` (e.g. `scripts/` → `content/` are relative **within** the sandbox, not `../` out of the hub). |
| Pull Request | **Only** change `projects/group-2/` in the hub — the hub’s automation rejects PRs that touch `shared/`, `primer/`, or other groups. |

### Submitting via GitHub (fork → PR)

Follow the [official student instructions](https://github.com/AABK6/geopolitics-ai-scpo-hub#instructions-for-students-publishing-your-group-project) (Option B, “Builder” method) in the hub `README.md`. Summary:

1. **Fork** [geopolitics-ai-scpo-hub](https://github.com/AABK6/geopolitics-ai-scpo-hub) on GitHub, then clone your fork.
2. Copy or merge this **entire** folder into your fork as **`projects/group-2/`** (so `index.html` lives at `projects/group-2/index.html`).
3. Create a branch, e.g. `group-2-final-submission`.
4. **Stage only your sandbox:**  
   `git add projects/group-2/`
5. Commit and push the branch, then open a **Pull Request** from your fork to **`AABK6/geopolitics-ai-scpo-hub:main`**.

After merge, GitHub Pages rebuilds; the 3D hub can load your project from `projects/group-2/index.html`.

### Local preview (full hub)

From the **repository root** of a cloned `geopolitics-ai-scpo-hub`:

```bash
python3 -m http.server 8000
# open http://localhost:8000/projects/group-2/
```

### Vercel (separate team preview)

Point the Vercel project at this app’s static root (e.g. this folder if you only deploy the op-ed), set **Build Command** empty and **Output** to this folder, or use “Other / static” with no build.

---

## What this project is

An interactive, scroll-driven op-ed on the geopolitics of AI and data centres in space. The reader does not only read: they **ascend** — from a launch pad through low Earth orbit, past geostationary, and out into deep space. Each band maps to a talking point. The background, stars, Earth, and rocket (then satellite cluster) follow scroll position.

## Quick start (this folder alone)

```bash
cd projects/group-2
python3 -m http.server 8080
# open http://localhost:8080
```

Or: `npx serve .` from this directory.

> ES modules need `http://` or `https://` in most browsers; if `file://` shows a blank page, use a local server.

## Narrative map

| Band | Scene | Topic |
| --- | --- | --- |
| Liftoff | Hero | Hook, intro video |
| Act I | Why space, why now | Case for orbital compute |
| Gallery | Pinned interlude | Starcloud / visuals |
| Act II | Actors | US, China, EU, private sector |
| Act III | Governance | Treaties, gaps, matrix |
| Act IV | Futures | Scenarios, open questions, closer |

## File layout

```
projects/group-2/
  index.html              # entry — single page + inline SVG stage
  styles/                 # main, stage, scenes
  scripts/                # main.js, stage.js, util/, scenes/
  content/
    copy.js               # all user-facing text
    sources.md            # citations
  assets/                 # images, video (intro.mp4, etc.)
  README.md
  LICENSE
  .gitignore
```

## Editing content

All strings live in **`content/copy.js`**. Save and refresh the browser.

## Accessibility

- `prefers-reduced-motion` respected.
- Skip link to a plain-text version at the top of the page.
- Content is real DOM, selectable and indexable.

## Browser support

Recent Chrome, Safari, Firefox. Needs ES modules and CSS custom properties.

## Licence

MIT. See `LICENSE`.
