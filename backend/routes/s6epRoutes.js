const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const s6epControllers = require('../controllers/s6epControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/folders/s6ep/:folders_id',middleware.auth, s6epControllers.s6epi)


module.exports = router