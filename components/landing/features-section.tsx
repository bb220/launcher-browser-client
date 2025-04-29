import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Brain, LineChart, Lock, Wallet, Sparkles } from "lucide-react"

const features = [
  {
    title: "AI Cash Forecasting",
    description: "Predict cash positions with machine learning models that improve over time with your business data.",
    icon: Brain,
  },
  {
    title: "Liquidity Management",
    description: "Optimize working capital and ensure your business always has the right amount of cash on hand.",
    icon: Wallet,
  },
  {
    title: "Payment Optimization",
    description: "Automate payment timing to maximize cash flow and capture early payment discounts.",
    icon: BarChart3,
  },
  {
    title: "Investment Strategies",
    description: "Receive AI-powered recommendations for short-term investments based on your cash surplus.",
    icon: LineChart,
  },
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption and security protocols to protect your company's financial data.",
    icon: Lock,
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate financial risks with AI-powered analysis and scenario planning.",
    icon: Sparkles,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our AI-powered platform provides everything your business needs to optimize treasury operations.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-background shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
