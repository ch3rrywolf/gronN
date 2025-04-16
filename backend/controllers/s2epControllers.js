const s2epDetails = require('../models/s2epDetails');
const folderModel = require('../models/folderModel')
const mongoose = require('mongoose');

class S2epController {
    async s2epi(req, res) {
        try {
            const { folders_id } = req.params;

            // Validate folder_id
            if (!mongoose.Types.ObjectId.isValid(folders_id)) {
                return res.status(400).json({ success: false, message: 'Invalid folder ID' });
            }

            const newEntrepriseRetenue = new s2epDetails({ ...req.body });
            const savedEntrepriseRetenue = await newEntrepriseRetenue.save();

            // Check if the folder exists before updating
            const folder = await folderModel.findByIdAndUpdate(
                folders_id,
                { $push: { s2eps: savedEntrepriseRetenue._id } },
                { new: true }
            );

            if (!folder) {
                return res.status(404).json({ success: false, message: 'Folder not found' });
            }

            res.status(200).json({
                success: true,
                message: 'S2ep submitted',
                data: savedEntrepriseRetenue,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit s2ep', error: err.message });
        }
    }
}

module.exports = new S2epController();