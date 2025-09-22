import { LeadInput } from "./validation";

const PREMIUM_SERVICES = new Set([
  "developpement-plateforme-saas",
  "developpement-marketplace",
  "hebergement-hds-sante",
]);

export function scoreLead(input: LeadInput): number {
  let score = 0;

  switch (input.budgetRange) {
    case "10-25k":
      score += 10;
      break;
    case "25-50k":
      score += 20;
      break;
    case "50-100k":
      score += 30;
      break;
    case "100k+":
      score += 40;
      break;
  }

  switch (input.timeline) {
    case "urgent":
      score += 15;
      break;
    case "1-3m":
      score += 10;
      break;
  }

  if (input.role === "Dirigeant" || input.role === "CTO") score += 10;

  if (input.serviceSlug && PREMIUM_SERVICES.has(input.serviceSlug)) score += 10;

  // Email pro simple heuristic
  const personalDomains = [
    "gmail.com",
    "outlook.com",
    "hotmail.com",
    "yahoo.com",
    "icloud.com",
  ];
  const domain = input.email.split("@")[1] || "";
  if (domain && !personalDomains.includes(domain)) score += 5;

  return score;
}

export function statusFromScore(score: number): "qualified" | "review" | "cold" {
  if (score >= 45) return "qualified";
  if (score >= 25) return "review";
  return "cold";
}

