const { model, Schema } = require('mongoose');

const gesteSchema = new Schema({

    etat: {
        type: String,
        default: "Désactivé"
    },
    reference: {
        type: String,
        required: true
    },
    montantEtimatif: {
        type: String,
        required: true
    },
    
    
}, { timestamps: true });

module.exports = model('Geste', gesteSchema); 
