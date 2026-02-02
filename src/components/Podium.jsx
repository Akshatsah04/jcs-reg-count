import React from 'react';
import { motion } from 'framer-motion';
import { Crown } from 'lucide-react';

const Podium = ({ topThree }) => {
    const [first, second, third] = topThree;

    const getAvatar = (name) => `https://api.dicebear.com/9.x/avataaars/svg?seed=${name}`;

    return (
        <div className="flex justify-center items-end gap-2 sm:gap-4 mb-8 sm:mb-12 mt-4 sm:mt-8 w-full max-w-4xl mx-auto px-2 sm:px-4">
            {/* 2nd Place */}
            {second && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center w-1/3 max-w-[140px] sm:max-w-[160px]"
                >
                    {/* Avatar */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-gray-300 bg-gray-200 overflow-hidden shadow-lg mb-[-20px] z-20 relative">
                        <img src={getAvatar(second.name)} alt={second.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-xl shadow-lg border-2 border-gray-400 flex flex-col justify-end items-center pb-4 backdrop-blur-sm bg-opacity-90 pt-8">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-gray-900 mb-1 z-20 font-serif"
                        >
                            2nd
                        </motion.span>
                        <p className="text-gray-900 font-bold text-base sm:text-lg text-center px-2 truncate w-full">{second.name}</p>
                        <p className="text-gray-800 font-medium text-sm sm:text-base">{second.registrations} Reg</p>
                    </div>
                    <div className="h-4 w-full bg-gray-500 rounded-b-xl opacity-50"></div>
                </motion.div>
            )}

            {/* 1st Place */}
            {first && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 100, damping: 15 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center w-1/3 max-w-[160px] sm:max-w-[200px] z-10 -mx-1 sm:mx-0"
                >
                    {/* Avatar with Glow */}
                    <div className="relative mb-[-24px] z-20">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-bounce">
                            <Crown size={40} className="text-yellow-100 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] fill-yellow-200" />
                        </div>
                        <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-yellow-300 bg-yellow-100 overflow-hidden shadow-[0_0_20px_rgba(253,224,71,0.6)] relative z-20">
                            <img src={getAvatar(first.name)} alt={first.name} className="w-full h-full object-cover" />
                        </div>
                        {/* Glowing Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-yellow-200 animate-pulse scale-110 opacity-50"></div>
                    </div>

                    <div className="relative w-full aspect-[3/4.5] bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 rounded-t-2xl shadow-[0_0_50px_rgba(234,179,8,0.5)] border-4 border-yellow-200 flex flex-col justify-end items-center pb-8 backdrop-blur-md pt-10">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-yellow-800 via-yellow-900 to-black mb-2 drop-shadow-[0_2px_4px_rgba(234,179,8,0.3)] z-20 font-serif"
                        >
                            1st
                        </motion.span>

                        <p className="text-yellow-950 font-extrabold text-xl sm:text-2xl text-center px-2 w-full mb-1">{first.name}</p>
                        <p className="text-yellow-900 font-bold text-sm sm:text-lg bg-yellow-200/40 px-3 py-1 rounded-full">{first.registrations} Reg</p>
                    </div>
                    {/* Base for 1st */}
                    <div className="h-6 w-full bg-yellow-700 rounded-b-2xl opacity-70"></div>
                </motion.div>
            )}

            {/* 3rd Place */}
            {third && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center w-1/3 max-w-[140px] sm:max-w-[160px]"
                >
                    {/* Avatar */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-orange-300 bg-orange-100 overflow-hidden shadow-lg mb-[-20px] z-20 relative">
                        <img src={getAvatar(third.name)} alt={third.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="relative w-full aspect-[3/4] bg-gradient-to-b from-orange-300 to-orange-500 rounded-t-xl shadow-lg border-2 border-orange-400 flex flex-col justify-end items-center pb-4 backdrop-blur-sm bg-opacity-90 pt-8">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-orange-800 to-orange-950 mb-1 z-20 font-serif"
                        >
                            3rd
                        </motion.span>
                        <p className="text-white font-bold text-base sm:text-lg text-center px-2 truncate w-full shadow-black drop-shadow-sm">{third.name}</p>
                        <p className="text-orange-100 font-medium text-sm sm:text-base">{third.registrations} Reg</p>
                    </div>
                    <div className="h-4 w-full bg-orange-700 rounded-b-xl opacity-50"></div>
                </motion.div>
            )}
        </div>
    );
};

export default Podium;
