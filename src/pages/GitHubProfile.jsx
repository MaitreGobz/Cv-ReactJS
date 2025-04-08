import React, { useEffect, useState } from 'react';
import ProfilCard from '../components/ProfilCard';

const GithubProfile = () => {
  
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/MaitreGobz')
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error('Erreur lors du chargement du profil GitHub :', error));
  }, []);

  return (
    <main>
      <div className='d-flex justify-content-center align-items-center m-5 p-5'>
        {profile ? (<ProfilCard profile={profile} />) : (<p style={{ textAlign: 'center', marginTop: '2rem' }}>Chargement du profil...</p>)}
      </div>
    </main>
  );
};

export default GithubProfile;
