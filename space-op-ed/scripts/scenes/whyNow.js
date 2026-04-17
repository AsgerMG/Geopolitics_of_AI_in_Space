// Scene 1 — Why Space, Why Now.
// Four pillars reveal in sequence as sub-progress advances.

export function createWhyNowScene(el) {
  const pillars = Array.from(el.querySelectorAll(".pillar"));
  pillars.forEach((p, i) => p.style.setProperty("--pillar-delay", i));

  const counter = el.querySelector(".counter-panel");

  return {
    update(sub) {
      // Pillars appear as sub climbs from 0.12 to 0.75
      pillars.forEach((p, i) => {
        const threshold = 0.1 + i * 0.12;
        p.classList.toggle("is-visible", sub > threshold);
      });
      if (counter) {
        counter.classList.toggle("is-visible", sub > 0.72);
        counter.style.opacity = sub > 0.72 ? "1" : "0";
        counter.style.transform = sub > 0.72 ? "translateY(0)" : "translateY(16px)";
        counter.style.transition = "opacity 360ms var(--ease-out), transform 400ms var(--ease-out)";
      }
    },
  };
}
