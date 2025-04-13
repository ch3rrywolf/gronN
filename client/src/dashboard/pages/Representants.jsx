import React, { useEffect, useState, useContext } from 'react';
import { FaEye, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Representants = () => {
  const { store } = useContext(storeContext);
  const [representants, setRepresentants] = useState([]);
  const [editRepresentant, setEditRepresentant] = useState(null);
  const [newNom, setNewNom] = useState('');
  const [newPrenom, setNewPrenom] = useState('');
  const [newRaisoc, setNewRaisoc] = useState('');
  const [newAddresse, setNewAddresse] = useState('');
  const [newMail, setNewMail] = useState('');
  const [newTel, setNewTel] = useState('');
   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_representants = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/representants`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setRepresentants(data.representants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_representants();
  }, []);


//   const update_status = async (accountStatus, backoffices_id) => {
//     try {
//         set_res({ id: backoffices_id, loader: true });
//         const { data } = await axios.put(`${base_url}/api/backoffices/status-update/${backoffices_id}`, { accountStatus }, {
//             headers: {
//                 'Authorization': `Bearer ${store.token}`,
//             },
//         });
//         set_res({ id: '', loader: false });
//         toast.success(data.message);
//         get_backoffices();
//     } catch (error) {
//         set_res({ id: '', loader: false });
//         console.log(error);
//         toast.error(error.response?.data?.message || "An error occurred");
//     }
// };

  const handleUpdate = async (id) => {
    try {
      const updateData = {
        nom: newNom.trim(),
        prenom: newPrenom.trim(),
        raisoc: newRaisoc.trim(),
        addresse: newAddresse.trim(),
        mail: newMail.trim(),
        tel: newTel.trim(),
      };

    //   if (newPassword.trim()) {
    //     updateData.password = newPassword.trim();
    //   }

      const { data } = await axios.put(
        `${base_url}/api/representant/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setRepresentants((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, nom: newNom, prenom: newPrenom, raisoc: newRaisoc, addresse: newAddresse, mail: newMail, tel: newTel }
            : op
        )
      );

      setEditRepresentant(null);
      setNewNom('');
      setNewPrenom('');
      setNewRaisoc('');
      setNewAddresse('');
      setNewMail('');
      setNewTel('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating representant:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this representant ?'))
      return;

    try {
      await axios.delete(`${base_url}/api/representant/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setRepresentants((prev) => prev.filter((op) => op._id !== id));
      alert('Representant deleted successfully');
    } catch (error) {
      console.error('Error deleting representant:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Répresentants</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/representant/add'
        >
          Ajoute Répresentant
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>Nom</th>
              <th className='px-7 py-3'>Prénom</th>
              <th className='px-7 py-3'>Raison Social</th>
              <th className='px-7 py-3'>Addresse</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Tél</th>
              <th className='px-7 py-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {representants.map((r, i) => (
              <tr key={i} className='bg-white border-b'>
                

                {editRepresentant === r._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newNom}
                        onChange={(e) => setNewNom(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newPrenom}
                        onChange={(e) => setNewPrenom(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newRaisoc}
                        onChange={(e) => setNewRaisoc(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newAddresse}
                        onChange={(e) => setNewAddresse(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='email'
                        value={newMail}
                        onChange={(e) => setNewMail(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newTel}
                        onChange={(e) => setNewTel(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    
                    
                  </>
                ) : (
                  <>
                    <td className='px-6 py-4'>{r.nom}</td>
                    <td className='px-6 py-4'>{r.prenom}</td>
                    <td className='px-6 py-4'>{r.raisoc}</td>
                    <td className='px-6 py-4'>{r.addresse}</td>
                    <td className='px-6 py-4'>{r.mail}</td>
                    <td className='px-6 py-4'>{r.tel}</td>
                  </>
                )}

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    {/* <Link
                      to={`/dashboard/representants/view/${r._id}`}
                      className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'
                    >
                      <FaEye />
                    </Link> */}
                    {editRepresentant === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditRepresentant(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditRepresentant(r._id);
                          setNewNom(r.nom);
                          setNewPrenom(r.prenom);
                          setNewRaisoc(r.raisoc);
                          setNewAddresse(r.addresse);
                          setNewMail(r.mail);
                          setNewTel(r.tel);
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

export default Representants;
