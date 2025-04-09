import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Import ajouté
import './menu.css';

export default function ChoixMenu() {
  const [menu, setMenu] = useState([]);
  const prenom = localStorage.getItem('prenom');
  const navigate = useNavigate(); // <-- Hook ajouté

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/plats`)
      .then(res => res.json())
      .then(data => {
        console.log("Plats reçus :", data);
        setMenu(data);
      })
      .catch(err => console.error("Erreur chargement menu :", err));
  }, []);

  const commander = (menu_id) => {
    fetch(`${import.meta.env.VITE_API_URL}/commandes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prenom: prenom,
        menu_id: menu_id
      })
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      // On stocke l'id de la commande dans le localStorage
      localStorage.setItem('commande_id', data.commande.id); 
      navigate('/suivi');
    })
    .catch(err => console.error("Erreur commande :", err));
  };
  
  return (
    <div className="menu-container">
      <h2>Bonjour {prenom} 🥦</h2>
      <h3>Choisis ton plat :</h3>
      <div className="menu-list">
        {menu.map((item) => (
          <div key={item.id} className="menu-item">
            <div className="emoji">{item.image}</div>
            <h4>{item.plat}</h4>
            <p>{item.description}</p>
            <button onClick={() => commander(item.id)}>Commander</button>
          </div>
        ))}
      </div>
    </div>
  );
}
