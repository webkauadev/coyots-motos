import { MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINK, trackWhatsAppClick } from "@/lib/whatsapp";

const faqs = [
  {
    question: "Vocês vendem no atacado e no varejo?",
    answer: "Sim — informe no WhatsApp se é compra para uso próprio ou para revenda e a gente orienta a melhor condição.",
  },
  {
    question: "O que preciso enviar para cotar a peça certa?",
    answer: "Marca/modelo/ano da moto e a peça desejada. Se puder, envie foto para agilizar.",
  },
  {
    question: "Tem pronta entrega?",
    answer: "Depende do item — confirmamos disponibilidade e prazo diretamente no WhatsApp.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Confirmamos as opções no WhatsApp no momento do orçamento.",
  },
];

const FAQ = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading uppercase mb-4">
            Dúvidas <span className="text-primary">Rápidas</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale diretamente conosco!
          </p>
          <Button variant="whatsapp" size="xl" onClick={handleWhatsAppClick}>
            <MessageCircle className="w-6 h-6" />
            Falar agora no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
