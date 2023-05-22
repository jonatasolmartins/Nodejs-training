const userModel = require("../models/user-model");
const createUserRequest = require("../models/create-user-request");

const users =
[  
    new userModel({
        id: 1,
        name: "John doer",
        email: "john@email.com",
        password: "123456"
    }),
    new userModel({
        id: 2,
        name: "Frank miler",
        email: "frank@email.com",
        password: "123456"
    }),
    new userModel({
        id: 3,
        name: "Robert smith",
        email: "robert@email.com",
        password: "123456"
    })
]
//Simulates that we are getting users from a database
function getUsers() {
    return users;
};

//Simulaes the creation of a user
function createUser(reqBody) {

    //Here we create a new userRequest object from the request body
    let userRequest = createUserRequest.from(reqBody);

    let newUser = new userModel({
        //Here we get the length of the array and add 1 to it so that we can get the next id
        id: users.length + 1, 
        name: userRequest.name,
        email: userRequest.email,
        password: userRequest.password
    });

    //Here we add the new user to the array
    users.push(newUser);

    return newUser;
};

function getUserById(id) {
    console.log("Id: ", id);
    //Here we find the user with the id that was passed in
    let user = users[id - 1]
    console.log("ok: ",user);
    return user;
}

//Here we export the module so that the functions can be used in another file
module.exports = {
    getUsers,
    createUser,
    getUserById
}