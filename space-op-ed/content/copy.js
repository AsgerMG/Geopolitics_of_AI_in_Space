// All op-ed copy in one editable file.
// Non-coders can edit this freely; structure is stable and consumed by the scene modules.

export const copy = {
  meta: {
    title: "The Next Frontier of AI Isn't a Model. It's an Orbit.",
    author: "Asger Møller Grimberg",
    dateline: "An op-ed on the geopolitics of AI in space",
    description:
      "An interactive op-ed on the geopolitics of AI data centers in space.",
  },

  liftoff: {
    kicker: "An op-ed",
    title: "The Next Frontier of AI\nIsn't a Model. It's an Orbit.",
    subtitle:
      "Within a decade, the most consequential compute on Earth may not be on Earth at all.",
    scrollHint: "Scroll to launch",
  },

  whyNow: {
    altitude: "12 km · Stratosphere",
    kicker: "Act I",
    heading: "Why Space. Why Now.",
    lede: "Four forces are pulling the data center off the planet.",
    pillars: [
      {
        title: "Power",
        big: "∞",
        body: "Solar panels in orbit never see a cloud, a night, or a grid bottleneck. Power density is the binding constraint on AI — and space removes it.",
      },
      {
        title: "Cooling",
        big: "3 K",
        body: "Space is already near absolute zero. Radiative cooling against the cosmic background needs no water, no towers, no local permits.",
      },
      {
        title: "Sovereignty",
        big: "Δ",
        body: "Orbital compute sits above every jurisdiction. Data can be processed in minutes of overflight, beyond the reach of any single regulator.",
      },
      {
        title: "Control",
        big: "⌖",
        body: "Compute is becoming territory. Whoever owns the orbits owns the next layer of the AI stack.",
      },
    ],
    counter:
      "None of this is free. Radiation hardens chips, launches still cost millions per tonne, and repair crews do not yet exist. The question is not whether space compute is hard — it is whether the gravity of the AI race will pay for it anyway.",
  },

  actors: {
    altitude: "500 km · Low Earth Orbit",
    kicker: "Act II",
    heading: "Who is Building, and What They Want.",
    lede: "Four actors, four strategies. The geopolitics of AI in space is already being written — in procurement contracts, not treaties.",
    cards: [
      {
        code: "US",
        actor: "United States",
        stance: "Compute dominance, extended upward.",
        projects: [
          "Starcloud-class orbital data-center demonstrators",
          "DoD orbital compute studies (SDA, AFRL)",
          "Space-qualified accelerators from NVIDIA-class silicon",
        ],
        wants:
          "Preserve the AI lead by locking in the next substrate before rivals catch up on the ground.",
      },
      {
        code: "CN",
        actor: "China",
        stance: "Parallel stack, sovereign by design.",
        projects: [
          "Three-Body Computing Constellation — 2,800 satellites planned",
          "State-backed orbital AI compute partnerships",
          "Indigenous launch capacity scaling fast",
        ],
        wants:
          "A compute layer no US export control can reach. Orbit as a workaround for the chip embargo.",
      },
      {
        code: "EU",
        actor: "European Union",
        stance: "Rules-based, sovereignty-flavoured.",
        projects: [
          "IRIS² secure connectivity constellation",
          "ESA studies on orbital data centres",
          "AI Act extending, in principle, to orbital workloads",
        ],
        wants:
          "A regulated European option — compute sovereignty without a private-sector monopoly.",
      },
      {
        code: "★",
        actor: "Private Sector",
        stance: "A geopolitical actor in its own right.",
        projects: [
          "SpaceX launch cadence as critical infrastructure",
          "Starcloud, Lonestar, Axiom pitching orbital racks",
          "Hyperscaler interest in off-world capacity",
        ],
        wants:
          "To sell compute wherever demand exists — and to set the defaults before anyone legislates them.",
      },
    ],
  },

  governance: {
    altitude: "36,000 km · Geostationary",
    kicker: "Act III",
    heading: "The Governance Vacuum.",
    lede: "Space law was written for astronauts and satellites. Not for AI training runs.",
    treaties: [
      { year: "1967", name: "Outer Space Treaty" },
      { year: "1972", name: "Liability Convention" },
      { year: "1976", name: "Registration Convention" },
      { year: "1979", name: "Moon Agreement" },
      { year: "—", name: "ITU Spectrum Allocation" },
    ],
    gaps: [
      {
        title: "Jurisdiction over orbital data",
        body: "Whose law applies to a dataset trained on a satellite registered in one state, operated by a company in another, serving users in a third?",
      },
      {
        title: "AI workloads as dual-use",
        body: "Export controls stop at the launchpad. An orbital GPU cluster is, in effect, extraterritorial compute.",
      },
      {
        title: "Liability for model harms",
        body: "If an orbital model causes damage downstream, the 1972 Liability Convention has nothing to say about it.",
      },
      {
        title: "Debris and compute longevity",
        body: "A data centre in LEO is also a debris risk. Who decommissions a ten-tonne AI cluster?",
      },
    ],
    closer:
      "There is no negotiating body, no working group, no draft text. The vacuum is not a gap. It is the whole room.",
  },

  futures: {
    altitude: "Beyond",
    kicker: "Act IV",
    heading: "If This Plays Out.",
    lede: "Four ways the world changes if orbital compute becomes real.",
    scenarios: [
      {
        n: "01",
        title: "Compute sovereignty redraws alliances",
        body: "Countries choose blocs by which orbital compute they can legally use — not by geography or trade.",
      },
      {
        n: "02",
        title: "A new export-control frontier",
        body: "Controls pivot from chips-on-ships to chips-in-orbit. Launch manifests become strategic documents.",
      },
      {
        n: "03",
        title: "Private operators as quasi-states",
        body: "A handful of launch and compute firms hold capabilities only treaties used to hold. They negotiate. They refuse.",
      },
      {
        n: "04",
        title: "AI governance fragments along orbital lines",
        body: "Rules end at the Kármán line. Above it, the strongest operator writes the defaults — and the rest of the world lives with them.",
      },
    ],
    openQuestions: {
      heading: "Open Questions",
      items: [
        "Who has standing to object when a private operator relocates compute to orbit to escape a specific jurisdiction?",
        "Does an AI model trained in orbit inherit any state's obligations — or none?",
        "What is the minimum treaty language that would actually bind orbital compute?",
        "If the cost curve breaks, does terrestrial AI regulation become unenforceable overnight?",
      ],
    },
    closer: {
      line: "The rocket has already left the pad.",
      cta: "The debate has not.",
    },
  },
};
