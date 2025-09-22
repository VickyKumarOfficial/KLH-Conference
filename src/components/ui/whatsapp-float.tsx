import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappGroupLink } from "../../data/registration";

export const WhatsAppFloat = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href={whatsappGroupLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-200 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Join WhatsApp Group
          <div className="absolute top-1/2 left-full w-0 h-0 border-l-4 border-l-gray-900 dark:border-l-gray-800 border-y-4 border-y-transparent transform -translate-y-1/2"></div>
        </div>
      </motion.a>
    </motion.div>
  );
};