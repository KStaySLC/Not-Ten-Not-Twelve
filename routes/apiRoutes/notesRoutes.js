const router = require('express').Router();
const uniqid = require('uniqid');
// ToDO verify proper pathing, line 5;
// ToDo create destructured object for the functions that create the notes

router.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'))
});

router.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let newId = uniqid();
    newNote.id = newId;
    console.log(newNote)
})
router.delete('api/notes/:id', (req, res) => {
    //ToDO  logic for note deletion by ID
})



module.exports = router;