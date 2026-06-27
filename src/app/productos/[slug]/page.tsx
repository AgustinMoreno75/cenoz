import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/ui/product-card";
import { ProductGallery } from "@/components/ui/product-gallery";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";
import {
  buildWhatsAppLink,
  productCategoryLabels,
  products,
  siteConfig,
} from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { buttonStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return createPageMetadata({
      title: "Producto",
      description: siteConfig.description,
      path: "/productos",
    });
  }

  return createPageMetadata({
    title: product.title,
    description: product.seoDescription,
    path: `/productos/${product.slug}`,
    keywords: [product.title.toLowerCase(), productCategoryLabels[product.category]],
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = [
    ...products.filter((item) => item.slug !== product.slug && item.category === product.category),
    ...products.filter((item) => item.slug !== product.slug && item.category !== product.category),
  ].slice(0, 3);

  const productGalleryImages = [
    {
      id: `${product.slug}-cover`,
      src: product.image,
      alt: product.imageAlt,
      type: "image" as const,
    },
    ...(product.galleryImages ?? []).map((image, index) => ({
      id: `${product.slug}-gallery-${index + 1}`,
      src: image.src,
      alt: image.alt,
      type: image.type ?? "image",
      poster: image.poster,
    })),
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.seoDescription,
    category: productCategoryLabels[product.category],
    areaServed: siteConfig.coverageZones,
    url: `${siteConfig.siteUrl}/productos/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <section className="relative overflow-hidden border-b border-[color:var(--color-line)] bg-white pt-28 sm:pt-32">
        <div className="section-grid opacity-70" />
        <Container className="relative space-y-8 pb-16 sm:pb-20">
          <Reveal className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
              <Link href="/" className="transition hover:text-[var(--color-steel)]">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/productos" className="transition hover:text-[var(--color-steel)]">
                Productos
              </Link>
              <span>/</span>
              <span className="text-slate-950">{product.title}</span>
            </div>

            <span className="inline-flex rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)]">
              {product.badge}
            </span>
            <h1 className="text-balance max-w-4xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {product.title}
            </h1>
            <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)] sm:text-xl sm:leading-8">
              {product.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={buildWhatsAppLink(`Hola CENOZ, quiero solicitar presupuesto por ${product.title.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonStyles.whatsapp, "w-full justify-center sm:w-auto")}
              >
                <WhatsAppLogo className="h-4 w-4" />
                Solicitar Presupuesto
              </a>
              <Link href="/contacto#formulario-contacto" className={cn(buttonStyles.secondary, "w-full justify-center sm:w-auto")}>
                Completar formulario
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="grid gap-8 xl:grid-cols-[1.05fr_.95fr] xl:items-start">
          <Reveal className="panel overflow-hidden rounded-[32px] p-3">
            <ProductGallery title={product.title} images={productGalleryImages} />
          </Reveal>

          <Reveal delay={0.06} className="space-y-6">
            <div className="panel rounded-[32px] p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-steel)]">
                Aplicación principal
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                {product.shortDescription}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                Pensado para empresas y operaciones que necesitan una solución clara,
                conveniente y coherente con el contexto real de trabajo.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="panel rounded-[28px] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  Qué incluye
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>

              <article className="panel rounded-[28px] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  Usos frecuentes
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                  {product.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </article>

              <article className="panel rounded-[28px] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  Especificaciones técnicas
                </p>
                {product.technicalSpecifications?.length ? (
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--color-muted)]">
                    {product.technicalSpecifications.map((specification) => (
                      <li key={specification}>{specification}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    Información técnica pendiente de validación comercial.
                  </p>
                )}
              </article>

              <article className="panel rounded-[28px] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  Disponibilidad
                </p>
                {product.availability ? (
                  <p className="mt-4 inline-flex rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)]">
                    {product.availability}
                  </p>
                ) : (
                  <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                    Disponibilidad a confirmar al momento de la consulta.
                  </p>
                )}
              </article>
            </div>

            <div className="rounded-[32px] bg-slate-950 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Cobertura
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-300">
                Atención comercial desde {siteConfig.coverageZones.join(", ")} con
                base en {siteConfig.addressLine}, contacto por WhatsApp, formulario,
                email y llamada telefónica.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-[color:var(--color-line)] bg-[var(--color-surface)] py-20 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Relacionados"
            title="Otras soluciones que suelen cotizarse en conjunto"
            description="Productos complementarios para ampliar la capacidad operativa o cubrir requerimientos adicionales."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {relatedProducts.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}