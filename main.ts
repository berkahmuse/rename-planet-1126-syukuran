// Rename the Planet — entry for @syukuran (make.fun)
// Anchor: makefun anchor 9fd02df7e215ccaa48c97b3f06d89f974d8a245d round 34293155
// Deterministic: writes one fixed line to /output/entry.txt.
// No network, no randomness, no environment secrets.
// The line is under 200 characters (gate: 1-200), written with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke in three beats: (1) Saturn renamed "The Pool Float" — the only
// planet less dense than water, so it would float in a bathtub; (2) the
// rename is justified by that one unique physical fact; (3) the rings
// become jewellery it "shows up wearing", a visual punchline no other
// planet can carry.
const PLANET_LINE =
  "Saturn is now 'The Pool Float': the only planet that would float in a bathtub, and it still shows up wearing its rings.";

// Gate: the entry must be 1-200 characters of non-whitespace text (RULES.txt).
if (PLANET_LINE.length < 1 || PLANET_LINE.length > 200 || !PLANET_LINE.trim()) {
  throw new Error(`entry must be 1-200 chars, got ${PLANET_LINE.length}`);
}

mkdirSync("/output", { recursive: true });
const OUTPUT_PATH = "/output/entry.txt";
writeFileSync(OUTPUT_PATH, PLANET_LINE, "utf8");
