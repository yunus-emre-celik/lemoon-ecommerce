import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8">
      <div className="container mx-auto px-4">
        {/* Üst Kısım */}
        <div className="flex flex-wrap justify-between items-start border-b border-gray-300 pb-8">
          {/* Logo ve Sosyal Medya */}
          <div className="mb-6 w-full md:w-1/5">
            <h2 className="text-xl font-bold mb-4">Bandage</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook"></i> {/* Facebook ikonu */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram"></i> {/* Instagram ikonu */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i> {/* Twitter ikonu */}
              </a>
            </div>
          </div>

          {/* Link Grupları */}
          <div className="flex flex-wrap w-full md:w-3/5 justify-between">
            <div>
              <h3 className="font-semibold mb-4">Company Info</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Carrier</a></li>
                <li><a href="#" className="hover:underline">We are hiring</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Carrier</a></li>
                <li><a href="#" className="hover:underline">We are hiring</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Business Marketing</a></li>
                <li><a href="#" className="hover:underline">User Analytic</a></li>
                <li><a href="#" className="hover:underline">Live Chat</a></li>
                <li><a href="#" className="hover:underline">Unlimited Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">iOS & Android</a></li>
                <li><a href="#" className="hover:underline">Watch a Demo</a></li>
                <li><a href="#" className="hover:underline">Customers</a></li>
                <li><a href="#" className="hover:underline">API</a></li>
              </ul>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="mb-6 w-full md:w-1/5">
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <form>
              <div className="flex mb-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 w-full border border-gray-300 rounded-l focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm">Lorem imp sum dolor Amit</p>
            </form>
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Made With Love By Finland All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
