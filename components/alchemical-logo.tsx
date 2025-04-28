import { cn } from "@/lib/utils"

interface AlchemicalLogoProps {
  className?: string
}

export function AlchemicalLogo({ className }: AlchemicalLogoProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("text-current", className)}>
      {/* Earth symbol (triangle pointing down) combined with Air symbol (triangle pointing up) */}
      <path d="M50 10L85 70H15L50 10Z" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M50 90L15 30H85L50 90Z" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="4 4" />
      {/* Circle in the center representing unity */}
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  )
}
