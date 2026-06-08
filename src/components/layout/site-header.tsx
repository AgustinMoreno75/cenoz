"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";

import { navigation, siteConfig } from "@/data/site";
import { buttonStyles } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState("/");
  const homeTopHref = "/#top";
  const contactFormHref = "/contacto#formulario-contacto";
  const contactButtonClassName =
    "bg-[var(--color-accent)] !text-white visited:!text-white hover:!text-white hover:bg-[var(--color-accent-strong)]";

  const handleHomeNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    setIsMenuOpen(false);

    if (pathname !== "/") {
      return;
    }

    event.preventDefault();
    setActiveHomeSection("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getActiveSection = () => {
      if (pathname !== "/") {
        return "/";
      }

      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-section]"));

      if (sections.length === 0) {
        return "/";
      }

      const activationOffset = 160;

      const currentSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= activationOffset && rect.bottom > activationOffset;
      });

      return currentSection?.dataset.navSection ?? "/";
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);

      if (pathname === "/") {
        const nextSection = getActiveSection();

        setActiveHomeSection((current) => (current === nextSection ? current : nextSection));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const isHome = pathname === "/";
  const isSolid = !isHome || isScrolled || isMenuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isSolid
          ? "border-b border-slate-900/8 bg-white/94 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={homeTopHref} className="flex items-center gap-3" onClick={handleHomeNavigation}>
          <span className="inline-flex h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(15,23,42,0.22)]">
            <Image
              src="/images/logo-cenoz-mark.png"
              alt=""
              width={44}
              height={44}
              priority
              className="h-11 w-11 object-contain"
            />
          </span>
          <div>
            <p
              className={cn(
                "text-lg font-semibold tracking-[0.14em] transition-colors",
                isSolid ? "text-slate-950" : "text-white",
              )}
            >
              CENOZ
            </p>
            <p
              className={cn(
                "text-xs transition-colors",
                isSolid ? "text-slate-700" : "text-white/80",
              )}
            >
              {siteConfig.brandLabel}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const isActive = isHome
              ? activeHomeSection === item.href
              : item.href === "/"
                ? pathname === item.href
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href === "/" ? homeTopHref : item.href}
                onClick={item.href === "/" ? handleHomeNavigation : undefined}
                className={cn(
                  "relative inline-flex items-center py-1 text-sm font-medium transition-[color,transform] duration-200 hover:-translate-y-0.5 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200 after:content-['']",
                  isSolid
                    ? "text-slate-800 hover:text-slate-950 after:bg-slate-950 hover:after:scale-x-100"
                    : "!text-white hover:!text-white after:bg-white hover:after:scale-x-100 [text-shadow:0_1px_12px_rgba(15,23,42,0.55)]",
                  isActive && (isSolid ? "text-slate-950 after:scale-x-100" : "text-white after:scale-x-100"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={contactFormHref}
            className={cn(
              buttonStyles.primary,
              contactButtonClassName,
              !isSolid && "shadow-[0_16px_40px_rgba(252,62,48,0.22)]",
            )}
          >
            Contactanos
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition lg:hidden",
            isSolid
              ? "border-slate-900/10 bg-slate-950 text-white"
              : "border-white/15 bg-white/10 text-white",
          )}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-slate-900/8 bg-white/96 px-4 pb-6 pt-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navigation.map((item) => {
              const isActive = isHome
                ? activeHomeSection === item.href
                : item.href === "/"
                  ? pathname === item.href
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href === "/" ? homeTopHref : item.href}
                  onClick={item.href === "/" ? handleHomeNavigation : () => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition",
                    isActive && "bg-[var(--color-surface)] text-slate-950",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={contactFormHref}
              onClick={() => setIsMenuOpen(false)}
              className={cn(buttonStyles.primary, contactButtonClassName, "mt-2 justify-center")}
            >
              Contactanos
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}