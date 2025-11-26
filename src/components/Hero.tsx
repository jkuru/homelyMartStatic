import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/7d364385c5160ae7bf10d19546663c60a6532ca8.png";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-orange-50 to-white py-16 md:py-24" aria-label="Hero section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-orange-600 mb-4">
              Fresh Indian Groceries Delivered
            </h2>
            <p className="text-gray-600 mb-8">
              Discover authentic spices, lentils, rice, and specialty ingredients from India. 
              Quality products at great prices, delivered with care to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-2xl text-orange-600">2500+</p>
                <p className="text-sm text-gray-600">Products</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-2xl text-orange-600">Fresh</p>
                <p className="text-sm text-gray-600">Quality</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <p className="text-2xl text-orange-600">Fast</p>
                <p className="text-sm text-gray-600">Delivery</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Fresh vegetables, lemons, and ingredients at Homely Mart grocery store"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}