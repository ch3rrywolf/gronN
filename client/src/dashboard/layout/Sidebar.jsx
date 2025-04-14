import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { FaPlus } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { BiNews } from 'react-icons/bi';
import { CgProfile } from "react-icons/cg";

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
            <div className='h-[150px] flex justify-center items-center'>
                <Link to='/dashboard/'>
                    <img className='w-[200px] h-[130px]' src="/src/assets/logo-mar.png" alt="logo" />
                </Link>
            </div>
            <ul className='px-3 flex flex-col gap-y-1 font-medium'>

                {/* Admin Routes */}
                {store.userInfo?.role === 'admin' && (
                    <>
                        <SidebarItem to="/dashboard/admin" icon={<AiFillDashboard />} label="Tableau de bord" pathname={pathname} />
                        <SidebarItem to="/dashboard/benificaires" icon={<FaPlus />} label="Bénificaires" pathname={pathname} />
                        <SidebarItem to="/dashboard/inspecteurs" icon={<FaPlus />} label="Inspecteurs" pathname={pathname} />
                        <SidebarItem to="/dashboard/marques" icon={<FaPlus />} label="Marques" pathname={pathname} />
                        <SidebarItem to="/dashboard/prestations" icon={<FaPlus />} label="Prestations" pathname={pathname} />
                        <SidebarItem to="/dashboard/prestationmars" icon={<FaPlus />} label="Prestations Mar" pathname={pathname} />
                        <SidebarItem to="/dashboard/gestes" icon={<FaPlus />} label="Geste" pathname={pathname} />
                        <SidebarItem to="/dashboard/backoffices" icon={<BiNews />} label="Gestion des comptes" pathname={pathname} />
                        
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
