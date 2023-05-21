// importando o módulo user-route.js para podermos usar as funções dele
const express = require("express");
const userRoute = require("./routers/user-route");
const authRoute = require("./routers/auth-router");
const app = express();

//Port que o servidor vai rodar
const port = 3000;

//Definindo as rotas
app.use("/user", userRoute);
app.use("/auth", authRoute)

//Depois de definir as rotas, precisamos iniciar o servidor
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

