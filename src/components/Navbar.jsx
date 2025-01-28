import React, { useState } from "react";
import logo from "../img/newlogo2.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="h-24 w-screen fixed top-0 left-0 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] z-50">
      <div className="container flex z-10 justify-between items-center h-full px-4">
        <div className="w-24">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-12">
          <div
            className={`fixed top-24 left-0 w-full h-[calc(100%-6rem)] bg-white flex flex-col items-center justify-center gap-12 z-20 transition-transform duration-300 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } sm:relative sm:top-auto sm:left-auto sm:w-auto sm:h-auto sm:bg-transparent sm:flex-row sm:transform-none sm:gap-8`}
          >
            <Link to="/" className="text-lg" onClick={closeMenu}>
              HOME
            </Link>
            <Link to="/categories" className="text-lg" onClick={closeMenu}>
            CATEGORIES
            </Link>
          </div>
          <div className="flex items-center">
            <i className="text-2xl cursor-pointer">
              <AiOutlineShoppingCart />
            </i>
          </div>
          <div className="block sm:hidden">
            <i onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl cursor-pointer">
              {isMenuOpen ? <RxCross2 /> : <IoMdMenu />}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
