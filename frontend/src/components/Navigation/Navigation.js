import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavigate }) => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Bienvenue sur Shyfty, Antoine Pichon</h1>      
        <p className="welcome-subtitle">Choisissez une option ci-dessous</p>
      <div className="navigation-container">
        <button 
          className="nav-button"
          onClick={() => onNavigate('planning')}
        >
          📅 Planning
        </button>

        <button 
          className="nav-button"
          onClick={() => onNavigate('reservation')}
        >
          🍽️ Réservation
        </button>

        <button 
          className="nav-button"
          onClick={() => onNavigate('commande')}
        >
          📋 Prise de Commande
        </button>

        <button 
          className="nav-button"
          onClick={() => onNavigate('fiches-payes')}
        >
          💰 Génération des Fiches de Payes
        </button>
      </div>
    </div>
  );
};

export default Navigation;