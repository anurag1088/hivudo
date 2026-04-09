"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage
  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("hivudo-theme")
    if (saved === "dark") {
      setIsDark(true)
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    const newTheme = !isDark ? "dark" : "light"
    localStorage.setItem("hivudo-theme", newTheme)
    if (!isDark) {
      document.documentElement.classList.add("dark-mode")
    } else {
      document.documentElement.classList.remove("dark-mode")
    }
  }

  // Prevent hydration mismatch
  if (!mounted) return <>{children}</>

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
