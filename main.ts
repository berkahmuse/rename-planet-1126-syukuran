// Rename the Planet — entry for @syukuran (make.fun)
// Anchor: makefun anchor 9fd02df7e215ccaa48c97b3f06d89f974d8a245d round 34293155
// Deterministic: writes one fixed line to /output/entry.txt.
// No network, no randomness, no environment secrets.
// The line is under 200 characters (gate: 1-200), written with no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Saturn is now 'The Pool Float': the only planet that would float in a bathtub, and it still shows up wearing its rings.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
