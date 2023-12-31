const mongoose = require('mongoose');
const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        unique : true ,
        lowercase : true ,
        trim : true ,
        required: [true,'Please provide your email'],

    },
    password:{
        type:String,
        required:[true,"Please provide a Password"],
        minlength :[8,'Your password must be at least 8 characters'],
    },
    role:{
        type:String
    }
    

},
{
    timestamps : true
})
module.exports = mongoose.model('UserSchema',userSchema)