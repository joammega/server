let controller = require("../controllers/cliente.js");

module.exports = function(app){
    app.get("/cliente",controller.listarClientes);
    app.get("/cliente/:id",controller.obterCliente);
    app.post('/cliente',controller.inserirCliente);
 }