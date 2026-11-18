import { createContext, useContext } from "react";

export type LanguageCode = "it" | "en" | "sq" | "ar";

export interface LanguageMeta {
  code: LanguageCode;
  label: string;
  short: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageMeta[] = [
  { code: "it", label: "Italiano", short: "IT", dir: "ltr" },
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "sq", label: "Shqip", short: "SQ", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
];

export interface Translation {
  navHome: string;
  navCatalog: string;
  navContact: string;
  brandTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroHours: string;
  callNow: string;
  emailUs: string;
  contactTitle: string;
  contactIntro: string;
  labelAddress: string;
  labelPhone: string;
  labelEmail: string;
  labelPec: string;
  labelHours: string;
  hoursValue: string;
  roadHint: string;
  companyTitle: string;
  labelSdi: string;
  labelVat: string;
  labelCf: string;
  ownersTitle: string;
  ownersValue: string;
  footerRights: string;
  footerOwnedBy: string;
  languageLabel: string;
  catalogTitle: string;
  catalogNote: string;
  catalogPhotoAlt: string;
  requestQuote: string;
  catalogMoreTitle: string;
  catalogMoreText: string;
  socialTitle: string;
  socialIntro: string;
  socialInstagramLabel: string;
  socialTiktokLabel: string;
  siteName: string;
}

export const TRANSLATIONS: Record<LanguageCode, Translation> = {
  it: {
    navHome: "Home",
    navCatalog: "Catalogo",
    navContact: "Contatti",
    brandTagline: "Noleggio Auto di Lusso",
    heroTitle: "VS Auto Noleggio",
    heroSubtitle: "Noleggio Auto di Lusso",
    heroHours: "Aperto 24 ore su 24",
    callNow: "Chiama ora",
    emailUs: "Scrivici",
    contactTitle: "Contatti e Informazioni",
    contactIntro:
      "Siamo a tua disposizione tutti i giorni, a qualsiasi ora. Contattaci per qualsiasi informazione.",
    labelAddress: "Indirizzo",
    labelPhone: "Telefono",
    labelEmail: "Email",
    labelPec: "PEC",
    labelHours: "Orari",
    hoursValue: "Aperto 24 ore su 24",
    roadHint: "Uscita autostradale A4 — Orio al Serio (BG)",
    companyTitle: "Dati Societari",
    labelSdi: "SDI",
    labelVat: "P.IVA",
    labelCf: "C.F.",
    ownersTitle: "Proprietari",
    ownersValue: "Silva Gjoka e Bani Gjoka",
    footerRights: "Tutti i diritti riservati",
    footerOwnedBy: "Proprietà di Silva Gjoka & Bani Gjoka",
    languageLabel: "Lingua",
    catalogTitle: "Il Nostro Catalogo",
    catalogNote: "Queste sono solo alcune delle nostre auto.",
    catalogPhotoAlt: "Foto dell'auto",
    requestQuote: "Richiedi preventivo",
    catalogMoreTitle: "Molte altre auto disponibili",
    catalogMoreText:
      "Oltre alle auto di lusso, disponiamo di molte altre vetture, anche non di lusso, e di auto in vendita. Vieni a trovarci in capannone per vedere di persona tutta la nostra selezione.",
    socialTitle: "Seguici sui Social",
    socialIntro:
      "Resta aggiornato sulle nostre auto e sulle novità: seguici sui nostri canali social.",
    socialInstagramLabel: "Instagram",
    socialTiktokLabel: "TikTok",
    siteName: "vsnoleggioauto.it",
  },
  en: {
    navHome: "Home",
    navCatalog: "Catalogue",
    navContact: "Contact",
    brandTagline: "Luxury Car Rental",
    heroTitle: "VS Auto Noleggio",
    heroSubtitle: "Luxury Car Rental",
    heroHours: "Open 24 hours a day",
    callNow: "Call now",
    emailUs: "Email us",
    contactTitle: "Contact & Information",
    contactIntro:
      "We are at your disposal every day, at any hour. Get in touch for any information.",
    labelAddress: "Address",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelPec: "Certified email",
    labelHours: "Opening hours",
    hoursValue: "Open 24 hours a day",
    roadHint: "A4 motorway exit — Orio al Serio (BG)",
    companyTitle: "Company Details",
    labelSdi: "SDI",
    labelVat: "VAT no.",
    labelCf: "Tax code",
    ownersTitle: "Owners",
    ownersValue: "Silva Gjoka and Bani Gjoka",
    footerRights: "All rights reserved",
    footerOwnedBy: "Owned by Silva Gjoka & Bani Gjoka",
    languageLabel: "Language",
    catalogTitle: "Our Catalogue",
    catalogNote: "These are only some of our cars.",
    catalogPhotoAlt: "Photo of the car",
    requestQuote: "Request a quote",
    catalogMoreTitle: "Many more cars available",
    catalogMoreText:
      "Beyond our luxury cars, we have many other vehicles, including non-luxury cars, and cars for sale. Come and visit our warehouse to see our full selection in person.",
    socialTitle: "Follow Us on Social",
    socialIntro:
      "Stay up to date with our cars and our latest news: follow us on our social channels.",
    socialInstagramLabel: "Instagram",
    socialTiktokLabel: "TikTok",
    siteName: "vsnoleggioauto.it",
  },
  sq: {
    navHome: "Kryefaqja",
    navCatalog: "Katalogu",
    navContact: "Kontakt",
    brandTagline: "Qira Makinash Luksoze",
    heroTitle: "VS Auto Noleggio",
    heroSubtitle: "Qira Makinash Luksoze",
    heroHours: "Hapur 24 orë në ditë",
    callNow: "Telefono tani",
    emailUs: "Na shkruaj",
    contactTitle: "Kontakt dhe Informacion",
    contactIntro:
      "Jemi në dispozicionin tuaj çdo ditë, në çdo orë. Na kontaktoni për çdo informacion.",
    labelAddress: "Adresa",
    labelPhone: "Telefoni",
    labelEmail: "Email",
    labelPec: "Email e certifikuar",
    labelHours: "Orari",
    hoursValue: "Hapur 24 orë në ditë",
    roadHint: "Dalja e autostradës A4 — Orio al Serio (BG)",
    companyTitle: "Të Dhëna të Shoqërisë",
    labelSdi: "SDI",
    labelVat: "NIPT",
    labelCf: "Kodi fiskal",
    ownersTitle: "Pronarët",
    ownersValue: "Silva Gjoka dhe Bani Gjoka",
    footerRights: "Të gjitha të drejtat e rezervuara",
    footerOwnedBy: "Pronë e Silva Gjoka & Bani Gjoka",
    languageLabel: "Gjuha",
    catalogTitle: "Katalogu Ynë",
    catalogNote: "Këto janë vetëm disa nga makinat tona.",
    catalogPhotoAlt: "Foto e makinës",
    requestQuote: "Kërko ofertë",
    catalogMoreTitle: "Shumë makina të tjera në dispozicion",
    catalogMoreText:
      "Përveç makinave luksoze, kemi shumë automjete të tjera, edhe jo luksoze, dhe makina në shitje. Ejani të na vizitoni në magazinë për të parë nga afër të gjithë përzgjedhjen tonë.",
    socialTitle: "Na Ndiqni në Rrjetet Sociale",
    socialIntro:
      "Qëndroni të përditësuar me makinat dhe lajmet tona: na ndiqni në kanalet tona sociale.",
    socialInstagramLabel: "Instagram",
    socialTiktokLabel: "TikTok",
    siteName: "vsnoleggioauto.it",
  },
  ar: {
    navHome: "الرئيسية",
    navCatalog: "الكتالوج",
    navContact: "اتصل بنا",
    brandTagline: "تأجير سيارات فاخرة",
    heroTitle: "VS Auto Noleggio",
    heroSubtitle: "تأجير سيارات فاخرة",
    heroHours: "مفتوح 24 ساعة طوال اليوم",
    callNow: "اتصل الآن",
    emailUs: "راسلنا",
    contactTitle: "الاتصال والمعلومات",
    contactIntro:
      "نحن في خدمتك كل يوم وفي أي وقت. تواصل معنا للحصول على أي معلومات.",
    labelAddress: "العنوان",
    labelPhone: "الهاتف",
    labelEmail: "البريد الإلكتروني",
    labelPec: "البريد المعتمد",
    labelHours: "ساعات العمل",
    hoursValue: "مفتوح 24 ساعة طوال اليوم",
    roadHint: "مخرج الطريق السريع A4 — Orio al Serio (BG)",
    companyTitle: "بيانات الشركة",
    labelSdi: "SDI",
    labelVat: "الرقم الضريبي",
    labelCf: "الرمز الضريبي",
    ownersTitle: "المالكون",
    ownersValue: "Silva Gjoka و Bani Gjoka",
    footerRights: "جميع الحقوق محفوظة",
    footerOwnedBy: "ملك Silva Gjoka و Bani Gjoka",
    languageLabel: "اللغة",
    catalogTitle: "كتالوجنا",
    catalogNote: "هذه فقط بعض سياراتنا.",
    catalogPhotoAlt: "صورة السيارة",
    requestQuote: "اطلب عرض سعر",
    catalogMoreTitle: "العديد من السيارات الأخرى متوفرة",
    catalogMoreText:
      "إلى جانب السيارات الفاخرة، لدينا العديد من المركبات الأخرى، بما في ذلك سيارات غير فاخرة، وسيارات للبيع. تعال لزيارتنا في المستودع لمشاهدة مجموعتنا كاملة على الطبيعة.",
    socialTitle: "تابعنا على وسائل التواصل",
    socialIntro:
      "ابقَ على اطلاع بسياراتنا وآخر أخبارنا: تابعنا على قنواتنا الاجتماعية.",
    socialInstagramLabel: "إنستغرام",
    socialTiktokLabel: "تيك توك",
    siteName: "vsnoleggioauto.it",
  },
};

export interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: Translation;
  dir: "ltr" | "rtl";
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
