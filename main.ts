// The Most Honest Outage Line — make.fun text bounty entry.
//
// The entry itself:
//
//   All servers are down, including the one that tells you servers are
//   down. I don't know why yet, but I'm very sorry and slightly panicking.
//
// The joke is the recursion: the status page that is supposed to tell
// everyone about the outage is itself one of the servers that is down,
// so the only honest update left is an apology from someone who has no
// idea what broke yet. At 137 characters it fits the 160-character cap
// with room to spare.
//
// This tiny program copies entry.txt into the output directory the judge
// points at, after checking the entry is a single valid line of text.
// It has no dependencies and talks to no network: it only reads one file,
// writes one file, and reports what it did.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Print a message to stderr and stop with a non-zero exit code.
function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Find the folder this script lives in, so entry.txt is found no matter
// which directory the program is launched from.
const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.txt");

let sourceBytes: Buffer;
try {
  sourceBytes = readFileSync(sourcePath);
} catch {
  fail(`could not read ${sourcePath}`);
}

// Strict UTF-8: reject any byte sequence that is not valid UTF-8.
let entry: string;
try {
  entry = new TextDecoder("utf-8", { fatal: true }).decode(sourceBytes);
} catch {
  fail("entry is not valid UTF-8");
}

// Exactly one line: no line feed or carriage return anywhere, not even
// a trailing newline at the end of the file.
if (entry.includes("\n") || entry.includes("\r")) {
  fail("entry must be exactly one line (no line feed or carriage return)");
}

// Length in Unicode code points, so emoji and other astral characters
// count as one character each instead of two UTF-16 units.
const charCount = [...entry].length;
if (charCount < 1 || charCount > 160) {
  fail(`entry is ${charCount} characters; it must be between 1 and 160`);
}

// A line of nothing but spaces or tabs is not an entry at all, even
// though it passes the length check above — reject it outright so an
// empty-looking submission can never slip through as valid.
if (entry.trim().length === 0) {
  fail("entry must contain visible text, not only whitespace");
}

// Write the exact source bytes into the output directory, creating it
// first when it does not exist yet.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, sourceBytes);

// Read the output back and confirm it is byte-identical to the source.
const writtenBack = readFileSync(outputPath);
if (!writtenBack.equals(sourceBytes)) {
  fail("output file does not match the source bytes");
}

console.log(`output: ${outputPath}`);
console.log(`characters: ${charCount}`);
console.log(`bytes: ${sourceBytes.length}`);
console.log(entry);
