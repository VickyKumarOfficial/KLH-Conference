"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { conferenceData } from "@/data/conference";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen sm:min-h-[85vh] md:min-h-[80vh] lg:min-h-[75vh] xl:min-h-[70vh] flex items-center justify-center overflow-hidden -mt-4 py-8 sm:py-12 md:py-16 bg-white dark:bg-black">
      {/* Seamless Dotted Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="hsl(var(--primary))"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="hsl(var(--accent))"
      />

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
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-neutral-700 dark:text-white max-w-7xl mx-auto leading-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Interdisciplinary Conversations in Language, Literature, and Pedagogy
                <br />
                <span className="block mt-2 sm:mt-3 md:mt-4">
                  <Highlight className="text-black dark:text-white whitespace-nowrap">
                    (ICLLP - 2026)
                  </Highlight>
                </span>
              </motion.h1>
              
              <motion.h2 
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {conferenceData.subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-400 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
              Shaping the Future Through Knowledge and Innovation
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
                className="flex items-center gap-2 sm:gap-3 text-neutral-600 dark:text-neutral-300 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-white/20 dark:border-black/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
                <span className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">{conferenceData.date}</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 sm:gap-3 text-neutral-600 dark:text-neutral-300 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-white/20 dark:border-black/20"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-primary" />
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
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link to="/registration">
                  Register Now
                  <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-xl border-2 hover:bg-accent transition-all duration-300"
              >
                Download Brochure
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
                  className="group relative text-center lg:text-left bg-white dark:bg-black rounded-2xl p-4 sm:p-5 md:p-6 border border-neutral-200 dark:border-neutral-700"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  {/* Dot pattern backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 dark:hidden rounded-2xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 hidden dark:block rounded-2xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-2 sm:mb-3 md:mb-4 tracking-wide">
                      Organized by
                    </h3>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium">
                        Department of English,
                      </p>
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium">
                        KL University, Aziznagar, Hyderabad
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* In association with column */}
                <motion.div 
                  className="group relative text-center lg:text-left bg-white dark:bg-black rounded-2xl p-4 sm:p-5 md:p-6 border border-neutral-200 dark:border-neutral-700"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  {/* Dot pattern backgrounds */}
                  <div
                    className="pointer-events-none absolute inset-0 dark:hidden rounded-2xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 hidden dark:block rounded-2xl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
                    }}
                  />
                  
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-2 sm:mb-3 md:mb-4 tracking-wide">
                      In association with
                    </h3>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium">
                        Department of Literatures in English, EFL-U, Hyderabad
                      </p>
                      
                      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-medium mt-2 sm:mt-3">
                        <span className="font-bold text-primary/80">and</span> Cambridge English
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