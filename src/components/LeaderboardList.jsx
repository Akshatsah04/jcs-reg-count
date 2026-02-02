import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LeaderboardList = ({ list }) => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 pb-20">
            <div className="flex flex-col gap-3">
                <AnimatePresence>
                    {list.map((jc, index) => (
                        <motion.div
                            key={jc.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.05 + 0.5, ease: "easeOut" }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center justify-between border border-white/10 hover:border-yellow-500/50 hover:bg-white/15 transition-all shadow-md group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center text-gray-400 font-mono font-bold w-6 text-lg group-hover:text-yellow-400 transition-colors">
                                    {index + 4}
                                </div>
                                {/* Avatar */}
                                <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden border border-white/10 flex-shrink-0">
                                    <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${jc.name}`} alt={jc.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{jc.name}</h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-yellow-400 font-bold text-xl">{jc.registrations}</span>
                                <span className="text-gray-400 text-sm uppercase tracking-wider">Reg</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default LeaderboardList;
