import { Link, useLocation } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import Logo from "@/components/navbar-components/logo"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { 
  Users, 
  BookOpen,
  ChevronDown 
} from "lucide-react"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/speakers", label: "Speakers" },
  { href: "/schedule", label: "Schedule" },
  { href: "#about", label: "About", hasDropdown: true },
]

// About dropdown sections
const aboutDropdownItems = [
  { 
    href: "/about-us", 
    label: "About Us", 
    icon: BookOpen,
    isRoute: true
  },
  { 
    href: "#conferences", 
    label: "Conferences", 
    icon: Users,
    isRoute: false
  }
]

// Custom hoverable dropdown component that supports both hover and click events
interface HoverableDropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

function HoverableDropdownMenu({ trigger, children }: HoverableDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  // Clear any existing timeout to prevent race conditions
  const clearHoverTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }
  
  // Handle mouse enter event
  const handleMouseEnter = () => {
    clearHoverTimeout()
    setIsOpen(true)
  }
  
  // Handle mouse leave event with a small delay to prevent accidental closing
  const handleMouseLeave = () => {
    clearHoverTimeout()
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }
  
  // Handle click event to toggle dropdown
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  
  // Handle clicks outside to close dropdown
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])
  
  return (
    <div 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <div onClick={handleClick}>
        {trigger}
      </div>
      {isOpen && children}
    </div>
  )
}

export default function ConferenceNavbar() {
  const location = useLocation()
  
  return (
    <header className="px-4 md:px-6 bg-white/95 dark:bg-black/95 backdrop-blur-lg transition-colors duration-300 sticky top-0 z-50">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-out group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-in-out group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-out group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={`mobile-${link.href}-${index}`} className="w-full">
                      {link.hasDropdown ? (
                        <HoverableDropdownMenu
                          trigger={
                            <button className="flex items-center justify-between w-full py-1.5 text-left">
                              {link.label} <ChevronDown className="h-4 w-4" />
                            </button>
                          }
                        >
                          <div className="absolute top-full left-0 z-50 w-full overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80">
                            <div className="space-y-1">
                              {aboutDropdownItems.map((item, i) => (
                                item.isRoute ? (
                                  <Link 
                                    key={i}
                                    to={item.href}
                                    className="flex items-center gap-2 rounded-sm p-2 text-sm hover:bg-accent"
                                  >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                  </Link>
                                ) : (
                                  <a 
                                    key={i}
                                    href={item.href}
                                    className="flex items-center gap-2 rounded-sm p-2 text-sm hover:bg-accent"
                                  >
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                  </a>
                                )
                              ))}
                            </div>
                          </div>
                        </HoverableDropdownMenu>
                      ) : link.href.startsWith('/') ? (
                        <NavigationMenuLink asChild>
                          <Link 
                            to={link.href} 
                            className="block w-full py-1.5"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      ) : (
                        <NavigationMenuLink
                          href={link.href}
                          className="py-1.5"
                          active={location.pathname === "/" && link.href.includes("home")}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={`desktop-${link.href}-${index}`}>
                    {link.hasDropdown ? (
                      <HoverableDropdownMenu
                        trigger={
                          <button className="text-muted-foreground hover:text-primary py-1.5 font-medium flex items-center gap-1 outline-none">
                            {link.label} <ChevronDown className="h-4 w-4" />
                          </button>
                        }
                      >
                        <div className="absolute z-50 mt-1 min-w-[220px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-1">
                          {aboutDropdownItems.map((item, i) => (
                            item.isRoute ? (
                              <Link 
                                key={i}
                                to={item.href}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                              >
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.label}</span>
                              </Link>
                            ) : (
                              <a 
                                key={i}
                                href={item.href}
                                className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                              >
                                <item.icon className="mr-2 h-4 w-4" />
                                <span>{item.label}</span>
                              </a>
                            )
                          ))}
                        </div>
                      </HoverableDropdownMenu>
                    ) : link.href.startsWith('/') ? (
                      <NavigationMenuLink asChild>
                        <Link 
                          to={link.href}
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                    ) : (
                      <NavigationMenuLink
                        active={location.pathname === "/" && link.href.includes("home")}
                        href={link.href}
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="text-sm">
            <a href="#contact">Contact</a>
          </Button>
          <Button asChild size="sm" className="text-sm">
            <Link to="/registration">Register Now</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
