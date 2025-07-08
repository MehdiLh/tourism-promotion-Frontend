import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, Menu, X, User, LogIn, LogOut, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true); // true = login, false = signup
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ name: 'John Doe', email: '' });
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginForm = () => {
    setIsAuthFormOpen(true);
    setIsLoginMode(true);
  };

  const openSignupForm = () => {
    setIsAuthFormOpen(true);
    setIsLoginMode(false);
  };

  const closeAuthForm = () => {
    setIsAuthFormOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    setUser(prev => ({ ...prev, email }));
    setIsLoggedIn(true);
    setIsAuthFormOpen(false);
    toast({
      title: "Connexion réussie",
      description: `Bienvenue, ${email}`,
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: '', email: '' });
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt!",
    });
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, just close and show toast
    setIsAuthFormOpen(false);
    toast({
      title: "Inscription réussie",
      description: "Merci pour votre inscription.",
    });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-tourism-blue">
                Explore<span className="text-tourism-turquoise">World</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/')
                  ? 'text-tourism-turquoise border-b-2 border-tourism-turquoise'
                  : 'text-tourism-blue hover:text-tourism-turquoise'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/destinations"
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/destinations')
                  ? 'text-tourism-turquoise border-b-2 border-tourism-turquoise'
                  : 'text-tourism-blue hover:text-tourism-turquoise'
              }`}
            >
              Destinations
            </Link>
            <Link
              to="/map"
              className={`px-3 py-2 text-sm font-medium ${
                isActive('/map')
                  ? 'text-tourism-turquoise border-b-2 border-tourism-turquoise'
                  : 'text-tourism-blue hover:text-tourism-turquoise'
              }`}
            >
              Carte
            </Link>
            <div className="relative ml-4">
              <input
                type="text"
                placeholder="Rechercher..."
                className="pl-9 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
              />
              <SearchIcon
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/profile"
                  className="text-sm text-tourism-blue hover:text-tourism-turquoise flex items-center gap-1"
                >
                  <User className="h-4 w-4" />
                  Mon Profil
                </Link>
                <Button
                  className="bg-tourism-turquoise hover:bg-tourism-blue text-white"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Button
                className="ml-4 bg-tourism-turquoise hover:bg-tourism-blue text-white"
                onClick={openLoginForm}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-tourism-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/') ? 'bg-tourism-turquoise/10 text-tourism-turquoise' : 'text-tourism-blue hover:bg-gray-50'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/destinations"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/destinations')
                  ? 'bg-tourism-turquoise/10 text-tourism-turquoise'
                  : 'text-tourism-blue hover:bg-gray-50'
              }`}
            >
              Destinations
            </Link>
            <Link
              to="/map"
              className={`block px-3 py-2 text-base font-medium rounded-md ${
                isActive('/map') ? 'bg-tourism-turquoise/10 text-tourism-turquoise' : 'text-tourism-blue hover:bg-gray-50'
              }`}
            >
              Carte
            </Link>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-9 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
              />
              <SearchIcon
                size={16}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
            {isLoggedIn ? (
              <div className="px-4 py-2">
                <Link
                  to="/profile"
                  className="block px-3 py-2 text-base font-medium rounded-md text-tourism-blue hover:bg-gray-50 flex items-center gap-2"
                >
                  <User className="h-5 w-5" />
                  Mon Profil
                </Link>
                <Button
                  className="w-full mt-3 bg-tourism-turquoise hover:bg-tourism-blue text-white"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <Button
                className="w-full mt-3 mx-4 bg-tourism-turquoise hover:bg-tourism-blue text-white"
                onClick={openLoginForm}
              >
                <LogIn className="mr-2 h-4 w-4" />
                Se connecter
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Auth Form Overlay */}
      {isAuthFormOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={closeAuthForm}
        >
          <div
            className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-tourism-blue">
                {isLoginMode ? "Connexion" : "Inscription"}
              </h2>
              <button onClick={closeAuthForm} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            {isLoginMode ? (
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
                    placeholder="votre@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-tourism-turquoise focus:ring-tourism-turquoise border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                      Se souvenir de moi
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-tourism-turquoise hover:text-tourism-blue"
                      onClick={(e) => e.preventDefault()}
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-tourism-turquoise hover:bg-tourism-blue text-white">
                  Se connecter
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Pas encore de compte ?{' '}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginMode(false);
                    }}
                    className="font-medium text-tourism-turquoise hover:text-tourism-blue"
                  >
                    Inscrivez-vous
                  </a>
                </p>
              </form>
            ) : (
              <form className="space-y-4" onSubmit={handleSignup}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email-signup" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-signup"
                    name="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password-signup" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    id="password-signup"
                    name="password"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-tourism-turquoise"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-tourism-turquoise hover:bg-tourism-blue text-white">
                  S'inscrire
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Déjà un compte ?{' '}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLoginMode(true);
                    }}
                    className="font-medium text-tourism-turquoise hover:text-tourism-blue"
                  >
                    Se connecter
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
