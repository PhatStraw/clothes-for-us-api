const express = require('express')
const router = express.Router()
const crud = require('../controllers/crud')
const shipping = require('../controllers/shipping')
const credentials = require('../controllers/credentials')

const { authorized } = require('../utils/auth')

//model
const sender = require('../models/sender')

router.get('/', (req, res) => res.send('Hello todo!'))

router.post('/create', crud.create(sender))
router.get('/read', authorized, crud.read(sender))
router.post('/update', authorized, crud.update(sender))
router.post('/delete', authorized, crud.delete(sender))

router.post('/createlabel', authorized, shipping.createLabel(sender))
router.post('/signin', credentials.signIn(sender))

module.exports = router
