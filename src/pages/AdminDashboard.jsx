import { useEffect, useState } from "react";
import api from "../services/api";
import {
  Users,
  MessageSquare,
  Package,
  Search,
} from "lucide-react";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const inquiryRes = await api.get("/inquiries");
      const contactRes = await api.get("/contacts");

      setInquiries(inquiryRes.data);
      setContacts(contactRes.data);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredInquiries = inquiries.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.product.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
  
      {/* Header */}
      <div className="bg-gradient-to-r from-black to-emerald-700 text-white py-6 shadow-lg">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold">
            Sonar Admin Dashboard
          </h1>
  
          <p className="text-gray-200 mt-2">
            Manage inquiries and contact messages
          </p>
        </div>
      </div>
  
      <div className="max-w-7xl mx-auto px-8 py-10">
  
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
  
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between border-l-4 border-emerald-600">
  
            <div>
              <h3 className="text-gray-500">
                Product Inquiries
              </h3>
  
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                {inquiries.length}
              </h2>
            </div>
  
            <Package className="text-emerald-600" size={45} />
  
          </div>
  
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between border-l-4 border-emerald-600">
  
            <div>
              <h3 className="text-gray-500">
                Contact Messages
              </h3>
  
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                {contacts.length}
              </h2>
            </div>
  
            <MessageSquare className="text-emerald-600" size={45} />
  
          </div>
  
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between border-l-4 border-black">
  
            <div>
              <h3 className="text-gray-500">
                Total Requests
              </h3>
  
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                {inquiries.length + contacts.length}
              </h2>
            </div>
  
            <Users className="text-black" size={45} />
  
          </div>
  
        </div>
  
        {/* Search */}
        <div className="bg-white shadow-lg rounded-2xl mt-10 p-5">
  
          <div className="flex items-center gap-3 border-2 border-emerald-200 rounded-xl px-4 focus-within:border-emerald-600 transition">
  
            <Search className="text-emerald-600" />
  
            <input
              placeholder="Search by customer or product..."
              className="w-full py-3 outline-none bg-transparent"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
  
          </div>
  
        </div>
  
        {/* Product Inquiries */}
        <div className="bg-white shadow-xl rounded-2xl mt-10 overflow-hidden">
  
          <div className="bg-gradient-to-r from-black to-emerald-700 text-white px-6 py-4 text-xl font-semibold">
            Product Inquiries
          </div>
  
          <div className="overflow-x-auto">
  
            <table className="w-full">
  
              <thead className="bg-gray-900 text-white">
  
                <tr>
  
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Email</th>
  
                </tr>
  
              </thead>
  
              <tbody>
  
                {filteredInquiries.map((item, index) => (
  
                  <tr
                    key={index}
                    className="border-b hover:bg-emerald-50 transition"
                  >
  
                    <td className="p-4 font-medium text-gray-800">
                      {item.name}
                    </td>
  
                    <td className="p-4">
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item.product}
                      </span>
                    </td>
  
                    <td className="p-4 text-gray-700">
                      {item.phone}
                    </td>
  
                    <td className="p-4 text-emerald-700 font-medium">
                      {item.email}
                    </td>
  
                  </tr>
  
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
        </div>
  
        {/* Contact Messages */}
        <div className="bg-white shadow-xl rounded-2xl mt-10 overflow-hidden">
  
          <div className="bg-gradient-to-r from-emerald-700 to-black text-white px-6 py-4 text-xl font-semibold">
            Contact Messages
          </div>
  
          <div className="overflow-x-auto">
  
            <table className="w-full">
  
              <thead className="bg-gray-900 text-white">
  
                <tr>
  
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Phone</th>
                  <th className="p-4 text-left">Email</th>
                  <th className="p-4 text-left">Message</th>
  
                </tr>
  
              </thead>
  
              <tbody>
  
                {contacts.map((item, index) => (
  
                  <tr
                    key={index}
                    className="border-b hover:bg-emerald-50 transition"
                  >
  
                    <td className="p-4 font-medium text-gray-800">
                      {item.name}
                    </td>
  
                    <td className="p-4 text-gray-700">
                      {item.phone}
                    </td>
  
                    <td className="p-4 text-emerald-700 font-medium">
                      {item.email}
                    </td>
  
                    <td className="p-4 text-gray-700 max-w-md">
                      {item.message}
                    </td>
  
                  </tr>
  
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  )}