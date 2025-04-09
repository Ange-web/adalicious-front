import { useEffect, useState } from 'react';
import './suivi.css';

export default function SuiviCommande() {
  const [commande, setCommande] = useState(null);
  const commandeId = localStorage.getItem('commande_id');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/commandes/${commandeId}`)
      .then(res => res.json())
      .then(data => setCommande(data))
      .catch(err => console.error('Erreur chargement commande :', err));
  }, [commandeId]);

  return (
    <div className="suivi-container">
      <h2>Adalicious 🥦</h2>
      <p>Merci pour ta commande</p>
      <h3>Suivi :</h3>

      {commande ? (
        <div className="suivi-carte">
          <p className="statut">{commande.statut}</p>
          <div className="emoji">{commande.image}</div>
          <p className="plat">{commande.plat} x1</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}
