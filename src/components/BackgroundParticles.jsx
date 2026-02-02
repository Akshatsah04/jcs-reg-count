import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundParticles = () => {
    // Generate stable random positions
    const particles = useMemo(() => {
        return [...Array(15)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 4 + 2, // 2-6px
            duration: Math.random() * 10 + 10, // 10-20s, very slow
            delay: Math.random() * 5
        }));
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-yellow-400 opacity-20 blur-[1px]"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundParticles;
