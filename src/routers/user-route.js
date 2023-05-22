const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller");

// Define a router to get all users
// The function is the callback function that will be called when the user access the route /user
// The req parameter is the request that the client sends to the server. Example: the user with id 1 /user?id=1
// The res parameter is the response that the server will send back to the client
router.get("/", function (req, res, next) {
  let users = userController.getUsers();

    res.send(users).status(200);
  });

// Define a router to create a user
router.post("/create", function (request, response) {
  response.send( 
      userController.createUser(request.body)   
    ).status(200);
  });

  // Define a router to get a user by id, :id is a parameter past in the url, example: /user/1
  router.get("/:id", function (request, response) {
    response.send( 
      userController.getUserById(request.params.id)   
    ).status(200);
  })

// Here we export the router that contains the routes defined for the user
// This router will be used in the main.js file
module.exports = router
  