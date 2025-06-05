import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import Logo from "../utils/Logo";
import SearchBar from "../utils/SearchBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="bg-[#6d28d9] text-white shadow-md sticky top-0 z-50 p-3">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-2xl font-extrabold text-green-400">
          SHOP<span className="text-white">PPY</span>
        </div> */}
        {/* <div className="text-4xl font-extrabold flex gap-1">
          <span className="bg-gradient-to-r from-green-300 via-green-500 to-green-300 bg-clip-text text-transparent transform rotate-[-6deg]">
            S
          </span>
          <span className="bg-gradient-to-r from-green-300 via-green-500 to-green-300 bg-clip-text text-transparent transform rotate-[3deg]">
            H
          </span>
          <span className="bg-gradient-to-r from-green-300 via-green-500 to-green-300 bg-clip-text text-transparent transform rotate-[-2deg]">
            O
          </span>
          <span className="bg-gradient-to-r from-green-300 via-green-500 to-green-300 bg-clip-text text-transparent transform rotate-[4deg]">
            P
          </span>
          <span className="text-white transform rotate-[2deg]">P</span>
          <span className="text-white transform rotate-[-3deg]">Y</span>
        </div> */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-md hover:text-green-400 transition ${
                isActive(link.path) ? "text-green-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}

          <SearchBar />

          <Link
            to="/register"
            className="px-3 py-1 border border-green-500 rounded-md hover:bg-green-500 hover:text-black transition"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-3 py-1 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            Login
          </Link>

          <Link to="/cart" className="relative">
            <FaShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              3
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 font-[Poppins]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 border-b border-gray-700 ${
                isActive(link.path) ? "text-green-400" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Link
              to="/register"
              className="bg-green-500 text-black py-1 rounded text-center"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white py-1 rounded text-center"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
