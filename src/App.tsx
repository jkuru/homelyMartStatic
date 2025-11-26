import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { WhatsAppSection } from "./components/WhatsAppSection";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { StructuredData } from "./components/StructuredData";

export default function App() {
  return (
    <>
      <SEO />
      <StructuredData />
      <div className="min-h-screen bg-white">
        <Header />
        <main role="main">
          <Hero />
          <ProductGrid />
          <WhatsAppSection />
        </main>
        <Footer />
      </div>
    </>
  );
}