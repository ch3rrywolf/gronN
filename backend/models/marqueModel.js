const { model, Schema } = require('mongoose');

const marqueSchema = new Schema({

    etat: {
        type: String,
        default: "Désactivé"
    },
    validationMar: {
        type: String,
        default: "Non valide"
    },
    societe: {
        type: String,
        required: true
    },
    intitule: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

module.exports = model('Marque', marqueSchema); 
