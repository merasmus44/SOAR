import Link from "next/link";
import { PageLayout } from "@/components/page-layout";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  let signedIn = false;

  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      signedIn = Boolean(user);
    } catch {
      // Keep the welcome page available if the auth service is temporarily unavailable.
    }
  }

  return (
    <PageLayout hideHeader>
      <section className="page-enter flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-xs font-bold tracking-[.22em] text-accent">SOAR</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Welcome to Soar.</h1>
        <p className="mt-4 max-w-md text-base leading-7 text-muted">Daily quests, small games, and ways to connect. Take a moment for yourself and make today count.</p>
        <Link className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-action px-7 text-sm font-semibold text-action-ink shadow-sm transition hover:bg-action-hover focus:outline-none focus:ring-4 focus:ring-ring" href={signedIn ? "/dashboard" : "/login"}>
          {signedIn ? "Go to dashboard" : "Get started"} <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </PageLayout>
  );
}
