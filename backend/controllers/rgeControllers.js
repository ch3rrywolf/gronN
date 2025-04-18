const authModel = require('../models/authModel')
const rgeModel = require('../models/rgeModel')
const mongoose = require('mongoose');

class RgeController {
    async regi(req, res) {
        try {
            const { auditeurs_id } = req.params;

            // Validate auditeurs_id
            if (!mongoose.Types.ObjectId.isValid(auditeurs_id)) {
                return res.status(400).json({ success: false, message: 'Invalid auditeur ID' });
            }

            const newRge = new rgeModel({ ...req.body });
            const savedRge = await newRge.save();

            // Check if the auditeur exists before updating
            const auditeur = await authModel.findByIdAndUpdate(
                auditeurs_id,
                { $push: { rges: savedRge._id } },
                { new: true } // Returns the updated document
            );

            if (!auditeur) {
                return res.status(404).json({ success: false, message: 'auditeur not found' });
            }

            res.status(200).json({
                success: true,
                message: 'Rge submitted',
                data: savedRge,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit rge', error: err.message });
        }
    }

    async regii(req, res) {
        try {
            const { entretes_id } = req.params;

            // Validate entretes_id
            if (!mongoose.Types.ObjectId.isValid(entretes_id)) {
                return res.status(400).json({ success: false, message: 'Invalid entrete ID' });
            }

            const newRge = new rgeModel({ ...req.body });
            const savedRge = await newRge.save();

            // Check if the entrete exists before updating
            const entrete = await authModel.findByIdAndUpdate(
                entretes_id,
                { $push: { rges: savedRge._id } },
                { new: true } // Returns the updated document
            );

            if (!entrete) {
                return res.status(404).json({ success: false, message: 'entrete not found' });
            }

            res.status(200).json({
                success: true,
                message: 'Rge submitted',
                data: savedRge,
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({ success: false, message: 'Failed to submit rge', error: err.message });
        }
    }
}

module.exports = new RgeController();