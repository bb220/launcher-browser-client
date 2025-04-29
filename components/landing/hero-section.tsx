import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background to-transparent" />
      </div>
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-10 w-10 text-primary"
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
        </div>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Intelligent <span className="text-primary">Treasury Management</span>
        </h1>
        <p className="mb-8 max-w-2xl text-xl text-muted-foreground">
          AI-powered treasury solutions that help small and medium businesses optimize cash flow, manage liquidity, and
          make smarter financial decisions.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button asChild size="lg" className="gap-2 text-lg">
            <Link href="/auth?tab=register">
              Get Started <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
