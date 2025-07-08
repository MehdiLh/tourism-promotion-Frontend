import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { toast } from '@/components/ui/use-toast';

const Profile = () => {
  // Placeholder user data (will be replaced with actual user data from context/backend)
  const [userName, setUserName] = useState('John Doe');
  const [userEmail, setUserEmail] = useState('john.doe@example.com');
  const [profilePicture, setProfilePicture] = useState('https://github.com/shadcn.png');

  // State to control visibility of edit forms
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  // Placeholder for booking history
  const bookingHistory = [
    { id: 1, destination: 'Paris, France', date: '2023-10-26', status: 'Confirmed' },
    { id: 2, destination: 'Tokyo, Japan', date: '2023-09-15', status: 'Completed' },
    { id: 3, destination: 'Rome, Italy', date: '2023-11-01', status: 'Pending' },
  ];

  const handleNameChange = (e: React.FormEvent) => {
    e.preventDefault();
    const newName = (e.target as HTMLFormElement).newName.value;
    // TODO: Integrate with backend to update user name
    setUserName(newName);
    setIsEditingName(false); // Hide form after submission
    toast({
      title: 'Nom mis à jour',
      description: `Votre nom a été mis à jour à ${newName}.`,
    });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    const newPassword = (e.target as HTMLFormElement).newPassword.value;
    const confirmPassword = (e.target as HTMLFormElement).confirmPassword.value;

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Erreur de mot de passe',
        description: 'Les mots de passe ne correspondent pas.',
        variant: 'destructive',
      });
      return;
    }
    // TODO: Integrate with backend to update user password
    setIsEditingPassword(false); // Hide form after submission
    toast({
      title: 'Mot de passe mis à jour',
      description: 'Votre mot de passe a été mis à jour avec succès.',
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-tourism-blue mb-8">Mon Profil</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Profile Info, Change Name, Change Password */}
        <div className="md:col-span-1 flex flex-col gap-8">
          {/* Profile Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Informations du Profil</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src={profilePicture} alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold text-tourism-blue">{userName}</h2>
              <p className="text-gray-600">{userEmail}</p>
              {/* TODO: Add option to change profile picture */}
            </CardContent>
          </Card>

          {/* Change Name Card */}
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Changer le Nom</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setIsEditingName(!isEditingName)}>
                {isEditingName ? 'Annuler' : 'Modifier'}
              </Button>
            </CardHeader>
            <CardContent>
              {isEditingName ? (
                <form onSubmit={handleNameChange} className="space-y-4">
                  <div>
                    <label htmlFor="newName" className="block text-sm font-medium text-gray-700 mb-1">Nouveau Nom</label>
                    <Input type="text" id="newName" name="newName" defaultValue={userName} required />
                  </div>
                  <Button type="submit" className="w-full bg-tourism-turquoise hover:bg-tourism-blue text-white">
                    Mettre à jour le Nom
                  </Button>
                </form>
              ) : (
                <p className="text-gray-700">Nom actuel: <span className="font-semibold">{userName}</span></p>
              )}
            </CardContent>
          </Card>

          {/* Change Password Card */}
          <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Changer le Mot de Passe</CardTitle>
              <Button variant="outline" size="sm" onClick={() => setIsEditingPassword(!isEditingPassword)}>
                {isEditingPassword ? 'Annuler' : 'Modifier'}
              </Button>
            </CardHeader>
            <CardContent>
              {isEditingPassword ? (
                <form onSubmit={handlePasswordChange} className="space-y-4">
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">Nouveau Mot de Passe</label>
                    <Input type="password" id="newPassword" name="newPassword" required />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirmer le Nouveau Mot de Passe</label>
                    <Input type="password" id="confirmPassword" name="confirmPassword" required />
                  </div>
                  <Button type="submit" className="w-full bg-tourism-turquoise hover:bg-tourism-blue text-white">
                    Mettre à jour le Mot de Passe
                  </Button>
                </form>
              ) : (
                <p className="text-gray-700">Mot de passe: <span className="font-semibold">********</span></p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Booking History */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Historique des Réservations</CardTitle>
          </CardHeader>
          <CardContent>
            {bookingHistory.length > 0 ? (
              <ul className="space-y-4">
                {bookingHistory.map((booking) => (
                  <li key={booking.id} className="flex justify-between items-center p-3 border rounded-md">
                    <div>
                      <p className="font-medium text-tourism-blue">{booking.destination}</p>
                      <p className="text-sm text-gray-500">Date: {booking.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {booking.status}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Aucune réservation trouvée.</p>
            )}
            <div className="mt-4 text-center">
              <Link to="/destinations">
                <Button className="bg-tourism-turquoise hover:bg-tourism-blue text-white">
                  Explorer les Destinations
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
