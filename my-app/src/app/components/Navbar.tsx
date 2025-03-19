"use client";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  navUrl: string;
  navPage: string;
};

const navbarList: NavItem[] = [
  { navUrl: "#home", navPage: "Home" },
  { navUrl: "#about", navPage: "About" },
  { navUrl: "#services", navPage: "Services" },
  { navUrl: "#portfolio", navPage: "Portfolio" },
  { navUrl: "#contact", navPage: "Contact" },
];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md p-4">
      <div className="flex justify-between items-center">

      <div className="text-white text-2xl font-bold">Babasura</div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden block"
        >
          {isOpen ? "✖" : "☰"} 
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white text-lg">
          {navbarList.map((navlink, index) => (
            <li key={index}>
              <Link href={`/${navlink.navUrl}`} className="hover:text-gray-400">
                {navlink.navPage}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu (Only visible when isOpen is true) */}
      {isOpen && (
        <ul className="flex flex-col items-center space-y-4 text-white text-lg mt-4 md:hidden">
          {navbarList.map((navlink, index) => (
            <li key={index}>
              <Link href={`/${navlink.navUrl}`} className="hover:text-gray-400">
                {navlink.navPage}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
