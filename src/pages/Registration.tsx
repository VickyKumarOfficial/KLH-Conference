import { motion } from "framer-motion";
import { registrationFees, registrationDeadlines, onlineNote, whatsappGroupLink } from "../data/registration";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Calendar, MessageCircle, CreditCard, Clock } from "lucide-react";
import Footer from '@/components/sections/Footer';

export default function Registration() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 relative py-20 bg-neutral-50 dark:bg-neutral-900/50 overflow-hidden transition-colors duration-300">
        <BackgroundBeams />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-blue-600 dark:text-blue-400">
            Registration
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Secure your spot at ICLLP-2026. Choose your registration category and join us for an enriching conference experience.
          </p>
        </motion.div>

        {/* Google Form Registration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSezBO0pscPdAUotNlltwxuSRD-LLwbLFDuVvYbK6LFysfWWSQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-base border border-blue-600 hover:border-blue-700"
          >
            Register Now
          </a>
        </motion.div>

        {/* Registration Fee Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="bg-blue-600 dark:bg-blue-700 p-4 sm:p-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
                <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
                Registration Fee Details
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-neutral-800">
                    <th className="px-4 sm:px-6 py-4 text-left text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100">
                      Category
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base font-semibold text-purple-600 dark:text-purple-300">
                      Offline
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-300">
                      Online
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className={`${
                        index % 2 === 0 ? 'bg-white dark:bg-neutral-800' : 'bg-gray-50 dark:bg-neutral-700'
                      } hover:bg-blue-50 dark:hover:bg-neutral-600 transition-colors duration-200`}
                    >
                      <td className="px-4 sm:px-6 py-4 text-sm sm:text-base text-gray-900 dark:text-gray-100 font-medium">
                        {fee.category}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base font-bold text-purple-600 dark:text-purple-300">
                        {fee.offline}
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base font-bold text-blue-600 dark:text-blue-300">
                        {fee.online}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Special Note */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-4 sm:p-6">
              <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 text-center font-medium">
                {onlineNote}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Deadlines and WhatsApp Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Deadlines */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-700"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              <span className="text-purple-600 dark:text-purple-400">
                Deadlines
              </span>
            </h3>
            
            <div className="space-y-4">
              {registrationDeadlines.map((deadline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + (0.1 * index) }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-700 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-600 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                      {deadline.type}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400">
                    {deadline.date}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp Group */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-green-600 dark:bg-green-700 rounded-2xl shadow-xl p-6 sm:p-8 text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              WhatsApp Group
            </h3>
            
            <p className="text-base sm:text-lg mb-6 opacity-90">
              Join our official WhatsApp group for updates, announcements, and networking with fellow participants.
            </p>
            
            <a
              href={whatsappGroupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 bg-white dark:bg-gray-800 text-green-600 dark:text-green-400 font-bold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Join WhatsApp Group
            </a>
          </motion.div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}