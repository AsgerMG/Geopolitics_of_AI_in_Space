// Scene 1 — Why Space, Why Now.
// Four pillars reveal in sequence as sub-progress advances.

export function createWhyNowScene(el) {
  const pillars = Array.from(el.querySelectorAll(".pillar"));
  pillars.forEach((p, i) => p.style.setProperty("--pillar-delay", i));

  const counter = el.querySelector(".counter-panel");

  // Initial state for the counter (inline since it isn't in the cards list)
  if (counter) {
    counter.style.opacity = "0";
    counter.style.transform = "translateY(12px)";
    counter.style.transition =
      "opacity 420ms var(--ease-out), transform 460ms var(--ease-out)";
  }

  return {
    update(sub) {
      // All four pillars reveal between sub 0.05 and 0.45 — the rest of the
      // scene's range is the "hold" phase where the reader settles in with
      // a stable layout.
      pillars.forEach((p, i) => {
        const threshold = 0.05 + i * 0.1;
        p.classList.toggle("is-visible", sub > threshold);
      });
      if (counter) {
        const show = sub > 0.5;
        counter.style.opacity = show ? "1" : "0";
        counter.style.transform = show ? "translateY(0)" : "translateY(12px)";
      }
    },
  };
}
