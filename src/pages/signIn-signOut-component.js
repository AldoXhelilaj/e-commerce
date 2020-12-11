import React from 'react';
import Signin from '../components/signInsignOut/sign-in.component';
import Signup from '../components/signUp/signUp.component';
import './signIn-signOut.style.scss'
import { motion } from "framer-motion";




const signInsignOut = () => {

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
    return (

        <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className="sign-in-out">
            <Signin/>
            <Signup/>
        </div>
        </motion.div>
    );
}

export default signInsignOut;
