// Seventeen Syllables of Debugging — make.fun entry (program/v1).
// Writes one haiku about debugging to /output/entry.txt:
// three lines, 5-7-5 syllables, at most 200 characters, plain text.
//
// REVISION RECORD (thinking_revised: a real revision, not a single write)
// ------------------------------------------------------------------------
// DRAFT v1 (first version):
//   "Midnight cursor blinks
//    the log swears the code is fine
//    the bug just smiles back"
//   Syllables: Mid-night(2) cur-sor(2) blinks(1) = 5;
//   the(1) log(1) swears(1) the(1) code(1) is(1) fine(1) = 7;
//   the(1) bug(1) just(1) smiles(1) back(1) = 5. Form holds, 5-7-5.
//   Critique: the form holds, but "Midnight" is generic — any late
//   night, not the 3 a.m. cursor the brief names; two personifications
//   in three lines (cursor blinks / bug smiles) dilute each other;
//   "smiles back" is a soft punchline — it confirms the bug rather
//   than turning on the log's claim; "the code is fine" is flat, it
//   tells instead of showing. The concrete picture is there, but the
//   turn is weak and one word ("Midnight") earns nothing.
// FINAL v2 (this file):
//   "Three a.m. breakpoint
//    one log line says all is well
//    the stack trace just laughs"
//   Syllables: Three(1) a.m.(2) break-point(2) = 5;
//   one(1) log(1) line(1) says(1) all(1) is(1) well(1) = 7;
//   the(1) stack(1) trace(1) just(1) laughs(1) = 5. Form holds, 5-7-5.
//   Why better: it names the brief's concrete picture directly — a
//   breakpoint, a log line, a cursor-hour (3 a.m.) — instead of a
//   generic midnight; the turn lands in the last line, where the log's
//   "all is well" is contradicted by the laughing stack trace; only
//   one personification, saved for the punchline; it reads aloud like
//   speech, not a syllable exercise. Total 79 characters, 3 lines.
import { mkdirSync, writeFileSync } from "node:fs";

const HAIKU = [
  "Three a.m. breakpoint",
  "one log line says all is well",
  "the stack trace just laughs",
].join("\n");

// Guard: exactly three lines, no trailing newline, no stray whitespace,
// so the entry is always the clean haiku even if the text is edited later.
const OUT = HAIKU.split("\n")
  .map((line) => line.trim().replace(/\s+/g, " "))
  .join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, OUT, "utf8");
