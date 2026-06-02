import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Locale } from "@/lib/i18n/config";

export default async function RegisterPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{l === "fa" ? "ایجاد حساب جدید" : "Create a new account"}</h1>
        <p className="text-muted-foreground text-sm mt-1.5">{l === "fa" ? "همین امروز شروع کنید — رایگان" : "Start today — it's free"}</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{l === "fa" ? "نام کامل" : "Full Name"}</label>
          <Input placeholder={l === "fa" ? "نام کامل خود" : "Your full name"} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{l === "fa" ? "ایمیل" : "Email"}</label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{l === "fa" ? "رمز عبور" : "Password"}</label>
          <Input type="password" placeholder={l === "fa" ? "حداقل ۸ کاراکتر" : "At least 8 characters"} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{l === "fa" ? "تکرار رمز عبور" : "Confirm Password"}</label>
          <Input type="password" placeholder={l === "fa" ? "رمز عبور را مجدداً وارد کنید" : "Re-enter your password"} />
        </div>
        <Button size="lg" className="w-full">{l === "fa" ? "ایجاد حساب" : "Create Account"}</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        {l === "fa" ? "حساب دارید؟" : "Already have an account?"}{" "}
        <Link href={`/${l}/auth/login`} className="text-primary font-medium hover:underline">
          {l === "fa" ? "وارد شوید" : "Sign in"}
        </Link>
      </p>
    </div>
  );
}
