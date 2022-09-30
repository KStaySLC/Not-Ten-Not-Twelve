const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");


const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(express, "notes.html"));
});

app.get("/api/notes/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "db/db.json"));
});

app.get("/api/notes:id", (req, res) => {
  let savedNotes = JSON.parse(fs.readFileSync("./db/db.json"));
  res.json(savedNotes[Number(req.params.id)]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(express, "index.html"));

});
app.post("/api/notes", (req, res) => {
  let savedNote = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let newNote = req.body;
  let uniqueId = (savedNote.length).toString();
  newNote.id = uniqueId;
  savedNote.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(savedNote));
  res.json(savedNote);
});
