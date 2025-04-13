const marqueModel = require('../models/marqueModel');
const mongoose = require('mongoose');

class MarqueController {
    async addi(req, res) {
            const { societe, intitule } = req.body;
        
            if (!societe) {
                return res.status(400).json({ message: 'Please provide societe' });
            }
        
            try {
                const marque = await marqueModel.findOne({ societe: societe.trim() });
                if (marque) {
                    return res.status(409).json({ message: 'marque already exists' });
                }
        
                const new_marque = await marqueModel.create({
                    societe: societe.trim(),
                    intitule: intitule.trim(),
                });
        
                return res.status(201).json({ message: 'marque added successfully', marque: new_marque });
        
            } catch (error) {
                console.error("Error adding marque:", error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

    async getiall(req, res) {
        try {
                    const marques = await marqueModel.find().sort({ createdAt: -1 })
                    return res.status(200).json({ marques })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
    }

    async getione(req, res) {
                const { marques_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(marques_id)) {
                    return res.status(400).json({ message: 'Invalid marques ID' });
                }
            
                try {
                    const marques = await marqueModel.findById(marques_id);
                    return res.status(200).json({ marques });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

    async updati(req, res) {
        const { id } = req.params;
        const { societe, intitule } = req.body;
    
        // if (!nom) {
        //     return res.status(400).json({ message: 'Please provide a nom' });
        // }

        try {
            let updateFields = {}
                    // let updateFields = { nom: nom.trim() };
        
                    if (societe) {
                        updateFields.societe = societe.trim();
                    }

                    if (intitule) {
                        updateFields.intitule = intitule.trim();
                    }
            
                    
            
                    const updatedMarque = await marqueModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedMarque) {
                        return res.status(404).json({ message: 'marque not found' });
                    }
            
                    return res.status(200).json({ message: 'marque updated successfully', marque: updatedMarque });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
    }


    async deleti(req, res) {
        const { id } = req.params;

        try {
            const deletedMarque = await marqueModel.findByIdAndDelete(id);
            if (!deletedMarque) {
                return res.status(404).json({ message: 'marque not found' });
            }
            return res.status(200).json({ message: 'marque deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    update_marque_status = async (req, res) => {
                  const { role } = req.userInfo
                  const { marques_id } = req.params
                  const { etat } = req.body
          
                  if (role === 'admin') {
                      const marques = await marqueModel.findByIdAndUpdate(marques_id, { etat }, { new: true })
                      return res.status(200).json({ message: 'marque status update success', marques })
                  } else {
                      return res.status(401).json({ message: 'You cannot access this api' })
                  }
              }

              update_marque_status_validation = async (req, res) => {
                const { role } = req.userInfo
                const { marques_id } = req.params
                const { validationMar } = req.body
        
                if (role === 'admin') {
                    const marques = await marqueModel.findByIdAndUpdate(marques_id, { validationMar }, { new: true })
                    return res.status(200).json({ message: 'marque status update success', marques })
                } else {
                    return res.status(401).json({ message: 'You cannot access this api' })
                }
            }
}

module.exports = new MarqueController();