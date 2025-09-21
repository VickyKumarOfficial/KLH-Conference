import logoImage from '@/assets/KLH_Logo.png'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={logoImage} 
        alt="KLH Conference Logo" 
        className="h-8 w-auto"
      />
      <span className="font-bold text-lg text-primary">KLH Conference</span>
    </div>
  )
}