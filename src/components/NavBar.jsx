import { useState } from "react";
import logo from '../assets/img/Logo.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img src={logo} alt="" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li className="hover:text-[#0FF1F6] cursor-pointer">About Us</li>
          <li className="hover:text-[#0FF1F6] cursor-pointer">Pricing</li>
          <li className="hover:text-[#0FF1F6] cursor-pointer">Customers</li>
          <li className="hover:text-[#0FF1F6] cursor-pointer">Solutions</li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="bg-[#0FF1F6]  px-4 text-[#002228] -2 rounded-full hover:bg-transparent hover:text-white hover:border-white border">
            Book a Demo
          </button>
          <button className="border border-white px-4 py-2 rounded-full hover:bg-[#0FF1F6] hover:text-[#002228]">
            Contact Us
          </button>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-dark-800 shadow-lg transform transition-transform duration-500 ease-in-out bg-[#002228] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none px-2 py-2 rounded-full"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-start space-y-4 mt-16 px-6">
          <li className="hover:text-gray-400 cursor-pointer">About Us</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Customers</li>
          <li className="hover:text-gray-400 cursor-pointer">Solutions</li>
        </ul>
        <div className="mt-4 flex flex-col space-y-2 px-6">
          <button className="bg-cyan-500 text-[#002228] px-4 py-2 rounded-lg hover:bg-cyan-600">
            Book a Demo
          </button>
          <button className="border border-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
