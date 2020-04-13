const db = require('mysql2')

const config = {
  host: 'db',
  user: 'root',
  password: '1234',
  database: 'flox',
  connectionLimit: 10
}

exports.get = () => db.createPool(config)
