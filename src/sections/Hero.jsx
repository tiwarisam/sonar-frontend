import { Link } from "react-router-dom";
import {
  ArrowRight,
  Factory,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">

      {/* Emerald Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 bg-slate-900 border border-emerald-500/20 rounded-full px-5 py-2">

              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

              <span className="text-emerald-400 text-sm">
                Trusted Across India
              </span>

            </div>

            <h1 className="text-6xl lg:text-7xl font-black mt-8 leading-tight">

              Food

              <br />

              Processing

              <br />

              <span className="text-emerald-400">
                Machinery
              </span>

            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">

              Premium industrial machines designed for
              food processing, packaging, bakery,
              commercial kitchens and customized
              manufacturing solutions.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/products"
                className="bg-emerald-500 text-slate-950 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-400 transition flex items-center gap-3"
              >
                Explore Products

                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/contact"
                className="border border-slate-700 hover:border-emerald-500 hover:text-emerald-400 px-8 py-4 rounded-xl transition"
              >
                Get Quote
              </Link>

            </div>

            {/* Features */}

            <div className="grid grid-cols-2 gap-5 mt-14">

              <div className="flex gap-3 items-center">

                <Factory className="text-emerald-400"/>

                <span>100+ Machine Models</span>

              </div>

              <div className="flex gap-3 items-center">

                <Truck className="text-emerald-400"/>

                <span>PAN India Delivery</span>

              </div>

              <div className="flex gap-3 items-center">

                <ShieldCheck className="text-emerald-400"/>

                <span>Premium Quality</span>

              </div>

              <div className="flex gap-3 items-center">

                <Wrench className="text-emerald-400"/>

                <span>After Sales Service</span>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">

              <img
                src="/images/hero-machine.png"
                alt="Machine"
                className="w-full object-contain"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -left-10 top-10 bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">

              <h2 className="text-4xl font-bold text-emerald-400">
                15+
              </h2>

              <p className="text-gray-400">
                Years Experience
              </p>

            </div>

            <div className="absolute -right-8 bottom-8 bg-emerald-500 text-slate-950 rounded-2xl p-6 shadow-2xl">

              <h2 className="text-4xl font-black">
                3000+
              </h2>

              <p className="font-medium">
                Happy Clients
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}