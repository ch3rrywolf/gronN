import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddGeste = () => {
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    reference:"",
    montantEtimatif:""
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
      const {data} = await axios.post(`${base_url}/api/geste/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/gestes')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Add Gestes</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/gestes'>Gestes</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='reference'>reference *</label>
              <input onChange={inputHandler} value={state.reference} required type='text' placeholder='reference' name='reference' id='reference' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='montantEtimatif'>montant Etimatif *</label>
              <input onChange={inputHandler} value={state.montantEtimatif} required type='text' placeholder='montantEtimatif' name='montantEtimatif' id='montantEtimatif' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
          </div>
            
            <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='mt-4'>
            <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Add Gestes'}</button>
            </div>
            </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddGeste;