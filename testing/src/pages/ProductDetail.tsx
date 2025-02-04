import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const products = [
  { id: 1, name: 'Chocolate Cake', price: '$25', description: 'Rich and moist chocolate cake with ganache', image: '/placeholder.svg' },
  { id: 2, name: 'Croissant', price: '$4', description: 'Buttery and flaky French pastry', image: '/placeholder.svg' },
  { id: 3, name: 'Sourdough Bread', price: '$6', description: 'Traditional sourdough bread with crispy crust', image: '/placeholder.svg' },
  { id: 4, name: 'Cupcakes', price: '$3', description: 'Assorted flavored cupcakes with frosting', image: '/placeholder.svg' },
  { id: 5, name: 'Danish Pastry', price: '$4', description: 'Sweet pastry with fruit filling', image: '/placeholder.svg' },
  { id: 6, name: 'Baguette', price: '$5', description: 'Classic French bread with crispy crust', image: '/placeholder.svg' },
];

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary">{product.price}</p>
            <p className="text-gray-600">{product.description}</p>
            <Button onClick={handleAddToCart} className="w-full">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;