import React from 'react';

const Reservation = ({ onReturnHome }) => {
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
      <h2>🍽️ Réservation</h2>
      <p>Système de réservation de tables</p>
      
      {/* Vous pouvez ajouter ici vos fonctionnalités de réservation */}
      <div style={{ margin: "2rem 0" }}>
        <p>Fonctionnalités disponibles :</p>
        <ul style={{ textAlign: "left", maxWidth: "400px", margin: "0 auto" }}>
          <li>Réservation de tables</li>
          <li>Gestion des créneaux horaires</li>
          <li>Liste des réservations</li>
          <li>Confirmation automatique</li>
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

export default Reservation;