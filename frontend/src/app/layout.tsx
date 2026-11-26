import type { Metadata } from "next";
import type { ReactNode } from "react";
import { themeKey } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soar — Make today count",
  description: "Small daily quests, fresh ideas, and more ways to connect.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              if (localStorage.getItem(${JSON.stringify(themeKey)}) === "dark") {
                document.documentElement.dataset.theme = "dark";
              }
            } catch {}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
