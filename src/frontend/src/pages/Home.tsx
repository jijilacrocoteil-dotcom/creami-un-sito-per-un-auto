import { BrandMark } from "@/components/BrandMark";
import { CarCard, type CarEntry } from "@/components/CarCard";
import { SocialSection } from "@/components/SocialSection";
import { useLanguage } from "@/lib/i18n";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

const PHONE_DISPLAY = "035 040 0940";
const PHONE_TEL = "0350400940";
const EMAIL = "vs.autonoleggio@gmail.com";
const PEC = "vs.autonoleggio@pec.it";

const CARS: CarEntry[] = [
  {
    id: "maserati-ghibli",
    name: "Maserati Ghibli",
    color: "#0a0a0a",
    colorLabel: "nera",
    photo: "/assets/generated/car-maserati-ghibli.dim_1200x900.png",
  },
  {
    id: "mercedes-amg-gt-s",
    name: "Mercedes-AMG GT S 2015",
    color: "#0a0a0a",
    colorLabel: "nera",
    photo: "/assets/generated/car-mercedes-amg-gt-s.dim_1200x900.png",
  },
  {
    id: "audi-rs6",
    name: "Audi RS6 2025",
    color: "#0a0a0a",
    colorLabel: "nera",
    photo: "/assets/generated/car-audi-rs6.dim_1200x900.png",
  },
  {
    id: "maserati-levante",
    name: "Maserati Levante",
    color: "#6b6f74",
    colorLabel: "grigio",
    photo: "/assets/generated/car-maserati-levante.dim_1200x900.png",
  },
  {
    id: "mercedes-gla-45-s",
    name: "Mercedes GLA 45 S",
    color: "#0a0a0a",
    colorLabel: "nero",
    photo: "/assets/generated/car-mercedes-gla-45-s.dim_1200x900.png",
  },
];

export function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section
        id="home"
        data-ocid="hero.section"
        className="relative overflow-hidden border-b border-border bg-subtle-gradient"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        />
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-16 text-center md:px-8 md:py-24">
          <div className="animate-fade-up">
            <BrandMark size="lg" />
          </div>

          <h1
            className="mt-8 animate-fade-up font-display text-4xl italic leading-tight text-gold-gradient md:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            {t.heroTitle}
          </h1>

          <p
            className="mt-4 animate-fade-up text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            {t.heroSubtitle}
            <span aria-hidden="true" className="mx-2 text-primary/60">
              •
            </span>
            <span className="text-primary">{t.heroHours}</span>
          </p>

          <div
            className="mt-10 w-full max-w-3xl animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <img
              src="/assets/generated/hero-car-gold.dim_1200x700.png"
              alt="Illustrazione dorata di un'auto sportiva di lusso, marchio VS Auto Noleggio"
              width={1200}
              height={700}
              loading="eager"
              className="mx-auto h-auto w-full max-w-2xl rounded-sm border border-primary/25 shadow-gold-soft"
            />
          </div>

          <div
            className="mt-10 flex animate-fade-up flex-col items-center gap-3 sm:flex-row sm:justify-center"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href={`tel:${PHONE_TEL}`}
              data-ocid="hero.call_button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold-soft transition-smooth hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.callNow}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              data-ocid="hero.email_button"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-primary/50 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-smooth hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t.emailUs}
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue */}
      <section
        id="catalog"
        data-ocid="catalog.section"
        className="border-b border-border bg-subtle-gradient py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              VS Auto Noleggio
            </span>
            <h2 className="mt-3 font-display text-3xl italic text-foreground md:text-5xl">
              {t.catalogTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              {t.catalogNote}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CARS.map((car, index) => (
              <CarCard key={car.id} car={car} index={index + 1} />
            ))}
          </div>

          <div
            data-ocid="catalog.more_info_card"
            className="mt-10 rounded-sm border border-primary/25 bg-card p-6 text-center shadow-elevated md:p-8"
          >
            <h3 className="font-display text-xl italic text-primary md:text-2xl">
              {t.catalogMoreTitle}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
              {t.catalogMoreText}
            </p>
            <a
              href="#contact"
              data-ocid="catalog.more_info_link"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-primary/50 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary transition-smooth hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              {t.navContact}
            </a>
          </div>
        </div>
      </section>

      {/* Social */}
      <SocialSection />

      {/* Contact & company data */}
      <section
        id="contact"
        data-ocid="contact.section"
        className="bg-background py-20 md:py-28"
      >
        <div className="mx-auto w-full max-w-4xl px-4 md:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              VS Auto Noleggio
            </span>
            <h2 className="mt-3 font-display text-3xl italic text-foreground md:text-5xl">
              {t.contactTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              {t.contactIntro}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ContactCard
              icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
              label={t.labelAddress}
              dataOcid="contact.address_card"
            >
              <p className="text-foreground">
                Via Enrico Fermi 10, Orio al Serio (BG)
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{t.roadHint}</p>
            </ContactCard>

            <ContactCard
              icon={<Clock className="h-5 w-5" aria-hidden="true" />}
              label={t.labelHours}
              dataOcid="contact.hours_card"
            >
              <p className="text-foreground">{t.hoursValue}</p>
            </ContactCard>

            <ContactCard
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              label={t.labelPhone}
              dataOcid="contact.phone_card"
            >
              <a
                href={`tel:${PHONE_TEL}`}
                data-ocid="contact.phone_link"
                className="font-mono text-foreground transition-smooth hover:text-primary"
              >
                {PHONE_DISPLAY}
              </a>
            </ContactCard>

            <ContactCard
              icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              label={t.labelEmail}
              dataOcid="contact.email_card"
            >
              <a
                href={`mailto:${EMAIL}`}
                data-ocid="contact.email_link"
                className="break-all font-mono text-foreground transition-smooth hover:text-primary"
              >
                {EMAIL}
              </a>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                {t.labelPec}
              </p>
              <a
                href={`mailto:${PEC}`}
                data-ocid="contact.pec_link"
                className="break-all font-mono text-foreground transition-smooth hover:text-primary"
              >
                {PEC}
              </a>
            </ContactCard>
          </div>

          {/* Company details */}
          <div
            data-ocid="contact.company_card"
            className="mt-8 rounded-sm border border-primary/25 bg-card p-6 shadow-elevated md:p-8"
          >
            <h3 className="text-center font-display text-xl italic text-primary md:text-2xl">
              {t.companyTitle}
            </h3>
            <dl className="mt-6 grid gap-4 sm:grid-cols-3">
              <CompanyDatum label={t.labelSdi} value="5RUO82D" />
              <CompanyDatum label={t.labelVat} value="04830720167" />
              <CompanyDatum label={t.labelCf} value="04830720167" />
            </dl>
            <div className="mt-6 border-t border-border pt-6 text-center">
              <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {t.ownersTitle}
              </dt>
              <dd className="mt-2 font-display text-lg italic text-foreground">
                {t.ownersValue}
              </dd>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface ContactCardProps {
  icon: ReactNode;
  label: string;
  dataOcid: string;
  children: ReactNode;
}

function ContactCard({ icon, label, dataOcid, children }: ContactCardProps) {
  return (
    <div
      data-ocid={dataOcid}
      className="rounded-sm border border-primary/25 bg-card p-6 shadow-elevated transition-smooth hover:border-primary/50"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/40 text-primary">
          {icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="mt-4 text-sm md:text-base">{children}</div>
    </div>
  );
}

interface CompanyDatumProps {
  label: string;
  value: string;
}

function CompanyDatum({ label, value }: CompanyDatumProps) {
  return (
    <div className="text-center">
      <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 font-mono text-sm text-foreground">{value}</dd>
    </div>
  );
}
