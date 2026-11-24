export function PageTitle({
  title,
  eyebrow = "Soar",
  description,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <section className="mb-8 rounded-[24px] bg-[#eaf0e1] px-7 py-8 sm:px-10 sm:py-10">
      <p className="text-xs font-bold uppercase tracking-[.15em] text-[#638154]">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-.07em] sm:text-4xl">{title}</h1>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-[#647268]">{description}</p> : null}
    </section>
  );
}
