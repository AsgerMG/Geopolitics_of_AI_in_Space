// Scene 4 — If This Plays Out.
// Scenario grid reveals, open questions panel follows, then the closer.

export function createFuturesScene(el) {
  const scenarios = Array.from(el.querySelectorAll(".scenario"));
  scenarios.forEach((s, i) => s.style.setProperty("--scenario-delay", i));

  const oq = el.querySelector(".open-questions");
  const closer = el.querySelector(".closer");

  for (const node of [oq, closer]) {
    if (!node) continue;
    node.style.opacity = "0";
    node.style.transform = "translateY(18px)";
    node.style.transition = "opacity 520ms var(--ease-out), transform 560ms var(--ease-out)";
  }

  return {
    update(sub) {
      scenarios.forEach((s, i) => {
        const threshold = 0.06 + i * 0.11;
        s.classList.toggle("is-visible", sub > threshold);
      });
      if (oq) {
        const show = sub > 0.58;
        oq.style.opacity = show ? "1" : "0";
        oq.style.transform = show ? "translateY(0)" : "translateY(18px)";
      }
      if (closer) {
        const show = sub > 0.82;
        closer.style.opacity = show ? "1" : "0";
        closer.style.transform = show ? "translateY(0)" : "translateY(18px)";
      }
    },
  };
}
