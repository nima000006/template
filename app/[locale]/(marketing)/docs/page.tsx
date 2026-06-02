import { type Locale } from "@/lib/i18n/config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Zap, Palette, Globe, Code2, BarChart3 } from "lucide-react";

const sections = [
  { icon: Zap, title: "شروع سریع", titleEn: "Quick Start", desc: "نصب و راه‌اندازی در کمتر از ۵ دقیقه", descEn: "Install and run in less than 5 minutes" },
  { icon: Globe, title: "بین‌المللی و RTL", titleEn: "i18n & RTL", desc: "راهنمای پیکربندی فارسی و RTL", descEn: "Persian language and RTL setup guide" },
  { icon: Palette, title: "تم‌های رنگی", titleEn: "Color Themes", desc: "سفارشی‌سازی و افزودن تم جدید", descEn: "Customize and add new color themes" },
  { icon: Code2, title: "کامپوننت‌ها", titleEn: "Components", desc: "مستندات کامل همه کامپوننت‌ها", descEn: "Full documentation of all components" },
  { icon: BarChart3, title: "چارت‌ها و دیتا", titleEn: "Charts & Data", desc: "یکپارچگی Recharts با RTL", descEn: "Recharts integration with RTL support" },
  { icon: Book, title: "دیپلوی", titleEn: "Deployment", desc: "انتشار روی Vercel و دیگر پلتفرم‌ها", descEn: "Deploy to Vercel and other platforms" },
];

export default async function DocsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">{l === "fa" ? "مستندات" : "Documentation"}</h1>
          <p className="text-lg text-muted-foreground">
            {l === "fa"
              ? "هر آنچه برای ساخت با Nexus Pro نیاز دارید"
              : "Everything you need to build with Nexus Pro"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <Card key={s.titleEn} className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="size-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm">{l === "fa" ? s.title : s.titleEn}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{l === "fa" ? s.desc : s.descEn}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
