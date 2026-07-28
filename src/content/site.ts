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
    index: "01",
    line: "They answer the phones.",
    body: "Every call, every message, every fire drill still runs through you — because no one ever built the systems to catch it first.",
  },
  {
    index: "02",
    line: "They chase leads.",
    body: "Opportunities go cold while you're mid-job, because follow-up depends on someone remembering to do it.",
  },
  {
    index: "03",
    line: "They fix mistakes.",
    body: "Marketing, sales, and operations were never built to work together — so something is always falling through the cracks.",
  },
  {
    index: "04",
    line: "They work harder every year.",
    body: "More jobs should mean more freedom. Instead, growth means more to carry, alone.",
  },
] as const;

export const hiddenProblemClosing =
  "Not because they lack talent. Not because they don't care. Because no one ever helped them build the systems that great companies are built on.";
