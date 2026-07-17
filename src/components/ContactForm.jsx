import { useState } from "react";
import api from "../services/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/contact", form);

      alert(response.data.message);

      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

      <h2 className="text-3xl font-black text-white mb-2">
        Send Us a Message
      </h2>

      <p className="text-slate-400 mb-8">
        Fill out the form and our team will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className="block mb-2 text-slate-300 font-medium">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300 font-medium">
            Company Name
          </label>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-2 text-slate-300 font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

        </div>

        <div>
          <label className="block mb-2 text-slate-300 font-medium">
            Message
          </label>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your requirements..."
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 rounded-xl font-bold transition duration-300"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}