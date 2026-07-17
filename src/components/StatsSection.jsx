import {
  CalendarDays,
  Factory,
  Users,
  Headset,
} from "lucide-react";

const stats = [
  {
    icon: CalendarDays,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Factory,
    value: "100+",
    label: "Machine Models",
  },
  {
    icon: Users,
    value: "3000+",
    label: "Satisfied Customers",
  },
  {
    icon: Headset,
    value: "24×7",
    label: "Customer Support",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-emerald-400 uppercase tracking-[3px] font-semibold">
            WHY CHOOSE SONAR
          </p>

          <h2 className="text-4xl font-bold text-white mt-3">
            Trusted by Food Industries
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Delivering reliable machinery, innovative solutions,
            and dependable after-sales support across India.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center transition-all duration-300 hover:border-emerald-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]"
              >

                <div className="mx-auto w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition">

                  <Icon
                    size={32}
                    className="text-emerald-400 group-hover:text-slate-950"
                  />

                </div>

                <h3 className="text-5xl font-black text-white">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-3">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}