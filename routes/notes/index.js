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
  notesService.createNote(req.body)
    .then(newNote => res.status(201).send(newNote));
});

notesRouter.delete('/:noteId',  async (req, res) => {
  const { noteId } = req.params;
  const deletedNote = await notesService.getNoteById(noteId);
  notesService.deleteNote(noteId)
    .then((dbResponse) => {
      if (dbResponse.ok) {
        res.status(200).send(deletedNote);
      } else {
        res.status(400).send({ dbResponse, message: 'Note deletion error!' }); // TODO: Make common error view
      }
    });
});

module.exports = notesRouter;
