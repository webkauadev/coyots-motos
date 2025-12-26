// Tracking utilities for GTM/dataLayer

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type LinkType = 'whatsapp' | 'whatsapp_atacado' | 'whatsapp_oficina' | 'mercadolivre' | 'instagram' | 'location';

interface TrackLinkClickParams {
  linkType: LinkType;
  linkLabel: string;
  linkUrl: string;
}

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
