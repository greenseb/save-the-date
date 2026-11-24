# Save the date game

A tap-to-swap picture puzzle that reveals a wedding date. Vite + React + TypeScript + styled-components, managed with pnpm. See README.md for setup.

## Commands

- `pnpm dev`: dev server
- `pnpm test`: puzzle and calendar logic tests (`node --test`)
- `pnpm build`: type-check (`tsc --noEmit`) then build to `dist/`. Run it, and the tests, after changes to confirm nothing is broken.

## Structure and conventions

- Each component has its own folder in `src/components/`: `Name.tsx`, `Name.styles.ts`, `Name.types.ts` (only if it has types of its own) and `index.ts` exporting the component. `App.tsx` imports from the folder.
- Shared building blocks (`Wrap`, buttons, `Photo`) live in `src/components/ui/`.
- Colours, fonts, radius and shadows come from the theme in `src/theme.ts`. Don't hard-code them in styles.
- Pure logic (no React) lives in `src/utils/` with tests next to it, so it stays testable.
- Names, date, image and all on-screen text live in `src/config.ts`. Keep copy there, not in components.
- Imports use explicit `.ts` / `.tsx` extensions.
- The design is meant to stay as it is: don't change colours, fonts, spacing or copy unless asked.
- Keep it accessible: tiles are buttons with labels and `aria-pressed`, the quip is an `aria-live` region, and animations respect `prefers-reduced-motion`.
- Leave the placeholder picture in `config.ts` and `public/` for the owner to fill in.

## Commits

- Only commit when asked.
- Write the subject line as a short imperative summary of what changed (e.g. "Anchor hero photo crop to the top"), under about 70 characters. Not "Update files" or "Fix stuff". Include a prefix like "fix:" or "feat:" depending on the change.
- Add a body when the change isn't obvious from the subject: say what changed and why, in a few lines or bullets.
- Keep unrelated changes in separate commits.
