const { model, Schema } = require('mongoose');

const prestationmarSchema = new Schema({

    etat: {
        type: String,
        default: "Désactivé"
    },
    validationMar: {
        type: String,
        default: "Non valide"
    },
    designation: {
        type: String,
        required: true
    },
    unite: {
        type: String,
        required: true
    },
    prixdevente: {
        type: String,
        required: true
    },
    Geste: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

module.exports = model('Prestationmar', prestationmarSchema); 
