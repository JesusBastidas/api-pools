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

app.post('/auth', (req,res)=>{
    const {email,pass}=req.body;
    user.findOne({email},(err,user)=>{
        if(err){
            res.status(500).send('Error de autenticación');
        }else if(!user){
            res.status(500).send('Usuario no encontrado');
        }else{
            user.comparePass(pass,(err, result)=>{
                if(err){
                    res.status(500).send('Error de autenticación');
                }else if(result){
                    res.status(200).send('Usuario autenticado');
                }else{
                    res.status(500).send('Mail o constraseña incorrectos');
                }
            })
        }
    })
})

mongoose.connect(process.env.DB_CONNECTION).then(()=>console.log('conectado a mongo')).catch(err=>console.log(err)); 

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})
