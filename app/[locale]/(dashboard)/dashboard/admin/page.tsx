"use client";

import { use } from "react";
import { ShieldCheck, Users, Server, AlertTriangle, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const systemLogs = [
  { id: 1, level: "info", message: "User login successful", messageFa: "ورود کاربر موفق بود", time: "12:34:21" },
  { id: 2, level: "warning", message: "High memory usage detected", messageFa: "مصرف حافظه بالا شناسایی شد", time: "12:31:05" },
  { id: 3, level: "error", message: "Payment gateway timeout", messageFa: "تایم‌اوت درگاه پرداخت", time: "12:28:44" },
  { id: 4, level: "info", message: "Scheduled backup completed", messageFa: "پشتیبان‌گیری برنامه‌ریزی شده انجام شد", time: "12:00:00" },
  { id: 5, level: "warning", message: "SSL certificate expires in 14 days", messageFa: "گواهی SSL در ۱۴ روز دیگر منقضی می‌شود", time: "11:55:12" },
];

interface AdminPageProps {
  params: Promise<{ locale: string }>;
}

export default function AdminPage({ params }: AdminPageProps) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">{l === "fa" ? "پنل مدیریت" : "Admin Panel"}</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {l === "fa" ? "نظارت بر سیستم و مدیریت کاربران" : "System monitoring and user management"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: l === "fa" ? "کل کاربران" : "Total Users", value: "8,420", icon: Users, color: "text-primary" },
          { label: l === "fa" ? "سرورهای فعال" : "Active Servers", value: "12", icon: Server, color: "text-success" },
          { label: l === "fa" ? "هشدارها" : "Warnings", value: "3", icon: AlertTriangle, color: "text-warning" },
          { label: l === "fa" ? "آپ‌تایم" : "Uptime", value: "99.9%", icon: Activity, color: "text-info" },
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
            <CardTitle className="text-base">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                {l === "fa" ? "لاگ‌های سیستم" : "System Logs"}
              </span>
            </CardTitle>
            <Button variant="outline" size="sm">{l === "fa" ? "دانلود لاگ" : "Export Logs"}</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {systemLogs.map((log) => (
              <div key={log.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/40 font-mono text-xs">
                <Badge
                  variant={log.level === "error" ? "destructive" : log.level === "warning" ? "warning" : "info"}
                  className="shrink-0 text-[10px]"
                >
                  {log.level.toUpperCase()}
                </Badge>
                <span className="flex-1 text-foreground">
                  {l === "fa" ? log.messageFa : log.message}
                </span>
                <span className="text-muted-foreground shrink-0">{log.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
