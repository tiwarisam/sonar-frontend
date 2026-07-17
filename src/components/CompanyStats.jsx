import { Factory, Users, Award, Truck } from "lucide-react";

export default function CompanyStats() {
  const stats = [
    {
      icon: Factory,
      number: "100+",
      title: "Machines",
    },
    {
      icon: Users,
      number: "1000+",
      title: "Customers",
    },
    {
      icon: Award,
      number: "15+",
      title: "Years Experience",
    },
    {
      icon: Truck,
      number: "PAN India",
      title: "Delivery",
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-emerald-400 uppercase tracking-[3px] font-semibold">
            OUR ACHIEVEMENTS
          </p>

          <h2 className="text-4xl font-black text-white mt-4">
            Numbers That Reflect Our Excellence
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Delivering trusted food processing solutions with quality,
            innovation and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition">

                  <Icon
                    size={32}
                    className="text-emerald-400 group-hover:text-slate-950"
                  />

                </div>

                <h3 className="text-4xl font-black text-white">
                  {item.number}
                </h3>

                <p className="text-slate-400 mt-3">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}