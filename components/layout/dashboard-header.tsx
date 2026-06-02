"use client";

import { Bell, Search, Moon, Sun, Menu, Globe } from "lucide-react";
import { useTheme } from "@/lib/themes/provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { THEMES } from "@/lib/constants";

interface DashboardHeaderProps {
  title: string;
  breadcrumb?: string[];
  locale: "fa" | "en";
  onMenuToggle?: () => void;
}

export function DashboardHeader({
  title,
  breadcrumb,
  locale,
  onMenuToggle,
}: DashboardHeaderProps) {
  const { mode, toggleMode, color, setColor } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border bg-card/95 backdrop-blur px-4 md:px-6">
      {/* Mobile menu */}
      <Button
        variant="ghost"
        size="icon-sm"
        className="md:hidden"
        onClick={onMenuToggle}
      >
        <Menu className="size-4" />
      </Button>

      {/* Title / Breadcrumb */}
      <div className="flex-1 min-w-0">
        {breadcrumb && breadcrumb.length > 0 ? (
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground/40">/</span>}
                <span className={i === breadcrumb.length - 1 ? "text-foreground font-medium" : ""}>
                  {crumb}
                </span>
              </span>
            ))}
          </nav>
        ) : (
          <h1 className="text-base font-semibold truncate">{title}</h1>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <Button variant="ghost" size="icon-sm" className="hidden md:flex">
          <Search className="size-4" />
        </Button>

        {/* Theme Color Switcher */}
        <div className="hidden md:flex items-center gap-1 rounded-lg border border-border p-1">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => setColor(t.id as "default" | "violet" | "ai" | "warm")}
              className="w-4 h-4 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring"
              style={{
                backgroundColor: t.color,
                boxShadow: color === t.id ? `0 0 0 2px white, 0 0 0 3px ${t.color}` : "none",
              }}
              title={locale === "fa" ? t.labelFa : t.label}
            />
          ))}
        </div>

        {/* Language Switcher */}
        <Button variant="ghost" size="icon-sm" asChild>
          <a href={locale === "fa" ? "/en/dashboard" : "/fa/dashboard"}>
            <Globe className="size-4" />
          </a>
        </Button>

        {/* Dark Mode Toggle */}
        <Button variant="ghost" size="icon-sm" onClick={toggleMode}>
          {mode === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </Button>

        {/* Notifications */}
        <div className="relative">
          <Button variant="ghost" size="icon-sm">
            <Bell className="size-4" />
          </Button>
          <Badge
            variant="destructive"
            className="absolute -top-1 -end-1 h-4 min-w-4 px-1 text-[10px] flex items-center justify-center"
          >
            3
          </Badge>
        </div>

        {/* Avatar */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold cursor-pointer hover:opacity-90 transition-opacity">
          ن
        </div>
      </div>
    </header>
  );
}
