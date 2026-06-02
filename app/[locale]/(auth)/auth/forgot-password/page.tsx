import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { type Locale } from "@/lib/i18n/config";

export default async function ForgotPasswordPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l = locale as Locale;
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{l === "fa" ? "بازنشانی رمز عبور" : "Reset your password"}</h1>
        <p className="text-muted-foreground text-sm mt-1.5">
          {l === "fa"
            ? "ایمیل خود را وارد کنید. لینک بازنشانی برایتان ارسال خواهیم شد."
            : "Enter your email and we’ll send you a reset link."}
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{l === "fa" ? "ایمیل" : "Email"}</label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <Button size="lg" className="w-full">
          {l === "fa" ? "ارسال لینک بازنشانی" : "Send Reset Link"}
        </Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">
        <Link href={`/${l}/auth/login`} className="text-primary font-medium hover:underline">
          {l === "fa" ? "← بازگشت به ورود" : "← Back to login"}
        </Link>
      </p>
    </div>
  );
}
