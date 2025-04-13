const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const representantControllers = require('../controllers/representantControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/representant/add',middleware.auth, representantControllers.addi)
router.get('/api/representants', representantControllers.getiall)
router.get('/api/representant/:representants_id',middleware.auth, representantControllers.getione)
router.put('/api/representant/update/:id',middleware.auth, representantControllers.updati)
router.delete('/api/representant/delete/:id',middleware.auth, representantControllers.deleti)

module.exports = router