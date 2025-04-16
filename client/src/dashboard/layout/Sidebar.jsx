import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import {  FaRegUser, FaUserShield, FaUserTag,  FaFolderOpen, FaCog } from 'react-icons/fa';  // Added FaCog here
import { LuUserCog } from "react-icons/lu";
import {  BiDonateHeart, BiSolidDonateHeart } from 'react-icons/bi';
import { IoLogOutOutline, IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { AiTwotoneContainer } from "react-icons/ai";
import storeContext from '../../context/storeContext';

const SidebarItem = ({ to, icon, label, pathname }) => (
    <li>
        <Link 
            to={to} 
            className={`px-3 ${pathname === to ? 'bg-[#1960a9] text-white' : 'bg-white text-[#404040f6]'} 
                py-2 hover:shadow-lg hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center 
                hover:bg-[#9fc327] hover:text-white`}>
            <span className='text-xl'>{icon}</span>
            <span>{label}</span>
        </Link>
    </li>
);

const Sidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { store, dispatch } = useContext(storeContext);

    const logout = () => {
        localStorage.removeItem('newsToken');
        dispatch({ type: 'logout', payload: '' });
        navigate('/login');
    };

    return (
        <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
            <div className='h-[100px] flex justify-center items-center'>
                <Link to='/dashboard/'>
                    <img className='w-[200px] h-[130px]' src="/src/assets/logo-mar.png" alt="logo" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>

                {/* Admin Routes */}
                {store.userInfo?.role === 'admin' && (
                    <>

                    {/* Group 1: Dashboard */}
                    <div className='border-t pt-3'>
                            <h3 className='text-lg font-semibold text-gray-600 mb-3'>Tableau de bord</h3>
                            <SidebarItem to="/dashboard/admin" icon={<AiFillDashboard />} label="Tableau de bord" pathname={pathname} />
                        </div>
                        {/* Group 1: Dashboard and Beneficiaries */}
                        <div className='border-t pt-3'>
                            <h3 className='text-lg font-semibold text-gray-600 mb-3'>Entités</h3>
                            <SidebarItem to="/dashboard/benificaires" icon={<FaRegUser />} label="Bénificaires" pathname={pathname} />
                            <SidebarItem to="/dashboard/inspecteurs" icon={<LuUserCog />} label="Inspecteurs" pathname={pathname} />
                            <SidebarItem to="/dashboard/auditeurs" icon={<FaUserShield />} label="Auditeurs" pathname={pathname} />
                            <SidebarItem to="/dashboard/entretes" icon={<MdOutlineAssuredWorkload />} label="Entreprise retenue" pathname={pathname} />
                            <SidebarItem to="/dashboard/mandas" icon={<FaUserTag />} label="Mandataires" pathname={pathname} />
                        </div>

                        {/* Group 2: Services & Prestations */}
                        <div className='border-t pt-3'>
                            <h3 className='text-lg font-semibold text-gray-600 mb-3'>Catalogue</h3>
                            <SidebarItem to="/dashboard/marques" icon={<IoPricetagsOutline />} label="Marques" pathname={pathname} />
                            <SidebarItem to="/dashboard/prestations" icon={<BiDonateHeart />} label="Prestations" pathname={pathname} />
                            <SidebarItem to="/dashboard/prestationmars" icon={<BiSolidDonateHeart />} label="Prestations Mar" pathname={pathname} />
                            <SidebarItem to="/dashboard/gestes" icon={<AiTwotoneContainer />} label="Geste" pathname={pathname} />
                        </div>

                        {/* Group 3: Dossiers & Accounts Management */}
                        <div className='border-t pt-3'>
                            <h3 className='text-lg font-semibold text-gray-600 mb-3'>Gestion des Dossiers</h3>
                            <SidebarItem to="/dashboard/folders" icon={<FaFolderOpen />} label="Dossier" pathname={pathname} />
                        </div>

                        {/* Group 3: Dossiers & Accounts Management */}
                        <div className='border-t pt-3'>
                            <h3 className='text-lg font-semibold text-gray-600 mb-3'>Gestion des comptes </h3>
                            <SidebarItem to="/dashboard/sessions" icon={<FaCog />} label="Gestion des comptes" pathname={pathname} />
                        </div>
                    </>
                )}

                {/* Backoffice Routes (without Gestion des comptes) */}
                {store.userInfo?.role === 'backoffice' && (
                    <>
                        <SidebarItem to="/dashboard/backoffice" icon={<AiFillDashboard />} label="Tableau de bord" pathname={pathname} />
                    </>
                )}

                {/* Logout Button */}
                <li>
                    <Link
                        to="/dashboard/Profile"
                        className={`px-3 py-2 hover:shadow-lg hover:shadow-yellow-500/20 w-full 
                            rounded-sm flex gap-x-2 justify-start items-center hover:bg-yellow-500 hover:text-white cursor-pointer`}>
                        <span className="text-xl"><FaRegUser /></span>
                        <span>Profile</span>
                    </Link>
                    <div onClick={logout} className={`px-3 py-2 hover:shadow-lg hover:shadow-red-500/20 w-full 
                        rounded-sm flex gap-x-2 justify-start items-center hover:bg-red-500 hover:text-white cursor-pointer`}>
                        <span className='text-xl'><IoLogOutOutline /></span>
                        <span>Déconnexion</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
