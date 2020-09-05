import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

// initialize dotenv config
dotenv.config()

// initialize express server
const app = express()

// connect to mongodb
const mongodb = process.env.MONGODB || 'mongodb://localhost:27017'
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })

const port = process.env.PORT || 8084
app.listen(port, () => {
  console.info(`listening on port ${port}`)
})

export default app
