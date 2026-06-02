import { FeaturesSection } from "@/components/marketing/features-section";
import { type Locale } from "@/lib/i18n/config";

export default async function FeaturesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  return (
    <div>
      <div className="pt-16 pb-4 container text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{l === "fa" ? "ویژگی‌های نکسوس پرو" : "Nexus Pro Features"}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{l === "fa" ? "هر چیزی که برای ساخت یک محصول SaaS حرفه‌ای نیاز دارید" : "Everything you need to build a professional SaaS product"}</p>
      </div>
      <FeaturesSection locale={l} />
    </div>
  );
}
