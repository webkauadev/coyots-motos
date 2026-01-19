// Tracking utilities for GTM/dataLayer and Google Ads

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

// Google Ads Conversion IDs - replace with your actual conversion IDs
const GOOGLE_ADS_CONVERSION_ID = 'AW-17812104305';
const WHATSAPP_CONVERSION_LABEL = 'whatsapp_click'; // Replace with actual label from Google Ads
const FORM_CONVERSION_LABEL = 'form_submit'; // Replace with actual label from Google Ads

export type LinkType = 'whatsapp' | 'whatsapp_atacado' | 'whatsapp_oficina' | 'whatsapp_centro' | 'whatsapp_grupo' | 'mercadolivre' | 'instagram' | 'location' | 'phone';

interface TrackLinkClickParams {
  linkType: LinkType;
  linkLabel: string;
  linkUrl: string;
}

// Track Google Ads conversion
export const trackGoogleAdsConversion = (conversionLabel: string, value?: number) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'conversion', {
    send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
    value: value || 1.0,
    currency: 'BRL',
  });
};

// Track WhatsApp click as Google Ads conversion
export const trackWhatsAppConversion = () => {
  trackGoogleAdsConversion(WHATSAPP_CONVERSION_LABEL);
};

// Track form submission as Google Ads conversion
export const trackFormConversion = (formName?: string) => {
  trackGoogleAdsConversion(FORM_CONVERSION_LABEL);
  
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'form_submit',
      form_name: formName || 'contact_form',
    });
  }
};

export const trackLinkClick = ({ linkType, linkLabel, linkUrl }: TrackLinkClickParams) => {
  if (typeof window === 'undefined') return;

  // Initialize dataLayer if not exists
  window.dataLayer = window.dataLayer || [];

  // Push generic link_click event
  window.dataLayer.push({
    event: 'link_click',
    link_type: linkType,
    link_label: linkLabel,
    link_url: linkUrl,
  });

  // Push specific event based on link type
  if (linkType.startsWith('whatsapp')) {
    window.dataLayer.push({
      event: 'whatsapp_click',
      whatsapp_type: linkType,
      whatsapp_label: linkLabel,
    });
    // Track as Google Ads conversion
    trackWhatsAppConversion();
  } else if (linkType === 'mercadolivre') {
    window.dataLayer.push({
      event: 'mercadolivre_click',
      ml_label: linkLabel,
    });
  } else if (linkType === 'instagram') {
    window.dataLayer.push({
      event: 'instagram_click',
    });
  } else if (linkType === 'location') {
    window.dataLayer.push({
      event: 'location_click',
    });
  } else if (linkType === 'phone') {
    window.dataLayer.push({
      event: 'phone_click',
    });
  }

  // Google Analytics 4 (if available)
  if (window.gtag) {
    window.gtag('event', 'link_click', {
      event_category: 'conversion',
      event_label: linkLabel,
      link_type: linkType,
    });
  }
};
