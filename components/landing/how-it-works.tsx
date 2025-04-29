const steps = [
  {
    title: "Connect Your Financial Systems",
    description: "Securely integrate with your ERP, accounting software, and banking platforms.",
  },
  {
    title: "Get AI-Powered Analysis",
    description: "Our AI analyzes your cash flow patterns and financial data to provide actionable insights.",
  },
  {
    title: "Implement Recommendations",
    description: "Follow tailored advice to optimize liquidity, investments, and payment strategies.",
  },
  {
    title: "Monitor Performance",
    description: "Track key treasury metrics and financial KPIs through customizable dashboards.",
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Implementing our AI treasury management solution is straightforward and secure.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-8" />
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground md:h-16 md:w-16">
                    <span className="text-sm font-bold md:text-xl">{index + 1}</span>
                  </div>
                  <div className="pb-2">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
