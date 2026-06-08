import Image from "next/image";
import Link from "next/link";
import {
  Boxes,
  Clock3,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { FAQList } from "@/components/ui/faq-list";
import { ProductCard } from "@/components/ui/product-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  advantages,
  buildWhatsAppLink,
  companyStats,
  faqs,
  heroStats,
  products,
  siteConfig,
} from "@/data/site";
import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";
import { buttonStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";

const advantageIcons = {
  solutions: Boxes,
  speed: Clock3,
  delivery: Truck,
  trust: ShieldCheck,
  service: MessageSquare,
  coverage: MapPin,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  areaServed: siteConfig.coverageZones,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    addressCountry: siteConfig.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.coordinates.latitude,
    longitude: siteConfig.coordinates.longitude,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: siteConfig.primaryPhoneRaw,
    email: siteConfig.email,
    areaServed: siteConfig.coverageZones,
    availableLanguage: ["es"],
  },
  sameAs: [siteConfig.whatsappBaseLink],
  knowsAbout: siteConfig.defaultKeywords,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const homeProducts = products.filter(
  (product) => !["banos-quimicos", "cabinas-de-vigilancia"].includes(product.slug),
);

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <section id="top" data-nav-section="/" className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/trailer-petrolero-tradicional.jpg"
            alt="Módulo portátil blanco en traslado dentro de un predio operativo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <Container className="relative grid min-h-[88vh] items-end gap-10 pb-14 pt-28 sm:pb-20 sm:pt-32 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:pt-36">
          <Reveal className="max-w-3xl space-y-8">
            <div className="space-y-5">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                Bahía Blanca • módulos portátiles, baños químicos y equipos atmosféricos
              </span>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Somos la solución en módulos portátiles con entrega inmediata
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-200 sm:text-xl sm:leading-8">
                CENOZ se especializa en la venta y alquiler de módulos portátiles, baños químicos y
                equipos atmosféricos, con más de 32 años de experiencia en el mercado, brindando soluciones rápidas en todo el país.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={buildWhatsAppLink("Hola CENOZ, quiero recibir una cotización.")}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonStyles.whatsapp, "w-full justify-center shadow-[0_18px_48px_rgba(37,211,102,0.28)] sm:w-auto")}
              >
                <WhatsAppLogo className="h-4 w-4" />
                Escribir por WhatsApp
              </a>
              <Link
                href="/productos"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
              >
                Ver productos
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-[1.75rem] xl:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-200">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="panel rounded-[32px] p-6 text-slate-900 sm:p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                  Respuesta comercial directa
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                  Consultá por la línea que necesitás y recibí una propuesta directa.
                </h2>
              </div>

              <div className="space-y-4 rounded-[28px] bg-[var(--color-surface)] p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                    Qué resolvemos
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    módulos portátiles, baños químicos y equipos atmosféricos con
                    atención comercial directa y rapida 
                  </p>
                </div>

                <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-2xl bg-white px-4 py-3">WhatsApp: {siteConfig.whatsappDisplay}</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Email: {siteConfig.email}</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Formulario web con datos de empresa y CUIT</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Propuesta ajustada al producto, formato y uso real</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={buildWhatsAppLink("Hola CENOZ, quiero recibir una propuesta comercial.")}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonStyles.whatsapp, "w-full justify-center sm:w-auto")}
                >
                  <WhatsAppLogo className="h-4 w-4" />
                  Solicitar propuesta
                </a>
                <Link href="/contacto" className={cn(buttonStyles.secondary, "w-full justify-center sm:w-auto")}>
                  Ir al formulario
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <div data-nav-section="/productos">
        <section className="py-20 sm:py-24">
          <Container className="space-y-10">
            <SectionHeading
              eyebrow="Productos"
              title="Todos los productos y servicios visibles en una sola visita"
              description="Catálogo actual ordenado para ver rápido la oferta real de CENOZ, con foco especial en módulos portátiles como línea prioritaria."
            />

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {homeProducts.map((product, index) => (
                <Reveal key={product.slug} delay={index * 0.06}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>

            <Reveal delay={homeProducts.length * 0.06 + 0.08}>
              <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
                <Link
                  href="/productos"
                  className={cn(
                    buttonStyles.secondary,
                    "min-h-14 w-full justify-center px-6 text-center hover:shadow-[0_0_3px_#fc3e30] sm:min-h-16 sm:text-base",
                  )}
                >
                  Depositos con stock
                </Link>
                <Link
                  href="/productos"
                  className={cn(
                    buttonStyles.secondary,
                    "min-h-14 w-full justify-center px-6 text-center hover:shadow-[0_0_3px_#fc3e30] sm:min-h-16 sm:text-base",
                  )}
                >
                  Otros productos a la venta
                </Link>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="border-y border-[color:var(--color-line)] bg-[var(--color-surface)] py-20 sm:py-24">
          <Container className="space-y-10">
            <SectionHeading
              eyebrow="Qué prioriza CENOZ"
              title="Soluciones, conveniencia y experiencia como base de la decisión"
              description="Los tres conceptos que el cliente quiere ver reflejados en la nueva etapa de la marca, en ese mismo orden de prioridad."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {advantages.map((item, index) => {
                const Icon = advantageIcons[item.icon];

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <article className="panel h-full rounded-[28px] p-6">
                      <div className="inline-flex rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent-strong)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      </div>

      <section data-nav-section="/nosotros" className="border-y border-[color:var(--color-line)] bg-slate-950 py-20 text-white sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <Reveal className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Quiénes somos
            </p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Una empresa enfocada en resolver con criterio comercial y respuesta directa.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              CENOZ trabaja con una propuesta concreta para empresas, constructoras,
              municipios y eventos que necesitan módulos portátiles, baños químicos o
              equipos atmosféricos sin perder tiempo en vueltas innecesarias.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/nosotros" className={cn(buttonStyles.primary, "w-full justify-center sm:w-auto")}>
                Conocer la empresa
              </Link>
              <Link
                href="/contacto"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {companyStats.map((item) => (
              <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <div data-nav-section="/contacto">
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#111827,#1f2937)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:px-8 lg:px-12 lg:py-14">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Consultas directas
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    No mostramos precios: armamos una propuesta según tu necesidad real
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                    Las consultas más habituales llegan por alquiler de módulos y baños para
                    obras de infraestructura. Si ya sabés qué necesitás, cotizamos directo.
                    Si todavía estás evaluando, te ayudamos a elegir la alternativa conveniente.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-center">
                  <a
                    href={buildWhatsAppLink("Hola CENOZ, quiero solicitar una cotización.")}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonStyles.whatsapp,
                      "w-full justify-center sm:mx-auto sm:w-auto sm:px-6 sm:py-4 sm:text-base lg:min-w-[320px]",
                    )}
                  >
                    <WhatsAppLogo className="h-4 w-4 sm:h-5 sm:w-5" />
                    Pedir cotización por WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="border-t border-[color:var(--color-line)] py-20 sm:py-24">
          <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Consultas frecuentes"
              title="Lo que más preguntan antes de avanzar con una cotización"
              description="Preguntas habituales sobre productos, clientes, canales de contacto y forma de cotizar." 
            />
            <Reveal delay={0.08}>
              <FAQList items={faqs} />
            </Reveal>
          </Container>
        </section>
      </div>
    </>
  );
}
