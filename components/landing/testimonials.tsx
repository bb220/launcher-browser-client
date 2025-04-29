import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "This AI treasury solution has transformed our cash management process. We've optimized our working capital and improved our forecasting accuracy by 40%.",
    author: "Sarah Chen",
    role: "CFO, TechGrowth Inc.",
    avatar: "SC",
  },
  {
    quote:
      "As a growing manufacturing business, managing cash flow was always challenging. This platform has helped us reduce idle cash by 25% and identify better short-term investment opportunities.",
    author: "Michael Rodriguez",
    role: "Finance Director, Precision Manufacturing",
    avatar: "MR",
  },
  {
    quote:
      "The AI-powered forecasting has been a game-changer for our seasonal business. We can now predict cash shortfalls weeks in advance and take proactive measures.",
    author: "Alex Johnson",
    role: "Treasurer, Retail Solutions Group",
    avatar: "AJ",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join hundreds of businesses that have transformed their treasury operations with our AI solution.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-background shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-lg italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
