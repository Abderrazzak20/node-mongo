const express = require("express");
const bodyParser = require("body-parser");
const { createItems, deleteItems, getAll, getById, updateItems } = require("./service");

const app = express();
const port = 3000;

const cors = require('cors');
app.use(bodyParser.json());


// Configurazione CORS
const corsOptions = {
  origin: 'http://localhost:8080', // Sostituisci con l'URL consentito
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

};

app.use(cors(corsOptions));


// Connessione al database
const db = require("./database");

// Ottieni tutti gli utenti
app.get("/items", async (req, res) => {
  const users = await getAll();
  res.json(users);
});

// Ottieni un utente per ID
app.get(`/items/:id`, async (req, res) => {
  const userId = req.params.id;
  const user = await getById(userId);
  res.json(user);
});

// Crea un nuovo utente
app.post("/items", async (req, res) => {
  const newUser = req.body;
  const createdUser = await createItems(newUser);
  res.status(201).json(createdUser);
});

// Aggiorna un utente per ID
app.put("/items/:id", async (req, res) => {
  const userId = req.params.id;
  const update = req.body;
  const updatedUser = await updateItems(userId, update);
  res.json(updatedUser);
});

// Elimina un utente per ID
app.delete("/items/:id", async (req, res) => {
  const userId = req.params.id;
  const result = await deleteItems(userId);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});


