import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    const variants = {
        initial: {
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)",
        },
        animate: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1], // "Leap" easing for premium feel
            },
        },
        exit: {
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{ width: "100%", height: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
