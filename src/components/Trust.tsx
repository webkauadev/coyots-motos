import { Shield, Clock, Users, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/whatsapp";

const proofPoints = [
  {
    icon: Shield,
    title: "Tradição e Confiança",
    description: "18 anos de mercado atendendo Vilhena e região.",
  },
  {
    icon: Clock,
    title: "Atendimento Rápido",
    description: "Resposta ágil e orientação para a peça certa.",
  },
  {
    icon: Users,
    title: "Diversidade",
    description: "Opções para diferentes modelos e necessidades.",
  },
  {
    icon: MessageCircle,
    title: "Transparência",
    description: "Orçamento claro e disponibilidade confirmada na hora.",
  },
];

const Trust = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-4">
            Por que comprar na <span className="text-primary">Coyot's Motos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          {proofPoints.map((point, index) => (
            <div
              key={index}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <point.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" onClick={handleWhatsAppClick}>
            <MessageCircle className="w-6 h-6" />
            Pedir orçamento no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Trust;
