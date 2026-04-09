# Preposition Practice App

A command-line study tool for mastering English prepositions — built with teacher-quality explanations, targeted feedback, and two study modes.

## Requirements

- Node.js (any version ≥ 12)
- No npm packages needed — uses only built-in modules

## How to run

```bash
node app.js
```

## Features

- **Random Mix mode** — 5 questions drawn from the full question bank
- **Focus Mode** — drill one specific preposition or pair (on, in, at, for/since, by/until, over/above, into/in, movement)
- **Hint system** — type `hint` before answering for a letter clue
- **Skip** — type `skip` to skip a question
- **Targeted wrong-answer tips** — if you type a wrong answer, the app explains *why that specific word doesn't fit*
- **Full explanations** — every question explains the underlying rule, not just the answer
- **Quick tip** — a memorable one-liner to anchor the rule
- **Session recap** — end-of-session summary of every rule you practiced

## Question bank coverage

| Focus | What's tested |
|---|---|
| on | surface, days/dates, responsibility, topic, medium/device, state, transportation |
| in | enclosed space, cities/countries, time periods, parts of day, small vehicles |
| at | precise point, clock times, events, skill collocations |
| for / since | duration vs starting point |
| by / until | deadline vs continuous duration |
| over / above | directly above vs higher than |
| into / in | movement entering vs static location |
| movement | through vs across |

## File structure

```
preposition-app/
  ├── app.js        ← main entry point
  ├── questions.js  ← question bank (easily extendable)
  ├── utils.js      ← colors, input, display helpers
  └── README.md
```

## Extending the question bank

Each question in `questions.js` follows this structure:

```js
{
  sentence: "The book is ___ the table.",   // use ___ for the blank
  answer: "on",                              // primary correct answer
  alternatives: ["upon"],                    // other accepted answers
  focus: "on",                               // enables Focus Mode filtering
  category: "on — surface/contact",          // shown during quiz
  confusionPair: "in / on / at (place)",     // optional, for display
  wrongAnswerTips: {                         // targeted tips per wrong answer
    "in": "Why 'in' doesn't work here..."
  },
  explanation: "Full teacher explanation...",
  tip: "Short memorable tip."
}
```
