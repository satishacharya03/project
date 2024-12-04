import React from 'react';

interface PackageFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function PackageFilters({ selectedCategory, onCategoryChange }: PackageFiltersProps) {
  const categories = ['all', 'free-fire', 'pubg', 'other'];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}