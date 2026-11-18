import { BrandMark } from "@/components/BrandMark";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/lib/i18n";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <a
            href="#home"
            data-ocid="nav.home_link"
            className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
          >
            <BrandMark size="sm" showTagline={false} />
            <span className="hidden font-display text-lg italic text-foreground sm:inline">
              VS Auto Noleggio
            </span>
          </a>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            <a
              href="#home"
              data-ocid="nav.home_link"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-smooth hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {t.navHome}
            </a>
            <a
              href="#catalog"
              data-ocid="nav.catalog_link"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-smooth hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {t.navCatalog}
            </a>
            <a
              href="#contact"
              data-ocid="nav.contact_link"
              className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-smooth hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {t.navContact}
            </a>
          </nav>

          <LanguageSelector />
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-12 text-center md:px-8">
          <BrandMark size="md" />
          <p className="max-w-md text-sm text-muted-foreground">
            {t.contactIntro}
          </p>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.25em]"
          >
            <a
              href="#home"
              data-ocid="footer.home_link"
              className="text-muted-foreground transition-smooth hover:text-primary"
            >
              {t.navHome}
            </a>
            <a
              href="#catalog"
              data-ocid="footer.catalog_link"
              className="text-muted-foreground transition-smooth hover:text-primary"
            >
              {t.navCatalog}
            </a>
            <a
              href="#contact"
              data-ocid="footer.contact_link"
              className="text-muted-foreground transition-smooth hover:text-primary"
            >
              {t.navContact}
            </a>
          </nav>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <a
              href="tel:0350400940"
              data-ocid="footer.phone_link"
              className="transition-smooth hover:text-primary"
            >
              035 040 0940
            </a>
            <span aria-hidden="true" className="text-primary/40">
              |
            </span>
            <a
              href="mailto:vs.autonoleggio@gmail.com"
              data-ocid="footer.email_link"
              className="transition-smooth hover:text-primary"
            >
              vs.autonoleggio@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <span className="font-mono text-primary">{t.siteName}</span>
            <span>
              © {new Date().getFullYear()} VS Auto Noleggio — {t.footerRights}
            </span>
            <span>{t.footerOwnedBy}</span>
          </div>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              typeof window !== "undefined" ? window.location.hostname : "",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="footer.attribution_link"
            className="text-xs text-muted-foreground/70 transition-smooth hover:text-primary"
          >
            © {new Date().getFullYear()}. Built with love using caffeine.ai
          </a>
        </div>
      </footer>
    </div>
  );
}
