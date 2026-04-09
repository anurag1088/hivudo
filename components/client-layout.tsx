"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "@/contexts/theme"

export function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
