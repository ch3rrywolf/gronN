import React, {useContext,  useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddEntrete = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    name:"",
    email:"",
    password:"",
    raiSocEntRe: "",
                            numTelEntRe: "",
                            formJurEntRe: "",
                            emailEntRe: "",
                            adresseEntRe: "",
                            villeEntRe: "",
                            codePostalEntRe: "",
                            siteWebEntRe: "",
                            montCapEntRe: "",
                            tauxTVAEntRe: "",
                            signatureEntRe: "",
                            // represent par
                            nomRepParEntRe: "",
                            prenomRepParEntRe: "",
                            genreRepParEntRe: "",
                            fonctionRepParEntRe: "",
                            numTelRepParEntRe: "",
                            emailRepParEntRe: "",
                            // RGE
                            qualifiRGEEntRe: "",
                            numRGEEntRe: "",
                            editLeRGEEntRe: "",
                            valableJusRGEEntRe: "",
                            //Identifiants
                            sirenIdentEntRe: "",
                            siretIdentEntRe: "",
                            identTVAIdentEntRe: "",
                            rcsIdentEntRe: "",
                            numAPEIdentEntRe: "",
                            numAgrIdentEntRe: "",
                            numDecIdentEntRe: "",
                            // Assurance
                            raisocAssEntRe: "",
                            adresseAssEntRe: "",
                            numPolAssEntRe: "",
                            dateEmiAssEntRe: "",
                            dateFinAssEntRe: "",
                            documentsEntRe: "",
                            // Parametrage
                            genRevAudEntRe: "",
                            genDevisEntRe: "",
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
      const {data} = await axios.post(`${base_url}/api/entrete/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/entretes')
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
        <h2 className='text-xl font-medium'>Add Entreprise retenue</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/entretes'>Entreprise</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
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
              <label className='text-md font-medium text-gray-600' htmlFor='raiSocEntRe'>raiSocEntRe*</label>
              <input onChange={inputHandler} value={state.raiSocEntRe} required type='text' placeholder='raiSocEntRe' name='raiSocEntRe' id='raiSocEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
           
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelEntRe'>numTelEntRe*</label>
              <input onChange={inputHandler} value={state.numTelEntRe} required type='text' placeholder='numTelEntRe' name='numTelEntRe' id='numTelEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='formJurEntRe'>formJurEntRe*</label>
              <input onChange={inputHandler} value={state.formJurEntRe} required type='password' placeholder='formJurEntRe' name='formJurEntRe' id='formJurEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailEntRe'>emailEntRe*</label>
              <input onChange={inputHandler} value={state.emailEntRe} required type='email' placeholder='emailEntRe' name='emailEntRe' id='emailEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseEntRe'>adresseEntRe*</label>
              <input onChange={inputHandler} value={state.adresseEntRe} required type='text' placeholder='Password' name='adresseEntRe' id='adresseEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='villeEntRe'>villeEntRe*</label>
              <input onChange={inputHandler} value={state.villeEntRe} required type='text' placeholder='villeEntRe' name='villeEntRe' id='villeEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de Passe*</label>
              <input onChange={inputHandler} value={state.password} required type='password' placeholder='Password' name='password' id='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='codePostalEntRe'>codePostalEntRe*</label>
              <input onChange={inputHandler} value={state.codePostalEntRe} required type='text' placeholder='codePostalEntRe' name='codePostalEntRe' id='codePostalEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='siteWebEntRe'>siteWebEntRe</label>
              <input onChange={inputHandler} value={state.siteWebEntRe} required type='text' placeholder='siteWebEntRe' name='siteWebEntRe' id='siteWebEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='montCapEntRe'>montCapEntRe</label>
              <input onChange={inputHandler} value={state.montCapEntRe} required type='text' placeholder='montCapEntRe' name='montCapEntRe' id='montCapEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tauxTVAEntRe'>Taux TVA</label>
              <input onChange={inputHandler} value={state.tauxTVAEntRe} required type='text' placeholder='tauxTVAEntRe' name='tauxTVAEntRe' id='tauxTVAEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='signatureEntRe'>signatureEntRe*</label>
              <input onChange={inputHandler} value={state.signatureEntRe}  type='file' placeholder='signatureEntRe' name='signatureEntRe' id='signatureEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>

            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>REPRESENTE PAR</label>
            </div>
            
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomRepParEntRe'>Nom</label>
              <input onChange={inputHandler} value={state.nomRepParEntRe}  type='text' placeholder='nomRepParEntRe' name='nomRepParEntRe' id='nomRepParEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prenomRepParEntRe'>Prénom</label>
              <input onChange={inputHandler} value={state.prenomRepParEntRe}  type='text' placeholder='prenomRepParEntRe' name='prenomRepParEntRe' id='prenomRepParEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='genreRepParEntRe'>Genre</label>
              <input onChange={inputHandler} value={state.genreRepParEntRe}  type='text' placeholder='genreRepParEntRe' name='genreRepParEntRe' id='genreRepParEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='fonctionRepParEntRe'>Fonction</label>
              <input onChange={inputHandler} value={state.fonctionRepParEntRe}  type='text' placeholder='fonctionRepParEntRe' name='fonctionRepParEntRe' id='fonctionRepParEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelRepParEntRe'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelRepParEntRe} required type='text' placeholder='numTelRepParEntRe' name='numTelRepParEntRe' id='numTelRepParEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailRepParEntRe'>Email</label>
              <input onChange={inputHandler} value={state.emailRepParEntRe} required type='text' placeholder='emailRepParEntRe' name='emailRepParEntRe' id='emailRepParEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            


            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md text-left font-medium bg-green-300 text-gray-600' htmlFor=''>RGE</label>
            </div>
            
            </div>

            <div className='grid grid-cols-4 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='qualifiRGEEntRe'>Qualification</label>
              <input onChange={inputHandler} value={state.qualifiRGEEntRe}  type='text' placeholder='qualifiRGEEntRe' name='qualifiRGEEntRe' id='qualifiRGEEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numRGEEntRe'>Numéro RGE</label>
              <input onChange={inputHandler} value={state.numRGEEntRe}  type='text' placeholder='numRGEEntRe' name='numRGEEntRe' id='numRGEEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='editLeRGEEntRe'>Edité le</label>
              <input onChange={inputHandler} value={state.editLeRGEEntRe}  type='text' placeholder='editLeRGEEntRe' name='editLeRGEEntRe' id='editLeRGEEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='valableJusRGEEntRe'>VALABLE JUSQU'AU</label>
              <input onChange={inputHandler} value={state.valableJusRGEEntRe}  type='date' placeholder='valableJusRGEEntRe' name='valableJusRGEEntRe' id='valableJusRGEEntRe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
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

export default AddEntrete;