const questions = [

  // ── ON: surface / contact ──────────────────────────────────────────────────
  {
    sentence: "She placed the coffee cup ___ the counter without looking.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In' implies being enclosed inside something. A counter is a flat surface, not a container — use 'on' for surfaces you place things on top of.",
      "at": "'At' marks a general location or point, not physical surface contact. 'At the counter' means near it; 'on the counter' means touching its surface."
    },
    explanation: `"On" is used when something rests on or touches a surface — a table, a floor, a shelf, a wall.
  Rule: flat surface + physical contact = ON.
  Compare: "The painting is ON the wall." / "The cat is ON the roof." / "There's a scratch ON the door."`,
    tip: "Think of 'on' as a contact preposition — the two things are touching."
  },
  {
    sentence: "There's a beautiful mural painted ___ the side of the building.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In' means inside an enclosed space. A wall's side is a surface, not an interior — use 'on'.",
      "at": "'At the side of the building' means near it. 'On the side' means attached to / covering the surface."
    },
    explanation: `"On" covers vertical surfaces too — walls, sides, screens, doors.
  Rule: any surface (horizontal OR vertical) uses ON.
  Compare: "There's graffiti ON the wall." / "The logo is ON the screen." / "She had paint ON her hands."`,
    tip: "Walls, screens, and doors are surfaces — always 'on', never 'in'."
  },

  // ── ON: days and dates ─────────────────────────────────────────────────────
  {
    sentence: "The meeting was rescheduled to ___ Thursday afternoon.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In' is for longer time periods: months, seasons, years, decades. 'Thursday' is a specific day — use 'on'.",
      "at": "'At' is for clock times: 'at 3 p.m.', 'at noon'. Days of the week need 'on'."
    },
    explanation: `Use ON for specific days and dates.
  Rule: ON + day of week / ON + calendar date.
  Examples: "on Monday", "on July 4th", "on New Year's Eve", "on my birthday".
  Memory tip → Time target size: IN (big: month/year) → ON (medium: a day) → AT (tiny: exact time).`,
    tip: "Days and dates always take 'on'. No exceptions."
  },
  {
    sentence: "He proposed to her ___ Valentine's Day, right after dinner.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In Valentine's Day' is incorrect — 'in' goes with months and years, not specific named days.",
      "at": "'At' marks a precise clock time, not a named holiday or day."
    },
    explanation: `Named holidays and special days use ON — they function like specific dates.
  Examples: "on Christmas", "on Thanksgiving", "on Easter", "on Halloween".
  Note: In informal American speech, people sometimes drop 'on' entirely: "I'll see you Christmas morning" — but in writing, always use 'on'.`,
    tip: "Holidays are just named days — treat them like any day of the week and use 'on'."
  },

  // ── ON: responsibility / cost ──────────────────────────────────────────────
  {
    sentence: "Don't worry about the bill — tonight's dinner is ___ me.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'For me' here means 'intended for me' — the opposite! 'On me' means I am paying.",
      "by": "'By me' doesn't work here. 'By' expresses agent or method, not financial responsibility."
    },
    explanation: `"On someone" = that person is taking financial or moral responsibility.
  Examples: "Drinks are on the house." (the bar pays) / "That mistake is on me." (my fault) / "The next round is on you."
  This is informal but extremely common in everyday American English.`,
    tip: "When someone foots the bill or takes the blame, it's 'on' them."
  },
  {
    sentence: "I shouldn't have said that — the whole argument was ___ me.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By me' means performed by me as an agent, not 'my fault'.",
      "from": "'From me' indicates origin or source, not responsibility."
    },
    explanation: `"On me/you/them" also expresses blame or moral responsibility — not just money.
  Examples: "That's on me." (I'm responsible) / "This is on the whole team." / "Don't put that on her."
  It's the same structure as the payment use — "on" = bearing the weight of something.`,
    tip: "Responsibility — financial or moral — is expressed with 'on'."
  },

  // ── ON: topic/subject ──────────────────────────────────────────────────────
  {
    sentence: "She gave a fascinating lecture ___ the history of jazz.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'A lecture for history' implies the lecture is intended as a gift or service to history — doesn't make sense.",
      "of": "'A lecture of history' is not standard English. Use 'on' or 'about' for topics."
    },
    explanation: `"On" and "about" both express topic, but with a subtle difference:
  ON → more formal, academic: "a book ON linguistics", "a report ON climate change", "an essay ON freedom".
  ABOUT → more casual: "a story about a dog", "we talked about the game".
  In academic or professional writing, prefer "on".`,
    tip: "For formal topics (lectures, reports, essays), 'on' sounds more academic than 'about'."
  },

  // ── ON: medium/device ─────────────────────────────────────────────────────
  {
    sentence: "I first heard that song ___ the radio back in high school.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the radio' means physically inside the device — sounds like you crawled inside it!",
      "at": "'At the radio' suggests a location near the radio, not receiving its broadcast."
    },
    explanation: `Use "on" for broadcast and communication media.
  Examples: "on TV", "on the radio", "on the phone", "on the internet", "on Zoom", "on YouTube".
  Rule: if it's a channel/medium/platform that transmits content, use ON.
  Compare: "I saw it ON Netflix." vs "I read it IN a magazine." (print = in, broadcast/digital = on)`,
    tip: "Screens and broadcast media use 'on'. Print media (books, magazines) use 'in'."
  },
  {
    sentence: "We've been ___ the phone for over an hour — I should go.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the phone' means inside the physical device.",
      "at": "'At the phone' is not idiomatic — it implies being near a phone, not using it."
    },
    explanation: `"On the phone" is fixed — it means actively in a phone conversation.
  Similarly: "on a call", "on FaceTime", "on Zoom", "on hold".
  These are all about being engaged in a communication channel — hence "on".`,
    tip: "Whenever you're actively using a communication channel, you're 'on' it."
  },

  // ── ON: surface/contact (continued) ───────────────────────────────────────
  {
    sentence: "The instructions are printed ___ the back of the box.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the back of the box' means inside the box. The instructions are printed on the surface — use 'on'.",
      "at": "'At the back of the box' means near it, not on its surface."
    },
    explanation: `"On" is used for any surface — including the back, front, or side of packaging.
  Rule: if something is printed, drawn, or placed on a surface, use ON.
  Compare: "ON the label", "ON the cover", "ON the lid", "ON the receipt".`,
    tip: "Printed or written on a surface? Always 'on'."
  },
  {
    sentence: "She noticed a large stain ___ the carpet near the door.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the carpet' implies inside the fibers in a contained way — not natural here. Stains are on the surface of the carpet.",
      "at": "'At the carpet' marks a location near the carpet, not a mark on its surface."
    },
    explanation: `Stains, marks, scratches, and spots are always ON a surface — they sit on top of or affect the surface.
  Examples: "a stain ON the shirt", "a scratch ON the car", "a mark ON the wall", "mud ON the floor".`,
    tip: "Any visible mark on a surface uses 'on'."
  },
  {
    sentence: "He taped a reminder ___ the refrigerator so he wouldn't forget.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the refrigerator' means inside it — but he taped it to the door's surface.",
      "at": "'At the refrigerator' suggests standing near it, not attaching something to its surface."
    },
    explanation: `Attaching something to the surface of an object uses ON.
  Examples: "tape a note ON the door", "hang a poster ON the wall", "stick a label ON the bottle".
  The contact between the note and the surface is what 'on' captures.`,
    tip: "Stuck, taped, or hung on a surface = 'on'."
  },
  {
    sentence: "The cat curled up and fell asleep ___ the warm laptop.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the laptop' means inside the device — physically impossible for a cat.",
      "at": "'At the laptop' means near the device, not resting on its surface."
    },
    explanation: `Anything resting on top of an object uses ON — people, animals, objects.
  Compare: "The cat is ON the laptop." / "The book is ON the table." / "She sat ON the bench."
  The surface provides support — that physical contact is expressed with 'on'.`,
    tip: "If something rests on top of a surface, it's always 'on'."
  },
  {
    sentence: "There's a crack ___ the ceiling right above the kitchen.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the ceiling' could imply a hole going through it. A crack on its surface uses 'on'.",
      "at": "'At the ceiling' implies near it, not a feature of its surface."
    },
    explanation: `The ceiling is a surface — cracks, stains, or paint on it use ON.
  The rule extends to all surfaces: floor, ceiling, walls, roofs.
  Examples: "a crack ON the ceiling", "paint ON the wall", "a dent ON the floor".`,
    tip: "Ceilings and floors are surfaces — features on them use 'on'."
  },
  {
    sentence: "She wore a small microphone ___ her lapel during the panel discussion.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In her lapel' implies inside the fabric — the mic clips to the surface.",
      "at": "'At her lapel' isn't idiomatic for something physically attached."
    },
    explanation: `Things clipped, pinned, or attached to clothing or body use ON.
  Examples: "a badge ON her jacket", "a sticker ON his shirt", "a name tag ON his chest".
  The item has physical contact with the surface — hence ON.`,
    tip: "Pinned or clipped to clothing = 'on'."
  },
  {
    sentence: "They carved their initials ___ the old oak tree decades ago.",
    answer: "on",
    alternatives: ["into"],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Carved in the tree' is less standard when referring to the bark surface — 'on' emphasizes the surface, 'into' the movement.",
      "at": "'At the tree' doesn't work — it says nothing about the surface."
    },
    explanation: `Carving, writing, or etching on a surface uses ON.
  Examples: "carved ON the tree", "written ON the stone", "engraved ON the ring".
  "Into" is also possible when emphasizing the cutting action, but ON is more common for results.`,
    tip: "Marks left on a surface (carved, etched, written) use 'on'."
  },
  {
    sentence: "You've got some paint ___ your cheek — did you notice?",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In your cheek' means inside your mouth area — not on the skin surface.",
      "at": "'At your cheek' doesn't describe something stuck to the skin."
    },
    explanation: `The skin is a surface — anything on it (paint, dirt, marks) uses ON.
  Examples: "mud ON your face", "ink ON your fingers", "a bruise ON her arm", "sunscreen ON his nose".`,
    tip: "Skin is a surface — things on it use 'on'."
  },
  {
    sentence: "The price tag was still ___ the shirt when he wore it to the interview.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In the shirt' means inside the garment. A tag attached to the outside uses 'on'.",
      "at": "'At the shirt' doesn't describe an attached label."
    },
    explanation: `Tags, labels, and patches attached to clothing use ON — they're on the surface.
  Examples: "a tag ON the shirt", "a label ON the jar", "a sticker ON the bumper".
  This is the same surface/contact rule as always.`,
    tip: "Tags and labels on objects are always 'on'."
  },
  {
    sentence: "He slipped ___ the wet floor and nearly fell.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — surface/contact",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Slipped in the floor' would mean inside the floor — not possible.",
      "at": "'At the wet floor' means near it, not interacting with its surface."
    },
    explanation: `Movement across or interaction with a floor surface uses ON.
  Examples: "slip ON the ice", "walk ON the grass", "dance ON the stage", "kneel ON the ground".
  The floor / ground / surface is what you're physically in contact with.`,
    tip: "Walking, slipping, or standing on any ground surface = 'on'."
  },

  // ── ON: days/dates (continued) ─────────────────────────────────────────────
  {
    sentence: "The museum is closed ___ Mondays, so plan your visit for another day.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In Mondays' is incorrect — 'in' is for months, seasons, and years, not days of the week.",
      "at": "'At Mondays' is not standard English. Days of the week always take 'on'."
    },
    explanation: `All days of the week use ON — including for recurring habits and schedules.
  Examples: "on Monday", "on Fridays" (recurring), "on weekends", "on weekdays".
  Note: "on Fridays" (plural) means every Friday — still uses ON.`,
    tip: "Days of the week — singular or recurring — always take 'on'."
  },
  {
    sentence: "She was born ___ the third of October, right in the middle of a storm.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In the third of October' is incorrect. 'In October' works (month = IN), but a specific date uses 'on'.",
      "at": "'At the third of October' doesn't work — clock times use 'at', not calendar dates."
    },
    explanation: `Specific calendar dates use ON — including ordinal date expressions.
  Examples: "on the 3rd", "on October 3rd", "on the 3rd of October" — all use ON.
  The month alone takes IN: "in October". But the moment you specify the day, switch to ON.`,
    tip: "Month alone = in. Specific date = on."
  },
  {
    sentence: "The finals are scheduled ___ Friday — she hasn't slept properly all week.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In Friday' is not standard English. Days of the week take 'on'.",
      "at": "'At Friday' doesn't work — 'at' is for clock times, not days."
    },
    explanation: `Scheduled events on a specific day use ON.
  "The exam is ON Friday." / "The flight is ON Thursday." / "The wedding is ON Saturday."
  This is consistent whether the day is named or given as a date.`,
    tip: "Scheduled on a day? Use 'on'."
  },
  {
    sentence: "He called her ___ her birthday every year without fail for thirty years.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "at": "'At her birthday' doesn't work — 'at' is for clock times and locations, not named days.",
      "in": "'In her birthday' is not English. Named days and dates use 'on'."
    },
    explanation: `"On someone's birthday" is a fixed and common phrase — ON is required.
  Similarly: "on your anniversary", "on graduation day", "on the big day".
  Personal milestone days function like calendar dates — they all use ON.`,
    tip: "'On your birthday / anniversary / graduation day' — always 'on' for personal milestone days."
  },
  {
    sentence: "The announcement came ___ a Tuesday, which made it feel even more abrupt.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In a Tuesday' is ungrammatical in English.",
      "at": "'At a Tuesday' doesn't work — days are not points in time the way clock times are."
    },
    explanation: `Even when a day is introduced with the indefinite article 'a', it still uses ON.
  "It happened ON a Monday." / "She called ON a Wednesday evening." / "ON a cold February morning..."
  The article changes the specificity but not the preposition — days always take ON.`,
    tip: "Day of the week with 'a'? Still uses 'on': 'on a Tuesday', 'on a cold Friday'."
  },
  {
    sentence: "The package is scheduled to arrive ___ the 15th — please be home.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "by": "'By the 15th' means no later than the 15th — not the same as scheduled for that day.",
      "in": "'In the 15th' is not grammatical for a date."
    },
    explanation: `Ordinal dates (the 1st, the 15th, the 31st) always take ON.
  "Arrive ON the 15th." / "Meet ON the 1st." / "Due ON the 30th."
  This is consistent whether the month is stated or implied.`,
    tip: "Ordinal dates (the 15th, the 3rd) always take 'on'."
  },
  {
    sentence: "She always cooks something special ___ Sunday evenings.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In Sunday evenings' is not correct. Even when a part of the day is added, the day itself governs the preposition choice — and days take 'on'.",
      "at": "'At Sunday evenings' doesn't work — 'at' would suit a clock time, not a named day."
    },
    explanation: `When a day of the week is combined with a part of the day, use ON — the day governs.
  Examples: "ON Monday morning", "ON Friday night", "ON Sunday afternoon".
  Compare: "IN the morning" (general) vs "ON Monday morning" (specific day).`,
    tip: "'On Monday morning', 'on Friday night' — the day takes 'on', overriding the time-of-day rule."
  },
  {
    sentence: "The earthquake struck ___ the morning of March 11th, catching everyone off guard.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In the morning of March 11th' is awkward — when morning is tied to a specific date, use 'on'.",
      "at": "'At the morning' is never correct — 'at' is for clock times, not named parts of the day."
    },
    explanation: `"On the morning / afternoon / evening of [date]" is the standard pattern.
  Examples: "ON the morning of June 6th", "ON the evening of New Year's Day", "ON the afternoon of her wedding".
  The specific date drives the choice of ON.`,
    tip: "'On the morning/evening of [date]' — always 'on' when tied to a specific date."
  },
  {
    sentence: "We celebrate our anniversary ___ the day we first met, every year.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "at": "'At the day we met' doesn't work — 'at' is for specific time points, not days.",
      "in": "'In the day we met' is not standard. Specific named or referenced days use 'on'."
    },
    explanation: `Relative day references also take ON: "on the day we met", "on the day she left", "on the day of the accident".
  Any expression that identifies a specific day — named, dated, or described — uses ON.`,
    tip: "'On the day that...' — any specific day reference takes 'on'."
  },
  {
    sentence: "There's a staff training session ___ the last Friday of every month.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — days/dates",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In the last Friday' is not grammatical for a day reference.",
      "at": "'At the last Friday' doesn't work — days take 'on', not 'at'."
    },
    explanation: `Complex day references like "the last Friday of the month" still use ON.
  Examples: "ON the first Monday of the year", "ON the third Thursday of November" (Thanksgiving).
  Any expression that identifies a specific day takes ON.`,
    tip: "Complex day references ('the last Friday of the month') still take 'on'."
  },

  // ── ON: responsibility/cost (continued) ────────────────────────────────────
  {
    sentence: "Since you waited so long, the dessert is ___ the house.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By the house' implies the building as an agent — not idiomatic for this meaning.",
      "from": "'From the house' means originating from, not that the house bears the cost."
    },
    explanation: `"On the house" is a fixed phrase meaning the establishment is paying — the cost falls on them.
  This follows the same rule as "on me" — whoever bears the cost is marked with ON.
  Examples: "It's ON the house." / "Drinks are ON us." / "The upgrade is ON the airline."`,
    tip: "'On the house' = the business pays. Same pattern as 'on me' or 'on us'."
  },
  {
    sentence: "He insisted on paying — the entire evening was ___ him.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'For him' means intended for him — the opposite of paying for others.",
      "with": "'With him' implies accompaniment, not financial responsibility."
    },
    explanation: `"On him/her/us/them" expresses who is paying or responsible for the cost.
  The structure is: [thing being paid for] + is/was + ON + [person paying].
  "The bill was ON him." / "The first round is ON me." / "The trip is ON the company."`,
    tip: "Who foots the bill = 'on' them."
  },
  {
    sentence: "Since the delay was our fault, the hotel room for tonight is ___ us.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By us' expresses agency (something done by us), not who pays.",
      "from": "'From us' implies a gift origin, but doesn't specifically mean we're bearing the cost."
    },
    explanation: `When a company or individual takes financial responsibility for something, ON is used.
  "The hotel is ON us." / "We'll cover it — it's ON the company." / "Your flight rebooking is ON the airline."
  This phrasing is especially common in service and hospitality contexts.`,
    tip: "Taking financial responsibility for a cost = 'on' whoever's paying."
  },
  {
    sentence: "Order anything you like — lunch is ___ the firm today.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'For the firm' changes the meaning — it would mean the firm is the beneficiary, not the payer.",
      "with": "'With the firm' doesn't convey financial responsibility."
    },
    explanation: `Organizations can also bear costs in this structure: ON the firm / ON the company / ON the department.
  Examples: "Lunch is ON the firm." / "Travel expenses are ON the client." / "Software is ON the IT budget."`,
    tip: "The payer — person or organization — is always marked with 'on'."
  },
  {
    sentence: "She bought everyone a coffee — 'This round is ___ me,' she said.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'This round is by me' doesn't work — 'by' marks authorship or agent, not who pays.",
      "at": "'At me' is not used for financial responsibility."
    },
    explanation: `"This round is ON me" — one of the most common everyday uses of this pattern.
  "Round" here means a round of drinks. The person paying is marked with ON.
  Other common forms: "The next one is ON you." / "First round's ON the birthday person."`,
    tip: "'This round is on me' — social generosity is expressed with 'on'."
  },
  {
    sentence: "Don't worry about the repair cost — that dent is ___ the rental company.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'For the rental company' here would mean intended for them as a recipient, not that they bear the cost.",
      "with": "'With the rental company' doesn't imply they're paying."
    },
    explanation: `Responsibility for damage costs also uses this ON structure.
  "The repair is ON them." / "That damage is ON the contractor." / "Any overages are ON the client."
  The meaning extends beyond meals to any financial obligation.`,
    tip: "Any financial obligation placed on someone uses 'on'."
  },
  {
    sentence: "We comped the entire reservation — consider your stay ___ us.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'Stay by us' means near us, not that we're paying.",
      "from": "'Stay from us' is not grammatical in this context."
    },
    explanation: `In hospitality, "it's ON us" or "consider it ON us" signals a complimentary service.
  This is very common in hotel, restaurant, and airline service language.
  Same structure: cost falls ON the provider.`,
    tip: "Comped or complimentary services are 'on' the provider."
  },
  {
    sentence: "The coffee is ___ me — you've been helping me all morning.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'The coffee is for me' — completely reverses the meaning. 'On me' = I pay. 'For me' = it's mine.",
      "with": "'With me' implies accompaniment, not payment."
    },
    explanation: `"The coffee is ON me" means I'm paying for your coffee.
  This is a critical distinction from "the coffee is FOR me" (I'm the one receiving it).
  The ON structure always means: [payer] is taking the cost.`,
    tip: "'On me' = I pay. 'For me' = I receive. Don't confuse them!"
  },
  {
    sentence: "They treated the whole team to steakhouse dinner — 'This one's ___ the department,' the manager said.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By the department' means carried out by them as an agent, not that they're paying.",
      "from": "'From the department' implies the department is giving a gift, which is close but 'on' is the natural idiomatic choice."
    },
    explanation: `Group or departmental costs use ON exactly as individual costs do.
  "This is ON the department." / "The event is ON the budget." / "All travel is ON the project fund."`,
    tip: "Whether one person or a whole department pays, the cost is 'on' them."
  },
  {
    sentence: "Since the airline caused the missed connection, the new ticket is ___ them.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/cost",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By them' doesn't convey financial responsibility — it just means they did something.",
      "for": "'For them' changes the meaning to 'intended for them', not 'paid by them'."
    },
    explanation: `When an organization's error leads to a cost, that cost is ON them.
  "The rebooking is ON the airline." / "The replacement is ON the manufacturer." / "The refund is ON us."
  This 'on' pattern covers fault-driven financial responsibility too.`,
    tip: "Fault-driven costs fall 'on' whoever caused the problem."
  },

  // ── ON: responsibility/blame (continued) ───────────────────────────────────
  {
    sentence: "I made the call without consulting anyone — if this fails, it's ___ me.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By me' describes what I did, not that I bear the blame.",
      "from": "'From me' indicates origin, not accountability."
    },
    explanation: `"It's on me" is one of the most common ways to accept blame or fault in English.
  It directly parallels "it's on me" for paying — in both cases, the person bears the weight.
  Examples: "That was ON me." / "If it goes wrong, it's ON me." / "This mistake is entirely ON her."`,
    tip: "'It's on me' = I accept the blame. Very common in everyday English."
  },
  {
    sentence: "The project collapsed because of my bad estimate — that's entirely ___ me.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'That's entirely of me' is not standard English for blame.",
      "by": "'By me' means it was done by me, but doesn't express ownership of the blame."
    },
    explanation: `"That's ON me" assigns blame clearly and directly — it's informal but universally understood.
  "Entirely on me" intensifies the admission.
  Compare: "That's ON me." / "That's ON both of us." / "That's ON the whole team."`,
    tip: "Accepting or assigning blame: '[mistake] is on [person]'."
  },
  {
    sentence: "Don't blame the interns — this decision was ___ senior leadership.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By senior leadership' describes who made the decision, not who bears the blame — though it's close.",
      "for": "'For senior leadership' means intended for them, not that the blame falls on them."
    },
    explanation: `"On [group]" assigns blame or accountability to a group.
  "This is ON the board, not the staff." / "That failure is ON management." / "The delay was ON the supplier."
  It shifts blame away from some and onto others clearly.`,
    tip: "Shifting blame to a group? 'That's on [group]'."
  },
  {
    sentence: "She realized too late that the miscommunication had been ___ her all along.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "with": "'With her' implies accompaniment or association, not that she bears responsibility.",
      "from": "'From her' means she was the origin, but 'on her' more specifically expresses accountability."
    },
    explanation: `When someone recognizes they were responsible for a problem, "it was on me/her/him" is the natural expression.
  The past tense form is equally common: "it was on me", "it had been on her".`,
    tip: "Realizing past blame = 'it was on me/her/him'."
  },
  {
    sentence: "'The delay is ___ me — I sent the wrong file,' he admitted.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "because of": "While 'because of me' explains the cause, 'on me' is the idiomatic way to claim ownership of the fault.",
      "by": "'By me' describes action, not responsibility for consequences."
    },
    explanation: `Admitting fault for a specific problem: "[problem] is ON me" is the natural phrasing.
  "The error is on me." / "That's on me — I should have checked." / "The confusion was on me."
  It's direct, accountable, and common in professional settings.`,
    tip: "Owning a specific mistake: 'the [error] is on me'."
  },
  {
    sentence: "Whatever happens next is ___ you — I've given you everything you need.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "up to": "'Up to you' is also correct and means the same thing — but 'on you' is the specific preposition idiom being practiced here.",
      "for": "'For you' means intended for you, not that you bear responsibility going forward."
    },
    explanation: `"On you" can express future responsibility, not just past blame.
  "The next step is ON you." / "If it goes wrong from here, it's ON you." / "That choice is ON you."
  It means: you are the one who must carry this.`,
    tip: "'On you' works for future responsibility too — not just past blame."
  },
  {
    sentence: "They blamed the whole redesign failure ___ the junior developer, which wasn't fair.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "at": "'Blamed at' is not standard English. The verb 'blame' collocates with 'on': blame [something] on [someone].",
      "to": "'Blamed to' is not correct. The preposition after 'blame something' is always 'on'."
    },
    explanation: `The verb "blame" takes ON: "blame [problem] ON [person]".
  Examples: "blame the accident ON him", "blame the failure ON the system", "blame it ON stress".
  This is a fixed collocation — blame + on — very common and frequently tested.`,
    tip: "Collocations: 'blame something ON someone' — always 'on' after 'blame'."
  },
  {
    sentence: "'Don't put this ___ her — we all agreed to the plan,' the manager said.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "at": "'Put this at her' is not idiomatic English for blame.",
      "to": "'Put this to her' means to raise a topic with her — completely different meaning."
    },
    explanation: `"Put [blame/responsibility] ON someone" is another key collocation.
  "Don't put this ON her." / "They put the whole thing ON me." / "Stop putting it ON the team."
  "Put on" and "blame on" are the two main verbs that use this pattern.`,
    tip: "'Put [blame] on someone' — another 'on' collocation for blame."
  },
  {
    sentence: "The coach admitted that the loss was ___ him, not on the players.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "by": "'By him' says he caused it, but 'on him' says he accepts accountability.",
      "with": "'With him' suggests association, not fault."
    },
    explanation: `Leadership figures often use "it's on me" to take responsibility publicly.
  "The loss is ON the coach." / "The poor performance is ON me as manager." / "That's ON the captain."
  This makes 'on' the preposition of accountability in both directions: taking blame and assigning it.`,
    tip: "Leaders taking accountability: 'the [failure] is on me'."
  },
  {
    sentence: "If the client pulls out, that's ___ us for overpromising in the proposal.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — responsibility/blame",
    confusionPair: null,
    wrongAnswerTips: {
      "from": "'From us' means it originates from us, not that we bear the consequences.",
      "by": "'By us' describes agency, not accountability for results."
    },
    explanation: `Consequences from poor decisions are also expressed with 'on us/them'.
  "If this fails, it's ON us." / "Any fallout from this is ON the planning team." / "The consequences are ON whoever approved it."`,
    tip: "Bearing consequences for a decision = 'that's on [person]'."
  },

  // ── ON: topic/subject (continued) ──────────────────────────────────────────
  {
    sentence: "He wrote his dissertation ___ the long-term effects of urban noise pollution.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "about": "'About' works here too, but 'on' is the more formal, academic choice for dissertations and theses.",
      "for": "'A dissertation for noise pollution' implies the work benefits the topic — use 'on' for subject matter."
    },
    explanation: `In academic writing, "dissertation/thesis/paper ON [topic]" is standard.
  Examples: "a thesis ON migration patterns", "research ON memory", "a paper ON tax reform".
  'On' signals the intellectual subject, making it more precise than 'about'.`,
    tip: "'On' is the academic preposition for subjects — dissertations, theses, and papers are 'on' a topic."
  },
  {
    sentence: "She's been reading everything she can find ___ quantum computing.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'Reading of quantum computing' is archaic or suggests hearing of it, not reading about it.",
      "for": "'Reading for quantum computing' implies a purpose, not a subject."
    },
    explanation: `"Reading ON [topic]" emphasizes the intellectual pursuit of a subject.
  "Reading ON history", "reading ON nutrition", "reading ON the law".
  Both 'on' and 'about' work, but 'on' is preferred when the reading is systematic or serious.`,
    tip: "Serious or systematic reading about a subject: prefer 'on'."
  },
  {
    sentence: "The documentary ___ deep-sea exploration won three international awards.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'A documentary of deep-sea exploration' is not standard English. Use 'on' or 'about'.",
      "for": "'A documentary for deep-sea exploration' implies it was made to benefit the exploration — not what 'on' means."
    },
    explanation: `Films, documentaries, and programs can be 'on' or 'about' a topic.
  "A documentary ON climate change." / "A film ON the French Revolution." / "A show ON wildlife."
  'On' is slightly more formal; 'about' is more conversational — both are correct.`,
    tip: "Documentaries and films are 'on' (formal) or 'about' (casual) a topic."
  },
  {
    sentence: "They published a comprehensive report ___ workplace mental health last quarter.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'A report of workplace mental health' is not standard. Reports are 'on' their subject.",
      "for": "'A report for mental health' implies the report serves mental health, not that it covers it as a subject."
    },
    explanation: `Reports, studies, surveys, and findings are all ON their subject.
  "A report ON inflation." / "A study ON screen time." / "Findings ON voter behavior."
  This is standard in business, journalism, and academic English.`,
    tip: "Reports and studies are always 'on' their subject."
  },
  {
    sentence: "Can you recommend a good book ___ negotiation skills?",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'A book of negotiation skills' suggests the book is a collection, not a book about the topic.",
      "for": "'A book for negotiation skills' means a book intended to help with those skills — close, but 'on' is the topic preposition."
    },
    explanation: `Books ON a topic vs. books ABOUT a topic: both are acceptable.
  'On' is preferred in formal recommendations: "a book ON leadership", "a guide ON investing", "a manual ON cooking".
  'About' is more casual: "a book about a dog", "a story about finding yourself".`,
    tip: "Book recommendations for serious topics: 'a book on [topic]'."
  },
  {
    sentence: "The professor left detailed comments ___ my essay about my use of evidence.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Comments in my essay' would mean inside the essay text — but these are comments left by the professor regarding it.",
      "for": "'Comments for my essay' changes the meaning to comments intended to help it, not feedback about the essay as a subject."
    },
    explanation: `"Comments ON [thing]" means feedback or remarks about that thing.
  "Comments ON your work." / "Remarks ON the proposal." / "Feedback ON the design."
  This 'on' signals the topic or object of the remarks.`,
    tip: "'Comments/feedback on [thing]' — 'on' marks what the feedback is about."
  },
  {
    sentence: "He gave a widely watched TED Talk ___ the neuroscience of habit formation.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "about": "'About' works here but 'on' is more standard for formal talks and presentations.",
      "of": "'A talk of neuroscience' is not idiomatic."
    },
    explanation: `Talks, speeches, and presentations are ON a topic in formal contexts.
  "A talk ON leadership." / "A speech ON immigration." / "A presentation ON Q3 results."
  In informal speech, 'about' is equally common: "a talk about stress".`,
    tip: "Formal talks and presentations: 'on'. Casual conversation: 'about' or 'on' both work."
  },
  {
    sentence: "There's an entire chapter in the textbook ___ irregular verb conjugation.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'A chapter of irregular verbs' suggests the chapter is made up of them, not that it covers them as a topic.",
      "for": "'A chapter for verbs' implies the chapter is a gift or resource intended for the verbs — not the topic relationship."
    },
    explanation: `Chapters, sections, and units in educational texts are ON their topic.
  "Chapter 5 is ON organic chemistry." / "The section ON grammar rules." / "A unit ON World War II."`,
    tip: "Academic sections and chapters are 'on' their topic."
  },
  {
    sentence: "She is widely regarded as the leading authority ___ early Byzantine coinage.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "about": "'An authority about' is grammatically possible but 'authority ON' is the established collocation.",
      "in": "'An authority in Byzantine coinage' works when referring to a field, but 'authority ON [specific topic]' is the standard phrase."
    },
    explanation: `"An authority ON [topic]" is a fixed collocation — always use ON, not about or in, with this sense.
  Examples: "an expert ON tax law", "a leading voice ON climate policy", "the world's authority ON ancient Rome".`,
    tip: "'An authority on [topic]' — fixed collocation. Always 'on'."
  },
  {
    sentence: "The panel discussion ___ immigration policy drew an unexpectedly large crowd.",
    answer: "on",
    alternatives: ["about"],
    focus: "on",
    category: "on — topic/subject",
    confusionPair: null,
    wrongAnswerTips: {
      "of": "'A discussion of immigration' can work but is more archaic; 'on' or 'about' are more current.",
      "for": "'A discussion for policy' implies the discussion is in service of policy — not the subject relationship."
    },
    explanation: `Debates, panels, and discussions are ON a topic — especially in formal contexts.
  "A panel discussion ON housing." / "A debate ON climate change." / "A roundtable ON health reform."
  'On' is consistently preferred over 'about' in formal/journalistic settings.`,
    tip: "Formal discussions, debates, and panels are 'on' a topic."
  },

  // ── ON: medium/device (continued) ─────────────────────────────────────────
  {
    sentence: "I first saw the ad ___ Instagram and clicked through immediately.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In Instagram' implies physically inside the app — but social platforms are 'on', not 'in'.",
      "at": "'At Instagram' treats it as a location, not a platform delivering content."
    },
    explanation: `Social media platforms use ON: "on Instagram", "on Twitter/X", "on TikTok", "on LinkedIn".
  Rule: digital platforms that deliver content are treated like broadcast media — use ON.
  Compare: "I read it IN a newspaper." (print) vs "I saw it ON Instagram." (digital platform)`,
    tip: "Social media platforms: always 'on' (on Instagram, on TikTok, on LinkedIn)."
  },
  {
    sentence: "She watched the entire three-part documentary ___ Netflix in one sitting.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In Netflix' is not standard — Netflix is a streaming platform, so it uses 'on'.",
      "at": "'At Netflix' would mean at the company location, not using the service."
    },
    explanation: `Streaming services follow the same ON rule as broadcast media.
  "ON Netflix", "ON HBO", "ON Disney+", "ON Amazon Prime", "ON Hulu".
  Rule: if it's a channel, service, or platform you watch or listen to, use ON.`,
    tip: "Streaming services (Netflix, HBO, Disney+) all take 'on'."
  },
  {
    sentence: "The president's announcement was broadcast ___ national television last night.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In television' is not standard. Television is a broadcast medium — use 'on'.",
      "through": "'Through national television' is possible but much less common — 'on' is the standard choice."
    },
    explanation: `Television and radio are the two classic ON media.
  "ON national television", "ON local TV", "ON cable", "ON public television".
  These are broadcast surfaces — ON indicates you're receiving the signal.`,
    tip: "Broadcast media — TV and radio — always take 'on'."
  },
  {
    sentence: "I've been reading user reviews ___ Reddit before making my decision.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In Reddit' is not standard. Online platforms and forums use 'on'.",
      "from": "'From Reddit' means Reddit is the source, which is close but 'on Reddit' is the standard phrase."
    },
    explanation: `Online forums and communities use ON: "on Reddit", "on Quora", "on Stack Overflow", "on Discord".
  Rule: any digital platform where you post, read, or interact = ON.`,
    tip: "Online forums and communities: 'on Reddit', 'on Discord', 'on Quora'."
  },
  {
    sentence: "He streamed the entire live concert ___ YouTube from his laptop.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In YouTube' is not standard. YouTube is a video platform — use 'on'.",
      "at": "'At YouTube' would mean at the YouTube headquarters, not on the platform."
    },
    explanation: `Video platforms use ON: "on YouTube", "on Vimeo", "on Twitch", "on Dailymotion".
  This follows the broader rule: any platform or channel that delivers video content = ON.`,
    tip: "Video platforms (YouTube, Twitch, Vimeo) all take 'on'."
  },
  {
    sentence: "She heard the breaking news ___ the car radio while stuck in traffic.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "from": "'From the car radio' works as a source phrase but 'on the radio' is the fixed idiomatic expression.",
      "in": "'In the car radio' means physically inside the device."
    },
    explanation: `"On the radio" is a fixed phrase — one of the classic examples of ON for media.
  Whether it's "on the radio" or "on the car radio", the preposition is always ON.
  Other fixed media phrases: "on the news", "on the air", "on the airwaves".`,
    tip: "'On the radio', 'on the news', 'on the air' — fixed phrases with 'on'."
  },
  {
    sentence: "They launched the new product exclusively ___ their website before going retail.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In their website' means inside the physical object — websites are platforms, so use 'on'.",
      "at": "'At their website' can work to mean the address, but 'on the website' is the standard phrasing for content."
    },
    explanation: `Websites use ON: "on their website", "on the homepage", "on the contact page".
  "At [URL]" means at that web address. "On the website" means on the platform/content.
  Both 'on' and 'at' are used for websites, but with slightly different meanings.`,
    tip: "'On the website' = on the platform. 'At [URL]' = at that address."
  },
  {
    sentence: "I'll send you the contract ___ email — check your inbox after this call.",
    answer: "on" ,
    alternatives: ["via", "by"],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In email' is less standard — we say 'on email' or 'by email' when referring to the medium.",
      "through": "'Through email' is possible but less idiomatic than 'on email' or 'via email'."
    },
    explanation: `Communication channels use ON: "on email", "on WhatsApp", "on Slack", "on Teams".
  "Via" and "by" also work for means of communication: "via email", "by text".
  But 'on' is natural when emphasizing the platform: "Let's do this ON Slack."`,
    tip: "Communication platforms (email, WhatsApp, Slack) take 'on' when emphasizing the channel."
  },
  {
    sentence: "The interview was first aired ___ a regional radio station before going national.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Aired in a radio station' is not standard. Radio stations are broadcast media — 'on' a station, not 'in' it.",
      "at": "'Aired at a radio station' means at the physical building, not broadcast by it."
    },
    explanation: `Content aired or broadcast uses ON: "ON a radio station", "ON a TV channel", "ON a streaming platform".
  The station or channel is the surface through which the content reaches listeners.`,
    tip: "Content aired or broadcast is always 'on' a station or channel."
  },
  {
    sentence: "She has been posting travel updates daily ___ her blog since January.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — medium/device",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Posting in her blog' is sometimes used informally, but 'on her blog' is the standard phrase.",
      "at": "'At her blog' means at the web address — 'on her blog' means on the platform/content area."
    },
    explanation: `Blogs and personal publishing platforms use ON: "on her blog", "on his podcast", "on the channel".
  Rule: any platform where you publish or create content = ON.
  Compare: "published IN a journal" (print) vs "posted ON a blog" (digital).`,
    tip: "Blogs, podcasts, and digital channels take 'on'."
  },

  // ── ON: transportation (large vehicles, continued) ─────────────────────────
  {
    sentence: "He read an entire novel ___ the plane from New York to London.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the plane' is heard in some varieties of English but 'on the plane' is the standard American English form. Planes are large vehicles you board — use 'on'.",
      "during": "'During the plane' is not grammatical — 'during the flight' works, but the question asks about vehicle reference."
    },
    explanation: `Planes, like trains and buses, use ON — they are large vehicles you board.
  "ON the plane", "ON the flight", "ON the aircraft" — all correct.
  You can walk the aisle, use the bathroom, move around — hence ON.`,
    tip: "Planes are large vehicles you board — always 'on the plane'."
  },
  {
    sentence: "She struck up a conversation with a complete stranger ___ the subway.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the subway' refers to the underground system as a place (the tunnel network). 'On the subway' means on the train itself.",
      "at": "'At the subway' means at the station entrance or platform, not inside the train."
    },
    explanation: `"On the subway" means on the subway train — a large vehicle you ride.
  Compare: "in the subway" (in the underground system generally) vs "on the subway" (on the train).
  In practice, "on the subway" is far more common for riding it.`,
    tip: "'On the subway' = riding the train. 'In the subway' = in the underground system."
  },
  {
    sentence: "There were no seats left ___ the bus, so they stood all the way home.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the bus' is less standard in American English for riding it — use 'on the bus'.",
      "at": "'At the bus' would mean near the physical vehicle, not inside riding it."
    },
    explanation: `"On the bus" is the standard phrase for riding or being a passenger on a bus.
  You can stand, move to the back, or walk down the aisle — all signs of an ON vehicle.
  "I take the bus ON Monday." (day) but "I'm ON the bus right now." (vehicle)`,
    tip: "'On the bus' — buses are large board-able vehicles. Always 'on'."
  },
  {
    sentence: "The band performed a surprise acoustic set ___ the overnight ferry to the island.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the ferry' is not standard. Ferries and ships are large watercraft you board — use 'on'.",
      "at": "'At the ferry' means at the dock or terminal, not on the vessel itself."
    },
    explanation: `Ferries and ships use ON — they are large vessels you board and move around on.
  "ON the ferry", "ON the cruise ship", "ON the yacht", "ON the boat" (large enough to move around).
  Contrast: a small rowboat or kayak — you might use 'in' for those (very small, enclosed posture).`,
    tip: "Ferries and large boats use 'on' — you can stand and move around on them."
  },
  {
    sentence: "Passengers were asked to remain seated ___ the ship during the storm.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the ship' is not standard for being a passenger aboard it.",
      "inside": "'Inside the ship' is physically descriptive but 'on the ship' is the idiomatic preposition for passengers."
    },
    explanation: `Ships use ON — same rule as planes and trains.
  "ON the ship", "ON the vessel", "ON board" (note: 'on board' is a fixed phrase, no article).
  Also: "on a cruise", "on a voyage", "on the crossing".`,
    tip: "Ships and cruise vessels: always 'on'. 'On board' is the fixed phrase."
  },
  {
    sentence: "He spilled his coffee all over himself ___ the train and was completely mortified.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the train' is used in some British dialects but 'on the train' is standard American English.",
      "at": "'At the train' means at the station — not on the vehicle."
    },
    explanation: `Any activity or event happening while riding a train uses 'on the train'.
  "I spilled my coffee ON the train." / "She slept ON the train." / "He got off ON the wrong stop."
  The train is the vehicle — ON is the consistent preposition.`,
    tip: "Any activity while riding a train = 'on the train'."
  },
  {
    sentence: "She always gets motion sick ___ boats, regardless of how big or small they are.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In boats' is used for small craft where you sit inside (like a canoe), but the general statement about boats uses 'on'.",
      "at": "'At boats' means near boats, not riding them."
    },
    explanation: `When speaking generally about riding boats or ships, use ON.
  "Get sick ON a boat." / "Feel uncomfortable ON a ship." / "Sleep ON a ferry."
  Even for small boats in general statements, ON is typical in American English.`,
    tip: "Riding or being a passenger on any boat = 'on'."
  },
  {
    sentence: "Please remain seated until we reach the gate — there is still time ___ the plane.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the plane' — while used in British English, American English consistently prefers 'on the plane'.",
      "inside": "'Inside the plane' is descriptive but 'on the plane' is the idiomatic standard."
    },
    explanation: `Being on a plane during the flight, boarding, or deplaning always uses ON.
  "Still ON the plane." / "Boarding the plane." / "Get off the plane."
  'On' and 'off' are natural opposites here — you get ON and you get OFF.`,
    tip: "'On the plane' throughout the journey — from boarding to deplaning."
  },
  {
    sentence: "I ran into my college professor ___ the metro this morning — small world.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the metro' refers to the underground system; 'on the metro' means on the train itself.",
      "at": "'At the metro' means at the station or entrance, not riding the train."
    },
    explanation: `Metro / underground / tube trains all use ON.
  "ON the metro", "ON the tube", "ON the underground", "ON the light rail".
  They are all large transit vehicles you board — consistent with the ON rule.`,
    tip: "Metro and light rail vehicles = 'on'. Same as trains and buses."
  },
  {
    sentence: "They were served a three-course meal ___ the overnight train to Vienna.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the overnight train' is not standard American English.",
      "during": "'During the overnight train' is not grammatical — you can say 'during the journey' but the vehicle reference uses 'on'."
    },
    explanation: `Activities and services during a train journey use 'on the train'.
  "Served a meal ON the train." / "There's Wi-Fi ON the train." / "They watched a movie ON the plane."
  The vehicle is the stage for all of these activities.`,
    tip: "Meals, entertainment, and services during a journey happen 'on' the vehicle."
  },

  // ── ON: state/condition (continued) ────────────────────────────────────────
  {
    sentence: "Several items in that aisle are ___ sale this week — the deals are incredible.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "for": "'For sale' means available to be bought — it's for sale but not necessarily discounted. 'On sale' means currently discounted.",
      "in": "'In sale' is not standard English. The active discounted state uses 'on'."
    },
    explanation: `"On sale" = currently discounted/reduced in price.
  "For sale" = available to be purchased (may or may not be discounted).
  This is an important distinction: "The house is FOR sale." ≠ "The house is ON sale."
  Other similar active states: "on offer", "on promotion", "on clearance".`,
    tip: "'On sale' = discounted now. 'For sale' = available to buy. Don't mix them up!"
  },
  {
    sentence: "The doctor is ___ call tonight and has to stay near the hospital.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In call' is not a standard phrase. 'On call' is the fixed expression for being available for emergencies.",
      "at": "'At call' is not idiomatic — 'on call' is the fixed phrase."
    },
    explanation: `"On call" is a fixed phrase meaning available and ready to respond if needed.
  Common for doctors, nurses, IT staff, emergency workers.
  Other similar duty phrases: "on duty", "on shift", "on watch", "on standby".`,
    tip: "'On call', 'on duty', 'on shift' — being available for work uses 'on'."
  },
  {
    sentence: "The support line will put you ___ hold for about twenty minutes — it's frustrating.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Put you in hold' is not standard English. 'On hold' is the fixed phrase.",
      "at": "'Put you at hold' is not idiomatic."
    },
    explanation: `"On hold" is a fixed phrase — you're in a waiting state during a phone call.
  Figuratively: "put the project ON hold" = pause it temporarily.
  It's an active suspended state — hence ON.
  Other similar phrases: "on pause", "on ice" (informal, = postponed).`,
    tip: "'On hold' — waiting state during a call or pause on a project. Fixed phrase with 'on'."
  },
  {
    sentence: "She's been ___ blood pressure medication ever since her diagnosis last spring.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "with": "'With medication' describes having it as a possession, not being in an ongoing treatment regimen.",
      "in": "'In medication' is not standard English for taking medicine regularly."
    },
    explanation: `Taking medication regularly = "on [medication]" — expressing an ongoing medical state.
  "She's ON antibiotics." / "He's ON insulin." / "They put her ON chemotherapy."
  Also: "on a diet", "on a treatment plan", "on a regimen" — all ongoing health states.`,
    tip: "'On medication / antibiotics / a diet' — ongoing health states use 'on'."
  },
  {
    sentence: "The factory workers have been ___ strike for over two weeks now.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In strike' is not standard. The ongoing labor action is expressed as 'on strike'.",
      "at": "'At strike' is not idiomatic in English."
    },
    explanation: `"On strike" is a fixed phrase for workers refusing to work in protest.
  The 'on' signals an active, ongoing state — they are currently in this condition.
  Related: "go ON strike", "be ON strike", "come OFF strike".`,
    tip: "'On strike' — workers in an active protest state. Fixed phrase with 'on'."
  },
  {
    sentence: "Many employees were ___ extended leave during the company restructuring.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In leave' is not standard. Types of absence from work use 'on'.",
      "at": "'At leave' is not idiomatic for this meaning."
    },
    explanation: `Types of absence from work are expressed with ON: "on leave", "on sabbatical", "on maternity leave", "on sick leave", "on vacation".
  All of these are active states of being away from the normal work routine — hence ON.`,
    tip: "'On leave / vacation / sabbatical / maternity leave' — absence states use 'on'."
  },
  {
    sentence: "The new policy will be ___ trial for three months before a final decision.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In trial' is not standard in this sense — 'in' could work in legal contexts ('on trial' is actually correct in law too).",
      "for": "'For trial' means intended for a trial — not the same as currently being tested."
    },
    explanation: `"On trial" and "on a trial basis" = being tested or evaluated in an active ongoing way.
  Legal: "the suspect is ON trial" (active proceedings).
  Business: "the software is ON trial" (being tested before purchase).
  Both express an active evaluative state.`,
    tip: "'On trial' and 'on a trial basis' — testing or legal proceedings in progress use 'on'."
  },
  {
    sentence: "He's been ___ edge all week — something must be bothering him.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In edge' is not standard English. The idiom is 'on edge'.",
      "at": "'At edge' is not idiomatic — 'on edge' is the fixed expression for nervous tension."
    },
    explanation: `"On edge" is a fixed idiom meaning nervous, anxious, or irritable.
  It's a state — hence ON. Similar emotional/mental state idioms: "on alert", "on guard", "on tenterhooks".
  "Be ON edge", "feel ON edge", "put someone ON edge" — all common.`,
    tip: "'On edge' = nervous/anxious. Fixed idiom — always 'on'."
  },
  {
    sentence: "The suspect was released from prison but is still ___ probation for two more years.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In probation' is not standard. The supervised release state is expressed as 'on probation'.",
      "under": "'Under probation' is sometimes used but 'on probation' is far more standard."
    },
    explanation: `"On probation" = in a supervised conditional release or trial employment period.
  Legal: "released ON probation", "still ON parole", "put ON probation".
  Employment: "ON probation" for a new hire being evaluated before permanent hire.
  Both uses describe an active conditional state.`,
    tip: "'On probation / parole' — supervised conditional states use 'on'."
  },
  {
    sentence: "The band is currently ___ tour in Europe and won't be reachable easily.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In tour' is not standard English. The active touring state uses 'on'.",
      "at": "'At tour' is not idiomatic — performers on the road are 'on tour'."
    },
    explanation: `"On tour" = actively traveling and performing in multiple locations.
  The 'on' signals this active, ongoing professional state.
  Related: "go ON tour", "be ON the road", "come OFF tour".
  Other professional travel states: "ON assignment", "ON location", "ON a business trip".`,
    tip: "'On tour', 'on the road', 'on assignment' — active professional travel states use 'on'."
  },

  // ── IN: enclosed space ─────────────────────────────────────────────────────
  {
    sentence: "The spare key is hidden ___ the drawer next to the stove.",
    answer: "in",
    alternatives: [],
    focus: "in",
    category: "in — enclosed space",
    confusionPair: "in / on / at (place)",
    wrongAnswerTips: {
      "on": "'On the drawer' means resting on top of it. A drawer is a container — things inside it use 'in'.",
      "at": "'At the drawer' means near or at the location of the drawer, not inside it."
    },
    explanation: `"In" is used for enclosed or bounded spaces — anywhere something is surrounded or contained.
  Examples: "in a box", "in a room", "in a building", "in a country", "in a pocket".
  Rule: if it has walls, sides, or boundaries that surround the object, use IN.`,
    tip: "If you can put a lid on it or close it up, it's probably 'in'."
  },
  {
    sentence: "She's been living ___ New York for almost a decade.",
    answer: "in",
    alternatives: [],
    focus: "in",
    category: "in — city/country/region",
    confusionPair: "in / at (place)",
    wrongAnswerTips: {
      "at": "'At New York' treats the city as a single point — we use 'at' for precise points (a bus stop, a table). Cities, countries, and regions use 'in' because they have area and boundaries.",
      "on": "'On New York' doesn't work — 'on' is for surfaces and islands (e.g., 'on Long Island')."
    },
    explanation: `Cities, states, countries, and regions use IN — they have geographical boundaries.
  Examples: "in Paris", "in California", "in Europe", "in the South".
  Exception: small islands often use ON: "on the island", "on Nantucket", "on Oahu".
  And specific addresses use AT: "at 123 Main Street".`,
    tip: "The larger the place, the more likely it takes 'in'. Cities, countries, and continents always use 'in'."
  },

  // ── IN: time periods ───────────────────────────────────────────────────────
  {
    sentence: "She graduated ___ the spring of 2019, just before everything changed.",
    answer: "in",
    alternatives: [],
    focus: "in",
    category: "in — time periods",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "on": "'On the spring' is incorrect. 'On' is for specific days and dates, not seasons or months.",
      "at": "'At the spring' doesn't work for time. 'At' is for clock times and a few set phrases like 'at night'."
    },
    explanation: `Use IN for longer time periods: months, seasons, years, decades, centuries.
  Examples: "in January", "in summer", "in 2024", "in the 1990s", "in the 21st century".
  Memory tip → IN (big period) → ON (a day) → AT (a moment).`,
    tip: "Months, seasons, years, and decades all take 'in'."
  },
  {
    sentence: "I usually feel more creative ___ the morning than at any other time.",
    answer: "in",
    alternatives: [],
    focus: "in",
    category: "in — parts of the day",
    confusionPair: "in / at (time)",
    wrongAnswerTips: {
      "at": "Close! 'At the morning' is not standard. Parts of the day (morning, afternoon, evening) use 'in'. Exception: 'at night' is a fixed phrase — the only part of the day that uses 'at'.",
      "on": "'On the morning' can work with a specific day: 'on the morning of June 3rd' — but for general habit, use 'in'."
    },
    explanation: `Parts of the day: morning, afternoon, and evening use IN.
  "At night" is the one exception — it's a fixed phrase in English.
  Examples: "in the morning", "in the afternoon", "in the evening" BUT "at night", "at midnight", "at noon".`,
    tip: "Morning / afternoon / evening = in. Night = at. Memorize the exception!"
  },

  // ── AT: specific point/location ────────────────────────────────────────────
  {
    sentence: "Let's meet ___ the corner of Fifth and Broadway.",
    answer: "at",
    alternatives: [],
    focus: "at",
    category: "at — specific point/location",
    confusionPair: "in / at (place)",
    wrongAnswerTips: {
      "in": "'In the corner' means inside the corner of a room — a contained space. A street corner is a point, not an enclosure — use 'at'.",
      "on": "'On the corner' is also used colloquially and is acceptable, but 'at the corner' is more precise and standard."
    },
    explanation: `"At" marks a specific point — a precise location rather than an area.
  Examples: "at the bus stop", "at the door", "at the top of the stairs", "at the intersection".
  Contrast: "in the building" (inside, area) vs "at the building" (at that point, outside or general).`,
    tip: "'At' = a pinpoint on a map. 'In' = inside an area."
  },
  {
    sentence: "She's really good ___ solving problems under pressure.",
    answer: "at",
    alternatives: [],
    focus: "at",
    category: "at — skill/ability",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'Good in solving' is not standard English. 'Good at' is the fixed collocation for skills.",
      "for": "'Good for' means beneficial or suited to a purpose: 'This is good for your health.' It doesn't express skill."
    },
    explanation: `"Good at" is a fixed collocation in English — always use AT for skills and abilities.
  Examples: "great AT math", "terrible AT cooking", "excellent AT negotiating".
  Also: "quick at", "slow at", "skilled at", "hopeless at".
  This is one of the most tested preposition patterns in English exams.`,
    tip: "'Good at something' = skill. Always 'at'. Never 'in' or 'for'."
  },

  // ── AT: clock times ────────────────────────────────────────────────────────
  {
    sentence: "The train departs ___ 6:45 in the morning — don't be late.",
    answer: "at",
    alternatives: [],
    focus: "at",
    category: "at — clock times",
    confusionPair: "in / at / on (time)",
    wrongAnswerTips: {
      "in": "'In 6:45' is incorrect. 'In' is for periods, not specific clock times.",
      "on": "'On 6:45' doesn't work — 'on' is for days and dates, not times."
    },
    explanation: `Exact clock times always use AT.
  Examples: "at 3 p.m.", "at noon", "at midnight", "at half past six", "at 9:00 sharp".
  Also used for mealtimes in some dialects: "at breakfast", "at lunch", "at dinner".
  Memory tip → AT = exact target time, like an arrow hitting a precise point on a clock.`,
    tip: "Clock times are pinpoints in time — always use 'at'."
  },

  // ── FOR vs SINCE ───────────────────────────────────────────────────────────
  {
    sentence: "He's been working at this company ___ 2015 without a single promotion.",
    answer: "since",
    alternatives: [],
    focus: "for/since",
    category: "since — starting point in time",
    confusionPair: "for / since",
    wrongAnswerTips: {
      "for": "'For 2015' doesn't work — 'for' goes with a duration (a length of time): 'for 10 years'. '2015' is a starting point on the calendar, so use 'since'.",
      "from": "'From 2015' needs a paired 'to': 'from 2015 to 2025'. On its own with present perfect, use 'since'."
    },
    explanation: `FOR vs SINCE — one of the most confused pairs in English:
  FOR + duration (how long): "for 10 years", "for three months", "for a long time".
  SINCE + starting point (when it began): "since 2015", "since Monday", "since breakfast".
  Test: ask yourself — is this a LENGTH of time, or a POINT in time when it started?`,
    tip: "Since = a starting point. For = a duration. Can you replace it with 'a period of time'? → for."
  },
  {
    sentence: "I haven't eaten anything ___ almost eight hours — I'm starving.",
    answer: "for",
    alternatives: [],
    focus: "for/since",
    category: "for — duration",
    confusionPair: "for / since",
    wrongAnswerTips: {
      "since": "'Since almost eight hours' doesn't work — 'since' needs a fixed point in time (a year, a date, a moment). 'Almost eight hours' is a duration, so use 'for'.",
      "in": "'In almost eight hours' implies the action will happen in the future: 'I'll eat in eight hours.' Here it's describing a past duration."
    },
    explanation: `FOR is used with a duration — any expression of how long.
  Examples: "for two days", "for a week", "for centuries", "for a few minutes", "for hours".
  Always ask: is this a span of time? If yes → FOR.
  Compare: "I've known her FOR ten years." (duration) / "I've known her SINCE high school." (starting point)`,
    tip: "If you can say 'a period of ___ ', it's 'for'. Eight hours = a period of time → for."
  },

  // ── BY vs UNTIL ────────────────────────────────────────────────────────────
  {
    sentence: "Please submit the report ___ Friday — it's needed for the board meeting.",
    answer: "by",
    alternatives: [],
    focus: "by/until",
    category: "by — deadline",
    confusionPair: "by / until",
    wrongAnswerTips: {
      "until": "'Until Friday' means continuously up to Friday — as in, you're doing something non-stop until that moment. 'By Friday' means at some point before or on Friday. Deadlines use 'by'.",
      "before": "'Before Friday' works grammatically but implies it must be done Thursday or earlier. 'By Friday' includes Friday itself."
    },
    explanation: `BY vs UNTIL — a classic confusion:
  BY = no later than (deadline). The action happens at or before the time.
  UNTIL = continuously up to a point. An ongoing state or action continues until that moment.
  Examples:
    "Stay UNTIL midnight." (continuous — you're there the whole time)
    "Arrive BY midnight." (deadline — be there no later than midnight)
    "I worked UNTIL 6 p.m." (continuous work)
    "Finish the project BY 6 p.m." (deadline)`,
    tip: "BY = deadline (do it before then). UNTIL = duration (keep doing it up to then)."
  },
  {
    sentence: "She waited ___ the very last customer left before locking up.",
    answer: "until",
    alternatives: ["till"],
    focus: "by/until",
    category: "until — continuous up to a point",
    confusionPair: "by / until",
    wrongAnswerTips: {
      "by": "'Waited by' doesn't work here — 'by' is for deadlines (an action completed no later than a time). Waiting is a continuous action that lasted up to a moment — use 'until'.",
      "to": "'Waited to' changes the meaning — 'waited to leave' means waiting in order to leave. Use 'until' for continuous duration."
    },
    explanation: `UNTIL (or TILL — equally correct, slightly informal) marks the end point of a continuous action or state.
  The key: the action is ONGOING up to that moment.
  Examples: "I'll be here UNTIL 5." / "She cried UNTIL she fell asleep." / "Wait UNTIL I call you."
  Contrast: "I'll be here BY 5." = I'll arrive no later than 5 (one-time action, deadline).`,
    tip: "Waiting, working, staying, sleeping — ongoing actions end 'until'. One-time completions have a deadline 'by'."
  },

  // ── OVER vs ABOVE ──────────────────────────────────────────────────────────
  {
    sentence: "The helicopter hovered ___ the crash site for nearly an hour.",
    answer: "over",
    alternatives: ["above"],
    focus: "over/above",
    category: "over — directly above / covering",
    confusionPair: "over / above",
    wrongAnswerTips: {
      "on": "'On the crash site' means touching the surface. The helicopter is in the air, not touching anything — use 'over' or 'above'.",
      "upon": "'Upon' is archaic/formal and rarely used in modern American English. 'Over' is the natural choice."
    },
    explanation: `OVER vs ABOVE — they're close, but not identical:
  OVER = directly above, often with movement or covering: "fly over the city", "a bridge over the river", "a blanket over the bed".
  ABOVE = higher than, no specific alignment needed: "the sun above the horizon", "10,000 feet above sea level", "above average".
  Rule: if there's movement or direct vertical alignment → OVER. If just higher than (no specific link) → ABOVE.`,
    tip: "Over implies directly above or covering. Above is just 'higher than' — no direct connection needed."
  },
  {
    sentence: "Her score was well ___ the class average — she aced it.",
    answer: "above",
    alternatives: ["over"],
    focus: "over/above",
    category: "above — higher than (figurative)",
    confusionPair: "over / above",
    wrongAnswerTips: {
      "on": "'On the average' doesn't work here — 'on' isn't used for comparative levels.",
      "beyond": "'Beyond the average' works in informal speech but isn't the standard preposition for numerical comparison."
    },
    explanation: `For figurative or numerical comparisons — levels, amounts, standards — ABOVE is preferred.
  Examples: "above average", "above the speed limit", "above freezing", "above expectations".
  OVER also works for quantities: "over 100 people", "over $500", "over the limit" — these are interchangeable.
  But for abstract levels and standards, ABOVE is more natural.`,
    tip: "Figurative 'higher than' = above. 'More than a number' = over or above (both fine)."
  },

  // ── INTO vs IN ─────────────────────────────────────────────────────────────
  {
    sentence: "She burst ___ the room and announced she'd gotten the job.",
    answer: "into",
    alternatives: [],
    focus: "into/in",
    category: "into — movement entering a space",
    confusionPair: "into / in",
    wrongAnswerTips: {
      "in": "'Burst in the room' is not standard — 'in' shows location (already there), not movement. She's moving from outside to inside, so use 'into'.",
      "inside": "'Burst inside the room' is informal and not the standard preposition. 'Into' captures the movement perfectly."
    },
    explanation: `IN vs INTO — location vs movement:
  IN = already there (static location): "She is IN the room."
  INTO = movement from outside to inside (dynamic): "She walked INTO the room."
  Rule: if there's movement toward or entering something → INTO. If it's a static location → IN.
  More examples: "She fell INTO the pool." / "He ran INTO the building." / "Pour the milk INTO the bowl."`,
    tip: "Into = entering. In = already inside. Is there movement? Use 'into'."
  },

  // ── THROUGH vs ACROSS ─────────────────────────────────────────────────────
  {
    sentence: "They drove ___ the tunnel in total darkness for about two miles.",
    answer: "through",
    alternatives: [],
    focus: "movement",
    category: "through — movement inside an enclosed space",
    confusionPair: "through / across",
    wrongAnswerTips: {
      "across": "'Across' means side to side on an open surface: across a field, across a street. A tunnel is enclosed — you pass inside it, so use 'through'.",
      "in": "'Drove in the tunnel' sounds like they're stationary inside it, not moving through."
    },
    explanation: `THROUGH vs ACROSS:
  THROUGH = movement inside an enclosed or 3D space — you enter and exit: through a tunnel, through a forest, through a crowd.
  ACROSS = movement over an open, flat surface from one side to the other: across a bridge, across a street, across the ocean.
  Key question: Are you moving inside something (enclosed) or over something (open surface)?`,
    tip: "Enclosed space (tunnel, forest, crowd) = through. Open surface (street, field, lake) = across."
  },
  {
    sentence: "She swam ___ the lake before breakfast every single morning.",
    answer: "across",
    alternatives: [],
    focus: "movement",
    category: "across — movement over an open surface",
    confusionPair: "through / across",
    wrongAnswerTips: {
      "through": "'Through the lake' implies swimming inside the water volume — technically possible but strange. We think of a lake as a surface to cross from one side to another — use 'across'.",
      "over": "'Swam over the lake' implies she was above it (like flying). She was IN the water crossing it — use 'across'."
    },
    explanation: `ACROSS is used when you cross from one side of an open surface to the other.
  Examples: "across the street", "across the room", "across the country", "across the table".
  The surface is open and flat (or treated as flat) — you go from edge to edge.
  Compare: "She walked THROUGH the park." (inside, maybe winding) vs "She walked ACROSS the park." (straight, side to side)`,
    tip: "Side to side on an open surface = across. Inside an enclosed space = through."
  },

  // ── AT vs IN (events/places) ───────────────────────────────────────────────
  {
    sentence: "We ran into each other ___ a concert downtown last weekend.",
    answer: "at",
    alternatives: [],
    focus: "at",
    category: "at — events",
    confusionPair: "in / at (place)",
    wrongAnswerTips: {
      "in": "'In a concert' sounds like you're physically inside the music — 'at' treats the concert as a specific event/location you attend.",
      "on": "'On a concert' doesn't work — 'on' isn't used for events attended."
    },
    explanation: `Use AT for events and public gatherings — concerts, conferences, parties, games, meetings.
  Examples: "at a concert", "at the game", "at the party", "at the meeting", "at the festival".
  Think of 'at' as marking a point on a social map — you're at that event.
  Compare: "in a theater" (the building, inside) vs "at a theater" (at that location/event).`,
    tip: "Events you attend — concerts, games, parties — use 'at'. It's the event-attendance preposition."
  },

  // ── ON: transportation (large vehicles) ───────────────────────────────────
  {
    sentence: "She fell asleep ___ the train and missed her stop completely.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — transportation (large vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "in": "'In the train' is used in British English but is less common in American English. More importantly, the rule helps: large vehicles you board and move around in use 'on'.",
      "at": "'At the train' means at the train station, not on the vehicle."
    },
    explanation: `Transportation prepositions follow a size/boarding rule:
  ON = large vehicles you board: bus, train, plane, subway, ship, ferry.
  IN = small vehicles you get into (enclosed): car, taxi, truck, elevator.
  Examples: "on the bus", "on the train", "on the plane", "on a cruise ship".
  vs: "in the car", "in a taxi", "in an Uber".
  Memory tip: if you can stand up and walk around on it → ON. If you're enclosed and seated → IN.`,
    tip: "Large vehicles you board = on (plane, train, bus). Small enclosed vehicles = in (car, taxi)."
  },
  {
    sentence: "They were stuck ___ a taxi for two hours in rush-hour traffic.",
    answer: "in",
    alternatives: [],
    focus: "on",
    category: "in — transportation (small vehicles)",
    confusionPair: "on / in (transport)",
    wrongAnswerTips: {
      "on": "'On a taxi' sounds odd — taxis are small enclosed vehicles. Unlike a train or bus, you can't stand up or walk around. Small, enclosed vehicles use 'in'.",
      "at": "'At a taxi' means near a taxi, not inside one."
    },
    explanation: `Small enclosed vehicles use IN: car, taxi, cab, truck, van, elevator, helicopter (usually).
  You get IN a car — you're enclosed, seated, cannot move around.
  You get ON a train — you can walk, stand, move about.
  Also note: "on foot", "on horseback", "on a bike" — these use 'on' because you're on top, not enclosed.`,
    tip: "Can you stand up and move around? ON. Are you sitting enclosed? IN."
  },

  // ── ON: state/condition ────────────────────────────────────────────────────
  {
    sentence: "The warehouse ___ the east side of town has been ___ fire for three hours.",
    answer: "on",
    alternatives: [],
    focus: "on",
    category: "on — state/condition",
    confusionPair: null,
    wrongAnswerTips: {
      "in": "'In fire' is not a standard English phrase. The fixed expression is 'on fire' — meaning actively burning.",
      "with": "'With fire' changes the meaning entirely — it implies fire is a tool or accompaniment."
    },
    explanation: `"On fire" is a fixed phrase meaning actively burning or, figuratively, performing exceptionally.
  "On" + condition expresses an active ongoing state:
  Examples: "on fire", "on sale", "on hold", "on strike", "on duty", "on vacation", "on leave".
  These are all states someone or something is currently in — 'on' signals that active status.`,
    tip: "Many active states are expressed with 'on': on fire, on sale, on hold, on vacation."
  },

];

module.exports = questions;
