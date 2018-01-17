const Schema = require('mongoose').Schema;

const Climb = new Schema({

  name: {
    type: String,
    required: true
  },

  grade: {
    type: Number,
    required: true
  },

  rating: {
    type: Number,
    required: true
  },

  sent: Number,

  // Materialized Path by ID
  // Followed [Crag, Area, Boulder]
  path: [Number]
});