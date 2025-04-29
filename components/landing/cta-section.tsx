import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-primary/5 p-8 text-center md:p-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Treasury Operations?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Join forward-thinking businesses that are optimizing their cash management and financial decision-making
            with our AI-powered platform.
          </p>
          <Button asChild size="lg" className="gap-2 text-lg">
            <Link href="/auth?tab=register">
              Get Started Now <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
