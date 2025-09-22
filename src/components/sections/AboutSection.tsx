"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { 
  Users, 
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
import { aboutData } from "@/data/conference";

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
  { 
    icon: GraduationCap, 
    title: "Researchers & Academicians", 
    color: "text-blue-500",
    description: "Leading scientists, professors, and research scholars driving innovation in their fields",
    benefits: ["Latest research insights", "Networking opportunities", "Publication opportunities"]
  },
  { 
    icon: Building, 
    title: "Industry Professionals", 
    color: "text-green-500",
    description: "Executives, managers, and technical experts from various industries",
    benefits: ["Industry trends", "Best practices", "Strategic partnerships"]
  },
  { 
    icon: Zap, 
    title: "Technology Enthusiasts", 
    color: "text-purple-500",
    description: "Tech innovators, developers, and digital transformation leaders",
    benefits: ["Cutting-edge tech", "Innovation strategies", "Technical workshops"]
  },
  { 
    icon: Award, 
    title: "Students & Scholars", 
    color: "text-orange-500",
    description: "Graduate students, PhD candidates, and emerging researchers",
    benefits: ["Learning opportunities", "Career guidance", "Research collaboration"]
  },
  { 
    icon: Globe, 
    title: "Policy Makers", 
    color: "text-cyan-500",
    description: "Government officials, regulators, and policy development experts",
    benefits: ["Policy insights", "Regulatory updates", "Stakeholder engagement"]
  },
  { 
    icon: Handshake, 
    title: "Entrepreneurs", 
    color: "text-pink-500",
    description: "Startup founders, business innovators, and venture capitalists",
    benefits: ["Investment opportunities", "Market insights", "Business networking"]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden transition-colors duration-300">
      <BackgroundBeams className="opacity-75" />
      
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
          
          <div className="max-w-4xl mx-auto space-y-6">
            {aboutData.objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                whileHover={{ scale: 1.01, y: -2 }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base md:text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                      {objective}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Should Attend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-800 dark:text-white mb-3 sm:mb-4">
              Who Should <span className="text-primary">Attend</span>
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto px-4">
              This conference is designed for diverse professionals passionate about innovation and technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {attendeeCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-neutral-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`mx-auto mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 w-fit`}>
                    <IconComponent className={`h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 ${category.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-neutral-800 dark:text-white text-base sm:text-lg md:text-xl mb-2 sm:mb-3 leading-tight">
                      {category.title}
                    </h4>
                    
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-primary text-xs sm:text-sm">What You'll Gain:</h5>
                      <ul className="space-y-1">
                        {category.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm flex items-center justify-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-center">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}