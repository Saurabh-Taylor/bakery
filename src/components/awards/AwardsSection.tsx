import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function AwardsSection() {
  const awards = [
    {
      id: 1,
      title: "GUINNESS WORLD RECORDS",
      image: "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Guinness World Records Certificate",
    },
    {
      id: 2,
      title: "GOLDEN BOOK OF WORLD RECORDS",
      image: "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Golden Book of World Records Certificate",
    },
    {
      id: 3,
      title: "BEST OF Bulgaria",
      image: "https://images.unsplash.com/photo-1736156725121-027231636f9d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Best of India Certificate",
    },
    
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certificates for the records that we have created.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award) => (
            <Card key={award.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="aspect-[3/4] relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center font-semibold text-lg">{award.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

