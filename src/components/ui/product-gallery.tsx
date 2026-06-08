"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type ProductGalleryImage = {
  id: string;
  src: string;
  alt: string;
};

type ProductGalleryProps = {
  title: string;
  images: ProductGalleryImage[];
};

export function ProductGallery({ title, images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_112px] md:items-start">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] bg-slate-100">
        <Image
          key={activeImage.id}
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 40vw"
        />
      </div>

      <div className="grid grid-cols-4 gap-3 md:grid-cols-1">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver ${title}, imagen ${index + 1}`}
              aria-pressed={isActive}
              className={cn(
                "group relative overflow-hidden rounded-[20px] border bg-white p-1 transition duration-200",
                isActive
                  ? "border-[var(--color-accent)] shadow-[0_0_0_3px_rgba(252,62,48,0.18)]"
                  : "border-slate-900/10 hover:border-[var(--color-accent)] hover:shadow-[0_0_0_2px_rgba(252,62,48,0.12)]",
              )}
            >
              <div className="relative aspect-square overflow-hidden rounded-[16px] bg-slate-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="112px"
                />
              </div>
              <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/78 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                {index + 1}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}