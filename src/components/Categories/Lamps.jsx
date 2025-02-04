import React, { useContext, useRef } from "react";
import { ProductsContext } from "../../Context/ProductsContex";
import { motion, useInView } from "framer-motion";
import { scrollVariant } from "../../Variants/Variants";

function Lamps() {
  const { products, handleProductDetails } = useContext(ProductsContext);
  const filteredItems = products.filter(
    (product) => product.category === "lamp"
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={scrollVariant}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="my-16">
        <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="border-2 border-gray-300 px-4 pb-2 transition-all duration-300 ease-in hover:border-gray-700 hover:cursor-pointer"
              onClick={() => handleProductDetails(item.id)}
            >
              <img
                src={item.img}
                className="w-full object-cover"
                alt={item.description}
              />
              <p className="text-lg">{item.description}</p>
              <p className="text-xl font-bold">{item.price}$</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Lamps;
