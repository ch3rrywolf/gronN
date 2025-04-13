import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddDossier = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    demandeurNom:"",
    demandeurPreNom:"",
    demandeurAdresse:"",
    numero:"",
    ville:"",
    voie:"",
    demandeurCommune:"",
    demandeurCodePostal:"",
    batiment:"",
    etage:"",
    porte:"",
    escalier:"",
    tel:"",
    mel:"",
    numDossier:"",
    
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
      const {data} = await axios.post(`${base_url}/api/dossiers/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/dossiers')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Ajoute Dossier</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='demandeurNom'>Demandeur Nom*</label>
              <input onChange={inputHandler} value={state.demandeurNom} required type='text' placeholder='...................' name='demandeurNom' id='demandeurNom' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            

            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='demandeurPreNom'>Demandeur PreNom*</label>
              <input onChange={inputHandler} value={state.demandeurPreNom} required type='text' placeholder='...................' name='demandeurPreNom' id='demandeurPreNom' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>
          
          <div className='grid grid-cols-6 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='demandeurAdresse'>Demandeur Adresse*</label>
              <input onChange={inputHandler} value={state.demandeurAdresse} required type='text' placeholder='...................' name='demandeurAdresse' id='demandeurAdresse' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numero'>N°*</label>
              <input onChange={inputHandler} value={state.numero} required type='text' placeholder='...................' name='numero' id='numero' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='ville'>Ville*</label>
              <input onChange={inputHandler} value={state.ville} required type='text' placeholder='...................' name='ville' id='ville' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='voie'>Voie*</label>
              <input onChange={inputHandler} value={state.voie} required type='text' placeholder='...................' name='voie' id='voie' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='demandeurCodePostal'>Demandeur Code Postal*</label>
              <input onChange={inputHandler} value={state.demandeurCodePostal} required type='text' placeholder='|__|__|__|__|__|' name='demandeurCodePostal' id='demandeurCodePostal' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='demandeurCommune'>Demandeur Commune*</label>
              <input onChange={inputHandler} value={state.demandeurCommune} required type='text' placeholder='...................' name='demandeurCommune' id='demandeurCommune' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='batiment'>Bâtiment</label>
              <input onChange={inputHandler} value={state.batiment}  type='text' placeholder='...................' name='batiment' id='batiment' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='etage'>Etage</label>
              <input onChange={inputHandler} value={state.etage}  type='text'  placeholder='...................' name='etage' id='etage' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='porte'>Porte</label>
              <input onChange={inputHandler} value={state.porte}  type='text' placeholder='...................' name='porte' id='porte' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='escalier'>Escalier*</label>
              <input onChange={inputHandler} value={state.escalier}  type='text'  placeholder='...................' name='escalier' id='escalier' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tel'>Tél*</label>
              <input onChange={inputHandler} value={state.tel} required type='text' placeholder='|__|__|__|__|__|__|__|__|__|__|' name='tel' id='tel' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>            
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='mel'>Mèl*</label>
              <input onChange={inputHandler} value={state.mel} required type='email' placeholder="exp@gmail.com" name='mel' id='mel' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numDossier'>N° Dossier*</label>
              <input onChange={inputHandler} value={state.numDossier} required type='text' placeholder="|__|__|__|__|__|__|__|__|__|" name='numDossier' id='numDossier' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          
          </div>

          <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Ajoute Dossier'}</button>
          </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddDossier