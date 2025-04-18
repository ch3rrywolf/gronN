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
    description: {
        type: String,
    },
    intitule: {
        type: String,
        required: true
    },
    
}, { timestamps: true });

module.exports = model('Marque', marqueSchema); 
