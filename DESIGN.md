# Design Brief

## Direction

Nero & Oro — a deep-black, metallic-gold luxury automotive showcase for VS Auto Noleggio, built directly from the brand sign.

## Tone

Refined luxury: matte-black canvas, metallic gold accents, symmetric centered composition — premium and confident, never flashy.

## Differentiation

The gold "VS" monogram with flanking chevron arrows and a gold serif "AUTONOLEGGIO" recurs as a living brand mark in header, hero, and footer.

## Color Palette

| Token      | OKLCH        | Role                                   |
| ---------- | ------------ | -------------------------------------- |
| background | 0.11 0.006 60 | Deep matte black canvas                |
| foreground | 0.93 0.012 85 | Warm off-white text                    |
| card       | 0.15 0.008 60 | Charcoal contact/info surfaces         |
| primary    | 0.78 0.135 85 | Metallic gold — brand, borders, CTAs   |
| accent     | 0.84 0.12 88  | Brighter gold highlight / hover        |
| muted      | 0.19 0.008 60 | Secondary panels, muted text 0.66 0.02 80 |

## Typography

- Display: Instrument Serif (italic) — brand name "VS AUTO NOLEGGIO", hero, section headings
- Body: Satoshi — paragraphs, labels, navigation, UI
- Mono: JetBrains Mono — company data (SDI, P.IVA, C.F.), phone, email
- Scale: hero `text-5xl md:text-7xl font-normal tracking-tight`, h2 `text-3xl md:text-5xl`, label `text-xs font-semibold tracking-[0.3em] uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Layered blacks with hairline gold borders; depth via `shadow-elevated` on cards and `shadow-gold-soft` on the hero brand mark, no neon glow.

## Structural Zones

| Zone    | Background              | Border                      | Notes                                             |
| ------- | ----------------------- | --------------------------- | ------------------------------------------------- |
| Header  | `bg-background/90` blur | `border-b border-border`    | Centered gold monogram + chevrons; language pill right |
| Content | `bg-background`         | —                           | Alternate `bg-card` sections for contact/data     |
| Footer  | `bg-card`               | `border-t border-border`    | Brand mark, contacts, company data, owners        |

## Spacing & Rhythm

Generous vertical rhythm: `py-20 md:py-28` per section, `gap-6 md:gap-8` grids, tight `gap-2` micro-spacing in data rows.

## Component Patterns

- Buttons: sharp (`rounded-sm`), gold-gradient fill for primary, gold hairline outline for secondary, hover brighten + gold-soft shadow
- Cards: `rounded-sm` charcoal `bg-card`, 1px gold hairline border, `shadow-elevated`
- Badges: pill language selector, gold hairline border, gold text, active = gold fill

## Motion

- Entrance: `animate-fade-up` staggered on hero elements (0.7s cubic-bezier)
- Hover: `transition-smooth` on buttons/cards, gold brighten + lift
- Decorative: slow `animate-gold-sheen` on the brand monogram gradient

## Constraints

- Black + gold only — no other hues except semantic destructive/success
- Brand "VS Auto Noleggio" must appear in every section (header, hero, footer)
- No invented content: only user-provided business data; no vehicle gallery, no quote/contact form

## Signature Detail

The recurring gold "VS" monogram with flanking chevron arrows and italic gold-serif "AUTONOLEGGIO" — a typographic brand system echoing the physical sign.
