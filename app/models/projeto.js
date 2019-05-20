let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        titulo:{
            type:String,
            require:true
        },
        descricao:{
            type:String,
            require:true
        },
        anexo:{
            type:String,//não sei ainda
            require:true
        }
    })
    return mongoose.model('Projeto', schema)
}