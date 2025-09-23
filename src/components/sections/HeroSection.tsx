"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight, Download } from "lucide-react";
import { conferenceData } from "@/data/conference";

export default function HeroSection() {
  // Function to handle PDF download
  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/INTERNATIONAL_CONFERENCE_ON_INTERDISCIPLINARY_CONVERSATIONS_IN_LANGUAGE.pdf';
    link.download = 'ICLLP-2026-Conference-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen sm:min-h-[85vh] md:min-h-[80vh] lg:min-h-[75vh] xl:min-h-[70vh] flex items-center justify-center overflow-hidden -mt-4 py-8 sm:py-12 md:py-16">
      {/* Hero Content */}
      <HeroHighlight>
        <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {/* Conference Title */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4 px-4 sm:px-6 md:px-8">
              <motion.h1 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 dark:text-white max-w-7xl mx-auto leading-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Interdisciplinary Conversations in Language, Literature, and Pedagogy
                <br />
                <span className="block mt-2 sm:mt-3 md:mt-4">
                  <Highlight className="text-white dark:text-white whitespace-nowrap">
                    (ICLLP - 2026)
                  </Highlight>
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {conferenceData.subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-300 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="font-bold text-gray-800 dark:text-white">Innovations in Technology & Research</span> - Shaping the Future Through Knowledge and Innovation
              </motion.p>
            </div>

            {/* Conference Details */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-white bg-white/80 dark:bg-white/20 backdrop-blur-sm rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-gray-300 dark:border-white/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-cyan-300" />
                <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{conferenceData.date}</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 text-gray-700 dark:text-white bg-white/80 dark:bg-white/20 backdrop-blur-sm rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-gray-300 dark:border-white/30"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-blue-600 dark:text-cyan-300" />
                <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{conferenceData.venue}</span>
              </motion.div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Button 
                asChild
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/registration">
                  Register Now
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadBrochure}
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-xl border-2 border-gray-600 text-gray-700 dark:border-white dark:text-white hover:bg-gray-600 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 group"
              >
                Download Brochure
                <Download className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Organizer Information */}
            <motion.div 
              className="mt-16 max-w-6xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                
                {/* Organized by column */}
                <motion.div 
                  className="group relative text-center lg:text-left bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/30 dark:border-neutral-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 md:mb-4 tracking-wide">
                      Organized by
                    </h3>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-neutral-200 leading-relaxed font-medium">
                        Department of English,
                      </p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-neutral-200 leading-relaxed font-medium">
                        KL University, Aziznagar, Hyderabad
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* In association with column */}
                <motion.div 
                  className="group relative text-center lg:text-left bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-white/30 dark:border-neutral-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 sm:mb-3 md:mb-4 tracking-wide">
                      In association with
                    </h3>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-neutral-200 leading-relaxed font-medium">
                        Department of Literatures in English, EFL-U, Hyderabad
                      </p>
                      
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-neutral-200 leading-relaxed font-medium mt-2 sm:mt-3">
                        <span className="font-bold text-blue-600 dark:text-blue-400">and</span> Cambridge English
                      </p>
                    </div>
                  </div>
                </motion.div>
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
}