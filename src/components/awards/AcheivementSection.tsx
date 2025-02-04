import Image from "next/image"

export default function AchievementsSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              CELEBRATING OUR <span className="text-red-600">ACHIEVEMENTS!</span>
            </h2>
            <p className="text-gray-700 text-lg font-semibold leading-relaxed">
              Our journey is marked by numerous accolades and recognitions, showcasing our dedication to crafting
              delightful bakery products. Each achievement inspires us to set higher standards and delight our customers
              with every bite. From industry awards to customer appreciation, every milestone is a testament to our
              passion and perseverance in baking excellence.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1735596365888-ad6d151533f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Achievement recognition ceremony showing award presentation"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

