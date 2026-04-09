import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold text-background">Hivudo</span>
            </Link>
            <p className="text-background/70 text-sm">
              India&apos;s premier platform for hiring talented video editors.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">For Clients</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/browse" className="text-background/70 hover:text-background text-sm transition-colors">
                  Find Editors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  How to Hire
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Talent Marketplace
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Project Catalog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">For Editors</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/signup" className="text-background/70 hover:text-background text-sm transition-colors">
                  Find Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Direct Contracts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Getting Paid
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
                  Trust & Safety
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            2024 Hivudo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/70 hover:text-background text-sm transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
