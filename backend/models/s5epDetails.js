const { model, Schema } = require('mongoose');

const S5epeDetailsSchema = new Schema({
    name: {
        type: String,
    },
    repensConfirm: {
        type: String,
        required: true
    },
    validation: {
        type: String,
        default: 'validé'
    }
}, { timestamps: true });

module.exports = model('S5eps', S5epeDetailsSchema); 
