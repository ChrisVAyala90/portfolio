import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/header";
import { Home } from "./components/home";
import { BlogIndex } from "./components/blog-index";
import { BlogPost } from "./components/blog-post";

// Renders Home scrolled to a section, so direct links like /work and /projects land on the right content.
function HomeSection({ id }: { id: string }) {
  React.useEffect(() => {
    document.getElementById(id)?.scrollIntoView();
  }, [id]);
  return <Home />;
}

export default function App() {
  return (
    <div id="top" className="min-h-screen" style={{ background: "var(--paper)", color: "var(--ink)" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/work" element={<HomeSection id="work" />} />
        <Route path="/projects" element={<HomeSection id="projects" />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <footer className="px-6 py-10" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="max-w-3xl mx-auto flex items-center justify-between mono text-xs uppercase tracking-widest muted">
          <span>© {new Date().getFullYear()} Christopher Ayala</span>
          <a className="link py-3.5 -my-3.5" href="#top">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
