import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default function SettingsPage() {
  return (
    <PageLayout>
      <PageTitle eyebrow="Your account" title="Settings" description="Manage your preferences." />
      <section className="rounded-2xl border border-[#e8eae2] bg-white p-6 sm:p-8">
        <h2 className="font-semibold">Preferences</h2>
        <p className="mt-2 text-sm text-[#788279]">Settings will be available here.</p>
      </section>
    </PageLayout>
  );
}
