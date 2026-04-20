// Scene 3 — Governance Vacuum.
// Treaty ribbon appears first, then gap cards reveal one by one.

export function createGovernanceScene(el) {
  const treaties = Array.from(el.querySelectorAll(".treaty"));
  const gaps = Array.from(el.querySelectorAll(".gap-card"));
  const closer = el.querySelector(".governance-closer");

  gaps.forEach((g, i) => g.style.setProperty("--gap-delay", i));

  treaties.forEach((t, i) => {
    t.style.opacity = "0";
    t.style.transform = "translateY(8px)";
    t.style.transition = "opacity 380ms var(--ease-out), transform 420ms var(--ease-out)";
    t.style.transitionDelay = `${i * 70}ms`;
  });

  if (closer) {
    closer.style.opacity = "0";
    closer.style.transform = "translateY(14px)";
    closer.style.transition = "opacity 420ms var(--ease-out), transform 460ms var(--ease-out)";
  }

  return {
    update(sub) {
      const showTreaties = sub > 0.05;
      treaties.forEach((t) => {
        t.style.opacity = showTreaties ? "1" : "0";
        t.style.transform = showTreaties ? "translateY(0)" : "translateY(8px)";
      });

      gaps.forEach((g, i) => {
        const threshold = 0.15 + i * 0.08;
        g.classList.toggle("is-visible", sub > threshold);
      });

      if (closer) {
        const show = sub > 0.55;
        closer.style.opacity = show ? "1" : "0";
        closer.style.transform = show ? "translateY(0)" : "translateY(14px)";
      }
    },
  };
}
