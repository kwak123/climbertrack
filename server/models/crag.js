const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ENTITY_TYPE = 'crag';
const geoSet = (v) => Number.parseFloat(v).toFixed(6);
const geoVal = (v) => v.split('.')[1].length === 6;

const Crag = Schema({
  
  _entity: {
    type: String,
    default: ENTITY_TYPE
  },

  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },

  // Geo coordinates of crag to 6 decimal points
  lat: {
    type: String,
    set: geoSet,
    validate: geoVal
  },
  lon: {
    type: String,
    set: geoSet,
    validate: geoVal
  }
});

Crag.pre('save', function(next) {
  if (!this._entity) { this._entity = ENTITY_TYPE; }
  next();
});

Crag.pre('validate', function(next) {
  if (this.isModified('_entity')) {
    return this.invalidate();
  }
  next();
})

module.exports = mongoose.model('Crag', Crag);