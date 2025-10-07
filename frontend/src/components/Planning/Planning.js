import React from 'react';

const Planning = ({ onReturnHome }) => {
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
      <h2>📅 Planning</h2>
      <p>Gestion des plannings et horaires de travail</p>
      
      {/* Vous pouvez ajouter ici vos fonctionnalités de planning */}
      <div style={{ margin: "2rem 0" }}>
        <p>Ici vous pourrez gérer :</p>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <li>Horaires des employés</li>
          <li>Planification des équipes</li>
          <li>Gestion des congés</li>
          <li>Aperçu hebdomadaire/mensuel</li>
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

export default Planning;