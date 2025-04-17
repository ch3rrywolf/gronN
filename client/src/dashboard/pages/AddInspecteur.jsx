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
   <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
           <div className='bg-white rounded-lg shadow-lg w-full max-w-4xl border border-gray-300'>
       
             <div className='flex justify-between items-center p-4 border-b border-gray-200'>
               <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Ajoute Inspecteur</h2>
               <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/inspecteurs'>Inspecteurs</Link>
             </div>

      <div className='p-4'>
        <form onSubmit={submit}>


        <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATION GÉNÉRALE</summary>


          
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            
          <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='name'>Nom et Prénom*</label>
              <input onChange={inputHandler} value={state.name} required type='text' placeholder='Nom et Prénom' name='name' id='name' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input onChange={inputHandler} value={state.email} required type='email' placeholder='exmple@gmail.com' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            </div>

            

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
  <div className='flex flex-col gap-y-2'>
    <label className='text-md font-medium text-gray-600' htmlFor='roleIns'>
      Rôle <span className='text-red-500'>*</span>
    </label>
    <select
      id='roleIns'
      name='roleIns'
      value={state.roleIns}
      onChange={inputHandler}
      className='border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
      required
    >
      <option value='' disabled>-- Sélectionner un rôle --</option>
      <option value='inspecteur'>Inspecteur</option>
      <option value='superviseur'>Superviseur</option>
    </select>
  </div>

  {state.roleIns === 'superviseur' && (
    <div className='flex flex-col gap-y-2'>
      <label className='text-md font-medium text-gray-600' htmlFor='superviseur'>
        Superviseur
      </label>
      <input
        onChange={inputHandler}
        value={state.superviseur}
        type='text'
        placeholder='Nom du superviseur'
        name='superviseur'
        id='superviseur'
        className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
      />
    </div>
  )}
</div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='villeIns'>Ville</label>
              <input onChange={inputHandler} value={state.villeIns}  type='text' placeholder='Ville' name='villeIns' id='villeIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='adresseIns'>Adresse</label>
              <input onChange={inputHandler} value={state.adresseIns}  type='text' placeholder='Adresse' name='adresseIns' id='adresseIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>

            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='codePostalIns'>Code postal</label>
              <input onChange={inputHandler} value={state.codePostalIns}  type='text' placeholder='Code postal' name='codePostalIns' id='codePostalIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numTelIns'>Numéro de téléphone</label>
              <input onChange={inputHandler} value={state.numTelIns} type='text' placeholder='Numéro de téléphone' name='numTelIns' id='numTelIns' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            </div>


           

            </details>
            
        <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATION Session inspecteur</summary>


  <div className='grid grid-cols-2 gap-x-8 mb-3'>
  <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='password'>Mot de Passe*</label>
              <input onChange={inputHandler} value={state.password} required type='password' placeholder='Mot de Passe' name='password' id='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            </div>
</details>

<div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Inspecteur'}</button>
            </div>
            </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default AddInspecteur