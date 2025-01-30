import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../Context/ProductsContex";
import { GoPlus } from "react-icons/go";
import { HiMiniMinusSmall } from "react-icons/hi2";
import TrendingSlider from "./TrendingSlider";
import Footer from "./Footer";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { productId } = useParams();
  const { products } = useContext(ProductsContext);
  const {addToCart} = useContext(CartContext)

  const product = products.find(
    (product) => product.id.toString() === productId
  );
  const [img, setImg] = useState(product?.img || '')
  useEffect(() => {
    if (product) {
        setImg(product.img);
        setQuantity(1);
        window.scrollTo({ top: 0, behavior: "smooth" }); 
      }
  },[product])

  if (!product) {
    return <div>No Products to Show.</div>;
  }

  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if(quantity >=1){
        setQuantity(quantity + 1)
    }
  }

  const decrease = () => {
    if(quantity > 1){
        setQuantity(quantity - 1)
    }
  }

  const calcPrice = (quantity) => {
      return quantity * product.price;
  }

  const handleAddToCart = () => {
       addToCart(product, quantity)
  }

  return (
    <div className="mt-40">
      <div className="container relative overflow-hidden">
        <div className="absolute w-full text-center text-4xl font-bold text-wrap">
          <h2>{product.description}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[50%,45%] gap-0">
          <div className="flex flex-col gap-8 items-center justify-center w-full mt-10 h-fit mb-12 lg:mb-0">
            <div>
              <img src={img} className="max-w-[25rem] pt-12  sm:pt-0" />
            </div>
            <div className="flex gap-4 w-full justify-center">
              <img
                src={product.img}
                className="max-w-[6rem] sm:max-w-[8rem] cursor-pointer "
                onMouseEnter={(e) => setImg(e.target.src)}
              />
              <img
                src={product.otherImgs[0]}
                className="max-w-[6rem] sm:max-w-[8rem] cursor-pointer"
                onMouseEnter={(e) => setImg(e.target.src)}
              />
              <img
                src={product.otherImgs[1]}
                className="max-w-[6rem] sm:max-w-[8rem] cursor-pointer"
                onMouseEnter={(e) => setImg(e.target.src)}
              />
            </div>
          </div>
          <div className="bg-gray-200 px-6 sm:px-14 h-fit">
            <div className="mt-16">
              <p className="text-lg px-6 sm:pt-10">{product.specs}</p>
              <div className="flex flex-col gap-4 sm:justify-between mt-10 items-center  ">
                <h3 className="text-2xl font-bold">Quantity</h3>
                <div className="flex select-none">
                  <span className="px-4 py-2  grid content-center text-xl border border-black font-bold bg-white cursor-pointer transition-all delay-200 ease-in hover:bg-transparent" onClick={decrease}>
                    <HiMiniMinusSmall />
                  </span>
                  <span className="px-6 py-2 border-y border-black grid content-center text-xl font-bold w-full ">
                    {quantity}
                  </span>
                  <span className="px-4 py-2 border border-black grid content-center text-xl font-bold bg-white  cursor-pointer transition-all delay-200 ease-in hover:bg-transparent" onClick={increase}>
                    <GoPlus />
                  </span>
                </div>
                <h3 className="text-2xl font-bold">{calcPrice(quantity)}.00$</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-16 mb-12">
                <button className="inline-block px-6 py-3 w-full text-lg font-bold text-white bg-[#B6002C] border-2 border-[#B6002C] transition-all delay-200 ease-in hover:bg-transparent hover:text-[#B6002C]" onClick={handleAddToCart}>
                  ADD TO CART
                </button>
                <button className="inline-block px-6 py-3 w-full text-lg font-bold border-2 border-black transition-all delay-200 ease-in hover:bg-black hover:text-white">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-gray-200  px-8 py-4">
            <h3 className="text-xl font-bold">Texture:</h3>
            <p className="text-lg mt-3">{product.texture}</p>
          </div>
          <div className="bg-gray-200  px-8 py-4">
            <h3 className="text-xl font-bold">Weight:</h3>
            <p className="text-lg mt-3">{product.weight}</p>
          </div>
          <div className="bg-gray-200  px-8 py-4">
            <h3 className="text-xl font-bold">Size:</h3>
            <p className="text-lg mt-3">{product.size}</p>
          </div>
        </div>
      </div>
      <div className="container">
          <TrendingSlider />
        </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
