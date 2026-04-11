# Vocabulary App — Design Document

## Overview

A Claude skill that turns your vocabulary folder into a personal English learning companion. You tell Claude a word, it teaches it to you like a professional English teacher would. You can also quiz yourself on words you've already added.

---

## Data Storage

All words are saved in a single file:

**`/Users/feiyijiang/Documents/project/GitHub/AmericanShorthair/vocabulary/vocabulary.json`**

Each entry looks like this:

```json
{
  "word": "ephemeral",
  "phonetics": "/ɪˈfem.ər.əl/",
  "part_of_speech": "adjective",
  "definition": "Lasting for only a short time; transitory.",
  "example_sentences": [
    "The beauty of cherry blossoms is ephemeral — they bloom for just one week.",
    "Social media trends are often ephemeral, fading as quickly as they appear."
  ],
  "synonyms": ["fleeting", "transient", "momentary", "brief"],
  "antonyms": ["permanent", "eternal", "enduring"],
  "usage_notes": "Often used in literary or formal writing to add emotional weight. Common in discussions of nature, art, and time.",
  "etymology": "From Greek 'ephemeros' — epi (on) + hemera (day), meaning 'lasting only a day'.",
  "memory_tip": "Think of 'ephemeral' like a soap bubble — beautiful but gone in an instant.",
  "added_date": "2026-04-10"
}
```

---

## Features

### 1. Add a Word

**Trigger phrases:** "add [word]", "explain [word]", "teach me [word]", or just typing a word/phrase

**What Claude does:**
- Provides a clear, natural definition
- Shows phonetic pronunciation
- Gives part of speech and grammar notes
- Offers 2–3 example sentences (real-world, not textbook)
- Lists synonyms and antonyms with nuance (e.g., "fleeting" is softer than "temporary")
- Shares etymology — the origin story of the word
- Adds a memorable memory tip or association
- Notes common usage context (formal vs. casual, American vs. British, etc.)
- Saves the entry to `vocabulary.json` automatically

**Example interaction:**
> You: "Add ephemeral"
> Claude: [Full English-teacher-style explanation] → Saves to vocabulary.json ✓

---

### 2. Quiz Mode

**Trigger phrases:** "quiz me", "start a quiz", "test me on my words", "give me 10 words"

**How it works:**
1. Claude randomly picks 5, 10, or 20 words from your vocabulary (you choose)
2. Claude shows the **word only** — no hints
3. You think about it, then press **Enter** (send any message, even just a space)
4. Claude reveals the **full explanation** for that word
5. Repeat until all words in the quiz are done
6. Claude gives a brief recap at the end

**Example interaction:**
> Claude: "Quiz time! Word 1 of 10: **ephemeral** — press Enter when ready"
> You: [Enter]
> Claude: "ephemeral /ɪˈfem.ər.əl/ — adjective. Lasting for only a short time..."

---

## File Structure

```
/vocabulary/
├── vocabulary.json           ← All your words live here
├── quiz.html                 ← The quiz app (open via serve.py, not directly)
├── serve.py                  ← Local server script — run this to launch the app
└── vocabulary-app-design.md  ← This document
```

The skill itself lives in your Claude skills folder and works across all conversations.

---

## Running the Quiz App

The quiz app must be launched via `serve.py`, not by opening `quiz.html` directly from Finder. This is because browsers block local files from reading other local files for security reasons — the server works around this.

**Steps:**

1. Open **Terminal**
2. Run:
   ```
   python3 /Users/feiyijiang/Documents/project/GitHub/AmericanShorthair/vocabulary/serve.py
   ```
3. The quiz opens automatically at `http://localhost:8765/quiz.html`
4. Your `vocabulary.json` is loaded automatically — no file picking needed
5. To stop the server, press `Ctrl+C` in Terminal

**Note:** Keep Terminal open while using the quiz. The server runs in the background as long as the Terminal window is open.

---

## What's NOT in scope (for now)

- No spaced repetition / tracking which words you've seen
- No difficulty ratings
- No import from external word lists
- No audio pronunciation

These could be added in a future version if useful.

---

*Ready to build? Let Claude know and it will create the skill.*
