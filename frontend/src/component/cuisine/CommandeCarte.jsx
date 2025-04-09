import { useState } from 'react';
import './cuisine.css';

export default function CommandeCarte({ commande, onRemove }) {
  const [statut, setStatut] = useState(commande.statut);

  const changerStatut = (nouveauStatut) => {
    fetch(`http://localhost:3000/commandes/${commande.id}/statut`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ statut: nouveauStatut })
    })
      .then(res => res.json())
      .then(() => {
        setStatut(nouveauStatut);
        if (nouveauStatut === 'prêt' || nouveauStatut === 'annulée') {
          onRemove(commande.id);
        }
      })
      .catch(err => console.error("Erreur changement de statut :", err));
  };

  return (
    <div className="commande-carte">
      <div className="ligne-haut">
        <div className="emoji">{commande.image}</div>
        <div className="texte">
          <h4>Commande de {commande.prenom}</h4>
          <p>1x {commande.plat}</p>
        </div>
      </div>

      <div className="boutons">
        <span className="statut">{statut}</span>
        <button className="pret" onClick={() => changerStatut('prêt')}>prêt !</button>
      </div>

      <button className="annuler" onClick={() => changerStatut('annulée')}>
        annuler la commande
      </button>
    </div>
  );
}
