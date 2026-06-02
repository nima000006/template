"use client";

import { useEffect } from "react";

interface LocaleAttributesProps {
  locale: string;
  dir: "rtl" | "ltr";
}

export function LocaleAttributes({ locale, dir }: LocaleAttributesProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null;
}
