# `obsidian-vite-template`

> a modern plugin/theme template for obsidian

- Minimal, everything is handled inside of `vite.config.mjs`
- Write files to an `outDir` instead of developing in your obsidian vault
- `manifest.json` is generated from your `package.json` (`npm version` works out of the box!)

## usage

For help with writing plugins, see https://github.com/obsidianmd/obsidian-sample-plugin/blob/master/README.md

- Use this template
- Edit `outDir` in `vite.config.mts`
- Replace all of the manifest values in `package.json`
- `npm i`
- `npx vite build --watch` or `npx vite build` for production

### as a theme

For help with writing themes, see https://github.com/obsidianmd/obsidian-sample-theme/blob/master/README.md

- In `build.lib.entry` inside `vite.config.mjs`, remove `main.ts` and rename `styles.css` to `theme.css`. Update files in `src/` to match
- In `package.json`, remove `description`, `id`, and `isDesktopOnly`

---

_empathy included • [**@cysabi**](https://github.com/cysabi) • [cysabi.github.io](https://cysabi.github.io)_
