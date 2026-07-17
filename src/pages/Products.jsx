import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

export default function Products() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;

  });

  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

<>
<h1 className="text-5xl md:text-6xl font-black text-white">
  Our Products
</h1>

  <p className="text-emerald-400 uppercase tracking-[4px] font-semibold">
    Industrial Machinery Collection
  </p>

  
</>

      <div className="mt-10">
        <SearchBar
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="mt-8">
        <CategoryFilter
          selected={category}
          setSelected={setCategory}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}