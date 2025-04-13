const benificaireModel = require('../models/benificaireModel');
const mongoose = require('mongoose');

class BenificaireController {
    async addi(req, res) {
            const { genre, nomBeni, prenomBeni, datenaiBeni, emailBeni, emailAnah,passwordAnah,villeBeni,numBeni,voieBeni,codepostalBeni,etageBeni,escalierBeni,communeBeni,porteBeni,batimentBeni,numTelBeni,numPortableBeni,RIBBeni,IBANBeni,ZoneClimaBeni,nomprenomPerConf,enQualitPerConf } = req.body;
        
            if (!mail) {
                return res.status(400).json({ message: 'Please provide Benificaire mail' });
            }
        
            try {
                const benificaire = await benificaireModel.findOne({ emailBeni: emailBeni.trim() });
                if (benificaire) {
                    return res.status(409).json({ message: 'Benificaire already exists' });
                }
        
                const new_benificaire = await benificaireModel.create({
                    genre: genre.trim(),
                    nomBeni: nomBeni.trim(),
                    prenomBeni: prenomBeni.trim(),
                    datenaiBeni: datenaiBeni.trim(),
                    emailBeni: emailBeni.trim(),
                    emailAnah: emailAnah.trim(),
                    passwordAnah: passwordAnah.trim(),
                    villeBeni: villeBeni.trim(),
                    numBeni: numBeni.trim(),
                    voieBeni: voieBeni.trim(),
                    codepostalBeni: codepostalBeni.trim(),
                    etageBeni: etageBeni.trim(),
                    escalierBeni: escalierBeni.trim(),
                    communeBeni: communeBeni.trim(),
                    porteBeni: porteBeni.trim(),
                    batimentBeni: batimentBeni.trim(),
                    numTelBeni: numTelBeni.trim(),
                    numPortableBeni: numPortableBeni.trim(),
                    RIBBeni: RIBBeni.trim(),
                    IBANBeni: IBANBeni.trim(),
                    ZoneClimaBeni: ZoneClimaBeni.trim(),
                    nomprenomPerConf: nomprenomPerConf.trim(),
                    enQualitPerConf: enQualitPerConf.trim(),
                });
        
                return res.status(201).json({ message: 'Benificaire added successfully', benificaire: new_benificaire });
        
            } catch (error) {
                console.error("Error adding Benificaire:", error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

    async getiall(req, res) {
        try {
                    const benificaires = await benificaireModel.find().sort({ createdAt: -1 })
                    return res.status(200).json({ benificaires })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
    }

    async getione(req, res) {
                const { benificaires_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(benificaires_id)) {
                    return res.status(400).json({ message: 'Invalid benificaires ID' });
                }
            
                try {
                    const benificaires = await benificaireModel.findById(benificaires_id);
                    return res.status(200).json({ benificaires });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }

    async updati(req, res) {
        const { id } = req.params;
        const { genre, nomBeni, prenomBeni, datenaiBeni, emailBeni, emailAnah,passwordAnah,villeBeni,numBeni,voieBeni,codepostalBeni,etageBeni,escalierBeni,communeBeni,porteBeni,batimentBeni,numTelBeni,numPortableBeni,RIBBeni,IBANBeni,ZoneClimaBeni,nomprenomPerConf,enQualitPerConf } = req.body;
    
        // if (!nom) {
        //     return res.status(400).json({ message: 'Please provide a nom' });
        // }

        try {
            let updateFields = {}
                    // let updateFields = { nom: nom.trim() };
        
                    if (genre) {
                        updateFields.genre = genre.trim();
                    }

                    if (nomBeni) {
                        updateFields.nomBeni = nomBeni.trim();
                    }
            
                    if (prenomBeni) {
                        updateFields.prenomBeni = prenomBeni.trim();
                    }
            
                    if (datenaiBeni) {
                        updateFields.datenaiBeni = datenaiBeni.trim();
                    }
            
                    if (emailBeni) {
                        updateFields.emailBeni = emailBeni.trim();
                    }
            
                    if (emailAnah) {
                        updateFields.emailAnah = emailAnah.trim();
                    }

                    if (passwordAnah) {
                        updateFields.passwordAnah = passwordAnah.trim();
                    }

                    if (villeBeni) {
                        updateFields.villeBeni = villeBeni.trim();
                    }

                    if (numBeni) {
                        updateFields.numBeni = numBeni.trim();
                    }

                    if (voieBeni) {
                        updateFields.voieBeni = voieBeni.trim();
                    }

                    if (codepostalBeni) {
                        updateFields.codepostalBeni = codepostalBeni.trim();
                    }

                    if (etageBeni) {
                        updateFields.etageBeni = etageBeni.trim();
                    }

                    if (escalierBeni) {
                        updateFields.escalierBeni = escalierBeni.trim();
                    }

                    if (communeBeni) {
                        updateFields.communeBeni = communeBeni.trim();
                    }

                    if (porteBeni) {
                        updateFields.porteBeni = porteBeni.trim();
                    }

                    if (batimentBeni) {
                        updateFields.batimentBeni = batimentBeni.trim();
                    }

                    if (numTelBeni) {
                        updateFields.numTelBeni = numTelBeni.trim();
                    }

                    if (numPortableBeni) {
                        updateFields.numPortableBeni = numPortableBeni.trim();
                    }

                    if (RIBBeni) {
                        updateFields.RIBBeni = RIBBeni.trim();
                    }

                    if (IBANBeni) {
                        updateFields.IBANBeni = IBANBeni.trim();
                    }

                    if (ZoneClimaBeni) {
                        updateFields.ZoneClimaBeni = ZoneClimaBeni.trim();
                    }

                    if (nomprenomPerConf) {
                        updateFields.nomprenomPerConf = nomprenomPerConf.trim();
                    }

                    if (enQualitPerConf) {
                        updateFields.enQualitPerConf = enQualitPerConf.trim();
                    }
            
                    const updatedBenificaire = await benificaireModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedBenificaire) {
                        return res.status(404).json({ message: 'Benificaire not found' });
                    }
            
                    return res.status(200).json({ message: 'Benificaire updated successfully', benificaire: updatedBenificaire });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
    }


    async deleti(req, res) {
        const { id } = req.params;

        try {
            const deletedBenificaire = await benificaireModel.findByIdAndDelete(id);
            if (!deletedBenificaire) {
                return res.status(404).json({ message: 'Benificaire not found' });
            }
            return res.status(200).json({ message: 'Benificaire deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new BenificaireController();