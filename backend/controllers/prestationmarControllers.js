const prestationmarModel = require('../models/prestationmarModel');
const mongoose = require('mongoose');

class PrestationmarController {
    async addi(req, res) {
            const { societe, designation,unite, prixdevente,Geste } = req.body;
        
            if (!designation) {
                return res.status(400).json({ message: 'Please provide designation' });
            }
        
            try {
                const prestationmar = await prestationmarModel.findOne({ designation: designation.trim() });
                if (prestationmar) {
                    return res.status(409).json({ message: 'prestation already exists' });
                }
        
                const new_prestationmar = await prestationmarModel.create({
                    societe: societe.trim(),
                    designation: designation.trim(),
                    prixdevente: prixdevente.trim(),
                    unite: unite.trim(),
                    Geste: Geste.trim(),
                });
        
                return res.status(201).json({ message: 'prestationmar added successfully', prestationmar: new_prestationmar });
        
            } catch (error) {
                console.error("Error adding prestationmar:", error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

    async getiall(req, res) {
        try {
                    const prestationmars = await prestationmarModel.find().sort({ createdAt: -1 })
                    return res.status(200).json({ prestationmars })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
    }

    async getione(req, res) {
                const { prestationmars_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(prestationmars_id)) {
                    return res.status(400).json({ message: 'Invalid prestations ID' });
                }
            
                try {
                    const prestationmars = await prestationmarModel.findById(prestationmars_id);
                    return res.status(200).json({ prestationmars });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

    async updati(req, res) {
        const { id } = req.params;
        const { societe,  designation,prixdevente, unite,Geste } = req.body;
    
        // if (!nom) {
        //     return res.status(400).json({ message: 'Please provide a nom' });
        // }

        try {
            let updateFields = {}
                    // let updateFields = { nom: nom.trim() };
        
                    if (societe) {
                        updateFields.societe = societe.trim();
                    }

                    if (designation) {
                        updateFields.designation = designation.trim();
                    }
                    
                    if (prixdevente) {
                        updateFields.prixdevente = prixdevente.trim();
                    }

                    if (unite) {
                        updateFields.unite = unite.trim();
                    }

                    if (Geste) {
                        updateFields.Geste = Geste.trim();
                    }
            
                    
            
                    const updatedPrestationmar = await prestationmarModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedPrestationmar) {
                        return res.status(404).json({ message: 'prestationmar not found' });
                    }
            
                    return res.status(200).json({ message: 'prestationmar updated successfully', prestationmar: updatedPrestationmar });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
    }


    async deleti(req, res) {
        const { id } = req.params;

        try {
            const deletedPrestationmar = await prestationmarModel.findByIdAndDelete(id);
            if (!deletedPrestationmar) {
                return res.status(404).json({ message: 'prestationmars not found' });
            }
            return res.status(200).json({ message: 'prestationmars deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    update_prestationmar_status = async (req, res) => {
                  const { role } = req.userInfo
                  const { prestationmars_id } = req.params
                  const { etat } = req.body
          
                  if (role === 'admin') {
                      const prestationmars = await prestationmarModel.findByIdAndUpdate(prestationmars_id, { etat }, { new: true })
                      return res.status(200).json({ message: 'prestationmar status update success', prestationmars })
                  } else {
                      return res.status(401).json({ message: 'You cannot access this api' })
                  }
              }

              update_prestationmar_status_validation = async (req, res) => {
                const { role } = req.userInfo
                const { prestationmars_id } = req.params
                const { validationMar } = req.body
        
                if (role === 'admin') {
                    const prestationmars = await prestationmarModel.findByIdAndUpdate(prestationmars_id, { validationMar }, { new: true })
                    return res.status(200).json({ message: 'prestationmar status update success', prestationmars })
                } else {
                    return res.status(401).json({ message: 'You cannot access this api' })
                }
            }
}

module.exports = new PrestationmarController();