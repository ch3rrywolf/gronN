import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {base_url} from '../config/config'
import toast from 'react-hot-toast'
import storeContext from '../../context/storeContext'
import NewContent from '../components/NewContent'

const AdminIndex = () => {
  const { store } = useContext(storeContext);

  const [dossiers, setDossiers] = useState({
    totalDossiers: 0,
    totalDossiersAnnu: 0,
    totalDossiersNValid: 0,
    totalDossiersValid: 0
  });

  useEffect(() => {
    const fetchDossiers = async () => {
      try {
        const response = await axios.get(`${base_url}/api/dossiers/info-dash`, {
          headers: {
            'Authorization': `Bearer ${store.token}`,
          }
        });
        setDossiers(response.data);
      } catch (error) {
        console.error("Error fetching dossiers data:", error.response ? error.response.data : error.message);
        toast.error(error.response?.data?.message || "Failed to load dossiers data");
      }
    };
  
    fetchDossiers();
  }, []);


  // 
 
  return (
    <div className='mt-3'>
      <div className='grid grid-cols-4 gap-x-4'>
        <div className='w-full p-8 flex justify-center flex-col items-center gap-y-2 bg-green-300 hover:shadow-lg hover:shadow-[#9fc327] text-white rounded-full'>
          <span className='text-xl font-bold text-slate-700'>{dossiers.totalDossiers}</span>
          <span className='text-xl font-bold'>Total Dossiers</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col  items-center gap-y-2 bg-blue-300 hover:shadow-lg hover:shadow-[#1960a9] text-white  rounded-full'>
          <span className='text-xl font-bold text-slate-700'>{dossiers.totalDossiersValid}</span>
          <span className='text-xl font-bold'>Validé </span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col  items-center gap-y-2 bg-gray-300 hover:shadow-lg hover:shadow-gray-700 text-white  rounded-full'>
          <span className='text-xl font-bold text-slate-700'>{dossiers.totalDossiersNValid}</span>
          <span className='text-xl font-bold'>Non Validé</span>
        </div>
        <div className='w-full p-8 flex justify-center flex-col  items-center gap-y-2 text-white  hover:shadow-lg hover:shadow-red-900/50 bg-red-300 rounded-full'>
          <span className='text-xl font-bold text-slate-700'>{dossiers.totalDossiersAnnu}</span>
          <span className='text-xl font-bold'>Annulé</span>
        </div>
       
        
      </div>
      <div className='bg-white p-4 mt-5'>
        <div className='flex justify-between items-center pb-4'>
          <h2>Dossiers Récents</h2>
          <Link to={`/dashboard/dossiers`}>Tout voir</Link>
        </div>


    <NewContent />




      </div>
    </div>
  )
}

export default AdminIndex