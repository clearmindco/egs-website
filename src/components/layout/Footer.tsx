import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-border">
      <Container className="flex flex-col items-start gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <Logo />
          <p className="max-w-sm font-sans text-sm text-cool-gray">
            {siteConfig.philosophy}
          </p>
        </div>
        <p className="font-sans text-xs text-cool-gray">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
