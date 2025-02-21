import "express-session";

declare module "express-session" {
  interface SessionData {
    formData?: Record<string, any>; // Permite armazenar um objeto genérico na sessão
  }
}