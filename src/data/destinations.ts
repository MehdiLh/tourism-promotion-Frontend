
export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description?: string;
}

export const DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Montagnes des Alpes",
    location: "France",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 243,
    category: "Montagnes",
    description: `🌄 Voyage organisé aux Montagnes des Alpes – Une Aventure Inoubliable au Cœur de la Nature

Plongez dans un monde de beauté spectaculaire avec notre voyage organisé aux majestueuses Alpes ! Ce séjour est une invitation à l’évasion, entre sommets enneigés, villages pittoresques, lacs cristallins et sentiers verdoyants.

🏔️ Destination : Les Alpes  
Les Alpes sont la plus grande chaîne de montagnes d’Europe occidentale, s’étendant sur plusieurs pays : France, Suisse, Italie, Autriche, et Allemagne. Notre voyage vous fera découvrir les plus beaux sites alpins, notamment Chamonix, Annecy, Grenoble, le Mont Blanc, et bien d’autres trésors cachés.

📅 Durée du séjour : 7 jours / 6 nuits  
Possibilité de personnaliser selon vos envies (week-end, 10 jours, etc.)

🛏️ Hébergement  
- Hôtels 3 ou 4 étoiles confortables  
- Chalets traditionnels pour une immersion locale  
- Auberges de montagne ou refuges pour les plus aventuriers

🍽️ Restauration  
- Petits-déjeuners inclus  
- Demi-pension ou pension complète  
- Spécialités locales : fondue savoyarde, raclette, tartiflette, etc.

🚶‍♂️ Activités au programme  
- Randonnées guidées (tous niveaux)  
- Excursion au Mont Blanc ou téléphérique de l’Aiguille du Midi  
- Visite de villages alpins : Megève, Saint-Gervais, Annecy  
- Détente au lac d’Annecy, pique-nique, pédalo  
- Stations thermales  
- En hiver : ski, snowboard, raquettes  
- En été : VTT, parapente, kayak

🚌 Transport  
- Bus climatisé/minibus depuis Lyon, Genève, Grenoble ou Paris  
- Prise en charge à l’aéroport disponible

👨‍🏫 Encadrement  
- Guides expérimentés et passionnés  
- Encadrement sécurisé  
- Assistance 24h/24

📦 Le forfait inclut :  
- Hébergement  
- Transport local  
- Activités prévues  
- Encadrement  
- Assurance voyage (optionnelle)

🧳 À prévoir :  
- Tenue de montagne adaptée  
- Chaussures de randonnée  
- Veste imperméable  
- Crème solaire, lunettes  
- Bonne humeur !`
  },
  {
    id: "2",
    name: "Plage de Bora Bora",
    location: "Polynésie française",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 325,
    category: "Plages",
    description: "Explorez les eaux cristallines et les plages paradisiaques de Bora Bora, un véritable joyau de la Polynésie française."
  },
  {
    id: "3",
    name: "Tour Eiffel",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 412,
    category: "Villes",
    description: "Visitez le monument le plus emblématique de Paris et profitez d'une vue imprenable sur la ville lumière."
  },
  {
    id: "4",
    name: "Grand Canyon",
    location: "Arizona, USA",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 518,
    category: "Nature",
    description: "Admirez l'immensité du Grand Canyon, l'une des merveilles naturelles les plus impressionnantes des États-Unis."
  },
  {
    id: "5",
    name: "Taj Mahal",
    location: "Agra, Inde",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 329,
    category: "Culture",
    description: "Explorez ce chef-d'œuvre architectural, symbole d'amour éternel et patrimoine mondial de l'UNESCO."
  },
  {
    id: "6",
    name: "Chutes du Niagara",
    location: "Canada/USA",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
    rating: 4.7,
    reviews: 289,
    category: "Nature",
    description: "Émerveillez-vous devant la puissance des chutes du Niagara, l'une des plus grandes merveilles naturelles d'Amérique du Nord."
  },
  {
    id: "7",
    name: "Sanctuaire de Kyoto",
    location: "Kyoto, Japon",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&q=80",
    rating: 4.8,
    reviews: 276,
    category: "Culture",
    description: "Plongez dans la spiritualité japonaise en visitant les temples séculaires et jardins zen de Kyoto."
  },
  {
    id: "8",
    name: "Santorini",
    location: "Grèce",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 421,
    category: "Plages",
    description: "Découvrez les maisons blanches et les dômes bleus de Santorini surplombant la mer Égée."
  },
  {
    id: "9",
    name: "Machu Picchu",
    location: "Pérou",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
    rating: 4.9,
    reviews: 387,
    category: "Culture",
    description: "Explorez cette ancienne cité inca perchée dans les montagnes andines, témoin d'une civilisation fascinante."
  }
];
