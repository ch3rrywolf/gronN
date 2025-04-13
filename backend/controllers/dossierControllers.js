const dossierModel = require('../models/dossierModel')
const PdfDetails =  require("../models/pdfDetails")
const { default: mongoose } = require('mongoose');
class dossierController {

    add_dossiers = async (req, res) => {
        const { demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier } = req.body;
    
        if (!demandeurAdresse) {
            return res.status(400).json({ message: 'Please provide demandeur Adresse' });
        }
    
        try {
            const dossier = await dossierModel.findOne({ numDossier: numDossier.trim() });
            if (dossier) {
                return res.status(409).json({ message: 'Dossier already exists' });
            }
    
            const new_dossier = await dossierModel.create({
                demandeurNom: demandeurNom.trim(),
                demandeurPreNom: demandeurPreNom.trim(),
                demandeurAdresse: demandeurAdresse.trim(),
                numero: numero.trim(),
                ville: ville.trim(),
                voie: voie.trim(),
                demandeurCommune: demandeurCommune.trim(),
                demandeurCodePostal: demandeurCodePostal.trim(),
                batiment: batiment?.trim() || "",
                etage: etage?.trim() || "",
                porte: porte?.trim() || "",
                escalier: escalier?.trim() || "",
                tel: tel.trim(),
                mel: mel.trim(),
                numDossier: numDossier.trim(),
            });
    
            return res.status(201).json({ message: 'Dossier added successfully', dossier: new_dossier });
    
        } catch (error) {
            console.error("Error adding dossier:", error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

   

    get_dossiers = async (req, res) => {
        try {
            const { page = 1, limit = 5 } = req.query;
            const dossiers = await dossierModel.find({})
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(Number(limit));
    
            const totalDossiers = await dossierModel.countDocuments();
            const totalPages = Math.ceil(totalDossiers / limit);
    
            return res.status(200).json({
                dossiers,
                totalPages,
                totalDossiers
            });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    get_info_dash = async (req, res) => {
        
        try {
          const totalDossiers = await dossierModel.countDocuments();
          const totalDossiersValid = await dossierModel.countDocuments({ dossierStatus: "Validé" });
          const totalDossiersNValid = await dossierModel.countDocuments({ dossierStatus: "Non Validé" });
          const totalDossiersAnnu = await dossierModel.countDocuments({ dossierStatus: "Annulé" });
      
          return res.status(200).json({
            totalDossiers,
            totalDossiersValid,
            totalDossiersNValid,
            totalDossiersAnnu
          });
        } catch (error) {
          console.error("Error fetching dossier stats:", error);
          return res.status(500).json({ message: "Internal server error" });
        }
      };

      update_dossiers_status = async (req, res) => {
              const { role } = req.userInfo
              const { dossiers_id } = req.params
              const { dossierStatus } = req.body
      
              if (role === 'admin' || role === 'backoffice') {
                  const dossiers = await dossierModel.findByIdAndUpdate(dossiers_id, { dossierStatus }, { new: true })
                  return res.status(200).json({ message: 'dossiers status update success', dossiers })
              } else {
                  return res.status(401).json({ message: 'You cannot access this api' })
              }
          }
    

    get_dashboard_single_dossiers = async (req, res) => {
        const { dossiers_id } = req.params;
      
        
        if (!mongoose.Types.ObjectId.isValid(dossiers_id)) {
            return res.status(400).json({ message: 'Invalid dossier ID' });
        }
    
        try {
            const dossiers = await dossierModel.findById(dossiers_id);
            return res.status(200).json({ dossiers });
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    // upload_files = async(req, res) => {
        
    //     const title = req.body.title;
    //     const fileName = req.file.filename;
    //     try {
    //         await PdfDetails.create({title: title, pdf: fileName});
    //         res.send({status: 'ok'});            
    //     } catch (error) {
    //         res.json({status:error})
    //     }
    // }

    upload_files = async (req, res) => {
        const { title, dossiers_id } = req.body;
        const fileName = req.file.filename;
    
        if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
            return res.status(400).json({ message: "Invalid dossier ID" });
        }
    
        try {
            const pdf = await PdfDetails.create({ title, pdf: fileName });
    
            await dossierModel.findByIdAndUpdate(
                dossiers_id,
                { $push: { pdfs: pdf._id } },
                { new: true }
            );
    
            res.send({ status: "ok", pdf });
        } catch (error) {
            res.status(500).json({ status: "error", message: error.message });
        }
    };

    get_files = async (req, res) => {
        console.log("✅ get-files route executed");
    
        const { dossiers_id } = req.params;
        console.log("Received dossiers_id:", dossiers_id);
    
        if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
            return res.status(400).json({ message: "Invalid dossier ID" });
        }
    
        try {
            const dossier = await dossierModel.findById(dossiers_id).populate("pdfs");
    
            if (!dossier) {
                return res.status(404).json({ message: "dossier not found" });
            }
    
            res.status(200).json({ status: "ok", files: dossier.pdfs });
        } catch (error) {
            console.error("Get files error:", error);
            res.status(500).json({ status: "error", message: error.message });
        }
    };

    delete_file = async (req, res) => {
        const { dossiers_id, pdf_id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(dossiers_id) || !mongoose.Types.ObjectId.isValid(pdf_id)) {
            return res.status(400).json({ message: "Invalid dossier ID or PDF ID" });
        }
    
        try {
            const dossier = await dossierModel.findById(dossiers_id);
            if (!dossier) {
                return res.status(404).json({ message: "dossier not found" });
            }
    
            if (!dossier.pdfs.includes(pdf_id)) {
                return res.status(404).json({ message: "PDF not found in dossier" });
            }
    
            await PdfDetails.findByIdAndDelete(pdf_id);
    
            await dossierModel.findByIdAndUpdate(
                dossiers_id,
                { $pull: { pdfs: pdf_id } },
                { new: true }
            );
    
            res.status(200).json({ message: "PDF deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error: error.message });
        }
    };

    update_dossier = async (req, res) => {
        const { id } = req.params;
        const { demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier } = req.body;
    
        if (!demandeurNom) {
            return res.status(400).json({ message: 'Please provide a name' });
        }

        try {

            let updateFields = { demandeurNom: demandeurNom.trim() };

    
            if (demandeurPreNom) {
                updateFields.demandeurPreNom = demandeurPreNom.trim();
            }
    
            if (demandeurAdresse) {
                updateFields.demandeurAdresse = demandeurAdresse.trim();
            }

            if (numero) {
                updateFields.numero = numero.trim();
            }

            if (ville) {
                updateFields.ville = ville.trim();
            }

            if (voie) {
                updateFields.voie = voie.trim();
            }
    
            if (demandeurCommune) {
                updateFields.demandeurCommune = demandeurCommune.trim();
            }
    
            if (demandeurCodePostal) {
                updateFields.demandeurCodePostal = demandeurCodePostal.trim();
            }
    
            if (batiment) {
                updateFields.batiment = batiment.trim();
            }
    
            if (etage) {
                updateFields.etage = etage.trim();
            }
    
            if (porte) {
                updateFields.porte = porte.trim();
            }
    
            if (escalier) {
                updateFields.escalier = escalier.trim();
            }
    
            if (tel) {
                updateFields.tel = tel.trim();
            }
    
            if (mel) {
                updateFields.mel = mel.trim();
            }
    
            if (numDossier) {
                updateFields.numDossier = numDossier.trim();
            }
    
            const updatedDossier = await dossierModel.findByIdAndUpdate(
                id,
                { $set: updateFields },
                { new: true, runValidators: true }
            );
    
            if (!updatedDossier) {
                return res.status(404).json({ message: 'Dossier not found' });
            }
    
            return res.status(200).json({ message: 'Dossier updated successfully', dossier: updatedDossier });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error', error: error.message });
        }
    };
    
        
            delete_dossier = async (req, res) => {
                const { id } = req.params;
        
                try {
                    const deletedDossier = await dossierModel.findByIdAndDelete(id);
                    if (!deletedDossier) {
                        return res.status(404).json({ message: 'Dossier not found' });
                    }
                    return res.status(200).json({ message: 'Dossier deleted successfully' });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
            };


            get_comments = async (req, res) => {
                console.log("✅ get-comments route executed");
            
                const { dossiers_id } = req.params;
                console.log("Received dossiers_id:", dossiers_id);
            
                if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
                    return res.status(400).json({ message: "Invalid dossier ID" });
                }
            
                try {
                    const dossier = await dossierModel.findById(dossiers_id).populate("comments");
            
                    if (!dossier) {
                        return res.status(404).json({ message: "dossier not found" });
                    }
            
                    res.status(200).json({ status: "ok", comments: dossier.comments });
                } catch (error) {
                    console.error("Get comments error:", error);
                    res.status(500).json({ status: "error", message: error.message });
                }
            };

            get_representants = async (req, res) => {
                console.log("✅ get-comments route executed");
            
                const { dossiers_id } = req.params;
                console.log("Received dossiers_id:", dossiers_id);
            
                if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
                    return res.status(400).json({ message: "Invalid dossier ID" });
                }
            
                try {
                    const dossier = await dossierModel.findById(dossiers_id).populate("representants");
            
                    if (!dossier) {
                        return res.status(404).json({ message: "dossier not found" });
                    }
            
                    res.status(200).json({ status: "ok", representants: dossier.representants });
                } catch (error) {
                    console.error("Get representants error:", error);
                    res.status(500).json({ status: "error", message: error.message });
                }
            };

            upload_representants = async (req, res) => {
                const { dossiers_id } = req.params;
                const { representant_id } = req.body;
              
                if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
                    return res.status(400).json({ message: "Invalid dossier ID" });
                }
            
                if (!representant_id || !mongoose.Types.ObjectId.isValid(representant_id)) {
                    return res.status(400).json({ message: "Invalid representant ID" });
                }
            
                try {
                    const dossier = await dossierModel.findByIdAndUpdate(
                        dossiers_id,
                        { $push: { representants: representant_id } },
                        { new: true }
                    );
            
                    if (!dossier) {
                        return res.status(404).json({ message: "Dossier not found" });
                    }
            
                    res.status(200).json({ status: "ok", representants: dossier.representants });
                } catch (error) {
                    console.error("Error updating dossier:", error);
                    res.status(500).json({ status: "error", message: error.message });
                }
              };

              delete_representants = async (req, res) => {
                const { dossiers_id, representant_id } = req.params;
            
                if (!mongoose.Types.ObjectId.isValid(dossiers_id) || !mongoose.Types.ObjectId.isValid(representant_id)) {
                    return res.status(400).json({ message: "Invalid dossier ID or PDF ID" });
                }
            
                try {
                    const dossier = await dossierModel.findById(dossiers_id);
                    if (!dossier) {
                        return res.status(404).json({ message: "dossier not found" });
                    }
            
                    if (!dossier.representants.includes(representant_id)) {
                        return res.status(404).json({ message: "PDF not found in dossier" });
                    }
            
        
            
                    await dossierModel.findByIdAndUpdate(
                        dossiers_id,
                        { $pull: { representants: representant_id } },
                        { new: true }
                    );
            
                    res.status(200).json({ message: "PDF deleted successfully" });
                } catch (error) {
                    res.status(500).json({ message: "Internal server error", error: error.message });
                }
            };
    
}

module.exports = new dossierController()