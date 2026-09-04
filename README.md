# Remix of Coyot's WhatsApp Drive

{
  "project_name": "Coyot's Motos - LP Google Search (WhatsApp)",
  "goal": "Converter cliques do Google Search em conversas no WhatsApp para compra/orçamento de peças de moto (intenção alta).",
  "context": {
    "traffic_source": "Google Ads Search",
    "search_intent": "Fundo de funil / compra imediata",
    "example_keywords": [
      "atacado de peças de moto vilhena",
      "autopeças de moto vilhena",
      "peças de moto vilhena",
      "comprar peças de moto vilhena",
      "kit transmissão vilhena",
      "óleo de moto vilhena",
      "capacete vilhena"
    ],
    "audience": {
      "location": "Vilhena - RO (e região, se aplicável)",
      "age_range": "20-45",
      "profile": "motociclistas (uso diário e entusiastas), buscando preço, disponibilidade e rapidez"
    }
  },
  "primary_conversion": {
    "type": "Click-to-WhatsApp",
    "whatsapp_link": "{{WHATSAPP_LINK}}",
    "cta_label_primary": "Falar agora no WhatsApp",
    "cta_label_secondary": "Pedir orçamento no WhatsApp",
    "sticky_cta_mobile": true
  },
  "page_type": "single_page_landing",
  "requirements": {
    "mobile_first": true,
    "load_fast": true,
    "no_forms": true,
    "no_external_navigation": true,
    "no_black_friday_messaging": true,
    "single_goal_focus": true,
    "accessible_contrast": true
  },
  "brand": {
    "name": "Coyot's Motos",
    "segment": "Autopeças e acessórios para motos",
    "proof_points": [
      "18 anos de mercado (se confirmado)",
      "loja física em Vilhena",
      "atendimento rápido pelo WhatsApp",
      "peças e acessórios para várias marcas"
    ],
    "tone": "Direto, comercial e confiável. Pouca enrolação. Linguagem simples e objetiva."
  },
  "design": {
    "style": "automotivo, profissional, alto contraste, direto ao ponto",
    "colors": {
      "primary": "#D00000",
      "background": "#0B0B0B",
      "text": "#FFFFFF",
      "muted": "#B8B8B8",
      "surface": "#141414"
    },
    "typography": {
      "headline": "bold, grande, legível",
      "body": "simples, curto, escaneável"
    },
    "imagery": {
      "hero_image": "imagem de contexto automotivo (moto/oficina/peças) com fundo escuro e aspecto metálico. Evitar poluição visual.",
      "trust_images": "opcional: foto da loja/equipe/ambiente para aumentar confiança"
    },
    "components": [
      "header minimal (logo + telefone opcional)",
      "hero com CTA",
      "cards de benefícios",
      "grid de categorias",
      "bloco FAQ",
      "rodapé com dados básicos"
    ]
  },
  "seo": {
    "title": "Atacado de Peças de Moto em Vilhena | Coyot's Motos",
    "meta_description": "Compre peças e acessórios para motos em Vilhena. Atendimento rápido no WhatsApp. Orçamento e disponibilidade na hora. Coyot's Motos.",
    "h1": "Atacado de Peças de Moto em Vilhena",
    "local_seo": {
      "business_name": "Coyot's Motos",
      "city": "Vilhena - RO",
      "structured_data": true
    }
  },
  "sections": [
    {
      "id": "hero",
      "type": "hero",
      "headline": "Atacado de Peças de Moto em Vilhena",
      "subheadline": "Peças, acessórios e itens de manutenção com atendimento rápido no WhatsApp. Peça orçamento e confira disponibilidade na hora.",
      "bullets": [
        "✅ Atendimento rápido",
        "✅ Loja física em Vilhena",
        "✅ Peças e acessórios para diversas motos",
        "✅ Preço justo e orientação na compra"
      ],
      "primary_cta": "{{CTA_PRIMARY}}",
      "secondary_cta": "Ver categorias de peças"
    },
    {
      "id": "how_it_works",
      "type": "steps",
      "title": "Como comprar pelo WhatsApp",
      "steps": [
        {
          "title": "1) Chame no WhatsApp",
          "text": "Clique no botão e fale com a equipe."
        },
        {
          "title": "2) Envie a peça/modelo",
          "text": "Informe a moto (marca/modelo/ano) e o que precisa."
        },
        {
          "title": "3) Receba orçamento e disponibilidade",
          "text": "A gente confirma valor e opções na hora."
        }
      ],
      "note": "Dica: se tiver, envie foto da peça ou do documento da moto para agilizar."
    },
    {
      "id": "categories",
      "type": "grid",
      "title": "O que você encontra aqui",
      "items": [
        {
          "title": "Kits de Transmissão",
          "text": "corrente, coroa, pinhão e conjuntos"
        },
        {
          "title": "Óleos e Lubrificantes",
          "text": "óleo de motor, fluídos e itens de manutenção"
        },
        {
          "title": "Peças de Manutenção",
          "text": "freios, cabos, filtros, velas, rolamentos etc."
        },
        {
          "title": "Acessórios",
          "text": "itens para personalização e uso diário"
        },
        {
          "title": "Capacetes",
          "text": "opções variadas (conforme disponibilidade)"
        },
        {
          "title": "Elétrica e Iluminação",
          "text": "lâmpadas, setas, baterias e afins"
        }
      ],
      "cta": "{{CTA_PRIMARY}}"
    },
    {
      "id": "trust",
      "type": "proof",
      "title": "Por que comprar na Coyot's Motos",
      "proof_points": [
        "Tradição e confiança (18 anos de mercado, se confirmado)",
        "Atendimento rápido e orientação para comprar a peça certa",
        "Opções para diferentes modelos e necessidades",
        "Transparência no orçamento e na disponibilidade"
      ],
      "cta": "{{CTA_SECONDARY}}"
    },
    {
      "id": "faq",
      "type": "faq",
      "title": "Dúvidas rápidas",
      "items": [
        {
          "q": "Vocês vendem no atacado e no varejo?",
          "a": "Sim — informe no WhatsApp se é compra para uso próprio ou para revenda e a gente orienta a melhor condição."
        },
        {
          "q": "O que preciso enviar para cotar a peça certa?",
          "a": "Marca/modelo/ano da moto e a peça desejada. Se puder, envie foto para agilizar."
        },
        {
          "q": "Tem pronta entrega?",
          "a": "Depende do item — confirmamos disponibilidade e prazo diretamente no WhatsApp."
        },
        {
          "q": "Formas de pagamento?",
          "a": "Confirmamos as opções no WhatsApp no momento do orçamento."
        }
      ],
      "cta": "{{CTA_PRIMARY}}"
    },
    {
      "id": "footer",
      "type": "footer",
      "items": [
        "Coyot's Motos — Autopeças e acessórios para motos",
        "📍 Vilhena - RO (ajuste se atender região)",
        "📲 Atendimento via WhatsApp"
      ],
      "legal": "Este site tem objetivo informativo e de contato. Você pode encerrar a conversa quando quiser."
    }
  ],
  "copy_placeholders": {
    "CTA_PRIMARY": "Falar agora no WhatsApp",
    "CTA_SECONDARY": "Pedir orçamento no WhatsApp",
    "WHATSAPP_LINK": "https://wa.me/55SEUNUMEROAQUI?text=Ol%C3%A1%21%20Quero%20or%C3%A7ar%20uma%20pe%C3%A7a%20para%20minha%20moto."
  },
  "tracking": {
    "allow_placeholders": true,
    "placeholders": {
      "gtm_id": "{{GTM_ID}}",
      "google_ads_conversion_id": "{{GOOGLE_ADS_CONVERSION_ID}}",
      "google_ads_conversion_label": "{{GOOGLE_ADS_CONVERSION_LABEL}}"
    },
    "events": [
      {
        "name": "whatsapp_click",
        "trigger": "click on WhatsApp CTA",
        "notes": "Disparar conversão no Google Ads e evento no GA4 (se configurado)."
      }
    ],
    "utm_support": true
  },
  "acceptance_criteria": [
    "A página carrega rápido e é extremamente clara em até 5 segundos.",
    "Existe CTA de WhatsApp acima da dobra e CTA fixo no mobile.",
    "Não há formulários nem links que desviem o usuário do objetivo.",
    "Conteúdo curto, escaneável e focado em intenção de compra.",
    "SEO local básico aplicado (Title, H1, Meta description e dados do negócio)."
  ]
}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://coyot-direct-chat.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1ecc9f42-2d7a-4309-864f-147bfba8d2d3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
