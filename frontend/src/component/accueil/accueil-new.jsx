import InputPrenom from './input-name';
import { Link } from 'react-router-dom';
import './accueil.css';

function Accueil() {
  return (
    <div className="accueil-container">
      <Link to="/vueCuisine" className="bouton-cuisine">interface cuisine !!</Link>
      <h1>🥦</h1>
      <h2>Bienvenue sur Adalicious</h2>
      <h4>Pour commencer, peux-tu me donner ton prénom ?</h4>
      <InputPrenom />
    </div>
  );
}

export default Accueil;
