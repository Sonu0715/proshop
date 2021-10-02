const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //   useCreateIndex: true,
    })
    console.log(`Mongoose Connected:${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold)
    process.exit(1)
  }
}
module.exports = connectDB
