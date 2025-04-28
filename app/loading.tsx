export default function Loading() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="container mx-auto py-3 px-5">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 bg-stone-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-stone-200 rounded animate-pulse" />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-5 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="h-8 w-3/4 bg-stone-200 rounded animate-pulse mb-4" />
            <div className="h-4 w-full bg-stone-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-5/6 bg-stone-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-4/6 bg-stone-200 rounded animate-pulse" />
          </div>
        </div>
      </main>
    </div>
  )
} 