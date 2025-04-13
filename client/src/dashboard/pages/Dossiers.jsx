import React, {useContext, useState, useEffect} from 'react'
import {FaEye, FaEdit, FaTrash, FaSave, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
import toast from 'react-hot-toast';
import {base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const Dossiers = () => {
    const { store } = useContext(storeContext);
    const [dossiers, setDossiers] = useState([]); 
    const [all_dossiers, set_all_dossiers] = useState([]);

    const [editDossier, setEditDossier] = useState(null);
      const [newDemandeurNom, setNewDemandeurNom] = useState('');
      const [newDemandeurPreNom, setNewDemandeurPreNom] = useState('');
      const [newDemandeurAdresse, setNewDemandeurAdresse] = useState('');
      const [newnumero, setNewnumero] = useState('');
      const [newville, setNewville] = useState('');
      const [newvoie, setNewvoie] = useState('');
      const [newDemandeurCommune, setNewDemandeurCommune] = useState('');
      const [newDemandeurCodePostal, setNewDemandeurCodePostal] = useState('');
      const [newBatiment, setNewBatiment] = useState('');
      const [newEtage, setNewEtage] = useState('');
      const [newPorte, setNewPorte] = useState('');
      const [newEscalier, setNewEscalier] = useState('');
      const [newTel, setNewTel] = useState('');
      const [newMel, setNewMel] = useState('');
      const [newNumDossier, setNewNumDossier] = useState('');


    const [parPage, setParPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);
   const [res, set_res] = useState({ id: '', loader: false }); 
    
    const get_dossiers = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/dossiers`, {
                headers: {
                    'Authorization': `Bearer ${store.token}`
                },
                params: {
                    page,
                    limit: parPage,
                }
            });
    
            set_all_dossiers(data.dossiers); 
            setDossiers(data.dossiers); 
            setPages(data.totalPages);
    
        } catch (error) {
            console.error("Error fetching dossiers:", error);
        }
    };

    const update_status = async (dossierStatus, dossiers_id) => {
        try {
            set_res({ id: dossiers_id, loader: true });
            const { data } = await axios.put(`${base_url}/api/dossiers/status-update/${dossiers_id}`, { dossierStatus }, {
                headers: {
                    'Authorization': `Bearer ${store.token}`,
                },
            });
            set_res({ id: '', loader: false });
            toast.success(data.message);
            get_dossiers();
        } catch (error) {
            set_res({ id: '', loader: false });
            console.log(error);
            toast.error(error.response?.data?.message || "An error occurred");
        }
    };

    const type_filter = (e) => {
        if (e.target.value === '') {
            setDossiers(all_dossiers);
        } else {
            const filteredDossiers = all_dossiers.filter(n => n.dossierStatus === e.target.value);
            setDossiers(filteredDossiers);
        }
        setPage(1);
    };

    const search_dossiers = (e) => {
        const filteredDossiers = all_dossiers.filter(n => n.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setDossiers(filteredDossiers);
        setPage(1);
    };

    useEffect(() => {
        get_dossiers();
    }, [page, parPage]);


    
    const handleUpdate = async (id) => {
        try {
          const updateData = {
            demandeurNom: newDemandeurNom.trim(),
            demandeurPreNom: newDemandeurPreNom.trim(),
            demandeurAdresse: newDemandeurAdresse.trim(),
            numero: newnumero.trim(),
            ville: newville.trim(),
            voie: newvoie.trim(),
            demandeurCommune: newDemandeurCommune.trim(),
            demandeurCodePostal: newDemandeurCodePostal.trim(),
            batiment: newBatiment.trim(),
            etage: newEtage.trim(),
            porte: newPorte.trim(),
            escalier: newEscalier.trim(),
            tel: newTel.trim(),
            mel: newMel.trim(),
            numDossier: newNumDossier.trim(),
          };
    
          const { data } = await axios.put(
            `${base_url}/api/dossiers/update/${id}`,
            updateData,
            {
              headers: { Authorization: `Bearer ${store.token}` },
            }
          );
    
          setEditDossier((prev) =>
            prev.map((op) =>
              op._id === id
                ? { ...op, demandeurNom: newDemandeurNom, demandeurPreNom: newDemandeurPreNom, demandeurAdresse: newDemandeurAdresse, numero: newnumero, ville: newville, voie: newvoie,  demandeurCommune: newDemandeurCommune, demandeurCodePostal: newDemandeurCodePostal, batiment: newBatiment, etage: newEtage, porte: newPorte, escalier: newEscalier, tel: newTel, mel: newMel, numDossier: newNumDossier  }
                : op
            )
          );
    
          setEditDossier(null);
          setNewDemandeurNom('');
          setNewDemandeurPreNom('');
          setNewDemandeurAdresse('');
          setNewnumero('');
          setNewville('');
          setNewvoie('');
          setNewDemandeurCommune('');
          setNewDemandeurCodePostal('');
          setNewBatiment('');
          setNewEtage('');
          setNewPorte('');
          setNewEscalier('');
          setNewTel('');
          setNewMel('');
          setNewNumDossier('');
          alert(data.message);
          window.location.reload();
        } catch (error) {
          console.error('Error updating backoffice:', error);
        }
      };
      

  const handleDelete = async (dossiers_id) => {
    if (!window.confirm('Are you sure you want to delete this Dossier?'))
      return;

    try {
      await axios.delete(`${base_url}/api/dossiers/delete/${dossiers_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setDossiers((prev) => prev.filter((op) => op._id !== dossiers_id));
      alert('Dossier deleted successfully');
    } catch (error) {
      console.error('Error deleting Dossier:', error);
    }
  };
    

    return (
        <div className='bg-white rounded-md'>
            <div className='flex justify-between p-4'>
                    <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Dossiers</h2>
                    <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers/add'>Ajoute Dossiers</Link>
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
                                       <th className="px-7 py-3">Demandeur Nom</th>
                                       <th className="px-7 py-3">Demandeur PreNom</th>
                                       <th className="px-7 py-3">Demandeur Adresse</th>
                                       <th className="px-7 py-3">N°</th>
                                       <th className="px-7 py-3">Ville</th>
                                       <th className="px-7 py-3">Voie</th>
                                       <th className="px-7 py-3">Demandeur Commune</th>
                                       <th className="px-7 py-3">Demandeur CodePostal</th>
                                       <th className="px-7 py-3">Bâtiment</th>
                                       <th className="px-7 py-3">Etage</th>
                                       <th className="px-7 py-3">Porte</th>
                                       <th className="px-7 py-3">Escalier</th>
                                       <th className="px-7 py-3">Téléphone</th>
                                       <th className="px-7 py-3">Mail</th>
                                       <th className="px-7 py-3">N° Dossier</th>
                                       <th className="px-7 py-3">Actions</th>
                                   </tr>
                               </thead>
                               <tbody>
                                   {dossiers?.length > 0 && dossiers.map((n, i) => (
                                       <tr key={i} className="bg-white border-b">
                                           <td className="px-6 py-4">
                                               {n.dossierStatus === 'Validé' && <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs">{n.dossierStatus}</span>}
                                               {n.dossierStatus === 'Non Validé' && <span className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs">{n.dossierStatus}</span>}
                                               {n.dossierStatus === 'Annulé' && <span className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs">{n.dossierStatus}</span>}
                                           </td>
                                           {editDossier === n._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newDemandeurNom}
                        onChange={(e) => setNewDemandeurNom(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newDemandeurPreNom}
                        onChange={(e) => setNewDemandeurPreNom(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newDemandeurAdresse}
                        onChange={(e) => setNewDemandeurAdresse(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newnumero}
                        onChange={(e) => setNewnumero(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newville}
                        onChange={(e) => setNewville(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newvoie}
                        onChange={(e) => setNewvoie(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newDemandeurCommune}
                        onChange={(e) => setNewDemandeurCommune(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newDemandeurCodePostal}
                        onChange={(e) => setNewDemandeurCodePostal(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newBatiment}
                        onChange={(e) => setNewBatiment(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newEtage}
                        onChange={(e) => setNewEtage(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newPorte}
                        onChange={(e) => setNewPorte(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newEscalier}
                        onChange={(e) => setNewEscalier(e.target.value)}
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
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newMel}
                        onChange={(e) => setNewMel(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newNumDossier}
                        onChange={(e) => setNewNumDossier(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                   
                  </>
                ) : (
                  <>
                    <td className='px-6 py-4'>{n.demandeurNom}</td>
                    <td className='px-6 py-4'>{n.demandeurPreNom}</td>
                    <td className='px-6 py-4'>{n.demandeurAdresse}</td>
                    <td className='px-6 py-4'>{n.numero}</td>
                    <td className='px-6 py-4'>{n.ville}</td>
                    <td className='px-6 py-4'>{n.voie}</td>
                    <td className='px-6 py-4'>{n.demandeurCommune}</td>
                    <td className='px-6 py-4'>{n.demandeurCodePostal}</td>
                    <td className='px-6 py-4'>{n.batiment}</td>
                    <td className='px-6 py-4'>{n.etage}</td>
                    <td className='px-6 py-4'>{n.porte}</td>
                    <td className='px-6 py-4'>{n.escalier}</td>
                    <td className='px-6 py-4'>{n.tel}</td>
                    <td className='px-6 py-4'>{n.mel}</td>
                    <td className='px-6 py-4'>{n.numDossier}</td>
                  </>
                )}
                                           <td className="px-6 py-4">
                                               <div className="flex justify-start items-center gap-x-2 text-white">
                                                   <Link to={`/dashboard/dossiers/view/${n._id}`} className="p-[2px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                                                       <FaEye />
                                                   </Link>
                                                   {editDossier === n._id ? (
                                                                         <>
                                                                           <button
                                                                             onClick={() => handleUpdate(n._id)}
                                                                             className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                                                                           >
                                                                             <FaSave />
                                                                           </button>
                                                                           <button
                                                                             onClick={() => setEditDossier(null)}
                                                                             className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                                                                           >
                                                                             <FaTimes />
                                                                           </button>
                                                                         </>
                                                                       ) : (
                                                                         <button
                                                                           onClick={() => {
                                                                            setEditDossier(n._id);
                                                                            setNewDemandeurNom(n.demandeurNom);
                                                                            setNewDemandeurPreNom(n.demandeurPreNom);
                                                                            setNewDemandeurAdresse(n.demandeurAdresse);
                                                                            setNewnumero(n.numero);
                                                                            setNewville(n.ville);
                                                                            setNewvoie(n.voie);
                                                                            setNewDemandeurCommune(n.demandeurCommune);
                                                                            setNewDemandeurCodePostal(n.demandeurCodePostal);
                                                                            setNewBatiment(n.batiment);
                                                                            setNewEtage(n.etage);
                                                                            setNewPorte(n.porte);
                                                                            setNewEscalier(n.escalier);
                                                                            setNewTel(n.tel);
                                                                            setNewMel(n.mel);
                                                                            setNewNumDossier(n.numDossier);
                                                                           }}
                                                                           className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-yellow-500/50'
                                                                         >
                                                                           <FaEdit />
                                                                         </button>
                                                                       )}
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
                               {(page - 1) * parPage + 1}/{dossiers.length} - of {pages}
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

export default Dossiers;
