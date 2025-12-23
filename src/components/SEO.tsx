import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO = ({
  title = "Atacado de Peças de Moto em Vilhena | Coyot's Motos",
  description = "Compre peças e acessórios para motos em Vilhena. Atendimento rápido no WhatsApp. Orçamento e disponibilidade na hora. Coyot's Motos.",
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Coyot's Motos",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vilhena",
      "addressRegion": "RO",
      "addressCountry": "BR"
    },
    "telephone": "+55SEUNUMEROAQUI",
    "priceRange": "$$",
    "image": "/og-image.png",
    "areaServed": {
      "@type": "City",
      "name": "Vilhena"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://coyotsmotos.com.br" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
