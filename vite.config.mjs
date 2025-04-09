import { defineConfig } from "vite";
import builtins from "builtin-modules";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const outDir = ""; // TODO

export default defineConfig({
  plugins: [writeObsidianAssets()],
  build: {
    outDir,
    target: "es2018",
    emptyOutDir: true,
    cssCodeSplit: true,
    lib: {
      entry: ["src/main.ts", "src/styles.css"],
      formats: ["cjs"],
    },
    sourcemap: "inline",
    rollupOptions: {
      external: [
        "obsidian",
        "electron",
        "@codemirror/autocomplete",
        "@codemirror/closebrackets",
        "@codemirror/collab",
        "@codemirror/commands",
        "@codemirror/comment",
        "@codemirror/fold",
        "@codemirror/gutter",
        "@codemirror/highlight",
        "@codemirror/history",
        "@codemirror/language",
        "@codemirror/lint",
        "@codemirror/matchbrackets",
        "@codemirror/panel",
        "@codemirror/rangeset",
        "@codemirror/rectangular-selection",
        "@codemirror/search",
        "@codemirror/state",
        "@codemirror/stream-parser",
        "@codemirror/text",
        "@codemirror/tooltip",
        "@codemirror/view",
        "@lezer/common",
        "@lezer/highlight",
        "@lezer/lr",
        ...builtins,
      ],
    },
  },
});

function writeObsidianAssets() {
  return {
    name: "writeObsidianAssets",
    apply: "build",
    async generateBundle() {
      const pkg = JSON.parse(
        readFileSync(resolve(process.cwd(), "package.json"))
      );

      const manifest = {
        version: pkg.version,
        ...pkg.obsidian,
      };
      this.emitFile({ type: "asset", fileName: ".hotReload", source: "" });
      this.emitFile({
        type: "asset",
        fileName: "manifest.json",
        source: JSON.stringify(manifest, null, "\t"),
      });
    },
  };
}
