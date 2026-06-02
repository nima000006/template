export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeConfig = {
  fa: {
    label: "فارسی",
    dir: "rtl" as const,
    flag: "🇮🇷",
    font: "Vazirmatn",
  },
  en: {
    label: "English",
    dir: "ltr" as const,
    flag: "🇺🇸",
    font: "Inter",
  },
};
