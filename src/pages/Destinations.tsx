
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DESTINATIONS } from "@/data/destinations";
import HeroSection from "@/components/destinations/HeroSection";
import CategoryFilter from "@/components/destinations/CategoryFilter";
import DestinationsList from "@/components/destinations/DestinationsList";
import MapDisplay from "@/components/destinations/MapDisplay";

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tous");

  const CATEGORIES = ["Tous", "Plages", "Montagnes", "Villes", "Nature", "Culture"];

  const filteredDestinations = DESTINATIONS.filter(
    (destination) => {
      return (
        (activeCategory === "Tous" || destination.category === activeCategory) &&
        (destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        destination.location.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Destinations List */}
        <section className="py-16 bg-tourism-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryFilter 
              categories={CATEGORIES} 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <DestinationsList destinations={filteredDestinations} />
          </div>
        </section>

        {/* Map Section */}
        <MapDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
