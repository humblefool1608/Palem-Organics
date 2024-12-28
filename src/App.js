import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./pages/home.js";
import Why from "./pages/whyPalem.js";
import ServicesPage from "./pages/servicespage.js";
import Products from "./pages/products.js";
import Contactus from "./pages/contactus.js";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/whyPalem" element={<Why />} />
      <Route path="/servicepage" element={<ServicesPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contactus" element={<Contactus />} />
    </Routes>
  );
}

