"use client";

import { use } from "react";
import { Users, UserPlus, Search, Phone, Mail, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const contacts = [
  { id: 1, name: "علی رضایی", nameEn: "Ali Rezaei", email: "ali@example.com", phone: "09121234567", status: "active", deal: 12000000 },
  { id: 2, name: "سارا محمدی", nameEn: "Sara Mohammadi", email: "sara@example.com", phone: "09351234567", status: "lead", deal: 8500000 },
  { id: 3, name: "رضا احمدی", nameEn: "Reza Ahmadi", email: "reza@example.com", phone: "09101234567", status: "active", deal: 25000000 },
  { id: 4, name: "مریم کریمی", nameEn: "Maryam Karimi", email: "maryam@example.com", phone: "09131234567", status: "inactive", deal: 0 },
  { id: 5, name: "احمد حسینی", nameEn: "Ahmad Hosseini", email: "ahmad@example.com", phone: "09361234567", status: "lead", deal: 5000000 },
];

interface CrmPageProps {
  params: Promise<{ locale: string }>;
}

export default function CrmPage({ params }: CrmPageProps) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{l === "fa" ? "مدیریت مشتریان" : "CRM"}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {l === "fa" ? "مدیریت مخاطبین و فرصت‌های فروش" : "Manage contacts and sales opportunities"}
          </p>
        </div>
        <Button size="sm">
          <UserPlus className="size-4" />
          {l === "fa" ? "مخاطب جدید" : "New Contact"}
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: l === "fa" ? "کل مخاطبین" : "Total Contacts", value: "1,284", icon: Users, color: "text-primary" },
          { label: l === "fa" ? "سرنخ‌های فعال" : "Active Leads", value: "342", icon: UserPlus, color: "text-success" },
          { label: l === "fa" ? "فرصت‌های باز" : "Open Deals", value: "89", icon: Phone, color: "text-warning" },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <stat.icon className={`size-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{l === "fa" ? "لیست مخاطبین" : "Contact List"}</CardTitle>
            <div className="w-64">
              <Input
                startIcon={<Search className="size-4" />}
                placeholder={l === "fa" ? "جستجو..." : "Search..."}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {contacts.map((c) => (
              <div key={c.id} className="flex items-center gap-4 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                  {l === "fa" ? c.name[0] : c.nameEn[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{l === "fa" ? c.name : c.nameEn}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Mail className="size-3" />{c.email}
                    </span>
                  </div>
                </div>
                <Badge variant={c.status === "active" ? "success" : c.status === "lead" ? "info" : "muted"}>
                  {c.status === "active" ? (l === "fa" ? "فعال" : "Active") : c.status === "lead" ? (l === "fa" ? "سرنخ" : "Lead") : (l === "fa" ? "غیرفعال" : "Inactive")}
                </Badge>
                <Button variant="ghost" size="icon-sm">
                  <MoreHorizontal className="size-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
