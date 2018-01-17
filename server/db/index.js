const mongoose = require('mongoose');
const MONGO_URL = require('../env').MONGO_URL;

mongoose.connect(MONGO_URL, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', () => console.error('Failed to connect to DB instnace'));