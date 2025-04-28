"use client"

import { cn } from "@/lib/utils"

interface AlchemicalLogoProps {
  className?: string
  variant?: "default" | "footer" | "transparent"
  lineColor?: string
}

export function AlchemicalLogo({ className, variant = "default", lineColor }: AlchemicalLogoProps) {
  const getFillColor = () => {
    if (variant === "transparent" && lineColor) {
      return lineColor
    }
    return variant === "footer" ? "white" : "currentColor"
  }

  return (
    <button
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }}
      className={cn("block cursor-pointer", className)}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "w-full h-full",
          variant === "transparent" ? "bg-transparent" : "bg-stone-800 rounded-full"
        )}
      >
        {/* Earth symbol (triangle pointing down) combined with Air symbol (triangle pointing up) */}
        <path
          d="M50 10L85 70H15L50 10Z"
          stroke={getFillColor()}
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M50 90L15 30H85L50 90Z"
          stroke={getFillColor()}
          strokeWidth="3"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Circle in the center representing unity */}
        <circle
          cx="50"
          cy="50"
          r="10"
          stroke={getFillColor()}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </button>
  )
}
