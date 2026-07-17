import {
    ShieldCheck,
    Settings,
    Wrench,
    Truck,
  } from "lucide-react";
  
  const features = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description:
        "Built using high-grade materials for durability and long service life.",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description:
        "Machines can be developed according to customer-specific requirements.",
    },
    {
      icon: Wrench,
      title: "Easy Maintenance",
      description:
        "Designed for smooth operation with minimal maintenance.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description:
        "Timely delivery and dependable customer support.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-8">
  
          <div className="text-center">
  
            <p className="text-blue-700 font-semibold uppercase">
              Why Choose Us
            </p>
  
            <h2 className="text-4xl font-bold mt-3">
              Trusted Manufacturing Partner
            </h2>
  
            <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
              Sonar Appliances manufactures reliable food processing,
              packaging and filling machinery with a focus on quality,
              innovation and customer satisfaction.
            </p>
  
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
  
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition"
                >
                  <Icon
                    size={40}
                    className="text-blue-700"
                  />
  
                  <h3 className="text-xl font-semibold mt-6">
                    {feature.title}
                  </h3>
  
                  <p className="mt-4 text-gray-600">
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