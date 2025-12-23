import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/whatsapp";

const Hero = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    window.open(WHATSAPP_LINK, "_blank");
  };

  const scrollToCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />

      <div className="container relative z-10 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-semibold">18 anos de mercado em Vilhena</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading uppercase leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Atacado de Peças de{" "}
            <span className="text-gradient">Moto em Vilhena</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Peças, acessórios e itens de manutenção com atendimento rápido no WhatsApp. 
            Peça orçamento e confira disponibilidade na hora.
          </p>

          {/* Benefits */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              "Atendimento rápido",
              "Loja física em Vilhena",
              "Peças para diversas motos",
              "Preço justo e orientação na compra",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-foreground">
                <span className="text-primary text-lg">✓</span>
                {benefit}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="whatsapp" 
              size="xl" 
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Falar agora no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToCategories}
              className="w-full sm:w-auto"
            >
              Ver categorias de peças
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
