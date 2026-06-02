"use client";

import { use } from "react";
import { CheckCheck, Trash2, CreditCard, ShieldAlert, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatRelativeTime } from "@/lib/utils";

const notifications = [
  { id: 1, icon: CreditCard, fa: "صورت‌حساب ماهانه آماده است", en: "Monthly invoice ready", descFa: "صورت‌حساب آذر ماه برای دانلود آماده است", descEn: "Your November invoice is ready", time: new Date(Date.now()-10*60000), read: false, iconColor: "text-blue-500", iconBg: "bg-blue-500/10" },
  { id: 2, icon: ShieldAlert, fa: "ورود از دستگاه جدید", en: "Login from new device", descFa: "ورود جدید از تهران، ایران", descEn: "New sign-in from Tehran, Iran", time: new Date(Date.now()-2*3600000), read: false, iconColor: "text-yellow-500", iconBg: "bg-yellow-500/10" },
  { id: 3, icon: Users, fa: "کاربر جدید اضافه شد", en: "New team member added", descFa: "علی رضایی به تیم پیوست", descEn: "Ali Rezaei joined your team", time: new Date(Date.now()-5*3600000), read: true, iconColor: "text-green-500", iconBg: "bg-green-500/10" },
  { id: 4, icon: Sparkles, fa: "سقف توکن نزدیک است", en: "Token limit approaching", descFa: "شما ۸۴٪ از توکن‌ها را مصرف کردید", descEn: "You've used 84% of your monthly tokens", time: new Date(Date.now()-24*3600000), read: true, iconColor: "text-purple-500", iconBg: "bg-purple-500/10" },
];

export default function NotificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  const unread = notifications.filter(n=>!n.read).length;
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold flex items-center gap-2">{l==="fa"?"اعلان‌ها":"Notifications"}{unread>0&&<Badge variant="destructive">{unread}</Badge>}</h1><p className="text-muted-foreground text-sm mt-1">{l==="fa"?`${unread} اعلان خوانده نشده`:`${unread} unread`}</p></div>
        <div className="flex gap-2"><Button variant="outline" size="sm"><CheckCheck className="size-4" />{l==="fa"?"همه خوانده شد":"Mark all read"}</Button><Button variant="ghost" size="sm"><Trash2 className="size-4" />{l==="fa"?"پاک کردن همه":"Clear all"}</Button></div>
      </div>
      <div className="space-y-3">
        {notifications.map(n=>{
          const Icon=n.icon;
          return (<Card key={n.id} className={`transition-all hover:shadow-sm ${!n.read?"border-primary/30 bg-primary/5":""}`}><CardContent className="p-4"><div className="flex items-start gap-4"><div className={`p-2.5 rounded-xl shrink-0 ${n.iconBg}`}><Icon className={`size-4 ${n.iconColor}`} /></div><div className="flex-1 min-w-0"><div className="flex items-start justify-between gap-2"><p className="font-medium text-sm">{l==="fa"?n.fa:n.en}</p>{!n.read&&<div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1.5" />}</div><p className="text-sm text-muted-foreground mt-0.5">{l==="fa"?n.descFa:n.descEn}</p><p className="text-xs text-muted-foreground mt-2">{formatRelativeTime(n.time,l)}</p></div></div></CardContent></Card>);
        })}
      </div>
    </div>
  );
}
