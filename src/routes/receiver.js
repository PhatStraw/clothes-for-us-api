var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud')

//model
var receiver = require("../models/receiver.js")

router.get('/', (req, res) => res.send('Hello receiver!'))

router.post('/create', controller.create(receiver))

module.exports = router
