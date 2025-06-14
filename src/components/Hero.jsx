import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Header1 from "../img/header/home-img-1.jpg";
import Header2 from "../img/header/home-img-2.jpg";
import Header3 from "../img/header/home-img-3.jpg";
import Header4 from "../img/header/home-img-4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeft, fadeDown, fadeRight, fadeUp } from "../Variants/Variants";

const MotionLink = motion(Link);

function Hero() {
  const {authState} = useContext(AuthContext);
  const userRole = authState.role;
  return (
    <div className="mt-32">
      <div className="grid grid-cols-2 grid-rows-none  md:grid-cols-4 md:grid-rows-2 gap-4 h-[40rem] container mx-auto">
        <MotionLink
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          to={`/${userRole}/categories/furnitures`}
          className="col-span-1 row-span-1 md:col-span-2 md:row-span-2 relative cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
          <img src={Header1} className="w-full h-full object-cover" />
          <h3 className="absolute left-8 bottom-8 text-white font-bold text-xl sm:text-3xl">
            Live Comfortably
          </h3>
        </MotionLink>
        <MotionLink
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          to={`/${userRole}/categories/skin-care`}
          className="col-span-1 row-span-1 md:row-span-2 relative cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
          <img src={Header2} className="w-full h-full object-cover" />
          <h3 className="absolute left-8 bottom-8 text-white font-bold text-xl sm:text-3xl">
            Skincare
          </h3>
        </MotionLink>
        <MotionLink
          variants={fadeRight}
          initial="hidden"
          animate="visible"
          to={`/${userRole}/categories/kitchen`}
          className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
          <img src={Header3} className="w-full h-full object-cover" />
          <h3 className="absolute left-8 bottom-8 text-white font-bold text-xl sm:text-3xl">
            Kitchen
          </h3>
        </MotionLink>
        <MotionLink
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          to={`/${userRole}/categories/electronics`}
          className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)]"></div>
          <img src={Header4} className="w-full h-full object-cover" />
          <h3 className="absolute left-8 bottom-8 text-white font-bold text-xl sm:text-3xl">
            Electronics
          </h3>
        </MotionLink>
      </div>
    </div>
  );
}

export default Hero;
