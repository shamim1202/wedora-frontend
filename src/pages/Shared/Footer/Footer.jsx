// components/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p>📞 +880 123 456 789</p>
          <p>✉️ info@wedora.com</p>
          <p>🏠 123 Wedding St, Dhaka, Bangladesh</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Working Hours</h2>
          <p>Mon - Fri: 09:00 AM - 08:00 PM</p>
          <p>Saturday: 10:00 AM - 06:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-sm">
        &copy; {new Date().getFullYear()} Wedora. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
