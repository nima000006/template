import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(
  n: number,
  locale: "fa" | "en" = "fa",
  opts?: Intl.NumberFormatOptions
) {
  return new Intl.NumberFormat(locale === "fa" ? "fa-IR" : "en-US", opts).format(n);
}

export function formatCurrency(
  amount: number,
  currency = "IRR",
  locale: "fa" | "en" = "fa"
) {
  if (locale === "fa") {
    return `${formatNumber(amount, "fa")} تومان`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(
  date: Date | string,
  locale: "fa" | "en" = "fa"
) {
  const d = typeof date === "string" ? new Date(date) : date;
  if (locale === "fa") {
    return new Intl.DateTimeFormat("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(d);
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(d);
}

export function formatRelativeTime(date: Date | string, locale: "fa" | "en" = "fa") {
  const d = typeof date === "string" ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  const rtf = new Intl.RelativeTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
    numeric: "auto",
  });

  if (diffSec < 60) return rtf.format(-diffSec, "second");
  if (diffMin < 60) return rtf.format(-diffMin, "minute");
  if (diffHr < 24) return rtf.format(-diffHr, "hour");
  if (diffDay < 30) return rtf.format(-diffDay, "day");
  return formatDate(d, locale);
}

export function truncate(str: string, max: number) {
  return str.length > max ? `${str.slice(0, max)}…` : str;
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/--+/g, "-")
    .trim();
}

export function generateId(prefix = "") {
  return `${prefix}${Math.random().toString(36).slice(2, 9)}`;
}

export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
