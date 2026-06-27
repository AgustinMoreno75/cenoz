"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";

import { cn } from "@/lib/utils";

const MAX_PREVIEW_IMAGES = 4;
const SWIPE_THRESHOLD = 48;

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
        return;
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [images.length, isLightboxOpen]);

  if (images.length === 0) {
    return null;
  }

  const resolvedActiveIndex = activeIndex >= images.length ? 0 : activeIndex;
  const activeImage = images[resolvedActiveIndex] ?? images[0];
  const previewImages = images.slice(0, MAX_PREVIEW_IMAGES);
  const hasOverflow = images.length > MAX_PREVIEW_IMAGES;
  const overflowCount = images.length - MAX_PREVIEW_IMAGES;
  const overflowPreviewIndex = MAX_PREVIEW_IMAGES - 1;

  const openLightboxAt = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];

    if (touchStartXRef.current === null || touchStartYRef.current === null) {
      return;
    }

    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  return (
    <>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_112px] md:items-start">
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={`Abrir galeria completa de ${title}`}
          className="group relative aspect-[4/3] overflow-hidden rounded-[26px] bg-slate-100 text-left"
        >
          <Image
            key={activeImage.id}
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 40vw"
          />
          <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-slate-950/78 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Ver en pantalla completa
          </span>
        </button>

        <div className="grid grid-cols-4 gap-3 md:grid-cols-1">
          {previewImages.map((image, index) => {
            const isOverflowPreview = hasOverflow && index === overflowPreviewIndex;
            const isActive =
              index === resolvedActiveIndex ||
              (isOverflowPreview && resolvedActiveIndex >= overflowPreviewIndex);

            return (
              <button
                key={image.id}
                type="button"
                onClick={() => {
                  if (isOverflowPreview) {
                    openLightboxAt(index);
                    return;
                  }

                  setActiveIndex(index);
                }}
                aria-label={
                  isOverflowPreview
                    ? `Abrir galeria completa de ${title} con ${images.length} imagenes`
                    : `Ver ${title}, imagen ${index + 1}`
                }
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
                    className={cn(
                      "object-cover transition duration-300 group-hover:scale-[1.02]",
                      isOverflowPreview && "brightness-[0.38]",
                    )}
                    sizes="112px"
                  />

                  {isOverflowPreview ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/42">
                      <span className="rounded-full bg-white/14 px-4 py-2 text-base font-semibold text-white backdrop-blur-sm">
                        +{overflowCount}
                      </span>
                    </div>
                  ) : null}
                </div>

                {!isOverflowPreview ? (
                  <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/78 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {index + 1}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {isLightboxOpen ? (
        <div
          className="fixed inset-0 z-[70] bg-slate-950/95 p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria completa de ${title}`}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Cerrar galeria"
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-950/72 p-3 text-white transition hover:bg-slate-950 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex h-full items-center justify-center">
            <div
              className="relative h-[78vh] w-full max-w-6xl overflow-hidden rounded-[28px] bg-white/5 shadow-[0_30px_100px_rgba(15,23,42,0.55)] sm:h-[82vh]"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <Image
                key={`${activeImage.id}-lightbox`}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority
                className="object-contain p-4 sm:p-8"
                sizes="100vw"
              />

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goToPrevious}
                    aria-label="Imagen anterior"
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-slate-950/72 p-3 text-white transition hover:bg-slate-950 sm:left-5"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <button
                    type="button"
                    onClick={goToNext}
                    aria-label="Imagen siguiente"
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-slate-950/72 p-3 text-white transition hover:bg-slate-950 sm:right-5"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              ) : null}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/76 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                {resolvedActiveIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}