const gesteModel = require('../models/gesteModel');
const mongoose = require('mongoose');

class gesteController {
    async addi(req, res) {
            const { reference, montantEtimatif } = req.body;
        
            if (!reference) {
                return res.status(400).json({ message: 'Please provide reference' });
            }
        
            try {
                const geste = await gesteModel.findOne({ reference: reference.trim() });
                if (geste) {
                    return res.status(409).json({ message: 'geste already exists' });
                }
        
                const new_geste = await gesteModel.create({
                    reference: reference.trim(),
                    montantEtimatif: montantEtimatif.trim(),
                });
        
                return res.status(201).json({ message: 'geste added successfully', geste: new_geste });
        
            } catch (error) {
                console.error("Error adding geste:", error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

    async getiall(req, res) {
        try {
                    const gestes = await gesteModel.find().sort({ createdAt: -1 })
                    return res.status(200).json({ gestes })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
    }

    async getione(req, res) {
                const { gestes_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(gestes_id)) {
                    return res.status(400).json({ message: 'Invalid gestes ID' });
                }
            
                try {
                    const gestes = await gesteModel.findById(gestes_id);
                    return res.status(200).json({ gestes });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

    async updati(req, res) {
        const { id } = req.params;
        const { reference, montantEtimatif } = req.body;
    
        // if (!nom) {
        //     return res.status(400).json({ message: 'Please provide a nom' });
        // }

        try {
            let updateFields = {}
                    // let updateFields = { nom: nom.trim() };

                    if (reference) {
                        updateFields.reference = reference.trim();
                    }

                    if (montantEtimatif) {
                        updateFields.montantEtimatif = montantEtimatif.trim();
                    }
            
                    
            
                    const updatedGeste = await gesteModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedGeste) {
                        return res.status(404).json({ message: 'geste not found' });
                    }
            
                    return res.status(200).json({ message: 'geste updated successfully', geste: updatedGeste });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
    }


    async deleti(req, res) {
        const { id } = req.params;

        try {
            const deletedGeste = await gesteModel.findByIdAndDelete(id);
            if (!deletedGeste) {
                return res.status(404).json({ message: 'Gestes not found' });
            }
            return res.status(200).json({ message: 'Gestes deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    update_geste_status = async (req, res) => {
                  const { role } = req.userInfo
                  const { gestes_id } = req.params
                  const { etat } = req.body
          
                  if (role === 'admin') {
                      const gestes = await gesteModel.findByIdAndUpdate(gestes_id, { etat }, { new: true })
                      return res.status(200).json({ message: 'Geste status update success', gestes })
                  } else {
                      return res.status(401).json({ message: 'You cannot access this api' })
                  }
              }

              
}

module.exports = new gesteController();