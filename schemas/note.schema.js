const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
    },
  },
  { 
    versionKey: false,
    timestamps: true, 
  },
);

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;
