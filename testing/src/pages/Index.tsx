import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-display text-white mb-6">
              Artisanal Bakery & Confections
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover our handcrafted pastries, breads, and sweet delights made with love and tradition.
            </p>
            <Button asChild size="lg" className="font-medium">
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-16">
            Our Most Loved Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-600">4.9</span>
                  </div>
                  <h3 className="font-display text-xl mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button asChild variant="secondary" className="w-full">
                    <Link to={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const featuredProducts = [
  {
    id: 1,
    name: "Artisan Sourdough",
    description: "Traditional sourdough bread made with our century-old starter.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 2,
    name: "French Croissants",
    description: "Buttery, flaky croissants made in the authentic French style.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    id: 3,
    name: "Chocolate Eclairs",
    description: "Light choux pastry filled with rich chocolate cream.",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
];

export default Index;