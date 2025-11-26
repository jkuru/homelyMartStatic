import { ShoppingBasket, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/7a24118728234fed1d64b757a10cb260e368528c.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" aria-label="Homely Mart - Home">
              <img src={logo} alt="Homely Mart Logo" className="h-12 w-auto" />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors" aria-label="View our products">
              Products
            </a>
            <a href="#order" className="text-gray-700 hover:text-orange-600 transition-colors" aria-label="Learn how to order">
              How to Order
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors" aria-label="Contact us">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              <a 
                href="#products" 
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={handleLinkClick}
                aria-label="View our products"
              >
                Products
              </a>
              <a 
                href="#order" 
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={handleLinkClick}
                aria-label="Learn how to order"
              >
                How to Order
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={handleLinkClick}
                aria-label="Contact us"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}