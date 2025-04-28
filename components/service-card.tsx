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
    <div className="bg-white rounded-md border border-stone-200 shadow-sm transition-all hover:border-stone-300 hover:shadow-md overflow-hidden">
      <div className="p-6 space-y-5">
        <div className="flex items-start justify-between gap-3">
          <div className="p-2.5 bg-stone-100 rounded-md inline-flex items-center justify-center">
            <Icon className="h-5 w-5 text-stone-700" />
          </div>
          {status && (
            <span className="inline-block bg-stone-100 text-stone-700 text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap">
              {status}
            </span>
          )}
        </div>

        <div className="space-y-2.5">
          <h3 className="text-lg font-semibold text-stone-800">{title}</h3>
          <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
        </div>

        {link && (
          <div className="pt-1">
            <Link
              href={link.url}
              target={link.url.startsWith("#") ? undefined : "_blank"}
              rel={link.url.startsWith("#") ? undefined : "noopener noreferrer"}
              className="text-stone-800 font-medium hover:underline inline-flex items-center text-sm"
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
                className="ml-1.5 h-3 w-3"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
