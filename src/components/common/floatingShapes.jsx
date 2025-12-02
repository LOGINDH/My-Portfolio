import React from "react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
    const shapes = [
        { width: 50, height: 50, top: "10%", left: "10%", delay: 0 },
        { width: 80, height: 80, top: "20%", left: "80%", delay: 2 },
        { width: 40, height: 40, top: "60%", left: "15%", delay: 4 },
        { width: 60, height: 60, top: "80%", left: "70%", delay: 1 },
        { width: 30, height: 30, top: "40%", left: "50%", delay: 3 },
    ];

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                zIndex: 0,
                pointerEvents: "none",
            }}
        >
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    style={{
                        position: "absolute",
                        top: shape.top,
                        left: shape.left,
                        width: shape.width,
                        height: shape.height,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        filter: "blur(20px)",
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: shape.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
