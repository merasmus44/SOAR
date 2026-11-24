import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default function LeaderboardPage() {
  return (
    <PageLayout>
      <PageTitle eyebrow="Community" title="Leaderboard" description="Check in on the community and celebrate everyone's progress." />
      <section className="rounded-2xl border border-[#e8eae2] bg-white p-6 sm:p-8">
        <div className="flex items-center justify-between border-b border-[#edf0e9] pb-4"><h2 className="font-semibold">This week</h2><span className="rounded-full bg-[#eff4e9] px-3 py-1 text-xs font-semibold text-[#52744c]">Weekly</span></div>
        <p className="py-10 text-center text-sm text-[#788279]">The leaderboard will appear here.</p>
      </section>
    </PageLayout>
  );
}
