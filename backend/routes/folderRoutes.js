const router = require('express').Router()
const { default: mongoose } = require('mongoose');
// const dossierControllers = require('../controllers/dossierControllers')
const folderController = require('../controllers/folderControllers')
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

router.get('/api/folders/info-dash', folderController.get_info_dash);

router.post('/api/folders/add',middleware.auth, folderController.add_folders)
router.get('/api/folders',middleware.auth, folderController.get_folders)
router.get('/api/folders/:folders_id', middleware.auth, folderController.get_dashboard_single_folders)
router.get('/api/folders/:folders_id/comments', middleware.auth, folderController.get_dashboard_single_folders)
router.post('/api/folders/upload-files', upload.single('file'), folderController.upload_files)
router.get('/api/folders/get-files/:folders_id', folderController.get_files);
// router.get('/api/folders/get-comments/:folders_id', folderController.get_comments);
router.get('/api/folders/get-s2eps/:folders_id', folderController.get_s2eps);
router.get('/api/folders/get-s3eps/:folders_id', folderController.get_s3eps);
router.get('/api/folders/get-s4eps/:folders_id', folderController.get_s4eps);
router.get('/api/folders/get-s5eps/:folders_id', folderController.get_s5eps);
router.get('/api/folders/get-s6eps/:folders_id', folderController.get_s6eps);
router.delete('/api/folders/:folders_id/pdf/:pdf_id', folderController.delete_file);
router.put('/api/folders/status-update/:folders_id', middleware.auth, folderController.update_folders_status)
// router.put('/api/folders/update-ass-rep/:folders_id',  folderController.upload_representants)
// router.delete('/api/folders/:folders_id/rep/:representant_id',  folderController.delete_representants)
router.delete('/api/folders/:folders_id/s2eps-entreprise/:s2eps_id',  folderController.delete_s2eps_entreprise)


router.put('/api/folders/update/step1/:id',middleware.auth, folderController.step1)
router.put('/api/folders/update/:folders_id',middleware.auth, folderController.update_folder)
router.delete('/api/folders/delete/:id',middleware.auth, folderController.delete_folder)



module.exports = router