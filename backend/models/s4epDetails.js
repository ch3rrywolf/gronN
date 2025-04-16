const { model, Schema } = require('mongoose');

const S4epeDetailsSchema = new Schema({
    shab: {
        type: String,
    },
    nbrEtage: {
        type: String,
    },
    qusMSI: {
        type: String,
        required: true
    },
    surfaceIso: {
        type: String,
        required: true
    },
    classEnerInit: {
        type: String,
        required: true
    },
    sautsClassPre: {
        type: String,
        required: true
    },
    categori: {
        type: String,
    },
    validation: {
        type: String,
        default: 'validé'
    }
}, { timestamps: true });

module.exports = model('S4eps', S4epeDetailsSchema); 
