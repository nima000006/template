"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PRICING_PLANS } from "@/lib/constants";

interface PricingSectionProps {
  locale: "fa" | "en";
}

export function PricingSection({ locale }: PricingSectionProps) {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {locale === "fa" ? "قیمت‌گذاری شفاف" : "Transparent Pricing"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {locale === "fa"
              ? "بدون هزینه پنهان. یک‌بار بخرید، برای همیشه استفاده کنید."
              : "No hidden costs. Buy once, use forever."}
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full border border-border p-1 bg-background">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                !annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              )}
            >
              {locale === "fa" ? "ماهانه" : "Monthly"}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                annual ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              )}
            >
              {locale === "fa" ? "سالانه" : "Annual"}
              <Badge variant="success" className="text-[10px] py-0 px-1.5">
                {locale === "fa" ? "۲۰٪ تخفیف" : "Save 20%"}
              </Badge>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => {
            const price = annual ? plan.price.annual : plan.price.monthly;
            const isPro = plan.id === "pro";

            return (
              <Card
                key={plan.id}
                className={cn(
                  "relative flex flex-col",
                  isPro && "border-primary shadow-lg shadow-primary/10 scale-105"
                )}
              >
                {isPro && (
                  <div className="absolute -top-4 start-1/2 -translate-x-1/2">
                    <Badge className="gap-1.5 px-3 py-1">
                      <Zap className="size-3" />
                      {locale === "fa" ? "پرطرفدارترین" : "Most Popular"}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">
                    {locale === "fa"
                      ? plan.id === "free" ? "رایگان" : plan.id === "pro" ? "حرفه‌ای" : "آژانسی"
                      : plan.labelKey.replace("pricing.", "")}
                  </CardTitle>
                  <CardDescription>
                    {locale === "fa"
                      ? plan.id === "free" ? "برای آزمایش و پروژه‌های شخصی"
                        : plan.id === "pro" ? "برای استارتاپ‌ها و تیم‌های کوچک"
                        : "برای آژانس‌ها و سازمان‌های بزرگ"
                      : plan.descKey.replace("pricing.", "")}
                  </CardDescription>
                  <div className="mt-4">
                    {price === 0 ? (
                      <span className="text-4xl font-bold">
                        {locale === "fa" ? "رایگان" : "Free"}
                      </span>
                    ) : (
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold">${price}</span>
                        <span className="text-muted-foreground mb-1 text-sm">
                          {annual
                            ? locale === "fa" ? "/سال" : "/yr"
                            : locale === "fa" ? "/ماه" : "/mo"}
                        </span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className="size-4 text-success shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full"
                    variant={isPro ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.id === "agency"
                      ? locale === "fa" ? "تماس با فروش" : "Contact Sales"
                      : locale === "fa" ? "شروع کنید" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
