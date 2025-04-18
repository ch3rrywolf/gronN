import React, { useEffect, useState, useContext } from 'react';
import { FaEye, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Backoffices = () => {
  const { store } = useContext(storeContext);
  const [backoffices, setBackoffices] = useState([]);
  const [editBackoffice, setEditBackoffice] = useState(null);
  const [newRole, setNewRole] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_backoffices = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/backoffices`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setBackoffices(data.backoffices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_backoffices();
  }, []);


  const update_status = async (accountStatus, backoffices_id) => {
    try {
        set_res({ id: backoffices_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/backoffices/status-update/${backoffices_id}`, { accountStatus }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_backoffices();
    } catch (error) {
        set_res({ id: '', loader: false });
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
    }
};

  const handleUpdate = async (id) => {
    try {
      const updateData = {
        name: newName.trim(),
        email: newEmail.trim(),
        role: newRole.trim(),
      };

      if (newPassword.trim()) {
        updateData.password = newPassword.trim();
      }

      const { data } = await axios.put(
        `${base_url}/api/backoffices/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setBackoffices((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, name: newName, email: newEmail, role: newRole }
            : op
        )
      );

      setEditBackoffice(null);
      setNewName('');
      setNewEmail('');
      setNewPassword('');
      setNewRole('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating backoffice:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this backoffice?'))
      return;

    try {
      await axios.delete(`${base_url}/api/backoffices/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setBackoffices((prev) => prev.filter((op) => op._id !== id));
      alert('Backoffice deleted successfully');
    } catch (error) {
      console.error('Error deleting backoffice:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Comptes</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/backoffice/add'
        >
          Ajoute Compte
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>Status</th>
              <th className='px-7 py-3'>Intitulée</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Mot de passe</th>
              <th className='px-7 py-3'>Rôle</th>
              <th className='px-7 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {backoffices.map((r, i) => (
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

                {editBackoffice === r._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='email'
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='password'
                        placeholder='Nouveau mot de passe (optionnel)'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <select
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className='border px-2 py-1 w-full'
                      >
                        <option value=''>-- Sélectionner un rôle --</option>
                        <option value='admin'>Admin</option>
                        <option value='backoffice'>backOffice</option>
                      </select>
                    </td>
                  </>
                ) : (
                  <>
                    <td className='px-6 py-4'>{r.name}</td>
                    <td className='px-6 py-4'>{r.email}</td>
                    <td className='px-6 py-4'>••••••••</td>
                    <td className='px-6 py-4'>{r.role}</td>
                  </>
                )}

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    <Link
                      to={`/dashboard/backoffices/view/${r._id}`}
                      className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'
                    >
                      <FaEye />
                    </Link>
                    {editBackoffice === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditBackoffice(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditBackoffice(r._id);
                          setNewName(r.name);
                          setNewEmail(r.email);
                          setNewRole(r.role);
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

export default Backoffices;
