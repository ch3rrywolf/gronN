const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const prestationControllers = require('../controllers/prestationControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/prestation/add',middleware.auth, prestationControllers.addi)
router.get('/api/prestations', prestationControllers.getiall)
router.get('/api/prestation/:prestations_id',middleware.auth, prestationControllers.getione)
router.put('/api/prestations/update/:id',middleware.auth, prestationControllers.updati)
router.delete('/api/prestations/delete/:id',middleware.auth, prestationControllers.deleti)
router.put('/api/prestations/status-update/:prestations_id', middleware.auth, prestationControllers.update_prestation_status)
router.put('/api/prestations/status-update-validate/:prestations_id', middleware.auth, prestationControllers.update_prestation_status_validation)

module.exports = router