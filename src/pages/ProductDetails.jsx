import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useState } from "react";
import InquiryModal from "../components/InquiryModal";


export default function ProductDetails() {
  const { slug } = useParams();
  const [openInquiry, setOpenInquiry] = useState(false);
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-20">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-16">
  
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl"
        />
        <div>

          <h1 className="text-4xl font-black text-white">
            {product.name}
          </h1>

          <p className="inline-block mt-5 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold">
            {product.category}
          </p>

          <p className="mt-8 text-slate-300 leading-8 text-lg">
            {product.description}
          </p>

          <button
  onClick={() => setOpenInquiry(true)}
  className="mt-10 bg-emerald-500 text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-emerald-400 transition"
>
  Request a Quote
</button>

        </div>
</div>
      </div>

      {/* Applications */}

      {product.applications?.length > 0 && (
        <div className="mt-16">

          <h2 className="text-3xl font-bold text-white mb-8">
            Applications
          </h2>

          <ul className="grid md:grid-cols-3 gap-3">

            {product.applications.map((item, index) => (
              <li
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-slate-300 hover:border-emerald-500 transition"
              >
                ✔ {item}
              </li>
            ))}

          </ul>

        </div>
      )}

      {/* Specifications */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold text-white mb-8">
          Specifications
        </h2>

        <table className="w-full overflow-hidden rounded-2xl border border-slate-800">

          <tbody>

            {Object.entries(product.specifications).map(([key, value]) => (
              <tr key={key} className="border-b border-slate-800">

                <td className="font-semibold p-4 capitalize bg-slate-900 text-white w-1/3">
                  {key}
                </td>

                <td className="p-4 bg-slate-950 text-slate-300">
                  {value || "-"}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      {/* Models */}

      {product.models?.length > 0 && (

        <div className="mt-16">

          <h2 className="text-3xl font-bold text-white mb-8">
            Available Models
          </h2>

          <div className="overflow-x-auto">

            <table className="min-w-full border border-slate-800 rounded-2xl overflow-hidden">

              <thead className="bg-emerald-500 text-slate-950">

                <tr>
                  <th className="p-3">Model</th>
                  <th>Capacity</th>
                  <th>HP</th>
                  <th>Weight</th>
                  <th>Dimensions</th>
                  <th>Production</th>
                </tr>

              </thead>

              <tbody>

                {product.models.map((model, index) => (

                  <tr key={index} className="border-b border-slate-800 text-center text-slate-300 bg-slate-950">

                    <td className="p-3">{model.model}</td>
                    <td>{model.capacity}</td>
                    <td>{model.hp}</td>
                    <td>{model.weight}</td>
                    <td>{model.dimensions}</td>
                    <td>{model.production}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      )}
      <InquiryModal
      product={product}
      isOpen={openInquiry}
      onClose={() => setOpenInquiry(false)}/>

    </div>
  );
}
