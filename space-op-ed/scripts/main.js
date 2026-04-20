// Entry point.
//
// Responsibilities:
//   1. Bind copy into the DOM from content/copy.js (declarative templates).
//   2. Build the text-only fallback for reduced-motion + screen readers.
//   3. Boot the cosmic stage and the per-scene controllers.
//   4. Wire the scroll engine → stage + scenes on every tick.
//   5. Respect prefers-reduced-motion.

import { copy } from "../content/copy.js";
import { ScrollEngine } from "./util/scroll.js";
import { prefersReducedMotion, onReducedMotionChange } from "./util/reducedMotion.js";
import { clamp, smoothstep, remap } from "./util/lerp.js";
import { Stage } from "./stage.js";
import { createLiftoffScene } from "./scenes/liftoff.js";
import { createWhyNowScene } from "./scenes/whyNow.js";
import { createActorsScene } from "./scenes/actors.js";
import { createGovernanceScene } from "./scenes/governance.js";
import { createFuturesScene } from "./scenes/futures.js";

// ---------- Copy binding ----------

function resolvePath(obj, path) {
  return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

function bindCopy(root, data) {
  // Simple [data-bind] text fills
  root.querySelectorAll("[data-bind]").forEach((el) => {
    const val = resolvePath(data, el.dataset.bind);
    if (typeof val === "string") el.textContent = val;
  });

  // [data-bind-list] with a child <template data-template-id="X">
  root.querySelectorAll("[data-bind-list]").forEach((container) => {
    const list = resolvePath(data, container.dataset.bindList);
    if (!Array.isArray(list)) return;
    const tplId = container.dataset.template;
    const tpl = container.querySelector(`template[data-template-id="${tplId}"]`);
    if (!tpl) return;

    // Remove any previously rendered items (keep the <template>)
    Array.from(container.children).forEach((c) => {
      if (c.tagName !== "TEMPLATE") c.remove();
    });

    list.forEach((item) => {
      const clone = tpl.content.firstElementChild.cloneNode(true);

      // data-field="self" → use the item value directly
      clone.querySelectorAll("[data-field]").forEach((fEl) => {
        const key = fEl.dataset.field;
        const v = key === "self" ? item : item?.[key];
        if (typeof v === "string") fEl.textContent = v;
      });

      // data-field-list="projects" → build <li>s from item[projects]
      clone.querySelectorAll("[data-field-list]").forEach((fEl) => {
        const key = fEl.dataset.fieldList;
        const arr = item?.[key];
        if (!Array.isArray(arr)) return;
        fEl.innerHTML = "";
        arr.forEach((v) => {
          const li = document.createElement("li");
          li.textContent = String(v);
          fEl.appendChild(li);
        });
      });

      // If the template root itself has data-field, treat the item as that value
      if (clone.hasAttribute("data-field") && clone.dataset.field === "self") {
        clone.textContent = String(item);
      }

      container.appendChild(clone);
    });
  });
}

// ---------- Text fallback ----------

function buildTextFallback(data) {
  const host = document.querySelector("[data-text-fallback]");
  if (!host) return;

  const h = (tag, content, cls) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (typeof content === "string") el.textContent = content;
    return el;
  };

  const sections = [
    {
      heading: data.liftoff.kicker,
      title: data.liftoff.title.replace(/\n/g, " "),
      body: data.liftoff.subtitle,
    },
    {
      heading: data.whyNow.heading,
      body: data.whyNow.lede,
      items: data.whyNow.pillars.map((p) => `${p.title} — ${p.body}`),
      counter: data.whyNow.counter,
    },
    {
      heading: data.actors.heading,
      body: data.actors.lede,
      items: data.actors.cards.map(
        (c) => `${c.actor}: ${c.stance} Projects: ${c.projects.join("; ")}. Wants: ${c.wants}`
      ),
    },
    {
      heading: data.governance.heading,
      body: data.governance.lede,
      items: data.governance.gaps.map((g) => `${g.title} — ${g.body}`),
      closer: data.governance.closer,
    },
    {
      heading: data.futures.heading,
      body: data.futures.lede,
      items: data.futures.scenarios.map((s) => `${s.title} — ${s.body}`),
      questions: data.futures.openQuestions.items,
      closer: `${data.futures.closer.line} ${data.futures.closer.cta}`,
    },
  ];

  sections.forEach((s) => {
    if (s.heading) host.appendChild(h("h3", s.heading));
    if (s.title) host.appendChild(h("p", s.title));
    if (s.body) host.appendChild(h("p", s.body));
    if (s.items) {
      const ul = document.createElement("ul");
      s.items.forEach((i) => ul.appendChild(h("li", i)));
      host.appendChild(ul);
    }
    if (s.questions) {
      const ol = document.createElement("ol");
      s.questions.forEach((q) => ol.appendChild(h("li", q)));
      host.appendChild(ol);
    }
    if (s.counter) host.appendChild(h("p", s.counter));
    if (s.closer) host.appendChild(h("p", s.closer));
  });

  document.getElementById("text-version").hidden = false;
}

// ---------- Boot ----------

function boot() {
  // 1. Bind copy before anything else reads the DOM
  bindCopy(document, copy);

  // Meta title from copy
  document.title = copy.meta.title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && copy.meta.description) descMeta.setAttribute("content", copy.meta.description);

  // 2. Build text fallback (always present, revealed via skip link)
  buildTextFallback(copy);

  // 3. If reduced motion, stop here — the linear DOM order is already readable.
  if (prefersReducedMotion()) {
    document.body.classList.add("reduced-motion");
    return;
  }

  // 4. Boot the stage
  const stageEl = document.querySelector(".stage");
  const canvas = document.querySelector(".starfield");
  const rocket = document.querySelector(".rocket");
  const hud = document.querySelector(".hud-altitude");
  const launchpad = document.querySelector(".launchpad");
  const orbitsGroup = document.querySelector(".sats");

  const stage = new Stage({
    root: document.documentElement,
    canvas,
    rocket,
    hud,
    hint: null,
    launchpad,
    orbitsGroup,
  });

  // 5. Scene controllers
  const sceneDefs = [
    { id: "liftoff",    create: createLiftoffScene },
    { id: "whyNow",     create: createWhyNowScene },
    { id: "actors",     create: createActorsScene },
    { id: "governance", create: createGovernanceScene },
    { id: "futures",    create: createFuturesScene },
  ];

  const sceneEls = sceneDefs.map(({ id, create }) => {
    const el = document.querySelector(`[data-scene="${id}"]`);
    const [a, b] = el.dataset.range.split(",").map(Number);
    return { id, el, range: [a, b], ctrl: create(el) };
  });

  // Also cache the scene-inner for the base fade
  for (const s of sceneEls) {
    s.inner = s.el.querySelector(".scene-inner");
  }


  // 6. Scroll engine
  const track = document.getElementById("track");

  // Narrow crossfade window straddling each scene boundary (as a fraction
  // of GLOBAL progress). A scene stays at full opacity for its entire
  // range — only the ~1.5% of scroll right around a boundary is used to
  // hand off to the next scene. This keeps the headline stable for the
  // whole time the reader is inside a scene.
  const FADE = 0.015;

  const engine = new ScrollEngine({
    track,
    scenes: sceneEls.map(({ id, el, range }) => ({ id, el, range })),
    onTick: ({ progress, perScene }) => {
      stage.update(progress);
      for (let i = 0; i < sceneEls.length; i++) {
        const s = sceneEls[i];
        const sub = perScene[i].sub;

        if (s.id === "liftoff") {
          // Liftoff owns its own opacity so the masthead is visible at load
          // and only fades out as the reader enters Act I.
          const [, end] = s.range;
          const fadeOut = 1 - smoothstep(
            remap(progress, end - FADE, end + FADE, 0, 1)
          );
          if (s.inner) s.inner.style.setProperty("--scene-active", fadeOut.toFixed(3));
        } else {
          const [a, b] = s.range;
          const fadeIn = smoothstep(remap(progress, a - FADE, a + FADE, 0, 1));
          const fadeOut = 1 - smoothstep(remap(progress, b - FADE, b + FADE, 0, 1));
          const active = clamp(fadeIn * fadeOut, 0, 1);
          if (s.inner) s.inner.style.setProperty("--scene-active", active.toFixed(3));
        }

        s.ctrl.update(sub, progress);
      }
    },
  });

  // 7. React to user toggling reduced-motion mid-session
  onReducedMotionChange((reduce) => {
    if (reduce) window.location.reload();
  });

  // Expose for debugging in the console
  if (typeof window !== "undefined") {
    window.__opEd = { stage, engine, copy };
  }
}

// Run on DOM ready (works for `defer`/`module` loading too)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
