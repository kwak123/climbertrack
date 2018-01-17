const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Crag = Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },

  // Geo coordinates of crag
  lat: String,
  lon: String
});

module.exports = mongoose.model('Crag', Crag);