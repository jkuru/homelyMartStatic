import { ProductCard } from "./ProductCard";
import attaImg from "figma:asset/90b09b777b070575eedd08f43b07417a18e79782.png";
import chocolateImg from "figma:asset/21e65c312869ff193e31b96d475f7bdd0ca85a95.png";
import foggImg from "figma:asset/3d255b42b014cbce79a10ce0ac389baad0e3263d.png";
import premierImg from "figma:asset/d8faf07a13336ea5d0748d7e22b2e4f20d356feb.png";
import nanProImg from "figma:asset/32cc5bee4c13da96ad444bf2e713a63c4f9df8c0.png";
import kitkatImg from "figma:asset/e5d05ee4a06a09355bfa8e5afbd87c388de7df5b.png";

const products = [
  {
    id: 1,
    name: "Aashirvaad Atta",
    description: "Superior MP Atta, 100% whole wheat flour",
    price: "₹450",
    image: attaImg,
  },
  {
    id: 2,
    name: "Amul Milk Chocolate",
    description: "Smooth and creamy milk chocolate",
    price: "₹120",
    image: chocolateImg,
  },
  {
    id: 3,
    name: "Fogg Body Spray",
    description: "Fragrance body spray - Nice",
    price: "₹280",
    image: foggImg,
  },
  {
    id: 4,
    name: "Premier Tissues",
    description: "Kitchen towel & toilet tissue combo",
    price: "₹150",
    image: premierImg,
  },
  {
    id: 5,
    name: "Nestlé NAN PRO 3",
    description: "Follow-up formula powder for 12-18 months",
    price: "₹95",
    image: nanProImg,
  },
  {
    id: 6,
    name: "KitKat Chocolate",
    description: "Crispy wafer chocolate bar",
    price: "₹140",
    image: kitkatImg,
  },
];

export function ProductGrid() {
  return (
    <section id="products" className="py-16 bg-white" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="products-heading" className="text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of authentic Indian groceries. We stock over 2500+ products 
            from trusted suppliers, all guaranteed fresh. Here are some samples from our collection.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}