import { type Locale } from "@/lib/i18n/config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  { slug: "rtl-nextjs", title: "پیاده‌سازی RTL با Next.js 15", titleEn: "Building RTL with Next.js 15", date: "۱۴۰۳/۹/۱۵", dateEn: "Sep 15, 2024", tag: "Tutorial", read: "5 min" },
  { slug: "tailwind-v4", title: "راهنمای Tailwind CSS v4", titleEn: "Tailwind CSS v4 Guide", date: "۱۴۰۳/۹/۱", dateEn: "Sep 1, 2024", tag: "Guide", read: "8 min" },
  { slug: "shadcn-rtl", title: "Shadcn/UI با پشتیبانی کامل فارسی", titleEn: "Shadcn/UI with Full Persian Support", date: "۱۴۰۳/۸/۲۰", dateEn: "Aug 20, 2024", tag: "Deep Dive", read: "12 min" },
  { slug: "saas-template", title: "ساخت قالب SaaS حرفه‌ای", titleEn: "Building a Professional SaaS Template", date: "۱۴۰۳/۸/۱", dateEn: "Aug 1, 2024", tag: "Case Study", read: "15 min" },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;

  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{l === "fa" ? "وبلاگ" : "Blog"}</h1>
          <p className="text-lg text-muted-foreground">
            {l === "fa" ? "آخرین مقالات درباره توسعه وب و دیزاین" : "Latest articles about web development and design"}
          </p>
        </div>
        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md hover:border-primary/30 transition-all cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{post.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{post.read} {l === "fa" ? "دقیقه" : "read"}</span>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{l === "fa" ? post.title : post.titleEn}</h2>
                    <p className="text-xs text-muted-foreground">{l === "fa" ? post.date : post.dateEn}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
