import type { LucideIcon } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  status?: string
  link?: {
    url: string
    text: string
  }
}

export function ServiceCard({ title, description, icon: Icon, status, link }: ServiceCardProps) {
  return (
    <div className="bg-stone-100 p-8 rounded-sm border border-stone-200 transition-all hover:border-stone-400 hover:shadow-sm">
      <div className="mb-6 p-4 inline-flex items-center justify-center bg-stone-200 rounded-sm">
        <Icon className="h-8 w-8 text-stone-700" />
      </div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        {status && (
          <span className="inline-block bg-stone-200 text-stone-700 text-xs font-medium px-2 py-1 rounded-sm">
            {status}
          </span>
        )}
      </div>
      <p className="text-stone-700 leading-relaxed mb-4">{description}</p>
      {link && (
        <div className="mt-2">
          <Link
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-800 font-medium hover:underline inline-flex items-center"
          >
            {link.text}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  )
}
