import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "We train pigeons to deliver breakup letters, and cowards pay $25 because getting dumped by a bird feels like fate instead of rejection.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
