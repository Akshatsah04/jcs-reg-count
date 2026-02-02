import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { JUNIOR_COMMITTEE_MEMBERS } from '../data/jcs';
import Podium from './Podium';
import LeaderboardList from './LeaderboardList';

const Leaderboard = () => {
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        // Sort data: highest registrations first
        // If ties, you could add secondary sort logic here
        const sorted = [...JUNIOR_COMMITTEE_MEMBERS].sort((a, b) => b.registrations - a.registrations);
        setSortedData(sorted);
    }, []);

    const topThree = sortedData.slice(0, 3);
    const rest = sortedData.slice(3);

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="pt-12 pb-6 text-center"
            >
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-2 mt-10 drop-shadow-sm tracking-tight font-serif">
                    ELYSIUM
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
                    JC Leaderboard
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Main Content */}
            <div className="container mx-auto pb-12">
                <Podium topThree={topThree} />
                <LeaderboardList list={rest} />
            </div>
        </div>
    );
};

export default Leaderboard;
