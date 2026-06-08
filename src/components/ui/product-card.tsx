import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Toilet, Truck } from "lucide-react";

import type { Product } from "@/data/site";
import { productCategoryLabels } from "@/data/site";

type ProductCardProps = {
  product: Product;
};

const categoryIcons = {
  sanitarios: Toilet,
  modulos: Building2,
  atmosfericos: Truck,
};

export function ProductCard({ product }: ProductCardProps) {
  const Icon = categoryIcons[product.category];
  const productHref = `/productos/${product.slug}`;

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

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4">
            <span className="rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
              {product.badge}
            </span>
            <span className="inline-flex rounded-2xl bg-slate-950/90 p-3 text-white shadow-sm">
              <Icon className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4 sm:p-5">
        <p className="text-sm font-medium text-[var(--color-steel)]">
          {productCategoryLabels[product.category]}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          {product.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
          {product.shortDescription}
        </p>

        <ul className="mt-5 space-y-2 text-sm leading-7 text-slate-700">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature}>• {feature}</li>
          ))}
        </ul>

        <div className="mt-6">
          <Link
            href={productHref}
            className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-steel)] transition-all duration-200 hover:text-[var(--color-accent-strong)] hover:[text-shadow:0_0_12px_rgba(252,62,48,0.32)] sm:justify-start"
          >
            Ver info
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}