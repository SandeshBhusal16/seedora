import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/finalLogo2.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50 bg-white text-black">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-4">
        {/* Logo on the Left */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Seedora Logo"
            className="h-12 w-12 object-contain scale-400"
          />
        </Link>

        {/* Navigation Links Centered */}
        <ul className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <Link to="/" className="p-4 hover:text-gray-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="p-4 hover:text-gray-200 transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/services" className="p-4 hover:text-gray-200 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="p-4 hover:text-gray-200 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div onClick={handleNav} className="md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-[#5C7B4C] ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-full h-full ease-in-out duration-500"
        }
      >
        <div className="flex items-center justify-between p-4">
          <Link to="/" onClick={handleNav}>
            <img
              src="src/assets/images/logobgremoved.png"
              alt="Seedora Logo"
              className="h-12 w-12 object-contain transform transition-transform duration-300 hover:scale-110"
            />
          </Link>
          <div onClick={handleNav}>
            <AiOutlineClose size={20} />
          </div>
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <Link to="/" onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/about" onClick={handleNav}>
              About Us
            </Link>
          </li>
          <li className="p-4 border-b border-gray-600">
            <Link to="/services" onClick={handleNav}>
              Services
            </Link>
          </li>
          <li className="p-4">
            <Link to="/contact" onClick={handleNav}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
