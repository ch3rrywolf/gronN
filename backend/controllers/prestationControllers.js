const prestationModel = require('../models/prestationModel');
const mongoose = require('mongoose');

class PrestationController {
    async addi(req, res) {
            const { designation,unite,Geste } = req.body;
        
            if (!designation) {
                return res.status(400).json({ message: 'Please provide designation' });
            }
        
            try {
                const prestation = await prestationModel.findOne({ designation: designation.trim() });
                if (prestation) {
                    return res.status(409).json({ message: 'prestation already exists' });
                }
        
                const new_prestation = await prestationModel.create({
                    designation: designation.trim(),
                    unite: unite.trim(),
                    Geste: Geste.trim(),
                });
        
                return res.status(201).json({ message: 'prestation added successfully', prestation: new_prestation });
        
            } catch (error) {
                console.error("Error adding prestation:", error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

    async getiall(req, res) {
        try {
                    const prestations = await prestationModel.find().sort({ createdAt: -1 })
                    return res.status(200).json({ prestations })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
    }

    async getione(req, res) {
                const { prestations_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(prestations_id)) {
                    return res.status(400).json({ message: 'Invalid prestations ID' });
                }
            
                try {
                    const prestations = await prestationModel.findById(prestations_id);
                    return res.status(200).json({ prestations });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

    async updati(req, res) {
        const { id } = req.params;
        const {  designation,unite,Geste } = req.body;
    
        // if (!nom) {
        //     return res.status(400).json({ message: 'Please provide a nom' });
        // }

        try {
            let updateFields = {}
                    // let updateFields = { nom: nom.trim() };
        
                   

                    if (designation) {
                        updateFields.designation = designation.trim();
                    }

                    if (unite) {
                        updateFields.unite = unite.trim();
                    }

                    if (Geste) {
                        updateFields.Geste = Geste.trim();
                    }
            
                    
            
                    const updatedPrestation = await prestationModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedPrestation) {
                        return res.status(404).json({ message: 'prestation not found' });
                    }
            
                    return res.status(200).json({ message: 'prestation updated successfully', prestation: updatedPrestation });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
    }


    async deleti(req, res) {
        const { id } = req.params;

        try {
            const deletedPrestation = await prestationModel.findByIdAndDelete(id);
            if (!deletedPrestation) {
                return res.status(404).json({ message: 'prestations not found' });
            }
            return res.status(200).json({ message: 'prestations deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    update_prestation_status = async (req, res) => {
                  const { role } = req.userInfo
                  const { prestations_id } = req.params
                  const { etat } = req.body
          
                  if (role === 'admin') {
                      const prestations = await prestationModel.findByIdAndUpdate(prestations_id, { etat }, { new: true })
                      return res.status(200).json({ message: 'prestation status update success', prestations })
                  } else {
                      return res.status(401).json({ message: 'You cannot access this api' })
                  }
              }

              update_prestation_status_validation = async (req, res) => {
                const { role } = req.userInfo
                const { prestations_id } = req.params
                const { validationMar } = req.body
        
                if (role === 'admin') {
                    const prestations = await prestationModel.findByIdAndUpdate(prestations_id, { validationMar }, { new: true })
                    return res.status(200).json({ message: 'prestation status update success', prestations })
                } else {
                    return res.status(401).json({ message: 'You cannot access this api' })
                }
            }
}

module.exports = new PrestationController();