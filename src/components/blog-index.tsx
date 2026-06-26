import React from "react";
import { Link } from "react-router-dom";

import { posts } from "../lib/posts";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-3 border-b hairline">
      <p className="mono text-xs uppercase tracking-widest muted">{children}</p>
    </div>
  );
}

export function BlogIndex() {
  return (
    <section className="px-6 pt-20 pb-24">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Writing</SectionLabel>

        {posts.length === 0 ? (
          <p className="text-[15px]" style={{ color: "var(--ink-2)" }}>
            No posts yet. Writing is in progress.
          </p>
        ) : (
          <ol className="space-y-10">
            {posts.map((p) => (
              <li
                key={p.slug}
                className="grid grid-cols-[88px_1fr] md:grid-cols-[140px_1fr] gap-6"
              >
                <div className="mono text-xs uppercase tracking-widest pt-1 numeric muted">
                  {p.date}
                </div>
                <div>
                  <h2 className="text-lg font-semibold leading-snug" style={{ color: "var(--ink)" }}>
                    <Link className="link" to={`/blog/${p.slug}`}>
                      {p.title}
                    </Link>
                  </h2>
                  {p.excerpt && (
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                      {p.excerpt}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
