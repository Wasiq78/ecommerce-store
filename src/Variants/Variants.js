import {  easeIn, easeInOut } from "framer-motion";

export const scrollVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeInOut,
      staggerChildren: 0.3
    },
  },
};

export const fadeLeft = {
  hidden: { x: -100 },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: easeIn,
    //   type: "spring", 
    },
  },
};

export const fadeDown = {
    hidden: {y:-200},
    visible: {
        y: 0,
        transition : {
            duratio: 2,
            ease: easeIn,
        }
    }
}

export const fadeRgiht = {
    hidden: {x:100},
    visible: {
        x: 0,
        transition : {
            duratio: 1.5,
            ease: easeIn,
        }
    }
}

export const fadeUp= {
    hidden: {y:100},
    visible: {
        y: 0,
        transition : {
            duratio: 0.5,
            ease: easeIn,
        }
    }
}
