# Coyot's Motos

Conversion-focused web application developed for **Coyot's Motos**, a motorcycle parts and accessories retailer based in Vilhena, Rondônia, Brazil.

The project combines a high-intent acquisition landing page with a dedicated contact hub, local SEO, multiple physical store locations and conversion tracking for Google Ads and analytics.

🌐 **Production:** https://www.coyotsmotos.com.br  
📦 **Repository:** https://github.com/webkauadev/coyots-motos

---

## Overview

Coyot's Motos was built as a digital acquisition endpoint for users actively searching for motorcycle parts, maintenance products and accessories.

The main application focuses on a short conversion journey:

```text
Search / Paid Traffic
        │
        ▼
   Landing Page
        │
        ├── Value Proposition
        ├── Product Categories
        ├── Physical Stores
        ├── Trust Signals
        └── FAQ
        │
        ▼
   WhatsApp CTA
        │
        ▼
Commercial Conversation
````

The project intentionally avoids complex checkout or registration flows.

Instead, commercial interaction is centralized through direct contact channels, primarily WhatsApp.

---

## Main Features

* Conversion-focused single-page landing page
* Mobile-first responsive interface
* Direct WhatsApp integration
* Persistent mobile WhatsApp CTA
* Product category navigation
* Two physical store locations
* Dedicated `/links` contact hub
* Multiple WhatsApp destinations
* Phone contact
* Mercado Livre integration
* Google location shortcut
* Google Ads conversion tracking
* GA4-compatible events
* GTM / `dataLayer` event tracking
* LocalBusiness structured data
* Dynamic SEO metadata
* Responsive 404 route
* Custom UI components
* Accessible interactive elements

---

## Application Routes

The application uses React Router and currently exposes three routing states.

```text
/
├── Main acquisition landing page
│
/links
├── Contact and external-channel hub
│
*
└── 404 fallback
```

### `/`

Main conversion-oriented landing page.

The page is composed of:

```text
SEO
Header
Hero
How It Works
Categories
Store Locations
Trust
FAQ
Footer
Sticky WhatsApp CTA
```

### `/links`

Dedicated contact hub used to centralize Coyot's Motos communication and sales channels.

Available destinations include:

* Wholesale phone line
* Wholesale WhatsApp
* Downtown store WhatsApp
* Workshop WhatsApp
* VIP WhatsApp group
* Mercado Livre
* Store location

All supported link interactions can be individually identified by the tracking layer.

---

## Conversion Flow

The homepage is designed around users with high purchase intent.

```text
User Need
   │
   ▼
Value Proposition
   │
   ▼
Available Categories
   │
   ▼
Store / Trust Information
   │
   ▼
WhatsApp
   │
   ▼
Sales Team
```

The primary CTA opens the company's WhatsApp directly.

The same conversion action is reused throughout multiple sections to keep the commercial path accessible regardless of scroll position.

---

## Product Categories

The current application organizes products into six main categories:

```text
Transmission Kits
Oils & Lubricants
Maintenance Parts
Accessories
Helmets
Electrical & Lighting
```

Category cards also act as conversion entry points and redirect users directly to WhatsApp.

---

## Store Locations

The application includes information for two Coyot's Motos locations in Vilhena/RO.

### Wholesale Unit

```text
Av. Jô Sato, 721
Jardim Eldorado
Vilhena - RO
CEP 76980-611
```

### Downtown Unit

```text
Av. Marechal Rondon, 4068
Centro
Vilhena - RO
CEP 76980-000
```

Each unit is presented with store imagery and location information while maintaining direct access to the primary WhatsApp conversion channel.

---

## Tracking Architecture

The application includes a custom tracking layer implemented in:

```text
src/lib/tracking.ts
```

The tracking system supports:

* `dataLayer`
* Google Tag Manager compatible events
* Google Analytics 4 events
* Google Ads conversions
* Channel-specific click tracking

### Generic Link Event

Every supported external link can trigger:

```javascript
{
  event: "link_click",
  link_type: "...",
  link_label: "...",
  link_url: "..."
}
```

---

## WhatsApp Tracking

WhatsApp interactions generate a dedicated event:

```javascript
{
  event: "whatsapp_click",
  whatsapp_type: "...",
  whatsapp_label: "..."
}
```

The WhatsApp conversion flow can also trigger a Google Ads conversion through `gtag`.

```text
CTA Click
   │
   ├── dataLayer: link_click
   │
   ├── dataLayer: whatsapp_click
   │
   ├── GA4: link_click / whatsapp_click
   │
   └── Google Ads conversion
   │
   ▼
WhatsApp
```

---

## Tracked Link Types

The tracking implementation currently supports:

```text
whatsapp
whatsapp_atacado
whatsapp_oficina
whatsapp_centro
whatsapp_grupo
mercadolivre
instagram
location
phone
```

This allows acquisition and outbound traffic to be segmented by destination instead of being treated as a single generic click event.

---

## Google Ads Integration

The frontend includes a Google Ads conversion tracking helper.

The implementation uses:

```javascript
window.gtag("event", "conversion", {
  send_to: `${GOOGLE_ADS_CONVERSION_ID}/${conversionLabel}`,
  value: 1.0,
  currency: "BRL"
});
```

WhatsApp CTA interactions are connected to this conversion layer.

> Conversion IDs and labels should be reviewed before deploying new environments or campaign configurations.

---

## Analytics Integration

When `gtag` is available, the application emits analytics events for link interactions.

Example:

```javascript
window.gtag("event", "link_click", {
  event_category: "conversion",
  event_label: linkLabel,
  link_type: linkType
});
```

The main WhatsApp utility also emits:

```text
whatsapp_click
```

as a dedicated conversion event.

---

## SEO

SEO metadata is managed through `react-helmet-async`.

The default metadata currently targets local motorcycle-parts searches in Vilhena.

### Default Title

```text
Atacado de Peças de Moto em Vilhena | Coyot's Motos
```

### Default Description

```text
Compre peças e acessórios para motos em Vilhena.
Atendimento rápido no WhatsApp.
Orçamento e disponibilidade na hora.
Coyot's Motos.
```

The application also defines:

* Canonical URL
* Robots metadata
* Open Graph title
* Open Graph description
* Open Graph locale
* Structured data

---

## Structured Data

The SEO component generates JSON-LD using the Schema.org `LocalBusiness` schema.

Example structure:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Coyot's Motos",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Vilhena",
    "addressRegion": "RO",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "City",
    "name": "Vilhena"
  }
}
```

This provides search engines with additional information about the company's local presence.

---

## Tech Stack

### Core

* React 18
* TypeScript
* Vite
* React DOM

### Styling

* Tailwind CSS
* PostCSS
* Autoprefixer
* tailwindcss-animate
* class-variance-authority
* clsx
* tailwind-merge

### UI

* shadcn/ui
* Radix UI
* Lucide React

### Routing

* React Router DOM

### SEO

* React Helmet Async

### State / Async Infrastructure

* TanStack React Query

### Validation / Forms

* React Hook Form
* Zod
* Hookform Resolvers

### Development

* ESLint
* TypeScript ESLint
* SWC
* Vite React SWC Plugin

---

## Architecture

The source code follows a component-oriented React structure.

```text
src/
├── assets/
│
├── components/
│   ├── ui/
│   │
│   ├── Categories.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── LinkButton.tsx
│   ├── NavLink.tsx
│   ├── SEO.tsx
│   ├── StickyWhatsApp.tsx
│   ├── StoreLocations.tsx
│   └── Trust.tsx
│
├── hooks/
│
├── lib/
│   ├── tracking.ts
│   ├── whatsapp.ts
│   └── utils.ts
│
├── pages/
│   ├── Index.tsx
│   ├── Links.tsx
│   └── NotFound.tsx
│
├── App.tsx
├── index.css
├── main.tsx
└── vite-env.d.ts
```

---

## Component Architecture

The landing page is assembled from independent domain-oriented components.

```text
Index
 │
 ├── SEO
 ├── Header
 ├── Hero
 ├── HowItWorks
 ├── Categories
 ├── StoreLocations
 ├── Trust
 ├── FAQ
 ├── Footer
 └── StickyWhatsApp
```

This approach keeps presentation and business-specific sections isolated while allowing shared tracking and utility logic to remain centralized.

---

## Shared Tracking Layer

Rather than implementing analytics logic directly inside each UI component, reusable tracking helpers are centralized inside:

```text
src/lib/tracking.ts
src/lib/whatsapp.ts
```

UI components call these utilities before redirecting users to external conversion destinations.

Example:

```typescript
const handleWhatsAppClick = () => {
  trackWhatsAppClick();
  window.open(WHATSAPP_LINK, "_blank");
};
```

This keeps conversion behavior consistent across different sections of the application.

---

## UI System

The project uses a reusable component system based on shadcn/ui and Radix UI.

The dependency set includes primitives for:

* Accordions
* Dialogs
* Dropdown menus
* Tooltips
* Tabs
* Toasts
* Navigation
* Selects
* Checkboxes
* Sliders
* Popovers
* Scroll areas
* Switches
* Alerts

The current marketing interface uses only a subset of these components, while the shared UI layer allows the application to be expanded without rebuilding base interaction primitives.

---

## Responsive Design

The frontend uses Tailwind responsive utilities throughout the application.

Examples of responsive behavior include:

```text
Mobile
   ↓
Single-column content
Persistent WhatsApp access
Compact typography
Touch-oriented CTAs

Desktop
   ↓
Multi-column layouts
Expanded spacing
Larger typography
Horizontal CTA groups
```

The main content also adds bottom spacing on mobile to prevent the persistent WhatsApp action from overlapping page content.

---

## Development

### Requirements

* Node.js
* npm

---

### Clone

```bash
git clone https://github.com/webkauadev/coyots-motos.git
```

```bash
cd coyots-motos
```

---

### Install Dependencies

```bash
npm install
```

---

### Start Development Server

```bash
npm run dev
```

Vite will start the local development environment.

---

## Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Generates an optimized production build.

### Development Build

```bash
npm run build:dev
```

Builds the application using Vite's development mode.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

### Preview

```bash
npm run preview
```

Serves the production build locally for validation.

---

## Production Build

Create the optimized build:

```bash
npm run build
```

The generated application is output to:

```text
dist/
```

Preview it locally with:

```bash
npm run preview
```

---

## Deployment

Current production environment:

```text
https://www.coyotsmotos.com.br
```

Before deployment, validate:

```text
[ ] Production build completes successfully
[ ] Main route loads correctly
[ ] /links route loads correctly
[ ] 404 fallback works
[ ] WhatsApp links are correct
[ ] Store information is current
[ ] Google Ads conversion configuration is valid
[ ] GA4 / GTM tracking is active
[ ] SEO metadata is correct
[ ] Structured data contains production information
[ ] Mobile CTA does not overlap content
[ ] External links open correctly
```

---

## Important Configuration

Some commercial and analytics values are currently defined directly in the frontend source.

Before deploying the application to another environment, review:

```text
src/lib/whatsapp.ts
src/lib/tracking.ts
src/components/SEO.tsx
src/pages/Links.tsx
```

These files contain application-specific information such as:

* WhatsApp destinations
* Phone numbers
* Google Ads configuration
* External marketplace URLs
* Store contact channels
* SEO information
* Structured data

---

## Security Notes

This project is a client-side application.

Any value included in the frontend bundle must be considered public.

Do not store:

```text
Private API keys
Access tokens
Authentication secrets
Private credentials
Sensitive customer data
```

inside frontend source files.

Google Ads IDs, analytics IDs and public contact information may be exposed by design, but secret credentials must remain server-side.

---

## Business Context

Coyot's Motos operates in the motorcycle parts and accessories segment in Vilhena/RO.

The application supports multiple parts of the commercial operation:

```text
Wholesale
Retail Store
Workshop
Marketplace
WhatsApp Sales
Local Discovery
VIP Community
```

The digital architecture connects those destinations while maintaining WhatsApp as the primary conversion path.

---

## Project Goals

The project was built to:

1. Capture high-intent local search traffic.
2. Reduce friction between product search and sales contact.
3. Centralize the main commercial channels.
4. Measure WhatsApp and outbound interactions.
5. Support Google Ads conversion optimization.
6. Strengthen local SEO.
7. Provide a fast mobile-first buying experience.
8. Connect physical store operations with digital acquisition.

---

## Author

**Kauã Fernandes**

Software Development · Systems · Integrations · Automation

🌐 [https://kauadev.net.br](https://kauadev.net.br)
📧 [contato@kauadev.net.br](mailto:contato@kauadev.net.br)
💻 [https://github.com/webkauadev](https://github.com/webkauadev)
Esse é o padrão que devemos usar nos próximos: **primeiro código real, depois README**.
```
