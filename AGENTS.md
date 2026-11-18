# Project Guidance

## User Preferences

- Design nero con dettagli in oro, ispirato alla foto dell'insegna
- Il marchio VS Auto Noleggio deve apparire in ogni parte del sito, nel design come in foto
- Non inventare contenuti: usare solo le informazioni fornite dall'utente
- Lingue del sito: Italiano, Inglese, Albanese, Arabo

## Accepted Requirements

- Sezione catalogo con cinque auto nominate (Maserati Ghibli nera, Mercedes-AMG GT S nera 2015, Audi RS6 nera 2025, Maserati Levante grigio, Mercedes GLA 45 S nero)
- Nota che queste sono solo alcune delle nostre auto
- Visore 3D ruotabile per ogni auto, con foto come alternativa se il modello 3D non è disponibile
- Bottone 'Richiedi preventivo' sotto ogni auto che porta ai contatti aziendali
- Messaggio che l'azienda ha altre auto, anche non di lusso, e auto in vendita, con invito a visitare il capannone
- Il sito si chiama vsnoleggioauto.it
- Sezione social con icona Instagram e handle vs.autonoleggio scritto accanto
- Sezione social con icona TikTok e handle vs.auto.noleggio scritto accanto

## Verified Commands

- **typecheck**: `pnpm typecheck`
- **fix**: `pnpm fix`
- **build**: `pnpm build`

## Learnings

- Language state lives in src/frontend/src/App.tsx via LanguageContext; useLanguage() from src/frontend/src/lib/i18n.ts returns {language, setLanguage, t, dir} and dir drives document.documentElement.dir for RTL Arabic.
- src/frontend/src/components/BrandMark.tsx renders the recurring VS monogram, gold chevrons and AUTONOLEGGIO wordmark; reuse it in header, hero and footer to keep the brand in every section.
- Biome lint/a11y/useSemanticElements rejects role="group" on a div; use a native <fieldset> for grouped controls such as the language selector.
- The phone number renders as grouped text (035 040 0940) while the tel: link keeps the ungrouped digits, so e2e checks must match the displayed grouped form.
- A static showcase with no persisted state correctly keeps Expose({ entities = [] }) and needs no OQL entities; getApiDoc lives in its own mixin with no stable state.
- drei OrbitControls with autoRotate gives drag-to-rotate plus idle auto-spin in one control; avoid Environment preset to skip runtime HDRI CDN fetches.
- A dynamic per-item swatch uses inline backgroundColor from data, which biome accepts unlike theme colors.
- The catalogue is a local CARS constant in src/frontend/src/pages/Home.tsx; no query or mutation, so there is no first-render or invalidation risk.
- CarViewer3D's photo fallback requires car.photo, which is never set: every car uses the 3D model, so the photo branch stays inactive.
- animate-fade-up and animate-gold-sheen have no prefers-reduced-motion guard; add motion-reduce:animate-none if requested.
- Car photos live in src/frontend/public/assets/generated and are matched to each car by name through the photo field on the local CARS constant in src/frontend/src/pages/Home.tsx.
- CarPhoto (in src/frontend/src/components/CarViewer3D.tsx) falls back to /assets/images/placeholder.svg when photo is absent or onError fires, keeping the aspect-[4/3] gold-framed image area.
- The custom domain vsnoleggioauto.it is a platform deploy binding, not app source; only the footer/title name is source-verifiable.
- animate-fade-up and animate-gold-sheen still have no prefers-reduced-motion guard; add motion-reduce:animate-none if requested.
- react-icons/fa provides FaInstagram and FaTiktok; the icon component is typed as typeof FaInstagram and rendered via a local Icon alias.
- Social handles are static data in src/frontend/src/components/SocialSection.tsx; only the section title/intro/labels are translated, handles stay literal.
- SocialSection is a self-contained local-constant component with no query or mutation, so it carries no first-render or invalidation risk.
- Social handles render as visible text beside aria-hidden icons, so each entry has an accessible name without extra aria-label.
