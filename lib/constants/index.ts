export const SITE_CONFIG = {
  name: "Nexus Pro",
  nameFa: "نکسوس پرو",
  description: "Premium AI SaaS Dashboard Template with RTL + LTR Support",
  descriptionFa: "قالب داشبورد SaaS حرفه‌ای با پشتیبانی کامل RTL و LTR",
  url: "https://nexuspro.ir",
  author: "Nexus Team",
  version: "1.0.0",
};

export const THEMES = [
  { id: "default", label: "Corporate Blue", labelFa: "آبی سازمانی", color: "#3B82F6" },
  { id: "violet", label: "Modern Violet", labelFa: "بنفش مدرن", color: "#7C3AED" },
  { id: "ai", label: "AI Cyan", labelFa: "فیروزه‌ای AI", color: "#06B6D4" },
  { id: "warm", label: "Warm Sunrise", labelFa: "نارنجی گرم", color: "#F97316" },
] as const;

export const NAV_ITEMS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/features", labelKey: "nav.features" },
  { href: "/pricing", labelKey: "nav.pricing" },
  { href: "/blog", labelKey: "nav.blog" },
  { href: "/docs", labelKey: "nav.docs" },
  { href: "/contact", labelKey: "nav.contact" },
] as const;

export const DASHBOARD_NAV = [
  {
    group: "main",
    items: [
      { href: "/dashboard", icon: "LayoutDashboard", labelKey: "dashboard.overview" },
      { href: "/dashboard/analytics", icon: "BarChart3", labelKey: "dashboard.analytics" },
      { href: "/dashboard/ai", icon: "Sparkles", labelKey: "dashboard.ai" },
    ],
  },
  {
    group: "business",
    items: [
      { href: "/dashboard/crm", icon: "Users", labelKey: "dashboard.crm" },
      { href: "/dashboard/projects", icon: "FolderKanban", labelKey: "dashboard.projects" },
      { href: "/dashboard/billing", icon: "CreditCard", labelKey: "dashboard.billing" },
    ],
  },
  {
    group: "system",
    items: [
      { href: "/dashboard/notifications", icon: "Bell", labelKey: "common.notifications" },
      { href: "/dashboard/support", icon: "HeadphonesIcon", labelKey: "dashboard.support" },
      { href: "/dashboard/settings", icon: "Settings", labelKey: "common.settings" },
      { href: "/dashboard/profile", icon: "UserCircle", labelKey: "common.profile" },
      { href: "/dashboard/admin", icon: "ShieldCheck", labelKey: "dashboard.admin" },
    ],
  },
] as const;

export const PRICING_PLANS = [
  {
    id: "free",
    labelKey: "pricing.free",
    price: { monthly: 0, annual: 0 },
    descKey: "pricing.freeDesc",
    features: [
      "۵ صفحه اصلی / 5 core pages",
      "Light + Dark mode",
      "RTL + LTR",
      "Community support",
    ],
    cta: "pricing.getStarted",
    highlighted: false,
  },
  {
    id: "pro",
    labelKey: "pricing.pro",
    price: { monthly: 29, annual: 23 },
    descKey: "pricing.proDesc",
    features: [
      "۳۰+ صفحه کامل / 30+ full pages",
      "5 color themes",
      "AI Workspace components",
      "CRM + Projects + Billing",
      "Persian + English content",
      "Email support",
    ],
    cta: "pricing.getStarted",
    highlighted: true,
  },
  {
    id: "agency",
    labelKey: "pricing.agency",
    price: { monthly: 79, annual: 63 },
    descKey: "pricing.agencyDesc",
    features: [
      "Everything in Pro",
      "Unlimited client usage",
      "White-label license",
      "Priority support",
      "Early access to updates",
      "Figma design system",
    ],
    cta: "pricing.contactSales",
    highlighted: false,
  },
] as const;

export const CHART_COLORS = {
  primary: "hsl(var(--primary))",
  secondary: "hsl(var(--secondary-foreground))",
  muted: "hsl(var(--muted-foreground))",
  success: "#10b981",
  warning: "#f59e0b",
  destructive: "hsl(var(--destructive))",
  info: "#06b6d4",
};
