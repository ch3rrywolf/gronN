const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const commentControllers = require('../controllers/commentControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/dossiers/comment/:dossierId',middleware.auth, commentControllers.commenti)


module.exports = router