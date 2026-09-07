import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Plugin } from 'vite';
import { parsePosts } from '../src/lib/frontmatter.ts';
import { metadataTags, resolveMetadata } from '../src/lib/metadata.ts';
import type { Metadata } from '../src/lib/metadata.ts';

export async function readPublishedPosts(directory: string) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.filter(entry => entry.isFile() && entry.name.endsWith('.md'))
    .map(async entry => [entry.name, await readFile(join(directory, entry.name), 'utf8')]));
  return parsePosts(Object.fromEntries(files));
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

export function renderMetadata(meta: Metadata) {
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    ...metadataTags(meta).map(tag => `<meta ${tag.attribute}="${tag.key}" content="${escapeHtml(tag.content)}" />`),
  ].join('\n    ');
}

function withMetadata(html: string, meta: Metadata) {
  const marker = /<!-- route-head -->[\s\S]*?<!-- \/route-head -->/;
  if (!marker.test(html)) throw new Error('index.html: missing route-head markers for generated metadata.');
  return html.replace(marker, () => `<!-- route-head -->\n    ${renderMetadata(meta)}\n    <!-- /route-head -->`);
}

export function routeMetadata(): Plugin {
  let contentDirectory: string;
  return {
    name: 'route-metadata',
    apply: 'build',
    enforce: 'post',
    configResolved(config) { contentDirectory = join(config.root, 'src/content/blog'); },
    async generateBundle(_options, bundle) {
      const shell = bundle['index.html'];
      if (!shell || shell.type !== 'asset' || typeof shell.source !== 'string') {
        throw new Error('Expected Vite to emit index.html before generating blog metadata.');
      }
      const posts = await readPublishedPosts(contentDirectory);
      const html = shell.source;
      shell.source = withMetadata(html, resolveMetadata('/', posts));
      for (const route of ['/blog', ...posts.map(post => `/blog/${post.slug}`)]) {
        this.emitFile({ type: 'asset', fileName: `${route.slice(1)}/index.html`, source: withMetadata(html, resolveMetadata(route, posts)) });
      }
    },
  };
}
