
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DestinationCard from "./DestinationCard";
import { Link } from "react-router-dom";

const CATEGORIES = ["Tous", "Plages", "Montagnes", "Villes", "Nature", "Culture"];

const DESTINATIONS = [
  {
    id: "1",
    name: "Montagnes des Alpes",
    location: "France",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 243,
    category: "Montagnes"
  },
  {
    id: "2",
    name: "Plage de Bora Bora",
    location: "Polynésie française",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 325,
    category: "Plages"
  },
  {
    id: "3",
    name: "Tour Eiffel",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 412,
    category: "Villes"
  },
  {
    id: "4",
    name: "Grand Canyon",
    location: "Arizona, USA",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 518,
    category: "Nature"
  },
  {
    id: "5",
    name: "Taj Mahal",
    location: "Agra, Inde",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 329,
    category: "Culture"
  },
  {
    id: "6",
    name: "Chutes du Niagara",
    location: "Canada/USA",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 289,
    category: "Nature"
  },
];

const FeaturedDestinations = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredDestinations = activeCategory === "Tous"
    ? DESTINATIONS
    : DESTINATIONS.filter(dest => dest.category === activeCategory);

  return (
    <section className="py-16 bg-tourism-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tourism-blue sm:text-4xl">Destinations populaires</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos destinations les plus appréciées par nos voyageurs du monde entier
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((category) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} {...destination} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-tourism-blue hover:bg-tourism-light-blue text-white" asChild>
            <Link to="/destinations">Voir toutes les destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
