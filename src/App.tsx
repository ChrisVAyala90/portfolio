import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header";
import { Home } from "./components/home";
import { BlogIndex } from "./components/blog-index";
import { BlogPost } from "./components/blog-post";

export default function App() {
  return (
    <div id="top" className="min-h-screen" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <footer className="px-6 py-10" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between mono text-xs uppercase tracking-widest muted">
          <span>© {new Date().getFullYear()} Christopher Ayala</span>
          <a className="link" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
