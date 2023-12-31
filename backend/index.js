const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:3000' ,
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))
const bookRouter = require('./routes/bookRoutes');
const userRouter = require('./routes/userRoute')
require('dotenv').config();
app.use(express.json())
mongoose.connect(process.env.DATABASE_URL)
const PORT = 3000;
app.listen(PORT,()=>{
    console.log('the server is running on port ',PORT)
})
app.use('/book',bookRouter)
app.use('/',userRouter)