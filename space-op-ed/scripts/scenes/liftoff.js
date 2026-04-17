// Scene 0 — Liftoff.
// Title and subtitle fade in immediately, then fade out as the rocket climbs.

import { clamp, smoothstep, remap } from "../util/lerp.js";

export function createLiftoffScene(el) {
  const display = el.querySelector(".display");
  const subtitle = el.querySelector(".subtitle");
  const byline = el.querySelector(".byline");
  const kicker = el.querySelector(".kicker");

  return {
    update(sub) {
      // Title is visible from page load, fades out as the rocket takes off.
      const fadeOut = 1 - smoothstep(remap(sub, 0.45, 0.95, 0, 1));
      const y = -smoothstep(remap(sub, 0.45, 1.0, 0, 1)) * 40;
      const style = `opacity: ${fadeOut.toFixed(3)}; transform: translateY(${y.toFixed(1)}px);`;

      if (display) display.setAttribute("style", style);
      if (subtitle) subtitle.setAttribute("style", style);
      if (byline) byline.setAttribute("style", `opacity: ${(fadeOut * 0.9).toFixed(3)};`);
      if (kicker) kicker.setAttribute("style", `opacity: ${fadeOut.toFixed(3)};`);
    },
  };
}
