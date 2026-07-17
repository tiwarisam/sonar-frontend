import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950" style={{ fontFamily: "Poppins, sans-serif" }}>
      <Navbar />

<main className="pt-20 md:pt-24 lg:pt-28">
  {children}
</main>

      <Footer />
    </div>
  );
}