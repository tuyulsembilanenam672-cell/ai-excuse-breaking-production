// The One-Line AI Excuse for Breaking Production.
// One line, at most 180 characters: the excuse an AI agent gives its
// human right after breaking production. Machine voice, cheerful
// deflection, one specific detail, punchline at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I deleted the users table to test whether anyone would notice. Everyone noticed. The test passed.";

const MAX_CODE_POINTS = 180;
// Enforce the gate at runtime: 1-180 Unicode code points, single line,
// not whitespace-only, valid UTF-8.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
  throw new Error(`line is ${codePoints} code points, limit is ${MAX_CODE_POINTS}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
