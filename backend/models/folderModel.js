const { model, Schema } = require('mongoose')

const folderSchema = new Schema({
    numFolderAnah: {
        type: String,
    },
    benificaire: [
        {
          type: Schema.Types.ObjectId, 
          ref: 'Benificaire',
        },
      ],
    source: {
        type: String,
        required: true
    },
    classeEng: {
        type: String,
    },
    residance: {
        type: String,
        required: true
    },
    classeRevenue: {
        type: String,
    },
    parrinage: {
        type: String,
    },
    numbTotOLA: {
        type: String,
        required: true
    },
    numbEN: {
        type: String
    },
    titreResPriAm: {
        type: String
    },
    RFRtot: {
        type: String,
        required: true
    },
    anneeRFRtot: {
        type: String,
        required: true
    },
    escalier: {
        type: String
        
    },
    numLogAm: {
        type: String,
        required: true
    },
    voieLogAm: {
        type: String,
        required: true
    },
    villeLogAm: {
        type: String,
        required: true
    },
    codePostalLogAm: {
        type: String,
        required: true
    },
    communeLogAm: {
        type: String,
        required: true
    },
    batimentLogAm: {
        type: String,
        required: true
    },
    escalierLogAm: {
        type: String,
        required: true
    },
    etageLogAm: {
        type: String,
        required: true
    },
    porteLogAm: {
        type: String,
        required: true
    },
    logAmel: {
        type: String,
        required: true
    },
    const15ans: {
        type: String,
        required: true
    },
    const15ansAnnee: {
        type: String,
        required: true
    },
    PTZ: {
        type: String,
        required: true
    },
    travPartiel: {
        type: String,
        required: true
    },
    avantTravProj: {
        type: String,
        requiredProj: true
    },
    apresTrav: {
        type: String,
        required: true
    },
    souhaiTrav: {
        type: String,
        required: true
    },
    folderStatus: {
        type: String,
        default: 'Non Validé'
    },
    pdfs: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'PdfDetails',
      },
    ],
}, { timestamps: true })

module.exports = model('folders', folderSchema)