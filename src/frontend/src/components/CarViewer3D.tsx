import { useState } from "react";

/** Fallback shown when a car has no matched photograph. */
const FALLBACK_IMAGE = "/assets/images/placeholder.svg";

interface CarPhotoProps {
  /** Photograph matched to this car, served from the platform file archive. */
  photo?: string;
  /** Accessible description of the car. */
  label: string;
  /** Alt text for the photograph. */
  alt: string;
  /** Deterministic test marker suffix for the image. */
  ocidSuffix?: string;
  className?: string;
}

/**
 * Renders the matched photograph for a car inside the card image area.
 * Falls back to a clear, recognisable placeholder when no photo is matched
 * or when the photograph fails to load.
 */
export function CarPhoto({
  photo,
  label,
  alt,
  ocidSuffix,
  className,
}: CarPhotoProps) {
  const [failed, setFailed] = useState(false);
  const src = !photo || failed ? FALLBACK_IMAGE : photo;
  const isFallback = !photo || failed;

  return (
    <div className={className}>
      <img
        src={src}
        alt={isFallback ? `${label} — ${alt}` : alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        data-ocid={
          ocidSuffix ? `catalog.car_photo.${ocidSuffix}` : "catalog.car_photo"
        }
        className="h-full w-full object-cover"
      />
    </div>
  );
}
