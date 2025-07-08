
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Compass, Hotel, Utensils } from "lucide-react";
import { Card } from "@/components/ui/card";

const Map = () => {
  const [activeTab, setActiveTab] = useState("destinations");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-tourism-blue py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Carte interactive
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Découvrez nos destinations et points d'intérêt sur notre carte interactive
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-tourism-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-6 space-x-4 flex-wrap">
              <Button 
                variant={activeTab === "destinations" ? "default" : "outline"}
                className={activeTab === "destinations" ? "bg-tourism-turquoise m-1" : "m-1"}
                onClick={() => setActiveTab("destinations")}
              >
                <Compass className="mr-2 h-4 w-4" />
                Destinations
              </Button>
              <Button 
                variant={activeTab === "hotels" ? "default" : "outline"}
                className={activeTab === "hotels" ? "bg-tourism-turquoise m-1" : "m-1"}
                onClick={() => setActiveTab("hotels")}
              >
                <Hotel className="mr-2 h-4 w-4" />
                Hôtels
              </Button>
              <Button 
                variant={activeTab === "restaurants" ? "default" : "outline"}
                className={activeTab === "restaurants" ? "bg-tourism-turquoise m-1" : "m-1"}
                onClick={() => setActiveTab("restaurants")}
              >
                <Utensils className="mr-2 h-4 w-4" />
                Restaurants
              </Button>
            </div>

            <div className="bg-gray-200 rounded-xl h-[600px] relative overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')" }}
              ></div>
              
              {/* Map pins for each category */}
              {activeTab === "destinations" && (
                <>
                  <div className="absolute top-1/4 left-1/3 animate-pulse">
                    <MapPin size={32} className="text-tourism-coral fill-tourism-coral/20" />
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                      Paris
                    </span>
                  </div>
                  <div className="absolute top-1/2 left-1/2 animate-pulse">
                    <MapPin size={32} className="text-tourism-coral fill-tourism-coral/20" />
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                      Rome
                    </span>
                  </div>
                </>
              )}

              {activeTab === "hotels" && (
                <>
                  <div className="absolute top-1/3 left-1/4 animate-pulse">
                    <Hotel size={28} className="text-tourism-blue fill-tourism-blue/20" />
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                      Grand Hotel
                    </span>
                  </div>
                  <div className="absolute bottom-1/3 right-1/4 animate-pulse">
                    <Hotel size={28} className="text-tourism-blue fill-tourism-blue/20" />
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                      Royal Palace
                    </span>
                  </div>
                </>
              )}

              {activeTab === "restaurants" && (
                <>
                  <div className="absolute top-1/4 right-1/3 animate-pulse">
                    <Utensils size={28} className="text-tourism-turquoise fill-tourism-turquoise/20" />
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                      Le Gourmet
                    </span>
                  </div>
                  <div className="absolute bottom-1/4 left-1/3 animate-pulse">
                    <Utensils size={28} className="text-tourism-turquoise fill-tourism-turquoise/20" />
                    <span className="bg-white px-2 py-1 rounded-full text-xs font-medium shadow-md">
                      La Trattoria
                    </span>
                  </div>
                </>
              )}
              
              <div className="absolute inset-0 flex items-center justify-center">
                <Card className="p-8 max-w-md text-center bg-white/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4">Carte interactive complète</h3>
                  <p className="text-gray-600 mb-6">
                    Pour accéder à notre carte interactive complète avec des fonctionnalités de filtrage et de recherche avancées,
                    veuillez vous inscrire ou vous connecter à votre compte.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-tourism-turquoise hover:bg-tourism-blue">
                      Se connecter
                    </Button>
                    <Button variant="outline" className="border-tourism-turquoise text-tourism-turquoise hover:bg-tourism-turquoise/10">
                      S'inscrire
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Map;
