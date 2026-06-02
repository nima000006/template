import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locales, localeConfig, type Locale } from "@/lib/i18n/config";
import { ThemeProvider } from "@/lib/themes/provider";
import { LocaleAttributes } from "@/components/locale-attributes";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const config = localeConfig[locale as Locale];
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider>
        <LocaleAttributes locale={locale} dir={config.dir} />
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
