const { model, Schema } = require('mongoose');

const benificaireSchema = new Schema({

    genre: {
        type: String,
        required: true
    },
    nomBeni: {
        type: String,
        required: true
    },
    prenomBeni: {
        type: String,
        required: true
    },
    datenaiBeni: {
        type: String
    },
    emailBeni: {
        type: String,
        required: true
    },
    emailAnah: {
        type: String
    },
    passwordAnah: {
        type: String
    },
    villeBeni: {
        type: String,
    },
    numBeni: {
        type: String,
    },
    voieBeni: {
        type: String,
    },
    codepostalBeni: {
        type: String,
    },
    etageBeni: {
        type: String
    },
    escalierBeni: {
        type: String
    },
    communeBeni: {
        type: String
    },
    porteBeni: {
        type: String
    },
    batimentBeni: {
        type: String
    },
    numTelBeni: {
        type: String,
        required: true
    },
    numPortableBeni: {
        type: String
    },
    RIBBeni: {
        type: String
    },
    IBANBeni: {
        type: String
    },
    ZoneClimaBeni: {
        type: String
    },
    pdfs: [
        {
          type: Schema.Types.ObjectId, 
          ref: 'PdfDetails',
        },
      ],
}, { timestamps: true });

module.exports = model('Benificaire', benificaireSchema); 
