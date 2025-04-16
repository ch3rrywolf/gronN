const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const s4epControllers = require('../controllers/s4epControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/folders/s4ep/:folders_id',middleware.auth, s4epControllers.s4epi)


module.exports = router