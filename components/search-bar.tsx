"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface SearchBarProps {
  large?: boolean
  defaultValue?: string
}

export function SearchBar({ large = false, defaultValue = "" }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/browse?q=${encodeURIComponent(query.trim())}`)
    } else {
      router.push('/browse')
    }
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className={`relative flex items-center ${large ? 'max-w-xl' : 'max-w-md'}`}>
        <div className="relative flex-1">
          <Search className={`absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground ${large ? 'h-5 w-5' : 'h-4 w-4'}`} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for video editors..."
            className={`w-full bg-card border-2 border-border rounded-l-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all ${
              large ? 'pl-12 pr-4 py-4 text-base' : 'pl-10 pr-4 py-2.5'
            }`}
          />
        </div>
        <Button
          type="submit"
          className={`rounded-l-none rounded-r-full bg-primary hover:bg-primary/90 text-primary-foreground ${
            large ? 'px-8 py-4 h-auto text-base font-medium' : 'px-6'
          }`}
        >
          Search
        </Button>
      </div>
    </form>
  )
}
