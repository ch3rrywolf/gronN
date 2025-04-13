const pdf = require('html-pdf');
const path = require('path');
const nodemailer = require('nodemailer');
const fs = require('fs');
const env = require('dotenv');
const puppeteer = require('puppeteer');
env.config();

const pdfDirectory = path.join(__dirname, '../pdfs');
const pdfTemplate = require("../documents/document");
const pdfTemplateAp = require("../documents/documentap");
const pdfTemplateAv = require("../documents/documentav");

const pdfTemplatePlanDeFinan = require("../documents/documentplandefinancement");
const pdfTemplateAttDeTrav = require("../documents/documentattdetrav");
const pdfTemplatePlandeFinancementDet = require("../documents/documentplandefinancementdet");
const pdfTemplateFicheDePres = require("../documents/documentfichedepres");
const pdfTemplateFichDeSynt = require("../documents/documentfichdesynt");
const pdfTemplateConsDemMpr = require("../documents/documentconsdemmpr");

const pdfTemplateDevMarTreModVal = require("../documents/documentdevmartremodval");
const pdfTemplateSynDeGriAnaDuLogArc = require("../documents/documentsyndegrianadulogarc");
const pdfTemplateSynDeGriAnaDuLogVal = require("../documents/documentsyndegrianadulogval");
const pdfTemplateConMarArc = require("../documents/documentconmararc");
const pdfTemplateConMarVal = require("../documents/documentconmarval");
const pdfTemplateDevMarArcMod = require("../documents/documentdevmararcmod");
const pdfTemplateDevMarArcTreMod = require("../documents/documentdevmararctremod");
const pdfTemplateDevMarModVal = require("../documents/documentdevmarmodval");
const pdfTemplateGriAnaDuLogVie = require("../documents/documentgrianadulogvie");
const pdfTemplateManMarVie = require("../documents/documentmanmarvie");

if (!fs.existsSync(pdfDirectory)) {
    fs.mkdirSync(pdfDirectory);
}

class pdfController {
    createPdf = async (req, res) => {
        const {AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8,AVCCAQ15, AVCCAQ16, AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14, clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, email, imagesBase64MO, imagesBase64IC, imagesBase64AA, imagesBase64AE, imagesBase64CET,Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 } = req.body;
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');

       
        const imagesCET = imagesBase64CET.map((imageBase64CET) => {
            return `<img src="${imageBase64CET}" style="width: 220px; height: 250px; margin: 7px auto;" />`;
        }).join('');

        const imagesAE = imagesBase64AE.map((imageBase64AE) => {
            return `<img src="${imageBase64AE}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');

        const imagesAA = imagesBase64AA.map((imageBase64AA) => {
            return `<img src="${imageBase64AA}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');

        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');

        const imagesMO = imagesBase64MO.map((imageBase64MO) => {
            return `<img src="${imageBase64MO}" style="width: 550px; height: 320px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');




        const htmlContent = pdfTemplate({clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, email, imagesMO, imagesIC, imagesAA, imagesAE, imagesCET, Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContent, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    };
    //AP
    createPdfAp = async (req, res) => {
        const {APCATQ1, APCATQ2, APCATQ3, APCATQ4, APCATQ5, APCATQ6, APCATQ7, APCATQ8, APCATQ9, APCATQ10, APCATQ11, APCATQ12, APCATQ13, APCATQ14, APCATQ15, APCATQ16, APCATQ17, APCATQ18, APCATQ19, APCATQ20, APCATQ21, APCATQ22, APCATQ23, APCATQ24, APCATQ25, APCATQ26, APCATQ27, APRCVQ1, APRCVQ2, APRCVQ3, APRCVQ4, APRCVQ5, APRCVQ6, APRCVQ7, APRCVQ8, ADAPQ1, ADAPQ2, ADAPQ3, ADAPQ4, ADAPQ5, ADAPQ6, ADAPQ7, ADAPQ8, ADAPQ9, APCATQ000, PGAPQ1, PGAPQ2, PGAPQ3, PGAPQq3, AVCDAQ12, ADAVQ1,ADAVQ2,ADAVQ3,ADAVQ4,ADAVQ5,ADAVQ6, AVCDAQ1,AVCDAQ2,AVCDAQ3,AVCDAQ4,AVCDAQ5,AVCDAQ6,AVCDAQ7,AVCDAQ8,AVCDAQ9,AVCDAQ10,AVCDAQ11, AVHCPQ1,AVHCPQ2,AVHCPQ3,AVHCPQ4,AVHCPQ5, AVHCPQ6, AVCDPQ1,AVCDPQ2,AVCDPQ3,AVCDPQ4,AVCDPQ5,AVCDPQ6,AVCDPQ7,AVCDPQ8,AVCDPQ9,AVCDPQ10,AVCDPQ11, AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8,AVCCAQ15,AVCCAQ16, AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14, PGAVQ1, PGAVQ2, PGAVQ3, PGAVQ4, createdAt, clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, email, imagesBase64MO, imagesBase64IC, imagesBase64AA, imagesBase64AE, imagesBase64CET,Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 } = req.body;
        const pdfPathAp = path.join(__dirname, '../pdfs/formulaireAp.pdf');

        const imagesCET = imagesBase64CET.map((imageBase64CET) => {
            return `<img src="${imageBase64CET}" style="width: 220px; height: 250px; margin: 7px auto;" />`;
        }).join('');
        const imagesAE = imagesBase64AE.map((imageBase64AE) => {
            return `<img src="${imageBase64AE}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const imagesAA = imagesBase64AA.map((imageBase64AA) => {
            return `<img src="${imageBase64AA}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 220px; height: 250px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const imagesMO = imagesBase64MO.map((imageBase64MO) => {
            return `<img src="${imageBase64MO}" style="width: 550px; height: 320px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const htmlContentAp = pdfTemplateAp({APCATQ1, APCATQ2, APCATQ3, APCATQ4, APCATQ5, APCATQ6, APCATQ7, APCATQ8, APCATQ9, APCATQ10, APCATQ11, APCATQ12, APCATQ13, APCATQ14, APCATQ15, APCATQ16, APCATQ17, APCATQ18, APCATQ19, APCATQ20, APCATQ21, APCATQ22, APCATQ23, APCATQ24, APCATQ25, APCATQ26, APCATQ27, APRCVQ1, APRCVQ2, APRCVQ3, APRCVQ4, APRCVQ5, APRCVQ6, APRCVQ7, APRCVQ8, ADAPQ1, ADAPQ2, ADAPQ3, ADAPQ4, ADAPQ5, ADAPQ6, ADAPQ7, ADAPQ8, ADAPQ9, APCATQ000, PGAPQ1, PGAPQ2, PGAPQ3, PGAPQq3, AVCDAQ12, ADAVQ1,ADAVQ2,ADAVQ3,ADAVQ4,ADAVQ5,ADAVQ6, AVCDAQ1,AVCDAQ2,AVCDAQ3,AVCDAQ4,AVCDAQ5,AVCDAQ6,AVCDAQ7,AVCDAQ8,AVCDAQ9,AVCDAQ10,AVCDAQ11, AVHCPQ1,AVHCPQ2,AVHCPQ3,AVHCPQ4,AVHCPQ5, AVHCPQ6, AVCDPQ1,AVCDPQ2,AVCDPQ3,AVCDPQ4,AVCDPQ5,AVCDPQ6,AVCDPQ7,AVCDPQ8,AVCDPQ9,AVCDPQ10,AVCDPQ11, AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8,AVCCAQ15, AVCCAQ16, AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14 , PGAVQ1, PGAVQ2, PGAVQ3, PGAVQ4, createdAt, clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, email, imagesMO, imagesIC, imagesAA, imagesAE, imagesCET, Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContentAp, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPathAp,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF Ap generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    };
    //Av
    createPdfAv = async (req, res) => {
        const {AVCDAQ12, ADAVQ1,ADAVQ2,ADAVQ3,ADAVQ4,ADAVQ5,ADAVQ6, AVCDAQ1,AVCDAQ2,AVCDAQ3,AVCDAQ4,AVCDAQ5,AVCDAQ6,AVCDAQ7,AVCDAQ8,AVCDAQ9,AVCDAQ10,AVCDAQ11, AVHCPQ1,AVHCPQ2,AVHCPQ3,AVHCPQ4,AVHCPQ5, AVHCPQ6, AVCDPQ1,AVCDPQ2,AVCDPQ3,AVCDPQ4,AVCDPQ5,AVCDPQ6,AVCDPQ7,AVCDPQ8,AVCDPQ9,AVCDPQ10,AVCDPQ11, AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8,AVCCAQ15,AVCCAQ16, AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14, PGAVQ1, PGAVQ2, PGAVQ3, PGAVQ4, createdAt, clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, email, imagesBase64MO, imagesBase64IC, imagesBase64AA, imagesBase64AE, imagesBase64CET,Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 } = req.body;
        const pdfPathAv = path.join(__dirname, '../pdfs/formulaireAv.pdf');

        const imagesCET = imagesBase64CET.map((imageBase64CET) => {
            return `<img src="${imageBase64CET}" style="width: 220px; height: 250px; margin: 7px auto;" />`;
        }).join('');
        const imagesAE = imagesBase64AE.map((imageBase64AE) => {
            return `<img src="${imageBase64AE}" style="width: 300px; height: 200px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const imagesAA = imagesBase64AA.map((imageBase64AA) => {
            return `<img src="${imageBase64AA}" style="width: 300px; height: 200px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 150px; height: 50px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
        }).join('');
        const imagesMO = imagesBase64MO.map((imageBase64MO) => {
            return `<img src="${imageBase64MO}" style="width: 550px; height: 320px; padding-left: 20px; margin-top: 10px;" />`;
        }).join('');
        const htmlContentAv = pdfTemplateAv({AVCDAQ12, ADAVQ1,ADAVQ2,ADAVQ3,ADAVQ4,ADAVQ5,ADAVQ6, AVCDAQ1,AVCDAQ2,AVCDAQ3,AVCDAQ4,AVCDAQ5,AVCDAQ6,AVCDAQ7,AVCDAQ8,AVCDAQ9,AVCDAQ10,AVCDAQ11, AVHCPQ1,AVHCPQ2,AVHCPQ3,AVHCPQ4,AVHCPQ5, AVHCPQ6, AVCDPQ1,AVCDPQ2,AVCDPQ3,AVCDPQ4,AVCDPQ5,AVCDPQ6,AVCDPQ7,AVCDPQ8,AVCDPQ9,AVCDPQ10,AVCDPQ11, AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8,AVCCAQ15, AVCCAQ16, AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14 , PGAVQ1, PGAVQ2, PGAVQ3, PGAVQ4, createdAt, clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, email, imagesMO, imagesIC, imagesAA, imagesAE, imagesCET, Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContentAv, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPathAv,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF Av generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    };
    // plan de finan create
    createPdfPlanDeFinan = async (req, res) => {
        const { imagesBase64IC, QV0FDT,QV00FDT, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 } = req.body;
        const pdfPathPlanDeFinan = path.join(__dirname, '../pdfs/formulairePlanDeFinan.pdf');

        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: -18px;" />`;
        }).join('');
        
        const htmlContentPlanDeFinan = pdfTemplatePlanDeFinan({imagesIC, QV0FDT,QV00FDT, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContentPlanDeFinan, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPathPlanDeFinan,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF PlanDeFinan generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    };
    // att de trav
    createPdfAttDeTrav = async (req, res) => {
        const { imagesBase64IC, imagesBase64ICC, QV1ADT,QV2ADT ,QV3ADT ,QV4ADT ,QV5ADT ,QV6ADT ,QV7ADT ,QV8ADT ,QV9ADT ,QV10ADT ,QV11ADT, QV12ADT,QV13ADT,QV14ADT,QV15ADT,QV16ADT,QV17ADT,QV18ADT,QV19ADT,QV20ADT,QV21ADT, QV22ADT,QV23ADT,QV24ADT, QV25ADT,QV26ADT,QV27ADT,QV28ADT,QV29ADT,QV30ADT,QV31ADT,QV32ADT,QV33ADT,QV34ADT,QV35ADT,QV36ADT,QV37ADT,QV38ADT, QV39ADT,QV40ADT,QV41ADT,QV42ADT,QV43ADT,QV44ADT, QV444ADT, QV45ADT, QV46ADT, QV47ADT, QV49ADT,QV50ADT, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 } = req.body;
        const pdfPathAttDeTrav = path.join(__dirname, '../pdfs/formulaireAttDeTrav.pdf');

        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
        }).join('');

        const imagesICC = imagesBase64ICC.map((imageBase64ICC) => {
            return `<img src="${imageBase64ICC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
        }).join('');
        
        const htmlContentAttDeTrav = pdfTemplateAttDeTrav({imagesIC, imagesICC, QV1ADT,QV2ADT ,QV3ADT ,QV4ADT ,QV5ADT ,QV6ADT ,QV7ADT ,QV8ADT ,QV9ADT ,QV10ADT ,QV11ADT, QV12ADT,QV13ADT,QV14ADT,QV15ADT,QV16ADT,QV17ADT,QV18ADT,QV19ADT,QV20ADT,QV21ADT, QV22ADT,QV23ADT,QV24ADT, QV25ADT,QV26ADT,QV27ADT,QV28ADT,QV29ADT,QV30ADT,QV31ADT,QV32ADT,QV33ADT,QV34ADT,QV35ADT,QV36ADT,QV37ADT,QV38ADT, QV39ADT,QV40ADT,QV41ADT,QV42ADT,QV43ADT,QV44ADT, QV444ADT, QV45ADT, QV46ADT, QV47ADT, QV49ADT,QV50ADT, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContentAttDeTrav, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPathAttDeTrav,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF AttDeTrav generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    };
    // Plan de Financement Det
    createPdfPlandeFinancementDet = async (req, res) => {
        const { imagesBase64IC, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 } = req.body;
        const pdfPathPlandeFinancementDet = path.join(__dirname, '../pdfs/formulairePlandeFinancementDet.pdf');

        const imagesIC = imagesBase64IC.map((imageBase64IC) => {
            return `<img src="${imageBase64IC}" style="width: 150px; height: 20px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
        }).join('');
        
        const htmlContentPlandeFinancementDet = pdfTemplatePlandeFinancementDet({imagesIC, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 });

 
        try {
            // Launch Puppeteer to generate PDF
            const browser = await puppeteer.launch({ 
                headless: true, 
                args: ['--no-sandbox', '--disable-setuid-sandbox'] 
            });
            const page = await browser.newPage();
            await page.setContent(htmlContentPlandeFinancementDet, { waitUntil: 'load' });

            await page.pdf({
                path: pdfPathPlandeFinancementDet,
                format: 'A4',
                printBackground: true,
                margin: {
                    top: '1cm',
                    bottom: '1cm',
                    left: '1cm',
                    right: '1cm',
                },
            });

            await browser.close();
            res.send('PDF Plan de Financement Det generated');
        } catch (err) {
            console.error('Error generating PDF:', err);
            res.status(500).send('Error generating PDF');
        }
    };
// Fiche De Pres
createPdfFicheDePres = async (req, res) => {
    const { imagesBase64IC, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 } = req.body;
    const pdfPathFicheDePres = path.join(__dirname, '../pdfs/formulaireFicheDePres.pdf');

    const imagesIC = imagesBase64IC.map((imageBase64IC) => {
        return `<img src="${imageBase64IC}" style="width: 150px; height: 20px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    }).join('');
    
    const htmlContentFicheDePres = pdfTemplateFicheDePres({imagesIC, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentFicheDePres, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathFicheDePres,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Fiche De Pres generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Fich De Synt
createPdfFichDeSynt = async (req, res) => {
    const { imagesBase64IC, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 } = req.body;
    const pdfPathFichDeSynt = path.join(__dirname, '../pdfs/formulaireFichDeSynt.pdf');

    const imagesIC = imagesBase64IC.map((imageBase64IC) => {
        return `<img src="${imageBase64IC}" style="width: 150px; height: 20px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    }).join('');
    
    const htmlContentFichDeSynt = pdfTemplateFichDeSynt({imagesIC, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT, QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1 });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentFichDeSynt, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathFichDeSynt,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Fich De Synt generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Fich De Synt
createPdfConsDemMpr = async (req, res) => {
    const { imagesBase64IC, Q1CDM,Q2CDM,Q3CDM,Q4CDM,Q5CDM,Q6CDM,Q7CDM,Q8CDM,Q9CDM,Q10CDM,Q11CDM,Q12CDM,Q13CDM,Q14CDM,Q15CDM,Q16CDM,Q17CDM,Q18CDM,Q19CDM,Q20CDM,Q21CDM,Q22CDM,Q23CDM,Q24CDM, Q25CDM,Q26CDM, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, CET1 } = req.body;
    const pdfPathConsDemMpr = path.join(__dirname, '../pdfs/formulaireConsDemMpr.pdf');

    const imagesIC = imagesBase64IC.map((imageBase64IC) => {
        return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    }).join('');
    
    const htmlContentConsDemMpr = pdfTemplateConsDemMpr({imagesIC,Q1CDM,Q2CDM,Q3CDM,Q4CDM,Q5CDM,Q6CDM,Q7CDM,Q8CDM,Q9CDM,Q10CDM,Q11CDM,Q12CDM,Q13CDM,Q14CDM,Q15CDM,Q16CDM,Q17CDM,Q18CDM,Q19CDM,Q20CDM,Q21CDM,Q22CDM,Q23CDM,Q24CDM, Q25CDM,Q26CDM, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, CET1 });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentConsDemMpr, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathConsDemMpr,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Cons Dem Mpr generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Dev Mar Tre Mod Val
createPdfDevMarTreModVal = async (req, res) => {
    const {QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV8DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathDevMarTreModVal = path.join(__dirname, '../pdfs/formulaireDevMarTreModVal.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentDevMarTreModVal = pdfTemplateDevMarTreModVal({QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV8DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentDevMarTreModVal, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathDevMarTreModVal,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Dev Mar Tre Mod Val generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Syn De Gri Ana Du Log Val
createPdfSynDeGriAnaDuLogVal = async (req, res) => {
    const {Q1SDLGDDLA,Q2SDLGDDLA,Q3SDLGDDLA,Q4SDLGDDLA,Q5SDLGDDLA,Q6SDLGDDLA,Q7SDLGDDLA,Q8SDLGDDLA,Q9SDLGDDLA,Q10SDLGDDLA,Q11SDLGDDLA,Q12SDLGDDLA,Q13SDLGDDLA,Q14SDLGDDLA,Q15SDLGDDLA,Q16SDLGDDLA,Q17SDLGDDLA,Q18SDLGDDLA,Q19SDLGDDLA,Q20SDLGDDLA,Q21SDLGDDLA,Q22SDLGDDLA,Q23SDLGDDLA,Q24SDLGDDLA,Q25SDLGDDLA, demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathSynDeGriAnaDuLogVal = path.join(__dirname, '../pdfs/formulaireSynDeGriAnaDuLogVal.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentSynDeGriAnaDuLogVal = pdfTemplateSynDeGriAnaDuLogVal({Q1SDLGDDLA,Q2SDLGDDLA,Q3SDLGDDLA,Q4SDLGDDLA,Q5SDLGDDLA,Q6SDLGDDLA,Q7SDLGDDLA,Q8SDLGDDLA,Q9SDLGDDLA,Q10SDLGDDLA,Q11SDLGDDLA,Q12SDLGDDLA,Q13SDLGDDLA,Q14SDLGDDLA,Q15SDLGDDLA,Q16SDLGDDLA,Q17SDLGDDLA,Q18SDLGDDLA,Q19SDLGDDLA,Q20SDLGDDLA,Q21SDLGDDLA,Q22SDLGDDLA,Q23SDLGDDLA,Q24SDLGDDLA,Q25SDLGDDLA, demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentSynDeGriAnaDuLogVal, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathSynDeGriAnaDuLogVal,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Syn De Gri Ana Du Log Val generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Syn De Gri Ana Du Log Val
createPdfSynDeGriAnaDuLogArc = async (req, res) => {
    const {Q1SDLGDDLA,Q2SDLGDDLA,Q3SDLGDDLA,Q4SDLGDDLA,Q5SDLGDDLA,Q6SDLGDDLA,Q7SDLGDDLA,Q8SDLGDDLA,Q9SDLGDDLA,Q10SDLGDDLA,Q11SDLGDDLA,Q12SDLGDDLA,Q13SDLGDDLA,Q14SDLGDDLA,Q15SDLGDDLA,Q16SDLGDDLA,Q17SDLGDDLA,Q18SDLGDDLA,Q19SDLGDDLA,Q20SDLGDDLA,Q21SDLGDDLA,Q22SDLGDDLA,Q23SDLGDDLA,Q24SDLGDDLA,Q25SDLGDDLA, demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathSynDeGriAnaDuLogArc = path.join(__dirname, '../pdfs/formulaireSynDeGriAnaDuLogArc.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentSynDeGriAnaDuLogArc = pdfTemplateSynDeGriAnaDuLogArc({Q1SDLGDDLA,Q2SDLGDDLA,Q3SDLGDDLA,Q4SDLGDDLA,Q5SDLGDDLA,Q6SDLGDDLA,Q7SDLGDDLA,Q8SDLGDDLA,Q9SDLGDDLA,Q10SDLGDDLA,Q11SDLGDDLA,Q12SDLGDDLA,Q13SDLGDDLA,Q14SDLGDDLA,Q15SDLGDDLA,Q16SDLGDDLA,Q17SDLGDDLA,Q18SDLGDDLA,Q19SDLGDDLA,Q20SDLGDDLA,Q21SDLGDDLA,Q22SDLGDDLA,Q23SDLGDDLA,Q24SDLGDDLA,Q25SDLGDDLA, demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentSynDeGriAnaDuLogArc, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathSynDeGriAnaDuLogArc,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Syn De Gri Ana Du Log Arc generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Con Mar Arc
createPdfConMarArc = async (req, res) => {
    const {imagesBase64IC,Q1CMA,Q2CMA,Q3CMA,Q4CMA,demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathConMarArc = path.join(__dirname, '../pdfs/formulaireConMarArc.pdf');

    const imagesIC = imagesBase64IC.map((imageBase64IC) => {
        return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    }).join('');
    
    const htmlContentConMarArc = pdfTemplateConMarArc({imagesIC, Q1CMA,Q2CMA,Q3CMA,Q4CMA, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentConMarArc, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathConMarArc,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Con Mar Arc generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Con Mar Arc
createPdfConMarVal = async (req, res) => {
    const {imagesBase64IC,Q1CMA,Q2CMA,Q3CMA,Q4CMA,demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathConMarVal = path.join(__dirname, '../pdfs/formulaireConMarVal.pdf');

    const imagesIC = imagesBase64IC.map((imageBase64IC) => {
        return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    }).join('');
    
    const htmlContentConMarVal = pdfTemplateConMarVal({imagesIC, Q1CMA,Q2CMA,Q3CMA,Q4CMA, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentConMarVal, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathConMarVal,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Con Mar Val generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Dev Mar Arc Mod
createPdfDevMarArcMod = async (req, res) => {
    const {Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV,demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathDevMarArcMod = path.join(__dirname, '../pdfs/formulaireDevMarArcMod.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentDevMarArcMod = pdfTemplateDevMarArcMod({Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentDevMarArcMod, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathDevMarArcMod,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Dev Mar Arc Mod generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Dev Mar Arc Tre Mod
createPdfDevMarArcTreMod = async (req, res) => {
    const {Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV,demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathDevMarArcTreMod = path.join(__dirname, '../pdfs/formulaireDevMarArcTreMod.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentDevMarArcTreMod = pdfTemplateDevMarArcTreMod({Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentDevMarArcTreMod, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathDevMarArcTreMod,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Dev Mar Arc Tre Mod generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Dev Mar Mod Val
createPdfDevMarModVal = async (req, res) => {
    const {Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV,demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathDevMarModVal = path.join(__dirname, '../pdfs/formulaireDevMarModVal.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentDevMarModVal = pdfTemplateDevMarModVal({Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentDevMarModVal, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathDevMarModVal,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Dev Mar Arc Tre Mod generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Gri Ana Du Log Vie
createPdfGriAnaDuLogVie = async (req, res) => {
    const {Q29G6ADLQ,Q14G0ADLQ,Q11G4ADLQ,Q11G5ADLQ,Q3G22ADLQ,Q3G33ADLQ,Q3G44ADLQ,Q3G55ADLQ,Q40G4ADLQ,Q40G3ADLQ,Q40G2ADLQ,Q40G1ADLQ,Q39G12ADLQ,Q39G11ADLQ,Q39G10ADLQ,Q39G9ADLQ,Q39G8ADLQ,Q39G7ADLQ,Q39G6ADLQ,Q39G5ADLQ,Q39G4ADLQ,Q39G3ADLQ,Q39G2ADLQ,Q39G1ADLQ,Q38G4ADLQ,Q38G3ADLQ,Q38G2ADLQ,Q38G1ADLQ,Q37G6ADLQ,Q37G5ADLQ,Q37G4ADLQ,Q37G3ADLQ,Q37G2ADLQ,Q37G1ADLQ,Q36G18ADLQ,Q36G17ADLQ,Q36G16ADLQ,Q36G15ADLQ,Q36G14ADLQ,Q36G13ADLQ,Q36G12ADLQ,Q36G11ADLQ,Q36G10ADLQ,Q36G9ADLQ,Q36G8ADLQ,Q36G7ADLQ,Q36G6ADLQ,Q36G5ADLQ,Q36G4ADLQ,Q36G3ADLQ,Q36G2ADLQ,Q36G1ADLQ,Q35G3ADLQ,Q35G2ADLQ,Q35G1ADLQ,Q34G3ADLQ,Q34G2ADLQ,Q34G1ADLQ,Q33G3ADLQ,Q33G2ADLQ,Q33G1ADLQ,Q32G3ADLQ,Q32G2ADLQ,Q32G1ADLQ,Q31G5ADLQ,Q31G4ADLQ,Q31G3ADLQ,Q31G2ADLQ,Q31G1ADLQ,Q30G9ADLQ,Q30G8ADLQ,Q30G7ADLQ,Q30G6ADLQ,Q30G5ADLQ,Q30G4ADLQ,Q30G3ADLQ,Q30G2ADLQ,Q30G1ADLQ,Q29G5ADLQ,Q29G4ADLQ,Q29G3ADLQ,Q29G2ADLQ,Q29G1ADLQ,Q28G5ADLQ,Q28G4ADLQ,Q28G3ADLQ,Q28G2ADLQ,Q28G1ADLQ,Q27G3ADLQ,Q27G2ADLQ,Q27G1ADLQ,Q26G7ADLQ,Q26G6ADLQ,Q26G5ADLQ,Q26G4ADLQ,Q26G3ADLQ,Q26G2ADLQ,Q26G1ADLQ,Q25G4ADLQ,Q25G3ADLQ,Q25G2ADLQ,Q25G1ADLQ,Q24G6ADLQ,Q24G5ADLQ,Q24G4ADLQ,Q24G3ADLQ,Q24G2ADLQ,Q24G1ADLQ,Q23G12ADLQ,Q23G11ADLQ,Q23G10ADLQ,Q23G9ADLQ,Q23G8ADLQ,Q23G7ADLQ,Q23G6ADLQ,Q23G5ADLQ,Q23G4ADLQ,Q23G3ADLQ,Q23G2ADLQ,Q23G1ADLQ,Q22G4ADLQ,Q22G3ADLQ,Q22G2ADLQ,Q22G1ADLQ,Q21G7ADLQ,Q21G6ADLQ,Q21G5ADLQ,Q21G4ADLQ,Q21G3ADLQ,Q21G2ADLQ,Q21G1ADLQ,Q20G3ADLQ,Q20G2ADLQ,Q20G1ADLQ,Q19G9ADLQ,Q19G8ADLQ,Q19G7ADLQ,Q19G6ADLQ,Q19G5ADLQ,Q19G4ADLQ,Q19G3ADLQ,Q19G2ADLQ,Q19G1ADLQ,Q18G4ADLQ,Q18G3ADLQ,Q18G2ADLQ,Q18G1ADLQ,Q17G4ADLQ,Q17G3ADLQ,Q17G2ADLQ,Q17G1ADLQ,Q16G4ADLQ,Q16G3ADLQ,Q16G2ADLQ,Q16G1ADLQ,Q15G4ADLQ,Q15G3ADLQ,Q15G2ADLQ,Q15G1ADLQ,Q14G5ADLQ,Q14G4ADLQ,Q14G3ADLQ,Q14G2ADLQ,Q14G1ADLQ,Q13G6ADLQ,Q13G5ADLQ,Q13G4ADLQ,Q13G3ADLQ,Q13G2ADLQ,Q13G1ADLQ,Q12G6ADLQ,Q12G5ADLQ,Q12G4ADLQ,Q12G3ADLQ,Q12G2ADLQ,Q12G1ADLQ,Q11G3ADLQ,Q11G2ADLQ,Q11G1ADLQ,Q10G3ADLQ,Q10G2ADLQ,Q10G1ADLQ,Q9G5ADLQ,Q9G4ADLQ,Q9G3ADLQ,Q9G2ADLQ,Q9G1ADLQ,Q8G5ADLQ,Q8G4ADLQ,Q8G3ADLQ,Q8G2ADLQ,Q8G1ADLQ,Q7G5ADLQ,Q7G4ADLQ,Q7G3ADLQ,Q7G2ADLQ,Q7G1ADLQ,Q6G7ADLQ,Q6G6ADLQ,Q6G5ADLQ,Q6G4ADLQ,Q6G3ADLQ,Q6G2ADLQ,Q6G1ADLQ,Q5G8ADLQ,Q5G7ADLQ,Q5G6ADLQ,Q5G5ADLQ,Q5G4ADLQ,Q5G3ADLQ,Q5G2ADLQ,Q5G1ADLQ,Q4G7ADLQ,Q4G6ADLQ,Q4G5ADLQ,Q4G4ADLQ,Q4G3ADLQ,Q4G2ADLQ,Q4G1ADLQ,Q3G5ADLQ,Q3G4ADLQ,Q3G3ADLQ,Q3G2ADLQ,Q3G1ADLQ   ,Q2GADLQ, Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV,demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathGriAnaDuLogVie = path.join(__dirname, '../pdfs/formulaireGriAnaDuLogVie.pdf');

    // const imagesIC = imagesBase64IC.map((imageBase64IC) => {
    //     return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    // }).join('');
    
    const htmlContentGriAnaDuLogVie = pdfTemplateGriAnaDuLogVie({Q29G6ADLQ,Q14G0ADLQ,Q11G4ADLQ,Q11G5ADLQ,Q3G22ADLQ,Q3G33ADLQ,Q3G44ADLQ,Q3G55ADLQ,Q40G4ADLQ,Q40G3ADLQ,Q40G2ADLQ,Q40G1ADLQ,Q39G12ADLQ,Q39G11ADLQ,Q39G10ADLQ,Q39G9ADLQ,Q39G8ADLQ,Q39G7ADLQ,Q39G6ADLQ,Q39G5ADLQ,Q39G4ADLQ,Q39G3ADLQ,Q39G2ADLQ,Q39G1ADLQ,Q38G4ADLQ,Q38G3ADLQ,Q38G2ADLQ,Q38G1ADLQ,Q37G6ADLQ,Q37G5ADLQ,Q37G4ADLQ,Q37G3ADLQ,Q37G2ADLQ,Q37G1ADLQ,Q36G18ADLQ,Q36G17ADLQ,Q36G16ADLQ,Q36G15ADLQ,Q36G14ADLQ,Q36G13ADLQ,Q36G12ADLQ,Q36G11ADLQ,Q36G10ADLQ,Q36G9ADLQ,Q36G8ADLQ,Q36G7ADLQ,Q36G6ADLQ,Q36G5ADLQ,Q36G4ADLQ,Q36G3ADLQ,Q36G2ADLQ,Q36G1ADLQ,Q35G3ADLQ,Q35G2ADLQ,Q35G1ADLQ,Q34G3ADLQ,Q34G2ADLQ,Q34G1ADLQ,Q33G3ADLQ,Q33G2ADLQ,Q33G1ADLQ,Q32G3ADLQ,Q32G2ADLQ,Q32G1ADLQ,Q31G5ADLQ,Q31G4ADLQ,Q31G3ADLQ,Q31G2ADLQ,Q31G1ADLQ,Q30G9ADLQ,Q30G8ADLQ,Q30G7ADLQ,Q30G6ADLQ,Q30G5ADLQ,Q30G4ADLQ,Q30G3ADLQ,Q30G2ADLQ,Q30G1ADLQ,Q29G5ADLQ,Q29G4ADLQ,Q29G3ADLQ,Q29G2ADLQ,Q29G1ADLQ,Q28G5ADLQ,Q28G4ADLQ,Q28G3ADLQ,Q28G2ADLQ,Q28G1ADLQ,Q27G3ADLQ,Q27G2ADLQ,Q27G1ADLQ,Q26G7ADLQ,Q26G6ADLQ,Q26G5ADLQ,Q26G4ADLQ,Q26G3ADLQ,Q26G2ADLQ,Q26G1ADLQ,Q25G4ADLQ,Q25G3ADLQ,Q25G2ADLQ,Q25G1ADLQ,Q24G6ADLQ,Q24G5ADLQ,Q24G4ADLQ,Q24G3ADLQ,Q24G2ADLQ,Q24G1ADLQ,Q23G12ADLQ,Q23G11ADLQ,Q23G10ADLQ,Q23G9ADLQ,Q23G8ADLQ,Q23G7ADLQ,Q23G6ADLQ,Q23G5ADLQ,Q23G4ADLQ,Q23G3ADLQ,Q23G2ADLQ,Q23G1ADLQ,Q22G4ADLQ,Q22G3ADLQ,Q22G2ADLQ,Q22G1ADLQ,Q21G7ADLQ,Q21G6ADLQ,Q21G5ADLQ,Q21G4ADLQ,Q21G3ADLQ,Q21G2ADLQ,Q21G1ADLQ,Q20G3ADLQ,Q20G2ADLQ,Q20G1ADLQ,Q19G9ADLQ,Q19G8ADLQ,Q19G7ADLQ,Q19G6ADLQ,Q19G5ADLQ,Q19G4ADLQ,Q19G3ADLQ,Q19G2ADLQ,Q19G1ADLQ,Q18G4ADLQ,Q18G3ADLQ,Q18G2ADLQ,Q18G1ADLQ,Q17G4ADLQ,Q17G3ADLQ,Q17G2ADLQ,Q17G1ADLQ,Q16G4ADLQ,Q16G3ADLQ,Q16G2ADLQ,Q16G1ADLQ,Q15G4ADLQ,Q15G3ADLQ,Q15G2ADLQ,Q15G1ADLQ,Q14G5ADLQ,Q14G4ADLQ,Q14G3ADLQ,Q14G2ADLQ,Q14G1ADLQ,Q13G6ADLQ,Q13G5ADLQ,Q13G4ADLQ,Q13G3ADLQ,Q13G2ADLQ,Q13G1ADLQ,Q12G6ADLQ,Q12G5ADLQ,Q12G4ADLQ,Q12G3ADLQ,Q12G2ADLQ,Q12G1ADLQ,Q11G3ADLQ,Q11G2ADLQ,Q11G1ADLQ,Q10G3ADLQ,Q10G2ADLQ,Q10G1ADLQ,Q9G5ADLQ,Q9G4ADLQ,Q9G3ADLQ,Q9G2ADLQ,Q9G1ADLQ,Q8G5ADLQ,Q8G4ADLQ,Q8G3ADLQ,Q8G2ADLQ,Q8G1ADLQ,Q7G5ADLQ,Q7G4ADLQ,Q7G3ADLQ,Q7G2ADLQ,Q7G1ADLQ,Q6G7ADLQ,Q6G6ADLQ,Q6G5ADLQ,Q6G4ADLQ,Q6G3ADLQ,Q6G2ADLQ,Q6G1ADLQ,Q5G8ADLQ,Q5G7ADLQ,Q5G6ADLQ,Q5G5ADLQ,Q5G4ADLQ,Q5G3ADLQ,Q5G2ADLQ,Q5G1ADLQ,Q4G7ADLQ,Q4G6ADLQ,Q4G5ADLQ,Q4G4ADLQ,Q4G3ADLQ,Q4G2ADLQ,Q4G1ADLQ,Q3G5ADLQ,Q3G4ADLQ,Q3G3ADLQ,Q3G2ADLQ,Q3G1ADLQ,Q2GADLQ, Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV,demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentGriAnaDuLogVie, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathGriAnaDuLogVie,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Gri Ana Du Log Vie generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};
// Man Mar Vie
createPdfManMarVie = async (req, res) => {
    const {imagesBase64IC, Q1MMV,Q2MMV,Q3MMV,Q4MMV,Q5MMV,Q6MMV,Q7MMV,Q8MMV,Q9MMV,Q10MMV,nom, prenom,raisoc,addresse,mail,ttel, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus } = req.body;
    const pdfPathManMarVie = path.join(__dirname, '../pdfs/formulaireManMarVie.pdf');

    const imagesIC = imagesBase64IC.map((imageBase64IC) => {
        return `<img src="${imageBase64IC}" style="width: 150px; height: 40px; padding-left: 20px; margin-top: 5px; margin-bottom: 5px;" />`;
    }).join('');
    
    const htmlContentManMarVie = pdfTemplateManMarVie({imagesIC,Q1MMV,Q2MMV,Q3MMV,Q4MMV,Q5MMV,Q6MMV,Q7MMV,Q8MMV,Q9MMV,Q10MMV, nom, prenom,raisoc,addresse,mail,ttel, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus });


    try {
        // Launch Puppeteer to generate PDF
        const browser = await puppeteer.launch({ 
            headless: true, 
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        await page.setContent(htmlContentManMarVie, { waitUntil: 'load' });

        await page.pdf({
            path: pdfPathManMarVie,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        await browser.close();
        res.send('PDF Man Mar Vie generated');
    } catch (err) {
        console.error('Error generating PDF:', err);
        res.status(500).send('Error generating PDF');
    }
};


    fetchPdf = (req, res) => {
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');
        if (!fs.existsSync(pdfPath)) {
            return res.status(404).send('PDF not found');
        }
        res.sendFile(pdfPath);
    };
    //Ap
    fetchPdfAp = (req, res) => {
        const pdfPathAp = path.join(__dirname, '../pdfs/formulaireAp.pdf');
        if (!fs.existsSync(pdfPathAp)) {
            return res.status(404).send('PDF Ap not found');
        }
        res.sendFile(pdfPathAp);
    };
    //Av
    fetchPdfAv = (req, res) => {
        const pdfPathAv = path.join(__dirname, '../pdfs/formulaireAv.pdf');
        if (!fs.existsSync(pdfPathAv)) {
            return res.status(404).send('PDF Av not found');
        }
        res.sendFile(pdfPathAv);
    };
// plan de finan fetch
fetchPdfPlanDeFinan = (req, res) => {
    const pdfPathPlanDeFinan = path.join(__dirname, '../pdfs/formulairePlanDeFinan.pdf');
    if (!fs.existsSync(pdfPathPlanDeFinan)) {
        return res.status(404).send('PDF PlanDeFinan not found');
    }
    res.sendFile(pdfPathPlanDeFinan);
};
//Att De Trav
fetchPdfAttDeTrav = (req, res) => {
    const pdfPathAttDeTrav = path.join(__dirname, '../pdfs/formulaireAttDeTrav.pdf');
    if (!fs.existsSync(pdfPathAttDeTrav)) {
        return res.status(404).send('PDF AttDeTrav not found');
    }
    res.sendFile(pdfPathAttDeTrav);
};
//Plan de Financement Det
fetchPdfPlandeFinancementDet = (req, res) => {
    const pdfPathPlandeFinancementDet = path.join(__dirname, '../pdfs/formulairePlandeFinancementDet.pdf');
    if (!fs.existsSync(pdfPathPlandeFinancementDet)) {
        return res.status(404).send('PDF Plan de Financement Det not found');
    }
    res.sendFile(pdfPathPlandeFinancementDet);
};
//Fiche De Pres
fetchPdfFicheDePres = (req, res) => {
    const pdfPathFicheDePres = path.join(__dirname, '../pdfs/formulaireFicheDePres.pdf');
    if (!fs.existsSync(pdfPathFicheDePres)) {
        return res.status(404).send('PDF Fiche De Pres not found');
    }
    res.sendFile(pdfPathFicheDePres);
};
//Fich De Synt
fetchPdfFichDeSynt = (req, res) => {
    const pdfPathFichDeSynt = path.join(__dirname, '../pdfs/formulaireFichDeSynt.pdf');
    if (!fs.existsSync(pdfPathFichDeSynt)) {
        return res.status(404).send('PDF Fich De Synt not found');
    }
    res.sendFile(pdfPathFichDeSynt);
};
//Cons Dem Mpr
fetchPdfConsDemMpr = (req, res) => {
    const pdfPathConsDemMpr = path.join(__dirname, '../pdfs/formulaireConsDemMpr.pdf');
    if (!fs.existsSync(pdfPathConsDemMpr)) {
        return res.status(404).send('PDF Cons Dem Mpr not found');
    }
    res.sendFile(pdfPathConsDemMpr);
};
//Dev Mar Tre Mod Val
fetchPdfDevMarTreModVal = (req, res) => {
    const pdfPathDevMarTreModVal = path.join(__dirname, '../pdfs/formulaireDevMarTreModVal.pdf');
    if (!fs.existsSync(pdfPathDevMarTreModVal)) {
        return res.status(404).send('PDF Dev Mar Tre Mod Val not found');
    }
    res.sendFile(pdfPathDevMarTreModVal);
};
//Syn De Gri Ana Du Log Val
fetchPdfSynDeGriAnaDuLogVal = (req, res) => {
    const pdfPathSynDeGriAnaDuLogVal = path.join(__dirname, '../pdfs/formulaireSynDeGriAnaDuLogVal.pdf');
    if (!fs.existsSync(pdfPathSynDeGriAnaDuLogVal)) {
        return res.status(404).send('PDF Syn De Gri Ana Du Log Val not found');
    }
    res.sendFile(pdfPathSynDeGriAnaDuLogVal);
};
//Syn De Gri Ana Du Log Arc
fetchPdfSynDeGriAnaDuLogArc = (req, res) => {
    const pdfPathSynDeGriAnaDuLogArc = path.join(__dirname, '../pdfs/formulaireSynDeGriAnaDuLogArc.pdf');
    if (!fs.existsSync(pdfPathSynDeGriAnaDuLogArc)) {
        return res.status(404).send('PDF Syn De Gri Ana Du Log Arc not found');
    }
    res.sendFile(pdfPathSynDeGriAnaDuLogArc);
};
//Con Mar Arc
fetchPdfConMarArc = (req, res) => {
    const pdfPathConMarArc = path.join(__dirname, '../pdfs/formulaireConMarArc.pdf');
    if (!fs.existsSync(pdfPathConMarArc)) {
        return res.status(404).send('PDF Con Mar Arc not found');
    }
    res.sendFile(pdfPathConMarArc);
};
//Con Mar Val
fetchPdfConMarVal = (req, res) => {
    const pdfPathConMarVal = path.join(__dirname, '../pdfs/formulaireConMarVal.pdf');
    if (!fs.existsSync(pdfPathConMarVal)) {
        return res.status(404).send('PDF Con Mar Val not found');
    }
    res.sendFile(pdfPathConMarVal);
};
//Dev Mar Arc Mod
fetchPdfDevMarArcMod = (req, res) => {
    const pdfPathDevMarArcMod = path.join(__dirname, '../pdfs/formulaireDevMarArcMod.pdf');
    if (!fs.existsSync(pdfPathDevMarArcMod)) {
        return res.status(404).send('PDF Dev Mar Arc Mod not found');
    }
    res.sendFile(pdfPathDevMarArcMod);
};
//Dev Mar Arc Tre Mod
fetchPdfDevMarArcTreMod = (req, res) => {
    const pdfPathDevMarArcTreMod = path.join(__dirname, '../pdfs/formulaireDevMarArcTreMod.pdf');
    if (!fs.existsSync(pdfPathDevMarArcTreMod)) {
        return res.status(404).send('PDF Dev Mar Arc Tre Mod not found');
    }
    res.sendFile(pdfPathDevMarArcTreMod);
};
//Dev Mar Mod Val
fetchPdfDevMarModVal = (req, res) => {
    const pdfPathDevMarModVal = path.join(__dirname, '../pdfs/formulaireDevMarModVal.pdf');
    if (!fs.existsSync(pdfPathDevMarModVal)) {
        return res.status(404).send('PDF Dev Mar Mod Val not found');
    }
    res.sendFile(pdfPathDevMarModVal);
};
//Gri Ana Du Log Vie
fetchPdfGriAnaDuLogVie = (req, res) => {
    const pdfPathGriAnaDuLogVie = path.join(__dirname, '../pdfs/formulaireGriAnaDuLogVie.pdf');
    if (!fs.existsSync(pdfPathGriAnaDuLogVie)) {
        return res.status(404).send('PDF Gri Ana Du Log Vie not found');
    }
    res.sendFile(pdfPathGriAnaDuLogVie);
};
//Man Mar Vie
fetchPdfManMarVie = (req, res) => {
    const pdfPathManMarVie = path.join(__dirname, '../pdfs/formulaireManMarVie.pdf');
    if (!fs.existsSync(pdfPathManMarVie)) {
        return res.status(404).send('PDF Man Mar Vie not found');
    }
    res.sendFile(pdfPathManMarVie);
};

    sendPdf = async (req, res) => {
        const pdfPath = path.join(__dirname, '../pdfs/formulaire.pdf');
        if (!fs.existsSync(pdfPath)) {
            return res.status(404).send('PDF not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPath, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Ap
    sendPdfAp = async (req, res) => {
        const pdfPathAp = path.join(__dirname, '../pdfs/formulaireAp.pdf');
        if (!fs.existsSync(pdfPathAp)) {
            return res.status(404).send('PDF Ap not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Ap generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathAp, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    sendPdfAv = async (req, res) => {
        const pdfPathAv = path.join(__dirname, '../pdfs/formulaireAv.pdf');
        if (!fs.existsSync(pdfPathAv)) {
            return res.status(404).send('PDF Av not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Av generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathAv, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //plan de financement send
    sendPlanDeFinan = async (req, res) => {
        const pdfPathPlanDeFinan = path.join(__dirname, '../pdfs/formulairePlanDeFinan.pdf');
        if (!fs.existsSync(pdfPathPlanDeFinan)) {
            return res.status(404).send('PDF PlanDeFinan not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Plan De Financement generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathPlanDeFinan, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Att De Trav
    sendAttDeTrav = async (req, res) => {
        const pdfPathAttDeTrav = path.join(__dirname, '../pdfs/formulaireAttDeTrav.pdf');
        if (!fs.existsSync(pdfPathAttDeTrav)) {
            return res.status(404).send('PDF AttDeTrav not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Attestation de Trav generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathAttDeTrav, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
     //Plan de Financement Det
     sendPlandeFinancementDet = async (req, res) => {
        const pdfPathPlandeFinancementDet = path.join(__dirname, '../pdfs/formulairePlandeFinancementDet.pdf');
        if (!fs.existsSync(pdfPathPlandeFinancementDet)) {
            return res.status(404).send('PDF Plan de Financement Det not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Plan de Financement Det generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathPlandeFinancementDet, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //FicheDePres
    sendFicheDePres = async (req, res) => {
        const pdfPathFicheDePres = path.join(__dirname, '../pdfs/formulaireFicheDePres.pdf');
        if (!fs.existsSync(pdfPathFicheDePres)) {
            return res.status(404).send('PDF Fiche De Pres not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Fiche De Pres  generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathFicheDePres, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Fich De Synt
    sendFichDeSynt = async (req, res) => {
        const pdfPathFichDeSynt = path.join(__dirname, '../pdfs/formulaireFichDeSynt.pdf');
        if (!fs.existsSync(pdfPathFichDeSynt)) {
            return res.status(404).send('PDF Fich De Synt not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Fich De Synt generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathFichDeSynt, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Cons De mMpr
    sendConsDemMpr = async (req, res) => {
        const pdfPathConsDemMpr = path.join(__dirname, '../pdfs/formulaireConsDemMpr.pdf');
        if (!fs.existsSync(pdfPathConsDemMpr)) {
            return res.status(404).send('PDF Cons De mMpr not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Cons Dem Mpr generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathConsDemMpr, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Dev Mar Tre Mod Val
    sendDevMarTreModVal = async (req, res) => {
        const pdfPathDevMarTreModVal = path.join(__dirname, '../pdfs/formulaireDevMarTreModVal.pdf');
        if (!fs.existsSync(pdfPathDevMarTreModVal)) {
            return res.status(404).send('PDF Dev Mar Tre Mod Val not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Dev Mar Tre Mod Val generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathDevMarTreModVal, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Syn De Gri Ana Du Log Val
    sendSynDeGriAnaDuLogVal = async (req, res) => {
        const pdfPathSynDeGriAnaDuLogVal = path.join(__dirname, '../pdfs/formulaireSynDeGriAnaDuLogVal.pdf');
        if (!fs.existsSync(pdfPathSynDeGriAnaDuLogVal)) {
            return res.status(404).send('PDF Dev Mar Tre Mod Val not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Syn De Gri Ana Du Log Val generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathSynDeGriAnaDuLogVal, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Syn De Gri Ana Du Log Arc
    sendSynDeGriAnaDuLogArc = async (req, res) => {
        const pdfPathSynDeGriAnaDuLogArc = path.join(__dirname, '../pdfs/formulaireSynDeGriAnaDuLogArc.pdf');
        if (!fs.existsSync(pdfPathSynDeGriAnaDuLogArc)) {
            return res.status(404).send('PDF Dev Mar Tre Mod Arc not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Syn De Gri Ana Du Log Arc generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathSynDeGriAnaDuLogArc, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
     //Con Mar Arc
     sendConMarArc = async (req, res) => {
        const pdfPathConMarArc = path.join(__dirname, '../pdfs/formulaireConMarArc.pdf');
        if (!fs.existsSync(pdfPathConMarArc)) {
            return res.status(404).send('PDF Con Mar Arc not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Con Mar Arc generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathConMarArc, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
     //Con Mar Val
     sendConMarVal = async (req, res) => {
        const pdfPathConMarVal = path.join(__dirname, '../pdfs/formulaireConMarVal.pdf');
        if (!fs.existsSync(pdfPathConMarVal)) {
            return res.status(404).send('PDF Con Mar Arc not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Con Mar Val generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathConMarVal, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Dev Mar Arc Mod
    sendDevMarArcMod = async (req, res) => {
        const pdfPathDevMarArcMod = path.join(__dirname, '../pdfs/formulaireDevMarArcMod.pdf');
        if (!fs.existsSync(pdfPathDevMarArcMod)) {
            return res.status(404).send('PDF Dev Mar Arc Mod not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Dev Mar Arc Mod generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathDevMarArcMod, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Dev Mar Arc Tre Mod
    sendDevMarArcTreMod = async (req, res) => {
        const pdfPathDevMarArcTreMod = path.join(__dirname, '../pdfs/formulaireDevMarArcTreMod.pdf');
        if (!fs.existsSync(pdfPathDevMarArcTreMod)) {
            return res.status(404).send('PDF Dev Mar Arc Tre Mod not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Dev Mar Arc Tre Mod generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathDevMarArcTreMod, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Dev Mar Mod Val
    sendDevMarModVal = async (req, res) => {
        const pdfPathDevMarModVal = path.join(__dirname, '../pdfs/formulaireDevMarModVal.pdf');
        if (!fs.existsSync(pdfPathDevMarModVal)) {
            return res.status(404).send('PDF Dev Mar Mod Val not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Dev Mar Mod Val generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathDevMarModVal, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
    //Gri Ana Du Log Vie
    sendGriAnaDuLogVie = async (req, res) => {
        const pdfPathGriAnaDuLogVie = path.join(__dirname, '../pdfs/formulaireGriAnaDuLogVie.pdf');
        if (!fs.existsSync(pdfPathGriAnaDuLogVie)) {
            return res.status(404).send('PDF Gri Ana Du Log Vie not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Gri Ana Du Log Vie generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathGriAnaDuLogVie, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
      //Gri Ana Du Log Vie
      sendManMarVie = async (req, res) => {
        const pdfPathManMarVie = path.join(__dirname, '../pdfs/formulaireManMarVie.pdf');
        if (!fs.existsSync(pdfPathManMarVie)) {
            return res.status(404).send('PDF Man Mar Vie not found for emailing');
        }
    
        try {
            const smtpTransport = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, 
                },
                debug: true,
            });
    
            const mailOptions = {
                from: process.env.USER,
                to: req.body.email, 
                subject: 'PDF Generated Document',
                html: '<p>Testing PDF Man Mar Vie generation document. Thanks.</p>',
                attachments: [
                    {
                        path: pdfPathManMarVie, 
                    },
                ],
            };
    
            const info = await smtpTransport.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            res.send('Email has been sent. Check your inbox.');
        } catch (err) {
            console.error('Error sending email:', err);
            res.status(500).send('Error sending email. Please check the logs.');
        }
    };
}

module.exports = new pdfController();
