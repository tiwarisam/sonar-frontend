import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section className="bg-slate-950 min-h-screen">

      {/* Hero */}

      <div className="border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <p className="text-emerald-400 uppercase tracking-[4px] font-semibold">
            GET IN TOUCH
          </p>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
            Contact Us
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-8">
            Have questions about our machines or need a customized solution?
            Our team is ready to help you choose the right equipment.
          </p>

        </div>

      </div>

      {/* Contact Section */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12">

          <ContactInfo />

          <ContactForm />

        </div>

      </div>

    </section>
  );
}