import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import Destinations from "@/pages/Destinations";
import Map from "@/pages/Map";
import NotFound from "@/pages/NotFound";
import DestinationDetails from "@/pages/DestinationDetails";
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/map" element={<Map />} />
        <Route path="/profile" element={<Profile />} /> {/* New route for Profile page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;