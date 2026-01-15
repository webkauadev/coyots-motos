import { MessageCircle, Wrench, ShoppingBag, MapPin, Instagram } from "lucide-react";
import LinkButton from "@/components/LinkButton";
import logoWhite from "@/assets/logo-coyots-white.png";

const links = [
  {
    href: "https://wa.me/556933225975",
    label: "Coyot's Motos Atacado",
    icon: MessageCircle,
    variant: "whatsapp" as const,
    linkType: "whatsapp_atacado" as const,
  },
  {
    href: "https://wa.me/5569993687770",
    label: "Coyot's Oficina",
    icon: Wrench,
    variant: "whatsapp" as const,
    linkType: "whatsapp_oficina" as const,
  },
  {
    href: "https://www.mercadolivre.com.br/pagina/coyotsmotosatacado",
    label: "Mercado Livre",
    icon: ShoppingBag,
    variant: "mercadolivre" as const,
    linkType: "mercadolivre" as const,
  },
  {
    href: "https://www.google.com/search?q=coyots+motos+vilhena+localização",
    label: "Localização",
    icon: MapPin,
    variant: "outline" as const,
    linkType: "location" as const,
  },
  {
    href: "https://www.instagram.com/coyotsmotos/",
    label: "Instagram",
    icon: Instagram,
    variant: "instagram" as const,
    linkType: "instagram" as const,
  },
];

const Links = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center space-y-4">
            <img
              src={logoWhite}
              alt="Coyot's Motos"
              className="h-20 mx-auto"
            />
            <div>
              <h1 className="text-xl font-heading text-foreground">
                Autopeças para Motos
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Vilhena - RO
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            {links.map((link) => (
              <LinkButton
                key={link.linkType}
                href={link.href}
                label={link.label}
                icon={link.icon}
                variant={link.variant}
                linkType={link.linkType}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground text-sm relative z-10">
        <p>© {new Date().getFullYear()} Coyot's Motos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Links;
