export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim();
    meta[key] = value.replace(/^(["'])([\s\S]*)\1$/, '$2');
  }
  return { meta, body: match[2] };
}

// Input keys are direct-child filenames, shared by the browser and build loader.
export function parsePosts(files: Record<string, string>): Post[] {
  const slugs = new Set<string>();
  return Object.entries(files).map(([filename, raw]) => {
    const slug = filename.replace(/\.md$/i, '');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug === 'index') {
      throw new Error(`${filename}: use a lowercase, hyphen-separated slug other than "index".`);
    }
    if (slugs.has(slug)) throw new Error(`${filename}: Duplicate slug "${slug}".`);
    slugs.add(slug);
    const { meta, body } = parseFrontmatter(raw);
    for (const field of ['title', 'excerpt']) {
      if (!meta[field]) throw new Error(`${filename}: missing required frontmatter field "${field}".`);
    }
    return { slug, title: meta.title, excerpt: meta.excerpt, date: meta.date ?? '', content: body.trim() };
  }).sort((a, b) => b.date.localeCompare(a.date));
}
