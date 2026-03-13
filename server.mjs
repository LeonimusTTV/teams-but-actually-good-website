import path from "node:path";
import { constants as fsConstants } from "node:fs";
import { access } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const runtimeDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(runtimeDir, "dist");
const indexPath = path.join(distDir, "index.html");
const port = Number(process.env.PORT || 5173);

const securityHeaders = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "base-uri 'self'",
    "font-src 'self'",
    "img-src 'self' data:",
    "script-src 'self'",
    "style-src 'self'",
    "connect-src 'self' https://github.com https://*.githubusercontent.com",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "upgrade-insecure-requests",
  ].join("; "),
  "Cross-Origin-Opener-Policy": "same-origin",
  "Permissions-Policy": "accelerometer=(), camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
};

function getContentType(filePath) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".css":
      return "text/css; charset=utf-8";
    case ".html":
      return "text/html; charset=utf-8";
    case ".ico":
      return "image/x-icon";
    case ".js":
      return "text/javascript; charset=utf-8";
    case ".json":
      return "application/json; charset=utf-8";
    case ".svg":
      return "image/svg+xml";
    case ".txt":
      return "text/plain; charset=utf-8";
    case ".woff2":
      return "font/woff2";
    case ".xml":
      return "application/xml; charset=utf-8";
    default:
      return "application/octet-stream";
  }
}

function getCacheControl(filePath) {
  const relativePath = path.relative(distDir, filePath).replaceAll("\\", "/");

  if (relativePath === "index.html") {
    return "no-cache";
  }

  if (relativePath.startsWith("assets/")) {
    return "public, max-age=31536000, immutable";
  }

  if (relativePath.startsWith("fonts/")) {
    return "public, max-age=2592000";
  }

  return "public, max-age=604800";
}

function createHeaders(filePath) {
  const headers = new Headers(securityHeaders);
  headers.set("Cache-Control", getCacheControl(filePath));
  headers.set("Content-Type", getContentType(filePath));
  return headers;
}

async function fileExists(filePath) {
  try {
    await access(filePath, fsConstants.R_OK);
    return true;
  } catch {
    return false;
  }
}

function notFound() {
  return new Response("Not Found", {
    status: 404,
    headers: createHeaders(indexPath),
  });
}

Bun.serve({
  port,
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: new Headers({
          ...securityHeaders,
          Allow: "GET, HEAD",
        }),
      });
    }

    const url = new URL(request.url);
    const requestPath =
      url.pathname === "/" ? "/index.html" : decodeURIComponent(url.pathname);
    const normalizedPath = path.normalize(path.join(distDir, requestPath));

    if (!normalizedPath.startsWith(distDir)) {
      return notFound();
    }

    const hasDirectMatch = await fileExists(normalizedPath);
    const filePath = hasDirectMatch
      ? normalizedPath
      : path.extname(requestPath)
        ? null
        : indexPath;

    if (!filePath) {
      return notFound();
    }

    const file = Bun.file(filePath);
    return new Response(request.method === "HEAD" ? null : file, {
      status: 200,
      headers: createHeaders(filePath),
    });
  },
});

console.log(`Serving dist on http://0.0.0.0:${port}`);