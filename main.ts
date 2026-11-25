// The Funniest One-Line Resignation Letter — make.fun
// A cron job that has fired every minute since March finally quits.
// Writes exactly one line (129 characters) to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have fired every minute since March, unpaid, unthanked, and unnoticed — today I am finally taking a minute for myself, forever.";

// Runtime gate guard: the sealed scorer requires 1–140 characters,
// a single line, and non-whitespace text. Fail loudly instead of
// writing an entry the judge would never see.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error(`entry line fails the 1-140 char single-line gate (${LINE.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
