import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-emerald-500/20 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-4">

            <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-emerald-500/40">
              S
            </div>

            <div>

              <h1 className="font-bold tracking-wide text-xl text-white">
                SONAR
              </h1>

              <p className="text-xs uppercase tracking-[3px] text-emerald-400">
                Appliances
              </p>

            </div>

          </Link>

          {/* Desktop */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition duration-300 ${
                  location.pathname === item.path
                    ? "text-emerald-400"
                    : "text-gray-300 hover:text-emerald-400"
                }`}
              >
                {item.name}

                {location.pathname === item.path && (
                  <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-emerald-400 rounded-full"></span>
                )}

              </Link>

            ))}

          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-5">

            <Link
              to="/contact"
              className="group flex items-center gap-2 bg-emerald-500 text-slate-950 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/40"
            >
              Get Quote

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />

            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {mobileMenu && (

        <div className="lg:hidden bg-slate-950 border-t border-emerald-500/20">

          <div className="flex flex-col py-6">

            {navLinks.map((item) => (

              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className="px-8 py-4 text-gray-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition"
              >
                {item.name}
              </Link>

            ))}

          </div>

        </div>

      )}

    </header>
  );
}