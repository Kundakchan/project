const express = require('express')
const bodyParser = require('body-parser')
const userControllers = require('./controllers/users')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/users', userControllers.all)
app.get('/users/:id', userControllers.item)
app.post('/users', userControllers.create)
app.put('/users/:id', userControllers.update)
app.delete('/users/:id', userControllers.remove)

app.listen(80, () => {
  console.log('API Server startd...')
})