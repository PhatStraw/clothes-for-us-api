var express = require('express')
var router = express.Router()
var crud = require('../controllers/crud')
var shipping = require('../controllers/shipping')

//model
var sender = require('../models/sender')

router.get('/', (req, res) => res.send('Hello todo!'))

router.get('/read', crud.read(sender))
router.post('/create', crud.create(sender))
router.post('/update', crud.update(sender))
router.post('/delete', crud.delete(sender))

router.post('/createlabel', shipping.createLabel(sender))

module.exports = router
