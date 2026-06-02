import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Nexus Pro — نکسوس پرو", template: "%s | Nexus Pro" },
  description: "Premium AI SaaS Dashboard Template with full RTL + LTR bilingual support.",
  keywords: ["RTL dashboard template", "Persian Next.js template", "قالب داشبورد فارسی", "قالب ادمین RTL", "Shadcn UI dashboard"],
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    title: "Nexus Pro — Premium RTL SaaS Dashboard",
    siteName: "Nexus Pro",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
