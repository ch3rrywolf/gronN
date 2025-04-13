const representantModel = require('../models/representantModel');
const dossierModel = require('../models/dossierModel');
const mongoose = require('mongoose');

class RepresentantController {
    async addi(req, res) {
            const { nom, prenom, raisoc, addresse, mail, ttel } = req.body;
        
            if (!mail) {
                return res.status(400).json({ message: 'Please provide representant mail' });
            }
        
            try {
                const representant = await representantModel.findOne({ mail: mail.trim() });
                if (representant) {
                    return res.status(409).json({ message: 'Representant already exists' });
                }
        
                const new_representant = await representantModel.create({
                    nom: nom.trim(),
                    prenom: prenom.trim(),
                    raisoc: raisoc.trim(),
                    addresse: addresse.trim(),
                    mail: mail.trim(),
                    ttel: ttel.trim(),
                });
        
                return res.status(201).json({ message: 'Representant added successfully', representant: new_representant });
        
            } catch (error) {
                console.error("Error adding representant:", error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

    async getiall(req, res) {
        try {
                    const representants = await representantModel.find().sort({ createdAt: -1 })
                    return res.status(200).json({ representants })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
    }

    async getione(req, res) {
                const { representants_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(representants_id)) {
                    return res.status(400).json({ message: 'Invalid representants ID' });
                }
            
                try {
                    const representants = await representantModel.findById(representants_id);
                    return res.status(200).json({ representants });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

    async updati(req, res) {
        const { id } = req.params;
        const { nom, prenom, raisoc, addresse, mail, ttel } = req.body;
    
        // if (!nom) {
        //     return res.status(400).json({ message: 'Please provide a nom' });
        // }

        try {
            let updateFields = {}
                    // let updateFields = { nom: nom.trim() };
        
                    if (nom) {
                        updateFields.nom = nom.trim();
                    }

                    if (prenom) {
                        updateFields.prenom = prenom.trim();
                    }
            
                    if (raisoc) {
                        updateFields.raisoc = raisoc.trim();
                    }
            
                    if (addresse) {
                        updateFields.addresse = addresse.trim();
                    }
            
                    if (mail) {
                        updateFields.mail = mail.trim();
                    }
            
                    if (ttel) {
                        updateFields.ttel = ttel.trim();
                    }
            
                    const updatedRepresentant = await representantModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedRepresentant) {
                        return res.status(404).json({ message: 'Representant not found' });
                    }
            
                    return res.status(200).json({ message: 'Representant updated successfully', representant: updatedRepresentant });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
    }


    async deleti(req, res) {
        const { id } = req.params;

        try {
            const deletedRepresentant = await representantModel.findByIdAndDelete(id);
            if (!deletedRepresentant) {
                return res.status(404).json({ message: 'Representant not found' });
            }
            return res.status(200).json({ message: 'Representant deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new RepresentantController();