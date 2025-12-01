import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "./sections/Header"; 
import Footer from "./sections/Footer"; 
import HomePage from "./pages/HomePage"; 
import AboutPage from "./pages/AboutPage"; 
import ValuesMissionPage from "./pages/ValueMissionPage"; 
import ProductsPage from "./pages/ProductsPage"; 
import ContactPage from "./pages/ContactPage"; 
import TeamPage from "./pages/TeamPage"; 
import TestimonialsPage from "./pages/TestimonialsPage";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
        <Header /> 
        
        <main className="pt-[80px] min-h-[calc(100vh-80px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/values-mission" element={<ValuesMissionPage />} /> 
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetail />} /> 
            <Route path="/team" element={<TeamPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
    </div>
  );
};

export default App;