import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default function QuestsPage() {
  return (
    <PageLayout>
      <PageTitle eyebrow="Explore" title="Quests" description="Browse daily ideas and choose one that fits your day." />
      <section className="rounded-2xl border border-[#e8eae2] bg-white p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#78925a]">Start here</p>
        <h2 className="mt-3 text-xl font-semibold tracking-[-.04em]">Your quests will show up here.</h2>
        <p className="mt-2 text-sm leading-6 text-[#788279]">Open the sample quest page to see how an individual quest route works.</p>
        <Link className="mt-5 inline-flex h-10 items-center rounded-lg bg-[#234d38] px-4 text-sm font-semibold text-white transition hover:bg-[#183c2a]" href="/quest/first-quest">Open sample quest</Link>
      </section>
    </PageLayout>
  );
}
