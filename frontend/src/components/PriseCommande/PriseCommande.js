import React from 'react';

const PriseCommande = ({ onReturnHome }) => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    background: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const buttonStyle = {
    background: "#666",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem"
  };

  return (
    <div style={containerStyle}>
      <h2>📋 Prise de Commande</h2>
      <p>Interface de prise de commande</p>
      
      {/* Vous pouvez ajouter ici vos fonctionnalités de commande */}
      <div style={{ margin: "2rem 0" }}>
        <p>Outils de commande :</p>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <li>Menu interactif</li>
          <li>Ajout d'articles au panier</li>
          <li>Gestion des modifications</li>
          <li>Impression des tickets</li>
        </ul>
      </div>

      <button 
        onClick={onReturnHome}
        style={buttonStyle}
        onMouseOver={e => e.target.style.background = "#555"}
        onMouseOut={e => e.target.style.background = "#666"}
      >
        Retour à l'accueil
      </button>
    </div>
  );
};

export default PriseCommande;