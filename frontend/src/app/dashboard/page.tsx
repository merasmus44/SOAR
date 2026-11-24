import Link from "next/link";
import { redirect } from "next/navigation";
import { PageLayout } from "@/components/page-layout";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

const sections = [
  {
    href: "/quests",
    icon: "✳",
    title: "Quests",
    description: "Find a small challenge for today.",
    tone: "bg-[#eff4e9] text-[#52744c]",
  },
  {
    href: "/stats",
    icon: "↗",
    title: "Your stats",
    description: "See the steps you have taken.",
    tone: "bg-[#f3efe5] text-[#987b48]",
  },
  {
    href: "/leaderboard",
    icon: "◎",
    title: "Leaderboard",
    description: "See how the community is doing.",
    tone: "bg-[#eaf0f1] text-[#527075]",
  },
  {
    href: "/polls",
    icon: "☷",
    title: "Polls",
    description: "Share a thought with the group.",
    tone: "bg-[#f3ebee] text-[#92697a]",
  },
  {
    href: "/settings",
    icon: "⚙",
    title: "Settings",
    description: "Adjust your preferences.",
    tone: "bg-[#eeedf4] text-[#716a91]",
  },
];

export default async function DashboardPage() {
  if (!isSupabaseConfigured()) {
    return (
      <PageLayout>
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#e8eae2] bg-white p-8">
          <h1 className="mt-8 text-3xl font-semibold tracking-[-.06em]">Finish Supabase setup</h1>
          <p className="mt-3 text-sm leading-6 text-[#68746b]">
            Add your Supabase URL and anon key to <code>.env.local</code>, then restart the website.
          </p>
          <Link
            className="mt-6 inline-flex h-10 items-center rounded-lg bg-[#234d38] px-4 text-sm font-semibold text-white"
            href="/login"
          >
            Go to sign in
          </Link>
        </div>
      </PageLayout>
    );
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const profileName = user.user_metadata.full_name;
  const emailName = user.email?.split("@")[0];
  const name = typeof profileName === "string" && profileName.trim()
    ? profileName
    : emailName || "there";

  return (
    <PageLayout hideDashboardLink>
      <section className="page-enter py-5 sm:py-8">
        <div className="rounded-[26px] bg-[#eaf0e1] px-7 py-9 sm:px-11 sm:py-12">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#638154]">Your Soar space</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-.075em] sm:text-5xl">Welcome, {name}.</h1>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#647268]">
            Choose where you want to go. Take it one step at a time.
          </p>
        </div>
      </section>
      <section className="pb-8">
        <div className="mb-5">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#78925a]">Explore</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-.055em]">What would you like to do?</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <Link
              className="card-enter group rounded-2xl border border-[#e8eae2] bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-[#d1dcc8] hover:shadow-[0_15px_40px_rgba(28,47,34,.06)]"
              href={section.href}
              key={section.href}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className={`grid size-11 place-items-center rounded-[14px] text-lg ${section.tone}`}>
                  {section.icon}
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg text-[#a3aba3] transition group-hover:translate-x-1 group-hover:text-[#234d38]"
                >
                  ↗
                </span>
              </div>
              <h3 className="mt-6 text-base font-semibold tracking-[-.025em]">{section.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-[#7c867e]">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
