const authModel = require('../models/authModel')
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

            const {name, email, nomIns,prenomIns, roleIns, superviseur,villeIns,adresseIns,codePostalIns,emailIns,numTelIns, password } = req.body
    
            if (!nomIns) {
                return res.status(404).json({ message: 'Veuillez fournir le nom' })
            }
            if (!prenomIns) {
                return res.status(404).json({ message: 'Veuillez fournir le prenom' })
            }
            if (!roleIns) {
                return res.status(404).json({ message: 'Veuillez fournir le roleIns' })
            }
            if (!password) {
                return res.status(404).json({ message: 'Veuillez fournir votre mot de passe' })
            }
            
            if (emailIns && !emailIns.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
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
                const inspecteur = await authModel.findOne({ email: email.trim() })
                if (inspecteur) {
                    return res.status(404).json({ message: 'utilisateur existe déjà' })
                } else {
                    const new_inspecteur = await authModel.create({
                        name: name.trim(),
                        email: email.trim(),
                        password: await bcrypt.hash(password.trim(), 10),
                        role: 'inspecteur',
                        nomIns: nomIns.trim(),
                        prenomIns: prenomIns.trim(),
                        roleIns: roleIns.trim(),
                        superviseur: superviseur.trim(),
                        villeIns: villeIns.trim(),
                        adresseIns: adresseIns.trim(),
                        codePostalIns: codePostalIns.trim(),
                        emailIns: emailIns.trim(),
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
                const { name, email, password, role,accountStatus,nomIns,prenomIns,roleIns,superviseur,villeIns,adresseIns,codePostalIns,emailIns,numTelIns } = req.body;
            
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

                    if (nomIns) {
                        updateFields.nomIns = nomIns.trim();
                    }
                    if (prenomIns) {
                        updateFields.prenomIns = prenomIns.trim();
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
                    if (emailIns) {
                        updateFields.emailIns = emailIns.trim();
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
                            documentsEntRe: documentsEntRe.trim(),
                            
                            
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
}

module.exports = new authController()