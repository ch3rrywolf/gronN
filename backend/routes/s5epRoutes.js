const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const s5epControllers = require('../controllers/s5epControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/folders/s5ep/:folders_id',middleware.auth, s5epControllers.s5epi)


module.exports = router