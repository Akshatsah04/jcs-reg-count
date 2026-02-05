import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Lock, Clock } from 'lucide-react';

// --- CONFIGURATION ---
// Set the date when prizes should be revealed for each rank
// Format: YYYY-MM-DDTHH:MM:SS
const REVEAL_DATE_GOLD = new Date("2026-02-08T00:00:00").getTime();
const REVEAL_DATE_SILVER = new Date("2026-02-07T00:00:00").getTime();
const REVEAL_DATE_BRONZE = new Date("2026-02-06T00:00:00").getTime(); // Set to past date for testing

const useCountdown = (targetDate) => {
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            setTimeLeft(distance);

            if (distance < 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return Math.max(0, timeLeft);
};

const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
};

const PrizeCard = ({ rank, title, reward, icon: Icon, color, delay, isRevealed, timeLeft, image }) => {
    const timeComponents = formatTime(timeLeft);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
            }}
            className={`relative w-full max-w-sm rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 p-8 flex flex-col items-center text-center transform perspective-1000 group ${color}`}
            style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)"
            }}
        >
            <div className="mb-6 p-4 rounded-full bg-white/10 ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-300">
                <Icon size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide uppercase">{rank}</h3>
            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4">{title}</h4>

            <div className="w-12 h-1 bg-white/20 rounded-full mb-6"></div>

            {isRevealed ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex flex-col items-center"
                >
                    {image ? (
                        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden border border-white/20 shadow-lg">
                            <img src={image} alt={title} className="w-full h-full object-contain" />
                        </div>
                    ) : (
                        <div className="w-full h-48 mb-4 rounded-lg bg-black/40 flex items-center justify-center border border-white/10">
                            <span className="text-gray-500 italic">Image Placeholder</span>
                        </div>
                    )}
                    <p className="text-gray-300 font-light leading-relaxed">
                        {reward}
                    </p>
                </motion.div>
            ) : (
                <div className="w-full flex flex-col items-center justify-center py-4">
                    <Lock size={32} className="text-gray-500 mb-3 animate-pulse" />
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-3">Revealing In</p>
                    <div className="flex gap-2 font-mono text-lg text-yellow-400">
                        <div className="bg-black/30 px-2 py-1 rounded">
                            {String(timeComponents.days).padStart(2, '0')}d
                        </div>
                        <div className="bg-black/30 px-2 py-1 rounded">
                            {String(timeComponents.hours).padStart(2, '0')}h
                        </div>
                        <div className="bg-black/30 px-2 py-1 rounded">
                            {String(timeComponents.minutes).padStart(2, '0')}m
                        </div>
                        <div className="bg-black/30 px-2 py-1 rounded">
                            {String(timeComponents.seconds).padStart(2, '0')}s
                        </div>
                    </div>
                </div>
            )}

            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </motion.div>
    );
};

const Prizes = () => {
    // Individual timers for each prize
    const timeLeftGold = useCountdown(REVEAL_DATE_GOLD);
    const timeLeftSilver = useCountdown(REVEAL_DATE_SILVER);
    const timeLeftBronze = useCountdown(REVEAL_DATE_BRONZE);

    const isRevealedGold = timeLeftGold <= 0;
    const isRevealedSilver = timeLeftSilver <= 0;
    const isRevealedBronze = timeLeftBronze <= 0;

    return (
        <div className="min-h-screen pt-28 pb-12 px-4 container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-4 drop-shadow-sm tracking-tight font-serif">
                    THE REWARDS
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Exclusive honors for the champions of Elysium.
                </p>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6 lg:gap-8 flex-wrap">
                <PrizeCard
                    rank="2nd Place"
                    title="Silver Guardian"
                    reward="Silver Tier Prize Bundle + Certificate"
                    icon={Medal}
                    color="shadow-[0_0_30px_rgba(192,192,192,0.15)] hover:shadow-[0_0_50px_rgba(192,192,192,0.3)] border-t-[6px] border-t-gray-300"
                    delay={0.2}
                    isRevealed={isRevealedSilver}
                    timeLeft={timeLeftSilver}
                    image="/prize/glass.png"
                />

                <PrizeCard
                    rank="1st Place"
                    title="Golden Legend"
                    reward="Gold Tier Prize Bundle + Trophy + Certificate"
                    icon={Trophy}
                    color="shadow-[0_0_40px_rgba(234,179,8,0.2)] hover:shadow-[0_0_60px_rgba(234,179,8,0.4)] border-t-[8px] border-t-yellow-400 scale-105 z-10"
                    delay={0.1}
                    isRevealed={isRevealedGold}
                    timeLeft={timeLeftGold}
                    image="/prize/ticket.png"
                />

                <PrizeCard
                    rank="3rd Place"
                    title="Bronze Titan"
                    reward="Bronze Tier Prize Bundle + Certificate"
                    icon={Award}
                    color="shadow-[0_0_30px_rgba(251,146,60,0.15)] hover:shadow-[0_0_50px_rgba(251,146,60,0.3)] border-t-[6px] border-t-orange-400"
                    delay={0.3}
                    isRevealed={isRevealedBronze}
                    timeLeft={timeLeftBronze}
                    image="/prize/ferrero.png"
                />
            </div>
        </div>
    );
};

export default Prizes;
