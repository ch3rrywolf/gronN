// const dossierModel = require('../models/dossierModel')
const folderModel = require('../models/folderModel')
const PdfDetails =  require("../models/pdfDetails")
// const s2epDetails = require("../models/s2epDetails")
const { default: mongoose } = require('mongoose');
class folderController {

    add_folders = async (req, res) => {
        const {numFolderAnah,benificaire,source,classeEng,residance,classeRevenue,parrinage,numbTotOLA,numbEN,titreResPriAm,RFRtot,anneeRFRtot,numbPers,numbEnfNai,RFRtotInclu,anneeREFtotInclu,numLogAm,voieLogAm,villeLogAm,codePostalLogAm,communeLogAm,batimentLogAm,escalierLogAm,etageLogAm,porteLogAm,logAmel,const15ans,const15ansAnnee,PTZ,travPartiel,avantTravProj,apresTrav,souhaiTrav,folderStatus,pdfs } = req.body;
    
        if (!numFolderAnah) {
            return res.status(400).json({ message: 'Please provide num Dossier Anah' });
        }
    
        try {
            const folder = await folderModel.findOne({ numFolderAnah: numFolderAnah.trim() });
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
                numbPers: numbPers?.trim() || "",
                numbEnfNai: numbEnfNai?.trim() || "",
                RFRtotInclu: RFRtotInclu?.trim() || "",
                anneeREFtotInclu: anneeREFtotInclu?.trim() || "",
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
                const15ansAnnee: const15ansAnnee?.trim() || "",
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
        const { folders_id } = req.params;
        const { numFolderAnah } = req.body;
    
        if (!numFolderAnah ) {
            return res.status(400).json({ message: 'Please provide a name' });
        }

        try {

            let updateFields = { numFolderAnah : numFolderAnah .trim() };
            
    
            const updatedFolder = await folderModel.findByIdAndUpdate(
                folders_id,
                { $set: updateFields },
                { new: true, runValidators: true }
            );
    
            if (!updatedFolder) {
                return res.status(404).json({ message: 'Folder not found' });
            }
    
            return res.status(200).json({ message: 'Folder updated successfully', folder: updatedFolder });
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

            step1 = async (req, res) => {
                const { id } = req.params;
                const {  numFolderAnah} = req.body;
            
                if (!numFolderAnah) {
                    return res.status(400).json({ message: 'Please provide a numFolderAnah' });
                }
        
                try {
        
                    let updateFields = { numFolderAnah: numFolderAnah.trim() };
        
            
                    if (numFolderAnah) {
                        updateFields.numFolderAnah = numFolderAnah.trim();
                    }

            
                    const updatedFolder = await folderModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedFolder) {
                        return res.status(404).json({ message: 'Folder not found' });
                    }
            
                    return res.status(200).json({ message: 'Folder updated successfully', folder: updatedFolder });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
            };
    
            get_s2eps = async (req, res) => {
                            console.log("✅ get-s2eps route executed");
                        
                            const { folders_id } = req.params;
                            console.log("Received folders_id:", folders_id);
                        
                            if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
                                return res.status(400).json({ message: "Invalid dossier ID" });
                            }
                        
                            try {
                                const folder = await folderModel.findById(folders_id).populate("s2eps");
                        
                                if (!folder) {
                                    return res.status(404).json({ message: "folder not found" });
                                }
                        
                                res.status(200).json({ status: "ok", s2eps: folder.s2eps });
                            } catch (error) {
                                console.error("Get s2eps error:", error);
                                res.status(500).json({ status: "error", message: error.message });
                            }
                        };

                        delete_s2eps_entreprise = async (req, res) => {
                                        const { folders_id, s2eps_id } = req.params;
                                    
                                        if (!mongoose.Types.ObjectId.isValid(folders_id) || !mongoose.Types.ObjectId.isValid(s2eps_id)) {
                                            return res.status(400).json({ message: "Invalid folders ID or s2eps ID" });
                                        }
                                    
                                        try {
                                            const folders = await folderModel.findById(folders_id);
                                            if (!folders) {
                                                return res.status(404).json({ message: "folder not found" });
                                            }
                                    
                                            if (!folders.s2eps.includes(s2eps_id)) {
                                                return res.status(404).json({ message: "s2eps_entreprise not found in dossier" });
                                            }
                                    
                                
                                    
                                            await folderModel.findByIdAndUpdate(
                                                folders_id,
                                                { $pull: { s2eps: s2eps_id } },
                                                { new: true }
                                            );
                                    
                                            res.status(200).json({ message: "s2eps_entreprise deleted successfully" });
                                        } catch (error) {
                                            res.status(500).json({ message: "Internal server error", error: error.message });
                                        }
                                    };

                                    get_s3eps = async (req, res) => {
                                        console.log("✅ get-s3eps route executed");
                                    
                                        const { folders_id } = req.params;
                                        console.log("Received folders_id:", folders_id);
                                    
                                        if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
                                            return res.status(400).json({ message: "Invalid dossier ID" });
                                        }
                                    
                                        try {
                                            const folder = await folderModel.findById(folders_id).populate("s3eps");
                                    
                                            if (!folder) {
                                                return res.status(404).json({ message: "folder not found" });
                                            }
                                    
                                            res.status(200).json({ status: "ok", s3eps: folder.s3eps });
                                        } catch (error) {
                                            console.error("Get s3eps error:", error);
                                            res.status(500).json({ status: "error", message: error.message });
                                        }
                                    };

                                    get_s4eps = async (req, res) => {
                                        console.log("✅ get-s4eps route executed");
                                    
                                        const { folders_id } = req.params;
                                        console.log("Received folders_id:", folders_id);
                                    
                                        if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
                                            return res.status(400).json({ message: "Invalid dossier ID" });
                                        }
                                    
                                        try {
                                            const folder = await folderModel.findById(folders_id).populate("s4eps");
                                    
                                            if (!folder) {
                                                return res.status(404).json({ message: "folder not found" });
                                            }
                                    
                                            res.status(200).json({ status: "ok", s4eps: folder.s4eps });
                                        } catch (error) {
                                            console.error("Get s4eps error:", error);
                                            res.status(500).json({ status: "error", message: error.message });
                                        }
                                    };

                                    get_s5eps = async (req, res) => {
                                        console.log("✅ get-s5eps route executed");
                                    
                                        const { folders_id } = req.params;
                                        console.log("Received folders_id:", folders_id);
                                    
                                        if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
                                            return res.status(400).json({ message: "Invalid dossier ID" });
                                        }
                                    
                                        try {
                                            const folder = await folderModel.findById(folders_id).populate("s5eps");
                                    
                                            if (!folder) {
                                                return res.status(404).json({ message: "folder not found" });
                                            }
                                    
                                            res.status(200).json({ status: "ok", s5eps: folder.s5eps });
                                        } catch (error) {
                                            console.error("Get s5eps error:", error);
                                            res.status(500).json({ status: "error", message: error.message });
                                        }
                                    };

                                    get_s6eps = async (req, res) => {
                                        console.log("✅ get-s6eps route executed");
                                    
                                        const { folders_id } = req.params;
                                        console.log("Received folders_id:", folders_id);
                                    
                                        if (!folders_id || !mongoose.Types.ObjectId.isValid(folders_id)) {
                                            return res.status(400).json({ message: "Invalid dossier ID" });
                                        }
                                    
                                        try {
                                            const folder = await folderModel.findById(folders_id).populate("s6eps");
                                    
                                            if (!folder) {
                                                return res.status(404).json({ message: "folder not found" });
                                            }
                                    
                                            res.status(200).json({ status: "ok", s6eps: folder.s6eps });
                                        } catch (error) {
                                            console.error("Get s6eps error:", error);
                                            res.status(500).json({ status: "error", message: error.message });
                                        }
                                    };

}

module.exports = new folderController()