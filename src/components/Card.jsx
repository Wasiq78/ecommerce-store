import React, { useEffect, useRef } from "react";
import banner from "../img/banner/banner1.jpg";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { scrollVariant, fadeLeft, fadeRight } from "../Variants/Variants";

function Card() {
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToButton");
    if (shouldScroll === "true") {
      buttonRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      sessionStorage.removeItem("scrollToButton");
    }
  }, []);

  const handleShopNowClick = () => {
    sessionStorage.setItem("scrollToButton", "true");
    navigate("/categories");
  };

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
        <div className="flex w-full">
          <motion.div variants={fadeLeft}  className="hidden sm:block w-full">
            <img src={banner} className="h-[24rem]" alt="Banner" />
          </motion.div>
          <motion.div variants={fadeRight}  className="flex flex-col justify-center bg-gray-300 w-full">
            <div className="px-8 py-16 sm:py-0 md:px-12 lg:px-20">
              <h3 className="text-2xl font-bold">Creative harmonious living</h3>
              <p className="text-xl my-4">
                Products are all made to standard sizes so that you can mix and
                match them freely.
              </p>
              <button
                ref={buttonRef}
                className="text-xl font-bold bg-black border-2 border-black text-white py-2 px-4 inline-block transition-all duration-300 ease-in hover:bg-transparent hover:text-black"
                onClick={handleShopNowClick}
              >
                Shop Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
