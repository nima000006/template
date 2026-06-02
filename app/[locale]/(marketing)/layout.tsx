import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { type Locale } from "@/lib/i18n/config";

interface MarketingLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MarketingLayout({ children, params }: MarketingLayoutProps) {
  const { locale } = await params;
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        locale={locale as Locale}
        messages={{
          home: locale === "fa" ? "خانه" : "Home",
          features: locale === "fa" ? "ویژگی‌ها" : "Features",
          pricing: locale === "fa" ? "قیمت‌گذاری" : "Pricing",
          blog: locale === "fa" ? "وبلاگ" : "Blog",
          docs: locale === "fa" ? "مستندات" : "Docs",
          contact: locale === "fa" ? "تماس" : "Contact",
          login: locale === "fa" ? "ورود" : "Login",
          getStarted: locale === "fa" ? "شروع کنید" : "Get Started",
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </div>
  );
}
