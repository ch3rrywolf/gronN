import React, {useContext,  useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddManda = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    name:"",
    email:"",
    password:"",
    raiSocMan: "",
    numTelMan: "",
    formJurMan: "",
    emailMan: "",
    adresseMan: "",
    villeMan: "",
    codePostalMan: "",
    siteWebMan: "",
    montCapMan: "",
    tauxTVAMan: "",
    signatureMan: "",
                            // represent par
                            nomRepParMan: "",
                            prenomRepParMan: "",
                            genreRepParMan: "",
                            fonctionRepParMan: "",
                            numTelRepParMan: "",
                            emailRepParMan: "",
                            // RGE
                            
                            //Identifiants
                            sirenIdentMan: "",
                            siretIdentMan: "",
                            identTVAIdentMan: "",
                            rcsIdentMan: "",
                            numAPEIdentMan: "",
                            numAgrIdentMan: "",
                            numDecIdentMan: "",
                            // Assurance
                            raisocAssMan: "",
                            adresseAssMan: "",
                            numPolAssMan: "",
                            dateEmiAssMan: "",
                            dateFinAssMan: "",
  })

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const [loader, setLoader] = useState(false)

  const submit = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const {data} = await axios.post(`${base_url}/api/manda/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/mandas')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  const lotDocuments = [
    {
      title: "RES 010",
      section: 1
    },
    
  ];

  

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Mandataire</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/mandas'>Mandataires</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>

        <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>INFORMATIONS GENERALES</label>
            </div>
            
            </div>


            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='raiSocMan'>Raison Social *</label>
              <input onChange={inputHandler} value={state.raiSocMan} required type='text' placeholder='raiSocMan' name='raiSocMan' id='raiSocMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelMan'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelMan} type='text' placeholder='numTelMan' name='numTelMan' id='numTelMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='formJurMan'>Forme juridique</label>
              <input onChange={inputHandler} value={state.formJurMan} type='text' placeholder='formJurMan' name='formJurMan' id='formJurMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailMan'>Email</label>
              <input onChange={inputHandler} value={state.emailMan} required type='email' placeholder='emailMan' name='emailMan' id='emailMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseMan'>Adresse *</label>
              <input onChange={inputHandler} value={state.adresseMan} required type='text' placeholder='adresseMan' name='adresseMan' id='adresseMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='villeMan'>Ville *</label>
              <input onChange={inputHandler} value={state.villeMan} required type='text' placeholder='villeMan' name='villeMan' id='villeMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='codePostalMan'>Code postal*</label>
              <input onChange={inputHandler} value={state.codePostalMan} required type='text' placeholder='codePostalMan' name='codePostalMan' id='codePostalMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='siteWebMan'>Site Web</label>
              <input onChange={inputHandler} value={state.siteWebMan} type='text' placeholder='siteWebMan' name='siteWebMan' id='siteWebMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='montCapMan'>Montant du capital</label>
              <input onChange={inputHandler} value={state.montCapMan}  type='text' placeholder='montCapMan' name='montCapMan' id='montCapMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tauxTVAMan'>Taux TVA</label>
              <input onChange={inputHandler} value={state.tauxTVAMan}  type='text' placeholder='tauxTVAMan' name='tauxTVAMan' id='tauxTVAMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='signatureMan'>Signature</label>
              <input onChange={inputHandler} value={state.signatureMan}  type='file' placeholder='signatureMan' name='signatureMan' id='signatureMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>

            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>REPRESENTE PAR</label>
            </div>
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomRepParMan'>Nom</label>
              <input onChange={inputHandler} value={state.nomRepParMan}  type='text' placeholder='nomRepParMan' name='nomRepParMan' id='nomRepParMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prenomRepParMan'>Prénom</label>
              <input onChange={inputHandler} value={state.prenomRepParMan}  type='text' placeholder='prenomRepParMan' name='prenomRepParMan' id='prenomRepParMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='genreRepParMan'>Genre</label>
              <input onChange={inputHandler} value={state.genreRepParMan}  type='text' placeholder='genreRepParMan' name='genreRepParMan' id='genreRepParMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='fonctionRepParMan'>Fonction</label>
              <input onChange={inputHandler} value={state.fonctionRepParMan}  type='text' placeholder='fonctionRepParMan' name='fonctionRepParMan' id='fonctionRepParMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelRepParMan'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelRepParMan}  type='text' placeholder='numTelRepParMan' name='numTelRepParMan' id='numTelRepParMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailRepParMan'>Email</label>
              <input onChange={inputHandler} value={state.emailRepParMan}  type='text' placeholder='emailRepParMan' name='emailRepParMan' id='emailRepParMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>
        


            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>IDENTIFIANTS</label>
            </div>
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='sirenIdentMan'>SIREN</label>
              <input onChange={inputHandler} value={state.sirenIdentMan}  type='text' placeholder='sirenIdentMan' name='sirenIdentMan' id='sirenIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='siretIdentMan'>SIRET *</label>
              <input onChange={inputHandler} value={state.siretIdentMan} required type='text' placeholder='siretIdentMan' name='siretIdentMan' id='siretIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>
            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='identTVAIdentMan'>Identifiant TVA</label>
              <input onChange={inputHandler} value={state.identTVAIdentMan}  type='text' placeholder='identTVAIdentMan' name='identTVAIdentMan' id='identTVAIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='rcsIdentMan'>RCS</label>
              <input onChange={inputHandler} value={state.rcsIdentMan}  type='text' placeholder='rcsIdentMan' name='rcsIdentMan' id='rcsIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numAPEIdentMan'>Numéro APE</label>
              <input onChange={inputHandler} value={state.numAPEIdentMan}  type='text' placeholder='numAPEIdentMan' name='numAPEIdentMan' id='numAPEIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numAgrIdentMan'>Numéro d'agrément</label>
              <input onChange={inputHandler} value={state.numAgrIdentMan}  type='text' placeholder='numAgrIdentMan' name='numAgrIdentMan' id='numAgrIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numDecIdentMan'>Numéro décennal</label>
              <input onChange={inputHandler} value={state.numDecIdentMan}  type='text' placeholder='numDecIdentMan' name='numDecIdentMan' id='numDecIdentMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>

            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>ASSURANCE</label>
            </div>
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='raisocAssMan'>Raison Sociale</label>
              <input onChange={inputHandler} value={state.raisocAssMan}  type='text' placeholder='raisocAssMan' name='raisocAssMan' id='raisocAssMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseAssMan'>Adresse</label>
              <input onChange={inputHandler} value={state.adresseAssMan}  type='text' placeholder='adresseAssMan' name='adresseAssMan' id='adresseAssMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numPolAssMan'>Numéro police</label>
              <input onChange={inputHandler} value={state.numPolAssMan}  type='text' placeholder='numPolAssMan' name='numPolAssMan' id='numPolAssMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dateEmiAssMan'>Date d'émission</label>
              <input onChange={inputHandler} value={state.dateEmiAssMan}  type='date' placeholder='dateEmiAssMan' name='dateEmiAssMan' id='dateEmiAssMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dateFinAssMan'>Date de fin</label>
              <input onChange={inputHandler} value={state.dateFinAssMan}  type='date' placeholder='dateFinAssMan' name='dateFinAssMan' id='dateFinAssMan' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            </div>

            





            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>IDENTIFIANT PLATEFORME</label>
            </div>
            
            </div>


            <div className='grid grid-cols-1 gap-x-8 mb-3'>

          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>name*</label>
              <input onChange={inputHandler} value={state.name} required type='text' placeholder='name' name='name' id='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>email*</label>
              <input onChange={inputHandler} value={state.email} required type='email' placeholder='email' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de Passe*</label>
              <input onChange={inputHandler} value={state.password} required type='password' placeholder='Password' name='password' id='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
           
          </div>


            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Entreprise retenue'}</button>
            </div>
            </div>
        </form>
      </div>


    </div>
  )
}

export default AddManda;