Inspiration on minimalism: https://alanyang.com

## Dev troubleshooting

If `yarn dev` shows **Internal Server Error** and the terminal logs `ENOENT` for `.next/static/development/_buildManifest.js.tmp.*`, the dev cache is in a bad state (often after `next.config` changes + Turbopack restarts). Stop the server, then run:

```bash
yarn dev:fresh
```

Or manually: `rm -rf .next` and start `yarn dev` again./