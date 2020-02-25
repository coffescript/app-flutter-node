'use strict'

const mongoose = require('mongoose')

async function connect() {
  await mongoose.connect('mongodb+srv://dmr1204:<admin1204>@users-lyfza.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })
  console.log('Database: Connected')
}

module.exports = { connect }
