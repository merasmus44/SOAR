"use client";

import { useEffect, useRef } from "react";
import { themeKey } from "@/lib/theme";

export function ThemeSwitch() {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.checked = document.documentElement.dataset.theme === "dark";
    }
  }, []);

  function changeTheme(dark: boolean) {
    const theme = dark ? "dark" : "light";
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem(themeKey, theme);
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }

  return (
    <label className="flex cursor-pointer items-center justify-between gap-4">
      <span>
        <span className="block text-sm font-semibold">Dark mode</span>
        <span className="mt-1 block text-sm text-muted">Saved on this browser.</span>
      </span>
      <span className="relative shrink-0">
        <input
          aria-label="Dark mode"
          className="peer sr-only"
          onChange={(event) => changeTheme(event.currentTarget.checked)}
          ref={input}
          role="switch"
          type="checkbox"
        />
        <span className="block h-7 w-12 rounded-full bg-border transition-colors peer-checked:bg-action peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-surface" />
        <span className="absolute left-1 top-1 size-5 rounded-full bg-accent shadow-sm transition-transform peer-checked:translate-x-5 peer-checked:bg-action-ink" />
      </span>
    </label>
  );
}
