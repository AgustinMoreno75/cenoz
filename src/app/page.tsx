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
  (product) => !["banos-quimicos", "cabinas-de-vigilancia", "panoles"].includes(product.slug),
);

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <section id="top" data-nav-section="/" className="relative isolate overflow-hidden bg-[var(--color-surface)] text-slate-950">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/trailer-petrolero-tradicional.jpg"
            alt="Módulo portátil blanco en traslado dentro de un predio operativo"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.58)_0%,rgba(255,255,255,0.76)_18%,rgba(248,250,252,0.92)_45%,rgba(248,250,252,0.98)_100%)]" />
        </div>

        <Container className="relative grid min-h-[88vh] items-end gap-10 pb-14 pt-28 sm:pb-20 sm:pt-32 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 lg:pt-36">
          <Reveal className="max-w-3xl space-y-8">
            <div className="space-y-5 text-center sm:text-left">
              <span className="inline-flex rounded-full border border-slate-900/10 bg-white/82 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm">
                ALQUILER - VENTA - SERVICIOS
              </span>
              <h1 className="hidden text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:block sm:text-5xl lg:text-6xl">
                Cenoz
              </h1>
              <p className="max-w-3xl text-balance text-xl font-medium leading-8 text-slate-900 sm:text-3xl sm:leading-10">
                Soluciones Modulares Industriales pensadas desde Bahía Blanca a toda la República Argentina
              </p>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-xl sm:leading-8">
                Alquiler y Venta de Módulos Portátiles, Baños Químicos y Equipos Atmosféricos
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
                className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                Ver productos
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="min-w-0 rounded-[24px] border border-slate-900/8 bg-white/88 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                >
                  <p className="text-2xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-[1.75rem] xl:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted)]">{item.label}</p>
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
                  Consultá por la línea que necesitás y solicitá presupuesto.
                </h2>
              </div>

              <div className="space-y-4 rounded-[28px] bg-[var(--color-surface)] p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                    Canales de Contacto
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                    Elegí el canal más conveniente para consultar, solicitar presupuesto
                    y enviar los datos de tu empresa.
                  </p>
                </div>

                <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  <li className="rounded-2xl bg-white px-4 py-3">WhatsApp: {siteConfig.whatsappDisplay}</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Email: {siteConfig.email}</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Dirección Postal: {siteConfig.addressLine}</li>
                  <li className="rounded-2xl bg-white px-4 py-3">Formulario Web con datos de empresa y CUIT</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={buildWhatsAppLink("Hola CENOZ, quiero solicitar presupuesto.")}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonStyles.whatsapp, "w-full justify-center sm:w-auto")}
                >
                  <WhatsAppLogo className="h-4 w-4" />
                  Solicitar Presupuesto
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
                  <ProductCard product={product} variant="home" />
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
              eyebrow="Propuesta de valor"
              title="BRINDAMOS SOLUCIONES en MODULOS PORTATILES de CALIDAD para la industria."
              description="EXPERIENCIA y CONVENIENCIA avaladas por la CONFORMIDAD y ELECCION de nuestros clientes, por la PRESENCIA, SERIEDAD y CONTINUIDAD en el mercado y por la AGILIDAD en la respuesta y resolución eficaz con ENTREGA INMEDIATA en cualquier lugar del país."
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
              Desde hace más de 3 décadas nos dedicamos a la Venta y Alquiler de Módulos
              Portátiles, Baños Químicos y Equipos Atmosféricos brindando respuesta inmediata
              a necesidades urgentes de nuestros clientes en todo el país.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/#contacto" className={cn(buttonStyles.primary, "w-full justify-center sm:w-auto")}>
                Contactar Empresa
              </Link>
              <Link
                href="/nosotros"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Conocer la empresa
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

      <div id="contacto" data-nav-section="/contacto">
        <section className="py-20 sm:py-24">
          <Container>
            <Reveal className="overflow-hidden rounded-[36px] bg-[linear-gradient(135deg,#111827,#1f2937)] px-6 py-10 text-white shadow-[0_24px_70px_rgba(15,23,42,0.16)] sm:px-8 lg:px-12 lg:py-14">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                    Consultas directas
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    No mostramos precios: armamos un presupuesto según tu necesidad real
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
