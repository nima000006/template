import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Locale } from "@/lib/i18n/config";

export default async function LoginPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{l === "fa" ? "ورود به حساب" : "Sign in to your account"}</h1>
        <p className="text-muted-foreground text-sm mt-1.5">{l === "fa" ? "خوش آمدید! اطلاعات حساب خود را وارد کنید" : "Welcome back! Enter your account details"}</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{l === "fa" ? "ایمیل" : "Email"}</label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">{l === "fa" ? "رمز عبور" : "Password"}</label>
            <Link href={`/${l}/auth/forgot-password`} className="text-xs text-primary hover:underline">
              {l === "fa" ? "فراموشی رمز عبور؟" : "Forgot password?"}
            </Link>
          </div>
          <Input type="password" placeholder={l === "fa" ? "رمز عبور خود" : "Your password"} />
        </div>
        <Button size="lg" className="w-full">{l === "fa" ? "ورود" : "Sign In"}</Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        {l === "fa" ? "حساب ندارید؟" : "Don't have an account?"}{" "}
        <Link href={`/${l}/auth/register`} className="text-primary font-medium hover:underline">
          {l === "fa" ? "ثبت‌نام کنید" : "Sign up"}
        </Link>
      </p>
    </div>
  );
}
