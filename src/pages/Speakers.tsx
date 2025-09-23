import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllYears, getSpeakersByYear } from "../data/speakers";
import Footer from '@/components/sections/Footer';

export const Speakers = () => {
  const years = getAllYears();
  const [selectedYear, setSelectedYear] = useState(years[0] || 2026);
  const speakers = getSpeakersByYear(selectedYear);

  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10"></div>
      
      <main className="flex-1 relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              Conference Speakers
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Meet the distinguished experts and thought leaders who have shaped and continue to influence the field of{" "}
            <span className="text-blue-400 font-semibold">
              Language and Linguistic Processing
            </span>
          </p>
        </motion.div>

        {/* Year Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-gray-800">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedYear === year
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                ICLLP - {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Speakers Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2 h-full">
                  {/* Speaker Image */}
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-40 sm:h-48 lg:h-56 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Speaker Info */}
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {speaker.name}
                    </h3>
                    
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-blue-400 font-semibold text-sm sm:text-base">
                        {speaker.position}
                      </p>
                      
                      <p className="text-gray-400 text-sm sm:text-base">
                        {speaker.affiliation}
                      </p>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  {speakers.length}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">Distinguished Speakers</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                  {years.length}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">Conference Years</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};