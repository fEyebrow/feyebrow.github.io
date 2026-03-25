---
name: verify
description: Run TypeScript type check and e2e tests to verify the current state of the codebase before marking work done.
---

Run the following commands in sequence and report results:

1. `pnpm check` — TypeScript type check via astro check
2. `pnpm test:e2e` — Playwright e2e tests (Chromium only; auto-starts dev server if not running)

If either command fails, report the errors clearly and suggest fixes before marking any task complete.
