const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const prestationmarControllers = require('../controllers/prestationmarControllers')
const middleware = require('../middlewares/middleware')


router.post('/api/prestationmar/add',middleware.auth, prestationmarControllers.addi)
router.get('/api/prestationmars', prestationmarControllers.getiall)
router.get('/api/prestationmar/:prestationmars_id',middleware.auth, prestationmarControllers.getione)
router.put('/api/prestationmars/update/:id',middleware.auth, prestationmarControllers.updati)
router.delete('/api/prestationmars/delete/:id',middleware.auth, prestationmarControllers.deleti)
router.put('/api/prestationmars/status-update/:prestationmars_id', middleware.auth, prestationmarControllers.update_prestationmar_status)
router.put('/api/prestationmars/status-update-validate/:prestationmars_id', middleware.auth, prestationmarControllers.update_prestationmar_status_validation)

module.exports = router