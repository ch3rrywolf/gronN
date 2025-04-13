const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const marqueControllers = require('../controllers/marqueControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/marque/add',middleware.auth, marqueControllers.addi)
router.get('/api/marques', marqueControllers.getiall)
router.get('/api/marque/:marques_id',middleware.auth, marqueControllers.getione)
router.put('/api/marques/update/:id',middleware.auth, marqueControllers.updati)
router.delete('/api/marques/delete/:id',middleware.auth, marqueControllers.deleti)
router.put('/api/marques/status-update/:marques_id', middleware.auth, marqueControllers.update_marque_status)

module.exports = router