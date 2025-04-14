import React, {useContext, useState, useEffect} from 'react'
import {FaEye, FaEdit, FaTrash, FaSave, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
import toast from 'react-hot-toast';
import {base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const Folders = () => {
    const { store } = useContext(storeContext);
    const [folders, setFolders] = useState([]); 
    const [all_folders, set_all_folders] = useState([]);

    const [parPage, setParPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);
   const [res, set_res] = useState({ id: '', loader: false }); 
    
    const get_folders = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/folders`, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                },
                params: {
                    page,
                    limit: parPage,
                }
            });
    
            set_all_folders(data.folders); 
            setFolders(data.folders); 
            setPages(data.totalPages);
    
        } catch (error) {
            console.error("Error fetching folders:", error);
        }
    };

    const update_status = async (folderStatus, folders_id) => {
        try {
            set_res({ id: folders_id, loader: true });
            const { data } = await axios.put(`${base_url}/api/folders/status-update/${folders_id}`, { folderStatus }, {
                headers: {
                    'Authorization': `Bearer ${store.token}`,
                },
            });
            set_res({ id: '', loader: false });
            toast.success(data.message);
            get_folders();
        } catch (error) {
            set_res({ id: '', loader: false });
            console.log(error);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    const type_filter = (e) => {
        if (e.target.value === '') {
            setFolders(all_folders);
        } else {
            const filteredFolders = all_folders.filter(n => n.folderStatus === e.target.value);
            setFolders(filteredFolders);
        }
        setPage(1);
    };

    const search_folders = (e) => {
        const filteredFolders = all_folders.filter(n => n.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFolders(filteredFolders);
        setPage(1);
    };

    useEffect(() => {
        get_folders();
    }, [page, parPage]);


      

  const handleDelete = async (folders_id) => {
    if (!window.confirm('Are you sure you want to delete this Folder?'))
      return;

    try {
      await axios.delete(`${base_url}/api/folders/delete/${folders_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setFolders((prev) => prev.filter((op) => op._id !== folders_id));
      alert('Folder deleted successfully');
    } catch (error) {
      console.error('Error deleting Folder:', error);
    }
  };
    

    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                    <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Dossiers</h2>
                    <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/folders/add'>Ajoute Dossier</Link>
                  </div>
             <div>
                       <div className="px-4 py-3 flex gap-x-3">
                           <select onChange={type_filter} className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10">
                               <option value="">===select status===</option>
                               <option value="Validé">Validé</option>
                               <option value="Non Validé">Non Validé</option>
                               <option value="Annulé">Annulé</option>
                           </select>
                           {/* <input
                               onChange={search_dossiers}
                               type="text"
                               placeholder="recherche"
                               className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                           /> */}
                       </div>
           
                       <div className="relative overflow-y-auto p-4">
                           <table className="w-full text-sm text-left text-slate-600">
                               <thead className="text-sm text-gray-700  bg-gray-50">
                                   <tr>
                                       <th className="px-7 py-3">Status</th>
                                       <th className="px-7 py-3">Étape</th>
                                       <th className="px-7 py-3">N° Dossier Anah</th>
                                       <th className="px-7 py-3">Entreprise retenue</th>
                                       <th className="px-7 py-3">Source</th>
                                       <th className="px-7 py-3">Date du dossier</th>
                                       <th className="px-7 py-3">Intitulé Client</th>
                                       <th className="px-7 py-3">société</th>
                                       <th className="px-7 py-3">Adresse Client</th>
                                       <th className="px-7 py-3">Numéro de télephone Client</th>
                                       <th className="px-7 py-3">Actions</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {folders?.length > 0 && folders.map((n, i) => (
                                       <tr key={i} className="bg-white border-b">
                                           <td className="px-6 py-4">
                                               {n.folderStatus === 'Validé' && <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs">{n.folderStatus}</span>}
                                               {n.folderStatus === 'Non Validé' && <span className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs">{n.folderStatus}</span>}
                                               {n.folderStatus === 'Annulé' && <span className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs">{n.folderStatus}</span>}
                                           </td>
                                           
                  
                
                  <>
                    <td className='px-6 py-4'>{n._id}</td>
                    <td className='px-6 py-4'>{n.numFolderAnah}</td>
                    <td className='px-6 py-4'>{"Entreprise retenue"}</td>
                    <td className='px-6 py-4'>{n.createdAt}</td>
                    <td className='px-6 py-4'>{"benificaire name"}</td>
                    <td className='px-6 py-4'>{"société"}</td>
                    <td className='px-6 py-4'>{"Adresse Client"}</td>
                    <td className='px-6 py-4'>{"Numéro de télephone Client"}</td>
                  </>
                
                                           <td className="px-6 py-4">
                                               <div className="flex justify-start items-center gap-x-2 text-white">
                                                   <Link to={`/dashboard/folders/view/${n._id}`} className="p-[2px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                                                       <FaEye />
                                                   </Link>
                                                   
                                                                       <button
                                                                         onClick={() => handleDelete(n._id)}
                                                                         className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'
                                                                       >
                                                                         <FaTrash />
                                                                       </button>
                                                                       <button
                                                                                                          onClick={() => update_status('Validé', n._id)}
                                                                                                          className="p-[2px] bg-blue-500 rounded hover:shadow-lg hover:shadow-blue-500/50"
                                                                                                      >
                                                                                                          Validé
                                                                                                      </button>
                                                                                                      <button
                                                                                                          onClick={() => update_status('Non Validé', n._id)}
                                                                                                          className="p-[1px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50"
                                                                                                      >
                                                                                                          Non Validé
                                                                                                      </button>
                                                                                                      <button
                                                                                                          onClick={() => update_status('Annulé', n._id)}
                                                                                                          className="p-[1px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50"
                                                                                                      >
                                                                                                          Annulé
                                                                                                      </button>
                                               </div>
                                           </td>
                                       </tr>
                                   ))}
                               </tbody>
                           </table>
                       </div>
           
                       <div className="flex items-center justify-end px-10 gap-x-3 text-slate-600">
                           <select
                               value={parPage}
                               onChange={(e) => { setParPage(parseInt(e.target.value)); setPage(1); }}
                               className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
                           >
                               <option value="5">5</option>
                               <option value="10">10</option>
                               <option value="15">15</option>
                               <option value="20">20</option>
                           </select>
           
                           <p className='px-6 py-3 font-semibold text-sm'>
                               {(page - 1) * parPage + 1}/{folders.length} - of {pages}
                           </p>
           
                           <div className='flex items-center gap-x-3'>
                               <IoIosArrowBack onClick={() => page > 1 && setPage(page - 1)} className='w-5 h-5 cursor-pointer' />
                               <IoIosArrowForward onClick={() => page < pages && setPage(page + 1)} className='w-5 h-5 cursor-pointer' />
                           </div>
                       </div>
                   </div>
                   </div>
               );
           };

export default Folders;
