import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
  },
  {
    icon: Mail,
    title: "Email",
    value: "sonar2025@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value: (
      <>
        E-77 West Vinod Nagar
        <br />
        Patparganj
        <br />
        Delhi - 110092
      </>
    ),
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: (
      <>
        Monday - Saturday
        <br />
        9:00 AM - 6:00 PM
      </>
    ),
  },
];

export default function ContactInfo() {
  return (
    <div>

      <h2 className="text-3xl font-black text-white mb-3">
        Contact Information
      </h2>

      <p className="text-slate-400 mb-10 leading-7">
        Reach out to us for product inquiries, quotations or customized
        machinery solutions.
      </p>

      <div className="space-y-6">

        {contactDetails.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500 transition"
            >

              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">

                <Icon
                  size={24}
                  className="text-emerald-400"
                />

              </div>

              <div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                <div className="text-slate-400 leading-7">
                  {item.value}
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}