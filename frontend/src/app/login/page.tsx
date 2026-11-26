"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callbackError = new URLSearchParams(window.location.search).get("error");
    if (callbackError === "confirmation") {
      setError("Google sign-in did not finish. Please try again.");
    }
  }, []);

  async function signInWithGoogle() {
    setError("");
    setLoading(true);
    try {
      const supabase = createClient();
      const callbackUrl = new URL("/auth/callback", window.location.origin);
      const nextPath = new URLSearchParams(window.location.search).get("next");

      // Keep the return path inside this site and avoid protocol-relative URLs.
      if (nextPath?.startsWith("/") && !nextPath.startsWith("//") && !nextPath.includes("\\")) {
        callbackUrl.searchParams.set("next", nextPath);
      }

      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: callbackUrl.toString() },
      });
      if (authError) throw authError;
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Google sign-in could not start.");
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-canvas px-5 py-10 text-ink">
      <section className="page-enter w-full max-w-[420px]">
        <Link className="text-xl font-semibold tracking-[-.06em] text-accent" href="/">Soar</Link>
        <div className="card-enter mt-8 rounded-2xl border border-border bg-surface p-7 shadow-[0_18px_60px_rgba(30,50,35,.06)] sm:p-9" style={{ animationDelay: "90ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-accent">Welcome</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-.06em]">Sign in to Soar</h1>
          <p className="mt-2 text-sm leading-6 text-muted">Continue with your Google account.</p>
          {!isSupabaseConfigured() ? (
            <p className="mt-7 rounded-xl bg-canvas px-4 py-3 text-sm leading-6 text-muted">Add the Supabase URL and anon key to <code>.env.local</code>, then restart the website.</p>
          ) : (
            <>
              {error && <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-800" role="alert">{error}</p>}
              <button className="mt-7 flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-border bg-surface px-4 text-sm font-semibold text-ink transition hover:bg-soft focus:outline-none focus:ring-4 focus:ring-ring disabled:cursor-wait disabled:opacity-60" disabled={loading} onClick={signInWithGoogle} type="button">
                <svg aria-hidden="true" className="size-[18px]" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" transform="translate(0 4)"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.02 46.98 31.9 46.98 24.55Z"/><path fill="#FBBC05" d="M10.54 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.98-6.19Z" transform="translate(0 4)"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.44-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" transform="translate(0 -2)"/></svg>
                {loading ? "Connecting…" : "Continue with Google"}
              </button>
            </>
          )}
        </div>
        <p className="mt-5 text-center text-xs text-muted">Walnut Hills High School Programming Club</p>
      </section>
    </main>
  );
}
