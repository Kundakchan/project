const db = require('../db')
const helper = require('../helper/helper')

exports.all = (callback) => {
  db.get().query('SELECT * FROM users', (error, result) => {
    callback(error, result)
  })
}
exports.item = (id, callback) => {
  db.get().query('SELECT * FROM users WHERE id = ?', [id], (error, result) => {
    callback(error, result)
  })
}
exports.create = (user, callback) => {
  db.get().query("INSERT INTO users (id, email, password, login) VALUES (?, ?, ?, ?)", user, (error, result) => {
    callback(error, result)
  })
}
exports.update = (id, data, callback) => {
  const sql = `UPDATE users SET ${helper.queryString(data).key} WHERE id = ?`
  db.get().query(sql, [...helper.queryString(data).value, id], (error, result) => {
    callback(error, result)
  })
}
exports.remove = (id, callback) => {
  db.get().query("DELETE FROM users WHERE id = ?", id, (error, result) => {
    callback(error, result)
  })
}