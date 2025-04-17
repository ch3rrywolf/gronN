import React, {useContext,  useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddAuditeur = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    name:"",
    email:"",
    password:"",
    raiSocAud: "",
    numTelAud: "",
    formJurAud: "",
    adresseAud: "",
    villeAud: "",
    codePostalAud: "",
    siteWebAud: "",
    montCapAud: "",
                            nomRepParAud: "",
                            prenomRepParAud: "",
                            genreRepParAud: "",
                            fonctionRepParAud: "",
                            numTelRepParAud: "",
                            emailRepParAud: "",
                            sirenIdentAud: "",
                            siretIdentAud: "",
                            identTVAIdentAud: "",
                            rcsIdentAud: "",
                            numAPEIdentAud: "",
                            numAgrIdentAud: "",
                            numDecIdentAud: "",
                            raisocAssAud: "",
                            adresseAssAud: "",
                            numPolAssAud: "",
                            dateEmiAssAud: "",
                            dateFinAssAud: "",
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
      const {data} = await axios.post(`${base_url}/api/auditeur/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/auditeurs')
    } catch (error) {
      setLoader(false)
      toast.error(error?.response?.data?.message || 'Une erreur est survenue')
    }
  }

  

 

  return (
     <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
           <div className='bg-white rounded-lg shadow-lg w-full max-w-4xl border border-gray-300'>
       
             <div className='flex justify-between items-center p-4 border-b border-gray-200'>
               <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Ajoute Auditeur</h2>
               <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/benificaires'>Auditeurs</Link>
             </div>
      <div className='p-4'>
        <form onSubmit={submit}>

        <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATION GÉNÉRALE</summary>


            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='raiSocAud'>Raison Social *</label>
              <input onChange={inputHandler} value={state.raiSocAud} required type='text' placeholder='Raison Social' name='raiSocAud' id='raiSocAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelAud'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelAud} type='text' placeholder='Numéro de téléphone' name='numTelAud' id='numTelAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='formJurAud'>Forme juridique</label>
              <input onChange={inputHandler} value={state.formJurAud} type='text' placeholder='Forme juridique' name='formJurAud' id='formJurAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>

            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseAud'>Adresse *</label>
              <input onChange={inputHandler} value={state.adresseAud} required type='text' placeholder='Adresse' name='adresseAud' id='adresseAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='villeAud'>Ville *</label>
              <input onChange={inputHandler} value={state.villeAud} required type='text' placeholder='Ville' name='villeAud' id='villeAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='codePostalAud'>Code postal*</label>
              <input onChange={inputHandler} value={state.codePostalAud} required type='text' placeholder='Code postal' name='codePostalAud' id='codePostalAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='siteWebAud'>Site Web</label>
              <input onChange={inputHandler} value={state.siteWebAud} type='text' placeholder='Site Web' name='siteWebAud' id='siteWebAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='montCapAud'>Montant du capital</label>
              <input onChange={inputHandler} value={state.montCapAud}  type='text' placeholder='Montant du capital' name='montCapAud' id='montCapAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>
            </details>

          

            <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>REPRESENTE PAR</summary>


            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomRepParAud'>Nom</label>
              <input onChange={inputHandler} value={state.nomRepParAud}  type='text' placeholder='nomRepParAud' name='nomRepParAud' id='nomRepParAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prenomRepParAud'>Prénom</label>
              <input onChange={inputHandler} value={state.prenomRepParAud}  type='text' placeholder='prenomRepParAud' name='prenomRepParAud' id='prenomRepParAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='genreRepParAud'>Genre</label>
              <input onChange={inputHandler} value={state.genreRepParAud}  type='text' placeholder='genreRepParAud' name='genreRepParAud' id='genreRepParAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='fonctionRepParAud'>Fonction</label>
              <input onChange={inputHandler} value={state.fonctionRepParAud}  type='text' placeholder='fonctionRepParAud' name='fonctionRepParAud' id='fonctionRepParAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelRepParAud'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelRepParAud}  type='text' placeholder='numTelRepParAud' name='numTelRepParAud' id='numTelRepParAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailRepParAud'>Email</label>
              <input onChange={inputHandler} value={state.emailRepParAud}  type='text' placeholder='emailRepParEntRe' name='emailRepParAud' id='emailRepParAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>
</details>
            

<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>IDENTIFIANTS</summary>


            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='sirenIdentAud'>SIREN</label>
              <input onChange={inputHandler} value={state.sirenIdentAud}  type='text' placeholder='sirenIdentAud' name='sirenIdentAud' id='sirenIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='siretIdentAud'>SIRET *</label>
              <input onChange={inputHandler} value={state.siretIdentAud} required type='text' placeholder='siretIdentAud' name='siretIdentAud' id='siretIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>
            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='identTVAIdentAud'>Identifiant TVA</label>
              <input onChange={inputHandler} value={state.identTVAIdentAud}  type='text' placeholder='identTVAIdentAud' name='identTVAIdentAud' id='identTVAIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='rcsIdentAud'>RCS</label>
              <input onChange={inputHandler} value={state.rcsIdentAud}  type='text' placeholder='rcsIdentAud' name='rcsIdentAud' id='rcsIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numAPEIdentAud'>Numéro APE</label>
              <input onChange={inputHandler} value={state.numAPEIdentAud}  type='text' placeholder='numAPEIdentAud' name='numAPEIdentAud' id='numAPEIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numAgrIdentAud'>Numéro d'agrément</label>
              <input onChange={inputHandler} value={state.numAgrIdentAud}  type='text' placeholder='numAgrIdentAud' name='numAgrIdentAud' id='numAgrIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numDecIdentAud'>Numéro décennal</label>
              <input onChange={inputHandler} value={state.numDecIdentAud}  type='text' placeholder='numDecIdentAud' name='numDecIdentAud' id='numDecIdentAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>
            </details>


            <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>ASSURANCE</summary>


            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='raisocAssAud'>Raison Sociale</label>
              <input onChange={inputHandler} value={state.raisocAssAud}  type='text' placeholder='raisocAssAud' name='raisocAssAud' id='raisocAssAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseAssAud'>Adresse</label>
              <input onChange={inputHandler} value={state.adresseAssAud}  type='text' placeholder='adresseAssAud' name='adresseAssAud' id='adresseAssAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numPolAssAud'>Numéro police</label>
              <input onChange={inputHandler} value={state.numPolAssAud}  type='text' placeholder='numPolAssAud' name='numPolAssAud' id='numPolAssAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dateEmiAssAud'>Date d'émission</label>
              <input onChange={inputHandler} value={state.dateEmiAssAud}  type='date' placeholder='dateEmiAssAud' name='dateEmiAssAud' id='dateEmiAssAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='dateFinAssAud'>Date de fin</label>
              <input onChange={inputHandler} value={state.dateFinAssAud}  type='date' placeholder='dateFinAssAud' name='dateFinAssAud' id='dateFinAssAud' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            </div>

            </details>



<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATION Session Auditeur</summary>



  <div className='flex flex-col gap-y-2'>
  <label className='text-md font-medium text-gray-600' htmlFor='name'>Nom *</label>
  <input onChange={inputHandler} value={state.name} required type='text' name='name' placeholder='Nom' id='name' className='px-3 py-2 rounded-md border h-10' />
</div>

<div className='flex flex-col gap-y-2'>
  <label className='text-md font-medium text-gray-600' htmlFor='email'>Email *</label>
  <input onChange={inputHandler} value={state.email} required type='email' name='email' placeholder='Email' id='email' className='px-3 py-2 rounded-md border h-10' />
</div>

<div className='flex flex-col gap-y-2'>
  <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de passe *</label>
  <input onChange={inputHandler} value={state.password} required type='password' name='password' placeholder='Mot de passe' id='password' className='px-3 py-2 rounded-md border h-10' />
</div>

</details>
            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Auditeur'}</button>
            </div>
            </div>

        </form>
      </div>


    </div>
    </div>
  )
}

export default AddAuditeur;