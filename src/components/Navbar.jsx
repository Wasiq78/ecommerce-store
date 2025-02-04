import React, { useContext, useState } from "react";
import logo from "../img/newlogo2.png";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Modal from "react-modal";
import EmptyCart from "./EmptyCart";
import CartWithItems from "./CartWithItems";
import { CartContext } from "../Context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { cartAnimation } from "../Variants/Variants";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { cartItems, cartCount } = useContext(CartContext);

  const closeMenu = () => setIsMenuOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-16 sm:h-24 w-screen fixed top-0 left-0 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.25)] z-50">
      <div className="container flex z-10 justify-between items-center h-full px-4">
        <div className="w-16 sm:w-24">
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
            <div className="relative">
              <div className="flex relative">
                <i className="text-2xl cursor-pointer" onClick={openModal}>
                  <AiOutlineShoppingCart />
                </i>
                {cartCount > 0 && (
                  <span className="absolute right-[-7px] top-[-12px] bg-[#B6002C] text-white px-2 py-1 text-sm rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>

              <AnimatePresence>
                {isModalOpen && (
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    className="bg-white w-full sm:w-2/3 lg:w-[30rem] min-h-screen h-full fixed outline-none top-16 sm:top-24 right-0 overflow-y-auto py-9 px-12"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
                  >
                    <motion.div
                      variants={cartAnimation}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">
                          Your Shopping Cart <span>({cartCount})</span>
                        </h2>
                        <i
                          className="text-xl font-bold cursor-pointer"
                          onClick={closeModal}
                        >
                          <RxCross2 />
                        </i>
                      </div>
                      <div className="mt-16">
                        {cartItems.length > 0 ? (
                          <CartWithItems />
                        ) : (
                          <EmptyCart closeModal={closeModal} />
                        )}
                      </div>
                    </motion.div>
                  </Modal>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="block sm:hidden">
            <i
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl cursor-pointer"
            >
              {isMenuOpen ? <RxCross2 /> : <IoMdMenu />}
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;