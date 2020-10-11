const express = require('express');
const notesRouter = express.Router();

const notesService = require('../../services/notes-service');

notesRouter.get('/', (req, res) => {
  if (req.query) {
    return notesService.getFilteredNotes(req.query)
      .then(filteredNotes => res.status(200).send(filteredNotes));
  }

  notesService.getAllNotes()
    .then(allNotes => res.status(200).send(allNotes));
});

notesRouter.post('/', (req, res) => {
  notesService.addNote(req.body)
    .then(newNote => res.status(201).send(newNote));
});

module.exports = notesRouter;
