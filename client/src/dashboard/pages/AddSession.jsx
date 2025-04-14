import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';

const AddSession = () => {
  const navigate = useNavigate();
  const { store } = useContext(storeContext);
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [loader, setLoader] = useState(false);

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const { data } = await axios.post(`${base_url}/api/session/add`, state, {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      });
      setLoader(false);
      toast.success(data.message);
      navigate('/dashboard/sessions');
    } catch (error) {
      setLoader(false);
      toast.error(error.response?.data?.message || 'Erreur lors de l’ajout');
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">Ajouter une Session</h2>
        <Link
          to="/dashboard/sessions"
          className="px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]"
        >
          Sessions
        </Link>
      </div>

      <div className="p-4">
        <form onSubmit={submit}>
          <div className="grid grid-cols-1 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="text-md font-medium text-gray-600">
                Nom et Prénom*
              </label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Nom et Prénom"
                value={state.name}
                onChange={inputHandler}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-x-8 mb-3">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-md font-medium text-gray-600">
                Email*
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="exemple@gmail.com"
                value={state.email}
                onChange={inputHandler}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="password" className="text-md font-medium text-gray-600">
                Mot de Passe*
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={state.password}
                onChange={inputHandler}
                className="px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <label htmlFor="role" className="text-md font-medium text-gray-600">
                Rôle*
              </label>
              <select
                required
                name="role"
                id="role"
                value={state.role}
                onChange={inputHandler}
                className="px-3 py-2 rounded-md border border-gray-300 focus:border-green-500 h-10"
              >
                <option value="">-- Sélectionner un rôle --</option>
                <option value="admin">Admin</option>
                <option value="inspecteur">Inspecteur</option>
                <option value="auditeur">Auditeur</option>
                <option value="entreprise">Entreprise Reconnue</option>
                <option value="manda">Mandataire</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 mb-3">
            <div className="mt-4">
              <button
                type="submit"
                disabled={loader}
                className="px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]"
              >
                {loader ? 'Loading...' : 'Ajouter Session'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSession;
