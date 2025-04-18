import React, { useEffect, useState, useContext } from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Prestations = () => {
  const { store } = useContext(storeContext);
  const [prestations, setPrestations] = useState([]);
  const [editPrestation, setEditPrestation] = useState(null);
  const [newdesignation, setNewdesignation] = useState('');
  const [newunite, setNewunite] = useState('');
  const [newGeste, setNewGeste] = useState('');
  
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_prestations = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/prestations`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setPrestations(data.prestations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_prestations();
  }, []);


  const update_status = async (etat, prestations_id) => {
    try {
        set_res({ id: prestations_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/prestations/status-update/${prestations_id}`, { etat }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_prestations();
    } catch (error) {
        set_res({ id: '', loader: false });
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
    }
};

const update_status_validate = async (validationMar, prestations_id) => {
    try {
        set_res({ id: prestations_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/prestations/status-update-validate/${prestations_id}`, { validationMar }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_prestations();
    } catch (error) {
        set_res({ id: '', loader: false });
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
    }
};



  const handleUpdate = async (id) => {
    try {
      const updateData = {
        designation: newdesignation.trim(),
        unite: newunite.trim(),
        Geste: newGeste.trim(),
      };

      

      const { data } = await axios.put(
        `${base_url}/api/prestations/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setPrestations((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, designation: newdesignation, unite: newunite, Geste: newGeste }
            : op
        )
      );

      setEditPrestation(null);
      setNewdesignation('');
      setNewunite('');
      setNewGeste('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating Prestation:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this Prestation?'))
      return;

    try {
      await axios.delete(`${base_url}/api/prestations/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setPrestations((prev) => prev.filter((op) => op._id !== id));
      alert('prestation deleted successfully');
    } catch (error) {
      console.error('Error deleting prestation:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>prestations</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/prestation/add'
        >
          Ajoute prestation
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>Etat</th>
              <th className='px-7 py-3'>Validation Mar</th>
              <th className='px-7 py-3'>Désignation</th>
              <th className='px-7 py-3'>Geste</th>
              <th className='px-7 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {prestations.map((r, i) => (
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

                {editPrestation === r._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newdesignation}
                        onChange={(e) => setNewdesignation(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>

                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newunite}
                        onChange={(e) => setNewunite(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newGeste}
                        onChange={(e) => setNewGeste(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                   
                   
                  </>
                ) : (
                  <>
                    
                    
                    <td className='px-6 py-4'>{r.designation}</td>
                    <td className='px-6 py-4'>{r.unite}</td>
                    <td className='px-6 py-4'>{r.Geste}</td>
                  </>
                )}

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    
                    {editPrestation === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditPrestation(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                            setEditPrestation(r._id);
                            setNewdesignation(r.designation);
                            setNewunite(r.unite);
                            setNewGeste(r.Geste);
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

                                                   <button
                                                       onClick={() => update_status_validate('Valide', r._id)}
                                                       className="p-[2px] bg-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/50"
                                                   >
                                                       Valide
                                                   </button>
                                                   <button
                                                       onClick={() => update_status_validate('Non valide', r._id)}
                                                       className="p-[1px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50"
                                                   >
                                                       Non Valide
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

export default Prestations;
