const router = require('express').Router()

router.get('/login', function (req, res) {
    res.send('Login')
})

module.exports = router