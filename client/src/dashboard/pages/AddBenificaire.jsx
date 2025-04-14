import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddBenificaire = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    genre:"",
    nomBeni:"",
    prenomBeni:"",
    datenaiBeni:"",
    emailBeni:"",
    emailAnah:"",
    passwordAnah:"",
    villeBeni:"",
    numBeni:"",
    voieBeni:"",
    codepostalBeni:"",
    etageBeni:"",
    escalierBeni:"",
    communeBeni:"",
    porteBeni:"",
    batimentBeni:"",
    numTelBeni:"",
    numPortableBeni:"",
    RIBBeni:"",
    IBANBeni:"",
    ZoneClimaBeni:"",
    nomprenomPerConf:"",
    enQualitPerConf:"",
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
      const {data} = await axios.post(`${base_url}/api/benificaire/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/benificaires')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Add Bénificaires</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/benificaires'>Bénificaires</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className="flex flex-col gap-y-2">
              <label htmlFor="genre" className="text-md font-medium text-gray-600">
              Genre*
              </label>
              <select
                required
                name="genre"
                id="genre"
                value={state.genre}
                onChange={inputHandler}
                className="px-3 py-2 rounded-md border border-gray-300 focus:border-green-500 h-10"
              >
                <option value="">-- Sélectionner Genre --</option>
                <option value="M.">M.</option>
                <option value="Mme.">Mme.</option>
              </select>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomBeni'>Nom *</label>
              <input onChange={inputHandler} value={state.nomBeni} required type='text' placeholder='Nom' name='nomBeni' id='nomBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prenomBeni'>Prénom *</label>
              <input onChange={inputHandler} value={state.prenomBeni} required type='text' placeholder='Prénom' name='prenomBeni' id='prenomBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='datenaiBeni'>Date de naissance </label>
              <input onChange={inputHandler} value={state.datenaiBeni} type='date' placeholder='Date de naissance' name='datenaiBeni' id='datenaiBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailBeni'>Email *</label>
              <input onChange={inputHandler} value={state.emailBeni} required type='email' placeholder='Email' name='emailBeni' id='emailBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailAnah'>Email Anah </label>
              <input onChange={inputHandler} value={state.emailAnah} type='email' placeholder='Email Anah' name='emailAnah' id='emailAnah' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='passwordAnah'>Mot de passe Anah </label>
              <input onChange={inputHandler} value={state.passwordAnah} type='password' placeholder='Mot de passe Anah' name='passwordAnah' id='passwordAnah' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='villeBeni'>Ville  *</label>
              <input onChange={inputHandler} value={state.villeBeni} required type='text' placeholder='Ville' name='villeBeni' id='villeBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numBeni'>N ° *</label>
              <input onChange={inputHandler} value={state.numBeni} required type='text' placeholder='N °' name='numBeni' id='numBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='voieBeni'>Voie *</label>
              <input onChange={inputHandler} value={state.voieBeni} required type='text' placeholder='Voie' name='voieBeni' id='voieBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='codepostalBeni'>Code postal *</label>
              <input onChange={inputHandler} value={state.codepostalBeni} required type='text' placeholder='codepostalBeni' name='codepostalBeni' id='codepostalBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='etageBeni'>Étage *</label>
              <input onChange={inputHandler} value={state.etageBeni} required type='text' placeholder='Étage' name='etageBeni' id='etageBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='escalierBeni'>Escalier </label>
              <input onChange={inputHandler} value={state.escalierBeni}  type='text' placeholder='Escalier' name='escalierBeni' id='escalierBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='communeBeni'>Commune </label>
              <input onChange={inputHandler} value={state.communeBeni}  type='text' placeholder='Commune' name='communeBeni' id='communeBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='porteBeni'>Porte </label>
              <input onChange={inputHandler} value={state.porteBeni}  type='text' placeholder='Porte' name='porteBeni' id='porteBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='batimentBeni'>Bâtiment *</label>
              <input onChange={inputHandler} value={state.batimentBeni} required type='text' placeholder='Bâtiment' name='batimentBeni' id='batimentBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelBeni'>Numéro de téléphone *</label>
              <input onChange={inputHandler} value={state.numTelBeni} required type='text' placeholder='Numéro de téléphone' name='numTelBeni' id='numTelBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numPortableBeni'>Portable *</label>
              <input onChange={inputHandler} value={state.numPortableBeni} required type='text' placeholder='Portable' name='numPortableBeni' id='numPortableBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='RIBBeni'>RIB </label>
              <input onChange={inputHandler} value={state.RIBBeni}  type='text' placeholder='00000 00000 00000000000' name='RIBBeni' id='porteBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='IBANBeni'>IBANBeni </label>
              <input onChange={inputHandler} value={state.IBANBeni}  type='text' placeholder='FR00 0000 0000 0000 0000 0000 0000' name='IBANBeni' id='IBANBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='ZoneClimaBeni'>Zone climatique </label>
              <input onChange={inputHandler} value={state.ZoneClimaBeni}  type='text' placeholder='Zone climatique' name='ZoneClimaBeni' id='ZoneClimaBeni' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomprenomPerConf'>Nom et prénom</label>
              <input onChange={inputHandler} value={state.nomprenomPerConf}  type='text' placeholder='Nom et prénom' name='nomprenomPerConf' id='nomprenomPerConf' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='enQualitPerConf'>En qualité de</label>
              <input onChange={inputHandler} value={state.enQualitPerConf} type='text' placeholder='En qualité de' name='enQualitPerConf' id='enQualitPerConf' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
          </div>

          
          
          

            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Bénificaire'}</button>
            </div>
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddBenificaire