// Scene 2 — Actors and Strategy.
// Four actor cards (US, CN, EU, Private) reveal as sub-progress advances.

export function createActorsScene(el) {
  const cards = Array.from(el.querySelectorAll(".actor-card"));
  cards.forEach((c, i) => c.style.setProperty("--actor-delay", i));

  return {
    update(sub) {
      // All four cards reveal in the first 40% of the scene range; the
      // remaining 60% is a stable "reading hold" phase.
      cards.forEach((c, i) => {
        const threshold = 0.05 + i * 0.1;
        c.classList.toggle("is-visible", sub > threshold);
      });
    },
  };
}
