"use client";

import { use } from "react";
import { CreditCard, Download, Zap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const invoices = [
  { id: "INV-2024-012", date: "1403/09/01", dateEn: "Nov 22, 2024", status: "paid" },
  { id: "INV-2024-011", date: "1403/08/01", dateEn: "Oct 22, 2024", status: "paid" },
  { id: "INV-2024-010", date: "1403/07/01", dateEn: "Sep 22, 2024", status: "failed" },
];

export default function BillingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";
  return (
    <div className="space-y-6 max-w-4xl">
      <div><h1 className="text-2xl font-bold">{l==="fa"?"صورت‌حساب":"Billing"}</h1><p className="text-muted-foreground text-sm mt-1">{l==="fa"?"مدیریت اشتراک و صورت‌حساب‌ها":"Manage your subscription and billing"}</p></div>
      <Card className="border-primary/30 bg-primary/5"><CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary"><Zap className="size-6" /></div>
            <div>
              <div className="flex items-center gap-2"><h3 className="font-semibold text-lg">{l==="fa"?"پلن حرفه‌ای":"Pro Plan"}</h3><Badge variant="success">{l==="fa"?"فعال":"Active"}</Badge></div>
              <p className="text-muted-foreground text-sm mt-1">{l==="fa"?"تمدید در ۱۴۰۳/۱۰/۰۱ · ۲۹ دلار در ماه":"Renews Dec 22, 2024 · $29/month"}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">{l==="fa"?"تغییر پلن":"Change Plan"}</Button>
            <Button size="sm"><TrendingUp className="size-4" />{l==="fa"?"ارتقا به Agency":"Upgrade to Agency"}</Button>
          </div>
        </div>
      </CardContent></Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[{label:l==="fa"?"درخواست‌های API":"API Requests",used:84200,max:100000},{label:l==="fa"?"فضای ذخیره":"Storage",used:3.2,max:10,unit:"GB"},{label:l==="fa"?"اعضای تیم":"Team Members",used:4,max:10}].map(item=>(<Card key={item.label}><CardContent className="p-5"><p className="text-sm text-muted-foreground">{item.label}</p><p className="text-2xl font-bold mt-1">{item.used.toLocaleString()}{item.unit?` ${item.unit}`:""}<span className="text-base font-normal text-muted-foreground"> / {item.max.toLocaleString()}{item.unit?` ${item.unit}`:""}</span></p><div className="w-full bg-muted rounded-full h-1.5 mt-3"><div className="h-1.5 rounded-full bg-primary" style={{width:`${(item.used/item.max)*100}%`}} /></div></CardContent></Card>))}
      </div>
      <Card>
        <CardHeader><CardTitle>{l==="fa"?"روش پرداخت":"Payment Method"}</CardTitle></CardHeader>
        <CardContent><div className="flex items-center gap-4 p-4 border border-border rounded-xl"><CreditCard className="size-8 text-muted-foreground" /><div><p className="font-medium">Visa •••• 4242</p><p className="text-sm text-muted-foreground">{l==="fa"?"انقضا: ۱۲/۲۶":"Expires 12/26"}</p></div><Button variant="ghost" size="sm" className="ms-auto">{l==="fa"?"ویرایش":"Edit"}</Button></div></CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>{l==="fa"?"تاریخچه صورت‌حساب":"Invoice History"}</CardTitle></CardHeader>
        <CardContent><div className="space-y-3">{invoices.map(inv=>(<div key={inv.id} className="flex items-center gap-4"><div className="flex-1"><p className="text-sm font-medium">{inv.id}</p><p className="text-xs text-muted-foreground">{l==="fa"?inv.date:inv.dateEn}</p></div><p className="text-sm font-medium">$29</p><Badge variant={inv.status==="paid"?"success":"destructive"}>{inv.status==="paid"?(l==="fa"?"پرداخت شد":"Paid"):(l==="fa"?"ناموفق":"Failed")}</Badge><Button variant="ghost" size="icon-sm"><Download className="size-4" /></Button></div>))}</div></CardContent>
      </Card>
    </div>
  );
}
