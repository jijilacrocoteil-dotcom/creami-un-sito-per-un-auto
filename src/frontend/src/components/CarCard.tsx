import { CarPhoto } from "@/components/CarViewer3D";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export interface CarEntry {
  /** Stable identifier used for keys and test markers. */
  id: string;
  /** Model name, e.g. "Maserati Ghibli". */
  name: string;
  /** Body colour as a hex string. */
  color: string;
  /** Localised colour label, e.g. "nera". */
  colorLabel: string;
  /** Photograph matched to this car, served from the platform file archive. */
  photo?: string;
}

interface CarCardProps {
  car: CarEntry;
  index: number;
}

export function CarCard({ car, index }: CarCardProps) {
  const { t } = useLanguage();
  const label = `${car.name} — ${car.colorLabel}`;

  return (
    <article
      data-ocid={`catalog.car_card.${index}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-primary/25 bg-card shadow-elevated transition-smooth hover:border-primary/50"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-subtle-gradient">
        <CarPhoto
          photo={car.photo}
          label={label}
          alt={`${t.catalogPhotoAlt}: ${label}`}
          ocidSuffix={String(index)}
          className="absolute inset-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl italic text-foreground">
          {car.name}
        </h3>
        <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <span
            aria-hidden="true"
            className="inline-block h-3.5 w-3.5 rounded-full border border-border"
            style={{ backgroundColor: car.color }}
          />
          {car.colorLabel}
        </p>

        <a
          href="#contact"
          data-ocid={`catalog.request_quote_button.${index}`}
          className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-gold-soft transition-smooth hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
        >
          {t.requestQuote}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
