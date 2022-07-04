const { errorHandler } = require('../backEnd/middleware/error')
const express = require('express');
const dotenv = require('dotenv').config();
const connectDB= require('../config/db')

connectDB();

const port =process.env.PORT || 5000;
 
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use('/api/goal' , require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`server is lisining on port ${port}` )
})