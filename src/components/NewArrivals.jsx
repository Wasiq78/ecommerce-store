import React, { useContext, useRef } from "react";
import { ProductsContext } from "../Context/ProductsContex";
import { motion, useInView } from "framer-motion";
import { scrollVariant } from "../Variants/Variants";

function NewArrivals() {
  const { products, handleProductDetails } = useContext(ProductsContext);
  const newProducts = products.filter((product) => product.id <= 8);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={scrollVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mt-16"
    >
      <div className="container">
        <div>
          <h2 className="text-3xl font-bold">New Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {newProducts.map((product) => (
            <div
              key={product.id}
              className="outline outline-2 outline-gray-300 px-4 pb-2 transition-all duration-300 ease-in hover:outline-gray-700 hover:cursor-pointer"
              onClick={() => handleProductDetails(product.id)}
            >
              <img src={product.img} />
              <p className="text-lg ">{product.description}</p>
              <p className="text-xl font-bold">{product.price}$</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default NewArrivals;
