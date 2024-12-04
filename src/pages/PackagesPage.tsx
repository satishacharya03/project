import React, { useState } from 'react';
import { PackageGrid } from '../components/packages/PackageGrid';
import { PackageFilters } from '../components/packages/PackageFilters';
import { usePackages } from '../hooks/usePackages';

export function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { packages, loading } = usePackages();

  const filteredPackages = packages.filter(
    pkg => selectedCategory === 'all' || pkg.category === selectedCategory
  );

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="h-80 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Gaming Packages</h1>
      <PackageFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <PackageGrid packages={filteredPackages} />
    </div>
  );
}