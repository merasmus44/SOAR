import Link from "next/link";

const links = [
  ["Dashboard", "/dashboard"],
  ["Quests", "/quests"],
  ["Stats", "/stats"],
  ["Leaderboard", "/leaderboard"],
  ["Polls", "/polls"],
  ["Settings", "/settings"],
] as const;

export function SiteHeader() {
  return (
    <header className="mx-auto flex min-h-[76px] max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-[#e8eae2] px-5 py-4 sm:px-9">
      <Link className="text-xl font-semibold tracking-[-.06em] text-[#234d38]" href="/">Soar</Link>
      <nav aria-label="Main navigation" className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#68746b] sm:order-none sm:w-auto sm:gap-x-4 lg:gap-x-6">
        {links.map(([label, href]) => <Link className="transition hover:text-[#234d38]" href={href} key={href}>{label}</Link>)}
      </nav>
      <Link className="rounded-lg border border-[#dfe3d9] bg-white px-4 py-2 text-sm font-semibold text-[#234d38] transition hover:border-[#234d38] hover:bg-[#234d38] hover:text-white" href="/login">Log in</Link>
    </header>
  );
}
