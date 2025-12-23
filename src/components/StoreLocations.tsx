import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/whatsapp";
import lojaFachada from "@/assets/loja-fachada.jpg";
import lojaInterior from "@/assets/loja-interior.jpg";

const locations = [
  {
    name: "Unidade Atacado",
    address: "Av. JÔ Sato, Nº 721",
    neighborhood: "Jardim Eldorado",
    city: "Vilhena - RO",
    cep: "76980-611",
    image: lojaFachada,
  },
  {
    name: "Unidade Centro",
    address: "Av. Mal. Rondon, 4068",
    neighborhood: "Centro",
    city: "Vilhena - RO",
    cep: "76980-000",
    image: lojaInterior,
  },
];

const StoreLocations = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <section id="lojas" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-4">
            Nossas <span className="text-primary">Lojas</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Duas unidades em Vilhena para melhor atender você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={location.image}
                  alt={`${location.name} - Coyot's Motos`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary uppercase mb-3">
                  {location.name}
                </h3>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-foreground font-medium">{location.address}</p>
                    <p>{location.neighborhood}</p>
                    <p>{location.city}</p>
                    <p>CEP: {location.cep}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
            <MessageCircle className="w-6 h-6" />
            Falar agora no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreLocations;
