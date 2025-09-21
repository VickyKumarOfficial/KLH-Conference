"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { conferenceData } from "@/data/conference";

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Hero Content */}
      <HeroHighlight>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Conference Title */}
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-700 dark:text-white max-w-4xl mx-auto leading-relaxed lg:leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {conferenceData.title.split(" ").slice(0, 2).join(" ")}{" "}
                <Highlight className="text-black dark:text-white">
                  {conferenceData.title.split(" ").slice(2).join(" ")}
                </Highlight>
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {conferenceData.subtitle}
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {conferenceData.tagline}
              </motion.p>
            </div>

            {/* Conference Details */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">{conferenceData.date}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">{conferenceData.venue}</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                <Users className="h-5 w-5" />
                <span className="font-medium">500+ Expected Attendees</span>
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-accent transition-all duration-300"
              >
                Download Brochure
              </Button>
            </motion.div>

            {/* Conference Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {conferenceData.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-black/20"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </HeroHighlight>
    </div>
  );
}