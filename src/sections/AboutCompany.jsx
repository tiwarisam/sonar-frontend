import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutCompany() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

            <div className="absolute -top-8 -left-8 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>

            <img
              src="/images/banners/banner.jpeg"
              alt="Sonar Appliances"
              className="rounded-3xl shadow-2xl border border-slate-700 relative"
            />

          </div>

          {/* Right Content */}

          <div>

            <p className="text-emerald-400 uppercase tracking-[3px] font-semibold">
              ABOUT SONAR APPLIANCES
            </p>

            <h2 className="text-5xl font-black text-white mt-4 leading-tight">
              Engineering Reliable Food Processing Solutions
            </h2>

            <p className="text-slate-400 leading-8 mt-6">
              Sonar Appliances is a trusted manufacturer and supplier of
              high-quality food processing, packaging, bakery, commercial
              kitchen and customized industrial machines. We focus on
              delivering innovative, efficient and durable machinery that
              helps businesses increase productivity.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              {[
                "Premium Build Quality",
                "Customized Machines",
                "PAN India Delivery",
                "After Sales Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}

            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-10 bg-emerald-500 text-slate-950 px-7 py-4 rounded-xl font-semibold hover:bg-emerald-400 transition"
            >
              Learn More
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}