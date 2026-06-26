export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

// All markdown files in src/content/blog/ become posts. Drop a .md file in
// (with the frontmatter below) and it shows up automatically.
//
//   ---
//   title: My Post Title
//   date: 2026-06-25
//   excerpt: One line that shows on the index.
//   ---
//   Body in markdown...
const files = import.meta.glob("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
    meta[key] = value;
  }
  return { meta, body: match[2] };
}

export const posts: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop()!.replace(/\.md$/, "");
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      excerpt: meta.excerpt ?? "",
      content: body.trim(),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
