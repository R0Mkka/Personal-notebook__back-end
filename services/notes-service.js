const Note = require('../schemas/note.schema');

class NotesService {
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

  addNote(noteData) {
    const note = new Note(noteData);
    return note.save()
      .catch((error) => {
        console.error('ERROR WHILE NOTE ADDING!', error);
        return error;
      });
  }
}

module.exports = new NotesService();
