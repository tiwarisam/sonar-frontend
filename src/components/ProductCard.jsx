import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]">

      {/* Image */}

      <div className="h-72 flex items-center justify-center bg-slate-950 p-6 overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Content */}

      <div className="p-6">

        <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full">
          {product.category}
        </span>

        <h3 className="text-2xl font-bold text-white mt-5 line-clamp-2">
          {product.name}
        </h3>

        <p className="text-slate-400 mt-4 leading-7 line-clamp-3">
          {product.shortDescription}
        </p>

        <Link
          to={`/products/${product.slug}`}
          className="mt-8 inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-6 py-3 rounded-xl font-semibold hover:bg-emerald-400 transition"
        >
          View Details
          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}