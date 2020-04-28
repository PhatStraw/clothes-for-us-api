var express = require('express')
var router = express.Router()
var controller = require('../controllers/crud')

//model
var sender = require('../models/sender')

router.get('/', (req, res) => res.send('Hello todo!'))

router.post('/read', controller.read(sender))
router.post('/create', controller.create(sender))
router.post('/update', controller.update(sender))
router.post('/delete', controller.delete(sender))

module.exports = router
