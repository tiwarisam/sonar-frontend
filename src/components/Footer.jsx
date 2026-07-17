import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black text-white">
              SONAR
            </h2>

            <p className="text-emerald-400 tracking-[4px] uppercase text-sm mt-1">
              Appliances
            </p>

            <p className="text-slate-400 leading-7 mt-6">
              Manufacturing premium food processing, packaging,
              bakery and commercial kitchen machinery with quality,
              innovation and trust.
            </p>

            <div className="flex gap-4 mt-8">

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="text-slate-400 hover:text-emerald-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/products" className="text-slate-400 hover:text-emerald-400 transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-emerald-400 transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-400 transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Food Processing</li>
              <li>Packaging Machines</li>
              <li>Bakery Machines</li>
              <li>Commercial Kitchen</li>
              <li>Customized Machines</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <Phone className="text-emerald-400 mt-1" size={20} />

                <span className="text-slate-400">
                  +91 9876543210
                </span>

              </div>

              <div className="flex gap-4">

                <Mail className="text-emerald-400 mt-1" size={20} />

                <span className="text-slate-400">
                  sonar2025@gmail.com
                </span>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-emerald-400 mt-1" size={20} />

                <span className="text-slate-400 leading-7">
                  E-77, West Vinod Nagar,
                  <br />
                  Patparganj,
                  <br />
                  Near Mother Dairy Plant,
                  <br />
                  Delhi - 110092
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 Sonar Appliances. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            Designed with <span className="text-emerald-400">❤</span> for Industrial Excellence
          </p>

        </div>

      </div>

    </footer>
  );
}