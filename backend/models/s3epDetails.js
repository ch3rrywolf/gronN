const { model, Schema } = require('mongoose');

const S3epeDetailsSchema = new Schema({
    inspecteur3: {
        type: String,
        required: true
    },
    dateVisite: {
        type: String,
        required: true
    },
    validation: {
        type: String,
        default: 'validé'
    }
}, { timestamps: true });

module.exports = model('S3eps', S3epeDetailsSchema); 
