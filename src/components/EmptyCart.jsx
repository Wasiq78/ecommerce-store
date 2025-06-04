import React from "react";
import emptyCart from "../img/cart/empty-cart.png";

function EmptyCart({ closeModal }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={emptyCart} className="w-44" alt="Empty Cart" />
      <h3 className="mt-3 mb-6 font-bold text-lg">Your cart is empty</h3>
      <button
        className="inline-block bg-gray-200 px-4 py-3 rounded-lg"
        onClick={closeModal}
      >
        Keep Browsing
      </button>
    </div>
  );
}

export default EmptyCart;
