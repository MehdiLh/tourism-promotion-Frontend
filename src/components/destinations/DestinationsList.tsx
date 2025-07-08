
import React from 'react';
import DestinationCard from "@/components/DestinationCard";
import { Destination } from "@/data/destinations";

interface DestinationsListProps {
  destinations: Destination[];
}

const DestinationsList = ({ destinations }: DestinationsListProps) => {
  if (destinations.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">
          Aucune destination trouvée pour votre recherche.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} {...destination} />
      ))}
    </div>
  );
};

export default DestinationsList;
