"use client";

import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Search from "../ui/Search";

function Header() {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary text-white">
      {/* Header */}
      <div className="container h-full flex justify-between items-center mx-auto px-4">
        {/* Logo */}
        <div className="mt-3">
          <Logo />
        </div>

        {/* Nav - Visible on larger screens */}
        <nav className="hidden sm:block">
          <ul className="flex gap-x-4 uppercase">
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-4">
          <a href="" className="hover:text-primary transition-all">
            <FaUserAlt />
          </a>
          <a href="" className="hover:text-primary transition-all">
            <HiShoppingCart />
          </a>
          <button
            onClick={() => setIsSearchModal(true)}
            className="hover:text-primary transition-all"
          >
            <FaSearch />
          </button>
          <button className="btn-primary hidden sm:block">Order Online</button>

          {/* Hamburger Menu */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden hover:text-primary transition-all"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Dropdown Menu - Visible on small screens */}
      {isMenuOpen && (
        <nav className="bg-white text-black sm:hidden w-full absolute left-0 top-[5.5rem] z-50">
          <div className="flex justify-end p-4">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black hover:text-primary transition-all"
            >
              <FaTimes size={20} />
            </button>
          </div>
          <ul className="flex flex-col gap-4 p-4 uppercase">
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-3 py-2 hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
      )}

      {/* Search Modal */}
      {isSearchModal && (
        <Search
          isSearchModal={isSearchModal}
          setIsSearchModal={setIsSearchModal}
        />
      )}
    </div>
  );
}

export default Header;
