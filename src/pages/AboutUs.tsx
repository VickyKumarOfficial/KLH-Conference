"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { 
  Building, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  Users,
  BookOpen,
  Trophy
} from "lucide-react";

export default function AboutUs() {
  const highlights = [
    {
      icon: Calendar,
      title: "Established 1980-81",
      description: "Started as KL College of Engineering"
    },
    {
      icon: Award,
      title: "Autonomous Status",
      description: "Upgraded to autonomous college in 2006"
    },
    {
      icon: Trophy,
      title: "Deemed University",
      description: "Declared as Deemed University in 2009"
    },
    {
      icon: Building,
      title: "Category 1 Institute",
      description: "Recognized by UGC, MHRD in 2019"
    },
    {
      icon: MapPin,
      title: "Dual Campus",
      description: "KLH campus established in Hyderabad 2018"
    },
    {
      icon: GraduationCap,
      title: "Comprehensive Programs",
      description: "UG, PG & Doctoral programs in Engineering & Management"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-2 pb-2 overflow-hidden">
        <BackgroundBeams className="opacity-30 dark:opacity-20" />
        <HeroHighlight className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white mb-6">
                About{" "}
                <Highlight className="text-black dark:text-white">
                  KL University
                </Highlight>
              </h1>
              <p className="text-lg md:text-3xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                A legacy of excellence in education, innovation, and research spanning over four decades
              </p>
            </motion.div>
          </div>
        </HeroHighlight>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <Building className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Our Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white">
                Four Decades of Educational Excellence
              </h2>
              
              <div className="prose prose-lg max-w-none text-neutral-600 dark:text-neutral-300">
                <p className="leading-relaxed text-lg">
                  KL Deemed to be university was established in <strong>1980-81</strong>, as KL College of 
                  Engineering, which was upgraded to KL College of Engineering Autonomous in <strong>2006</strong> by 
                  UGC, and was declared as a <strong>Deemed to be University in 2009</strong> by UGC, 
                  MHRD Govt. of India.
                </p>
                
                <p className="leading-relaxed text-lg">
                  In <strong>2019</strong> UGC, MHRD declared this institution as <strong>Category 1 Institute</strong>. 
                  The first off-campus (KLH), has come up in <strong>2018</strong> at Aziznagar, Hyderabad.
                </p>
                
                <p className="leading-relaxed text-lg">
                  KL Deemed to be University offers outstanding <strong>Undergraduate, Postgraduate and 
                  Doctoral Programmes</strong> in Engineering and Management streams from both campuses.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-lg shadow-sm">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="font-medium text-neutral-800 dark:text-white">Thousands of Alumni</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-lg shadow-sm">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="font-medium text-neutral-800 dark:text-white">Research Excellence</span>
                </div>
              </div>
            </motion.div>

            {/* Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-3 bg-primary/10 rounded-full">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-800 dark:text-white text-sm">
                            {item.title}
                          </h4>
                          <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-white dark:bg-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-12">
              Our Impact in Numbers
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "40+", label: "Years of Excellence" },
                { number: "2", label: "Campus Locations" },
                { number: "100+", label: "Programs Offered" },
                { number: "50,000+", label: "Alumni Network" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}