import { cn } from "@/lib/utils";

interface ChevronProps {
  direction: "left" | "right";
  className?: string;
}

function Chevrons({ direction, className }: ChevronProps) {
  const path = direction === "right" ? "M1 1l6 6-6 6" : "M7 1L1 7l6 6";
  return (
    <svg
      viewBox="0 0 8 14"
      aria-hidden="true"
      className={cn("h-4 w-3 shrink-0", className)}
      fill="none"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BrandMarkProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  className?: string;
}

const MONOGRAM_SIZE: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  sm: "text-3xl",
  md: "text-5xl",
  lg: "text-7xl md:text-8xl",
};

const TAGLINE_SIZE: Record<NonNullable<BrandMarkProps["size"]>, string> = {
  sm: "text-[0.6rem] tracking-[0.35em]",
  md: "text-xs tracking-[0.4em]",
  lg: "text-sm md:text-base tracking-[0.5em]",
};

export function BrandMark({
  size = "md",
  showTagline = true,
  className,
}: BrandMarkProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 text-center",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <Chevrons direction="right" className="text-primary/70" />
        <span
          className={cn(
            "font-display italic leading-none text-gold-gradient animate-gold-sheen",
            MONOGRAM_SIZE[size],
          )}
          style={{ backgroundSize: "200% 100%" }}
        >
          VS
        </span>
        <Chevrons direction="left" className="text-primary/70" />
      </div>
      {showTagline && (
        <span
          className={cn(
            "font-display uppercase text-primary/90",
            TAGLINE_SIZE[size],
          )}
        >
          Autonoleggio
        </span>
      )}
    </div>
  );
}
