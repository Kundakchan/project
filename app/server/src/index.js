const express = require('express')
const bodyParser = require('body-parser')
const userControllers = require('./controllers/users')
const moviesControllers = require('./controllers/movies')
const likesControllers = require('./controllers/likes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/users', userControllers.all)
app.get('/users/:id', userControllers.item)
app.post('/users', userControllers.create)
app.put('/users/:id', userControllers.update)
app.delete('/users/:id', userControllers.remove)

app.get('/movies', moviesControllers.all)
app.get('/movies/:id', moviesControllers.item)
app.post('/movies', moviesControllers.create)
app.put('/movies/:id', moviesControllers.update)
app.delete('/movies/:id', moviesControllers.remove)

app.get('/likes', likesControllers.all)
app.get('/likes/:id', likesControllers.item)
app.post('/likes', likesControllers.create)
app.delete('/likes/:id', likesControllers.remove)

app.listen(80, () => {
  console.log('API Server startd...')
})