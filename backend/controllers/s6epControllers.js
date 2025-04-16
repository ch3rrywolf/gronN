const s6epDetails = require('../models/s6epDetails');
const folderModel = require('../models/folderModel')
const mongoose = require('mongoose');

class S6epController {
    async s6epi(req, res) {
        try {
            const { folders_id } = req.params;

            // Validate folder_id
            if (!mongoose.Types.ObjectId.isValid(folders_id)) {
                return res.status(400).json({ success: false, message: 'Invalid folder ID' });
            }

            const news6epi = new s6epDetails({ ...req.body });
            const saveds6epi = await news6epi.save();

            // Check if the folder exists before updating
            const folder = await folderModel.findByIdAndUpdate(
                folders_id,
                { $push: { s6eps: saveds6epi._id } },
                { new: true }
            );

            if (!folder) {
                return res.status(404).json({ success: false, message: 'Folder not found' });
            }

            res.status(200).json({
                success: true,
                message: 'S6ep submitted',
                data: saveds6epi,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit s6ep', error: err.message });
        }
    }
}

module.exports = new S6epController();