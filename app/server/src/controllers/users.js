const Users = require('../models/users')
exports.all = (req, res) => {
  Users.all((error, result) => {
    if (error) return res.status(500).send(error.message)
    else res.status(200).json(result)
  })
}
exports.item = (req, res) => {
  Users.item(req.params.id, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else res.status(200).json(result)
  })
}
exports.create = (req, res) => {
  const user = [
    `--${Math.floor(Math.random() * 1e14).toString(16)}`,
    req.body.email,
    req.body.password,
    req.body.login
  ]
  Users.create(user, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else res.status(200).json(result)
  })
},
exports.update = (req, res) => {
  Users.update(req.params.id, req.body, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else res.status(200).json(result)
  })
}
exports.remove = (req, res) => {
  Users.remove(req.params.id, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else res.status(200).json(result)
  })
}