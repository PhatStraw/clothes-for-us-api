var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud')

//model
var receiver = require("../models/receiver.js")

router.get('/', (req, res) => res.send('Hello receiver!'))

router.post('/read', controller.read(receiver))
router.post('/create', controller.create(receiver))
router.post('/update', controller.update(receiver))
router.post('/delete', controller.delete(receiver))

module.exports = router
