import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default async function QuestDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <PageLayout>
      <PageTitle eyebrow="Quest details" title="Quest" description="This page is ready for individual quest information." />
      <section className="rounded-2xl border border-[#e8eae2] bg-white p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[.13em] text-[#78925a]">Quest ID</p>
        <p className="mt-2 text-lg font-semibold text-[#234d38]">{slug}</p>
        <Link className="mt-6 inline-flex h-10 items-center rounded-lg border border-[#dfe3d9] px-4 text-sm font-semibold text-[#234d38] transition hover:bg-[#f4f6f0]" href="/quests">Back to quests</Link>
      </section>
    </PageLayout>
  );
}
