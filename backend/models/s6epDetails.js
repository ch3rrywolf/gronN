const { model, Schema } = require('mongoose');

const S6epeDetailsSchema = new Schema({
    name: {
        type: String,
    },
    repenVerif: {
        type: String,
        required: true
    },
    validation: {
        type: String,
        default: 'validé'
    }
}, { timestamps: true });

module.exports = model('S6eps', S6epeDetailsSchema); 
