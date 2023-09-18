const User = require("./entita");

// Restituisci tutti gli utenti
async function getAll() {
  const users = await User.find();
  return users;
}

// Restituisci un utente per ID
async function getById(id) {
  const user = await User.findById(id);
  return user;
}

// Crea un nuovo utente
async function createItems(newItem) {
  if (!newItem || !newItem.name || !newItem.email || !newItem.age) {
    throw new Error("Dati non validi");
  }

  const user = new User(newItem);
  const savedUser = await user.save();
  return savedUser;
}

// Aggiorna un utente per ID
async function updateItems(id, update) {
  const updatedUser = await User.findByIdAndUpdate(id, update, { new: true });
  return updatedUser;
}

// Elimina un utente per ID
async function deleteItems(id) {
  const result = await User.findByIdAndDelete(id);
  return result;
}

module.exports = { createItems, deleteItems, getAll, getById, updateItems };
