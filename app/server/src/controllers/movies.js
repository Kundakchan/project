const Movies = require('../models/movies')

exports.all = (req, res) => {
  Movies.all((error, result) => {
    if (error) return res.status(500).send(error.message)
    else return res.status(200).json(result)
  })
}
exports.item = (req, res) => {
  Movies.item(req.params.id, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else return res.status(200).json(result)
  })
}
exports.create = (req, res) => {
  const data = {
    id: `_${Math.floor(Math.random() * 1e5).toString(16)}`,
    ...req.body
  }
  Movies.create(data, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else return res.status(200).json(result)
  })
}
exports.update = (req, res) => {
  Movies.update(req.params.id, req.body, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else return res.status(200).json(result)
  })
}
exports.remove = (req, res) => {
  Movies.remove(req.params.id, (error, result) => {
    if (error) return res.status(500).send(error.message)
    else return res.status(200).json(result)
  })
}