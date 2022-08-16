const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //para encriptar la contraseña

const saltRound = 10; //numero de veces que se va a encriptar la contraseña

const userSchema = mongoose.Schema({
    name: {type: String, required: false},
    email: {type: String, required: true, unique: true},
    pass: {type: String, required: true},
    rol: {type: String, required: false},
}, {versionKey: false});

userSchema.pre('save', function(next){
    if (this.isNew || this.isModified('pass')){
        const document = this;
        bcrypt.hash(document.pass, saltRound, function(err, hashedPassword){
            if (err)
                next(err);
            else
                document.pass = hashedPassword;
                next();
        }
        );
    } else {
        next();
    }
});

userSchema.methods.comparePass = (pass, callback)=>{
    bcrypt.compare(pass, this.pass, function(err, same){
        if (err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
};

module.exports = mongoose.model('user', userSchema);
    