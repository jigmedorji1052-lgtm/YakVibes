#!/usr/bin/env node
/**
 * YakVibes Bhutan — one-time image localization.
 *
 * The site now references self-hosted images from /public/images.
 * Run this once (needs internet):   node scripts/localize-images.mjs
 * It downloads the original files and saves them under the exact
 * filenames the code expects. Existing files are skipped.
 *
 * After it finishes, run:          npm run build
 */
import { access, mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dir = path.join(root, "public", "images");

/* [ local filename , original source ] */
const FILES = [
  ["logo.png", "https://i.imgur.com/bgJgxKq.png"],
  ["hero-home.jpg", "https://i.imgur.com/QaXPHZm.png"],
  ["hero-artists.jpg", "https://i.imgur.com/5TYWAUS.png"],
  ["kheng-sonam-dorji.jpg", "https://i.imgur.com/Rf6I3Ss.jpeg"],
  ["pinaka-chakraborty.jpg", "https://i.imgur.com/fNhZcPy.jpeg"],
  ["ganga-ram.jpg", "https://i.imgur.com/sEdYbnZ.jpeg"],
  ["sobit-singh.jpg", "https://i.imgur.com/SIugnAG.jpeg"],
  ["mission-cultural-bridge.jpg", "https://i.imgur.com/zbo0aP0.jpeg"],
];

const MAX_KB = 150;

await mkdir(dir, { recursive: true });

for (const [name, url] of FILES) {
  const dest = path.join(dir, name);
  try {
    await access(dest);
    console.log(`skip   ${name} (already exists)`);
    continue;
  } catch {
    /* not present yet — download */
  }
  try {
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    const kb = Math.round((await stat(dest)).size / 1024);
    const flag = kb > MAX_KB ? `  ⚠ over ${MAX_KB}KB — consider re-exporting smaller` : "";
    console.log(`saved  ${name}  (${kb} KB)${flag}`);
  } catch (err) {
    console.error(`FAIL   ${name} <- ${url} (${err.message})`);
    process.exitCode = 1;
  }
}

console.log("\nDone. Now run: npm run build");
