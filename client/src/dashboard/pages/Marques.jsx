import React, { useEffect, useState, useContext } from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Marques = () => {
  const { store } = useContext(storeContext);
  const [marques, setMarques] = useState([]);
  const [editMarque, setEditMarque] = useState(null);
  const [newsociete, setNewsociete] = useState('');
  const [newintitule, setNewintitule] = useState('');
  
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_marques = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/marques`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setMarques(data.marques);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_marques();
  }, []);


  const update_status = async (etat, marques_id) => {
    try {
        set_res({ id: marques_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/marques/status-update/${marques_id}`, { etat }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_marques();
    } catch (error) {
        set_res({ id: '', loader: false });
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
    }
};

  const handleUpdate = async (id) => {
    try {
      const updateData = {
        societe: newsociete.trim(),
        intitule: newintitule.trim(),
      };

      

      const { data } = await axios.put(
        `${base_url}/api/marques/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setMarques((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, societe: newsociete, intitule: newintitule }
            : op
        )
      );

      setEditMarque(null);
      setNewsociete('');
      setNewintitule('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating marque:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this marque?'))
      return;

    try {
      await axios.delete(`${base_url}/api/marques/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setMarques((prev) => prev.filter((op) => op._id !== id));
      alert('marque deleted successfully');
    } catch (error) {
      console.error('Error deleting marque:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Marques</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/marque/add'
        >
          Ajoute Marque
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>Etat</th>
              <th className='px-7 py-3'>Validation Mar</th>
              <th className='px-7 py-3'>Société</th>
              <th className='px-7 py-3'>Intitulé</th>
              <th className='px-7 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {marques.map((r, i) => (
              <tr key={i} className='bg-white border-b'>
                <td className='px-6 py-4'>
                  {r.etat === 'Activé' && (
                    <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs'>
                      {r.etat}
                    </span>
                  )}
                  {r.etat === 'Désactivé' && (
                    <span className='px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs'>
                      {r.etat}
                    </span>
                  )}
                </td>
                <td className='px-6 py-4'>
                  {r.validationMar === 'Valide' && (
                    <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs'>
                      {r.validationMar}
                    </span>
                  )}
                  {r.validationMar === 'Non valide' && (
                    <span className='px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs'>
                      {r.validationMar}
                    </span>
                  )}
                </td>

                {editMarque === r._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newsociete}
                        onChange={(e) => setNewsociete(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newintitule}
                        onChange={(e) => setNewintitule(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                   
                   
                  </>
                ) : (
                  <>
                    
                    
                    <td className='px-6 py-4'>{r.societe}</td>
                    <td className='px-6 py-4'>{r.intitule}</td>
                  </>
                )}

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    
                    {editMarque === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditMarque(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                            setEditMarque(r._id);
                            setNewsociete(r.societe);
                            setNewintitule(r.intitule);
                        }}
                        className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-yellow-500/50'
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(r._id)}
                      className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'
                    >
                      <FaTrash />
                    </button>
                    <button
                                                       onClick={() => update_status('Activé', r._id)}
                                                       className="p-[2px] bg-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/50"
                                                   >
                                                       Activé
                                                   </button>
                                                   <button
                                                       onClick={() => update_status('Désactivé', r._id)}
                                                       className="p-[1px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50"
                                                   >
                                                       Désactivé
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

export default Marques;
