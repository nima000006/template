"use client";

import { use, useState } from "react";
import { Moon, Sun, Palette, Bell, Key, User, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/lib/themes/provider";
import { THEMES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const tabs = (l: "fa"|"en") => [
  { id: "profile", label: l==="fa"?"پروفیل":"Profile", icon: User },
  { id: "appearance", label: l==="fa"?"ظاهر":"Appearance", icon: Palette },
  { id: "notifications", label: l==="fa"?"اعلان‌ها":"Notifications", icon: Bell },
  { id: "security", label: l==="fa"?"امنیت":"Security", icon: Shield },
  { id: "api", label: l==="fa"?"کلیدهای API":"API Keys", icon: Key },
];

export default function SettingsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  const [activeTab, setActiveTab] = useState("appearance");
  const { mode, setMode, color, setColor } = useTheme();
  return (
    <div className="space-y-6 max-w-4xl">
      <div><h1 className="text-2xl font-bold">{l==="fa"?"تنظیمات":"Settings"}</h1></div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-48 shrink-0">
          <nav className="space-y-1">{tabs(l).map(tab=>(<button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-start ${activeTab===tab.id?"bg-primary text-primary-foreground":"text-muted-foreground hover:bg-accent"}`}><tab.icon className="size-4" />{tab.label}</button>))}</nav>
        </div>
        <div className="flex-1">
          {activeTab==="appearance"&&(
            <div className="space-y-6">
              <Card><CardHeader><CardTitle>{l==="fa"?"حالت نمایش":"Display Mode"}</CardTitle></CardHeader><CardContent>
                <div className="grid grid-cols-2 gap-4">{[{id:"light",icon:Sun,label:l==="fa"?"روز":"Light"},{id:"dark",icon:Moon,label:l==="fa"?"شب":"Dark"}].map(m=>(<button key={m.id} onClick={()=>setMode(m.id as "light"|"dark")} className={cn("p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-all",mode===m.id?"border-primary bg-primary/5":"border-border hover:border-primary/40")}><m.icon className="size-6" /><span className="text-sm font-medium">{m.label}</span>{mode===m.id&&<Badge variant="default" className="text-xs">{l==="fa"?"فعال":"Active"}</Badge>}</button>))}
                </div>
              </CardContent></Card>
              <Card><CardHeader><CardTitle>{l==="fa"?"تم رنگی":"Color Theme"}</CardTitle></CardHeader><CardContent>
                <div className="grid grid-cols-2 gap-3">{THEMES.map(t=>(<button key={t.id} onClick={()=>setColor(t.id as "default"|"violet"|"ai"|"warm")} className={cn("p-3 rounded-xl border-2 flex items-center gap-3 transition-all",color===t.id?"border-primary bg-primary/5":"border-border hover:border-primary/40")}><div className="w-6 h-6 rounded-full shrink-0" style={{background:t.color}} /><div className="text-start"><p className="text-sm font-medium">{l==="fa"?t.labelFa:t.label}</p></div>{color===t.id&&<Badge className="ms-auto text-xs">{l==="fa"?"فعال":"Active"}</Badge>}</button>))}
                </div>
              </CardContent></Card>
              <Card><CardHeader><CardTitle>{l==="fa"?"زبان":"Language"}</CardTitle></CardHeader><CardContent>
                <div className="grid grid-cols-2 gap-3">{[{code:"fa",label:"فارسی",flag:"🇮🇷"},{code:"en",label:"English",flag:"🇺🇸"}].map(lang=>(<a key={lang.code} href={`/${lang.code}/dashboard/settings`} className={cn("p-3 rounded-xl border-2 flex items-center gap-3 transition-all",l===lang.code?"border-primary bg-primary/5":"border-border hover:border-primary/40")}><span className="text-xl">{lang.flag}</span><span className="text-sm font-medium">{lang.label}</span>{l===lang.code&&<Badge className="ms-auto text-xs">{l==="fa"?"فعال":"Active"}</Badge>}</a>))}
                </div>
              </CardContent></Card>
            </div>
          )}
          {activeTab==="profile"&&(<Card><CardHeader><CardTitle>{l==="fa"?"اطلاعات پروفیل":"Profile Information"}</CardTitle></CardHeader><CardContent className="space-y-6"><div className="flex items-center gap-4"><div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">ن</div><Button variant="outline" size="sm">{l==="fa"?"تغییر تصویر":"Change Photo"}</Button></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div className="space-y-2"><label className="text-sm font-medium">{l==="fa"?"نام":"First Name"}</label><Input defaultValue={l==="fa"?"نیما":"Nima"} /></div><div className="space-y-2"><label className="text-sm font-medium">{l==="fa"?"نام خانوادگی":"Last Name"}</label><Input defaultValue={l==="fa"?"چهره":"Chehre"} /></div><div className="space-y-2"><label className="text-sm font-medium">{l==="fa"?"ایمیل":"Email"}</label><Input type="email" defaultValue="nima@example.com" /></div></div><Button>{l==="fa"?"ذخیره تغییرات":"Save Changes"}</Button></CardContent></Card>)}
          {activeTab==="security"&&(<Card><CardHeader><CardTitle>{l==="fa"?"تغییر رمز عبور":"Change Password"}</CardTitle></CardHeader><CardContent className="space-y-4"><div className="space-y-2"><label className="text-sm font-medium">{l==="fa"?"رمز فعلی":"Current Password"}</label><Input type="password" /></div><div className="space-y-2"><label className="text-sm font-medium">{l==="fa"?"رمز جدید":"New Password"}</label><Input type="password" /></div><Button>{l==="fa"?"بروزرسانی رمز":"Update Password"}</Button></CardContent></Card>)}
        </div>
      </div>
    </div>
  );
}
