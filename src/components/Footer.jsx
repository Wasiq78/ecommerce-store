import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from "framer-motion";
import { scrollVariant, fadeLeft } from "../Variants/Variants";

function Footer() {

  const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return  (
    <motion.div     ref={ref}
          variants={scrollVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} className='mt-20'>
        <motion.div variants={fadeLeft} className="bg-black py-16">
            <div className='flex gap-6 container text-white justify-center flex-wrap'>
                <Link to="/" className='whitespace-nowrap'>About</Link>
                <Link to="/" className='whitespace-nowrap'>Store Locator</Link>
                <Link to="/" className='whitespace-nowrap'>FAQs</Link>
                <Link to="/" className='whitespace-nowrap'>News</Link>
                <Link to="/" className='whitespace-nowrap'>Careers</Link>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Footer