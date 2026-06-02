import { type Locale } from "@/lib/i18n/config";

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const faqs = l === "fa"
    ? [
        { q: "نکسوس پرو چیست؟", a: "نکسوس پرو یک قالب داشبورد SaaS حرفه‌ای با Next.js، TypeScript، Tailwind CSS و RTL کامل است." },
        { q: "آیا RTL واقعی است؟", a: "بله، از Tailwind CSS logical properties استفاده شده. هیچ CSS آینه‌کاری نیاز نیست." },
        { q: "آیا TypeScript الزامی است؟", a: "بله، کل کد با TypeScript strict mode نوشته شده." },
        { q: "آیا می‌توانم تم رنگی را تغییر دهم؟", a: "بله، ۵ تم رنگی آماده وجود دارد. همه قابل تغییر بدون ریست صفحه هستند." },
      ]
    : [
        { q: "What is Nexus Pro?", a: "Nexus Pro is a professional SaaS dashboard template with Next.js, TypeScript, Tailwind CSS, and full RTL support." },
        { q: "Is the RTL real?", a: "Yes, it uses Tailwind CSS logical properties. No mirror CSS hacks." },
        { q: "Is TypeScript mandatory?", a: "Yes, strict mode throughout the entire codebase." },
        { q: "Can I change the color theme?", a: "Yes, 5 pre-built themes switchable in real-time without page refresh." },
      ];
  return (
    <div className="container py-16 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{l === "fa" ? "سوالات متداول" : "FAQ"}</h1>
      </div>
      <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="border border-border rounded-xl p-6 hover:border-primary/40 transition-colors"><h3 className="font-semibold mb-3">{faq.q}</h3><p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p></div>))}</div>
    </div>
  );
}
