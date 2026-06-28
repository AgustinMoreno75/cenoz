import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { StockInfiniteGallery } from "@/components/ui/stock-infinite-gallery";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig, stockGalleryItems } from "@/data/site";

export const metadata = createPageMetadata({
  title: "Depósitos con Stock",
  description:
    "Galería de stock visual de CENOZ con carga progresiva para administrar grandes volúmenes de imágenes sin penalizar la navegación.",
  path: "/depositos-con-stock",
  keywords: ["depósitos con stock", "galería de stock", "imágenes de productos CENOZ"],
});

const stockSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Depósitos con Stock",
  description:
    "Galería de stock visual de CENOZ con carga progresiva para navegar grandes cantidades de imágenes.",
  url: `${siteConfig.siteUrl}/depositos-con-stock`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: stockGalleryItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      image: `${siteConfig.siteUrl}${item.src}`,
    })),
  },
};

export default function DepositoConStockPage() {
  return (
    <>
      <JsonLd data={stockSchema} />

      <PageHero
        eyebrow="Depósitos con Stock"
        title="Todos Nuestros productos en un solo lugar"
        description="Consultá por WhatsApp por Depósitos con Stock y recibí imágenes, disponibilidad y asesoramiento según lo que necesitás."
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-10">
          <StockInfiniteGallery items={stockGalleryItems} />
        </Container>
      </section>
    </>
  );
}