const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/user');


const app = express();
const port = process.env.PORT || 3000;
const CORS = require('cors');

app.use(CORS());

//Middleware
app.use(express.json());
app.use('/api', require('./routes/user'));

app.get('/',(req,res)=>{
    res.send('Hola caracola');
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
