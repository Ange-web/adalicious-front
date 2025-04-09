import { useEffect, useState } from 'react';
import CommandeCarte from './CommandeCarte';
import './cuisine.css';

export default function VueCuisine() {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
     fetch(`${import.meta.env.VITE_API_URL}/commande`)
      .then(res => res.json())
      .then(data => setCommandes(data))
      .catch(err => console.error("Erreur chargement commandes :", err));
  }, []);

  const retirerCommande = (id) => {
    setCommandes(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="cuisine-container">
      <h2>Adalicious 🥦<br/>VUE CUISINE</h2>
      <div className="commande-liste">
        {commandes.map((commande) => (
          <CommandeCarte
            key={commande.id}
            commande={commande}
            onRemove={retirerCommande}
          />
        ))}
      </div>
    </div>
  );
}
