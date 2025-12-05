import { Button } from '@/components/ui/button'
import { ShoppingBag } from 'lucide-react'

export const RoutineSection = () => {
  const steps = [
    {
      number: "01",
      title: "Cleanse",
      description: "Start with our gentle face wash to remove dirt, oil, and impurities. Use morning and night for best results.",
      product: "Gentle Face Wash"
    },
    {
      number: "02",
      title: "Exfoliate",
      description: "Use face scrub 2-3 times per week to remove dead skin cells and unclog pores for smoother skin.",
      product: "Face Scrub"
    },
    {
      number: "03",
      title: "Moisturize",
      description: "Lock in hydration with our daily moisturizer. Apply while skin is still slightly damp for maximum absorption.",
      product: "Daily Moisturizer"
    }
  ]

  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your 3-Step Routine
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master the fundamentals of men's skincare with our proven routine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-lg p-8 h-full">
                <div className="text-6xl font-bold text-primary/10 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <div className="text-sm font-medium text-primary">
                  Recommended: {step.product}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-muted-foreground">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            onClick={() => {
              const productsSection = document.getElementById('products')
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <ShoppingBag className="mr-2 h-5 w-5" />
            Build Your Routine
          </Button>
        </div>
      </div>
    </section>
  )
}