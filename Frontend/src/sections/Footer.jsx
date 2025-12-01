import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { socials } from "../constants";

const Footer = () => {
  const primaryEmail = "Samohalifescience@gmail.com";
  const phone = "+91-8000080000";
  
  const getSocialIcon = (name) => {
    switch(name) {
      case 'Instagram': return 'lucide:instagram';
      case 'Youtube': return 'lucide:youtube';
      case 'LinkedIn': return 'lucide:linkedin';
      default: return 'lucide:link';
    }
  };

  return (
    <footer className="bg-dark text-primary py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-primary/20 pb-12">
        
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 uppercase text-accent1">Samoha Life Science</h3>
          <p className="text-base text-primary/80 leading-relaxed max-w-sm">
            Enriching lives by providing quality products to eradicate pain and sufferings.
            Products manufactured in WHO-GMP approved plants.
          </p>
          <div className="mt-6 flex space-x-4">
             <img src="/Logo.png" alt="Samoha Logo" className="h-10 opacity-70" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 uppercase text-highlight">Quick Links</h3>
          <ul className="space-y-3 text-base font-light">
            <li><Link to="/about" className="hover:text-highlight transition">About Us</Link></li>
            <li><Link to="/products" className="hover:text-highlight transition">Products</Link></li>
            <li><Link to="/team" className="hover:text-highlight transition">Our Team</Link></li>
            <li><Link to="/contact" className="hover:text-highlight transition">Get in Touch</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 uppercase text-highlight">Contact</h3>
          <div className="space-y-4 text-base font-light">
            <p className="text-primary/80">
              <Icon icon="lucide:mail" className="inline mr-2 size-5 text-accent1" />
              <a href={`mailto:${primaryEmail}`} className="hover:text-highlight transition lowercase">{primaryEmail}</a>
            </p>
            <p className="text-primary/80">
              <Icon icon="lucide:phone" className="inline mr-2 size-5 text-accent1" />
              {phone}
            </p>
            <p className="pt-2 text-sm text-primary/60">Location: New Delhi</p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-3 uppercase text-highlight">Follow Us</h3>
            <p className="pt-2 text-sm text-primary/60">Social Channels coming soon...</p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-highlight transition duration-300 text-2xl"
                >
                  <Icon icon={getSocialIcon(social.name)} className="size-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 text-center text-sm font-light text-primary/60">
        &copy; {new Date().getFullYear()} Samoha Life Science Pvt Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;