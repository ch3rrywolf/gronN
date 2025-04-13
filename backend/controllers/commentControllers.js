const commentModel = require('../models/commentModel');
const dossierModel = require('../models/dossierModel');
const mongoose = require('mongoose');

class CommentController {
    async commenti(req, res) {
        try {
            const { dossierId } = req.params;

            // Validate dossierId
            if (!mongoose.Types.ObjectId.isValid(dossierId)) {
                return res.status(400).json({ success: false, message: 'Invalid dossier ID' });
            }

            const newComment = new commentModel({ ...req.body });
            const savedComment = await newComment.save();

            // Check if the dossier exists before updating
            const dossier = await dossierModel.findByIdAndUpdate(
                dossierId,
                { $push: { comments: savedComment._id } },
                { new: true } // Returns the updated document
            );

            if (!dossier) {
                return res.status(404).json({ success: false, message: 'Dossier not found' });
            }

            res.status(200).json({
                success: true,
                message: 'Comment submitted',
                data: savedComment,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit comment', error: err.message });
        }
    }
}

module.exports = new CommentController();