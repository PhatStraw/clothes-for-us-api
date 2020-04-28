var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud')

//model
var sender = require('../models/sender')

router.get('/', (req, res) => res.send('Hello todo!'))

router.get('/create', controller.create(sender))


module.exports = router
