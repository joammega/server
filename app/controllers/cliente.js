var Cliente = require('../models/cliente')

module.exports.listarClientes = function(req, res){
    let promise = Cliente.find().exec();
    promise.then(
        function (cliente) {
            res.json(cliente)
        }
    ).catch(
        function (erro) {
            res.status(500).end();
        }
    );
}

module.exports.obterCliente = function(req, res){
    var id = req.params.id;
    let promise = Usuario.findById(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );

}
module.exports.inserirCliente = function(req,res){
    let promise = Cliente.create(req.body)
    promise.then(
        function(cliente){
                res.status(201).json(cliente)
        }
    ).catch(
        function(erro){
            res.status(500).json(erro)
        }
           
    )
}