import { PricingSection } from "@/components/marketing/pricing-section";
import { type Locale } from "@/lib/i18n/config";

export default async function PricingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const faqs = [
    { q: l === "fa" ? "آیا می‌توانم از قالب برای پروژه‌های مشتری استفاده کنم؟" : "Can I use the template for client projects?", a: l === "fa" ? "بله، با لایسنس Agency برای نامحدود پروژه مشتری." : "Yes, with the Agency license for unlimited client projects." },
    { q: l === "fa" ? "آیا بروزرسانی‌ها رایگان هستند؟" : "Are updates free?", a: l === "fa" ? "بله، تمام بروزرسانی‌های نسخه ۱.x رایگان است." : "Yes, all v1.x updates are free." },
    { q: l === "fa" ? "چه فناوری‌هایی استفاده شده؟" : "What technologies are used?", a: l === "fa" ? "Next.js App Router، TypeScript، Tailwind CSS، next-intl، Recharts، React Hook Form" : "Next.js App Router, TypeScript, Tailwind CSS, next-intl, Recharts, React Hook Form" },
  ];
  return (
    <div>
      <div className="pt-12"><div className="container text-center"><h1 className="text-4xl md:text-5xl font-bold mb-4">{l === "fa" ? "قیمت‌گذاری" : "Pricing"}</h1><p className="text-lg text-muted-foreground">{l === "fa" ? "یک‌بار بخرید، برای همیشه استفاده کنید" : "Buy once, use forever"}</p></div></div>
      <PricingSection locale={l} />
      <section className="py-16 container max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">{l === "fa" ? "سوالات متداول" : "FAQ"}</h2>
        <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="border border-border rounded-xl p-6"><h3 className="font-semibold mb-2">{faq.q}</h3><p className="text-muted-foreground text-sm">{faq.a}</p></div>))}</div>
      </section>
    </div>
  );
}
