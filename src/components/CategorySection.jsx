import { Link } from "react-router-dom";
import {
  Package,
  Wheat,
  CookingPot,
  Factory,
  Leaf,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Food Processing",
    icon: Factory,
    color: "bg-emerald-500/10",
  },
  {
    title: "Packaging",
    icon: Package,
    color: "bg-cyan-500/10",
  },
  {
    title: "Bakery",
    icon: Wheat,
    color: "bg-yellow-500/10",
  },
  {
    title: "Commercial Kitchen",
    icon: CookingPot,
    color: "bg-purple-500/10",
  },
  {
    title: "Oil Extraction",
    icon: Leaf,
    color: "bg-green-500/10",
  },
  {
    title: "Customized Machines",
    icon: Factory,
    color: "bg-pink-500/10",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold">
            OUR CATEGORIES
          </p>

          <h2 className="text-5xl font-black text-white mt-4">
            Explore Our Machines
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-8">
            Discover industrial machinery designed to improve
            productivity, precision and efficiency.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((cat, index) => {

            const Icon = cat.icon;

            return (

              <Link
                key={index}
                to="/products"
                className="group relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 transition duration-500 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-[0_0_45px_rgba(16,185,129,0.18)]"
              >

                <div
                  className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center`}
                >
                  <Icon
                    size={34}
                    className="text-emerald-400"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mt-8">
                  {cat.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  High-performance industrial equipment built
                  for commercial food manufacturing.
                </p>

                <div className="flex items-center gap-2 mt-8 font-semibold text-emerald-400">

                  View Products

                  <ArrowRight
                    className="group-hover:translate-x-2 transition"
                    size={18}
                  />

                </div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}