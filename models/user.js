const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        require:true,
        minlength:3
    },
    email:{
        type:String,
        require:true,
        unique:true,
        match:[/.+\@.+\..+/,'Please enter valid Email format']
    },
    firstname:{
        type:String,
        require:true,
        minlength:3
    },
    lastname:{
        type:String,
        require:true,
        minlength:3
    },
    password:{
        type:String,
        require:true,
        minlength:8,

    }
})


module.exports = mongoose.model('User',userSchema)