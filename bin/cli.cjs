#!/usr/bin/env node
const { execFileSync } = require("node:child_process");
const { join } = require("node:path");

const entry = join(__dirname, "..", "src", "index.tsx");

try {
  execFileSync("bun", [entry], { stdio: "inherit" });
} catch (e) {
  if (e.status !== null) process.exit(e.status);
  console.error(
    "farcaster-tui requires Bun to run. Install it: https://bun.sh"
  );
  process.exit(1);
}
