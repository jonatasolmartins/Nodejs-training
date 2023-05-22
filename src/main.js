// This is the main file of our application
//npm install express
const express = require("express");
//we need to import the routes so we can use them
const userRoute = require("./routers/user-route");
const authRoute = require("./routers/auth-router");

//morgam is a package that will help us to log the requests in the console
//npm install morgan
const logger = require("morgan");

// Here we create the express app that we will use to configure the server
const app = express();

//Port where the server will be running
const port = 3000;

// We need to tell express to use the logger
app.use(logger("dev"));
// We need to tell express to use json and URL encoding data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//We need to tell express to use the routes we defined in the router folder
app.use("/users", userRoute);
app.use("/auth", authRoute)

//Now we need to tell express to listen to the port we defined
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

