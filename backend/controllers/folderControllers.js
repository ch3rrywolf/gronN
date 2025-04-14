// const dossierModel = require('../models/dossierModel')
const folderModel = require('../models/folderModel')
const PdfDetails =  require("../models/pdfDetails")
const { default: mongoose } = require('mongoose');
class folderController {

    add_folders = async (req, res) => {
        const {numFolderAnah,benificaire,source,classeEng,residance,classeRevenue,parrinage,numbTotOLA,numbEN,titreResPriAm,RFRtot,anneeRFRtot,escalier,numLogAm,voieLogAm,villeLogAm,codePostalLogAm,communeLogAm,batimentLogAm,escalierLogAm,etageLogAm,porteLogAm,logAmel,const15ans,const15ansAnnee,PTZ,travPartiel,avantTravProj,apresTrav,souhaiTrav,folderStatus,pdfs } = req.body;
    
        if (!numFolderAnah) {
            return res.status(400).json({ message: 'Please provide num Dossier Anah' });
        }
    
        try {
            const folder = await dossierModel.findOne({ numFolderAnah: numFolderAnah.trim() });
            if (folder) {
                return res.status(409).json({ message: 'folder already exists' });
            }
    
            const new_folder = await folderModel.create({
                numFolderAnah: numFolderAnah?.trim() || "",
                benificaire: benificaire.trim(),
                source: source.trim(),
                classeEng: classeEng?.trim() || "",
                residance: residance.trim(),
                classeRevenue: classeRevenue?.trim() || "",
                parrinage: parrinage?.trim() || "",
                numbTotOLA: numbTotOLA?.trim() || "",
                numbEN: numbEN?.trim() || "",
                titreResPriAm: titreResPriAm?.trim() || "",
                RFRtot: RFRtot?.trim() || "",
                anneeRFRtot: anneeRFRtot?.trim() || "",
                escalier: escalier?.trim() || "",
                numLogAm: numLogAm?.trim() || "",
                voieLogAm: voieLogAm?.trim() || "",
                villeLogAm: villeLogAm?.trim() || "",
                codePostalLogAm: codePostalLogAm?.trim() || "",
                communeLogAm: communeLogAm?.trim() || "",
                batimentLogAm: batimentLogAm?.trim() || "",
                escalierLogAm: escalierLogAm?.trim() || "",
                etageLogAm: etageLogAm?.trim() || "",
                porteLogAm: porteLogAm?.trim() || "",
                logAmel: logAmel?.trim() || "",
                const15ans: const15ans?.trim() || "",
                PTZ: PTZ?.trim() || "",
                travPartiel: travPartiel?.trim() || "",
                avantTravProj: avantTravProj?.trim() || "",
                apresTrav: apresTrav?.trim() || "",
                souhaiTrav: souhaiTrav?.trim() || "",
            });
    
            return res.status(201).json({ message: 'Folder added successfully', folder: new_folder });
    
        } catch (error) {
            console.error("Error adding folder:", error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };

   

    get_folders = async (req, res) => {
        try {
            const { page = 1, limit = 5 } = req.query;
            const folders = await folderModel.find({})
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(Number(limit));
    
            const totalFolders = await folderModel.countDocuments();
            const totalPages = Math.ceil(totalFolders / limit);
    
            return res.status(200).json({
                folders,
                totalPages,
                totalFolders
            });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    get_info_dash = async (req, res) => {
        
        try {
          const totalFolders = await folderModel.countDocuments();
          const totalFoldersValid = await folderModel.countDocuments({ folderStatus: "Validé" });
          const totalFoldersNValid = await folderModel.countDocuments({ folderStatus: "Non Validé" });
          const totalFoldersAnnu = await folderModel.countDocuments({ folderStatus: "Annulé" });
      
          return res.status(200).json({
            totalFolders,
            totalFoldersValid,
            totalFoldersNValid,
            totalFoldersAnnu
          });
        } catch (error) {
          console.error("Error fetching folder stats:", error);
          return res.status(500).json({ message: "Internal server error" });
        }
      };

      update_folders_status = async (req, res) => {
              const { role } = req.userInfo
              const { folders_id } = req.params
              const { folderStatus } = req.body
      
              if (role === 'admin' || role === 'backoffice') {
                  const folders = await folderModel.findByIdAndUpdate(folders_id, { folderStatus }, { new: true })
                  return res.status(200).json({ message: 'folders status update success', folders })
              } else {
                  return res.status(401).json({ message: 'You cannot access this api' })
              }
          }
    

    get_dashboard_single_folders = async (req, res) => {
        const { folders_id } = req.params;
      
        
        if (!mongoose.Types.ObjectId.isValid(folders_id)) {
            return res.status(400).json({ message: 'Invalid folder ID' });
        }
    
        try {
            const folders = await folderModel.findById(folders_id);
            return res.status(200).json({ folders });
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
        const { title, folders_id } = req.body;
        const fileName = req.file.filename;
    
        if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
            return res.status(400).json({ message: "Invalid folder ID" });
        }
    
        try {
            const pdf = await PdfDetails.create({ title, pdf: fileName });
    
            await folderModel.findByIdAndUpdate(
                folders_id,
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
    
        const { folders_id } = req.params;
        console.log("Received folders_id:", folders_id);
    
        if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
            return res.status(400).json({ message: "Invalid folder ID" });
        }
    
        try {
            const folder = await folderModel.findById(folders_id).populate("pdfs");
    
            if (!folder) {
                return res.status(404).json({ message: "folder not found" });
            }
    
            res.status(200).json({ status: "ok", files: folder.pdfs });
        } catch (error) {
            console.error("Get files error:", error);
            res.status(500).json({ status: "error", message: error.message });
        }
    };

    delete_file = async (req, res) => {
        const { folders_id, pdf_id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(folders_id) || !mongoose.Types.ObjectId.isValid(pdf_id)) {
            return res.status(400).json({ message: "Invalid folder ID or PDF ID" });
        }
    
        try {
            const folder = await folderModel.findById(folders_id);
            if (!folder) {
                return res.status(404).json({ message: "folder not found" });
            }
    
            if (!folder.pdfs.includes(pdf_id)) {
                return res.status(404).json({ message: "PDF not found in folder" });
            }
    
            await PdfDetails.findByIdAndDelete(pdf_id);
    
            await folderModel.findByIdAndUpdate(
                folders_id,
                { $pull: { pdfs: pdf_id } },
                { new: true }
            );
    
            res.status(200).json({ message: "PDF deleted successfully" });
        } catch (error) {
            res.status(500).json({ message: "Internal server error", error: error.message });
        }
    };

    update_folder = async (req, res) => {
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
    
        
            delete_folder = async (req, res) => {
                const { id } = req.params;
        
                try {
                    const deletedFolder = await folderModel.findByIdAndDelete(id);
                    if (!deletedFolder) {
                        return res.status(404).json({ message: 'folder not found' });
                    }
                    return res.status(200).json({ message: 'folder deleted successfully' });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
            };


            // get_comments = async (req, res) => {
            //     console.log("✅ get-comments route executed");
            
            //     const { dossiers_id } = req.params;
            //     console.log("Received dossiers_id:", dossiers_id);
            
            //     if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
            //         return res.status(400).json({ message: "Invalid dossier ID" });
            //     }
            
            //     try {
            //         const dossier = await dossierModel.findById(dossiers_id).populate("comments");
            
            //         if (!dossier) {
            //             return res.status(404).json({ message: "dossier not found" });
            //         }
            
            //         res.status(200).json({ status: "ok", comments: dossier.comments });
            //     } catch (error) {
            //         console.error("Get comments error:", error);
            //         res.status(500).json({ status: "error", message: error.message });
            //     }
            // };

            // get_representants = async (req, res) => {
            //     console.log("✅ get-comments route executed");
            
            //     const { dossiers_id } = req.params;
            //     console.log("Received dossiers_id:", dossiers_id);
            
            //     if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
            //         return res.status(400).json({ message: "Invalid dossier ID" });
            //     }
            
            //     try {
            //         const dossier = await dossierModel.findById(dossiers_id).populate("representants");
            
            //         if (!dossier) {
            //             return res.status(404).json({ message: "dossier not found" });
            //         }
            
            //         res.status(200).json({ status: "ok", representants: dossier.representants });
            //     } catch (error) {
            //         console.error("Get representants error:", error);
            //         res.status(500).json({ status: "error", message: error.message });
            //     }
            // };

            // upload_representants = async (req, res) => {
            //     const { dossiers_id } = req.params;
            //     const { representant_id } = req.body;
              
            //     if (!dossiers_id || !mongoose.Types.ObjectId.isValid(dossiers_id)) {
            //         return res.status(400).json({ message: "Invalid dossier ID" });
            //     }
            
            //     if (!representant_id || !mongoose.Types.ObjectId.isValid(representant_id)) {
            //         return res.status(400).json({ message: "Invalid representant ID" });
            //     }
            
            //     try {
            //         const dossier = await dossierModel.findByIdAndUpdate(
            //             dossiers_id,
            //             { $push: { representants: representant_id } },
            //             { new: true }
            //         );
            
            //         if (!dossier) {
            //             return res.status(404).json({ message: "Dossier not found" });
            //         }
            
            //         res.status(200).json({ status: "ok", representants: dossier.representants });
            //     } catch (error) {
            //         console.error("Error updating dossier:", error);
            //         res.status(500).json({ status: "error", message: error.message });
            //     }
            //   };

            //   delete_representants = async (req, res) => {
            //     const { dossiers_id, representant_id } = req.params;
            
            //     if (!mongoose.Types.ObjectId.isValid(dossiers_id) || !mongoose.Types.ObjectId.isValid(representant_id)) {
            //         return res.status(400).json({ message: "Invalid dossier ID or PDF ID" });
            //     }
            
            //     try {
            //         const dossier = await dossierModel.findById(dossiers_id);
            //         if (!dossier) {
            //             return res.status(404).json({ message: "dossier not found" });
            //         }
            
            //         if (!dossier.representants.includes(representant_id)) {
            //             return res.status(404).json({ message: "PDF not found in dossier" });
            //         }
            
        
            
            //         await dossierModel.findByIdAndUpdate(
            //             dossiers_id,
            //             { $pull: { representants: representant_id } },
            //             { new: true }
            //         );
            
            //         res.status(200).json({ message: "PDF deleted successfully" });
            //     } catch (error) {
            //         res.status(500).json({ message: "Internal server error", error: error.message });
            //     }
            // };
    
}

module.exports = new folderController()