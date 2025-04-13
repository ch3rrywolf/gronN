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
        required: true
    },
    numBeni: {
        type: String,
        required: true
    },
    voieBeni: {
        type: String,
        required: true
    },
    codepostalBeni: {
        type: String,
        required: true
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
    nomprenomPerConf: {
        type: String
    },
    enQualitPerConf: {
        type: String
    }
}, { timestamps: true });

module.exports = model('Benificaire', benificaireSchema); 
