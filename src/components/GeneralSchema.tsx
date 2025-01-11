import Script from "next/script";

const GeneralSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sunshine Bakery",
    url: "https://www.sunshinebakery.com",
    logo: "https://www.sunshinebakery.com/logo.svg",
    image: "https://www.sunshinebakery.com/sunshine-bakery-storefront.jpg",
    description:
      "Sunshine Bakery specializes in artisanal bread, pastries, and custom cakes for all occasions in the heart of Miami.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "789 Ocean Drive",
      addressLocality: "Miami Beach",
      addressRegion: "FL",
      postalCode: "33139",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-305-555-7890",
      contactType: "Customer Service",
      areaServed: "Miami-Dade County",
      availableLanguage: ["English", "Spanish"],
    },
    telephone: "+1-305-555-7890",
    priceRange: "$$",
    openingHours: ["Mo-Sa 07:00-20:00", "Su 08:00-18:00"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.7817",
      longitude: "-80.1320",
    },
    sameAs: [
      "https://www.facebook.com/sunshinebakerymiami",
      "https://www.instagram.com/sunshinebakery_mia/",
      "https://www.pinterest.com/sunshinebakerymiami/",
      "https://twitter.com/sunshinebakery",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Cake Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Artisanal Sourdough Bread",
        },
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "203",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default GeneralSchema;
