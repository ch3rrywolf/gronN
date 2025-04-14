import React, { useEffect, useState, useContext } from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Gestes = () => {
  const { store } = useContext(storeContext);
  const [gestes, setGestes] = useState([]);
  const [editGeste, setEditGeste] = useState(null);
  const [newreference, setNewreference] = useState('');
  const [newmontantEtimatif, setNewmontantEtimatif] = useState('');
  
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_gestes = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/gestes`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setGestes(data.gestes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_gestes();
  }, []);


  const update_status = async (etat, gestes_id) => {
    try {
        set_res({ id: gestes_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/gestes/status-update/${gestes_id}`, { etat }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_gestes();
    } catch (error) {
        set_res({ id: '', loader: false });
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
    }
};




  const handleUpdate = async (id) => {
    try {
      const updateData = {
        reference: newreference.trim(),
        montantEtimatif: newmontantEtimatif.trim(),
      };

      

      const { data } = await axios.put(
        `${base_url}/api/gestes/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setGestes((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, reference: newreference, montantEtimatif: newmontantEtimatif }
            : op
        )
      );

      setEditGeste(null);
      setNewreference('');
      setNewmontantEtimatif('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating gestes:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this geste?'))
      return;

    try {
      await axios.delete(`${base_url}/api/gestes/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setGestes((prev) => prev.filter((op) => op._id !== id));
      alert('geste deleted successfully');
    } catch (error) {
      console.error('Error deleting geste:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Gestes</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/geste/add'
        >
          Ajoute Geste
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>État</th>
              <th className='px-7 py-3'>Référence</th>
              <th className='px-7 py-3'>Montant Estimatif</th>
              <th className='px-7 py-3'>Date de création</th>
              <th className='px-7 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {gestes.map((r, i) => (
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
                

                {editGeste === r._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newreference}
                        onChange={(e) => setNewreference(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newmontantEtimatif}
                        onChange={(e) => setNewmontantEtimatif(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>

                   
                   
                  </>
                ) : (
                  <>
                    
                    
                    <td className='px-6 py-4'>{r.reference}</td>
                    <td className='px-6 py-4'>{r.montantEtimatif}</td>
                    <td className='px-6 py-4'> {new Date(r.createdAt).toLocaleDateString('fr-FR')}</td>
                  </>
                )}

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    
                    {editGeste === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditGeste(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                            setEditGeste(r._id);
                            setNewreference(r.reference);
                            setNewmontantEtimatif(r.montantEtimatif);
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

export default Gestes;
