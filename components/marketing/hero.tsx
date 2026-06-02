"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HeroProps {
  locale: "fa" | "en";
  dir: "rtl" | "ltr";
}

export function Hero({ locale, dir }: HeroProps) {
  const isRtl = dir === "rtl";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute top-0 start-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--primary)) 0%, transparent 70%)",
        }}
      />

      <div className="container relative pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        {/* Announcement badge */}
        <div className="inline-flex items-center justify-center mb-6 animate-fade-in">
          <Badge variant="outline" className="gap-2 px-4 py-1.5 text-sm rounded-full border-primary/30 bg-primary/5">
            <Sparkles className="size-3.5 text-primary" />
            <span className="text-primary font-medium">
              {locale === "fa"
                ? "اولین داشبورد RTL با Shadcn/UI"
                : "First RTL Dashboard with Shadcn/UI"}
            </span>
          </Badge>
        </div>

        {/* Main heading */}
        <h1
          className={cn(
            "text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in",
            "[animation-delay:100ms]"
          )}
        >
          {locale === "fa" ? (
            <>
              داشبورد SaaS{" "}
              <span className="text-primary">حرفه‌ای</span>
              <br />
              با پشتیبانی{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.6))",
                }}
              >
                RTL کامل
              </span>
            </>
          ) : (
            <>
              The{" "}
              <span className="text-primary">Professional</span>
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.6))",
                }}
              >
                AI SaaS Dashboard
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          className={cn(
            "text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in",
            "[animation-delay:200ms]"
          )}
        >
          {locale === "fa"
            ? "اولین قالب داشبورد هوش مصنوعی با پشتیبانی کامل فارسی. Next.js 15، Shadcn/UI، ۵ تم رنگی، ۳۰+ صفحه آماده و کد تمیز TypeScript."
            : "The first AI-native dashboard template with full Persian RTL support. Built on Next.js 15, Shadcn/UI, 5 color themes, 30+ ready pages, and clean TypeScript code."}
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in",
            "[animation-delay:300ms]"
          )}
        >
          <Button size="xl" asChild>
            <Link href={`/${locale}/dashboard`}>
              {locale === "fa" ? "مشاهده دمو" : "View Demo"}
              <ArrowIcon className="size-4" />
            </Link>
          </Button>
          <Button size="xl" variant="outline" asChild>
            <Link href={`/${locale}/docs`} className="gap-2">
              <Play className="size-4" />
              {locale === "fa" ? "مستندات" : "Documentation"}
            </Link>
          </Button>
        </div>

        {/* Stats row */}
        <div
          className={cn(
            "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in",
            "[animation-delay:400ms]"
          )}
        >
          {[
            { value: "30+", label: locale === "fa" ? "صفحه آماده" : "Ready Pages" },
            { value: "5", label: locale === "fa" ? "تم رنگی" : "Color Themes" },
            { value: "100+", label: locale === "fa" ? "کامپوننت" : "Components" },
            { value: "2", label: locale === "fa" ? "زبان کامل" : "Full Languages" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
