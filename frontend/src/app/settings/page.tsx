import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";
import { ThemeSwitch } from "@/components/theme-switch";

export default function SettingsPage() {
  return (
    <PageLayout>
      <PageTitle eyebrow="Your account" title="Settings" description="Manage your preferences." />
      <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <h2 className="mb-4 font-semibold">Appearance</h2>
        <ThemeSwitch />
      </section>
    </PageLayout>
  );
}
