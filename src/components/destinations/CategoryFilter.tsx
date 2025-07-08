
import React from 'react';
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={activeCategory === category 
            ? "bg-tourism-turquoise hover:bg-tourism-blue" 
            : "text-gray-700 hover:text-tourism-turquoise"}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
