import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './input-name.css';

export default function InputPrenom() {
  const [prenom, setPrenom] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    if (prenom.trim() === '') {
      alert('Merci de saisir un prénom');
      return;
    }

    localStorage.setItem('prenom', prenom);
    navigate('/choix-menu');
  };

  return (
    <div className="input-container"> 
      <input
        type="text"
        placeholder="Ton prénom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />
      <button onClick={handleClick}>Valider</button>
    </div>
  );
}
