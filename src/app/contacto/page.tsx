import Image from "next/image";
import {
  Building2,
  Clock3,
  Globe,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/ui/contact-form";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";
import { buildMailtoLink, buildMapsLink, buildWhatsAppLink, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { buttonStyles } from "@/lib/theme";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Contacto comercial de CENOZ para módulos portátiles, baños químicos y equipos atmosféricos con WhatsApp, formulario web, email y teléfono.",
  path: "/contacto",
  keywords: ["contacto CENOZ", "trailers petroleros", "módulos portátiles", "Bahía Blanca"],
});

const customerProfile = "Empresas • Constructoras • Municipios • Eventos";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto CENOZ",
  url: `${siteConfig.siteUrl}/contacto`,
  about: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.primaryPhoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.addressCountry,
    },
  },
};

const contactCards = [
  {
    title: "WhatsApp",
    description: "Canal más rápido para consultas comerciales desde el celular.",
    value: siteConfig.whatsappDisplay,
    href: buildWhatsAppLink("Hola CENOZ, quiero realizar una consulta."),
    icon: MessageCircle,
  },
  {
    title: "Teléfono",
    description: "Canal directo para consultas comerciales y coordinación inicial.",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneLink,
    icon: Phone,
  },
  {
    title: "Email",
    description: "Ideal para cotizaciones, licitaciones y pedidos formales.",
    value: siteConfig.email,
    href: buildMailtoLink("Consulta comercial", ["Hola CENOZ, quiero realizar una consulta."]),
    icon: Mail,
  },
  {
    title: "Dirección",
    description: "Base administrativa y comercial con ubicación real en Bahía Blanca.",
    value: siteConfig.addressLine,
    href: buildMapsLink(),
    icon: Building2,
  },
  {
    title: "Clientes habituales",
    description: "Perfiles que más consultan por módulos, baños y soluciones operativas.",
    value: customerProfile,
    href: siteConfig.siteUrl,
    icon: Globe,
  },
];

const responseSteps = [
  "Indicá la empresa, el CUIT y la persona que consulta.",
  "Contanos qué producto te interesa y en qué contexto lo necesitás.",
  "Respondemos por el canal más conveniente con una propuesta directa.",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />

      <PageHero
        eyebrow="Contacto"
        title="Canales directos para consultas comerciales y cotizaciones"
        description="WhatsApp como canal preferente, formulario web para datos de empresa, email y llamada telefónica como respaldo para avanzar sin fricción."
        highlights={[
          "WhatsApp",
          "Formulario web",
          "Email y teléfono",
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-8 xl:grid-cols-[1.05fr_.95fr] xl:items-start">
          <div id="formulario-contacto" className="scroll-mt-32">
            <Reveal className="panel rounded-[32px] p-6 sm:p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                    Formulario de contacto
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    Completá los datos de la empresa y de quien consulta.
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    El formulario pide razón social, CUIT, contacto, teléfono, email y el
                    producto o servicio de interés para que la consulta llegue ordenada y lista
                    para cotizar.
                  </p>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                    className="panel rounded-[28px] p-6 transition hover:-translate-y-1"
                  >
                    <div className="inline-flex rounded-2xl bg-[var(--color-accent-soft)] p-3 text-[var(--color-accent-strong)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {card.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[var(--color-steel)]">
                      {card.value}
                    </p>
                  </a>
                );
              })}
            </Reveal>

            <Reveal delay={0.06} className="panel overflow-hidden rounded-[32px]">
              <div className="relative aspect-[16/10] border-b border-[color:var(--color-line)]">
                <a
                  href={buildMapsLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0"
                  aria-label="Abrir ubicación de CENOZ en Google Maps"
                >
                  <Image
                    src="/images/map-placeholder.svg"
                    alt="Mapa ilustrado de la ubicación de CENOZ en Bahía Blanca"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 100vw, 40vw"
                  />
                </a>
              </div>

              <div className="space-y-5 p-6 sm:p-8">
                <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                  <Clock3 className="h-4 w-4" />
                  Canales de atención
                </div>
                <ul className="space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                  <li>{siteConfig.whatsappDisplay}</li>
                  <li>{siteConfig.phoneDisplay}</li>
                  <li>{siteConfig.email}</li>
                  <li>{customerProfile}</li>
                </ul>
                <div className="rounded-[24px] bg-[var(--color-surface)] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                    Cómo respondemos
                  </p>
                  <ol className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                    {responseSteps.map((step, index) => (
                      <li key={step}>
                        {index + 1}. {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <a
                  href={buildWhatsAppLink("Hola CENOZ, quiero avanzar con una consulta.")}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyles.whatsapp}
                >
                  <WhatsAppLogo className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}