import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--color-line)] bg-white pt-24 sm:pt-32">
      <div className="section-grid opacity-70" />
      <div className="absolute right-0 top-10 -z-10 h-56 w-56 rounded-full bg-amber-100 blur-3xl" />
      <div className="absolute left-0 top-16 -z-10 h-44 w-44 rounded-full bg-slate-200 blur-3xl" />

      <Container className="relative pb-14 sm:pb-20">
        <Reveal className="max-w-4xl space-y-6">
          <span className="inline-flex rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)]">
            {eyebrow}
          </span>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-xl sm:leading-8">
            {description}
          </p>

          {highlights.length > 0 ? (
            <div className="flex flex-wrap gap-2.5 pt-2 sm:gap-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-[color:var(--color-line)] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}