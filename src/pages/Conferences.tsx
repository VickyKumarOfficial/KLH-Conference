"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { 
  Calendar, 
  MapPin, 
  Users, 
  BookOpen,
  Award,
  Globe
} from "lucide-react";

interface ConferenceTag {
  name: string;
  color: string;
}

interface ConferenceData {
  year: number;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  venue: string;
  status: 'ongoing' | 'upcoming' | 'past';
  tags: ConferenceTag[];
  highlights: string[];
}

const conferencesData: ConferenceData[] = [
  {
    year: 2026,
    title: "Interdisciplinary Conversations in Language, Literature, and Pedagogy (ICLLP - 2026)",
    subtitle: "International Conference",
    description: "Join us for an exciting journey through the intersection of language, literature, and modern pedagogy. This premier event brings together leading minds to explore innovative approaches in linguistic research, literary studies, and educational methodologies.",
    date: "16-17 March 2026",
    venue: "KLH University Campus, Hyderabad",
    status: 'ongoing',
    tags: [
      { name: "Language & Linguistics", color: "bg-blue-500" },
      { name: "Literature Studies", color: "bg-green-500" },
      { name: "Pedagogy", color: "bg-purple-500" },
      { name: "Digital Learning", color: "bg-orange-500" },
      { name: "Research Innovation", color: "bg-red-500" }
    ],
    highlights: [
      "50+ Expert Speakers from Global Universities",
      "25+ Technical Sessions",
      "Panel Discussions on Emerging Trends",
      "Research Paper Presentations",
      "Networking Opportunities",
      "Best Paper Awards"
    ]
  },
  {
    year: 2027,
    title: "Digital Humanities and Language Technology (DHLT - 2027)",
    subtitle: "International Conference",
    description: "Exploring the convergence of digital technologies with humanities research. This conference will focus on computational linguistics, digital literary analysis, and technology-enhanced language learning methodologies.",
    date: "20-21 March 2027",
    venue: "KLH University Campus, Hyderabad",
    status: 'upcoming',
    tags: [
      { name: "Digital Humanities", color: "bg-cyan-500" },
      { name: "AI in Language", color: "bg-indigo-500" },
      { name: "Computational Linguistics", color: "bg-pink-500" },
      { name: "EdTech", color: "bg-amber-500" },
      { name: "Data Analytics", color: "bg-teal-500" }
    ],
    highlights: [
      "AI-Powered Language Processing",
      "Digital Literary Archives",
      "Machine Learning in Education",
      "Virtual Reality Language Learning",
      "Cross-cultural Digital Communication",
      "Open Source Language Tools"
    ]
  },
  {
    year: 2028,
    title: "Sustainable Education and Global Communication (SEGC - 2028)",
    subtitle: "International Conference",
    description: "Addressing the future of education through sustainable practices and global communication strategies. Focus on environmental consciousness in educational technology and inclusive language policies.",
    date: "18-19 March 2028",
    venue: "KLH University Campus, Hyderabad",
    status: 'upcoming',
    tags: [
      { name: "Sustainable Education", color: "bg-emerald-500" },
      { name: "Global Communication", color: "bg-violet-500" },
      { name: "Climate Pedagogy", color: "bg-lime-500" },
      { name: "Inclusive Policies", color: "bg-rose-500" },
      { name: "Green Technology", color: "bg-sky-500" }
    ],
    highlights: [
      "Green Campus Initiatives",
      "Multilingual Education Policies",
      "Sustainable Learning Materials",
      "Climate Change Communication",
      "Indigenous Language Preservation",
      "Eco-friendly Educational Technology"
    ]
  }
];

const TimelineCard = ({ conference, index }: { conference: ConferenceData; index: number }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-500';
      case 'upcoming': return 'bg-blue-500';
      case 'past': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ongoing': return 'Current Conference';
      case 'upcoming': return 'Upcoming';
      case 'past': return 'Past Event';
      default: return 'Unknown';
    }
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative mb-16"
    >
      {/* Timeline line connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent"></div>
      
      {/* Year circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-10">
        <motion.div
          className={`w-16 h-16 rounded-full ${getStatusColor(conference.status)} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {conference.year}
        </motion.div>
      </div>

      {/* Content card */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
        {/* Empty space for alternating layout */}
        <div className={`${isEven ? 'lg:block' : 'lg:hidden'} hidden`}></div>
        
        {/* Conference card */}
        <motion.div
          className={`bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Status badge */}
          <div className="flex items-center justify-between mb-4">
            <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${getStatusColor(conference.status)}`}>
              {getStatusText(conference.status)}
            </span>
            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{conference.date}</span>
            </div>
          </div>

          {/* Title and subtitle */}
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
            {conference.title}
          </h3>
          <h4 className="text-lg text-primary font-semibold mb-4">
            {conference.subtitle}
          </h4>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            {conference.description}
          </p>

          {/* Venue */}
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{conference.venue}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {conference.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`${tag.color} text-white px-3 py-1 rounded-full text-xs font-medium`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div>
            <h5 className="font-semibold text-neutral-800 dark:text-white mb-3 flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              Key Highlights
            </h5>
            <ul className="space-y-2">
              {conference.highlights.map((highlight, highlightIndex) => (
                <li
                  key={highlightIndex}
                  className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function Conferences() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-2 pb-2 overflow-hidden">
        <BackgroundBeams className="opacity-10 dark:opacity-5" />
        <HeroHighlight className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-white mb-4">
                Our{" "}
                <Highlight className="text-black dark:text-white">
                  Conferences
                </Highlight>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                Explore our annual conference series fostering innovation, research excellence, and global collaboration
              </p>
            </motion.div>
          </div>
        </HeroHighlight>
      </section>

      {/* Statistics Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-12">
              Conference Impact
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, number: "500+", label: "Total Participants", color: "text-blue-500" },
                { icon: Globe, number: "15+", label: "Countries Represented", color: "text-green-500" },
                { icon: BookOpen, number: "150+", label: "Research Papers", color: "text-purple-500" },
                { icon: Award, number: "25+", label: "Awards Presented", color: "text-orange-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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

      {/* Timeline Section */}
      <section className="relative py-16 bg-white dark:bg-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-6">
              Conference Timeline
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Our annual conference series brings together researchers, educators, and industry professionals 
              to explore cutting-edge developments in their respective fields.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {conferencesData.map((conference, index) => (
              <TimelineCard
                key={conference.year}
                conference={conference}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-4">
              Join Our Next Conference
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Be part of the ongoing ICLLP 2026 conference and contribute to the advancement of 
              interdisciplinary research in language, literature, and pedagogy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
              <motion.button
                className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}