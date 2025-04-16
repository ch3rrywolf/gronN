const s4epDetails = require('../models/s4epDetails');
const folderModel = require('../models/folderModel')
const mongoose = require('mongoose');

class S4epController {
    async s4epi(req, res) {
        try {
            const { folders_id } = req.params;

            // Validate folder_id
            if (!mongoose.Types.ObjectId.isValid(folders_id)) {
                return res.status(400).json({ success: false, message: 'Invalid folder ID' });
            }

            const news4epi = new s4epDetails({ ...req.body });
            const saveds4epi = await news4epi.save();

            // Check if the folder exists before updating
            const folder = await folderModel.findByIdAndUpdate(
                folders_id,
                { $push: { s4eps: saveds4epi._id } },
                { new: true }
            );

            if (!folder) {
                return res.status(404).json({ success: false, message: 'Folder not found' });
            }

            res.status(200).json({
                success: true,
                message: 'S4ep submitted',
                data: saveds4epi,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit s4ep', error: err.message });
        }
    }
}

module.exports = new S4epController();