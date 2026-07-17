import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <div className="text-center">

        <p className="text-blue-700 font-semibold uppercase">
          Our Products
        </p>

        <h2 className="text-4xl font-bold mt-3">
          Featured Machines
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Explore some of our most popular food processing and packaging
          machines designed for commercial and industrial applications.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}