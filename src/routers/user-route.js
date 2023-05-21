const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

//Definimos uma rota para obter o usuário
//a função recebe dois parametros, o primeiro parametro é o request e o segundo é o response
//o request é o que o usuário envia para o servidor. Exemplo: o id do usuário (/user/1)
// o response é o que o servidor envia para o usuário. Exemplo: o usuário com id 1
router.get("/", function (req, res) {
    res.status(200).send(userController.getUser());
  });
  
router.get("/cadastrar", function (req, res) {
    res.send(200).send( 
      userController.cadastrarUser()   
    );
  });


//Aqui exportamos o módulo para ser usado em outro arquivo
//Neste caso, estamos exportando o router que contem as rotas definidas para o usuário
module.exports = router
  