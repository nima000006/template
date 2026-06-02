"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";
export type ThemeColor = "default" | "violet" | "ai" | "warm";

interface ThemeContextValue {
  mode: ThemeMode;
  color: ThemeColor;
  setMode: (mode: ThemeMode) => void;
  setColor: (color: ThemeColor) => void;
  toggleMode: () => void;
  currentTheme: string;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getThemeAttribute = (color: ThemeColor, mode: ThemeMode): string => {
  if (color === "default") return mode === "dark" ? "dark" : "light";
  return mode === "dark" ? `${color}-dark` : color;
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("light");
  const [color, setColorState] = useState<ThemeColor>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem("nexus-mode") as ThemeMode | null;
    const savedColor = localStorage.getItem("nexus-color") as ThemeColor | null;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setModeState(savedMode ?? (prefersDark ? "dark" : "light"));
    setColorState(savedColor ?? "default");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const theme = getThemeAttribute(color, mode);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("nexus-mode", mode);
    localStorage.setItem("nexus-color", color);
  }, [mode, color, mounted]);

  const setMode = (m: ThemeMode) => setModeState(m);
  const setColor = (c: ThemeColor) => setColorState(c);
  const toggleMode = () => setModeState((m) => (m === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider
      value={{
        mode,
        color,
        setMode,
        setColor,
        toggleMode,
        currentTheme: getThemeAttribute(color, mode),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
