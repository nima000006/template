import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n/config";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  return (
    <div className="container py-16 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{l === "fa" ? "تماس با ما" : "Contact Us"}</h1>
        <p className="text-muted-foreground text-lg">{l === "fa" ? "سوال دارید؟ پیام بگذارید" : "Have a question? Send us a message"}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          {[
            { icon: Mail, title: l === "fa" ? "ایمیل" : "Email", value: "support@nexuspro.ir" },
            { icon: Phone, title: l === "fa" ? "تلفن" : "Phone", value: l === "fa" ? "۰۲۱-۱۲۳۴-۵۶۷۸" : "+98 21 1234 5678" },
            { icon: MapPin, title: l === "fa" ? "آدرس" : "Address", value: l === "fa" ? "تهران، ایران" : "Tehran, Iran" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0"><item.icon className="size-5" /></div>
              <div><p className="font-medium text-sm">{item.title}</p><p className="text-muted-foreground text-sm mt-1">{item.value}</p></div>
            </div>
          ))}
        </div>
        <Card className="md:col-span-2"><CardContent className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2"><label className="text-sm font-medium">{l === "fa" ? "نام کامل" : "Full Name"}</label><Input placeholder={l === "fa" ? "نام خود" : "Your name"} /></div>
              <div className="space-y-2"><label className="text-sm font-medium">{l === "fa" ? "ایمیل" : "Email"}</label><Input type="email" placeholder="example@email.com" /></div>
            </div>
            <div className="space-y-2"><label className="text-sm font-medium">{l === "fa" ? "موضوع" : "Subject"}</label><Input placeholder={l === "fa" ? "موضوع پیام" : "Subject"} /></div>
            <div className="space-y-2"><label className="text-sm font-medium">{l === "fa" ? "پیام" : "Message"}</label><textarea rows={5} className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none" placeholder={l === "fa" ? "پیام خود..." : "Your message..."} /></div>
            <Button size="lg">{l === "fa" ? "ارسال پیام" : "Send Message"}</Button>
          </form>
        </CardContent></Card>
      </div>
    </div>
  );
}
