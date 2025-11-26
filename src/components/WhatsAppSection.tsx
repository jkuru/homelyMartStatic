import { MessageCircle, ClipboardList, ShoppingBag, CheckCircle } from "lucide-react";

export function WhatsAppSection() {
  return (
    <section id="order" className="py-16 bg-gradient-to-b from-white to-orange-50" aria-labelledby="order-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="size-8 text-green-600" aria-hidden="true" />
            <h2 id="order-heading" className="text-gray-900">How to Order</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ordering is simple! Just follow these easy steps to place your order via WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClipboardList className="size-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-gray-900 mb-2">Step 1</h3>
            <p className="text-sm text-gray-600">
              Make a list of items you need and we will deliver it
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="size-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-gray-900 mb-2">Step 2</h3>
            <p className="text-sm text-gray-600">
              Send us a message on WhatsApp with your product list
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="size-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-gray-900 mb-2">Step 3</h3>
            <p className="text-sm text-gray-600">
              We'll confirm availability and total amount with you
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="size-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 className="text-gray-900 mb-2">Step 4</h3>
            <p className="text-sm text-gray-600">
              Confirm your order and receive delivery details
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-200">
          <div className="text-center">
            <MessageCircle className="size-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-gray-900 mb-4">Ready to Order?</h3>
            <p className="text-gray-600 mb-6">
              Contact us on WhatsApp to place your order. Our team will assist you promptly!
            </p>
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-700 mb-2">WhatsApp Number</p>
              <a href="https://wa.me/917736095300" className="text-2xl text-green-600 hover:text-green-700 transition-colors" aria-label="Contact us on WhatsApp">
                +91 7736 095 300
              </a>
            </div>
            <p className="text-xs text-gray-500">
              <time>Available: Monday - Saturday, 9:00 AM - 8:00 PM</time>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}