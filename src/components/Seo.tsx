import { useEffect } from "react";

const SITE_NAME = "Teams but (actually) good";
const SITE_URL = "https://teamsbutactuallygood.dev";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

interface SeoProps {
  /** Page title. On the homepage this is used as-is; other pages get " · Teams but (actually) good" appended. */
  title: string;
  description: string;
  /** Route path, e.g. "/download". Defaults to "/". */
  path?: string;
  image?: string;
}

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Updates the document title, meta description, canonical link, and
 * Open Graph / Twitter tags for the current route. Renders nothing.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = path === "/" ? title : `${title} · ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMetaByName("description", description);
    setCanonical(url);

    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:site_name", SITE_NAME);
    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", image);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", image);
  }, [title, description, path, image]);

  return null;
}
