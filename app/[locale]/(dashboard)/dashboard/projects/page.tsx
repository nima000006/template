"use client";

import { use } from "react";
import { FolderKanban, Plus, Clock, Users, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  { id: 1, name: "طراحی اپ موبایل", nameEn: "Mobile App Design", progress: 72, team: 4, deadline: "۱۴۰۳/۱۰/۱۵", deadlineEn: "Jan 15, 2025", status: "active" },
  { id: 2, name: "بازطراحی وبسایت", nameEn: "Website Redesign", progress: 45, team: 6, deadline: "۱۴۰۳/۱۱/۱", deadlineEn: "Feb 1, 2025", status: "active" },
  { id: 3, name: "سیستم CRM", nameEn: "CRM System", progress: 90, team: 3, deadline: "۱۴۰۳/۹/۳۰", deadlineEn: "Dec 30, 2024", status: "review" },
  { id: 4, name: "اپلیکیشن داشبورد", nameEn: "Dashboard App", progress: 20, team: 5, deadline: "۱۴۰۳/۱۲/۲۹", deadlineEn: "Mar 29, 2025", status: "planning" },
];

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{l === "fa" ? "پروژه‌ها" : "Projects"}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {l === "fa" ? "مدیریت و پیگیری پروژه‌های جاری" : "Manage and track ongoing projects"}
          </p>
        </div>
        <Button size="sm">
          <Plus className="size-4" />
          {l === "fa" ? "پروژه جدید" : "New Project"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FolderKanban className="size-4 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">
                      {l === "fa" ? p.name : p.nameEn}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {l === "fa" ? p.deadline : p.deadlineEn}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={p.status === "active" ? "success" : p.status === "review" ? "warning" : "muted"}>
                    {p.status === "active" ? (l === "fa" ? "فعال" : "Active") : p.status === "review" ? (l === "fa" ? "بررسی" : "Review") : (l === "fa" ? "برنامه‌ریزی" : "Planning")}
                  </Badge>
                  <Button variant="ghost" size="icon-sm">
                    <MoreHorizontal className="size-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{l === "fa" ? "پیشرفت" : "Progress"}</span>
                  <span className="font-medium">{p.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary transition-all"
                    style={{ width: `${p.progress}%` }}
                  />
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                  <span className="flex items-center gap-1">
                    <Users className="size-3" /> {p.team} {l === "fa" ? "نفر" : "members"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="size-3" /> {l === "fa" ? p.deadline : p.deadlineEn}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
