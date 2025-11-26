import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Local Business structured data
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "GroceryStore",
      "name": "Homely Mart",
      "image": "https://homelymart.com/logo.png",
      "description": "Authentic Indian grocery store offering 2500+ products including fresh groceries, spices, dairy products, and household essentials in Kollad, Kottayam.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kollad",
        "addressLocality": "Kottayam",
        "addressRegion": "Kerala",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.5916",
        "longitude": "76.5222"
      },
      "telephone": ["+91 7736 095 300", "+91 0481-2340 200"],
      "priceRange": "₹",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "21:00"
        }
      ],
      "paymentAccepted": "Cash, UPI, Card",
      "currenciesAccepted": "INR",
      "areaServed": {
        "@type": "City",
        "name": "Kottayam"
      }
    };

    // Organization structured data
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Homely Mart",
      "url": "https://homelymart.com",
      "logo": "https://homelymart.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7736 095 300",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Malayalam"]
      },
      "sameAs": []
    };

    // Website structured data
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Homely Mart",
      "url": "https://homelymart.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://homelymart.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Breadcrumb structured data
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://homelymart.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://homelymart.com#products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Contact",
          "item": "https://homelymart.com#contact"
        }
      ]
    };

    // Create or update script tag with all schemas
    let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    // Combine all schemas into a graph
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        localBusinessSchema,
        organizationSchema,
        websiteSchema,
        breadcrumbSchema
      ]
    });

    return () => {
      // Cleanup on unmount
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}
