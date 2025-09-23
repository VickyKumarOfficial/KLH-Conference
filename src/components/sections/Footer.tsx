"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const developers = [
    {
      name: "Nicky",
      linkedin: "https://www.linkedin.com/in/nicky-kumar-b810a9318/"
    },
    {
      name: "Dwarkesh",
      linkedin: "https://www.linkedin.com/in/dwarkesh-dubey-a34287367/"
    }
  ];

  return (
    <motion.footer 
      className="w-full mt-auto relative z-20 bg-gray-900 py-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          
          {/* Copyright Section */}
          <motion.div 
            className="text-center sm:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-white/90 text-sm">
              © {new Date().getFullYear()} KLH Conference Website. All rights reserved.
            </p>
          </motion.div>

          {/* Developer Credits */}
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-1 text-white/80">
              <span className="text-sm">Developed by</span>
            </div>
            
            <div className="flex items-center gap-2">
              {developers.map((dev, index) => (
                <motion.div
                  key={dev.name}
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <motion.a
                    href={dev.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors duration-300 text-sm font-medium underline decoration-blue-400/50 hover:decoration-blue-300 underline-offset-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {dev.name}
                  </motion.a>
                  {index < developers.length - 1 && (
                    <span className="text-white/60 text-sm mx-1">&</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}