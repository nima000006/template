"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart3,
  Sparkles,
  Users,
  FolderKanban,
  CreditCard,
  Bell,
  Headphones,
  Settings,
  UserCircle,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";

const ICON_MAP = {
  LayoutDashboard,
  BarChart3,
  Sparkles,
  Users,
  FolderKanban,
  CreditCard,
  Bell,
  Headphones,
  Settings,
  UserCircle,
  ShieldCheck,
} as const;

type IconName = keyof typeof ICON_MAP;

interface NavItem {
  href: string;
  icon: string;
  label: string;
}

interface NavGroup {
  group: string;
  label?: string;
  items: NavItem[];
}

interface SidebarProps {
  nav: NavGroup[];
  locale: "fa" | "en";
  dir: "rtl" | "ltr";
}

export function Sidebar({ nav, locale, dir }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const CollapseIcon = dir === "rtl"
    ? collapsed ? ChevronLeft : ChevronRight
    : collapsed ? ChevronRight : ChevronLeft;

  return (
    <aside
      className={cn(
        "relative flex flex-col bg-card border-e border-border h-screen sidebar-transition shrink-0",
        collapsed ? "w-16" : "w-[260px]"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-16 border-b border-border shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shrink-0">
          <Zap className="size-4" />
        </div>
        {!collapsed && (
          <span className="font-bold text-base tracking-tight truncate">
            {locale === "fa" ? SITE_CONFIG.nameFa : SITE_CONFIG.name}
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 scrollbar-thin">
        {nav.map((group) => (
          <div key={group.group} className="mb-2">
            {!collapsed && group.label && (
              <p className="px-4 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                {group.label}
              </p>
            )}
            {group.items.map((item) => {
              const Icon = ICON_MAP[item.icon as IconName] ?? LayoutDashboard;
              const isActive =
                item.href === `/${locale}/dashboard`
                  ? pathname === `/${locale}/dashboard`
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 mx-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                    collapsed && "justify-center"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="size-4 shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={cn(
          "absolute -end-3 top-20 flex items-center justify-center w-6 h-6 rounded-full border border-border bg-card shadow-sm hover:bg-accent transition-colors z-10",
        )}
        aria-label="Toggle sidebar"
      >
        <CollapseIcon className="size-3 text-muted-foreground" />
      </button>

      {/* Bottom user area */}
      <div className="shrink-0 border-t border-border p-3">
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-xs font-bold shrink-0">
            ن
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <p className="text-sm font-medium truncate">نیما چهره</p>
              <p className="text-xs text-muted-foreground truncate">nima@example.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
