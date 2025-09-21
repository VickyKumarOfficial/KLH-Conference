"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Network, 
  BookOpen, 
  Rocket,
  GraduationCap,
  Building,
  Zap,
  Award,
  Globe,
  Handshake
} from "lucide-react";
import { aboutData, conferenceData } from "@/data/conference";

const highlightItems = [
  {
    title: "Expert Speakers",
    description: "50+ renowned speakers from academia and industry sharing cutting-edge insights",
    icon: Users,
    link: "#speakers"
  },
  {
    title: "Innovation Focus",
    description: "Latest developments in AI, ML, and emerging technologies",
    icon: Lightbulb,
    link: "#schedule"
  },
  {
    title: "Global Network",
    description: "Connect with professionals from 15+ countries worldwide",
    icon: Network,
    link: "#register"
  },
  {
    title: "Research Excellence",
    description: "Showcase of groundbreaking research and methodologies",
    icon: BookOpen,
    link: "#schedule"
  },
  {
    title: "Industry Insights",
    description: "Real-world applications and Industry 4.0 transformations",
    icon: Building,
    link: "#speakers"
  },
  {
    title: "Future Technologies",
    description: "Explore tomorrow's innovations and their impact today",
    icon: Rocket,
    link: "#about"
  }
];

const attendeeCategories = [
  { icon: GraduationCap, title: "Researchers & Academicians", color: "text-blue-500" },
  { icon: Building, title: "Industry Professionals", color: "text-green-500" },
  { icon: Zap, title: "Technology Enthusiasts", color: "text-purple-500" },
  { icon: Award, title: "Students & Scholars", color: "text-orange-500" },
  { icon: Globe, title: "Policy Makers", color: "text-cyan-500" },
  { icon: Handshake, title: "Entrepreneurs", color: "text-pink-500" }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-neutral-50 dark:bg-neutral-900 overflow-hidden">
      <BackgroundBeams />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-6">
            About the <span className="text-primary">Conference</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Conference Highlights */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverEffect items={highlightItems} />
        </motion.div>

        {/* Conference Objectives */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
              Conference <span className="text-primary">Objectives</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {objective}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Should Attend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-4">
              Who Should <span className="text-primary">Attend</span>
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              This conference is designed for diverse professionals passionate about innovation and technology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {attendeeCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 text-center group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300`}>
                    <IconComponent className={`h-8 w-8 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h4 className="font-semibold text-neutral-800 dark:text-white text-sm leading-tight">
                    {category.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Conference Themes */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-8">
            Key <span className="text-primary">Themes</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {conferenceData.themes.map((theme, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {theme}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}