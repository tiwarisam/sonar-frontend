import { useEffect, useState } from "react";
import api from "../services/api";

export default function Admin() {

    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {

        fetchInquiries();

    }, []);

    const fetchInquiries = async () => {

        try {

            const res = await api.get("/inquiries");

            setInquiries(res.data);

        }

        catch (err) {

            console.error(err);

        }

    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
          <div className="max-w-7xl mx-auto px-6">
      
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Manage all customer quote requests.
              </p>
            </div>
      
            {/* Table Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      
              {/* Table Header */}
              <div className="bg-emerald-700 px-6 py-4">
                <h2 className="text-white text-xl font-semibold">
                  Quote Requests
                </h2>
              </div>
      
              <div className="overflow-x-auto">
                <table className="w-full">
      
                  <thead className="bg-black text-white">
                    <tr>
                      <th className="p-4 text-left">Name</th>
                      <th className="p-4 text-left">Product</th>
                      <th className="p-4 text-left">Company</th>
                      <th className="p-4 text-left">Phone</th>
                      <th className="p-4 text-left">Email</th>
                    </tr>
                  </thead>
      
                  <tbody>
                    {inquiries.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-emerald-50 transition"
                      >
                        <td className="p-4 font-medium text-gray-800">
                          {item.name}
                        </td>
      
                        <td className="p-4">
                          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            {item.product}
                          </span>
                        </td>
      
                        <td className="p-4 text-gray-700">
                          {item.company}
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
          </div>
        </div>
      )}