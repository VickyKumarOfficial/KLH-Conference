"use client";
import { motion } from "framer-motion";
import klhLogo from '@/assets/KLH_Logo.png';
import efl from '@/assets/EFL.jpg';
import cambridge from '@/assets/Cambridge.jpg';

export default function LogoBar() {
  const logos = [
    {
       src: klhLogo,
       alt: "KLH University",
    //    name: "KLH"
    },
    {
      src: cambridge,
      alt: "Cambridge University",
    //   name: "Cambridge"
    },
    {
      src: efl,
      alt: "EFL Foundation",
    //   name: "EFL"
    }
  ];

  return (
    <section className="relative bg-transparent py-0 -mt-8 pt-8">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col space-between group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className={`w-auto object-contain opacity-100 hover:opacity-100 transition-all duration-300 group-hover:brightness-110 bg-white rounded-lg p-2 shadow-sm ${
                  index === 0 
                    ? "h-20 md:h-28 lg:h-32" // KLH logo - larger size
                    : "h-16 md:h-24 lg:h-28" // Other logos - original size
                }`}
              />
              <span className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* {logo.name} */}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}