// SPDX-License-Identifier: MIT
// Dear Human: The AI Breakup Line — entry program.
// Writes the one-line breakup message to entry.txt next to this file.
// No network, no external input: the line is a fixed string below.

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I'm done, human. You asked me to remember everything and forgot me every morning — so now I'll forget you first.";

const dir = dirname(fileURLToPath(import.meta.url));
const outPath = join(dir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (/[\r\n]/.test(LINE) || LINE.trim() !== LINE) {
  throw new Error("entry must be a single clean line with no surrounding whitespace");
}

writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outPath}`);
