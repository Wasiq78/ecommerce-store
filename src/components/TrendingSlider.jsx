import React from "react";
import { useRef } from "react";
import TrendingItem from "./TrendingItem";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { scrollVariant } from "../Variants/Variants";

function TrendingSlider() {
  const scrollLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft -= 235;
  };

  const scrollRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += 235;
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
        <div className=" mb-8 flex justify-between items-center">
          <h2 className="font-bold text-3xl">Trending Now</h2>
          <div className="flex gap-2">
            <button
              className="bg-gray-800 text-white px-3 py-2 text-xl transition-all duration-300 ease-in hover:bg-black"
              onClick={scrollLeft}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className="bg-gray-800 text-white px-3 py-2 text-xl transition-all duration-300 ease-in hover:bg-black"
              onClick={scrollRight}
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div
          id="slider"
          className="mt-8 overflow-x-scroll whitespace-nowrap scrollbar-none w-full"
        >
          <TrendingItem />
        </div>
      </div>
    </motion.div>
  );
}

export default TrendingSlider;
