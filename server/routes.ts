import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

// In-memory waitlist store (persists while server is running)
const waitlist: { name: string; email: string; phone: string; joinedAt: string }[] = [];

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  // POST /api/waitlist — join the coming soon waitlist
  app.post("/api/waitlist", (req, res) => {
    const { name, email, phone } = req.body as { name?: string; email?: string; phone?: string };

    if (!name || !email || !phone) {
      res.status(400).json({ error: "name, email and phone are required" });
      return;
    }

    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email)) {
      res.status(400).json({ error: "Invalid email address" });
      return;
    }

    // Deduplicate by email
    const already = waitlist.find((w) => w.email.toLowerCase() === email.toLowerCase());
    if (already) {
      res.status(200).json({ success: true, message: "Already on the list" });
      return;
    }

    waitlist.push({ name, email, phone, joinedAt: new Date().toISOString() });
    console.log(`[waitlist] New signup: ${name} <${email}> — total ${waitlist.length}`);

    res.status(201).json({ success: true });
  });

  // GET /api/waitlist — admin view (remove or protect before going live)
  app.get("/api/waitlist", (_req, res) => {
    res.json({ count: waitlist.length, entries: waitlist });
  });

  const httpServer = createServer(app);
  return httpServer;
}
