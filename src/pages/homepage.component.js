import React from 'react';
import './homepage.style.scss'
import DirectoryMenu from '../components/directory/directoryMenu'
import { motion } from "framer-motion";

const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 1
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1
    }
  };
  
  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };
  
  const pageStyle = {
    position: "absolute",
    width: "100%"
  };
const Homepage = () => {
    return (
        <div className="homepage">
        <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
     
        <DirectoryMenu/>
        
        </motion.div>
        </div>
    );
}

export default Homepage
