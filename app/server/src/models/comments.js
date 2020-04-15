const db = require('../db')
const helper = require('../helper/helper')

exports.all = (callback) => {
  db.get().query("SELECT * FROM comments", (error, result) => {
    callback(error, result)
  })
}
exports.item = (id, callback) => {
  db.get().query("SELECT * FROM comments WHERE id = ?", [id], (error, result) => {
    callback(error, result)
  })
}
exports.create = (data, callback) => {
  const sql = `INSERT INTO comments (${helper.preparationLineAdd(data).key}) VALUES (${helper.preparationLineAdd(data).point})`
  db.get().query(sql, helper.preparationLineAdd(data).value, (error, result) => {
    callback(error, result)
  })
}
exports.update = (id, data, callback) => {
  const sql =  `UPDATE comments SET ${helper.preparationLineUpdate(data).key} WHERE id = ?`
  db.get().query(sql, [...helper.preparationLineUpdate(data).value, id], (error, result) => {
    callback(error, result)
  })
}
exports.remove = (id, callback) => {
  db.get().query("DELETE FROM comments WHERE id = ?", [id], (error, result) => {
    callback(error, result)
  })
}