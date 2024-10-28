const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

const connectDB = require('./config/db')





const userRoutes = require('./router/userRoutes')

app.use('/user',userRoutes)
app.get('/',(req,res)=>{
    res.send("Hi How r u")
})
app.listen(process.env.PORT,()=>{
    console.log(`Port is running ${PORT}`);
})