const s5epDetails = require('../models/s5epDetails');
const folderModel = require('../models/folderModel')
const mongoose = require('mongoose');

class S5epController {
    async s5epi(req, res) {
        try {
            const { folders_id } = req.params;

            // Validate folder_id
            if (!mongoose.Types.ObjectId.isValid(folders_id)) {
                return res.status(400).json({ success: false, message: 'Invalid folder ID' });
            }

            const news5epi = new s5epDetails({ ...req.body });
            const saveds5epi = await news5epi.save();

            // Check if the folder exists before updating
            const folder = await folderModel.findByIdAndUpdate(
                folders_id,
                { $push: { s5eps: saveds5epi._id } },
                { new: true }
            );

            if (!folder) {
                return res.status(404).json({ success: false, message: 'Folder not found' });
            }

            res.status(200).json({
                success: true,
                message: 'S5ep submitted',
                data: saveds5epi,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit s5ep', error: err.message });
        }
    }
}

module.exports = new S5epController();