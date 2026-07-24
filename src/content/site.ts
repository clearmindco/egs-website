/**
 * Approved copy sourced from the EGS Executive Brief, Messaging & Copy
 * Source of Truth, and Homepage Build Specification (Notion).
 */

export const siteConfig = {
  name: "Elite Growth Strategies",
  shortName: "EGS",
  promise: "We Build Businesses That Perform Better™",
  philosophy: "Better Systems Create Better Businesses™",
  description:
    "EGS is a business performance company that helps established local service businesses generate more qualified leads, respond faster, build trust, and convert more customers by improving the connected systems behind growth.",
};

export const primaryCta = {
  label: "Request a Business Performance Audit",
  href: "/audit",
};

export const secondaryCta = {
  label: "See Our Approach",
  href: "#point-of-view",
};

export const navLinks = [{ label: "Our Approach", href: "#point-of-view" }];

export const hiddenProblems = [
  {
    title: "The owner is still the operating system",
    body: "Every decision, follow-up, and fire drill still runs through you instead of through the business.",
  },
  {
    title: "Leads are missed or answered too slowly",
    body: "Opportunities go cold before anyone gets back to them, no matter how much demand is coming in.",
  },
  {
    title: "Marketing, sales, and operations run in silos",
    body: "Each part of the business competes for attention instead of working together as one system.",
  },
  {
    title: "Growth creates more stress, not more leverage",
    body: "More jobs should mean more freedom. Instead, it means more to manage and more that can go wrong.",
  },
] as const;
