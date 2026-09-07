import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { parsePosts } from '../src/lib/frontmatter.ts';
import { resolveMetadata, metadataTags } from '../src/lib/metadata.ts';
import { readPublishedPosts, renderMetadata } from '../build/route-metadata.ts';

// Explicit synthetic fixtures exercise escaping and invalid publication inputs.
const fixture = '---\ntitle: A <tag> & "quote"\nexcerpt: An "example" & <description>\ndate: 2026-01-01\n---\nTest body.';
const posts = () => parsePosts({ 'test-article.md': fixture });

test('article metadata uses frontmatter and escapes every HTML value', () => {
  const meta = resolveMetadata('/blog/test-article/', posts());
  assert.equal(meta.title, 'A <tag> & "quote" | Christopher Ayala');
  assert.equal(meta.description, 'An "example" & <description>');
  assert.equal(meta.canonical, 'https://chrisvayala.me/blog/test-article');
  assert.equal(meta.type, 'article');
  const html = renderMetadata(meta);
  assert.match(html, /A &lt;tag&gt; &amp; &quot;quote&quot;/);
  assert.match(html, /content="An &quot;example&quot; &amp; &lt;description&gt;"/);
  assert.doesNotMatch(html, /<tag>|<description>/);
});

test('publication rejects missing fields, unsafe slugs, and colliding slugs', () => {
  for (const field of ['title', 'excerpt']) {
    assert.throws(() => parsePosts({ 'test-article.md': fixture.replace(new RegExp(`${field}:.*\\n`), '') }), new RegExp(`test-article.md.*${field}`));
  }
  for (const name of ['Bad Slug.md', '../escape.md', 'index.md']) {
    assert.throws(() => parsePosts({ [name]: fixture }), /slug/);
  }
  assert.throws(() => parsePosts({ 'test-article.md': fixture, 'test-article.MD': fixture }), /Duplicate slug/);
});

test('only direct markdown children are published', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-post-fixture-'));
  try {
    await mkdir(join(directory, '_unpublished'));
    await writeFile(join(directory, 'test-article.md'), fixture);
    await writeFile(join(directory, '_unpublished', 'secret.md'), 'Invalid draft');
    await writeFile(join(directory, 'notes.txt'), 'Not a post');
    assert.deepEqual((await readPublishedPosts(directory)).map(post => post.slug), ['test-article']);
  } finally {
    await rm(directory, { recursive: true });
  }
});

test('route transitions restore complete homepage metadata and normalize aliases', () => {
  const home = resolveMetadata('/', posts());
  for (const route of ['/blog/test-article', '/blog/', '/blog/missing', '/', '/about/', '/work', '/projects/']) {
    const meta = resolveMetadata(route, posts());
    assert.equal(new Set(metadataTags(meta).map(tag => tag.key)).size, metadataTags(meta).length);
    if (['/', '/about/', '/work', '/projects/'].includes(route)) assert.deepEqual(meta, home);
  }
  assert.equal(resolveMetadata('/blog/', posts()).title, 'Writing | Christopher Ayala');
  assert.equal(resolveMetadata('/blog/missing', posts()).title, 'Post not found | Christopher Ayala');
});
