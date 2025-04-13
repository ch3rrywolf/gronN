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
}

module.exports = new authController()