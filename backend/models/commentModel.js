const { model, Schema } = require('mongoose');

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    commentText: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('Comment', commentSchema); 
