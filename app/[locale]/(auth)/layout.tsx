import Link from "next/link";
import { Zap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { type Locale } from "@/lib/i18n/config";

export default async function AuthLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-8 py-12 lg:px-16">
        <div className="mx-auto w-full max-w-sm">
          <Link href={`/${l}`} className="flex items-center gap-2.5 mb-10">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground"><Zap className="size-4" /></div>
            <span className="font-bold">{l === "fa" ? SITE_CONFIG.nameFa : SITE_CONFIG.name}</span>
          </Link>
          {children}
        </div>
      </div>
      <div className="hidden lg:flex flex-col items-center justify-center gradient-primary text-primary-foreground p-12">
        <div className="max-w-md text-center space-y-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 mx-auto"><Zap className="size-8" /></div>
          <h2 className="text-3xl font-bold">{l === "fa" ? "داشبورد SaaS حرفه‌ای" : "Professional SaaS Dashboard"}</h2>
          <p className="text-lg opacity-90">{l === "fa" ? "اولین قالب داشبورد با RTL و Shadcn/UI" : "The first dashboard with full RTL support and Shadcn/UI"}</p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            {[{value:"30+",label:l==="fa"?"صفحه":"Pages"},{value:"5",label:l==="fa"?"تم":"Themes"},{value:"100+",label:l==="fa"?"کامپوننت":"Components"}].map(s=>(<div key={s.label} className="text-center"><div className="text-2xl font-bold">{s.value}</div><div className="text-sm opacity-80">{s.label}</div></div>))}
          </div>
        </div>
      </div>
    </div>
  );
}
