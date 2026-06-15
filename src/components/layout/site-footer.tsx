import Image from "next/image";
import Link from "next/link";

import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";
import { Container } from "@/components/ui/container";
import { buildWhatsAppLink, navigation, products, siteConfig } from "@/data/site";
import { buttonStyles } from "@/lib/theme";

export function SiteFooter() {
  const quickProducts = products.filter((product) => [
    "modulos-portatiles-habitacionales",
    "banos-portatiles",
    "banos-quimicos",
    "equipos-atmosfericos",
  ].includes(product.slug));

  return (
    <footer className="border-t border-slate-900/10 bg-slate-950 text-white">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.1fr_.9fr_.9fr] lg:py-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_rgba(15,23,42,0.22)]">
              <Image
                src="/images/logo-cenoz-mark.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-[0.12em] text-white">CENOZ</p>
              <p className="text-sm text-slate-400">{siteConfig.brandLabel}</p>
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
            Módulos portátiles, baños químicos y equipos atmosféricos para empresas,
            obras, municipios y operaciones desde Bahía Blanca a toda la República Argentina.
          </p>

          <a
            href={buildWhatsAppLink("Hola CENOZ, quiero realizar una consulta comercial.")}
            target="_blank"
            rel="noreferrer"
            className={buttonStyles.whatsapp}
          >
            <WhatsAppLogo className="h-4 w-4" />
            WhatsApp comercial
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Navegación
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              Productos
            </p>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {quickProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/productos/${product.slug}`}
                    className="transition hover:text-white"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
            Contacto
          </p>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
            <li>{siteConfig.addressLine}</li>
            {siteConfig.contactNumbers.map((phone) => (
              <li key={phone.raw}>
                <a href={phone.href} className="transition hover:text-white">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/8 py-6">
        <Container className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} CENOZ. Todos los derechos reservados.</p>
          <p>Bahía Blanca • Cobertura en toda la República Argentina</p>
        </Container>
      </div>
    </footer>
  );
}