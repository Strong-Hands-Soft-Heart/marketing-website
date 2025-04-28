"use client"

import { cn } from "@/lib/utils"

interface SvgLogoProps {
  className?: string
  variant?: "header" | "site" | "footer"
}

export function SvgLogo({ className, variant = "site" }: SvgLogoProps) {
  const getLineColor = () => {
    switch (variant) {
      case "header":
        return "stroke-stone-800"
      case "footer":
        return "stroke-white"
      default:
        return "stroke-stone-800"
    }
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
        className="w-full h-full"
      >
        {/* Earth symbol (triangle pointing down) */}
        <path
          d="M50 20L80 70H20L50 20Z"
          className={getLineColor()}
          strokeWidth="3"
          fill="none"
        />
        {/* Air symbol (triangle pointing up) */}
        <path
          d="M50 80L20 30H80L50 80Z"
          className={getLineColor()}
          strokeWidth="3"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Circle in the center representing unity */}
        <circle
          cx="50"
          cy="50"
          r="15"
          className={getLineColor()}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </button>
  )
} 