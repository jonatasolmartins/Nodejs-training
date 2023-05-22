const loginRequest = require("../models/login-request")

function login(requestBody) {
    //Here we create a new loginRequest object from the request body
    const loginReq = loginRequest.from(requestBody)
    
    //Here we check if the email and password are not empty
    if (!loginReq.email || !loginReq.password) {
        return null;
    }

    return loginReq;
}

module.exports = {
    login
};