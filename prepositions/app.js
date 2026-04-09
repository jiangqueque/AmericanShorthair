#!/usr/bin/env node
'use strict';

const questions = require('./questions');
const {
  bold, dim, green, red, yellow, blue, cyan, magenta, white,
  line, hr, blank, box,
  createRL, ask, pressEnter,
  checkAnswer, normalize, scoreLabel, wrap
} = require('./utils');

// ── Helpers ───────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick(arr, n) {
  return shuffle(arr).slice(0, n);
}

// ── Focus menu ────────────────────────────────────────────────────────────────
const FOCUS_OPTIONS = [
  { key: 'on',        label: 'on',          desc: 'surface, cost, topic, medium, state, days…' },
  { key: 'in',        label: 'in',          desc: 'enclosed space, cities, time periods, parts of day…' },
  { key: 'at',        label: 'at',          desc: 'precise point, clock times, events, skills…' },
  { key: 'for/since', label: 'for / since', desc: 'duration vs starting point — very commonly confused' },
  { key: 'by/until',  label: 'by / until',  desc: 'deadline vs continuous duration' },
  { key: 'over/above',label: 'over / above',desc: 'directly above vs higher than' },
  { key: 'into/in',   label: 'into / in',   desc: 'movement entering vs static location' },
  { key: 'movement',  label: 'movement',    desc: 'through, across, over, along, toward…' },
];

// ── Splash screen ─────────────────────────────────────────────────────────────
function showSplash() {
  console.clear();
  blank();
  console.log(cyan(bold('  ╔══════════════════════════════════════════════════════════╗')));
  console.log(cyan(bold('  ║                                                          ║')));
  console.log(cyan(bold('  ║       📚  P R E P O S I T I O N   P R A C T I C E       ║')));
  console.log(cyan(bold('  ║              Master English Prepositions                 ║')));
  console.log(cyan(bold('  ║                                                          ║')));
  console.log(cyan(bold('  ╚══════════════════════════════════════════════════════════╝')));
  blank();
  console.log(dim('  5 questions per session · instant feedback · teacher explanations'));
  blank();
}

// ── Mode selection ────────────────────────────────────────────────────────────
async function chooseMode(rl) {
  console.log(bold('  How would you like to study?'));
  blank();
  console.log(`  ${cyan(bold('[1]'))} Random Mix    — 5 questions from the full bank`);
  console.log(`  ${cyan(bold('[2]'))} Focus Mode     — drill one preposition or pair`);
  blank();

  let choice = '';
  while (!['1', '2'].includes(choice)) {
    choice = await ask(rl, '  Your choice: ');
    if (!['1', '2'].includes(choice)) {
      console.log(red('  Please enter 1 or 2.'));
    }
  }
  return choice;
}

// ── Focus selection ───────────────────────────────────────────────────────────
async function chooseFocus(rl) {
  blank();
  console.log(bold('  Choose your focus:'));
  blank();
  FOCUS_OPTIONS.forEach((opt, i) => {
    console.log(`  ${cyan(bold(`[${i + 1}]`))} ${bold(opt.label.padEnd(14))} ${dim(opt.desc)}`);
  });
  blank();

  let idx = -1;
  while (idx < 0 || idx >= FOCUS_OPTIONS.length) {
    const raw = await ask(rl, '  Your choice: ');
    idx = parseInt(raw, 10) - 1;
    if (isNaN(idx) || idx < 0 || idx >= FOCUS_OPTIONS.length) {
      console.log(red(`  Please enter a number between 1 and ${FOCUS_OPTIONS.length}.`));
      idx = -1;
    }
  }
  return FOCUS_OPTIONS[idx];
}

// ── Pick questions ────────────────────────────────────────────────────────────
function pickQuestions(mode, focusKey) {
  const TOTAL = 5;
  if (mode === '1') {
    return pick(questions, TOTAL);
  }
  // Focus mode — filter by focus key
  const pool = questions.filter(q => q.focus === focusKey);
  if (pool.length === 0) {
    return pick(questions, TOTAL); // fallback
  }
  if (pool.length >= TOTAL) {
    return pick(pool, TOTAL);
  }
  // Not enough focused questions — pad with random others
  const rest = shuffle(questions.filter(q => q.focus !== focusKey));
  return shuffle([...pool, ...rest.slice(0, TOTAL - pool.length)]);
}

// ── Hint ──────────────────────────────────────────────────────────────────────
function getHint(question) {
  const a = question.answer;
  if (a.length <= 2) return `Hint: the word has ${a.length} letter(s).`;
  return `Hint: starts with "${a[0].toUpperCase()}" and has ${a.length} letters.`;
}

// ── Single question ───────────────────────────────────────────────────────────
async function runQuestion(rl, question, qNum, total) {
  blank();
  console.log(line('─', 62));
  console.log(cyan(bold(`  Question ${qNum} of ${total}`)) + dim(`  ·  ${question.category}`));
  console.log(line('─', 62));
  blank();

  // Display sentence with blank highlighted
  const display = question.sentence.replace('___', cyan(bold('  ___  ')));
  console.log(`  ${display}`);
  blank();

  // Optional hint
  console.log(dim('  (Type your answer, or "hint" for a clue, or "skip" to skip)'));
  blank();

  let userAnswer = '';
  let hintUsed   = false;

  while (true) {
    userAnswer = await ask(rl, `  ${bold('Your answer:')} `);

    if (normalize(userAnswer) === 'hint') {
      hintUsed = true;
      console.log(yellow(`  💡 ${getHint(question)}`));
      blank();
      continue;
    }
    if (normalize(userAnswer) === 'skip') {
      userAnswer = '';
    }
    break;
  }

  blank();

  const skipped = userAnswer === '';
  const correct = !skipped && checkAnswer(userAnswer, question);

  // ── Result banner ───────────────────────────────────────────────────────────
  if (skipped) {
    console.log(`  ${yellow(bold('⏭  Skipped'))}  — the answer was: ${cyan(bold(question.answer))}`);
  } else if (correct) {
    console.log(`  ${green(bold('✅  Correct!'))}` + (hintUsed ? dim('  (with hint)') : ''));
  } else {
    console.log(`  ${red(bold('❌  Not quite.'))}  You wrote: ${red(bold(userAnswer || '(empty)'))}`);
    blank();
    console.log(`  ${bold('Correct answer:')} ${cyan(bold(question.answer))}` +
      (question.alternatives.length
        ? dim(`  (also accepted: ${question.alternatives.join(', ')})`)
        : ''));

    // Targeted tip for the wrong answer
    if (question.wrongAnswerTips) {
      const tip = question.wrongAnswerTips[normalize(userAnswer)];
      if (tip) {
        blank();
        console.log(yellow(`  📌 Why not "${userAnswer}"?`));
        console.log(wrap(tip, '     '));
      }
    }
  }

  blank();

  // ── Full explanation ────────────────────────────────────────────────────────
  const divider = dim('  ' + '·'.repeat(58));
  console.log(divider);
  blank();
  console.log(`  ${bold('📖 Explanation:')}`);
  blank();

  // Print explanation preserving newlines
  const expLines = question.explanation.split('\n');
  for (const el of expLines) {
    if (el.trim() === '') {
      blank();
    } else {
      console.log(wrap(el.trim(), '  '));
    }
  }

  blank();
  console.log(`  ${bold('💬 Quick tip:')} ${yellow(question.tip)}`);
  blank();
  console.log(divider);

  return { correct, skipped };
}

// ── Session summary ───────────────────────────────────────────────────────────
function showSummary(results, sessionQuestions) {
  const score   = results.filter(r => r.correct).length;
  const skipped = results.filter(r => r.skipped).length;
  const total   = results.length;

  blank();
  console.log(line('═', 62));
  console.log(cyan(bold(`  SESSION COMPLETE`)));
  console.log(line('═', 62));
  blank();
  console.log(`  ${bold('Score:')}   ${green(bold(score))} / ${total}` + (skipped ? dim(`  (${skipped} skipped)`) : ''));
  blank();
  console.log(`  ${scoreLabel(score, total)}`);
  blank();

  // ── Mini lesson: recap the rules tested ────────────────────────────────────
  const categories = [...new Set(sessionQuestions.map(q => q.category))];
  console.log(dim('  ─── Lesson recap: rules you practiced ───────────────────'));
  blank();
  for (const cat of categories) {
    const q = sessionQuestions.find(sq => sq.category === cat);
    const idx = sessionQuestions.indexOf(q) + 1;
    const r   = results[idx - 1];
    const mark = r.correct ? green('✓') : r.skipped ? yellow('–') : red('✗');
    console.log(`  ${mark}  ${bold(cat)}`);
  }
  blank();
  console.log(line('═', 62));
}

// ── Main loop ─────────────────────────────────────────────────────────────────
async function main() {
  const rl = createRL();

  let playing = true;
  while (playing) {
    showSplash();

    // Mode selection
    const mode = await chooseMode(rl);

    let focusLabel = 'Random Mix';
    let focusKey   = null;

    if (mode === '2') {
      const focus = await chooseFocus(rl);
      focusKey   = focus.key;
      focusLabel = `Focus: ${focus.label}`;
    }

    // Pick questions
    const sessionQuestions = pickQuestions(mode, focusKey);

    // Show session header
    blank();
    console.log(line('═', 62));
    console.log(`  ${cyan(bold('MODE:'))} ${bold(focusLabel)}`);
    console.log(`  ${cyan(bold('QUESTIONS:'))} ${sessionQuestions.length}`);
    console.log(line('═', 62));
    blank();
    console.log(dim('  Fill in each blank with the correct preposition.'));
    console.log(dim('  Type "hint" for a clue. Type "skip" to skip.'));
    blank();
    await pressEnter(rl);

    // Run questions
    const results = [];
    for (let i = 0; i < sessionQuestions.length; i++) {
      const result = await runQuestion(rl, sessionQuestions[i], i + 1, sessionQuestions.length);
      results.push(result);
      if (i < sessionQuestions.length - 1) {
        await pressEnter(rl);
        console.clear();
      }
    }

    // Summary
    showSummary(results, sessionQuestions);
    blank();

    // Play again?
    const again = await ask(rl, '  Play again? (y/n): ');
    if (normalize(again) !== 'y' && normalize(again) !== 'yes') {
      playing = false;
    }
  }

  blank();
  console.log(cyan(bold('  Thanks for practicing! Keep it up — prepositions take time. 🎓')));
  blank();
  rl.close();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
