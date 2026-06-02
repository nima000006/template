import { Hero } from "@/components/marketing/hero";
import { FeaturesSection } from "@/components/marketing/features-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { localeConfig, type Locale } from "@/lib/i18n/config";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const config = localeConfig[l];
  return (
    <>
      <Hero locale={l} dir={config.dir} />
      <FeaturesSection locale={l} />
      <PricingSection locale={l} />
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === "fa" ? "همین امروز شروع کنید" : "Start Building Today"}</h2>
              <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">{locale === "fa" ? "به هزاران توسعه‌دهنده که با نکسوس پرو کسب‌وکارشان را ساختند بپیوندید" : "Join thousands of developers who built their business with Nexus Pro"}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`/${locale}/dashboard`} className="inline-flex items-center justify-center h-11 px-8 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors">{locale === "fa" ? "مشاهده دمو" : "View Demo"}</a>
                <a href={`/${locale}/pricing`} className="inline-flex items-center justify-center h-11 px-8 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors">{locale === "fa" ? "خرید قالب" : "Buy Template"}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
