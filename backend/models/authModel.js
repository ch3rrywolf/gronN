const { model, Schema } = require('mongoose')

const authSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    accountStatus: {
        type: String,
        default: "désactivé"
    },


    //
    //inspecteur
   
    roleIns: {
        type: String,
    },
    superviseur: {
        type: String,
    },
    villeIns: {
        type: String,
    },
    adresseIns: {
        type: String,
    },
    codePostalIns: {
        type: String,
    },
    numTelIns: {
        type: String,
    },


    //
    //Auditeurs
    raiSocAud: {
        type: String,
    },
    numTelAud: {
        type: String,
    },
    formJurAud: {
        type: String,
    },
    
    adresseAud: {
        type: String,
    },
    villeAud: {
        type: String,
    },
    codePostalAud: {
        type: String,
    },
    siteWebAud: {
        type: String,
    },
    montCapAud: {
        type: String,
    },
  
    //AUditeur Represente par
    nomRepParAud: {
        type: String,
    },
    prenomRepParAud: {
        type: String,
    },
    genreRepParAud: {
        type: String,
    },
    fonctionRepParAud: {
        type: String,
    },
    numTelRepParAud: {
        type: String,
    },
    emailRepParAud: {
        type: String,
    },
    
    // auditeur Identifiants
    sirenIdentAud: {
        type: String,
    },
    siretIdentAud: {
        type: String,
    },
    identTVAIdentAud: {
        type: String,
    },
    rcsIdentAud: {
        type: String,
    },
    numAPEIdentAud: {
        type: String,
    },
    numAgrIdentAud: {
        type: String,
    },
    numDecIdentAud: {
        type: String,
    },
    // Auditeur Assurance
    raisocAssAud: {
        type: String,
    },
    adresseAssAud: {
        type: String,
    },
    numPolAssAud: {
        type: String,
    },
    dateEmiAssAud: {
        type: String,
    },
    dateFinAssAud: {
        type: String,
    },
    



    //
    // Entreprise retenue
    raiSocEntRe: {
        type: String,
    },
    numTelEntRe: {
        type: String,
    },
    formJurEntRe: {
        type: String,
    },
    emailEntRe: {
        type: String,
    },
    adresseEntRe: {
        type: String,
    },
    villeEntRe: {
        type: String,
    },
    codePostalEntRe: {
        type: String,
    },
    siteWebEntRe: {
        type: String,
    },
    montCapEntRe: {
        type: String,
    },
    tauxTVAEntRe: {
        type: String,
    },
    signatureEntRe: {
        type: String,
    },
    //EntRe Represente par

    nomRepParEntRe: {
        type: String,
    },
    prenomRepParEntRe: {
        type: String,
    },
    genreRepParEntRe: {
        type: String,
    },
    fonctionRepParEntRe: {
        type: String,
    },
    numTelRepParEntRe: {
        type: String,
    },
    emailRepParEntRe: {
        type: String,
    },
    // EntRe RGE
    qualifiRGEEntRe: {
        type: String,
    },
    numRGEEntRe: {
        type: String,
    },
    editLeRGEEntRe: {
        type: String,
    },
    valableJusRGEEntRe: {
        type: String,
    },
    //EntRe Identifiants
    sirenIdentEntRe: {
        type: String,
    },
    siretIdentEntRe: {
        type: String,
    },
    identTVAIdentEntRe: {
        type: String,
    },
    rcsIdentEntRe: {
        type: String,
    },
    numAPEIdentEntRe: {
        type: String,
    },
    numAgrIdentEntRe: {
        type: String,
    },
    numDecIdentEntRe: {
        type: String,
    },
    //EntRe Assurance
    raisocAssEntRe: {
        type: String,
    },
    adresseAssEntRe: {
        type: String,
    },
    numPolAssEntRe: {
        type: String,
    },
    dateEmiAssEntRe: {
        type: String,
    },
    dateFinAssEntRe: {
        type: String,
    },
        // EntRe Parametrage
    genRevAudEntRe: {
        type: String,
    },
    genDevisEntRe: {
        type: String,
    },
    documentsEntRe: {
        type: String,
    },



    // 
    // Mandataires 

    raiSocMan: {
        type: String,
    },
    numTelMan: {
        type: String,
    },
    formJurMan: {
        type: String,
    },
    emailMan: {
        type: String,
    },
    adresseMan: {
        type: String,
    },
    villeMan: {
        type: String,
    },
    codePostalMan: {
        type: String,
    },
    siteWebMan: {
        type: String,
    },
    montCapMan: {
        type: String,
    },
    tauxTVAMan: {
        type: String,
    },
    signatureMan: {
        type: String,
    },
    // Mandataire Represent par
    nomRepParMan: {
        type: String,
    },
    prenomRepParMan: {
        type: String,
    },
    genreRepParMan: {
        type: String,
    },
    fonctionRepParMan: {
        type: String,
    },
    numTelRepParMan: {
        type: String,
    },
    emailRepParMan: {
        type: String,
    },
    // Mandataire Identidiants
    sirenIdentMan: {
        type: String,
    },
    siretIdentMan: {
        type: String,
    },
    identTVAIdentMan: {
        type: String,
    },
    rcsIdentMan: {
        type: String,
    },
    numAPEIdentMan: {
        type: String,
    },
    numAgrIdentMan: {
        type: String,
    },
    numDecIdentMan: {
        type: String,
    },
    // Mandataire Assurance
    raisocAssMan: {
        type: String,
    },
    adresseAssMan: {
        type: String,
    },
    numPolAssMan: {
        type: String,
    },
    dateEmiAssMan: {
        type: String,
    },
    dateFinAssMan: {
        type: String,
    },
    rges: [
        {
          type: Schema.Types.ObjectId,
          ref: "Rge",
        },
      ],
    pdfs: [
          {
            type: Schema.Types.ObjectId, 
            ref: 'PdfDetails',
          },
        ],

}, { timestamps: true })

module.exports = model('authors', authSchema)