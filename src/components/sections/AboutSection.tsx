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
  Award,
  Globe
} from "lucide-react";
import { aboutData } from "@/data/conference";

const highlightItems = [
  {
    title: "Interdisciplinary Focus",
    description: "Breaking down silos between language, literature, and pedagogy for holistic understanding",
    icon: Network,
    link: "#about"
  },
  {
    title: "Global Scholars",
    description: "Researchers, educators, and practitioners from diverse academic and cultural backgrounds",
    icon: Users,
    link: "#speakers"
  },
  {
    title: "Cultural Context",
    description: "Exploring language and literature through multilingual and multicultural perspectives",
    icon: Globe,
    link: "#schedule"
  },
  {
    title: "Educational Innovation",
    description: "Latest pedagogical approaches and technology integration in language teaching",
    icon: Lightbulb,
    link: "#schedule"
  },
  {
    title: "Research Excellence",
    description: "Cutting-edge research methodologies bridging linguistics and literary studies",
    icon: BookOpen,
    link: "#speakers"
  },
  {
    title: "Future Frameworks",
    description: "Developing new theoretical models for language and literature education",
    icon: Rocket,
    link: "#about"
  }
];

const attendeeCategories = [
  { 
    icon: GraduationCap, 
    title: "Language & Literature Researchers", 
    color: "text-blue-500",
    description: "Scholars specializing in linguistics, literary studies, and interdisciplinary research",
    benefits: ["Latest research insights", "Theoretical frameworks", "Publication opportunities"]
  },
  { 
    icon: Building, 
    title: "Educational Institutions", 
    color: "text-green-500",
    description: "University faculty, curriculum developers, and academic administrators",
    benefits: ["Curriculum innovations", "Best practices", "Institutional partnerships"]
  },
  { 
    icon: Users, 
    title: "Language Educators", 
    color: "text-purple-500",
    description: "Teachers, trainers, and pedagogical specialists in language instruction",
    benefits: ["Teaching methodologies", "Practical strategies", "Professional development"]
  },
  { 
    icon: Award, 
    title: "Graduate Students", 
    color: "text-orange-500",
    description: "MA and PhD students in language, literature, and education studies",
    benefits: ["Academic guidance", "Research collaboration", "Career opportunities"]
  },
  { 
    icon: Globe, 
    title: "Cultural Studies Experts", 
    color: "text-cyan-500",
    description: "Specialists in cross-cultural communication and multicultural education",
    benefits: ["Cultural insights", "Global perspectives", "Diversity approaches"]
  },
  { 
    icon: Lightbulb, 
    title: "EdTech Innovators", 
    color: "text-pink-500",
    description: "Technology developers and digital learning specialists in humanities",
    benefits: ["Tech integration", "Digital tools", "Innovation strategies"]
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 overflow-hidden transition-colors duration-300">
      <BackgroundBeams className="opacity-20 dark:opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            About the <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">Conference</span>
          </h2>
          
          {/* Clean, elegant content layout */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              className="relative mb-10 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-blue-100/70 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700/30"></div>
              <p className="relative z-10 py-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                This international conference provides a platform for scholars, researchers, 
                educators, and practitioners to engage in interdisciplinary conversations on the multifaceted 
                relationship between language, literature, and teaching.
              </p>
            </motion.div>

            {/* Main content with simple two-column layout for larger screens */}
            <div className="grid md:grid-cols-2 gap-8 px-4 text-left">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The conference aims to foster a dynamic exchange of ideas, exploring how these fields 
                  intersect and inform one another, and how their synergy can enhance educational practices and research.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The contemporary academic landscape increasingly recognizes the value of interdisciplinary approaches. 
                  Language and literature, while distinct, are deeply interconnected. Language provides the medium for 
                  literary expression, while literature enriches our understanding of language use, cultural context, 
                  and human experience.
                </p>
              </motion.div>
              
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The teaching of both is a complex endeavor that benefits from insights from linguistics, 
                  pedagogy, psychology, and cultural studies.
                </p>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This conference is designed to break down traditional disciplinary silos and encourage a holistic 
                  understanding of these fields, addressing the challenges and opportunities presented by globalization, 
                  technological advancements, and evolving educational needs.
                </p>
              </motion.div>
            </div>
            
            {/* Horizontal accent line */}
            <motion.div
              className="h-px bg-gradient-to-r from-blue-300 via-purple-400 to-blue-300 dark:from-blue-500 dark:via-purple-600 dark:to-blue-500 my-10 mx-auto w-3/4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Conference Highlights - keeping hover effect as it's a clean and simple interaction */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">
              Conference <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">Highlights</span>
            </h3>
          </div>
          <HoverEffect items={highlightItems} />
        </motion.div>



        {/* Conference Objectives - simplified but still visually interesting */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
              Conference <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">Objectives</span>
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 px-4">
            {aboutData.objectives.map((objective, index) => (
              <motion.div
                key={index}
                className="bg-white/80 dark:bg-blue-950/30 p-5 rounded-lg border border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700/50 shadow-sm hover:shadow transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300 text-base">
                      {objective}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Who Should Attend - simplified but still visually appealing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
              Who Should <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">Attend</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
              This conference welcomes diverse professionals passionate about language, literature, and innovative pedagogical approaches
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
            {attendeeCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/80 dark:bg-blue-950/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800/30 hover:border-blue-300 dark:hover:border-blue-700/50 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white text-base mb-2">
                        {category.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                        {category.description}
                      </p>
                      
                      <div className="space-y-1">
                        <h5 className="font-medium text-blue-600 dark:text-blue-400 text-xs">What You'll Gain:</h5>
                        <ul className="space-y-1">
                          {category.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-gray-600 dark:text-gray-400 text-xs flex items-center gap-1.5">
                              <div className="w-1 h-1 bg-blue-400 dark:bg-blue-500 rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
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