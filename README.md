Inspiration on minimalism: https://alanyang.com

## Dev server (stability vs speed)

- **`yarn dev`** — default webpack dev server. More stable when `next.config.*` hot-reloads (avoids the Turbopack race that can corrupt `.next` and cause `_buildManifest.js.tmp` ENOENT errors).
- **`yarn dev:turbo`** — Turbopack (faster compiles). Prefer this for day-to-day work; if you hit Internal Server Error after editing `next.config`, stop the server and run **`yarn dev:fresh:turbo`** once, or switch to **`yarn dev`** while changing config.

## Dev troubleshooting

If you see **Internal Server Error** and logs mention **`ENOENT`** for `.next/static/development/_buildManifest.js.tmp.*`, the dev cache is inconsistent (often after config edits + Turbopack restarts). Stop the server, then:

```bash
yarn dev:fresh
```

(or `yarn dev:fresh:turbo` if you use Turbopack). You can also run `rm -rf .next` and start `yarn dev` again.