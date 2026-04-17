// Scene 2 — Actors and Strategy.
// Four actor cards (US, CN, EU, Private) reveal as sub-progress advances.

export function createActorsScene(el) {
  const cards = Array.from(el.querySelectorAll(".actor-card"));
  cards.forEach((c, i) => c.style.setProperty("--actor-delay", i));

  return {
    update(sub) {
      cards.forEach((c, i) => {
        const threshold = 0.08 + i * 0.14;
        c.classList.toggle("is-visible", sub > threshold);
      });
    },
  };
}
