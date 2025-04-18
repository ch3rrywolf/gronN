const authModel = require('../models/authModel')
const PdfDetails =  require("../models/pdfDetails")
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
class authController {
    login = async (req, res) => {
        const { email, password } = req.body

        if (!email) {
            return res.status(404).json({ message: 'Veuillez fournir votre email' })
        }
        if (!password) {
            return res.status(404).json({ message: 'Veuillez fournir votre mot de passe' })
        }

        try {
            const user = await authModel.findOne({ email }).select('+password')
            if (user) {
                const match = await bcrypt.compare(password, user.password)
                if (match) {
                    const obj = {
                        id: user.id,
                        name: user.name,
                        role: user.role
                    }
                    const token = await jwt.sign(obj, process.env.secret, {
                        expiresIn: process.env.exp_time
                    })
                    return res.status(200).json({ message: 'connexion réussie', token })
                    
                } else {
                    return res.status(404).json({ message: 'mot de passe invalide' })
                }
            } else {
                return res.status(404).json({ message: 'utilisateur non trouvé' })
            }
        } catch (error) {
            console.log(error)
        }

    }

    getProfile = async (req, res) => {
        try {
            const userId = req.userInfo.id;
    
            const user = await authModel.findById(userId).select('-password'); // Hide password
    
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
    
            return res.status(200).json({ user });
    
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
    }



        // Exmple session session
        add_session = async (req, res) => {

            const { email, name, role, password } = req.body
    
            if (!name) {
                return res.status(404).json({ message: 'Veuillez fournir le nom' })
            }
            if (!password) {
                return res.status(404).json({ message: 'Veuillez fournir votre mot de passe' })
            }
            if (!email) {
                return res.status(404).json({ message: 'Veuillez fournir votre email' })
            }
            if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                return res.status(404).json({ message: 'veuillez fournir email form valide' })
            }
            try {
                const session = await authModel.findOne({ email: email.trim() })
                if (session) {
                    return res.status(404).json({ message: 'utilisateur existe déjà' })
                } else {
                    const new_session = await authModel.create({
                        name: name.trim(),
                        email: email.trim(),
                        password: await bcrypt.hash(password.trim(), 10),
                        role: role.trim(),
                        
                    })
                    return res.status(201).json({ message: 'session ajouter du succès', session: new_session })
                }
            } catch (error) {
                return res.status(500).json({ message: 'Erreur interne du serveur' })
            }
        }
        get_sessions = async (req, res) => {
            try {
                const sessions = await authModel.find().sort({ createdAt: -1 })
                return res.status(200).json({ sessions })
            } catch (error) {
                return res.status(500).json({ message: 'Erreur interne du serveur' })
            }
        }
        get_sessions_details = async (req, res) => {
                const { sessions_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(sessions_id)) {
                    return res.status(400).json({ message: 'Invalid sessions ID' });
                }
            
                try {
                    const sessions = await authModel.findById(sessions_id);
                    return res.status(200).json({ sessions });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }
    update_session_status = async (req, res) => {
                  const { role } = req.userInfo
                  const { sessions_id } = req.params
                  const { accountStatus } = req.body
          
                  if (role === 'admin') {
                      const sessions = await authModel.findByIdAndUpdate(sessions_id, { accountStatus }, { new: true })
                      return res.status(200).json({ message: 'session status update success', sessions })
                  } else {
                      return res.status(401).json({ message: 'You cannot access this api' })
                  }
              }
            update_session = async (req, res) => {
                const { id } = req.params;
                const { name, email, password, role,accountStatus } = req.body;
            
                if (!name) {
                    return res.status(400).json({ message: 'Please provide a name' });
                }
            
                try {
                    
                    let updateFields = { name: name.trim() };
            
                    if (email) {
                        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                            return res.status(400).json({ message: 'Please provide a valid email' });
                        }
                        updateFields.email = email.trim();
                    }
            
                    if (password) {
                        updateFields.password = await bcrypt.hash(password.trim(), 10);
                    }
            
                    if (role) {
                        updateFields.role = role.trim();
                    }
    
                    if (accountStatus) {
                        updateFields.accountStatus = accountStatus.trim();
                    }
            
                    const updatedSession = await authModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedSession) {
                        return res.status(404).json({ message: 'session not found' });
                    }
            
                    return res.status(200).json({ message: 'session updated successfully', session: updatedSession });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
            };
            delete_session = async (req, res) => {
                const { id } = req.params;
        
                try {
                    const deletedSession = await authModel.findByIdAndDelete(id);
                    if (!deletedSession) {
                        return res.status(404).json({ message: 'session not found' });
                    }
                    return res.status(200).json({ message: 'session deleted successfully' });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
            };
    //votre compte n'est pas activé, contactez l'administrateur pour vérifier le compte


    // Exmple Backoffice session
    add_backoffice = async (req, res) => {

        const { email, name, password } = req.body

        if (!name) {
            return res.status(404).json({ message: 'Veuillez fournir le nom' })
        }
        if (!password) {
            return res.status(404).json({ message: 'Veuillez fournir votre mot de passe' })
        }
        if (!email) {
            return res.status(404).json({ message: 'Veuillez fournir votre email' })
        }
        if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            return res.status(404).json({ message: 'veuillez fournir email form valide' })
        }
        try {
            const backoffice = await authModel.findOne({ email: email.trim() })
            if (backoffice) {
                return res.status(404).json({ message: 'utilisateur existe déjà' })
            } else {
                const new_backoffice = await authModel.create({
                    name: name.trim(),
                    email: email.trim(),
                    password: await bcrypt.hash(password.trim(), 10),
                    role: 'backoffice',
                    
                })
                return res.status(201).json({ message: 'backoffice ajouter du succès', backoffice: new_backoffice })
            }
        } catch (error) {
            return res.status(500).json({ message: 'Erreur interne du serveur' })
        }
    }
    get_backoffices = async (req, res) => {
        try {
            const backoffices = await authModel.find().sort({ createdAt: -1 })
            return res.status(200).json({ backoffices })
        } catch (error) {
            return res.status(500).json({ message: 'Erreur interne du serveur' })
        }
    }
    get_backoffices_details = async (req, res) => {
            const { backoffices_id } = req.params;
           
            
            if (!mongoose.Types.ObjectId.isValid(backoffices_id)) {
                return res.status(400).json({ message: 'Invalid backoffices ID' });
            }
        
            try {
                const backoffices = await authModel.findById(backoffices_id);
                return res.status(200).json({ backoffices });
            } catch (error) {
                console.log(error.message);
                return res.status(500).json({ message: 'Internal server error' });
            }
        }
update_backoffice_status = async (req, res) => {
              const { role } = req.userInfo
              const { backoffices_id } = req.params
              const { accountStatus } = req.body
      
              if (role === 'admin') {
                  const backoffices = await authModel.findByIdAndUpdate(backoffices_id, { accountStatus }, { new: true })
                  return res.status(200).json({ message: 'backoffice status update success', backoffices })
              } else {
                  return res.status(401).json({ message: 'You cannot access this api' })
              }
          }
        update_backoffice = async (req, res) => {
            const { id } = req.params;
            const { name, email, password, role,accountStatus } = req.body;
        
            if (!name) {
                return res.status(400).json({ message: 'Please provide a name' });
            }
        
            try {
                
                let updateFields = { name: name.trim() };
        
                if (email) {
                    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                        return res.status(400).json({ message: 'Please provide a valid email' });
                    }
                    updateFields.email = email.trim();
                }
        
                if (password) {
                    updateFields.password = await bcrypt.hash(password.trim(), 10);
                }
        
                if (role) {
                    updateFields.role = role.trim();
                }

                if (accountStatus) {
                    updateFields.accountStatus = accountStatus.trim();
                }
        
                const updatedBackoffice = await authModel.findByIdAndUpdate(
                    id,
                    { $set: updateFields },
                    { new: true, runValidators: true }
                );
        
                if (!updatedBackoffice) {
                    return res.status(404).json({ message: 'Backoffice not found' });
                }
        
                return res.status(200).json({ message: 'Backoffice updated successfully', backoffice: updatedBackoffice });
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error', error: error.message });
            }
        };
        delete_backoffice = async (req, res) => {
            const { id } = req.params;
    
            try {
                const deletedBackoffice = await authModel.findByIdAndDelete(id);
                if (!deletedBackoffice) {
                    return res.status(404).json({ message: 'backoffice not found' });
                }
                return res.status(200).json({ message: 'backoffice deleted successfully' });
            } catch (error) {
                return res.status(500).json({ message: 'Internal server error' });
            }
        };

        // Inspecteur Session

        add_inspecteur = async (req, res) => {

            const {name, email, roleIns, superviseur,villeIns,adresseIns,codePostalIns,numTelIns, password } = req.body
    
           
            if (!roleIns) {
                return res.status(404).json({ message: 'Veuillez fournir le roleIns' })
            }
            if (!password) {
                return res.status(404).json({ message: 'Veuillez fournir votre mot de passe' })
            }
            
            if (!name) {
                return res.status(404).json({ message: 'Veuillez fournir votre name' })
            }
            if (!email) {
                return res.status(404).json({ message: 'Veuillez fournir votre email' })
            }
            if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                return res.status(404).json({ message: 'veuillez fournir email form valide' })
            }
            try {
                const inspecteur = await authModel.findOne({ email: email.trim() })
                if (inspecteur) {
                    return res.status(404).json({ message: 'utilisateur existe déjà' })
                } else {
                    const new_inspecteur = await authModel.create({
                        name: name.trim(),
                        email: email.trim(),
                        password: await bcrypt.hash(password.trim(), 10),
                        role: 'inspecteur',
                        roleIns: roleIns.trim(),
                        superviseur: superviseur.trim(),
                        villeIns: villeIns.trim(),
                        adresseIns: adresseIns.trim(),
                        codePostalIns: codePostalIns.trim(),
                        numTelIns: numTelIns.trim(),
                        
                    })
                    return res.status(201).json({ message: 'inspecteur ajouter du succès', inspecteur: new_inspecteur })
                }
            } catch (error) {
                return res.status(500).json({ message: 'Erreur interne du serveur' })
            }
        } 
        get_inspecteurs = async (req, res) => {
            try {
                const inspecteurs = await authModel.find({ role: "inspecteur" }).sort({ createdAt: -1 })
                return res.status(200).json({ inspecteurs })
            } catch (error) {
                return res.status(500).json({ message: 'Erreur interne du serveur' })
            }
        }
        get_inspecteurs_details = async (req, res) => {
                const { inspecteurs_id } = req.params;
               
                
                if (!mongoose.Types.ObjectId.isValid(inspecteurs_id)) {
                    return res.status(400).json({ message: 'Invalid inspecteurs ID' });
                }
            
                try {
                    const inspecteurs = await authModel.findById(inspecteurs_id);
                    return res.status(200).json({ inspecteurs });
                } catch (error) {
                    console.log(error.message);
                    return res.status(500).json({ message: 'Internal server error' });
                }
            }
    update_inspecteur_status = async (req, res) => {
                  const { role } = req.userInfo
                  const { inspecteurs_id } = req.params
                  const { accountStatus } = req.body
          
                  if (role === 'admin') {
                      const inspecteurs = await authModel.findByIdAndUpdate(inspecteurs_id, { accountStatus }, { new: true })
                      return res.status(200).json({ message: 'inspecteur status update success', inspecteurs })
                  } else {
                      return res.status(401).json({ message: 'You cannot access this api' })
                  }
              } 
            update_inspecteur = async (req, res) => {
                const { id } = req.params;
                const { name, email, password, role,accountStatus,roleIns,superviseur,villeIns,adresseIns,codePostalIns,numTelIns } = req.body;
            
                if (!name) {
                    return res.status(400).json({ message: 'Please provide a name' });
                }
            
                try {
                    
                    let updateFields = { name: name.trim() };
            
                    if (email) {
                        if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                            return res.status(400).json({ message: 'Please provide a valid email' });
                        }
                        updateFields.email = email.trim();
                    }
            
                    if (password) {
                        updateFields.password = await bcrypt.hash(password.trim(), 10);
                    }
            
                    if (role) {
                        updateFields.role = role.trim();
                    }
    
                    if (accountStatus) {
                        updateFields.accountStatus = accountStatus.trim();
                    }

                    
                    if (roleIns) {
                        updateFields.roleIns = roleIns.trim();
                    }
                    if (superviseur) {
                        updateFields.superviseur = superviseur.trim();
                    }
                    if (villeIns) {
                        updateFields.villeIns = villeIns.trim();
                    }
                    if (adresseIns) {
                        updateFields.adresseIns = adresseIns.trim();
                    }
                    if (codePostalIns) {
                        updateFields.codePostalIns = codePostalIns.trim();
                    }
                    if (numTelIns) {
                        updateFields.numTelIns = numTelIns.trim();
                    }
            
                    const updatedInspecteur = await authModel.findByIdAndUpdate(
                        id,
                        { $set: updateFields },
                        { new: true, runValidators: true }
                    );
            
                    if (!updatedInspecteur) {
                        return res.status(404).json({ message: 'Inspecteur not found' });
                    }
            
                    return res.status(200).json({ message: 'Inspecteur updated successfully', inspecteur: updatedInspecteur });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error', error: error.message });
                }
            };     
            delete_inspecteur = async (req, res) => {
                const { id } = req.params;
        
                try {
                    const deletedInspecteur = await authModel.findByIdAndDelete(id);
                    if (!deletedInspecteur) {
                        return res.status(404).json({ message: 'inspecteur not found' });
                    }
                    return res.status(200).json({ message: 'inspecteur deleted successfully' });
                } catch (error) {
                    return res.status(500).json({ message: 'Internal server error' });
                }
            };

            //Auditeur

            add_auditeur = async (req, res) => {

                const {name, email, password, raiSocAud,numTelAud,formJurAud,adresseAud,villeAud,codePostalAud,siteWebAud,montCapAud,nomRepParAud,prenomRepParAud,genreRepParAud,fonctionRepParAud,numTelRepParAud,emailRepParAud,sirenIdentAud,siretIdentAud,identTVAIdentAud,rcsIdentAud,numAPEIdentAud,numAgrIdentAud,numDecIdentAud,raisocAssAud,adresseAssAud,numPolAssAud,dateEmiAssAud,dateFinAssAud} = req.body
        
                if (!raiSocAud) {
                    return res.status(404).json({ message: 'Veuillez fournir le raiSocAud' })
                }
                if (!adresseAud) {
                    return res.status(404).json({ message: 'Veuillez fournir le adresseAud' })
                }
                if (!villeAud) {
                    return res.status(404).json({ message: 'Veuillez fournir villeAud' })
                }
                if (!codePostalAud) {
                    return res.status(404).json({ message: 'Veuillez fournir codePostalAud' })
                }
                if (!password) {
                    return res.status(404).json({ message: 'Veuillez fournir Password' })
                }
                
                if (!name) {
                    return res.status(404).json({ message: 'Veuillez fournir votre name' })
                }
                if (!email) {
                    return res.status(404).json({ message: 'Veuillez fournir votre email' })
                }
                if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                    return res.status(404).json({ message: 'veuillez fournir email form valide' })
                }
                try {
                    const auditeur = await authModel.findOne({ email: email.trim() })
                    if (auditeur) {
                        return res.status(404).json({ message: 'utilisateur existe déjà' })
                    } else {
                        const new_auditeur = await authModel.create({
                            name: name.trim() || "",
                            email: email.trim()|| "",
                            password: await bcrypt.hash(password.trim(), 10)|| "",
                            role: 'auditeur'|| "",

                            raiSocAud: raiSocAud.trim()|| "",
                            numTelAud: numTelAud.trim()|| "",
                            formJurAud: formJurAud.trim()|| "",
                            adresseAud: adresseAud.trim()|| "",
                            villeAud: villeAud.trim()|| "",
                            codePostalAud: codePostalAud.trim()|| "",
                            siteWebAud: siteWebAud.trim()|| "",
                            montCapAud: montCapAud.trim()|| "",
                            // represent par
                            nomRepParAud: nomRepParAud.trim()|| "",
                            prenomRepParAud: prenomRepParAud.trim()|| "",
                            genreRepParAud: genreRepParAud.trim()|| "",
                            fonctionRepParAud: fonctionRepParAud.trim()|| "",
                            numTelRepParAud: numTelRepParAud.trim()|| "",
                            emailRepParAud: emailRepParAud.trim()|| "",
                            
                            //Identifiants
                            sirenIdentAud: sirenIdentAud.trim()|| "",
                            siretIdentAud: siretIdentAud.trim()|| "",
                            identTVAIdentAud: identTVAIdentAud.trim()|| "",
                            rcsIdentAud: rcsIdentAud.trim()|| "",
                            numAPEIdentAud: numAPEIdentAud.trim()|| "",
                            numAgrIdentAud: numAgrIdentAud.trim()|| "",
                            numDecIdentAud: numDecIdentAud.trim()|| "",
                            // Assurance
                            raisocAssAud: raisocAssAud.trim()|| "",
                            adresseAssAud: adresseAssAud.trim()|| "",
                            numPolAssAud: numPolAssAud.trim()|| "",
                            dateEmiAssAud: dateEmiAssAud.trim()|| "",
                            dateFinAssAud: dateFinAssAud.trim()|| "",
                            
                            
                        })
                        return res.status(201).json({ message: 'auditeur ajouter du succès', auditeur: new_auditeur })
                    }
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
            }          
            get_auditeurs = async (req, res) => {
                try {
                    const auditeurs = await authModel.find({ role: "auditeur" }).sort({ createdAt: -1 })
                    return res.status(200).json({ auditeurs })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
            }           
            get_auditeurs_details = async (req, res) => {
                    const { auditeurs_id } = req.params;
                   
                    
                    if (!mongoose.Types.ObjectId.isValid(auditeurs_id)) {
                        return res.status(400).json({ message: 'Invalid auditeurs ID' });
                    }
                
                    try {
                        const auditeurs = await authModel.findById(auditeurs_id);
                        return res.status(200).json({ auditeurs });
                    } catch (error) {
                        console.log(error.message);
                        return res.status(500).json({ message: 'Internal server error' });
                    }
                }           
        update_auditeur_status = async (req, res) => {
                      const { role } = req.userInfo
                      const { auditeurs_id } = req.params
                      const { accountStatus } = req.body
              
                      if (role === 'admin') {
                          const auditeurs = await authModel.findByIdAndUpdate(auditeurs_id, { accountStatus }, { new: true })
                          return res.status(200).json({ message: 'auditeur status update success', auditeurs })
                      } else {
                          return res.status(401).json({ message: 'You cannot access this api' })
                      }
                  }           
                update_auditeur = async (req, res) => {
                    const { id } = req.params;
                    const { name, email, password, raiSocAud,numTelAud,formJurAud,adresseAud,villeAud,codePostalAud,siteWebAud,montCapAud,nomRepParAud,prenomRepParAud,genreRepParAud,fonctionRepParAud,numTelRepParAud,emailRepParAud,sirenIdentAud,siretIdentAud,identTVAIdentAud,rcsIdentAud,numAPEIdentAud,numAgrIdentAud,numDecIdentAud,raisocAssAud,adresseAssAud,numPolAssAud,dateEmiAssAud,dateFinAssAud } = req.body;
                
                    if (!name) {
                        return res.status(400).json({ message: 'Please provide a name' });
                    }
                
                    try {
                        
                        let updateFields = { name: name.trim() };
                
                    
        
                        if (accountStatus) {
                            updateFields.accountStatus = accountStatus.trim();
                        }
    
                        if (raiSocAud) {
                            updateFields.raiSocAud = raiSocAud.trim();
                        }
                        if (numTelAud) {
                            updateFields.numTelAud = numTelAud.trim();
                        }
                        if (formJurAud) {
                            updateFields.formJurAud = formJurAud.trim();
                        }
                        if (adresseAud) {
                            updateFields.adresseAud = adresseAud.trim();
                        }
                        if (villeAud) {
                            updateFields.villeAud = villeAud.trim();
                        }
                        if (codePostalAud) {
                            updateFields.codePostalAud = codePostalAud.trim();
                        }
                        if (siteWebAud) {
                            updateFields.siteWebAud = siteWebAud.trim();
                        }
                        if (montCapAud) {
                            updateFields.montCapAud = montCapAud.trim();
                        }

                        if (nomRepParAud) {
                            updateFields.nomRepParAud = nomRepParAud.trim();
                        }
                        if (prenomRepParAud) {
                            updateFields.prenomRepParAud = prenomRepParAud.trim();
                        }
                        if (genreRepParAud) {
                            updateFields.genreRepParAud = genreRepParAud.trim();
                        }
                        if (fonctionRepParAud) {
                            updateFields.fonctionRepParAud = fonctionRepParAud.trim();
                        }
                        if (numTelRepParAud) {
                            updateFields.numTelRepParAud = numTelRepParAud.trim();
                        }
                        if (emailRepParAud) {
                            updateFields.emailRepParAud = emailRepParAud.trim();
                        }
                        if (sirenIdentAud) {
                            updateFields.sirenIdentAud = sirenIdentAud.trim();
                        }
                        if (siretIdentAud) {
                            updateFields.siretIdentAud = siretIdentAud.trim();
                        }
                        if (identTVAIdentAud) {
                            updateFields.identTVAIdentAud = identTVAIdentAud.trim();
                        }
                        if (rcsIdentAud) {
                            updateFields.rcsIdentAud = rcsIdentAud.trim();
                        }
                        if (numAPEIdentAud) {
                            updateFields.numAPEIdentAud = numAPEIdentAud.trim();
                        }
                        if (numAgrIdentAud) {
                            updateFields.numAgrIdentAud = numAgrIdentAud.trim();
                        }
                        if (numDecIdentAud) {
                            updateFields.numDecIdentAud = numDecIdentAud.trim();
                        }
                        if (raisocAssAud) {
                            updateFields.raisocAssAud = raisocAssAud.trim();
                        }
                        if (adresseAssAud) {
                            updateFields.adresseAssAud = adresseAssAud.trim();
                        }
                        if (numPolAssAud) {
                            updateFields.numPolAssAud = numPolAssAud.trim();
                        }
                        if (dateEmiAssAud) {
                            updateFields.dateEmiAssAud = dateEmiAssAud.trim();
                        }
                        if (dateFinAssAud) {
                            updateFields.dateFinAssAud = dateFinAssAud.trim();
                        }

                                                
                
                        const updatedAuditeur = await authModel.findByIdAndUpdate(
                            id,
                            { $set: updateFields },
                            { new: true, runValidators: true }
                        );
                
                        if (!updatedAuditeur) {
                            return res.status(404).json({ message: 'auditeur not found' });
                        }
                
                        return res.status(200).json({ message: 'auditeur updated successfully', auditeur: updatedAuditeur });
                    } catch (error) {
                        return res.status(500).json({ message: 'Internal server error', error: error.message });
                    }
                };               
                delete_auditeur = async (req, res) => {
                    const { id } = req.params;
            
                    try {
                        const deletedAuditeur = await authModel.findByIdAndDelete(id);
                        if (!deletedAuditeur) {
                            return res.status(404).json({ message: 'auditeur not found' });
                        }
                        return res.status(200).json({ message: 'auditeur deleted successfully' });
                    } catch (error) {
                        return res.status(500).json({ message: 'Internal server error' });
                    }
                };

                 get_rges = async (req, res) => {
                                console.log("✅ get -rges route executed");
                            
                                const { auditeurs_id } = req.params;
                                console.log("Received auditeurs_id:", auditeurs_id);
                            
                                if (!auditeurs_id || !mongoose.Types.ObjectId.isValid(auditeurs_id)) {
                                    return res.status(400).json({ message: "Invalid auditeurs_id ID" });
                                }
                            
                                try {
                                    const auditeur = await authModel.findById(auditeurs_id).populate("rges");
                            
                                    if (!auditeur) {
                                        return res.status(404).json({ message: "auditeur not found" });
                                    }
                            
                                    res.status(200).json({ status: "ok", rges: auditeur.rges });
                                } catch (error) {
                                    console.error("Get rges error:", error);
                                    res.status(500).json({ status: "error", message: error.message });
                                }
                            };

                            upload_files = async (req, res) => {
                                    const { title, auditeurs_id } = req.body;
                                    const fileName = req.file.filename;
                                
                                    if (!auditeurs_id || !mongoose.Types.ObjectId.isValid(auditeurs_id)) {
                                        return res.status(400).json({ message: "Invalid auditeur ID" });
                                    }
                                
                                    try {
                                        const pdf = await PdfDetails.create({ title, pdf: fileName });
                                
                                        await authModel.findByIdAndUpdate(
                                            auditeurs_id,
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
                                
                                    const { auditeurs_id } = req.params;
                                    console.log("Received auditeurs_id:", auditeurs_id);
                                
                                    if (!auditeurs_id || !mongoose.Types.ObjectId.isValid(auditeurs_id)) {
                                        return res.status(400).json({ message: "Invalid auditeur ID" });
                                    }
                                
                                    try {
                                        const auditeur = await authModel.findById(auditeurs_id).populate("pdfs");
                                
                                        if (!auditeur) {
                                            return res.status(404).json({ message: "auditeur not found" });
                                        }
                                
                                        res.status(200).json({ status: "ok", files: auditeur.pdfs });
                                    } catch (error) {
                                        console.error("Get files error:", error);
                                        res.status(500).json({ status: "error", message: error.message });
                                    }
                                };
                            
                                delete_file = async (req, res) => {
                                    const { auditeurs_id, pdf_id } = req.params;
                                
                                    if (!mongoose.Types.ObjectId.isValid(auditeurs_id) || !mongoose.Types.ObjectId.isValid(pdf_id)) {
                                        return res.status(400).json({ message: "Invalid auditeur ID or PDF ID" });
                                    }
                                
                                    try {
                                        const auditeur = await authModel.findById(auditeurs_id);
                                        if (!auditeur) {
                                            return res.status(404).json({ message: "auditeur not found" });
                                        }
                                
                                        if (!auditeur.pdfs.includes(pdf_id)) {
                                            return res.status(404).json({ message: "PDF not found in auditeur" });
                                        }
                                
                                        await PdfDetails.findByIdAndDelete(pdf_id);
                                
                                        await authModel.findByIdAndUpdate(
                                            auditeurs_id,
                                            { $pull: { pdfs: pdf_id } },
                                            { new: true }
                                        );
                                
                                        res.status(200).json({ message: "PDF deleted successfully" });
                                    } catch (error) {
                                        res.status(500).json({ message: "Internal server error", error: error.message });
                                    }
                                };


            // Entreprise retenue
            add_entrete = async (req, res) => {

                const {name, email, password,raiSocEntRe,numTelEntRe,formJurEntRe, emailEntRe,adresseEntRe, villeEntRe,codePostalEntRe,siteWebEntRe,montCapEntRe,tauxTVAEntRe,signatureEntRe,nomRepParEntRe,prenomRepParEntRe,genreRepParEntRe,fonctionRepParEntRe,numTelRepParEntRe,emailRepParEntRe,qualifiRGEEntRe,numRGEEntRe,editLeRGEEntRe,valableJusRGEEntRe,sirenIdentEntRe,siretIdentEntRe,identTVAIdentEntRe,rcsIdentEntRe,numAPEIdentEntRe,numAgrIdentEntRe,numDecIdentEntRe,raisocAssEntRe,adresseAssEntRe,numPolAssEntRe,dateEmiAssEntRe,dateFinAssEntRe,documentsEntRe,genRevAudEntRe,genDevisEntRe } = req.body
        
                if (!raiSocEntRe) {
                    return res.status(404).json({ message: 'Veuillez fournir le raiSocEntRe' })
                }
                if (!adresseEntRe) {
                    return res.status(404).json({ message: 'Veuillez fournir le adresseEntRe' })
                }
                if (!villeEntRe) {
                    return res.status(404).json({ message: 'Veuillez fournir villeEntRe' })
                }
                if (!codePostalEntRe) {
                    return res.status(404).json({ message: 'Veuillez fournir codePostalEntRe' })
                }
                if (!password) {
                    return res.status(404).json({ message: 'Veuillez fournir Password' })
                }
                
                if (emailEntRe && !emailEntRe.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                    return res.status(404).json({ message: 'veuillez fournir emailIns form valide' })
                }
                if (!name) {
                    return res.status(404).json({ message: 'Veuillez fournir votre name' })
                }
                if (!email) {
                    return res.status(404).json({ message: 'Veuillez fournir votre email' })
                }
                if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                    return res.status(404).json({ message: 'veuillez fournir email form valide' })
                }
                try {
                    const entrete = await authModel.findOne({ email: email.trim() })
                    if (entrete) {
                        return res.status(404).json({ message: 'utilisateur existe déjà' })
                    } else {
                        const new_entrete = await authModel.create({
                            name: name.trim(),
                            email: email.trim(),
                            password: await bcrypt.hash(password.trim(), 10),
                            role: 'entrete',

                            raiSocEntRe: raiSocEntRe.trim(),
                            numTelEntRe: numTelEntRe.trim(),
                            formJurEntRe: formJurEntRe.trim(),
                            emailEntRe: emailEntRe.trim(),
                            adresseEntRe: adresseEntRe.trim(),
                            villeEntRe: villeEntRe.trim(),
                            codePostalEntRe: codePostalEntRe.trim(),
                            siteWebEntRe: siteWebEntRe.trim(),
                            montCapEntRe: montCapEntRe.trim(),
                            tauxTVAEntRe: tauxTVAEntRe.trim(),
                            signatureEntRe: signatureEntRe.trim(),
                            // represent par
                            nomRepParEntRe: nomRepParEntRe.trim(),
                            prenomRepParEntRe: prenomRepParEntRe.trim(),
                            genreRepParEntRe: genreRepParEntRe.trim(),
                            fonctionRepParEntRe: fonctionRepParEntRe.trim(),
                            numTelRepParEntRe: numTelRepParEntRe.trim(),
                            emailRepParEntRe: emailRepParEntRe.trim(),
                            // RGE
                            qualifiRGEEntRe: qualifiRGEEntRe.trim(),
                            numRGEEntRe: numRGEEntRe.trim(),
                            editLeRGEEntRe: editLeRGEEntRe.trim(),
                            valableJusRGEEntRe: valableJusRGEEntRe.trim(),
                            //Identifiants
                            sirenIdentEntRe: sirenIdentEntRe.trim(),
                            siretIdentEntRe: siretIdentEntRe.trim(),
                            identTVAIdentEntRe: identTVAIdentEntRe.trim(),
                            rcsIdentEntRe: rcsIdentEntRe.trim(),
                            numAPEIdentEntRe: numAPEIdentEntRe.trim(),
                            numAgrIdentEntRe: numAgrIdentEntRe.trim(),
                            numDecIdentEntRe: numDecIdentEntRe.trim(),
                            // Assurance
                            raisocAssEntRe: raisocAssEntRe.trim(),
                            adresseAssEntRe: adresseAssEntRe.trim(),
                            numPolAssEntRe: numPolAssEntRe.trim(),
                            dateEmiAssEntRe: dateEmiAssEntRe.trim(),
                            dateFinAssEntRe: dateFinAssEntRe.trim(),
                            documentsEntRe: documentsEntRe.trim(),
                            // Parametrage
                            genRevAudEntRe: genRevAudEntRe.trim(),
                            genDevisEntRe: genDevisEntRe.trim(),
                            
                            
                        })
                        return res.status(201).json({ message: 'EntRe ajouter du succès', entrete: new_entrete })
                    }
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
            }       
            get_entretes = async (req, res) => {
                try {
                    const entretes = await authModel.find({ role: "entrete" }).sort({ createdAt: -1 })
                    return res.status(200).json({ entretes })
                } catch (error) {
                    return res.status(500).json({ message: 'Erreur interne du serveur' })
                }
            }      
            get_entretes_details = async (req, res) => {
                    const { entretes_id } = req.params;
                   
                    
                    if (!mongoose.Types.ObjectId.isValid(entretes_id)) {
                        return res.status(400).json({ message: 'Invalid entretes ID' });
                    }
                
                    try {
                        const entretes = await authModel.findById(entretes_id);
                        return res.status(200).json({ entretes });
                    } catch (error) {
                        console.log(error.message);
                        return res.status(500).json({ message: 'Internal server error' });
                    }
                }        
        update_entrete_status = async (req, res) => {
                      const { role } = req.userInfo
                      const { entretes_id } = req.params
                      const { accountStatus } = req.body
              
                      if (role === 'admin') {
                          const entretes = await authModel.findByIdAndUpdate(entretes_id, { accountStatus }, { new: true })
                          return res.status(200).json({ message: 'entrete status update success', entretes })
                      } else {
                          return res.status(401).json({ message: 'You cannot access this api' })
                      }
                  }        
                update_entrete = async (req, res) => {
                    const { id } = req.params;
                    const { name, email, password,raiSocEntRe,numTelEntRe,formJurEntRe, emailEntRe,adresseEntRe, villeEntRe,codePostalEntRe,siteWebEntRe,montCapEntRe,tauxTVAEntRe,signatureEntRe,nomRepParEntRe,prenomRepParEntRe,genreRepParEntRe,fonctionRepParEntRe,numTelRepParEntRe,emailRepParEntRe,qualifiRGEEntRe,numRGEEntRe,editLeRGEEntRe,valableJusRGEEntRe,sirenIdentEntRe,siretIdentEntRe,identTVAIdentEntRe,rcsIdentEntRe,numAPEIdentEntRe,numAgrIdentEntRe,numDecIdentEntRe,raisocAssEntRe,adresseAssEntRe,numPolAssEntRe,dateEmiAssEntRe,dateFinAssEntRe,documentsEntRe,genRevAudEntRe,genDevisEntRe } = req.body;
                
                    if (!name) {
                        return res.status(400).json({ message: 'Please provide a name' });
                    }
                
                    try {
                        
                        let updateFields = { name: name.trim() };
                
                    
        
                        if (accountStatus) {
                            updateFields.accountStatus = accountStatus.trim();
                        }
    
                        if (raiSocEntRe) {
                            updateFields.raiSocEntRe = raiSocEntRe.trim();
                        }
                        if (adresseEntRe) {
                            updateFields.adresseEntRe = adresseEntRe.trim();
                        }
                        
                
                        const updatedEntrete = await authModel.findByIdAndUpdate(
                            id,
                            { $set: updateFields },
                            { new: true, runValidators: true }
                        );
                
                        if (!updatedEntrete) {
                            return res.status(404).json({ message: 'Entrete not found' });
                        }
                
                        return res.status(200).json({ message: 'Entrete updated successfully', rntrete: updatedEntrete });
                    } catch (error) {
                        return res.status(500).json({ message: 'Internal server error', error: error.message });
                    }
                };           
                delete_entrete = async (req, res) => {
                    const { id } = req.params;
            
                    try {
                        const deletedEntrete = await authModel.findByIdAndDelete(id);
                        if (!deletedEntrete) {
                            return res.status(404).json({ message: 'Entrete not found' });
                        }
                        return res.status(200).json({ message: 'Entrete deleted successfully' });
                    } catch (error) {
                        return res.status(500).json({ message: 'Internal server error' });
                    }
                };

                //Mandataires

                add_manda = async (req, res) => {

                    const {name, email, password,raiSocMan,numTelMan,formJurMan,emailMan,adresseMan,villeMan,codePostalMan,siteWebMan,montCapMan,tauxTVAMan,signatureMan,nomRepParMan,prenomRepParMan,genreRepParMan,fonctionRepParMan,numTelRepParMan,emailRepParMan,sirenIdentMan,siretIdentMan,identTVAIdentMan,rcsIdentMan,numAPEIdentMan,numAgrIdentMan,numDecIdentMan,raisocAssMan,adresseAssMan,numPolAssMan,dateEmiAssMan,dateFinAssMan } = req.body
            
                    if (!raiSocMan) {
                        return res.status(404).json({ message: 'Veuillez fournir le raiSocMan' })
                    }
                    if (!adresseMan) {
                        return res.status(404).json({ message: 'Veuillez fournir le adresseMan' })
                    }
                    if (!villeMan) {
                        return res.status(404).json({ message: 'Veuillez fournir villeMan' })
                    }
                    if (!codePostalMan) {
                        return res.status(404).json({ message: 'Veuillez fournir codePostalMan' })
                    }
                    if (!password) {
                        return res.status(404).json({ message: 'Veuillez fournir Password' })
                    }
                    
                    if (emailMan && !emailMan.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                        return res.status(404).json({ message: 'veuillez fournir emailMan form valide' })
                    }
                    if (!name) {
                        return res.status(404).json({ message: 'Veuillez fournir votre name' })
                    }
                    if (!email) {
                        return res.status(404).json({ message: 'Veuillez fournir votre email' })
                    }
                    if (email && !email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
                        return res.status(404).json({ message: 'veuillez fournir email form valide' })
                    }
                    try {
                        const manda = await authModel.findOne({ email: email.trim() })
                        if (manda) {
                            return res.status(404).json({ message: 'utilisateur existe déjà' })
                        } else {
                            const new_manda = await authModel.create({
                                name: name.trim(),
                                email: email.trim(),
                                password: await bcrypt.hash(password.trim(), 10),
                                role: 'manda',
    
                                raiSocMan: raiSocMan.trim(),
                                numTelMan: numTelMan.trim(),
                                formJurMan: formJurMan.trim(),
                                emailMan: emailMan.trim(),
                                adresseMan: adresseMan.trim(),
                                villeMan: villeMan.trim(),
                                codePostalMan: codePostalMan.trim(),
                                siteWebMan: siteWebMan.trim(),
                                montCapMan: montCapMan.trim(),
                                tauxTVAMan: tauxTVAMan.trim(),
                                signatureMan: signatureMan.trim(),
                                // represent par
                                nomRepParMan: nomRepParMan.trim(),
                                prenomRepParMan: prenomRepParMan.trim(),
                                genreRepParMan: genreRepParMan.trim(),
                                fonctionRepParMan: fonctionRepParMan.trim(),
                                numTelRepParMan: numTelRepParMan.trim(),
                                emailRepParMan: emailRepParMan.trim(),
                                // RGE
                                
                                //Identifiants
                                sirenIdentMan: sirenIdentMan.trim(),
                                siretIdentMan: siretIdentMan.trim(),
                                identTVAIdentMan: identTVAIdentMan.trim(),
                                rcsIdentMan: rcsIdentMan.trim(),
                                numAPEIdentMan: numAPEIdentMan.trim(),
                                numAgrIdentMan: numAgrIdentMan.trim(),
                                numDecIdentMan: numDecIdentMan.trim(),
                                // Assurance
                                raisocAssMan: raisocAssMan.trim(),
                                adresseAssMan: adresseAssMan.trim(),
                                numPolAssMan: numPolAssMan.trim(),
                                dateEmiAssMan: dateEmiAssMan.trim(),
                                dateFinAssMan: dateFinAssMan.trim(),
                                
                                
                            })
                            return res.status(201).json({ message: 'manda ajouter du succès', manda: new_manda })
                        }
                    } catch (error) {
                        return res.status(500).json({ message: 'Erreur interne du serveur' })
                    }
                }          
                get_mandas = async (req, res) => {
                    try {
                        const mandas = await authModel.find({ role: "manda" }).sort({ createdAt: -1 })
                        return res.status(200).json({ mandas })
                    } catch (error) {
                        return res.status(500).json({ message: 'Erreur interne du serveur' })
                    }
                }           
                get_mandas_details = async (req, res) => {
                        const { mandas_id } = req.params;
                       
                        
                        if (!mongoose.Types.ObjectId.isValid(mandas_id)) {
                            return res.status(400).json({ message: 'Invalid mandas ID' });
                        }
                    
                        try {
                            const mandas = await authModel.findById(mandas_id);
                            return res.status(200).json({ mandas });
                        } catch (error) {
                            console.log(error.message);
                            return res.status(500).json({ message: 'Internal server error' });
                        }
                    }           
            update_manda_status = async (req, res) => {
                          const { role } = req.userInfo
                          const { mandas_id } = req.params
                          const { accountStatus } = req.body
                  
                          if (role === 'admin') {
                              const mandas = await authModel.findByIdAndUpdate(mandas_id, { accountStatus }, { new: true })
                              return res.status(200).json({ message: 'manda status update success', mandas })
                          } else {
                              return res.status(401).json({ message: 'You cannot access this api' })
                          }
                      }           
                    update_manda = async (req, res) => {
                        const { id } = req.params;
                        const { name, email, password,raiSocMan,numTelMan,formJurMan,emailMan,adresseMan,villeMan,codePostalMan,siteWebMan,montCapMan,tauxTVAMan,signatureMan,nomRepParMan,prenomRepParMan,genreRepParMan,fonctionRepParMan,numTelRepParMan,emailRepParMan,sirenIdentMan,siretIdentMan,identTVAIdentMan,rcsIdentMan,numAPEIdentMan,numAgrIdentMan,numDecIdentMan,raisocAssMan,adresseAssMan,numPolAssMan,dateEmiAssMan,dateFinAssMan,documentsMan } = req.body;
                    
                        if (!name) {
                            return res.status(400).json({ message: 'Please provide a name' });
                        }
                    
                        try {
                            
                            let updateFields = { name: name.trim() };
                    
                        
            
                            if (accountStatus) {
                                updateFields.accountStatus = accountStatus.trim();
                            }
        
                            if (raiSocEntRe) {
                                updateFields.raiSocEntRe = raiSocEntRe.trim();
                            }
                            if (adresseEntRe) {
                                updateFields.adresseEntRe = adresseEntRe.trim();
                            }
                            
                    
                            const updatedManda = await authModel.findByIdAndUpdate(
                                id,
                                { $set: updateFields },
                                { new: true, runValidators: true }
                            );
                    
                            if (!updatedManda) {
                                return res.status(404).json({ message: 'manda not found' });
                            }
                    
                            return res.status(200).json({ message: 'manda updated successfully', manda: updatedManda });
                        } catch (error) {
                            return res.status(500).json({ message: 'Internal server error', error: error.message });
                        }
                    };               
                    delete_manda = async (req, res) => {
                        const { id } = req.params;
                
                        try {
                            const deletedManda = await authModel.findByIdAndDelete(id);
                            if (!deletedManda) {
                                return res.status(404).json({ message: 'manda not found' });
                            }
                            return res.status(200).json({ message: 'manda deleted successfully' });
                        } catch (error) {
                            return res.status(500).json({ message: 'Internal server error' });
                        }
                    };
}

module.exports = new authController()