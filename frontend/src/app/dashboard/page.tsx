"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  { href: "/quests", icon: "✳", title: "Quests", description: "Find a small challenge for today.", tone: "bg-[#eff4e9] text-[#52744c]" },
  { href: "/stats", icon: "↗", title: "Your stats", description: "See the steps you have taken.", tone: "bg-[#f3efe5] text-[#987b48]" },
  { href: "/leaderboard", icon: "◎", title: "Leaderboard", description: "See how the community is doing.", tone: "bg-[#eaf0f1] text-[#527075]" },
  { href: "/polls", icon: "☷", title: "Polls", description: "Share a thought with the group.", tone: "bg-[#f3ebee] text-[#92697a]" },
  { href: "/settings", icon: "⚙", title: "Settings", description: "Adjust your preferences.", tone: "bg-[#eeedf4] text-[#716a91]" },
];

export default function DashboardPage() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = window.localStorage.getItem("soar-demo-name");
    if (!savedName) {
      router.replace("/login");
      return;
    }
    setName(savedName);
  }, [router]);

  function handleSignOut() {
    window.localStorage.removeItem("soar-demo-name");
    router.push("/");
  }

  return (
    <main className="min-h-screen bg-[#f8f8f5] text-[#17211b]">
      {!name ? <div className="mx-auto max-w-7xl px-5 py-10 text-sm text-[#647068]">Loading your dashboard…</div> : null}
      {name ? <>
      <div className="mx-auto max-w-7xl px-5 sm:px-9">
        <header className="flex min-h-[76px] items-center justify-between border-b border-[#e8eae2]">
          <Link className="text-xl font-semibold tracking-[-.06em] text-[#234d38]" href="/">Soar</Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-[#647068] sm:inline">Hi, {name || "there"}</span>
            <button className="rounded-full border border-[#dfe3d9] bg-white px-4 py-2 text-xs font-semibold transition hover:border-[#234d38] hover:text-[#234d38]" onClick={handleSignOut} type="button">Sign out</button>
          </div>
        </header>

        <section className="py-10 sm:py-14">
          <div className="rounded-[26px] bg-[#eaf0e1] px-7 py-9 sm:px-11 sm:py-12">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#638154]">Your Soar space</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-[-.075em] sm:text-5xl">Welcome{ name ? `, ${name}` : "" }.</h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-[#647268]">Choose where you want to go. Take it one step at a time.</p>
          </div>
        </section>

        <section className="pb-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div><p className="text-xs font-bold uppercase tracking-[.15em] text-[#78925a]">Explore</p><h2 className="mt-2 text-2xl font-semibold tracking-[-.055em]">What would you like to do?</h2></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => <Link className="group rounded-2xl border border-[#e8eae2] bg-white p-5 transition hover:-translate-y-1 hover:border-[#d1dcc8] hover:shadow-[0_15px_40px_rgba(28,47,34,.06)]" href={section.href} key={section.href}>
              <div className="flex items-start justify-between"><span className={`grid size-11 place-items-center rounded-[14px] text-lg ${section.tone}`}>{section.icon}</span><span aria-hidden="true" className="text-lg text-[#a3aba3] transition group-hover:translate-x-1 group-hover:text-[#234d38]">↗</span></div>
              <h3 className="mt-6 text-base font-semibold tracking-[-.025em]">{section.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-[#7c867e]">{section.description}</p>
            </Link>)}
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[#e8eae2] py-5 text-xs text-[#89928a] sm:flex-row sm:justify-between">
          <span>Soar · Walnut Hills Programming Club</span><Link className="hover:text-[#234d38]" href="/">Back to home</Link>
        </footer>
      </div>
      </> : null}
    </main>
  );
}
