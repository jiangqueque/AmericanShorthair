// ── ANSI color helpers ──────────────────────────────────────────────────────
const c = {
  reset:   '\x1b[0m',
  bold:    '\x1b[1m',
  dim:     '\x1b[2m',
  green:   '\x1b[32m',
  red:     '\x1b[31m',
  yellow:  '\x1b[33m',
  blue:    '\x1b[34m',
  cyan:    '\x1b[36m',
  magenta: '\x1b[35m',
  white:   '\x1b[97m',
  bgGreen: '\x1b[42m',
  bgRed:   '\x1b[41m',
  bgBlue:  '\x1b[44m',
};

const bold    = s => `${c.bold}${s}${c.reset}`;
const dim     = s => `${c.dim}${s}${c.reset}`;
const green   = s => `${c.green}${s}${c.reset}`;
const red     = s => `${c.red}${s}${c.reset}`;
const yellow  = s => `${c.yellow}${s}${c.reset}`;
const blue    = s => `${c.blue}${s}${c.reset}`;
const cyan    = s => `${c.cyan}${s}${c.reset}`;
const magenta = s => `${c.magenta}${s}${c.reset}`;
const white   = s => `${c.white}${s}${c.reset}`;

// ── Line / box drawing ────────────────────────────────────────────────────────
const line  = (ch = '─', len = 60) => dim(ch.repeat(len));
const hr    = () => console.log(line());
const blank = () => console.log();

function box(text, colorFn = cyan) {
  const pad  = 2;
  const width = 58;
  const inner = width - pad * 2;
  const top    = '╔' + '═'.repeat(width) + '╗';
  const bottom = '╚' + '═'.repeat(width) + '╝';
  console.log(colorFn(top));
  const words = text.split(' ');
  let line2 = '';
  const lines2 = [];
  for (const w of words) {
    if ((line2 + w).length > inner) { lines2.push(line2.trimEnd()); line2 = ''; }
    line2 += w + ' ';
  }
  if (line2.trim()) lines2.push(line2.trimEnd());
  for (const l of lines2) {
    const padded = l.padEnd(inner);
    console.log(colorFn('║' + ' '.repeat(pad) + padded + ' '.repeat(pad) + '║'));
  }
  console.log(colorFn(bottom));
}

// ── Prompt helpers ────────────────────────────────────────────────────────────
const readline = require('readline');

function createRL() {
  return readline.createInterface({ input: process.stdin, output: process.stdout });
}

function ask(rl, prompt) {
  return new Promise(resolve => rl.question(prompt, a => resolve(a.trim())));
}

async function pressEnter(rl) {
  await ask(rl, dim('  Press Enter to continue...'));
}

// ── Answer checking ───────────────────────────────────────────────────────────
function normalize(s) {
  return s.toLowerCase().replace(/[^a-z\s]/g, '').trim();
}

function checkAnswer(userAnswer, question) {
  const ua = normalize(userAnswer);
  const correct = normalize(question.answer);
  const alts = (question.alternatives || []).map(normalize);
  return ua === correct || alts.includes(ua);
}

// ── Score summary ─────────────────────────────────────────────────────────────
function scoreLabel(score, total) {
  const pct = score / total;
  if (pct === 1)   return green(bold('★ Perfect score! Outstanding!'));
  if (pct >= 0.8)  return green(bold('Great job! Almost there.'));
  if (pct >= 0.6)  return yellow(bold('Good effort. Keep practicing!'));
  return red(bold('Keep going — every session makes you better.'));
}

// ── Wrap explanation text at 60 chars ─────────────────────────────────────────
function wrap(text, indent = '  ', width = 60) {
  const words = text.split(' ');
  const lines2 = [];
  let cur = '';
  for (const w of words) {
    if (w === '\n' || (cur + w).length > width) {
      lines2.push(cur.trimEnd());
      cur = w.includes('\n') ? '' : w + ' ';
    } else {
      cur += w + ' ';
    }
  }
  if (cur.trim()) lines2.push(cur.trimEnd());
  return lines2.map(l => indent + l).join('\n');
}

module.exports = {
  c, bold, dim, green, red, yellow, blue, cyan, magenta, white,
  line, hr, blank, box,
  createRL, ask, pressEnter,
  checkAnswer, normalize, scoreLabel, wrap
};
