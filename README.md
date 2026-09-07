# chrisvayala.me

Personal site — Christopher Ayala.

## Develop

```bash
npm ci
npm run dev     # http://localhost:5173
npm test        # metadata tests; requires Node.js 22.6+ for native TypeScript stripping
npm run typecheck
npm run build   # output: dist/
```

Stack: React 18, TypeScript, Vite, Tailwind. Deployed on Netlify from `main`.

The build emits metadata for the homepage, writing index, and each direct
`src/content/blog/*.md` article. Posts need `title` and `excerpt` frontmatter
and lowercase, hyphen-separated filenames; `index.md` is reserved. Keep drafts
in `_unpublished/`. The canonical origin is configured in `src/lib/metadata.ts`.
