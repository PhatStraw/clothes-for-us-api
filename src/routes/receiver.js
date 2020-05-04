const express = require('express')
const router = express.Router()
const crud = require('../controllers/crud')
const credentials = require('../controllers/credentials')
const { authorized } = require('../utils/auth')

//model
const receiver = require("../models/receiver.js")

router.get('/', (req, res) => res.send('Hello receiver!'))

router.post('/signup', crud.create(receiver))
router.get('/read', authorized, crud.read(receiver))
router.put('/update', authorized, crud.update(receiver))
router.post('/delete', authorized, crud.delete(receiver))

router.post('/signin', credentials.signIn(receiver))

module.exports = router
