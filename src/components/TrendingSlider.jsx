import React from "react";
import TrendingItem from "./TrendingItem";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

function TrendingSlider() {
    const scrollLeft = () => {
        let slider = document.getElementById("slider");
        console.log("Before Scroll Left: ", slider.scrollLeft);
        console.log("Slider Width: ", slider.offsetWidth);
        console.log("Slider Scroll Width: ", slider.scrollWidth);
    
        if (slider.scrollWidth > slider.offsetWidth) {
          slider.scrollLeft -= 235; // Adjust the value based on your card width and gap
          console.log("After Scroll Left: ", slider.scrollLeft);
        } else {
          console.log("No scrolling needed.");
        }
      };
    
      const scrollRight = () => {
        let slider = document.getElementById("slider");
        console.log("Before Scroll Right: ", slider.scrollLeft);
        console.log("Slider Width: ", slider.offsetWidth);
        console.log("Slider Scroll Width: ", slider.scrollWidth);
    
        if (slider.scrollWidth > slider.offsetWidth) {
          slider.scrollLeft += 235; // Adjust the value based on your card width and gap
          console.log("After Scroll Right: ", slider.scrollLeft);
        } else {
          console.log("No scrolling needed.");
        }
      };

  return (
    <div className="mt-24">
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
        // style={{
        //   // Set a min-width large enough for the products to overflow
        //   minWidth: "calc(15rem * 12)",  // Assuming 12 products
        // }}
      >
        <TrendingItem />
      </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
