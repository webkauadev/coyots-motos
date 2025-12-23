import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/whatsapp";

const StickyWhatsApp = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-md border-t border-border md:hidden">
      <Button 
        variant="whatsapp" 
        size="xl" 
        onClick={handleWhatsAppClick}
        className="w-full"
      >
        <MessageCircle className="w-6 h-6" />
        Falar agora no WhatsApp
      </Button>
    </div>
  );
};

export default StickyWhatsApp;
