import type { Post } from './frontmatter.ts';

const site = {
  origin: 'https://chrisvayala.me',
  name: 'Christopher Ayala',
  title: 'Christopher Ayala | AI Partner Engineer',
  description: 'I’m an AI Partner Engineer at Life360, forward deployed across business functions to solve problems and build our AI platform. Previously, I worked across AI platform engineering, product, and research at DraftKings.',
};

export type Metadata = { title: string; description: string; canonical: string; type: 'website' | 'article' };

export function resolveMetadata(pathname: string, posts: Post[]): Metadata {
  const path = pathname.replace(/\/+$/, '') || '/';
  const home: Metadata = { title: site.title, description: site.description, canonical: `${site.origin}/`, type: 'website' };
  if (path === '/blog') {
    return { ...home, title: `Writing | ${site.name}`, description: `Writing by ${site.name} on AI systems, engineering, and product work.`, canonical: `${site.origin}/blog` };
  }
  if (path.startsWith('/blog/')) {
    const post = posts.find(post => path === `/blog/${post.slug}`);
    return post
      ? { title: `${post.title} | ${site.name}`, description: post.excerpt, canonical: `${site.origin}${path}`, type: 'article' }
      : { ...home, title: `Post not found | ${site.name}`, description: 'This post could not be found. Browse the writing index for published articles.', canonical: `${site.origin}${path}` };
  }
  return home;
}

export function metadataTags(meta: Metadata) {
  return [
    { attribute: 'name', key: 'description', content: meta.description },
    { attribute: 'property', key: 'og:title', content: meta.title },
    { attribute: 'property', key: 'og:description', content: meta.description },
    { attribute: 'property', key: 'og:url', content: meta.canonical },
    { attribute: 'property', key: 'og:type', content: meta.type },
    { attribute: 'name', key: 'twitter:card', content: 'summary' },
    { attribute: 'name', key: 'twitter:title', content: meta.title },
    { attribute: 'name', key: 'twitter:description', content: meta.description },
  ];
}
