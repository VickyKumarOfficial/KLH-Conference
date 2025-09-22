"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const languageAndLinguisticsItems = [
  "Corpus Linguistics",
  "Psycholinguistics and Cognitive Processing",
  "Sociolinguistics and Language in Society",
  "Computational Linguistics",
  "Phonetics, Phonology, and Prosody in Speech",
  "Syntactic Structures and Morphological Analysis",
  "Applied Linguistics"
];

const literatureItems = [
  "Comparative Literature",
  "World Literatures",
  "Digital Humanities and Textual Analysis",
  "Postcolonial and Diaspora Studies",
  "Literary Theory and Critical Approaches",
  "Cultural Studies and Popular Culture",
  "Mythology and Folklore",
  "Children's and Young Adult Literature",
  "Narrative and Storytelling"
];

const pedagogyItems = [
  "Task-Based Language Teaching (TBLT)",
  "Assessment in Language Education",
  "Teaching English for Specific Purposes (ESP)",
  "Curriculum Design and Material Development",
  "Multilingualism and Language Policies",
  "Second Language Acquisition (SLA)",
  "Inclusive Education",
  "Language Teacher Education"
];

const otherAreasItems = [
  "Task-based Language Teaching (TBLT)",
  "Technology-Enhanced Language Learning (TELL)",
  "Assessment in Language Education",
  "Applied Linguistics",
  "Historical Linguistics",
  "Discourse Analysis",
  "Forensic Linguistics",
  "Language Variation"
];

const ThemeCard = ({ title, items, color }: { title: string; items: string[]; color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
    >
      <h3 className={`text-2xl font-bold mb-6 ${color}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
          >
            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
            <span className="text-sm leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ThemesSection() {
  return (
    <section className="relative py-20 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden transition-colors duration-300">
      <BackgroundBeams className="opacity-75" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Conference{" "}
            <span className="text-blue-600 dark:text-blue-400">Themes</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore diverse areas of research and innovation spanning linguistics, literature, 
            pedagogy, and emerging interdisciplinary fields
          </p>
          
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white rounded-2xl p-6 max-w-4xl mx-auto shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              Sub-themes and areas include, but are not limited to
            </h3>
          </motion.div>
        </motion.div>

        {/* Themes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <ThemeCard 
            title="Language and Linguistics" 
            items={languageAndLinguisticsItems}
            color="text-blue-600 dark:text-blue-400"
          />
          <ThemeCard 
            title="Literature" 
            items={literatureItems}
            color="text-green-600 dark:text-green-400"
          />
          <ThemeCard 
            title="Pedagogy" 
            items={pedagogyItems}
            color="text-purple-600 dark:text-purple-400"
          />
          <ThemeCard 
            title="Other Areas" 
            items={otherAreasItems}
            color="text-orange-600 dark:text-orange-400"
          />
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Present Your Research?
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
              Join researchers from around the world in advancing knowledge across these exciting domains
            </p>
            <Link to="/registration">
              <Button 
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Your Paper
                </motion.div>
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}