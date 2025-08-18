import type { Express } from "express";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** URL-based resolution (ESM-safe). Never yields undefined. */
const CLIENT_ROOT = fileURLToPath(new URL("../client/", import.meta.url));
const DIST_DIR    = fileURLToPath(new URL("../client/dist/", import.meta.url));
const INDEX_HTML  = fileURLToPath(new URL("../client/index.html", import.meta.url));

function logPaths(where: string) {
  console.log(`[vite.ts:${where}]`, {
    CLIENT_ROOT,
    INDEX_HTML,
    DIST_DIR,
    existsClient: fs.existsSync(CLIENT_ROOT),
    existsIndex : fs.existsSync(INDEX_HTML),
    existsDist  : fs.existsSync(DIST_DIR),
  });
}

export async function setupVite(app: Express, server: any) {
  logPaths("dev");
  const { createServer } = await import("vite");
  const vite = await createServer({
    root: CLIENT_ROOT,
    appType: "spa",
    server: { middlewareMode: true, hmr: { server } },
    resolve: {
      alias: {
        "@": path.resolve(CLIENT_ROOT, "src"),
        "@shared": path.resolve(fileURLToPath(new URL("../shared/", import.meta.url))),
        "@assets": path.resolve(fileURLToPath(new URL("../attached_assets/", import.meta.url))),
      },
    },
    // plugins: [react()] // only if not already in client/vite.config.ts
  });

  app.use(vite.middlewares);

  // Optional debug endpoint to verify paths quickly
  app.get("/debug/paths", (_req, res) => {
    res.json({
      CLIENT_ROOT, INDEX_HTML, DIST_DIR,
      existsClient: fs.existsSync(CLIENT_ROOT),
      existsIndex : fs.existsSync(INDEX_HTML),
      existsDist  : fs.existsSync(DIST_DIR),
    });
  });

  // Catch-all: serve index.html transformed by Vite
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      let template = fs.readFileSync(INDEX_HTML, "utf-8");
      template = await vite.transformIndexHtml(url, template);
      res.setHeader("Content-Type", "text/html");
      res.status(200).end(template);
    } catch (e: any) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  logPaths("prod");
  app.use(express.static(DIST_DIR));
  app.get("/debug/paths", (_req, res) => {
    res.json({
      CLIENT_ROOT, INDEX_HTML, DIST_DIR,
      existsClient: fs.existsSync(CLIENT_ROOT),
      existsIndex : fs.existsSync(INDEX_HTML),
      existsDist  : fs.existsSync(DIST_DIR),
    });
  });
  app.get("*", (_req, res) => {
    res.sendFile(path.join(DIST_DIR, "index.html"));
  });
}

