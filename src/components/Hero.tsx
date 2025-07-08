
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-tourism-blue">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')",
          opacity: 0.4
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Découvrez des lieux extraordinaires
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-white">
          Explorez les plus belles destinations touristiques et créez des souvenirs inoubliables
        </p>
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <Button size="lg" className="bg-tourism-turquoise text-white hover:bg-tourism-light-blue">
            Explorer les destinations
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            Voir la carte
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-sm text-white/80">Destinations</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10k+</p>
            <p className="text-sm text-white/80">Utilisateurs</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">150+</p>
            <p className="text-sm text-white/80">Pays</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-sm text-white/80">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
