"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  isAuthPage?: boolean
}

export function Navbar({ isAuthPage = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <svg
              className="mr-2 h-6 w-6 text-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
            <span className="text-xl font-bold">TreasuryAI</span>
          </Link>
        </div>

        {!isAuthPage && (
          <>
            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-6 md:flex">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/auth" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Login
              </Link>
              <Button asChild size="sm">
                <Link href="/auth?tab=register">Get Started</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="block md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && !isAuthPage && (
        <div className="border-b bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/auth"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <Button asChild size="sm" className="w-full">
              <Link href="/auth?tab=register" onClick={() => setIsMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
