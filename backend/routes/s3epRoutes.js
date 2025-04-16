const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const s3epControllers = require('../controllers/s3epControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/folders/s3ep/:folders_id',middleware.auth, s3epControllers.s3epi)


module.exports = router