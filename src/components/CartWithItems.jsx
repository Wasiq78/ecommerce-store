import React, { useContext } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../Context/CartContext'

function CartWithItems() {

    const {cartItems} = useContext(CartContext);

    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
    <div className='flex flex-col gap-4'>
          <CartItem />
    </div>
    <div className='mt-12 flex justify-between items-center mb-20 pt-8 border-t-4 border-dashed border-textColor'>
        <div className=''>
            <h2 className='text-xl font-bold'>Subtotal</h2>
            <h2 className='text-xl font-bold'>${subtotal.toFixed(2)}</h2>
        </div>
        <div>
            <button className='inline-block px-4 py-2 border-2 border-black font-bold text-xl transition-all delay-300 ease-in hover:bg-black hover:text-white'>Go to Checkout</button>
        </div>
    </div>
    </div>
  )
}

export default CartWithItems