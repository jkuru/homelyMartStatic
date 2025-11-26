import { ShoppingBasket, MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "figma:asset/7a24118728234fed1d64b757a10cb260e368528c.png";

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Homely Mart Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-400">
              Your trusted source for authentic Indian groceries. Quality products, 
              competitive prices, and excellent service.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Contact Information</h4>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="size-4 text-orange-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>Kollad, Kottayam, Kerala, India</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="size-4 text-orange-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p><a href="tel:+917736095300" className="hover:text-orange-500 transition-colors">+91 7736 095 300</a></p>
                    <p><a href="tel:+914812340200" className="hover:text-orange-500 transition-colors">+91 0481-2340 200</a></p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="size-4 text-orange-500 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span>homelymartkottayam.in</span>
                </li>
              </ul>
            </address>
          </div>

          <div>
            <h4 className="text-white mb-4">Business Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="size-4 text-orange-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p>Monday - Saturday</p>
                  <p className="text-gray-400"><time>9:00 AM - 8:00 PM</time></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 text-orange-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p>Sunday</p>
                  <p className="text-gray-400"><time>10:00 AM - 6:00 PM</time></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Homely Mart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}