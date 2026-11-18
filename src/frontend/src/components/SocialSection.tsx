import { useLanguage } from "@/lib/i18n";
import { FaInstagram, FaTiktok } from "react-icons/fa";

interface SocialEntry {
  id: string;
  handle: string;
  href: string;
  labelKey: "socialInstagramLabel" | "socialTiktokLabel";
  icon: typeof FaInstagram;
}

const SOCIALS: SocialEntry[] = [
  {
    id: "instagram",
    handle: "vs.autonoleggio",
    href: "https://www.instagram.com/vs.autonoleggio",
    labelKey: "socialInstagramLabel",
    icon: FaInstagram,
  },
  {
    id: "tiktok",
    handle: "vs.auto.noleggio",
    href: "https://www.tiktok.com/@vs.auto.noleggio",
    labelKey: "socialTiktokLabel",
    icon: FaTiktok,
  },
];

export function SocialSection() {
  const { t } = useLanguage();

  return (
    <section
      id="social"
      data-ocid="social.section"
      className="border-b border-border bg-background py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            VS Auto Noleggio
          </span>
          <h2 className="mt-3 font-display text-3xl italic text-foreground md:text-5xl">
            {t.socialTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
            {t.socialIntro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`social.${social.id}_link`}
                className="group flex items-center gap-4 rounded-sm border border-primary/25 bg-card p-6 shadow-elevated transition-smooth hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-primary/40 text-primary transition-smooth group-hover:border-primary/70 group-hover:text-accent">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                    {t[social.labelKey]}
                  </span>
                  <span className="mt-1 block truncate font-mono text-base text-foreground transition-smooth group-hover:text-primary">
                    {social.handle}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
