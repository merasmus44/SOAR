import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

const links = [
  ["Quests", "/quests"],
  ["Stats", "/stats"],
  ["Leaderboard", "/leaderboard"],
  ["Polls", "/polls"],
] as const;

export async function SiteHeader({ hideDashboardLink = false }: { hideDashboardLink?: boolean }) {
  let user: User | null = null;

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      ({ data: { user } } = await supabase.auth.getUser());
    } catch {
      // Keep public pages available if auth cannot be reached temporarily.
    }
  }

  const profileName = user?.user_metadata.full_name;
  const emailName = user?.email?.split("@")[0];
  const name = typeof profileName === "string" ? profileName : emailName || "Account";
  const profileImage = user?.user_metadata.avatar_url || user?.user_metadata.picture;
  const avatar = typeof profileImage === "string" ? profileImage : null;

  return (
    <header className="mx-auto w-full max-w-7xl border-b border-[#e8eae2] px-5 py-4 sm:px-9">
      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
        <Link className="shrink-0 text-xl font-semibold tracking-[-.06em] text-[#234d38]" href="/">Soar</Link>
        <div className="order-2 flex max-w-full flex-wrap items-center justify-end gap-2 sm:order-3 sm:ml-auto sm:gap-3">
          {user ? (
            <>
              {!hideDashboardLink && (
                <Link
                  className="rounded-lg bg-[#234d38] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#183c2a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#cdddca]"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              )}
              <div className="flex min-w-0 max-w-full items-center gap-2 rounded-full border border-[#e8eae2] bg-white py-1 pl-1 pr-3">
                {avatar ? (
                  <span
                    aria-label={`${name}'s profile picture`}
                    className="size-8 shrink-0 rounded-full bg-cover bg-center"
                    role="img"
                    style={{ backgroundImage: `url("${avatar}")` }}
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full bg-[#eaf0e1] text-xs font-semibold text-[#234d38]"
                  >
                    {name.slice(0, 1).toUpperCase()}
                  </span>
                )}
                <span className="max-w-[min(16rem,48vw)] break-words text-xs font-medium leading-4 text-[#56645a]">{name}</span>
              </div>
              <form action="/auth/signout" method="post">
                <button className="px-1 py-2 text-xs font-medium text-[#748077] transition hover:text-[#234d38]" type="submit">
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <Link
              className="rounded-lg border border-[#dfe3d9] bg-white px-4 py-2 text-sm font-semibold text-[#234d38] transition hover:border-[#234d38] hover:bg-[#234d38] hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#cdddca]"
              href="/login"
            >
              Get started
            </Link>
          )}
        </div>
        <nav aria-label="Main navigation" className="order-3 flex w-full flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[#68746b] sm:order-2 sm:w-auto sm:gap-x-4 lg:gap-x-6">
          {links.map(([label, href]) => (
            <Link className="transition hover:text-[#234d38]" href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
