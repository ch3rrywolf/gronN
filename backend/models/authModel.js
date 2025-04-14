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



    //inspecteur
    nomIns: {
        type: String,  
    },
    prenomIns: {
        type: String,
    },
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
    emailIns: {
        type: String,
    },
    numTelIns: {
        type: String,
    },



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
    emailAud: {
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
    tauxTVAAud: {
        type: String,
    },
    signatureAud: {
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
    // Auditeur RGE
    qualifiRGEAud: {
        type: String,
    },
    numRGEAud: {
        type: String,
    },
    editLeRGEAud: {
        type: String,
    },
    valableJusRGEAud: {
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
    documentsAud: {
        type: String,
    },

    //


}, { timestamps: true })

module.exports = model('authors', authSchema)