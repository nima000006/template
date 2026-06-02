"use client";

import { use } from "react";
import { DollarSign, Users, ShoppingCart, TrendingUp, Plus, FileText, HeadphonesIcon, UserPlus } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CHART_COLORS } from "@/lib/constants";
import { formatRelativeTime } from "@/lib/utils";

const revenueData = [
  { month: "فروردین", en: "Apr", value: 42000000 },
  { month: "اردیبهشت", en: "May", value: 58000000 },
  { month: "خرداد", en: "Jun", value: 53000000 },
  { month: "تیر", en: "Jul", value: 71000000 },
  { month: "مرداد", en: "Aug", value: 68000000 },
  { month: "شهریور", en: "Sep", value: 85000000 },
  { month: "مهر", en: "Oct", value: 92000000 },
];

const trafficData = [
  { name: "جستجوی مستقیم", nameEn: "Direct", value: 35, color: CHART_COLORS.primary },
  { name: "شبکه اجتماعی", nameEn: "Social", value: 28, color: CHART_COLORS.success },
  { name: "ایمیل", nameEn: "Email", value: 20, color: CHART_COLORS.warning },
  { name: "سایر", nameEn: "Other", value: 17, color: CHART_COLORS.muted },
];

const recentActivity = [
  { id: 1, user: "علی رضایی", userEn: "Ali Rezaei", action: "حساب جدید ایجاد کرد", actionEn: "Created new account", time: new Date(Date.now() - 5 * 60000), type: "success" },
  { id: 2, user: "سارا محمدی", userEn: "Sara Mohammadi", action: "پرداخت انجام داد", actionEn: "Made a payment", time: new Date(Date.now() - 23 * 60000), type: "info" },
  { id: 3, user: "رضا احمدی", userEn: "Reza Ahmadi", action: "تیکت ثبت کرد", actionEn: "Submitted a ticket", time: new Date(Date.now() - 65 * 60000), type: "warning" },
  { id: 4, user: "مریم کریمی", userEn: "Maryam Karimi", action: "پلن ارتقا داد", actionEn: "Upgraded plan", time: new Date(Date.now() - 3 * 3600000), type: "success" },
];

export default function DashboardPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{l === "fa" ? "خوش آمدید، نیما 👋" : "Welcome back, Nima 👋"}</h1>
          <p className="text-muted-foreground text-sm mt-1">{l === "fa" ? "خلاصه‌ای از عملکرد کسب‌وکار شما" : "Summary of your business performance"}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">{l === "fa" ? "دانلود گزارش" : "Download Report"}</Button>
          <Button size="sm"><Plus className="size-4" />{l === "fa" ? "پروژه جدید" : "New Project"}</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard title={l === "fa" ? "درآمد کل" : "Total Revenue"} value={1284500000} change={12.5} changeLabel={l === "fa" ? "vs ماه قبل" : "vs last month"} icon={DollarSign} locale={l} />
        <KpiCard title={l === "fa" ? "کاربران فعال" : "Active Users"} value={8420} change={8.2} changeLabel={l === "fa" ? "vs ماه قبل" : "vs last month"} icon={Users} locale={l} />
        <KpiCard title={l === "fa" ? "سفارشات کل" : "Total Orders"} value={3241} change={-2.4} changeLabel={l === "fa" ? "vs ماه قبل" : "vs last month"} icon={ShoppingCart} locale={l} />
        <KpiCard title={l === "fa" ? "نرخ رشد" : "Growth Rate"} value="۲۸.۵٪" change={3.1} icon={TrendingUp} locale={l} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2"><CardTitle className="text-base">{l === "fa" ? "نمودار درآمد" : "Revenue Chart"}</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={revenueData}>
                <defs><linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={CHART_COLORS.primary} stopOpacity={0.2} /><stop offset="95%" stopColor={CHART_COLORS.primary} stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey={l === "fa" ? "month" : "en"} tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px", fontSize: "12px" }} formatter={(v) => [l === "fa" ? `${(Number(v)/1000000).toFixed(0)} میلیون` : `$${(Number(v)/1000000).toFixed(1)}M`, l === "fa" ? "درآمد" : "Revenue"]} />
                <Area type="monotone" dataKey="value" stroke={CHART_COLORS.primary} strokeWidth={2} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2"><CardTitle className="text-base">{l === "fa" ? "منابع ترافیک" : "Traffic Sources"}</CardTitle></CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart><Pie data={trafficData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} paddingAngle={3} dataKey="value">{trafficData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie></PieChart>
            </ResponsiveContainer>
            <div className="mt-3 space-y-2">{trafficData.map(item => (<div key={item.name} className="flex items-center justify-between text-sm"><div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full" style={{background:item.color}} /><span className="text-muted-foreground">{l==="fa"?item.name:item.nameEn}</span></div><span className="font-medium">{item.value}%</span></div>))}</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader><CardTitle className="text-base">{l === "fa" ? "فعالیت‌های اخیر" : "Recent Activity"}</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">{recentActivity.map(item => (<div key={item.id} className="flex items-start gap-3"><div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">{l==="fa"?item.user[0]:item.userEn[0]}</div><div className="flex-1 min-w-0"><p className="text-sm"><span className="font-medium">{l==="fa"?item.user:item.userEn}</span>{" "}<span className="text-muted-foreground">{l==="fa"?item.action:item.actionEn}</span></p><p className="text-xs text-muted-foreground mt-0.5">{formatRelativeTime(item.time,l)}</p></div><Badge variant={item.type==="success"?"success":item.type==="warning"?"warning":item.type==="info"?"info":"muted"} className="shrink-0">{item.type==="success"?(l==="fa"?"موفق":"Success"):item.type==="info"?(l==="fa"?"اطلاع":"Info"):(l==="fa"?"هشدار":"Warning")}</Badge></div>))}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">{l === "fa" ? "دسترسی سریع" : "Quick Actions"}</CardTitle></CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {[{icon:Plus,label:l==="fa"?"پروژه جدید":"New Project",color:"bg-primary/10 text-primary"},{icon:FileText,label:l==="fa"?"گزارش":"Report",color:"bg-violet-500/10 text-violet-500"},{icon:HeadphonesIcon,label:l==="fa"?"تیکت جدید":"New Ticket",color:"bg-orange-500/10 text-orange-500"},{icon:UserPlus,label:l==="fa"?"دعوت کاربر":"Invite User",color:"bg-green-500/10 text-green-500"}].map(a=>(<button key={a.label} className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-accent transition-all text-center group"><div className={`p-2.5 rounded-lg ${a.color} group-hover:scale-110 transition-transform`}><a.icon className="size-4" /></div><span className="text-xs font-medium">{a.label}</span></button>))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
