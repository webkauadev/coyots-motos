import { trackWhatsAppConversion } from './tracking';

// WhatsApp configuration
export const WHATSAPP_NUMBER = "5569844948446";
export const WHATSAPP_MESSAGE = "Olá! Quero orçar uma peça para minha moto.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// Tracking event for WhatsApp clicks
export const trackWhatsAppClick = () => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'whatsapp_click', {
      event_category: 'conversion',
      event_label: 'WhatsApp CTA Click',
    });
  }
  
  // Google Ads conversion
  trackWhatsAppConversion();
};
