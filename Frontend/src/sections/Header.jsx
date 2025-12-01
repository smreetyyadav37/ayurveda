import React, { useState } from "react"; // ADDED useState
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Values & Mission", path: "/values-mission" },
  { name: "Our Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-primary shadow-sm border-b border-dark/10 h-[80px]"> 
      <div className="container mx-auto flex justify-between items-center h-full px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/Logo.png" 
            alt="Samoha Lifescience Logo" 
            className="h-10 md:h-11" 
          />
        </Link>

        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm uppercase tracking-wider font-semibold transition duration-300 pb-1
                ${
                location.pathname === link.path
                  ? "text-accent1 border-b-2 border-accent1" 
                  : "text-dark hover:text-accent1/80" 
                }`
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button 
            className="lg:hidden text-dark z-50" 
            onClick={() => setIsOpen(!isOpen)}
        >
          <Icon icon={isOpen ? "lucide:x" : "lucide:menu"} className="size-8" />
        </button>
      </div>

      <div 
        className={`fixed top-0 left-0 h-screen w-full bg-accent3 transition-transform duration-300 ease-in-out lg:hidden pt-24 px-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-3xl font-bold uppercase text-primary/90 hover:text-highlight transition duration-300 ${
                location.pathname === link.path ? 'text-highlight' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-12 text-primary/70">
            <p className="font-light">Email: info@mysamoha.com</p>
            <p className="font-light">Phone: +91-8000080000</p>
        </div>
      </div>
    </header>
  );
};

export default Header;