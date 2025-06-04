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
            duration: 0.5,
            ease: easeIn,
        }
    }
}

export const fadeRight = {
    hidden: {x:100},
    visible: {
        x: 0,
        transition : {
            duration: 0.5,
            ease: easeIn,
        }
    }
}

export const fadeUp= {
    hidden: {y:100},
    visible: {
        y: 0,
        transition : {
            duration: 0.5,
            ease: easeIn,
        }
    }
}

export const animateProductHeader = {
  hidden: {x:600},
  visible: {
      x: 0,
      transition : {
          duration: 0.5,
          ease: easeIn,
      }
  }
}

export const animateProductTitle = {
  hidden: {y:-400},
  visible: {
      y: 0,
      transition : {
          duration: 0.7,
          ease: easeIn,
      }
  }
}

export const animateProductImg = {
  hidden: {x:-400},
  visible: {
      x: 0,
      transition : {
          duration: 0.7,
          ease: easeIn,
      }
  }
}

export const animateProductDetails = {
  hidden: {x:400},
  visible: {
      x: 0,
      transition : {
          duration: 0.5,
          ease: easeIn,
      }
  }
}

export const cartAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
}