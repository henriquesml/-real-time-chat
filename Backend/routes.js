const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('ta rodando fdp')
})

module.exports = router
