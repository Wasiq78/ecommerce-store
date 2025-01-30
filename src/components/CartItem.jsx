import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function CartItem() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) } 
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row gap-4 pb-4 sm:pb-0 items-center outline outline-1 outline-gray-500"
        >
          <div>
            <img src={item.img} className="w-48"/>
          </div>
          <div className="flex justify-between w-full px-2 h-full" >
            <div className="flex flex-col pl-4 gap-4 sm:pl-0">
              <h3 className="text-lg font-bold">{item.description}</h3>
              <div className="flex items-center">
                <button
                  className="px-2 py-1  bg-black text-white font-bold"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  <HiMiniMinusSmall />
                </button>
                <span className="px-2">{item.quantity}</span>
                <button
                  className="px-2 py-1  bg-black text-white font-bold"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  <GoPlus />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4  items-center pr-4  sm:pr-0">
                <h2 className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</h2>
                 <span onClick={() => removeFromCart(item.id)}  className="self-end mt-auto cursor-pointer"><RxCross2  /></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CartItem;
