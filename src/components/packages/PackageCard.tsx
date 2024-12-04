import React from 'react';
import { Package } from '../../types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface PackageCardProps {
  package: Package;
}

export function PackageCard({ package: pkg }: PackageCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={pkg.imageUrl} 
        alt={pkg.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{pkg.title}</h3>
          {pkg.onSale ? (
            <div className="flex flex-col items-end">
              <span className="text-sm line-through text-gray-500">Rs.{pkg.price}</span>
              <span className="text-lg font-bold text-purple-600">Rs.{pkg.salePrice}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-purple-600">Rs.{pkg.price}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
        <button
          onClick={() => addToCart(pkg)}
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}