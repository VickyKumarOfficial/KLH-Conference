"use client";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import klhLogo from '@/assets/KLH_Logo.png';
import efl from '@/assets/EFL.jpg';
import cambridge from '@/assets/Cambridge.jpg';

export default function LogoBar() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // SVG patterns for different states and themes (same as HeroHighlight)
  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
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
    <section 
      className="group relative bg-neutral-50 dark:bg-neutral-900/50 py-8 transition-colors duration-300"
      onMouseMove={handleMouseMove}
    >
      <BackgroundBeams className="absolute inset-0 opacity-75" />
      
      {/* Dot pattern backgrounds */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.default,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      
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
                className="h-16 md:h-24 lg:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 group-hover:brightness-110"
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