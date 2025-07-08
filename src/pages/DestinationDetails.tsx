import { useParams } from "react-router-dom";
import { useState } from "react";
import { DESTINATIONS } from "@/data/destinations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = DESTINATIONS.find(d => d.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comment, setComment] = useState("");

  // Mock images array (you should add these to your destination data)
  const images = [
    destination?.image,
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
  ];

  const handleBooking = () => {
    toast({
      title: "Réservation en développement",
      description: "La fonctionnalité de réservation sera disponible prochainement."
    });
  };

  const handleComment = () => {
    toast({
      title: "Commentaire en développement",
      description: "La fonctionnalité de commentaire sera disponible prochainement."
    });
    setComment("");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Destination non trouvée</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Gallery */}
        <div className="relative h-[60vh] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
            style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Gallery Navigation */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {destination.name}
              </h1>
              <div className="flex items-center text-white gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-xl">{destination.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-xl">{destination.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Description</h2>
              <p className="text-gray-600 whitespace-pre-line">{destination.description}</p>
            </Card>

            {/* Map Preview */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Localisation</h2>
              <div className="bg-gray-200 h-[300px] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-600">Carte interactive en développement</p>
                </div>
              </div>
            </Card>

            {/* Comments Section */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-6 h-6 text-tourism-turquoise" />
                <h2 className="text-2xl font-bold">Commentaires</h2>
                <span className="text-gray-600">({destination.reviews})</span>
              </div>
              
              <div className="space-y-4">
                <Textarea 
                  placeholder="Partagez votre expérience..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button 
                  className="bg-tourism-turquoise hover:bg-tourism-blue"
                  onClick={handleComment}
                >
                  Publier un commentaire
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Réserver votre voyage</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Arrivée</label>
                    <Input type="date" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Départ</label>
                    <Input type="date" className="w-full" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Voyageurs</label>
                  <Input type="number" min="1" defaultValue="2" className="w-full" />
                </div>
                <Button 
                  className="w-full bg-tourism-turquoise hover:bg-tourism-blue"
                  onClick={handleBooking}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Réserver maintenant
                </Button>
              </div>
            </Card>

            {/* Rating Card */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                <span className="text-2xl font-bold">{destination.rating}</span>
                <span className="text-gray-600">({destination.reviews} avis)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-500" 
                  style={{ width: `${(destination.rating / 5) * 100}%` }}
                />
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DestinationDetails;