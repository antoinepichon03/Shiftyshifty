import React from 'react';

const FichesPayes = ({ onReturnHome }) => {
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
      <h2>💰 Génération des Fiches de Payes</h2>
      <p>Gestion et génération des fiches de payes</p>
      
      {/* Vous pouvez ajouter ici vos fonctionnalités de payes */}
      <div style={{ margin: "2rem 0" }}>
        <p>Gestion de la paie :</p>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <li>Calcul automatique des salaires</li>
          <li>Gestion des heures supplémentaires</li>
          <li>Export PDF des fiches</li>
          <li>Historique des paies</li>
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

export default FichesPayes;