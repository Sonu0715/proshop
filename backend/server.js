const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const colors = require('colors')
const productRoutes = require('./routes/productRoutes')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')

dotenv.config()
connectDB()

const app = express()
connectDB()

app.get('/', (req, res) => res.send('api is coiming'))

app.use('/api/products', productRoutes)
// app.use((req, res, next) => {
//   // console.log('hello')
//   console.log(req.originalUrl)
//   next()
// })

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port number ${PORT}`
      .yellow.bold
  )
)
