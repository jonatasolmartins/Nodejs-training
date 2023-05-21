const userModel = require("../models/userModel");

function getUser() {
    return new userModel({
        name: "João",
        email: "user@email.com",
        password: "123456"
    });
};


function cadastrarUser() {
    return "usuário cadastrado"
};

//Aqui exportamos o módulo para que as funções possam ser usadas em outro arquivo
module.exports = {
    getUser,
    cadastrarUser
}