import React from "react";

const Header = () => {
  return (
    <header className="bg-red-500 w-full text-white">
      <div className="px-8 py-6 flex justify-between items-center">
        <div className="flex">
        <h1>0555 555 5555</h1>
        <h1>zartzurt@gmil.com</h1>
        </div>
        <div>
        <h1>follow us for newest teenage fashion</h1>
        </div>
        <div className="flex gap-1">
        <h1>follow us:</h1>
        <a href="">insta</a>
        <a href="">tw</a>
        <a href="">yt</a>
        <a href="">fb</a>
        </div>
      </div>
      <div className="  px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex justify-between text-2xl font-bold">
          <a href="#" className="hover:text-gray-300">
            MyLogo
          </a>
          {/* Navigation Links */}
         <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Pages
              </a>
            </li>
          </ul>
        </nav>
        </div>

        

        {/* Call-to-Action Button */}
        <div>
          <a
            href="#cta"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
          >
            Log in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

