"use client";

import { use, useState } from "react";
import { Plus, Search, Clock, CheckCircle, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatRelativeTime } from "@/lib/utils";

const tickets = [
  { id: "TK-1042", fa: "مشکل در اتصال به API", en: "API connection issue", descFa: "خطای ۵۰۳ دریافت می‌کنم", descEn: "Getting 503 error on /api/users", status: "open", priority: "high", time: new Date(Date.now()-30*60000) },
  { id: "TK-1041", fa: "سوال درباره RTL در چارت‌ها", en: "RTL in charts question", descFa: "چطور محور X را برای فارسی تنظیم کنم؟", descEn: "How to set RTL for Recharts X-axis?", status: "in-progress", priority: "medium", time: new Date(Date.now()-3*3600000) },
  { id: "TK-1040", fa: "درخواست تم سفارشی", en: "Custom theme request", descFa: "آیا امکان تم سفارشی وجود دارد؟", descEn: "Is it possible to add custom themes?", status: "resolved", priority: "low", time: new Date(Date.now()-2*24*3600000) },
];

const statusConfig = { open: { fa: "باز", en: "Open", variant: "warning" as const, icon: Clock }, "in-progress": { fa: "در حال بررسی", en: "In Progress", variant: "info" as const, icon: MessageSquare }, resolved: { fa: "حل شده", en: "Resolved", variant: "success" as const, icon: CheckCircle } };
const priorityConfig = { high: { fa: "بالا", en: "High", variant: "destructive" as const }, medium: { fa: "متوسط", en: "Medium", variant: "warning" as const }, low: { fa: "پایین", en: "Low", variant: "secondary" as const } };

export default function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  const [selected, setSelected] = useState<string|null>(null);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold">{l==="fa"?"مرکز پشتیبانی":"Support Center"}</h1></div><Button><Plus className="size-4" />{l==="fa"?"تیکت جدید":"New Ticket"}</Button></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-3">
          <Input placeholder={l==="fa"?"جستجوی تیکت...":"Search tickets..."} startIcon={<Search className="size-4" />} />
          {tickets.map(ticket=>{
            const sc=statusConfig[ticket.status as keyof typeof statusConfig];
            const pc=priorityConfig[ticket.priority as keyof typeof priorityConfig];
            const StatusIcon=sc.icon;
            return (<Card key={ticket.id} className={`cursor-pointer transition-all hover:shadow-sm ${selected===ticket.id?"border-primary":""}`} onClick={()=>setSelected(ticket.id)}><CardContent className="p-4"><div className="flex items-start justify-between gap-2 mb-2"><p className="text-xs text-muted-foreground font-mono">{ticket.id}</p><Badge variant={pc.variant} className="text-[10px]">{l==="fa"?pc.fa:pc.en}</Badge></div><p className="text-sm font-medium line-clamp-1">{l==="fa"?ticket.fa:ticket.en}</p><p className="text-xs text-muted-foreground mt-1 line-clamp-2">{l==="fa"?ticket.descFa:ticket.descEn}</p><div className="flex items-center justify-between mt-3"><Badge variant={sc.variant} className="gap-1 text-[10px]"><StatusIcon className="size-2.5" />{l==="fa"?sc.fa:sc.en}</Badge><span className="text-[10px] text-muted-foreground">{formatRelativeTime(ticket.time,l)}</span></div></CardContent></Card>);
          })}
        </div>
        <Card className="lg:col-span-2">
          {selected ? (() => {
            const ticket = tickets.find(t=>t.id===selected)!;
            const sc = statusConfig[ticket.status as keyof typeof statusConfig];
            return (
              <div className="flex flex-col h-full">
                <CardHeader className="border-b border-border"><div className="flex items-start justify-between"><div><p className="text-xs text-muted-foreground font-mono">{ticket.id}</p><CardTitle className="text-base mt-1">{l==="fa"?ticket.fa:ticket.en}</CardTitle></div><Badge variant={sc.variant}>{l==="fa"?sc.fa:sc.en}</Badge></div></CardHeader>
                <CardContent className="flex-1 p-6"><div className="flex gap-3"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">ن</div><div className="bg-muted rounded-xl rounded-tl-sm p-4 flex-1"><p className="text-sm">{l==="fa"?ticket.descFa:ticket.descEn}</p></div></div></CardContent>
                <div className="border-t border-border p-4"><div className="flex gap-3"><textarea className="flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" rows={2} placeholder={l==="fa"?"پاسخ خود...":"Write your reply..."} /><Button className="self-end">{l==="fa"?"ارسال":"Send"}</Button></div></div>
              </div>
            );
          })() : (<CardContent className="h-full flex items-center justify-center"><div className="text-center text-muted-foreground"><MessageSquare className="size-12 mx-auto mb-4 opacity-30" /><p className="text-sm">{l==="fa"?"یک تیکت را انتخاب کنید":"Select a ticket"}</p></div></CardContent>)}
        </Card>
      </div>
    </div>
  );
}
