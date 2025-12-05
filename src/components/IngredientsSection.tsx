import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const IngredientsSection = () => {
  const ingredients = [
    {
      name: "Argan Oil",
      description: "Rich in vitamin E and fatty acids, argan oil deeply moisturizes and nourishes skin and beard hair. Known for its anti-aging properties and ability to reduce inflammation."
    },
    {
      name: "Jojoba Oil",
      description: "Closely mimics skin's natural oils, making it perfect for balancing oil production. Non-comedogenic and excellent for all skin types, especially sensitive skin."
    },
    {
      name: "Tea Tree Oil",
      description: "Natural antibacterial and antifungal properties help combat acne and skin irritation. Effective for cleansing pores and promoting clear, healthy skin."
    },
    {
      name: "Charcoal",
      description: "Acts like a magnet to draw out impurities, toxins, and excess oil from pores. Provides deep cleansing without stripping skin of essential moisture."
    },
    {
      name: "Vitamin E",
      description: "Powerful antioxidant that protects skin from environmental damage and free radicals. Supports skin repair and helps reduce signs of aging."
    },
    {
      name: "Aloe Vera",
      description: "Soothes and hydrates skin naturally. Contains vitamins, minerals, and antioxidants that promote healing and reduce irritation after shaving."
    },
    {
      name: "Shea Butter",
      description: "Ultra-moisturizing natural butter rich in vitamins A and E. Provides long-lasting hydration and helps soften and condition beard hair."
    },
    {
      name: "Beeswax",
      description: "Natural styling agent that provides light hold for beard shaping. Creates a protective barrier that locks in moisture and protects against environmental elements."
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Know Your Ingredients
          </h2>
          <p className="text-lg text-muted-foreground">
            We use only premium natural ingredients. Here's what makes our products effective.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {ingredients.map((ingredient, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {ingredient.name}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {ingredient.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}