import React from "react";



const ProfilCard = ({ profile }) => {

    return (
      <div className='text-center'>
        <h2>Github user</h2>
        <h3>{profile.name || profile.login}</h3>
        <img
            className="m-3"
            src={profile.avatar_url}
            alt="avatar"
            style={{ width: 150, height: 150, borderRadius: '50%'}}
        />
        <p>{profile.bio || 'Aucune biographie disponible.'}</p>
        <p>Abonnés : {profile.followers}</p>
        <p>Abonnements : {profile.following}</p>
        <p>Créé le : {new Date(profile.created_at).toLocaleString()}</p>
        <p>Modifié le : {new Date(profile.updated_at).toLocaleString()}</p>
        <p>
          URL repositories :{' '}
          <a href={profile.repos_url} target="_blank" rel="noopener noreferrer">
            {profile.repos_url}
          </a>
        </p>
      </div>
    );
  };

  export default ProfilCard;