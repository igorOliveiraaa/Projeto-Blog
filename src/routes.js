const express = require('express')

const router = express.Router()

router.get('/', () => {
	res.send('hello, world')
})

module.exports = router