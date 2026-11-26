import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default function StatsPage() {
  return (
    <PageLayout>
      <PageTitle eyebrow="Your progress" title="Stats" description="Your activity and progress will appear here." />
      <section className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {["Quests completed", "Days active", "Current streak"].map((label) => <article className="rounded-xl bg-canvas p-5" key={label}><p className="text-2xl font-semibold text-accent">—</p><p className="mt-2 text-sm text-muted">{label}</p></article>)}
        </div>
        <p className="mt-6 text-sm text-muted">Progress tracking is not connected yet.</p>
      </section>
    </PageLayout>
  );
}
