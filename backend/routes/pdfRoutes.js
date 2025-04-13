const router = require('express').Router()
const pdfControllers = require('../controllers/pdfControllers')
// const middleware = require('../middlewares/middleware')



router.post('/api/createPdf', pdfControllers.createPdf)
router.get('/api/fetchPdf', pdfControllers.fetchPdf)
router.post('/api/sendPdf',pdfControllers.sendPdf)

router.post('/api/createPdfAp', pdfControllers.createPdfAp)
router.get('/api/fetchPdfAp', pdfControllers.fetchPdfAp)
router.post('/api/sendPdfAp',pdfControllers.sendPdfAp)

router.post('/api/createPdfAv', pdfControllers.createPdfAv)
router.get('/api/fetchPdfAv', pdfControllers.fetchPdfAv)
router.post('/api/sendPdfAv',pdfControllers.sendPdfAv)

router.post('/api/createPdfPlanDeFinan', pdfControllers.createPdfPlanDeFinan)
router.get('/api/fetchPdfPlanDeFinan', pdfControllers.fetchPdfPlanDeFinan)
router.post('/api/sendPlanDeFinan',pdfControllers.sendPlanDeFinan)

router.post('/api/createPdfAttDeTrav', pdfControllers.createPdfAttDeTrav)
router.get('/api/fetchPdfAttDeTrav', pdfControllers.fetchPdfAttDeTrav)
router.post('/api/sendAttDeTrav',pdfControllers.sendAttDeTrav)

router.post('/api/createPdfFichDeSynt', pdfControllers.createPdfFichDeSynt)
router.get('/api/fetchPdfFichDeSynt', pdfControllers.fetchPdfFichDeSynt)
router.post('/api/sendFichDeSynt',pdfControllers.sendFichDeSynt)

router.post('/api/createPdfFicheDePres', pdfControllers.createPdfFicheDePres)
router.get('/api/fetchPdfFicheDePres', pdfControllers.fetchPdfFicheDePres)
router.post('/api/sendFicheDePres',pdfControllers.sendFicheDePres)

router.post('/api/createPdfPlandeFinancementDet', pdfControllers.createPdfPlandeFinancementDet)
router.get('/api/fetchPdfPlandeFinancementDet', pdfControllers.fetchPdfPlandeFinancementDet)
router.post('/api/sendPlandeFinancementDet',pdfControllers.sendPlandeFinancementDet)

router.post('/api/createPdfConsDemMpr', pdfControllers.createPdfConsDemMpr)
router.get('/api/fetchPdfConsDemMpr', pdfControllers.fetchPdfConsDemMpr)
router.post('/api/sendConsDemMpr',pdfControllers.sendConsDemMpr)

router.post('/api/createPdfDevMarTreModVal', pdfControllers.createPdfDevMarTreModVal)
router.get('/api/fetchPdfDevMarTreModVal', pdfControllers.fetchPdfDevMarTreModVal)
router.post('/api/sendDevMarTreModVal',pdfControllers.sendDevMarTreModVal)

router.post('/api/createPdfSynDeGriAnaDuLogVal', pdfControllers.createPdfSynDeGriAnaDuLogVal)
router.get('/api/fetchPdfSynDeGriAnaDuLogVal', pdfControllers.fetchPdfSynDeGriAnaDuLogVal)
router.post('/api/sendSynDeGriAnaDuLogVal',pdfControllers.sendSynDeGriAnaDuLogVal)

router.post('/api/createPdfSynDeGriAnaDuLogArc', pdfControllers.createPdfSynDeGriAnaDuLogArc)
router.get('/api/fetchPdfSynDeGriAnaDuLogArc', pdfControllers.fetchPdfSynDeGriAnaDuLogArc)
router.post('/api/sendSynDeGriAnaDuLogArc',pdfControllers.sendSynDeGriAnaDuLogArc)

router.post('/api/createPdfConMarArc', pdfControllers.createPdfConMarArc)
router.get('/api/fetchPdfConMarArc', pdfControllers.fetchPdfConMarArc)
router.post('/api/sendConMarArc',pdfControllers.sendConMarArc)

router.post('/api/createPdfConMarVal', pdfControllers.createPdfConMarVal)
router.get('/api/fetchPdfConMarVal', pdfControllers.fetchPdfConMarVal)
router.post('/api/sendConMarVal',pdfControllers.sendConMarVal)

router.post('/api/createPdfDevMarArcMod', pdfControllers.createPdfDevMarArcMod)
router.get('/api/fetchPdfDevMarArcMod', pdfControllers.fetchPdfDevMarArcMod)
router.post('/api/sendDevMarArcMod',pdfControllers.sendDevMarArcMod)

router.post('/api/createPdfDevMarArcTreMod', pdfControllers.createPdfDevMarArcTreMod)
router.get('/api/fetchPdfDevMarArcTreMod', pdfControllers.fetchPdfDevMarArcTreMod)
router.post('/api/sendDevMarArcTreMod',pdfControllers.sendDevMarArcTreMod)

router.post('/api/createPdfDevMarModVal', pdfControllers.createPdfDevMarModVal)
router.get('/api/fetchPdfDevMarModVal', pdfControllers.fetchPdfDevMarModVal)
router.post('/api/sendDevMarModVal',pdfControllers.sendDevMarModVal)

router.post('/api/createPdfGriAnaDuLogVie', pdfControllers.createPdfGriAnaDuLogVie)
router.get('/api/fetchPdfGriAnaDuLogVie', pdfControllers.fetchPdfGriAnaDuLogVie)
router.post('/api/sendGriAnaDuLogVie',pdfControllers.sendGriAnaDuLogVie)

router.post('/api/createPdfManMarVie', pdfControllers.createPdfManMarVie)
router.get('/api/fetchPdfManMarVie', pdfControllers.fetchPdfManMarVie)
router.post('/api/sendManMarVie',pdfControllers.sendManMarVie)


module.exports = router