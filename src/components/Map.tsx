
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const MapSection = () => {
  const [activeTab, setActiveTab] = useState("popular");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-tourism-blue sm:text-4xl">Carte interactive</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explorez nos destinations sur la carte et trouvez votre prochaine aventure
          </p>
        </div>

        <div className="flex justify-center mb-6 space-x-4">
          <Button 
            variant={activeTab === "popular" ? "default" : "outline"}
            className={activeTab === "popular" ? "bg-tourism-turquoise" : ""}
            onClick={() => setActiveTab("popular")}
          >
            Destinations populaires
          </Button>
          <Button 
            variant={activeTab === "hotels" ? "default" : "outline"}
            className={activeTab === "hotels" ? "bg-tourism-turquoise" : ""}
            onClick={() => setActiveTab("hotels")}
          >
            Hôtels
          </Button>
          <Button 
            variant={activeTab === "restaurants" ? "default" : "outline"}
            className={activeTab === "restaurants" ? "bg-tourism-turquoise" : ""}
            onClick={() => setActiveTab("restaurants")}
          >
            Restaurants
          </Button>
        </div>

        <div className="bg-gray-200 rounded-xl h-96 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')" }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Card className="p-8 max-w-md text-center">
              <h3 className="text-xl font-bold mb-4">Carte interactive</h3>
              <p className="text-gray-600 mb-6">
                Pour accéder à notre carte interactive complète avec des fonctionnalités de filtrage et de recherche avancées,
                veuillez vous inscrire ou vous connecter à votre compte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-tourism-turquoise hover:bg-tourism-blue" asChild>
                  <Link to="/map">Voir la carte</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Map Pin Indicators */}
          <div className="absolute top-1/4 left-1/3 animate-pulse">
            <MapPin size={28} className="text-tourism-coral fill-tourism-coral/20" />
          </div>
          <div className="absolute top-1/2 left-1/2 animate-pulse">
            <MapPin size={28} className="text-tourism-coral fill-tourism-coral/20" />
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-pulse">
            <MapPin size={28} className="text-tourism-coral fill-tourism-coral/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
