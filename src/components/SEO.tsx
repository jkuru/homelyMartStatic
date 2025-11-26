import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Homely Mart - Indian Grocery Store in Kollad, Kottayam | 2500+ Products",
  description = "Homely Mart is your trusted Indian grocery store in Kollad, Kottayam. Shop from 2500+ authentic Indian groceries including Aashirvaad Atta, Amul products, spices, and more. Order via WhatsApp at +91 7736 095 300.",
  keywords = "Indian grocery store Kottayam, Indian groceries Kollad, Homely Mart, Aashirvaad Atta, Amul products, Indian spices, grocery store near me, Kerala grocery, authentic Indian food",
  image = "/og-image.jpg",
  url = "https://homelymart.com"
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic SEO meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Homely Mart');
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    
    // Open Graph meta tags for social sharing
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'Homely Mart', true);
    setMetaTag('og:locale', 'en_IN', true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Additional SEO tags
    setMetaTag('geo.region', 'IN-KL');
    setMetaTag('geo.placename', 'Kollad, Kottayam');
    setMetaTag('geo.position', '9.5916;76.5222'); // Approximate coordinates for Kottayam
    setMetaTag('ICBM', '9.5916, 76.5222');

    // Mobile optimization
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';

    // Theme color
    let themeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    themeColor.content = '#f97316'; // Orange color from your brand

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, image, url]);

  return null;
}
