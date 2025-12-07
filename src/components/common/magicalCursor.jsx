import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MagicalCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);
    const requestRef = useRef();

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            addParticle(e.clientX, e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const addParticle = (x, y) => {
        const newParticle = {
            id: Date.now() + Math.random(),
            x,
            y,
            size: Math.random() * 8 + 4, // Random size
            color: Math.random() > 0.5 ? '#FFD700' : '#A855F7', // Gold or Purple
            rotation: Math.random() * 360,
        };
        setParticles((prev) => [...prev.slice(-20), newParticle]); // Limit particles
    };

    // Cleanup old particles periodically (though AnimatePresence handles visual removal, we need to clear state)
    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) => prev.filter(p => Date.now() - Math.floor(p.id) < 1000));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 9999,
            overflow: 'hidden'
        }}>
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{
                            x: particle.x,
                            y: particle.y,
                            opacity: 1,
                            scale: 1,
                            rotate: particle.rotation
                        }}
                        animate={{
                            x: particle.x + (Math.random() - 0.5) * 50,
                            y: particle.y + (Math.random() * 50), // Fall down
                            opacity: 0,
                            scale: 0,
                            rotate: particle.rotation + 180
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: particle.size,
                            height: particle.size,
                            borderRadius: '50%', // Or use a star shape clip-path
                            background: particle.color,
                            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                            // Star shape clip path
                            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default MagicalCursor;
