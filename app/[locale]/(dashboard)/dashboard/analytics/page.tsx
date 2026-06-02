"use client";

import { use } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CHART_COLORS } from "@/lib/constants";

const weeklyData = [
  { day: "شنبه", dayEn: "Sat", users: 420, sessions: 840 },
  { day: "یک‌شنبه", dayEn: "Sun", users: 380, sessions: 720 },
  { day: "دوشنبه", dayEn: "Mon", users: 560, sessions: 1120 },
  { day: "سه‌شنبه", dayEn: "Tue", users: 620, sessions: 1300 },
  { day: "چهارشنبه", dayEn: "Wed", users: 710, sessions: 1420 },
  { day: "پنج‌شنبه", dayEn: "Thu", users: 680, sessions: 1360 },
  { day: "جمعه", dayEn: "Fri", users: 490, sessions: 980 },
];

const deviceData = [
  { deviceFa: "موبایل", deviceEn: "Mobile", pct: 62, color: CHART_COLORS.primary },
  { deviceFa: "دسکتاپ", deviceEn: "Desktop", pct: 31, color: CHART_COLORS.success },
  { deviceFa: "تبلت", deviceEn: "Tablet", pct: 7, color: CHART_COLORS.warning },
];

const topPages = [
  { path: "/dashboard", views: 4821, bounce: 22 },
  { path: "/pricing", views: 2341, bounce: 45 },
  { path: "/features", views: 1872, bounce: 38 },
  { path: "/blog/rtl-guide", views: 1234, bounce: 28 },
  { path: "/contact", views: 891, bounce: 52 },
];

export default function AnalyticsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="text-2xl font-bold">{l === "fa" ? "آنالیتیکس" : "Analytics"}</h1><p className="text-muted-foreground text-sm mt-1">{l === "fa" ? "تحلیل عملکرد سایت" : "Website performance analysis"}</p></div>
        <div className="flex gap-2">{[["۷ روز","7D"],["۳۰ روز","30D"],["۹۰ روز","90D"]].map(([fa,en],i)=>(<Button key={fa} variant={i===1?"default":"outline"} size="sm">{l==="fa"?fa:en}</Button>))}</div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{label:l==="fa"?"بازدید کل":"Total Views",value:"48.2K",change:"+12.5%"},{label:l==="fa"?"کاربران منحصر":"Unique Users",value:"12.8K",change:"+8.2%"},{label:l==="fa"?"نرخ پرش":"Bounce Rate",value:"34.5%",change:"-4.1%"},{label:l==="fa"?"مدت بازدید":"Avg. Duration",value:"3m 42s",change:"+0.8%"}].map(item=>(<Card key={item.label}><CardContent className="p-4"><p className="text-xs text-muted-foreground">{item.label}</p><p className="text-2xl font-bold mt-1">{item.value}</p><Badge variant={item.change.startsWith("+")?"success":"destructive"} className="mt-2 text-[10px]">{item.change}</Badge></CardContent></Card>))}
      </div>
      <Card>
        <CardHeader><CardTitle className="text-base">{l === "fa" ? "ترافیک هفتگی" : "Weekly Traffic"}</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey={l==="fa"?"day":"dayEn"} tick={{fontSize:12,fill:"hsl(var(--muted-foreground))"}} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{background:"hsl(var(--card))",border:"1px solid hsl(var(--border))",borderRadius:"8px",fontSize:"12px"}} />
              <Bar dataKey="users" fill={CHART_COLORS.primary} radius={[4,4,0,0]} name={l==="fa"?"کاربران":"Users"} />
              <Bar dataKey="sessions" fill={CHART_COLORS.success} radius={[4,4,0,0]} opacity={0.6} name={l==="fa"?"نشست‌ها":"Sessions"} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader><CardTitle className="text-base">{l==="fa"?"دستگاه‌ها":"Devices"}</CardTitle></CardHeader>
          <CardContent><div className="space-y-4">{deviceData.map(d=>(<div key={d.deviceEn}><div className="flex justify-between text-sm mb-1.5"><span>{l==="fa"?d.deviceFa:d.deviceEn}</span><span className="font-medium">{d.pct}%</span></div><div className="w-full bg-muted rounded-full h-2"><div className="h-2 rounded-full" style={{width:`${d.pct}%`,background:d.color}} /></div></div>))}</div></CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">{l==="fa"?"صفحات برتر":"Top Pages"}</CardTitle></CardHeader>
          <CardContent><div className="space-y-3">{topPages.map(page=>(<div key={page.path} className="flex items-center justify-between text-sm"><p className="font-mono text-xs truncate text-muted-foreground flex-1">{page.path}</p><div className="flex items-center gap-4 shrink-0 ms-4"><span className="font-medium">{page.views.toLocaleString()}</span><Badge variant={page.bounce<35?"success":page.bounce<50?"warning":"destructive"} className="text-[10px]">{page.bounce}%</Badge></div></div>))}</div></CardContent>
        </Card>
      </div>
    </div>
  );
}
