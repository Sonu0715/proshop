const express = require('express')
const dotenv = require('dotenv')
const products = require('./data/products')
const connectDB = require('./config/db')
const colors = require('colors')

dotenv.config()
connectDB()

const app = express()
connectDB()

app.get('/', (req, res) => res.send('api is coiming'))

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((e) => e._id === req.params.id)
  res.json(product)
})
const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port number ${PORT}`
      .yellow.bold
  )
)
