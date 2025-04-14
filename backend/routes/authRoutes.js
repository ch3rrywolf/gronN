const router = require('express').Router()
const authController = require('../controllers/authControllers')
const middleware = require('../middlewares/middleware')
const { default: mongoose } = require('mongoose');

router.post('/api/login', authController.login)
router.post('/api/profile', authController.getProfile)

router.get('/api/sessions', authController.get_sessions)
router.post('/api/session/add',middleware.auth,middleware.role, authController.add_session)
router.get('/api/sessions/:sessions_id', middleware.auth, authController.get_sessions_details)
router.put('/api/sessions/update/:id',middleware.auth,middleware.role, authController.update_session)
router.delete('/api/sessions/delete/:id',middleware.auth,middleware.role, authController.delete_session)
router.put('/api/sessions/status-update/:sessions_id', middleware.auth, authController.update_session_status)

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

router.post('/api/entrete/add',middleware.auth,middleware.role, authController.add_entrete)
router.get('/api/entretes',middleware.auth,middleware.role, authController.get_entretes)
router.get('/api/entretes/:entretes_id', middleware.auth, authController.get_entretes_details)
router.put('/api/entretes/update/:id',middleware.auth,middleware.role, authController.update_entrete)
router.delete('/api/entretes/delete/:id',middleware.auth,middleware.role, authController.delete_entrete)
router.put('/api/entretes/status-update/:entretes_id', middleware.auth, authController.update_entrete_status)

router.post('/api/manda/add',middleware.auth,middleware.role, authController.add_manda)
router.get('/api/mandas',middleware.auth,middleware.role, authController.get_mandas)
router.get('/api/mandas/:mandas_id', middleware.auth, authController.get_mandas_details)
router.put('/api/mandas/update/:id',middleware.auth,middleware.role, authController.update_manda)
router.delete('/api/mandas/delete/:id',middleware.auth,middleware.role, authController.delete_manda)
router.put('/api/mandas/status-update/:mandas_id', middleware.auth, authController.update_manda_status)

router.post('/api/auditeur/add',middleware.auth,middleware.role, authController.add_auditeur)
router.get('/api/auditeurs',middleware.auth,middleware.role, authController.get_auditeurs)
router.get('/api/auditeurs/:auditeurs_id', middleware.auth, authController.get_auditeurs_details)
router.put('/api/auditeurs/update/:id',middleware.auth,middleware.role, authController.update_auditeur)
router.delete('/api/auditeurs/delete/:id',middleware.auth,middleware.role, authController.delete_auditeur)
router.put('/api/auditeurs/status-update/:auditeurs_id', middleware.auth, authController.update_auditeur_status)


module.exports = router