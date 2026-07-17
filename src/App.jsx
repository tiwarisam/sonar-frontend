import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";


function App() {
  return (
    <MainLayout>
      <Routes>
      <Route path="/admin" element={<Admin />} />

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/inquiry" element={<Admin />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />

      </Routes>
    </MainLayout>
  );
}

export default App;
