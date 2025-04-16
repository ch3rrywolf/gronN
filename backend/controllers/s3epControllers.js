const s3epDetails = require('../models/s3epDetails');
const folderModel = require('../models/folderModel')
const mongoose = require('mongoose');

class S3epController {
    async s3epi(req, res) {
        try {
            const { folders_id } = req.params;

            // Validate folder_id
            if (!mongoose.Types.ObjectId.isValid(folders_id)) {
                return res.status(400).json({ success: false, message: 'Invalid folder ID' });
            }

            const news3epi = new s3epDetails({ ...req.body });
            const saveds3epi = await news3epi.save();

            // Check if the folder exists before updating
            const folder = await folderModel.findByIdAndUpdate(
                folders_id,
                { $push: { s3eps: saveds3epi._id } },
                { new: true }
            );

            if (!folder) {
                return res.status(404).json({ success: false, message: 'Folder not found' });
            }

            res.status(200).json({
                success: true,
                message: 'S3ep submitted',
                data: saveds3epi,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit s3ep', error: err.message });
        }
    }
}

module.exports = new S3epController();