import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article 
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={product.image}
          alt={`${product.name} - ${product.description} available at Homely Mart`}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          itemProp="image"
        />
      </div>
      <div className="p-5">
        <h3 className="text-gray-900 mb-2" itemProp="name">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4" itemProp="description">{product.description}</p>
        <div className="flex items-center justify-end">
          <span className="text-xs text-gray-500" itemProp="availability" content="https://schema.org/InStock">
            In Stock
          </span>
        </div>
      </div>
    </article>
  );
}