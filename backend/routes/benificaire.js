const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const middleware = require('../middlewares/middleware');
const benificaireControllers = require('../controllers/benificaireControllers');


router.post('/api/benificaire/add',middleware.auth, benificaireControllers.addi)
router.get('/api/benificaires', benificaireControllers.getiall)
router.get('/api/benificaire/:benificaires_id',middleware.auth, benificaireControllers.getione)
router.put('/api/benificaire/update/:id',middleware.auth, benificaireControllers.updati)
router.delete('/api/benificaire/delete/:id',middleware.auth, benificaireControllers.deleti)

module.exports = router