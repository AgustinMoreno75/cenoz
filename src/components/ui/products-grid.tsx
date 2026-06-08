"use client";

import { useState } from "react";

import type { Product, ProductFilter } from "@/data/site";
import { productFilterOptions } from "@/data/site";
import { cn } from "@/lib/utils";

import { ProductCard } from "./product-card";

type ProductsGridProps = {
  products: Product[];
};

export function ProductsGrid({ products }: ProductsGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProductFilter>("todos");

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div className="flex min-w-max gap-3 sm:min-w-0 sm:flex-wrap">
        {productFilterOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setActiveCategory(option.value)}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition",
              activeCategory === option.value
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                : "border-slate-900/10 bg-white text-slate-600 hover:border-[var(--color-accent)] hover:text-[var(--color-accent-strong)]",
            )}
          >
            {option.label}
          </button>
        ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}