const idGenerationService = require('./id-generation-service');
const Note = require('../schemas/note.schema');

class NotesService {
  getNoteById(noteId) {
    return Note.findById(noteId)
      .catch((error) => {
        console.error('ERROR WHILE GETTING NOTE BY ID!', error);
        return error;
      });
  }

  getAllNotes() {
    return Note.find()
      .catch((error) => {
        console.error('ERROR WHILE ALL NOTES GETTING!', error);
        return error;
      });
  }

  getFilteredNotes(filterObject) {
    return Note.find(filterObject)
      .catch((error) => {
        console.error('ERROR WHILE GETTING FILTERED NOTES!', error);
        return error;
      });
  }

  createNote(noteData) {
    const id = idGenerationService.generate();
    const note = new Note({ id, ...noteData });
    return note.save()
      .catch((error) => {
        console.error('ERROR WHILE NOTE CREATION!', error);
        return error;
      });
  }

  deleteNote(noteId) {
    return Note.deleteOne({ _id: noteId })
      .catch((error) => {
        console.error('ERROR WHILE NOTE DELETING!', error);
        return error;
      })
  }
}

module.exports = new NotesService();
