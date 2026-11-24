# Save the date

A tiny tap-to-swap picture puzzle that reveals our wedding date. Built with
Vite, React and styled-components.

## Run it

```bash
pnpm install
pnpm dev          # local dev server
pnpm test         # puzzle + calendar logic tests
pnpm build        # type-check, then production build into dist/
```

## Make it yours

Almost everything is in `src/config.ts`: names, **start and end dates**,
all the on-screen text and the little quips. Colours, fonts and radius live in
`src/theme.ts`.

To use your own picture, drop it in `public/` (a square crop works best, keep it
under ~300 KB) and point `image` in `src/config.ts` at it.

## Deploy to GitHub Pages

1. Push to a GitHub repo with `main` as the branch.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

### Custom domain (do this before printing the QR code)

A QR code is permanent once printed, so point it at a domain you own, not
`username.github.io/...`:

1. Buy a domain and add a `public/CNAME` file containing just the domain name.
2. Add the DNS records GitHub lists under **Settings → Pages → Custom domain**.
3. Tick **Enforce HTTPS**, then generate the QR code for `https://yourdomain.com`.

Link previews: add an absolute `og:image` URL in `index.html` once the domain is live.
Don't put the date in the preview text.

## Ideas for later

- Sound effects (start only after a tap, with a mute toggle)
- Easter egg: tap the faces on the reveal screen to make them kiss
- Swap the picture for illustrated or pixel-art avatars
