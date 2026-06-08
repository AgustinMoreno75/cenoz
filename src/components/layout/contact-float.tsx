import { buildWhatsAppLink } from "@/data/site";

import { WhatsAppLogo } from "@/components/ui/whatsapp-logo";

export function ContactFloat() {
  return (
    <a
      href={buildWhatsAppLink("Hola CENOZ, quiero realizar una consulta.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar a CENOZ por WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_45px_rgba(37,211,102,0.36)] transition hover:-translate-y-1 hover:bg-[#1fb95a] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppLogo className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  );
}