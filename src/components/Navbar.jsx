import React from 'react';
import { NavLink } from 'react-router-dom';
import { Trophy, Gift } from 'lucide-react';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pb-2 px-4"
        >
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 flex items-center gap-8 shadow-lg">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"
                        }`
                    }
                >
                    <Trophy size={18} />
                    <span>Leaderboard</span>
                </NavLink>

                <div className="w-[1px] h-4 bg-gray-700"></div>

                <NavLink
                    to="/prizes"
                    className={({ isActive }) =>
                        `flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-yellow-400" : "text-gray-400 hover:text-white"
                        }`
                    }
                >
                    <Gift size={18} />
                    <span>Prizes</span>
                </NavLink>
            </div>
        </motion.nav>
    );
};

import { motion } from 'framer-motion';

export default Navbar;
