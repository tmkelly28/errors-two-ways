const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/puppies', (req, res, next) => {
  res.status(404).json(new Error('Puppies not found!'))
})

app.get('/api/kittens', (req, res, next) => {
  res.status(401).json(new Error('Kittens are forbidden!'))
})

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(8080, () => console.log('listening on 8080'))
