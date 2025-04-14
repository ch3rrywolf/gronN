const router = require('express').Router()
const authController = require('../controllers/authControllers')
const middleware = require('../middlewares/middleware')
const { default: mongoose } = require('mongoose');

router.post('/api/login', authController.login)

router.post('/api/backoffice/add',middleware.auth,middleware.role, authController.add_backoffice)
router.get('/api/backoffices',middleware.auth,middleware.role, authController.get_backoffices)
router.get('/api/backoffices/:backoffices_id', middleware.auth, authController.get_backoffices_details)
router.put('/api/backoffices/update/:id',middleware.auth,middleware.role, authController.update_backoffice)
router.delete('/api/backoffices/delete/:id',middleware.auth,middleware.role, authController.delete_backoffice)
router.put('/api/backoffices/status-update/:backoffices_id', middleware.auth, authController.update_backoffice_status)


router.post('/api/inspecteur/add',middleware.auth,middleware.role, authController.add_inspecteur)
router.get('/api/inspecteurs',middleware.auth,middleware.role, authController.get_inspecteurs)
router.get('/api/inspecteurs/:inspecteurs_id', middleware.auth, authController.get_inspecteurs_details)
router.put('/api/inspecteurs/update/:id',middleware.auth,middleware.role, authController.update_inspecteur)
router.delete('/api/inspecteurs/delete/:id',middleware.auth,middleware.role, authController.delete_inspecteur)
router.put('/api/inspecteurs/status-update/:inspecteurs_id', middleware.auth, authController.update_inspecteur_status)


module.exports = router