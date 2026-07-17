import {
  ShieldCheck,
  Truck,
  Wrench,
  BadgeCheck,
  Headset,
  Cog,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Built with high-quality materials for long-lasting performance.",
  },
  {
    icon: Truck,
    title: "PAN India Delivery",
    description:
      "Fast and secure delivery to businesses across the country.",
  },
  {
    icon: Wrench,
    title: "Installation Support",
    description:
      "Professional installation and setup assistance for all machines.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Manufacturer",
    description:
      "Years of experience delivering reliable food processing equipment.",
  },
  {
    icon: Headset,
    title: "After Sales Service",
    description:
      "Dedicated support team to help whenever you need assistance.",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description:
      "Machines tailored to meet your production requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-emerald-400 uppercase tracking-[4px] font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-black text-white mt-4">
            Built for Performance.
            <br />
            Trusted for Reliability.
          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
            Sonar Appliances delivers innovative food processing
            machinery with exceptional engineering, dependable
            service, and customer-first support.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <div
                key={index}
                className="group bg-slate-900 rounded-3xl border border-slate-800 p-8 transition duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]"
              >

                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition">

                  <Icon
                    size={32}
                    className="text-emerald-400 group-hover:text-slate-950"
                  />

                </div>

                <h3 className="text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {feature.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}