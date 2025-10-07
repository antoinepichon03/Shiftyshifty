const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const { authenticateToken } = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());

// Routes d'authentification
app.use('/api/auth', authRoutes);

// Route publique
app.get('/', (req, res) => {
  res.json({
    message: 'API Shyfty - Backend de gestion',
    version: '1.0.0',
    endpoints: {
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login',
      verifyToken: 'GET /api/auth/verify-token'
    }
  });
});

// Route protégée (exemple)
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({
    message: 'Accès autorisé !',
    user: req.user
  });
});

// Route pour les utilisateurs connectés
app.get('/api/dashboard', authenticateToken, (req, res) => {
  res.json({
    message: `Bienvenue ${req.user.email} sur votre dashboard !`,
    role: req.user.role,
    features: req.user.role === 'admin' 
      ? ['Planning', 'Réservations', 'Commandes', 'Fiches de paies', 'Gestion utilisateurs']
      : ['Planning', 'Réservations', 'Commandes']
  });
});

app.listen(5000, () => {
  console.log('🚀 API Shyfty running on port 5000');
  console.log('📡 Endpoints disponibles:');
  console.log('   POST /api/auth/register - Créer un compte');
  console.log('   POST /api/auth/login - Se connecter');
  console.log('   GET /api/auth/verify-token - Vérifier le token');
  console.log('   GET /api/protected - Route protégée (exemple)');
  console.log('   GET /api/dashboard - Dashboard utilisateur');
});