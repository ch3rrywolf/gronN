const { model, Schema } = require('mongoose');

const rgeSchema = new Schema({
    qualification: {
        type: String,
        required: true
    },
    numeroRGE: {
        type: String,
        required: true
    },
    editLe: {
        type: String,
        required: true
    },
    valableJA: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('Rge', rgeSchema); 
