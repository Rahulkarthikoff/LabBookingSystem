const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const colors = require('colors')

const connectDB = require('./config/db')
const ScheduledJob = require('./service/scheduledJob')

const { errorMiddleware } = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

connectDB()
ScheduledJob()

app.use(express.json)
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./router/userRoutes'))
app.use('./api/labs',require('./router/labRoutes'))
app.use('./api/bookings',require('./router/bookingRoutes'))


app.use(errorMiddleware)



app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT} successfully`);
})