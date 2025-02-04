import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const products = [
  { id: 1, name: 'Chocolate Cake', price: '$25', image: '/placeholder.svg' },
  { id: 2, name: 'Croissant', price: '$4', image: '/placeholder.svg' },
  { id: 3, name: 'Sourdough Bread', price: '$6', image: '/placeholder.svg' },
  { id: 4, name: 'Cupcakes', price: '$3', image: '/placeholder.svg' },
  { id: 5, name: 'Danish Pastry', price: '$4', image: '/placeholder.svg' },
  { id: 6, name: 'Baguette', price: '$5', image: '/placeholder.svg' },
];

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <p className="text-lg font-semibold text-primary">{product.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;