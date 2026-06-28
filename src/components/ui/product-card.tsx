import Image from "next/image";
import Link from "next/link";
import { Boxes, Building2, Toilet, Truck } from "lucide-react";

import type { Product } from "@/data/site";
import { productCategoryLabels } from "@/data/site";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "home";
};

const categoryIcons = {
  sanitarios: Toilet,
  modulos: Building2,
  atmosfericos: Truck,
  especiales: Boxes,
};

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  const Icon = categoryIcons[product.category];
  const productHref = `/productos/${product.slug}`;
  const isHomeCard = variant === "home";

  return (
    <article className="panel h-full rounded-[30px] p-3">
      <Link href={productHref} aria-label={`Ver detalle de ${product.title}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] border border-slate-900/8 bg-slate-100">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 33vw"
          />

          <div className="absolute inset-x-0 top-0 flex justify-end p-4">
            <span className="inline-flex rounded-2xl bg-slate-950/90 p-3 text-white shadow-sm">
              <Icon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <h3 className={cn("text-2xl font-semibold tracking-tight text-slate-950", isHomeCard ? "text-center" : "mt-3")}>
          {product.title}
        </h3>

        {isHomeCard ? null : (
          <>
            <p className="mt-1 text-sm font-medium text-[var(--color-steel)]">
              {productCategoryLabels[product.category]}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              {product.shortDescription}
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
              {product.features.slice(0, 3).map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-6">
          <Link
            href={productHref}
            className={cn(
              "inline-flex text-sm font-semibold transition-all duration-200",
              isHomeCard
                ? "w-full items-center justify-center rounded-full border border-slate-900/10 bg-white px-5 py-3.5 text-slate-900 hover:-translate-y-0.5 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)] hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
                : "items-center justify-center text-[var(--color-steel)] hover:text-[var(--color-accent-strong)] hover:[text-shadow:0_0_12px_rgba(252,62,48,0.32)] sm:justify-start",
            )}
          >
            {isHomeCard ? "Más Información" : "Ver info"}
          </Link>
        </div>
      </div>
    </article>
  );
}