import { SITE } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    foundingDate: SITE.founded,
    email: SITE.email,
    sameAs: [SITE.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#localbusiness`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    image: `${SITE.url}/og.png`,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    areaServed: [
      { "@type": "Country", name: "South Africa" },
      { "@type": "Place", name: "Cape Town" },
      { "@type": "Place", name: "Johannesburg" },
    ],
    sameAs: [SITE.instagram],
  };

  const services = [
    "Strategy Creation",
    "Paid Advertising",
    "Creative Media Content",
    "Business Analysis",
    "Website Development",
  ].map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: s,
    provider: { "@id": `${SITE.url}#organization` },
    areaServed: { "@type": "Country", name: "South Africa" },
  }));

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}#organization` },
    inLanguage: "en-ZA",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, breadcrumb, ...services],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
