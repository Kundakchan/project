const db = require('../db')
const helper = require('../helper/helper')

exports.all = (callback) => {
  db.get().query("SELECT * FROM movies", (error, result) => {
    callback(error, result)
  })
}
exports.item = (id, callback) => {
  db.get().query("SELECT * FROM movies WHERE id = ?", [id], (error, result) => {
    callback(error, result)
  })
}
exports.create = (data, callback) => {
  const sql = `INSERT INTO movies (${helper.preparationLineAdd(data).key}) VALUES (${helper.preparationLineAdd(data).point})`
  db.get().query(sql, helper.preparationLineAdd(data).value, (error, result) => {
    callback(error, result)
  })
}
exports.update = (id, data, callback) => {
  const sql =  `UPDATE movies SET ${helper.preparationLineUpdate(data).key} WHERE id = ?`
  db.get().query(sql, [...helper.preparationLineUpdate(data).value, id], (error, result) => {
    callback(error, result)
  })
}
exports.remove = (id, callback) => {
  db.get().query("DELETE FROM movies WHERE id = ?", [id], (error, result) => {
    callback(error, result)
  })
}