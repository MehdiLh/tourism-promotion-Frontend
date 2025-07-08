
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface DestinationCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  description?: string;
}

const DestinationCard = ({ id, name, location, image, rating, reviews, description }: DestinationCardProps) => {
  return (
    <Link to={`/destinations/${id}`}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1">
            <Star size={16} className="text-tourism-coral fill-tourism-coral" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <CardContent className="pt-4">
          <h3 className="text-lg font-semibold line-clamp-1">{name}</h3>
          <div className="flex items-center mt-1 text-gray-500">
            <MapPin size={16} className="mr-1 text-tourism-turquoise" />
            <span className="text-sm">{location}</span>
          </div>
          {description && (
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
          )}
        </CardContent>
        <CardFooter className="text-sm text-gray-500">
          {reviews} avis
        </CardFooter>
      </Card>
    </Link>
  );
};

export default DestinationCard;
