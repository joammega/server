let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        nome:{
            type:String,
            require: true
        },
        email:{
            type:String,
            require:true,
            index: {
                unique: true
            }
        },
        password:{
            type:String,
            require:true
        },


    })
    return mongoose.model('Projeto', schema)
}