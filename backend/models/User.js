const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, 'users.json');

// Lire tous les utilisateurs
const getUsers = () => {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

// Sauvegarder les utilisateurs
const saveUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Trouver un utilisateur par email
const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

// Trouver un utilisateur par ID
const findUserById = (id) => {
  const users = getUsers();
  return users.find(user => user.id === id);
};

// Ajouter un nouvel utilisateur
const addUser = (userData) => {
  const users = getUsers();
  const newUser = {
    id: Date.now().toString(), // ID simple basé sur timestamp
    ...userData,
    createdAt: new Date().toISOString()
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

module.exports = {
  getUsers,
  findUserByEmail,
  findUserById,
  addUser
};