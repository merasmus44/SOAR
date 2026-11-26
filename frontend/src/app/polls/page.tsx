import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default function PollsPage() {
  return (
    <PageLayout>
      <PageTitle eyebrow="Community" title="Polls" description="Quick questions for the Soar community." />
      <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-sand-ink">Coming soon</span>
        <h2 className="mt-5 text-xl font-semibold tracking-[-.04em]">Polls will appear here.</h2>
        <p className="mt-2 text-sm leading-6 text-muted">This page is ready for the polls feature.</p>
      </section>
    </PageLayout>
  );
}
