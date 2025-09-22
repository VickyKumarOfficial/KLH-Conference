import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, MapPin, ChevronDown, ChevronUp, Zap, Target } from 'lucide-react'
import { conferenceSchedule } from '@/data/schedule'
import { Button } from '@/components/ui/button'
import { Spotlight } from '@/components/ui/spotlight'
import { Highlight } from '@/components/ui/hero-highlight'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0)
  const [expandedSessions, setExpandedSessions] = useState<Set<string>>(new Set())

  // Get all sessions for the selected day
  const allSessions = conferenceSchedule[selectedDay]?.sessions || []

  const toggleSession = (sessionId: string) => {
    setExpandedSessions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sessionId)) {
        newSet.delete(sessionId)
      } else {
        newSet.add(sessionId)
      }
      return newSet
    })
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-black">
      {/* Background Pattern - consistent with HeroSection */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Spotlight Effects - responsive positioning */}
      <Spotlight
        className="-top-20 -left-10 md:-top-40 md:left-0 lg:left-60 lg:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-5 left-1/2 md:top-10 md:left-full h-[40vh] w-[80vw] md:h-[80vh] md:w-[50vw]"
        fill="hsl(var(--primary))"
      />
      <Spotlight
        className="top-14 left-20 md:top-28 md:left-80 h-[40vh] w-[80vw] md:h-[80vh] md:w-[50vw]"
        fill="hsl(var(--accent))"
      />

      {/* Background Beams */}
      <BackgroundBeams />

      {/* Main Content with proper responsive container */}
      <div className="relative z-10 w-full min-h-screen">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-12 max-w-7xl">
          {/* Header Section - Responsive typography and spacing */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-700 dark:text-white mx-auto leading-tight mb-3 sm:mb-4 md:mb-6 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conference{" "}
              <Highlight className="text-black dark:text-white">
                Schedule
              </Highlight>
            </motion.h1>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="font-bold">ICLLP-2026</span> • International Conference on Language, Literature & Pedagogy
            </motion.p>
          </motion.div>

          {/* Day Selection - Responsive tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mb-6 sm:mb-8 md:mb-12 px-2"
          >
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-xl border border-white/20 dark:border-black/20 w-full max-w-md sm:max-w-lg">
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                {conferenceSchedule.map((day, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setSelectedDay(index)
                      setExpandedSessions(new Set())
                    }}
                    className={`flex-1 px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      selectedDay === index
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/5'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold">{day.dayName}</div>
                        <div className="text-xs opacity-80 hidden sm:block">{day.date}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sessions Grid - Fully responsive */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <AnimatePresence>
                {allSessions.map((session, index) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <motion.div
                      className="bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 dark:border-black/20 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 h-full cursor-pointer"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleSession(session.id)}
                    >
                      {/* Session Header - Responsive layout */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1 sm:gap-2 text-neutral-500 dark:text-neutral-400">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm font-semibold">{session.time}</span>
                        </div>
                      </div>
                      
                      {/* Session Title - Responsive typography */}
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                        {session.title}
                      </h3>
                      
                      {/* Session Info - Responsive spacing and text */}
                      <div className="space-y-2 sm:space-y-3">
                        {session.speakers && session.speakers.length > 0 && (
                          <div className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                            <div className="text-xs sm:text-sm leading-relaxed">
                              <span className="font-medium">Speakers: </span>
                              <span>{session.speakers.slice(0, 1).join(', ')}</span>
                              {session.speakers.length > 1 && (
                                <span className="text-blue-600 dark:text-blue-400 font-medium">
                                  {' '}+{session.speakers.length - 1} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {session.moderator && (
                          <div className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                            <span className="text-xs sm:text-sm leading-relaxed">
                              <span className="font-medium">Moderator:</span> {session.moderator}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Expand Button - Responsive sizing */}
                      <div className="flex justify-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20 dark:border-black/20">
                        <Button variant="ghost" size="sm" className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
                          {expandedSessions.has(session.id) ? (
                            <>Show Less <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" /></>
                          ) : (
                            <>Show More <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" /></>
                          )}
                        </Button>
                      </div>

                      {/* Expanded Content - Responsive */}
                      <AnimatePresence>
                        {expandedSessions.has(session.id) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20 dark:border-black/20"
                          >
                            {session.speakers && session.speakers.length > 0 && (
                              <div className="mb-3 sm:mb-4">
                                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 text-sm sm:text-base">All Speakers:</h4>
                                <div className="space-y-1 sm:space-y-2">
                                  {session.speakers.map((speaker, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
                                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                      <span className="leading-relaxed">{speaker}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {session.description && (
                              <div className="mb-3 sm:mb-4">
                                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 text-sm sm:text-base">Description:</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">{session.description}</p>
                              </div>
                            )}
                            
                            {session.location && (
                              <div>
                                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2 text-sm sm:text-base">Location:</h4>
                                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">{session.location}</p>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Summary Stats - Fully responsive grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { 
                  icon: Target, 
                  value: allSessions.length, 
                  label: 'Sessions',
                  color: 'from-blue-500 to-blue-600'
                },
                { 
                  icon: Users, 
                  value: allSessions.reduce((acc, session) => acc + (session.speakers?.length || 0), 0), 
                  label: 'Speakers',
                  color: 'from-purple-500 to-purple-600'
                },
                { 
                  icon: MapPin, 
                  value: new Set(allSessions.map(session => session.moderator).filter(Boolean)).size, 
                  label: 'Moderators',
                  color: 'from-indigo-500 to-indigo-600'
                },
                { 
                  icon: Zap, 
                  value: 2, 
                  label: 'Days',
                  color: 'from-green-500 to-green-600'
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 dark:bg-black/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 dark:border-black/20 text-center group hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </motion.div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}