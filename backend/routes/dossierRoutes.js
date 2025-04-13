const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const dossierControllers = require('../controllers/dossierControllers')
const middleware = require('../middlewares/middleware')

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
})

const upload = multer({ storage: storage})

router.get('/api/dossiers/info-dash', dossierControllers.get_info_dash);

router.post('/api/dossiers/add',middleware.auth, dossierControllers.add_dossiers)
router.get('/api/dossiers',middleware.auth, dossierControllers.get_dossiers)
router.get('/api/dossiers/:dossiers_id', middleware.auth, dossierControllers.get_dashboard_single_dossiers)
router.get('/api/dossiers/:dossiers_id/comments', middleware.auth, dossierControllers.get_dashboard_single_dossiers)
router.post('/api/dossiers/upload-files', upload.single('file'), dossierControllers.upload_files)
router.get('/api/dossiers/get-files/:dossiers_id', dossierControllers.get_files);
router.get('/api/dossiers/get-comments/:dossiers_id', dossierControllers.get_comments);
router.get('/api/dossiers/get-representants/:dossiers_id', dossierControllers.get_representants);
router.delete('/api/dossiers/:dossiers_id/pdf/:pdf_id', dossierControllers.delete_file);
router.put('/api/dossiers/status-update/:dossiers_id', middleware.auth, dossierControllers.update_dossiers_status)
router.put('/api/dossiers/update-ass-rep/:dossiers_id',  dossierControllers.upload_representants)
router.delete('/api/dossiers/:dossiers_id/rep/:representant_id',  dossierControllers.delete_representants)


router.put('/api/dossiers/update/:id',middleware.auth, dossierControllers.update_dossier)
router.delete('/api/dossiers/delete/:id',middleware.auth, dossierControllers.delete_dossier)



module.exports = router