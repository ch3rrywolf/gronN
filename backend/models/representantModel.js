const { model, Schema } = require('mongoose');

const representantSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    raisoc: {
        type: String,
        required: true
    },
    addresse: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    ttel: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('Representant', representantSchema); 
