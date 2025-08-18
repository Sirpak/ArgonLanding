import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create consultation request
  app.post("/api/consultation-requests", async (req, res) => {
    try {
      const validatedData = insertConsultationRequestSchema.parse(req.body);
      const request = await storage.createConsultationRequest(validatedData);
      res.json({ success: true, request });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to create consultation request" 
        });
      }
    }
  });

  // Get all consultation requests (for admin purposes)
  app.get("/api/consultation-requests", async (req, res) => {
    try {
      const requests = await storage.getConsultationRequests();
      res.json({ success: true, requests });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch consultation requests" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
