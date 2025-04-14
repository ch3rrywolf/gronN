import React, { useEffect, useState, useContext } from 'react';
import { FaEye, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Sessions = () => {
  const { store } = useContext(storeContext);
  const [sessions, setSessions] = useState([]);
  const [editSession, setEditSession] = useState(null);
  const [newRole, setNewRole] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_sessions = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/sessions`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setSessions(data.sessions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_sessions();
  }, []);


  const update_status = async (accountStatus, sessions_id) => {
    try {
        set_res({ id: sessions_id, loader: true });
        const { data } = await axios.put(`${base_url}/api/sessions/status-update/${sessions_id}`, { accountStatus }, {
            headers: {
                'Authorization': `Bearer ${store.token}`,
            },
        });
        set_res({ id: '', loader: false });
        toast.success(data.message);
        get_sessions();
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
        `${base_url}/api/sessions/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setSessions((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, name: newName, email: newEmail, role: newRole }
            : op
        )
      );

      setEditSession(null);
      setNewName('');
      setNewEmail('');
      setNewPassword('');
      setNewRole('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating session:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this session?'))
      return;

    try {
      await axios.delete(`${base_url}/api/sessions/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setSessions((prev) => prev.filter((op) => op._id !== id));
      alert('Session deleted successfully');
    } catch (error) {
      console.error('Error deleting session:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Comptes</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/session/add'
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
            {sessions.map((r, i) => (
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

                {editSession === r._id ? (
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
                        <option value='inspecteur'>Inspecteur</option>
                        <option value='auditeur'>Auditeur</option>
                        <option value='entrete'>Entreprise renue</option>
                        <option value='manda'>Mandataire</option>
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
                      to={`/dashboard/sessions/view/${r._id}`}
                      className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'
                    >
                      <FaEye />
                    </Link>
                    {editSession === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditSession(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditSession(r._id);
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

export default Sessions;
