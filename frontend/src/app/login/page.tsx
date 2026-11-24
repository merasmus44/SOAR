"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function handleDemoLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Enter your name to continue.");
      return;
    }

    // Demo-only sign-in: keep a display name in this browser and open the dashboard.
    window.localStorage.setItem("soar-demo-name", trimmedName);
    router.push("/dashboard");
  }

  return (
    <main className="grid min-h-screen bg-[#f8f8f5] text-[#17211b] lg:grid-cols-[1fr_.88fr]">
      <section className="flex flex-col px-6 sm:px-12 lg:px-16">
        <header className="flex h-[82px] items-center">
          <Link className="text-xl font-semibold tracking-[-.06em] text-[#234d38]" href="/">Soar</Link>
        </header>
        <div className="mx-auto flex w-full max-w-[430px] flex-1 flex-col justify-center py-12">
          <Link className="mb-9 text-sm font-medium text-[#718076] transition hover:text-[#234d38]" href="/">← Back to home</Link>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#78925a]">Welcome to Soar</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-.07em] sm:text-5xl">Let’s get started.</h1>
          <p className="mt-4 text-sm leading-6 text-[#748077]">Enter your name to open the demo dashboard.</p>

          <form className="mt-9" onSubmit={handleDemoLogin}>
            <label className="mb-2 block text-sm font-semibold" htmlFor="name">Your name</label>
            <input autoComplete="name" autoFocus className="h-12 w-full rounded-xl border border-[#dfe3d9] bg-white px-4 text-sm outline-none transition placeholder:text-[#a0a8a1] focus:border-[#68875c] focus:ring-4 focus:ring-[#dce8d2]/60" id="name" maxLength={50} onChange={(event) => { setName(event.target.value); setError(""); }} placeholder="Enter your name" required value={name} />
            {error && <p className="mt-2 text-sm text-red-700" role="alert">{error}</p>}
            <button className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#234d38] px-5 text-sm font-semibold text-white transition hover:bg-[#183c2a] focus:outline-none focus:ring-4 focus:ring-[#cdddca]" type="submit">Continue to Soar <span aria-hidden="true">↗</span></button>
          </form>

          <p className="mt-5 rounded-xl border border-[#e5e9df] bg-white/70 px-4 py-3 text-xs leading-5 text-[#788279]">Demo sign-in only. Your name stays in this browser; no account is created.</p>
        </div>
        <footer className="pb-6 text-xs text-[#9aa29b]">Walnut Hills High School Programming Club</footer>
      </section>

      <aside className="relative hidden overflow-hidden bg-[#eaf0e1] p-12 lg:flex lg:items-center lg:justify-center">
        <div className="absolute -right-40 -top-40 size-[570px] rounded-full border border-[#d3dfc8]" />
        <div className="absolute -right-20 -top-20 size-[410px] rounded-full border border-[#d3dfc8]" />
        <div className="absolute bottom-[-180px] left-[-130px] size-[400px] rounded-full border border-[#d3dfc8]" />
        <div className="relative max-w-md">
          <div className="mb-8 grid size-14 place-items-center rounded-2xl bg-white text-2xl text-[#52744c] shadow-sm">✳</div>
          <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-.075em]">A small step<br />can change<br />your whole day.</h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-[#68766a]">Find a little inspiration, try something different, and make room for more connection.</p>
          <div className="mt-12 h-px w-full bg-[#d5dfce]" />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-[#78925a]">Make today count</p>
        </div>
      </aside>
    </main>
  );
}
