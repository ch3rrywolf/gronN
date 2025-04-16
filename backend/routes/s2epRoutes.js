const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const s2epControllers = require('../controllers/s2epControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/folders/s2ep/:folders_id',middleware.auth, s2epControllers.s2epi)


module.exports = router