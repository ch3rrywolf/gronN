const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const rgeControllers = require('../controllers/rgeControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/auditeurs/rge/:auditeurs_id',middleware.auth, rgeControllers.regi)
router.post('/api/entretes/rge/:entretes_id',middleware.auth, rgeControllers.regii)


module.exports = router