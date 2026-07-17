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

        <div className="max-w-7xl mx-auto p-8">

            <h1 className="text-4xl font-bold mb-8">
                Admin Dashboard
            </h1>

            <div className="bg-white shadow rounded-xl overflow-hidden">

                <table className="w-full">

                    <thead className="bg-blue-700 text-white">

                        <tr>

                            <th className="p-4">Name</th>

                            <th>Product</th>

                            <th>Company</th>

                            <th>Phone</th>

                            <th>Email</th>

                        </tr>

                    </thead>

                    <tbody>

                        {inquiries.map((item, index) => (

                            <tr
                                key={index}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="p-4">
                                    {item.name}
                                </td>

                                <td>
                                    {item.product}
                                </td>

                                <td>
                                    {item.company}
                                </td>

                                <td>
                                    {item.phone}
                                </td>

                                <td>
                                    {item.email}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}