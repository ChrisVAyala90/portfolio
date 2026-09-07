import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { metadataTags, resolveMetadata } from '../lib/metadata';
import { posts } from '../lib/posts';

export function RouteHead() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = resolveMetadata(pathname, posts);
    document.title = meta.title;
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = meta.canonical;
    if (!canonical.isConnected) document.head.append(canonical);
    for (const tag of metadataTags(meta)) {
      const element = document.head.querySelector<HTMLMetaElement>(`meta[${tag.attribute}="${tag.key}"]`) ?? document.createElement('meta');
      element.setAttribute(tag.attribute, tag.key);
      element.content = tag.content;
      if (!element.isConnected) document.head.append(element);
    }
  }, [pathname]);
  return null;
}
