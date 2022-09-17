const mongoose = require('../database');

const FilmeSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  diretor: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  ano: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Filme = mongoose.model('Filme', FilmeSchema);

module.exports = Filme;
