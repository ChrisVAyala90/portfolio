import { parsePosts } from './frontmatter.ts';
export type { Post } from './frontmatter.ts';

// Only direct .md children are public; _unpublished is deliberately excluded.
const files = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export const posts = parsePosts(Object.fromEntries(
  Object.entries(files).map(([path, raw]) => [path.split('/').pop()!, raw]),
));

export function getPost(slug: string) {
  return posts.find(post => post.slug === slug);
}
