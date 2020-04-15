const db = require('../db')
const helper = require('../helper/helper')

exports.all = (callback) => {
  db.get().query("SELECT * FROM likes", (error, result) => {
    callback(error, result)
  })
}
exports.item = (id, callback) => {
  db.get().query("SELECT * FROM likes WHERE id = ?", [id], (error, result) => {
    callback(error, result)
  })
}
exports.create = (data, callback) => {
  const sql = `INSERT INTO likes (${helper.preparationLineAdd(data).key}) VALUES (${helper.preparationLineAdd(data).point})`
  db.get().query(sql, helper.preparationLineAdd(data).value, (error, result) => {
    callback(error, result)
  })
}
exports.remove = (id, callback) => {
  db.get().query("DELETE FROM likes WHERE id = ?", [id], (error, result) => {
    callback(error, result)
  })
}