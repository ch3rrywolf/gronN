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
    },
    numbEN: {
        type: String
    },
    titreResPriAm: {
        type: String
    },
    RFRtot: {
        type: String,
    },
    anneeRFRtot: {
        type: String,
    },
    numbPers: {
        type: String,
    },
    numbEnfNai: {
        type: String,
    },
    RFRtotInclu: {
        type: String,
    },
    anneeREFtotInclu: {
        type: String,
    },

    numLogAm: {
        type: String,
    },
    voieLogAm: {
        type: String,
    },
    villeLogAm: {
        type: String,
    },
    codePostalLogAm: {
        type: String,
    },
    communeLogAm: {
        type: String,
    },
    batimentLogAm: {
        type: String,
    },
    escalierLogAm: {
        type: String,
    },
    etageLogAm: {
        type: String,
    },
    porteLogAm: {
        type: String,
    },
    logAmel: {
        type: String,
    },
    const15ans: {
        type: String,
    },
    const15ansAnnee: {
        type: String,
    },
    PTZ: {
        type: String,
    },
    travPartiel: {
        type: String,
    },
    avantTravProj: {
        type: String,
    },
    apresTrav: {
        type: String,
    },
    souhaiTrav: {
        type: String,
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
    s2eps: [
        {
          type: Schema.Types.ObjectId, 
          ref: 'S2eps',
        },
      ],
}, { timestamps: true })

module.exports = model('folders', folderSchema)