import { Sidebar } from "@/components/layout/sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { localeConfig, type Locale } from "@/lib/i18n/config";

const getDashboardNav = (locale: Locale) => [
  {
    group: "main",
    label: locale === "fa" ? "اصلی" : "Main",
    items: [
      { href: `/${locale}/dashboard`, icon: "LayoutDashboard", label: locale === "fa" ? "داشبورد" : "Dashboard" },
      { href: `/${locale}/dashboard/analytics`, icon: "BarChart3", label: locale === "fa" ? "آنالیتیکس" : "Analytics" },
      { href: `/${locale}/dashboard/ai`, icon: "Sparkles", label: locale === "fa" ? "فضای AI" : "AI Workspace" },
    ],
  },
  {
    group: "business",
    label: locale === "fa" ? "کسب‌وکار" : "Business",
    items: [
      { href: `/${locale}/dashboard/crm`, icon: "Users", label: "CRM" },
      { href: `/${locale}/dashboard/projects`, icon: "FolderKanban", label: locale === "fa" ? "پروژه‌ها" : "Projects" },
      { href: `/${locale}/dashboard/billing`, icon: "CreditCard", label: locale === "fa" ? "صورت‌حساب" : "Billing" },
    ],
  },
  {
    group: "system",
    label: locale === "fa" ? "سیستم" : "System",
    items: [
      { href: `/${locale}/dashboard/notifications`, icon: "Bell", label: locale === "fa" ? "اعلان‌ها" : "Notifications" },
      { href: `/${locale}/dashboard/support`, icon: "Headphones", label: locale === "fa" ? "پشتیبانی" : "Support" },
      { href: `/${locale}/dashboard/settings`, icon: "Settings", label: locale === "fa" ? "تنظیمات" : "Settings" },
      { href: `/${locale}/dashboard/profile`, icon: "UserCircle", label: locale === "fa" ? "پروفیل" : "Profile" },
      { href: `/${locale}/dashboard/admin`, icon: "ShieldCheck", label: locale === "fa" ? "مدیریت" : "Admin" },
    ],
  },
];

export default async function DashboardLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  const config = localeConfig[l];
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar nav={getDashboardNav(l)} locale={l} dir={config.dir} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <DashboardHeader title={l === "fa" ? "داشبورد" : "Dashboard"} locale={l} />
        <main className="flex-1 overflow-y-auto p-6 scrollbar-thin">{children}</main>
      </div>
    </div>
  );
}
