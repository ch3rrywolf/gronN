const router = require('express').Router()
const { default: mongoose } = require('mongoose');
const middleware = require('../middlewares/middleware');
const benificaireControllers = require('../controllers/benificaireControllers');


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

router.post('/api/benificaire/add',middleware.auth, benificaireControllers.addi)
router.get('/api/benificaires', benificaireControllers.getiall)
router.get('/api/benificaires/:benificaires_id',middleware.auth, benificaireControllers.getione)
router.put('/api/benificaire/update/:id',middleware.auth, benificaireControllers.updati)
router.delete('/api/benificaire/delete/:id',middleware.auth, benificaireControllers.deleti)

router.post('/api/benificaires/upload-files', upload.single('file'), benificaireControllers.upload_files)
router.get('/api/benificaires/get-files/:benificaires_id', benificaireControllers.get_files);
router.delete('/api/benificaires/:benificaires_id/pdf/:pdf_id', benificaireControllers.delete_file);

module.exports = router