import React, { useContext, useRef } from "react";
import { ProductsContext } from "../../Context/ProductsContex";
import Footer from "../Footer";
import { motion, useInView } from "framer-motion";
import { scrollVariant } from "../../Variants/Variants";

function All() {
  const { products, handleProductDetails } = useContext(ProductsContext);

   const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <motion.div    ref={ref}
          variants={scrollVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
      <div className="my-16">
        <div className="container grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="   border-2 border-gray-300 px-4 pb-2 transition-all duration-300 ease-in hover:border-gray-700 hover:cursor-pointer"
              onClick={() => handleProductDetails(product.id)}
            >
              <img
                src={product.img}
                className="w-full object-cover"
                alt={product.description}
              />
              <p className="text-lg">{product.description}</p>
              <p className="text-xl font-bold">{product.price}$</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

export default All;
