const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');


const app = express();
const port = process.env.PORT || 3000;
const CORS = require('cors');
require('dotenv').config();

app.use(CORS());

//Middleware
app.use(express.json());
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/products'));
app.use('/api', require('./routes/supplies'));

app.get('/',(req,res)=>{
    res.send('Hola caracola');
})

mongoose.connect(process.env.DB_CONNECTION).then(()=>console.log('conectado a mongo')).catch(err=>console.log(err)); 

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
