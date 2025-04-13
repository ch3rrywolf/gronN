import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddPrestation = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    societe:"",
    designation:"",
    unite:"",
    Geste:""
  })

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }


  const uniteOptions = ["m", "mm", "m²","KW","%","L"];
const gesteOptions = ["MENUISERIE FENETRE 2V", "MENUISERIE FENETRE 1V", "VMC simple flux"];


  const [loader, setLoader] = useState(false)

  const submit = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const {data} = await axios.post(`${base_url}/api/prestation/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/prestations')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Add Préstations</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/prestations'>Préstations</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='societe'>societe *</label>
              <input onChange={inputHandler} value={state.societe} required type='text' placeholder='societe' name='societe' id='societe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='designation'>Désignation *</label>
              <input onChange={inputHandler} value={state.designation} required type='text' placeholder='designation' name='designation' id='designation' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>

          <div className='flex flex-col gap-y-2'>
  <label className='text-md font-medium text-gray-600' htmlFor='unite'>unite *</label>
  <select
    onChange={inputHandler}
    value={state.unite}
    name='unite'
    id='unite'
    required
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value='' disabled>Unité</option>
    {uniteOptions.map((option, idx) => (
      <option key={idx} value={option}>{option}</option>
    ))}
  </select>
</div>
<div className='flex flex-col gap-y-2'>
  <label className='text-md font-medium text-gray-600' htmlFor='Geste'>Geste </label>
  <select
    onChange={inputHandler}
    value={state.Geste}
    name='Geste'
    id='Geste'
    required
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value='' disabled>Select Geste</option>
    {gesteOptions.map((option, idx) => (
      <option key={idx} value={option}>{option}</option>
    ))}
  </select>
</div>
          </div>
            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Répresentant'}</button>
            </div>
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddPrestation;