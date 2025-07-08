
import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface HeroSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const HeroSection = ({ searchTerm, setSearchTerm }: HeroSectionProps) => {
  return (
    <section className="bg-tourism-blue py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Explorez nos destinations
        </h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Découvrez des centaines de destinations à travers le monde et trouvez votre prochaine aventure
        </p>
        <div className="relative max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Rechercher une destination..."
            className="pl-10 pr-4 py-6 w-full rounded-full text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
