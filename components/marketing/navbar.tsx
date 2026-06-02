"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/themes/provider";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

interface NavbarProps {
  locale: "fa" | "en";
  messages: {
    home: string;
    features: string;
    pricing: string;
    blog: string;
    docs: string;
    contact: string;
    login: string;
    getStarted: string;
  };
}

const navLinks = (locale: "fa" | "en") => [
  { href: `/${locale}`, label: locale === "fa" ? "خانه" : "Home" },
  { href: `/${locale}/features`, label: locale === "fa" ? "ویژگی‌ها" : "Features" },
  { href: `/${locale}/pricing`, label: locale === "fa" ? "قیمت‌گذاری" : "Pricing" },
  { href: `/${locale}/blog`, label: locale === "fa" ? "وبلاگ" : "Blog" },
  { href: `/${locale}/docs`, label: locale === "fa" ? "مستندات" : "Docs" },
  { href: `/${locale}/contact`, label: locale === "fa" ? "تماس" : "Contact" },
];

export function Navbar({ locale, messages }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { mode, toggleMode } = useTheme();

  const otherLocale = locale === "fa" ? "en" : "fa";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
            <Zap className="size-4" />
          </div>
          <span className="font-bold text-base">
            {locale === "fa" ? SITE_CONFIG.nameFa : SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks(locale).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="icon-sm" onClick={toggleMode}>
            {mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button variant="ghost" size="icon-sm" asChild>
            <Link href={`/${otherLocale}`}>
              <Globe className="size-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/${locale}/auth/login`}>
              {locale === "fa" ? "ورود" : "Login"}
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={`/${locale}/auth/register`}>
              {locale === "fa" ? "شروع کنید" : "Get Started"}
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks(locale).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="outline" asChild>
                <Link href={`/${locale}/auth/login`}>
                  {locale === "fa" ? "ورود" : "Login"}
                </Link>
              </Button>
              <Button asChild>
                <Link href={`/${locale}/auth/register`}>
                  {locale === "fa" ? "شروع رایگان" : "Get Started Free"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
