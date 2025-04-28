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
      className={cn(
        "block cursor-pointer",
        variant === "footer" ? "bg-transparent" : "bg-transparent",
        className
      )}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        stroke={variant === "footer" ? "white" : "black"}
        fill="none"
        strokeWidth="5"
      >
        <polygon points="50,0 100,50 50,100 0,50" />
        <line x1="0" y1="50" x2="100" y2="50" />
      </svg>
    </button>
  )
} 