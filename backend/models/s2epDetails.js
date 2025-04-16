const { model, Schema } = require('mongoose');

const S2epeDetailsSchema = new Schema({
    EntrepriseRetenue: {
        type: String,
        required: true
    },
    validation: {
        type: String,
        default: 'validé'
    }
}, { timestamps: true });

module.exports = model('S2eps', S2epeDetailsSchema); 
