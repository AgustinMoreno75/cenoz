import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ProductsGrid } from "@/components/ui/products-grid";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";
import { buildWhatsAppLink, products, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";
import { buttonStyles } from "@/lib/theme";

export const metadata = createPageMetadata({
  title: "Productos",
  description:
    "Catálogo actual de CENOZ con módulos portátiles, baños químicos y equipos atmosféricos para empresas, obras y operaciones.",
  path: "/productos",
  keywords: ["productos CENOZ", "trailers petroleros", "módulos portátiles", "Bahía Blanca"],
});

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Productos CENOZ",
  itemListElement: products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteConfig.siteUrl}/productos/${product.slug}`,
    name: product.title,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={itemListSchema} />

      <PageHero
        eyebrow="Productos"
        title="Todos los productos y servicios visibles en una sola visita"
        description="Catálogo actual de CENOZ con foco en módulos portátiles, baños químicos y equipos atmosféricos, sin publicar precios y con consulta directa." 
        highlights={[
          "Módulos portátiles",
          "Baños químicos",
          "Equipos atmosféricos",
        ]}
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-8">
          <Reveal className="max-w-3xl space-y-4">
            <p className="text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              La oferta actual se ve completa en una sola navegación. El orden del catálogo
              prioriza módulos portátiles, seguido por baños químicos y equipos atmosféricos,
              que hoy son las líneas clave para la nueva etapa comercial.
            </p>
          </Reveal>

          <ProductsGrid products={products} />
        </Container>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-20 sm:py-24">
        <Container>
          <Reveal className="panel rounded-[32px] px-6 py-10 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                ¿Querés que te indiquemos la opción más conveniente?
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950">
                Te orientamos según tipo de empresa, obra o necesidad operativa.
              </h2>
              <p className="text-base leading-8 text-[var(--color-muted)]">
                Si estás comparando alternativas o necesitás combinar módulos, baños y apoyo
                operativo, respondemos con una propuesta clara por el canal que te resulte más cómodo.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 lg:mt-0 lg:justify-end">
              <a
                href={buildWhatsAppLink("Hola CENOZ, necesito ayuda para elegir el producto correcto.")}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles.whatsapp}
              >
                <WhatsAppLogo className="h-4 w-4" />
                Pedir asesoramiento
              </a>
              <Link href="/contacto" className={buttonStyles.secondary}>
                Ir a contacto
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}