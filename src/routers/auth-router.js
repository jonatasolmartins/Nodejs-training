const router = require('express').Router()
const { login } = require("../controllers/authentication-controller")


router.post('/login', function (request, response, next) {

    let loginReq = login(request.body)

    if (!loginReq) {
        response.status(400).send({
            message: 'Invalid email or password'
        })
    }
    //Finaly we send the loginRequest object back to the client with a status of 200 OK
    response.send(loginReq).status(200)
})

module.exports = router