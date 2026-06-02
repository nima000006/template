"use client";

import { use } from "react";
import { Camera, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface ProfilePageProps {
  params: Promise<{ locale: string }>;
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const { locale } = use(params);
  const l = locale as "fa" | "en";

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">{l === "fa" ? "پروفایل" : "Profile"}</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {l === "fa" ? "مدیریت اطلاعات حساب کاربری" : "Manage your account information"}
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
                {l === "fa" ? "ن" : "N"}
              </div>
              <button className="absolute -bottom-1 -end-1 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm hover:opacity-90 transition-opacity">
                <Camera className="size-3.5" />
              </button>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{l === "fa" ? "نیما چهره" : "Nima Chehreh"}</h2>
              <p className="text-muted-foreground text-sm">nima@example.com</p>
              <Badge variant="success" className="mt-2">{l === "fa" ? "حرفه‌ای" : "Pro Plan"}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">{l === "fa" ? "اطلاعات شخصی" : "Personal Information"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{l === "fa" ? "نام" : "First Name"}</label>
              <Input defaultValue={l === "fa" ? "نیما" : "Nima"} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{l === "fa" ? "نام خانوادگی" : "Last Name"}</label>
              <Input defaultValue={l === "fa" ? "چهره" : "Chehreh"} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{l === "fa" ? "ایمیل" : "Email"}</label>
              <Input startIcon={<Mail className="size-4" />} defaultValue="nima@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{l === "fa" ? "تلفن" : "Phone"}</label>
              <Input startIcon={<Phone className="size-4" />} defaultValue="+98 912 123 4567" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{l === "fa" ? "شهر" : "City"}</label>
              <Input startIcon={<MapPin className="size-4" />} defaultValue={l === "fa" ? "تهران" : "Tehran"} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">{l === "fa" ? "تاریخ تولد" : "Birth Date"}</label>
              <Input startIcon={<Calendar className="size-4" />} defaultValue="1990/01/01" />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button>{l === "fa" ? "ذخیره تغییرات" : "Save Changes"}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
