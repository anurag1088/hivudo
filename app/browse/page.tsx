"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Filter, X, ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SearchBar } from "@/components/search-bar"
import { EditorCard } from "@/components/editor-card"
import { Button } from "@/components/ui/button"
import { editors, niches, budgetRanges, deliveryOptions, filterEditors } from "@/lib/data"

function BrowseContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get("q") || ""
  const initialNiche = searchParams.get("niche") || ""

  const [selectedNiche, setSelectedNiche] = useState(initialNiche)
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null)
  const [selectedDelivery, setSelectedDelivery] = useState<number | null>(null)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(initialQuery)

  const filteredEditors = useMemo(() => {
    const budget = selectedBudget !== null ? budgetRanges[selectedBudget] : undefined
    const delivery = selectedDelivery !== null ? deliveryOptions[selectedDelivery].days : undefined
    return filterEditors(selectedNiche || undefined, budget, delivery, searchQuery)
  }, [selectedNiche, selectedBudget, selectedDelivery, searchQuery])

  const clearFilters = () => {
    setSelectedNiche("")
    setSelectedBudget(null)
    setSelectedDelivery(null)
    setSearchQuery("")
  }

  const hasActiveFilters = selectedNiche || selectedBudget !== null || selectedDelivery !== null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Browse Video Editors</h1>
            <p className="mt-2 text-muted-foreground">
              Find the perfect editor for your next project
            </p>
          </div>

          {/* Search and Mobile Filter Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative max-w-md">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search editors..."
                  className="w-full bg-input border border-border rounded-xl pl-4 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
            <Button
              variant="outline"
              className="sm:hidden flex items-center gap-2 border-border text-foreground"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
              {hasActiveFilters && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                  Active
                </span>
              )}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside
              className={`lg:w-64 flex-shrink-0 ${
                mobileFiltersOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-semibold text-foreground">Filters</h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Niche Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Niche</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {niches.map((niche) => (
                      <label key={niche} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="niche"
                          checked={selectedNiche === niche}
                          onChange={() => setSelectedNiche(niche)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {niche}
                        </span>
                      </label>
                    ))}
                    {selectedNiche && (
                      <button
                        onClick={() => setSelectedNiche("")}
                        className="text-xs text-primary hover:underline mt-2"
                      >
                        Clear niche
                      </button>
                    )}
                  </div>
                </div>

                {/* Budget Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-foreground mb-3">Budget (per video)</h3>
                  <div className="space-y-2">
                    {budgetRanges.map((range, index) => (
                      <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="budget"
                          checked={selectedBudget === index}
                          onChange={() => setSelectedBudget(index)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {range.label}
                        </span>
                      </label>
                    ))}
                    {selectedBudget !== null && (
                      <button
                        onClick={() => setSelectedBudget(null)}
                        className="text-xs text-primary hover:underline mt-2"
                      >
                        Clear budget
                      </button>
                    )}
                  </div>
                </div>

                {/* Delivery Time Filter */}
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-3">Delivery Time</h3>
                  <div className="space-y-2">
                    {deliveryOptions.map((option, index) => (
                      <label key={option.label} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          name="delivery"
                          checked={selectedDelivery === index}
                          onChange={() => setSelectedDelivery(index)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {option.label}
                        </span>
                      </label>
                    ))}
                    {selectedDelivery !== null && (
                      <button
                        onClick={() => setSelectedDelivery(null)}
                        className="text-xs text-primary hover:underline mt-2"
                      >
                        Clear delivery
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </aside>

            {/* Editor Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-medium">{filteredEditors.length}</span> editors found
                </p>
                {hasActiveFilters && (
                  <div className="flex flex-wrap gap-2">
                    {selectedNiche && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                        {selectedNiche}
                        <button onClick={() => setSelectedNiche("")}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                    {selectedBudget !== null && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                        {budgetRanges[selectedBudget].label}
                        <button onClick={() => setSelectedBudget(null)}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                    {selectedDelivery !== null && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                        {deliveryOptions[selectedDelivery].label}
                        <button onClick={() => setSelectedDelivery(null)}>
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Grid */}
              {filteredEditors.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredEditors.map((editor) => (
                    <EditorCard key={editor.id} editor={editor} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="h-16 w-16 rounded-full bg-secondary mx-auto flex items-center justify-center mb-4">
                    <Filter className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">No editors found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filters or search query
                  </p>
                  <Button onClick={clearFilters} variant="outline" className="border-border text-foreground">
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function BrowsePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <BrowseContent />
    </Suspense>
  )
}
