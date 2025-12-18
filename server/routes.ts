import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // We'll serve the static website
  app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
