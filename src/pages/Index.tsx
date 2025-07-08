
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import MapSection from "@/components/Map";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <FeaturedDestinations />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-tourism-blue sm:text-4xl">Pourquoi nous choisir</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Nous offrons une expérience de voyage exceptionnelle avec des fonctionnalités uniques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-tourism-turquoise/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-tourism-turquoise">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-2">Carte interactive</h3>
                <p className="text-gray-600">
                  Explorez les destinations avec notre carte interactive et trouvez facilement votre prochaine aventure.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-tourism-turquoise/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-tourism-turquoise">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-2">Réservations simples</h3>
                <p className="text-gray-600">
                  Réservez vos visites, hôtels et restaurants en quelques clics avec notre système de réservation facile.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="mx-auto w-16 h-16 bg-tourism-turquoise/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-tourism-turquoise">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-2">Avis vérifiés</h3>
                <p className="text-gray-600">
                  Consultez les avis authentiques de voyageurs pour faire les meilleurs choix pour votre voyage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <MapSection />
      
      {/* Newsletter Section */}
      <section className="py-16 bg-tourism-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tourism-turquoise/10 rounded-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
              <p className="text-lg mb-8 text-gray-100">
                Inscrivez-vous à notre newsletter pour recevoir nos meilleures offres et découvrir de nouvelles destinations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input 
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-5 py-3 rounded-md flex-grow max-w-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
                />
                <Button className="bg-tourism-turquoise hover:bg-tourism-light-blue text-white py-3 px-8">
                  S'abonner
                </Button>
              </div>
              <p className="text-sm mt-4 text-gray-300">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
