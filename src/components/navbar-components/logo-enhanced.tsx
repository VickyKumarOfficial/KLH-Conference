import klhLogo from '@/assets/KLH_Logo.png'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showYear?: boolean
  className?: string
}

export default function Logo({ 
  size = 'md', 
  showYear = true, 
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-6 md:h-7',
    md: 'h-8 md:h-10',
    lg: 'h-10 md:h-12'
  }

  const textSizeClasses = {
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl'
  }

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <img 
        src={klhLogo} 
        alt="KLH Conference Logo" 
        className={`${sizeClasses[size]} w-auto transition-all duration-200 hover:scale-105`}
      />
      <div className="flex flex-col">
        <span className={`font-bold ${textSizeClasses[size]} text-blue-700 leading-tight`}>
          KLH Conference
        </span>
        {showYear && (
          <span className="text-xs text-gray-500 leading-tight hidden sm:block">
            2025
          </span>
        )}
      </div>
    </div>
  )
}