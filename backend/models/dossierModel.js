const { model, Schema } = require('mongoose')

const dossierSchema = new Schema({
    demandeurNom: {
        type: String,
        required: true
    },
    demandeurPreNom: {
        type: String,
        required: true
    },
    demandeurAdresse: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    ville: {
        type: String,
        required: true
    },
    voie: {
        type: String,
        required: true
    },
    demandeurCommune: {
        type: String,
        required: true
    },
    demandeurCodePostal: {
        type: String,
        required: true
    },
    batiment: {
        type: String
    },
    etage: {
        type: String
    },
    porte: {
        type: String
    },
    escalier: {
        type: String
        
    },
    tel: {
        type: String,
        required: true
    },
    mel: {
        type: String,
        required: true
    },
    numDossier: {
        type: String,
        required: true
    },
    dossierStatus: {
        type: String,
        default: 'Non Validé'
    },
    pdfs: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'PdfDetails',
      },
    ],
    comments: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      representants: [
        {
          type: Schema.Types.ObjectId,
          ref: "Representant",
        },
      ],
}, { timestamps: true })

module.exports = model('dossiers', dossierSchema)