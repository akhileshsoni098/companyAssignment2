const express = require('express')

const router = express.Router()

const coinController = require('./coinContro')

router.get('/coins', coinController.getCoin)

module.exports = router