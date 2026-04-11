"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton, UserButton, useAuth } from '@clerk/nextjs'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isSignedIn } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-foreground">Hivudo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/browse" className="text-foreground hover:text-primary transition-colors font-medium">
                Find Editors
              </Link>
              <Link href="/work" className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1">
                Find Work
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/why-hivudo" className="text-foreground hover:text-primary transition-colors font-medium">
                Why Hivudo
              </Link>
            </div>
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            {isSignedIn ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Profile"
                    labelIcon={<span style={{fontSize:"14px"}}>👤</span>}
                    href="/profile"
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-foreground hover:text-primary transition-colors font-medium">
                    Log In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/browse"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Editors
              </Link>
              <Link
                href="/work"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Work
              </Link>
              <Link
                href="/why-hivudo"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Hivudo
              </Link>
              <div className="flex gap-3 pt-4 border-t border-border">
                {isSignedIn ? (
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Link
                        label="My Profile"
                        labelIcon={<span style={{fontSize:"14px"}}>👤</span>}
                        href="/profile"
                      />
                    </UserButton.MenuItems>
                  </UserButton>
                ) : (
                  <>
                    <SignInButton mode="modal">
                      <Button variant="ghost" className="w-full text-foreground">
                        Log In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button className="w-full bg-primary text-primary-foreground">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}