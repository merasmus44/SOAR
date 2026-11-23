import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f8f5] px-6 text-[#17211b]">
      <section className="flex max-w-md flex-col items-center text-center">
        <p className="text-sm font-semibold tracking-[.22em] text-[#426a4e]">SOAR</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-.06em] sm:text-5xl">Welcome to Soar.</h1>
        <p className="mt-4 text-base leading-7 text-[#68746b]">Daily quests, small games, and ways to connect. Take a moment for yourself and make today count.</p>
        <Link className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#234d38] px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-[#183c2a] focus:outline-none focus:ring-4 focus:ring-[#cdddca]" href="/login">Get started <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}
