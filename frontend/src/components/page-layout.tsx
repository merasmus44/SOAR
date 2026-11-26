import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PageLayoutProps = {
  children: ReactNode;
  hideHeader?: boolean;
  hideDashboardLink?: boolean;
};

export function PageLayout({
  children,
  hideHeader = false,
  hideDashboardLink = false,
}: PageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f8f5] text-[#17211b]">
      {!hideHeader && <SiteHeader hideDashboardLink={hideDashboardLink} />}
      <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-9 sm:px-9 sm:py-12">{children}</main>
      <SiteFooter />
    </div>
  );
}
