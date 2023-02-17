const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  res.send('APi para pesquisar imagens')
})

app.get('/search', (req, res) => {
  const searchTerm = req.query.term
  const images = searchImages(searchTerm)
  res.render('images', { images: images })
})

function searchImages(searchTerm) {
  const imagesDir = path.join(__dirname, 'client/public/images')
  const images = fs.readdirSync(imagesDir).filter(file => file.endsWith('.jpg') || file.endsWith('.png')).filter(file => file.includes(searchTerm))
  return images
}

app.listen(3001, () => {
  console.log('rodando server')
})