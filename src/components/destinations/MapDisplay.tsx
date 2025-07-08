
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Hotel, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const MapDisplay = () => {
  const [activeMapTab, setActiveMapTab] = useState("destinations");
  const CATEGORIES = ["Plages", "Montagnes", "Villes", "Nature", "Culture"];

  const handleExploreLogin = () => {
    toast({
      title: "Fonctionnalité en développement",
      description: "La connexion pour explorer la carte sera disponible prochainement.",
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tourism-blue sm:text-4xl">Carte des destinations</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez nos destinations sur la carte interactive et planifiez votre voyage
          </p>
        </div>
        
        <div className="flex justify-center mb-6 space-x-4 flex-wrap">
          <Button 
            variant={activeMapTab === "destinations" ? "default" : "outline"}
            className={activeMapTab === "destinations" ? "bg-tourism-turquoise m-1" : "m-1"}
            onClick={() => setActiveMapTab("destinations")}
          >
            <MapPin className="mr-2 h-4 w-4" />
            Destinations
          </Button>
          <Button 
            variant={activeMapTab === "hotels" ? "default" : "outline"}
            className={activeMapTab === "hotels" ? "bg-tourism-turquoise m-1" : "m-1"}
            onClick={() => setActiveMapTab("hotels")}
          >
            <Hotel className="mr-2 h-4 w-4" />
            Hôtels
          </Button>
          <Button 
            variant={activeMapTab === "restaurants" ? "default" : "outline"}
            className={activeMapTab === "restaurants" ? "bg-tourism-turquoise m-1" : "m-1"}
            onClick={() => setActiveMapTab("restaurants")}
          >
            <Utensils className="mr-2 h-4 w-4" />
            Restaurants
          </Button>
        </div>
        
        <div className="bg-gray-200 rounded-xl h-[500px] relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')" }}
          ></div>
          
          {/* Map pins for each category */}
          {CATEGORIES.map((category, index) => {
            // Position the pins at different locations
            const positions = [
              { top: '20%', left: '25%' },
              { top: '40%', left: '60%' },
              { bottom: '30%', right: '20%' },
              { bottom: '40%', left: '30%' },
              { top: '30%', right: '25%' }
            ];
            
            return (
              <div 
                key={category} 
                className="absolute animate-pulse"
                style={positions[index]}
              >
                <div className="flex flex-col items-center">
                  <MapPin size={32} className="text-tourism-coral fill-tourism-coral/20" />
                  <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                    {category}
                  </span>
                </div>
              </div>
            );
          })}
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-xl max-w-md text-center">
              <h3 className="text-xl font-bold mb-4">Carte interactive des destinations</h3>
              <p className="text-gray-600 mb-6">
                Pour accéder à notre carte interactive complète avec des fonctionnalités de filtrage avancées,
                veuillez vous inscrire ou vous connecter à votre compte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-tourism-turquoise hover:bg-tourism-blue" 
                  onClick={handleExploreLogin}
                >
                  Se connecter pour explorer
                </Button>
                <Button 
                  variant="outline" 
                  className="border-tourism-turquoise text-tourism-turquoise hover:bg-tourism-turquoise/10"
                  asChild
                >
                  <Link to="/map">Voir la carte</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapDisplay;
