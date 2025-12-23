import { Link2, Droplet, Wrench, Package, HardHat, Lightbulb, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/whatsapp";

const categories = [
  {
    icon: Link2,
    title: "Kits de Transmissão",
    description: "Corrente, coroa, pinhão e conjuntos",
  },
  {
    icon: Droplet,
    title: "Óleos e Lubrificantes",
    description: "Óleo de motor, fluídos e manutenção",
  },
  {
    icon: Wrench,
    title: "Peças de Manutenção",
    description: "Freios, cabos, filtros, velas, rolamentos",
  },
  {
    icon: Package,
    title: "Acessórios",
    description: "Personalização e uso diário",
  },
  {
    icon: HardHat,
    title: "Capacetes",
    description: "Opções variadas conforme estoque",
  },
  {
    icon: Lightbulb,
    title: "Elétrica e Iluminação",
    description: "Lâmpadas, setas, baterias e afins",
  },
];

const Categories = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <section id="categories" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-4">
            O que você <span className="text-primary">encontra aqui</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Peças e acessórios para diversas marcas e modelos de motos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-gradient rounded-xl p-5 md:p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
              onClick={handleWhatsAppClick}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <category.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-base md:text-lg mb-1">{category.title}</h3>
              <p className="text-muted-foreground text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
            <MessageCircle className="w-6 h-6" />
            Falar agora no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
