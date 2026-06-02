import Link from "next/link";
import { Zap, GitFork, ExternalLink, Link2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface FooterProps {
  locale: "fa" | "en";
}

export function Footer({ locale }: FooterProps) {
  const columns = [
    {
      title: locale === "fa" ? "محصول" : "Product",
      links: [
        { label: locale === "fa" ? "ویژگی‌ها" : "Features", href: `/${locale}/features` },
        { label: locale === "fa" ? "قیمت‌گذاری" : "Pricing", href: `/${locale}/pricing` },
        { label: locale === "fa" ? "تغییرات" : "Changelog", href: `/${locale}/changelog` },
        { label: locale === "fa" ? "نقشه راه" : "Roadmap", href: `/${locale}/roadmap` },
      ],
    },
    {
      title: locale === "fa" ? "منابع" : "Resources",
      links: [
        { label: locale === "fa" ? "مستندات" : "Documentation", href: `/${locale}/docs` },
        { label: locale === "fa" ? "وبلاگ" : "Blog", href: `/${locale}/blog` },
        { label: locale === "fa" ? "سوالات متداول" : "FAQ", href: `/${locale}/faq` },
        { label: locale === "fa" ? "پشتیبانی" : "Support", href: `/${locale}/contact` },
      ],
    },
    {
      title: locale === "fa" ? "شرکت" : "Company",
      links: [
        { label: locale === "fa" ? "درباره ما" : "About", href: `/${locale}/about` },
        { label: locale === "fa" ? "تماس" : "Contact", href: `/${locale}/contact` },
        { label: locale === "fa" ? "حریم خصوصی" : "Privacy", href: `/${locale}/privacy` },
        { label: locale === "fa" ? "شرایط استفاده" : "Terms", href: `/${locale}/terms` },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-4" />
              </div>
              <span className="font-bold">
                {locale === "fa" ? SITE_CONFIG.nameFa : SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {locale === "fa"
                ? "قالب داشبورد SaaS حرفه‌ای با پشتیبانی کامل RTL و هوش مصنوعی"
                : "Professional AI SaaS dashboard template with full RTL support"}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <GitFork className="size-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <ExternalLink className="size-4" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Link2 className="size-4" />
              </a>
            </div>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {locale === "fa"
              ? `© ${new Date().getFullYear()} نکسوس پرو. تمام حقوق محفوظ است.`
              : `© ${new Date().getFullYear()} Nexus Pro. All rights reserved.`}
          </p>
          <p className="text-xs text-muted-foreground">
            {locale === "fa"
              ? "ساخته شده با Next.js 15 + Shadcn/UI"
              : "Built with Next.js 15 + Shadcn/UI"}
          </p>
        </div>
      </div>
    </footer>
  );
}
