const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || process.env.MONGODB_URI || 'mongodb+srv://Lance:2A0BStlAwb07Qb3L@cluster0.vrugn.mongodb.net/people?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log('Successfully connected to MongoDB')
  }).catch(e => {
  console.error('Connection error', e.message)
  })

const db = mongoose.connection;

module.exports = db;