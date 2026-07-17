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
      <div className="bg-blue-700 text-white py-6 shadow">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-bold">
            Sonar Admin Dashboard
          </h1>

          <p className="opacity-90 mt-2">
            Manage inquiries and contact messages
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">

            <div>

              <h3 className="text-gray-500">
                Product Inquiries
              </h3>

              <h2 className="text-4xl font-bold mt-2">
                {inquiries.length}
              </h2>

            </div>

            <Package className="text-blue-700" size={45} />

          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">

            <div>

              <h3 className="text-gray-500">
                Contact Messages
              </h3>

              <h2 className="text-4xl font-bold mt-2">
                {contacts.length}
              </h2>

            </div>

            <MessageSquare className="text-green-600" size={45} />

          </div>

          <div className="bg-white rounded-xl shadow p-6 flex items-center justify-between">

            <div>

              <h3 className="text-gray-500">
                Total Requests
              </h3>

              <h2 className="text-4xl font-bold mt-2">
                {inquiries.length + contacts.length}
              </h2>

            </div>

            <Users className="text-orange-500" size={45} />

          </div>

        </div>

        {/* Search */}

        <div className="bg-white shadow rounded-xl mt-10 p-5">

          <div className="flex items-center gap-3 border rounded-lg px-4">

            <Search />

            <input
              placeholder="Search by customer or product..."
              className="w-full py-3 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

        </div>

        {/* Product Inquiries */}

        <div className="bg-white shadow rounded-xl mt-10 overflow-hidden">

          <div className="bg-blue-700 text-white px-6 py-4 text-xl font-semibold">
            Product Inquiries
          </div>

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">Customer</th>
                <th>Product</th>
                <th>Phone</th>
                <th>Email</th>

              </tr>

            </thead>

            <tbody>

              {filteredInquiries.map((item, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">{item.name}</td>
                  <td>{item.product}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Contact Messages */}

        <div className="bg-white shadow rounded-xl mt-10 overflow-hidden">

          <div className="bg-green-600 text-white px-6 py-4 text-xl font-semibold">
            Contact Messages
          </div>

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">Customer</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Message</th>

              </tr>

            </thead>

            <tbody>

              {contacts.map((item, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4">{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.message}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}