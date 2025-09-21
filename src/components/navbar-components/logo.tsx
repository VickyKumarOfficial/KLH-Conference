import logoImage from '@/assets/KLH_Logo.png'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoImage} 
        alt="KLH Conference Logo" 
        className="h-8 w-auto transition-opacity duration-300 dark:brightness-110"
      />
      <span className="font-bold text-lg text-foreground transition-colors duration-300">KLH Conference</span>
    </div>
  )
}