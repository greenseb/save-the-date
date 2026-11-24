// Everything you'll want to personalise lives here.
export const config = {
  names: ["Sebastian", "Natasha"] as [string, string], // <- your names
  // First and last day of the celebration (inclusive). Month is 1-12.
  date: {
    start: { year: 2029, month: 5, day: 25 },
    end: { year: 2029, month: 5, day: 28 },
  },
  eventTitle: "Sebastian & Natasha's wedding", // used for the calendar file
  image: `${import.meta.env.BASE_URL}save-the-date.jpg`, // swap for your own picture (square works best)

  hintDelayMs: 8000, // how long before the puzzle nudges a stuck guest

  intro: {
    eyebrow: "Psst…",
    title: "We have news",
    body: "Someone scrambled our picture. Fix it to find out when.",
    prompt: "Tap two tiles to swap them",
    skip: "Just show me the date",
  },

  // Little remarks under the puzzle. Rewrite these in your own voice!
  quips: {
    start: "Tap a tile, then tap another to swap them.",
    good: [
      "Ooh, that one fits.",
      "Look at you go.",
      "Nailed it.",
      "Getting warmer…",
      "Teamwork makes the dream work.",
    ],
    meh: [
      "Hmm, not quite.",
      "Bold choice.",
      "Close, but no.",
      "Trust the process.",
      "We believe in you.",
    ],
    solved: "There you are.",
  },

  reveal: {
    heading: "Save the date(s)",
    note: "Formal invitation to follow.",
    calendar: "Add to calendar",
    footer: "Yes, you have to come. 💕",
  },
};
