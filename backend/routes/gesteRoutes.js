const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const gesteControllers = require('../controllers/gesteControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/geste/add',middleware.auth, gesteControllers.addi)
router.get('/api/gestes', gesteControllers.getiall)
router.get('/api/geste/:gestes_id',middleware.auth, gesteControllers.getione)
router.put('/api/gestes/update/:id',middleware.auth, gesteControllers.updati)
router.delete('/api/gestes/delete/:id',middleware.auth, gesteControllers.deleti)
router.put('/api/gestes/status-update/:gestes_id', middleware.auth, gesteControllers.update_geste_status)


module.exports = router