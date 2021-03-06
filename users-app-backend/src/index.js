const app = require('./app')
const { connect } = require('./db/database')

async function main() {

  // database connection
  await connect()

  await app.listen(4000)
  console.log('Server on port 4000: Connected')
}

main()