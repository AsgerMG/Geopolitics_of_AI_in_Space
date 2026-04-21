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
    heading: "Datacenters in space: The strategic case.",
    lede: "For most of the computing age, the question of where to put a server has been a dull matter of cheap land, cool air and abundant electrons. That has recently been changing.",
    figure: {
      src: "assets/energy-chart.jpeg",
      alt: "Bar chart showing data centre electricity generation by energy source — Global, China, U.S. — 2025 vs 2035. Source: IEA / Statista.",
      caption: "Source: IEA via Statista",
    },
    sections: [
      {
        body: [
          "The idea of putting data centres in orbit, which was long the preserve of science fiction, has, in the past eighteen months, slipped into investor decks, research papers and regulatory filings. The reason is that Earth has become rather inhospitable to the sort of computing the world now insists on doing.",
          "Start with the demand shock. The International Energy Agency reckons that global electricity consumption from data centres will more than double by 2030, to roughly 945 terawatt-hours, which is slightly more than Japan consumes in total today. Artificial intelligence is the engine behind these projections. Power use by AI-optimised servers is growing at 30% a year and by the end of the decade America will draw more electricity to shuffle data than to smelt aluminium, forge steel, bake cement and manufacture chemicals combined. Alphabet, Amazon, Microsoft, Meta (the infamous Hyperscalers) are expected to spend some $400bn combined on terrestrial data centres in 2026 alone.",
          "A persistent problem is that the grid is not keeping up. The IEA estimates that up to a fifth of planned projects risk delay for want of transmission capacity. In Virginia, Dublin and suburban Frankfurt, moratoria and utility queues now stretch past the decade. A persistent bottleneck which has led Hyperscalers to become energy companies that dabble in software. With nuclear-reactor offtake agreements that would have seemed deranged in 2020, now becoming routine.",
        ],
      },
      {
        subhead: "A sunnier solution",
        body: [
          "Orbit, interestingly, solves several of these bottlenecks at once. A solar panel in the right low-Earth orbit, more specifically, a dawn-to-dusk sun-synchronous one that sits in nearly continuous sunlight, generates up to eight times more energy per panel per year than the equivalent on the ground according to Google's modelling. Solar irradiance in orbit is also 36% higher than at the surface, and neither weather nor night interferes. This makes it a thermodynamic dream for chips, where heat can be radiated directly away, with no need for the vast cooling requirements that terrestrial AI campuses require. Land use falls to zero. Planning permission is, for now, not a concept.",
          "There are also structural advantages that play into strategic rather than strictly economic upsides. Space is, at least in principle, jurisdiction-light: a sovereign compute layer that sits outside the patchwork of European, American and Chinese data-protection regimes. Latency for Earth-to-orbit round trips is still an issue for anything consumer-facing, but the heaviest AI workloads such as model training, scientific simulation or batch inference, do not really require the results to come back in 20 milliseconds or 200. They care about the cost of compute capacity.",
        ],
      },
      {
        subhead: "Space-euphoria is not all that simple",
        body: [
          "But space-romance meets the rocket-launch equation. Google's feasibility paper, the most careful public analysis to date, concludes that launch costs to low-Earth orbit would need to fall to roughly $200 per kilogram before orbital compute becomes cost-competitive with a terrestrial data centre on a per-kilowatt basis. Current prices, depending on provider and profile, sit between $1,500 and $2,900. SpaceX's Starship, which is not yet operational, is meant to change this. It would have to scale to something like 180 launches a year, a tough goal to reach. Google's own projection for when such economics might arrive is the mid-2030s. That is roughly a decade away, which in AI-investment years is several eternities.",
          "But, launch costs are not the only hurdle. Cosmic radiation degrades chips, passive thermal management at data-centre scale remains unproven and repairing a broken server in orbit could prove to be a harder task than just sending an available human hardware engineer. Naturally, the sustainability case is also often invoked as the clinching argument, but it is shakier than advertised. A single re-entering satellite deposits aluminium in the upper atmosphere; thousands of them, falling out of orbit each year, could measurably affect Earth's albedo. A 2023 study from the US Federal Aviation Administration suggested that by 2035 debris could kill one person every two years. Orbital slots, like the electromagnetic spectrum, are not infinite commons.",
          "Data centres in space are neither fantasy nor imminent. They are a credible hedge against a ground-based bottleneck that is real, large and arriving fast, but the hedge is contingent on a launch-cost revolution that has been promised before. The strategic case is that the bet is now cheap enough to take. The strategic risk is that of a lot of infrastructure… not whether it works at some point, but whether it works in time and at scale.",
        ],
      },
    ],
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
