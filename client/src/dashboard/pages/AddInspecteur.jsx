import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddInspecteur = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    name:"",
    email:"",
    password:"",
    nomIns:"",
    prenomIns:"",
    roleIns:"",
    superviseur:"",
    villeIns:"",
    adresseIns:"",
    codePostalIns:"",
    emailIns:"",
    numTelIns:"",
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
      const {data} = await axios.post(`${base_url}/api/inspecteur/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/inspecteurs')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Add Inspecteur</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/inspecteurs'>Inspecteurs</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>Nom et Prénom*</label>
              <input onChange={inputHandler} value={state.name} required type='text' placeholder='Nom et Prénom' name='name' id='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
           
          </div>
          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input onChange={inputHandler} value={state.email} required type='email' placeholder='exmple@gmail.com' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de Passe*</label>
              <input onChange={inputHandler} value={state.password} required type='password' placeholder='Password' name='password' id='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomIns'>Nom *</label>
              <input onChange={inputHandler} value={state.nomIns} required type='text' placeholder='nomIns' name='nomIns' id='nomIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='prenomIns'>Prénom *</label>
              <input onChange={inputHandler} value={state.prenomIns} required type='text' placeholder='prenomIns' name='prenomIns' id='prenomIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='nomIns'>Rôle *</label>
              <input onChange={inputHandler} value={state.roleIns} required type='text' placeholder='roleIns' name='roleIns' id='roleIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='superviseur'>Superviseur</label>
              <input onChange={inputHandler} value={state.superviseur}  type='text' placeholder='superviseur' name='superviseur' id='superviseur' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='villeIns'>Ville</label>
              <input onChange={inputHandler} value={state.villeIns}  type='text' placeholder='villeIns' name='villeIns' id='villeIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseIns'>Adresse</label>
              <input onChange={inputHandler} value={state.adresseIns}  type='text' placeholder='adresseIns' name='adresseIns' id='adresseIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='codePostalIns'>Code postal</label>
              <input onChange={inputHandler} value={state.codePostalIns}  type='text' placeholder='codePostalIns' name='codePostalIns' id='codePostalIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='emailIns'>Email</label>
              <input onChange={inputHandler} value={state.emailIns}  type='email' placeholder='emailIns' name='emailIns' id='emailIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelIns'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelIns} type='text' placeholder='numTelIns' name='numTelIns' id='numTelIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            
            </div>

            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Inspecteur'}</button>
            </div>
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddInspecteur