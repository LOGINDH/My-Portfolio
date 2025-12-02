import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
    const variants = {
        initial: {
            opacity: 0,
            x: 100, // Start from right
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            x: -100, // Exit to left (or just fade out as requested)
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{ width: "100%" }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
