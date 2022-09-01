const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const uniqid = require('uniqid');

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);


app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './db/db.json'))
);

app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let newId = uniqid();
    newNote.id = newId;
    console.log(newNote)
})


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

