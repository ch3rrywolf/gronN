import React, { useContext, useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { base_url } from '../config/config';
import toast from 'react-hot-toast';
import storeContext from '../../context/storeContext';

const NewContent = () => {
    const { store } = useContext(storeContext);
    const [dossiers, setDossiers] = useState([]);
    const [all_dossiers, set_all_dossiers] = useState([]);
    const [parPage, setParPage] = useState(5);
    const [pages, setPages] = useState(0);
    const [page, setPage] = useState(1);
    const [res, set_res] = useState({ id: '', loader: false });

    // Fetch dossiers from API with pagination
    const get_dossiers = async () => {
        try {
            const { data } = await axios.get(`${base_url}/api/dossiers`, {
                headers: {
                    'Authorization': `Bearer ${store.token}`,
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

    // Update status of dossiers
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

    // Filter by status
    const type_filter = (e) => {
        if (e.target.value === '') {
            setDossiers(all_dossiers);
        } else {
            const filteredDossiers = all_dossiers.filter(n => n.dossierStatus === e.target.value);
            setDossiers(filteredDossiers);
        }
        setPage(1);
    };

    // Search by title
    const search_dossiers = (e) => {
        const filteredDossiers = all_dossiers.filter(n => n.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setDossiers(filteredDossiers);
        setPage(1);
    };

    useEffect(() => {
        get_dossiers();
    }, [page, parPage]);

    return (
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
                            <th className="px-7 py-3">Demandeur Commune</th>
                            <th className="px-7 py-3">Demandeur Code Postal</th>
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
                                <td className="px-6 py-4">{n.demandeurNom}</td>
                                <td className="px-6 py-4">{n.demandeurPreNom}</td>
                                <td className="px-6 py-4">{n.demandeurAdresse}</td>
                                <td className="px-6 py-4">{n.demandeurCommune}</td>
                                <td className="px-6 py-4">{n.demandeurCodePostal}</td>
                                <td className="px-6 py-4">{n.tel}</td>
                                <td className="px-6 py-4">{n.mel}</td>
                                <td className="px-6 py-4">#{n.numDossier}</td>
                                <td className="px-6 py-4">
                                    <div className="flex justify-start items-center gap-x-2 text-white">
                                        <Link to={`/dashboard/dossiers/view/${n._id}`} className="p-[2px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                                            <FaEye />
                                        </Link>
                                        
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
    );
};

export default NewContent;
