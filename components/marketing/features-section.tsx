import {
  Globe,
  Moon,
  Palette,
  Sparkles,
  Code2,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
  locale: "fa" | "en";
}

const features = (locale: "fa" | "en") => [
  {
    icon: Globe,
    title: locale === "fa" ? "RTL + LTR واقعی" : "True RTL + LTR",
    desc:
      locale === "fa"
        ? "تغییر لحظه‌ای بین فارسی و انگلیسی بدون ریست. Tailwind logical properties + next-intl"
        : "Instant switch between Persian/English without reload. Tailwind logical properties + next-intl",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Moon,
    title: locale === "fa" ? "Dark Mode هوشمند" : "Smart Dark Mode",
    desc:
      locale === "fa"
        ? "تشخیص خودکار تنظیمات سیستم. حالت شب و روز بدون flash"
        : "Auto-detects system preference. No flash of wrong theme on load",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: Palette,
    title: locale === "fa" ? "۵ تم رنگی" : "5 Color Themes",
    desc:
      locale === "fa"
        ? "Corporate Blue، Modern Violet، AI Cyan، Warm Orange — قابل تغییر در زمان واقعی"
        : "Corporate Blue, Modern Violet, AI Cyan, Warm Orange — switch in real-time",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
  },
  {
    icon: Sparkles,
    title: locale === "fa" ? "کامپوننت‌های AI" : "AI Components",
    desc:
      locale === "fa"
        ? "رابط چت streaming، متر توکن، انتخاب مدل، تاریخچه پرامپت — آماده استفاده"
        : "Streaming chat UI, token meter, model selector, prompt history — ready to use",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Code2,
    title: locale === "fa" ? "TypeScript Strict" : "TypeScript Strict",
    desc:
      locale === "fa"
        ? "کد ۱۰۰٪ TypeScript با strict mode. بهترین DX و خطاهای compile-time"
        : "100% TypeScript with strict mode. Best DX and compile-time safety",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Smartphone,
    title: locale === "fa" ? "ریسپانسیو کامل" : "Fully Responsive",
    desc:
      locale === "fa"
        ? "از موبایل ۳۲۰px تا مانیتور 4K. Sidebar drawer در موبایل"
        : "From 320px mobile to 4K monitors. Mobile drawer sidebar included",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
  {
    icon: BarChart3,
    title: locale === "fa" ? "چارت‌های تعاملی" : "Interactive Charts",
    desc:
      locale === "fa"
        ? "Recharts با RTL support. Area، Bar، Donut، Line — همه با انیمیشن"
        : "Recharts with RTL support. Area, Bar, Donut, Line — all animated",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    icon: ShieldCheck,
    title: locale === "fa" ? "Auth کامل" : "Full Auth System",
    desc:
      locale === "fa"
        ? "Login، Register، OTP، Reset Password با React Hook Form + Zod validation"
        : "Login, Register, OTP, Reset Password with React Hook Form + Zod validation",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Zap,
    title: locale === "fa" ? "Next.js 15 App Router" : "Next.js 15 App Router",
    desc:
      locale === "fa"
        ? "آخرین نسخه Next.js با App Router، Server Components و Streaming"
        : "Latest Next.js with App Router, Server Components, and Streaming",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
];

export function FeaturesSection({ locale }: FeaturesSectionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "fa" ? "همه چیزی که نیاز دارید" : "Everything You Need"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {locale === "fa"
              ? "یک قالب، صدها صفحه، بی‌نهایت امکان — برای توسعه‌دهندگان ایرانی و بین‌المللی"
              : "One template, hundreds of pages, unlimited possibilities — for developers worldwide"}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features(locale).map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-md hover:border-primary/30 transition-all duration-200"
              >
                <CardContent className="p-6">
                  <div className={cn("inline-flex p-3 rounded-xl mb-4", feature.bg)}>
                    <Icon className={cn("size-5", feature.color)} />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
