const express = require('express')
const router = express.Router()

const rootController = require('../controllers/root.controller')

router.get('/', (req, res) => {
  res.send('hi')
})

router.get('/hi', (req, res) => {
  res.send('hi')
})

router.get('/:page', rootController.showPage)

module.exports = router
