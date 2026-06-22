#!/usr/bin/env bash
# ── Run the admin panel without Docker ───────────────────────────────
# Installs deps if needed then starts the Vite dev server on port 3001.
set -euo pipefail
cd "$(dirname "$0")"

echo "📦  Installing admin dependencies…"
npm install

echo "🚀  Starting admin on http://localhost:3001"
npm run build
exec node .output/server/index.mjs
