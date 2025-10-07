import React, { useState } from 'react';
import './Connexion.css';

const Connexion = ({ onReturnHome, onLoginSuccess }) => {
  const [isLoginMode, setIsLoginMode] = useState(true); // true = connexion, false = inscription
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Effacer l'erreur quand l'utilisateur tape
  };

  // Basculer entre connexion et inscription
  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setFormData({
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    });
  };

  // Valider le formulaire
  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email et mot de passe sont requis');
      return false;
    }

    if (!isLoginMode) {
      if (!formData.name) {
        setError('Le nom est requis pour l\'inscription');
        return false;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return false;
      }
      /*if (formData.password.length < 6) {
        setError('Le mot de passe doit contenir au moins 6 caractères');
        return false;
      }*/
    }

    return true;
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      const endpoint = isLoginMode ? '/api/auth/login' : '/api/auth/register';
      const body = isLoginMode 
        ? { email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password, name: formData.name };

      const response = await fetch(`http://localhost:3001${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (response.ok) {
        // Succès !
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        if (onLoginSuccess) {
          onLoginSuccess(data.user);
        } else {
          onReturnHome();
        }
      } else {
        setError(data.message || 'Une erreur est survenue');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setError('Erreur de connexion au serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="connexion-container">
      <div className="connexion-form-container">
        <button className="back-button" onClick={onReturnHome}>
          ← Retour à l'accueil
        </button>

        <h1 className="connexion-title">
          {isLoginMode ? 'Connexion' : 'Inscription'}
        </h1>
        
        <p className="connexion-subtitle">
          {isLoginMode 
            ? 'Connectez-vous à votre compte Shyfty' 
            : 'Créez votre compte Shyfty'
          }
        </p>

        <form onSubmit={handleSubmit} className="connexion-form">
          {!isLoginMode && (
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nom complet"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              disabled={loading}
            />
          </div>

          {!isLoginMode && (
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                disabled={loading}
              />
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading 
              ? (isLoginMode ? 'Connexion...' : 'Inscription...') 
              : (isLoginMode ? 'Se connecter' : 'S\'inscrire')
            }
          </button>
        </form>

        <div className="toggle-mode">
          <p>
            {isLoginMode ? 'Pas encore de compte ?' : 'Déjà un compte ?'}
            <button 
              type="button" 
              className="toggle-button"
              onClick={toggleMode}
              disabled={loading}
            >
              {isLoginMode ? 'S\'inscrire' : 'Se connecter'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connexion;