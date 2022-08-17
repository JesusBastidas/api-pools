const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user');
const user = require('./models/user');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 3000;
const CORS = require('cors');
require('dotenv').config();

app.use(CORS());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use(express.json());
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/products'));
app.use('/api', require('./routes/supplies'));

app.get('/',(req,res)=>{
    res.send('Hola caracola');
});

app.post('/register',(req,res) => {
    const {name,email,pass}=req.body;
    const user = new user({name,email,pass});

    user.save(err=>{
        if(err){
            res.status(500).send('Error de registro');
        }else{
            res.status(200).send('Usuario registrado');
        }
    })
});

mongoose.connect(process.env.DB_CONNECTION).then(()=>console.log('conectado a mongo')).catch(err=>console.log(err)); 

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
