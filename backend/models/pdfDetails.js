const { model, Schema } = require('mongoose');

const PdfDetailsSchema = new Schema({
    pdf: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('PdfDetails', PdfDetailsSchema); 
