import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";
import {
  buildWhatsAppLink,
  siteConfig,
  workflowSteps,
} from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { buttonStyles } from "@/lib/theme";

export const metadata = createPageMetadata({
  title: "Nosotros",
  description:
    "Conocé a CENOZ, empresa enfocada en módulos portátiles, baños químicos y equipos atmosféricos desde Bahía Blanca a toda la República Argentina.",
  path: "/nosotros",
  keywords: ["nosotros CENOZ", "soluciones industriales", "República Argentina"],
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Nosotros | CENOZ",
  url: `${siteConfig.siteUrl}/nosotros`,
  about: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    areaServed: siteConfig.coverageZones,
  },
};

const pillars = [
  {
    title: "Soluciones",
    description:
      "Oferta enfocada en módulos portátiles, baños químicos y equipos atmosféricos para necesidades reales.",
  },
  {
    title: "Conveniencia",
    description:
      "Canales de contacto ágiles y una respuesta comercial clara, sin precios públicos ni vueltas innecesarias.",
  },
  {
    title: "Experiencia",
    description:
      "Respuesta pensada para empresas, constructoras, municipios y eventos que operan en contexto real.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />

      <PageHero
        eyebrow="Nosotros"
        title="Soluciones claras, conveniencia comercial y experiencia aplicada a la operación real"
        description="CENOZ desarrolla su posicionamiento alrededor de tres ideas que hoy ordenan la marca: soluciones, conveniencia y experiencia, con foco en empresas y obras."
        highlights={[
          "Soluciones",
          "Conveniencia",
          "Experiencia",
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="max-w-4xl">
          <Reveal className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                QUIENES SOMOS
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Una empresa enfocada en resolver con criterio comercial y respuesta directa A CADA UNO DE NUESTROS CLIENTES EN CUALQUIER LUGAR DEL PAIS.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-8 text-[var(--color-muted)]">
              <p>
                Desde hace más de 35 años CENOZ SE DEDICA a la Venta y Alquiler de Módulos Portátiles, Baños Químicos y Equipos Atmosféricos brindando soluciones inmediatas a necesidades urgentes de nuestros clientes en todo el país.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[color:var(--color-line)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container className="space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
              Nuestra forma de trabajo
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Un proceso corto, conveniente y pensado para clientes que necesitan resolver
            </h2>
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Cada etapa busca ordenar la consulta, recomendar la alternativa adecuada y responder sin fricción.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <article className="panel h-full rounded-[28px] p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-lg font-semibold text-[var(--color-accent-strong)]">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="panel rounded-[32px] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
              Principios de servicio
            </p>
            <div className="mt-5 space-y-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[24px] bg-[var(--color-surface)] p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="panel rounded-[32px] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              Cobertura y enfoque
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Atención comercial desde Bahía Blanca a toda la República Argentina
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              La empresa opera desde Montevideo 849, Bahía Blanca. Ese anclaje real se
              combina con WhatsApp, formulario web, email y llamada para facilitar el contacto
              y responder con agilidad en cualquier lugar del país.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {siteConfig.coverageZones.map((zone) => (
                <span
                  key={zone}
                  className="rounded-full border border-[color:var(--color-line)] bg-white px-4 py-2 text-sm font-medium text-slate-700"
                >
                  {zone}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink("Hola CENOZ, quiero realizar una consulta comercial.")}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles.whatsapp}
              >
                <WhatsAppLogo className="h-4 w-4" />
                Consultar por WhatsApp
              </a>
              <Link href="/productos" className={buttonStyles.secondary}>
                Ver soluciones disponibles
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}