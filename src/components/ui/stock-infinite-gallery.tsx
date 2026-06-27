"use client";

import Image from "next/image";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";

import type { StockGalleryItem } from "@/data/site";
import { cn } from "@/lib/utils";

const INITIAL_BATCH_SIZE = 6;
const BATCH_SIZE = 6;

type StockInfiniteGalleryProps = {
  items: StockGalleryItem[];
};

export function StockInfiniteGallery({ items }: StockInfiniteGalleryProps) {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(INITIAL_BATCH_SIZE, items.length),
  );
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const hasMore = visibleCount < items.length;
  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    if (!sentinel || !hasMore) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        startTransition(() => {
          setVisibleCount((currentCount) =>
            Math.min(currentCount + BATCH_SIZE, items.length),
          );
        });
      },
      {
        rootMargin: "0px 0px 280px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, items.length, visibleCount]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item, index) => (
          <article
            key={item.id}
            className="panel group overflow-hidden rounded-[30px] border border-[color:var(--color-line)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
            </div>

            <div className="space-y-3 p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                  {item.title}
                </h2>
                <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent-strong)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-sm leading-7 text-[var(--color-muted)]">{item.alt}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div
          className={cn(
            "panel rounded-full px-5 py-3 text-sm font-medium text-[var(--color-muted)]",
            !hasMore && "bg-[var(--color-surface)]",
          )}
        >
          Mostrando {visibleItems.length} de {items.length} imágenes
        </div>

        {hasMore ? (
          <>
            <p className="text-center text-sm leading-7 text-[var(--color-muted)]">
              Seguí bajando para cargar más imágenes del depósito sin renderizar todo de una vez.
            </p>
            <div ref={sentinelRef} className="h-8 w-full" aria-hidden="true" />
          </>
        ) : (
          <p className="text-center text-sm leading-7 text-[var(--color-muted)]">
            No hay más imágenes para cargar por ahora.
          </p>
        )}
      </div>
    </div>
  );
}