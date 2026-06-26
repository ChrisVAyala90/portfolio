import React from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { getPost } from "../lib/posts";

export function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <section className="px-6 pt-20 pb-24">
        <div className="max-w-2xl mx-auto">
          <p className="text-[15px]" style={{ color: "var(--ink-2)" }}>
            Post not found.
          </p>
          <p className="mt-6">
            <Link className="link mono text-xs uppercase tracking-widest" to="/blog">
              Back to writing
            </Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <article className="px-6 pt-20 pb-24">
      <div className="max-w-2xl mx-auto">
        <Link className="link mono text-xs uppercase tracking-widest" to="/blog">
          Writing
        </Link>

        <h1
          className="mt-8 text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
          style={{ color: "var(--ink)" }}
        >
          {post.title}
        </h1>
        {post.date && (
          <p className="mono text-xs uppercase tracking-widest mt-3 muted numeric">{post.date}</p>
        )}

        <div className="mt-10" style={{ color: "var(--ink-2)" }}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-5 text-[17px] leading-relaxed">{children}</p>,
              h2: ({ children }) => (
                <h2 className="mt-10 mb-4 text-xl font-semibold" style={{ color: "var(--ink)" }}>
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-3 text-lg font-semibold" style={{ color: "var(--ink)" }}>
                  {children}
                </h3>
              ),
              ul: ({ children }) => (
                <ul className="mb-5 ml-5 list-disc space-y-2 text-[17px] leading-relaxed">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-5 ml-5 list-decimal space-y-2 text-[17px] leading-relaxed">{children}</ol>
              ),
              a: ({ href, children }) => (
                <a className="link" href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="my-6 pl-4 border-l-2 italic" style={{ borderColor: "var(--rule)" }}>
                  {children}
                </blockquote>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold" style={{ color: "var(--ink)" }}>
                  {children}
                </strong>
              ),
              code: ({ children }) => (
                <code className="mono text-[0.9em] px-1 py-0.5 rounded" style={{ background: "var(--rule)" }}>
                  {children}
                </code>
              ),
              hr: () => <hr className="my-8 hairline" />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
