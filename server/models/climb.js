const Schema = require('mongoose').Schema;

const ENTITY_TYPE = 'climb';

const Climb = new Schema({

  _entity: {
    type: String,
    default: ENTITY_TYPE
  },

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

  // sent: {
  //   type: [{
  //     name: String,
  //     date: String
  //   }],
  //   default: []
  // },

  // Materialized Path by ID
  // Followed [Crag, Area, Boulder]
  path: [Number]
});

// Don't touch my entity types!
Climb.pre('save', function(next) {
  if (!this._entity) { this._entity = ENTITY_TYPE; }
  next();
});

Climb.pre('validate', function(next) {
  if (this.isModified('_entity')) {
    return this.invalidate('_entity');
  }
  next();
});