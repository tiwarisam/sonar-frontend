import { useState } from "react";
import api from "../services/api";

export default function InquiryModal({
  product,
  isOpen,
  onClose,
}) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await api.post("/inquiry", {
        product: product.name,
        ...form,
      });
  
      alert(response.data.message);
  
      onClose();
  
      setForm({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
  
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
  
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl p-8 relative shadow-2xl">
  
        <button
          onClick={onClose}
          className="absolute right-6 top-5 text-3xl text-slate-400 hover:text-white transition"
        >
          ×
        </button>
  
        <p className="text-emerald-400 uppercase tracking-[3px] font-semibold">
          REQUEST A QUOTE
        </p>
  
        <h2 className="text-4xl font-black text-white mt-3">
          Get the Best Price
        </h2>
  
        <p className="text-slate-400 mt-3">
          Product:
          <span className="text-white font-semibold ml-2">
            {product.name}
          </span>
        </p>
  
        <form
          onSubmit={handleSubmit}
          className="space-y-5 mt-8"
        >
  
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
  
          <input
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
  
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
  
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
          />
  
          <textarea
            rows="5"
            name="message"
            placeholder="Tell us your requirements..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-500 resize-none focus:outline-none focus:border-emerald-500"
          />
  
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-xl font-bold transition duration-300"
          >
            Submit Inquiry
          </button>
  
        </form>
  
      </div>
  
    </div>
  );}