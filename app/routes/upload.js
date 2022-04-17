const express = require('express')
const router = express.Router()
const uploadController = require('../controllers/upload.controller')

router.get('/', uploadController.root)

router.get('/show', (req, res) => {
  res.send('show-upload')
})

router.get('/show', (req, res) => {
  res.send('show-upload')
})

module.exports = router
