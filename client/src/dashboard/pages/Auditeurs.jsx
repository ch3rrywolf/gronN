import React, { useEffect, useState, useContext } from 'react';
import { FaEye, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Auditeurs = () => {
  const { store } = useContext(storeContext);
  const [auditeurs, setAuditeurs] = useState([]);
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_auditeurs = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/auditeurs`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setAuditeurs(data?.auditeurs || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_auditeurs();
  }, []);


  const update_status = async (accountStatus, auditeurs_id) => {
    try {
        set_res({ id: auditeurs_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/auditeurs/status-update/${auditeurs_id}`, { accountStatus }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_auditeurs();
    } catch (error) {
        set_res({ id: '', loader: false });
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
    }
};



  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this auditeurs'))
      return;

    try {
      await axios.delete(`${base_url}/api/auditeurs/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setAuditeurs((prev) => prev.filter((op) => op._id !== id));
      alert('Auditeur deleted successfully');
    } catch (error) {
      console.error('Error deleting Auditeur:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Auditeurs</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/auditeur/add'
        >
          Ajoute Auditeur
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>Status</th>
              <th className='px-7 py-3'>Référence</th>
              <th className='px-7 py-3'>Intitulé</th>
              <th className='px-7 py-3'>Adresse</th>
              <th className='px-7 py-3'>contact</th>
              <th className='px-7 py-3'>Numéro de Téléphone</th>
              <th className='px-7 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {auditeurs.map((r, i) => (
              <tr key={i} className='bg-white border-b'>
                <td className='px-6 py-4'>
                  {r.accountStatus === 'activé' && (
                    <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs'>
                      {r.accountStatus}
                    </span>
                  )}
                  {r.accountStatus === 'désactivé' && (
                    <span className='px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs'>
                      {r.accountStatus}
                    </span>
                  )}
                </td>

                
                  
                 
                  <>
                    <td className='px-6 py-4'>{r._id}</td>                    
                    <td className='px-6 py-4'>{r.name}</td>
                    <td className='px-6 py-4'>{r.adresseAud}</td>
                    <td className='px-6 py-4'>{r.nomRepParAud}{r.prenomRepParAud}</td>
                    <td className='px-6 py-4'>{r.numTelRepParAud}</td>
                  </>
                

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    <Link
                      to={`/dashboard/auditeurs/view/${r._id}`}
                      className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'
                    >
                      <FaEye />
                    </Link>
                    
                     
                     
                      
                   
                    <button
                      onClick={() => handleDelete(r._id)}
                      className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'
                    >
                      <FaTrash />
                    </button>
                    <button
                                                       onClick={() => update_status('activé', r._id)}
                                                       className="p-[2px] bg-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/50"
                                                   >
                                                       activé
                                                   </button>
                                                   <button
                                                       onClick={() => update_status('désactivé', r._id)}
                                                       className="p-[1px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50"
                                                   >
                                                       désactivé
                                                   </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Auditeurs;
