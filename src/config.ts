// Everything you'll want to personalise lives here.
export const config = {
  names: ['Sebastian', 'Natasha'] as [string, string], // <- your names
  // First and last day of the celebration (inclusive). Month is 1-12.
  date: {
    start: { year: 2029, month: 5, day: 25 },
    end: { year: 2029, month: 5, day: 28 },
  },
  eventTitle: "Sebastian & Natasha's wedding", // used for the calendar file
  image: `${import.meta.env.BASE_URL}save-the-date.jpg`, // swap for your own picture (square works best)

  hintDelayMs: 8000, // how long before the puzzle nudges a stuck guest
  skipAfterMisses: 8, // wrong swaps before the "just show me the date" link appears

  intro: {
    eyebrow: 'Psst…',
    title: 'We have news',
    body: 'Unscramble our photo to reveal it',
    // prompt: "Tap two tiles to swap them",
    skip: 'I give up, just show me.',
  },

  // Shown when a guest taps the skip link.
  giveUp: {
    title: 'Giving up already?',
    message: 'Are you sure you want to give up? We think you can do it.',
    confirm: 'Yes, show me',
    cancel: 'No, keep trying',
  },

  // Little remarks under the puzzle. Rewrite these in your own voice!
  quips: {
    start: 'Tap a tile, then tap another to swap them.',
    good: ['Yes diva!', 'Thank u, next', 'Well yes!'],
    meh: ['Well no', "D'oh!", 'What the helly'],
    solved: 'There you are.',
  },

  reveal: {
    heading: 'Save the date(s)',
    note: 'Formal invitation to follow.',
    calendar: 'Add to calendar',
    footer: "Yes, it's a bank holiday. 💕",
  },
}
