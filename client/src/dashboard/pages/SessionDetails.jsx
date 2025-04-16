import React, { useState, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import { FaImage } from "react-icons/fa6"


const SessionDetails = () => {
  const { sessions_id } = useParams();
  const { store } = useContext(storeContext);
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [accountStatus, setAccountStatus] = useState("");

  useEffect(() => {
    getSessions();
  }, [sessions_id]);

  const getSessions = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/sessions/${sessions_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setNom(data?.sessions?.name);
      setEmail(data?.sessions?.email);
      setPassword(data?.sessions?.password);
      setRole(data?.sessions?.role);
      setImage(data?.sessions?.image);
      setAccountStatus(data?.sessions?.accountStatus);
    } catch (error) {
      console.error("Error fetching sessions details:", error);
    }
  };


 


  return (
    <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
    <div className='bg-white rounded-lg shadow-lg w-full max-w-6xl border border-gray-300'>
  
      <div className='flex justify-between items-center p-4 border-b border-gray-200'>
        <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Détails de Compte</h2>
      </div>
  
      {/* Top Summary Info */}
      <div className="mt-3">
        <div className="grid grid-cols-5 gap-x-4 p-4">
          <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700 shadow rounded">
            <span className="text-xl font-bold">Référence</span>
            <span>#{sessions_id}</span>
          </div>
          <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700 shadow rounded">
            <span className="text-xl font-bold">Nom</span>
            <span>{name}</span>
          </div>
          <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700 shadow rounded">
            <span className="text-xl font-bold">Info Email</span>
            <span className="text-xs font-bold">Email:</span>
            <span>{email}</span>
          </div>
          <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700 shadow rounded">
            <span className="text-xl font-bold">Rôle</span>
            <span className="text-xs font-bold">Rôle:</span>
            <span>{role}</span>
          </div>
          <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700 shadow rounded">
            <span className="text-xl font-bold">Donneur d'Ordre</span>
            <span className="text-xs font-bold">Status:</span>
            <span>{accountStatus}</span>
          </div>
        </div>
      </div>

      </div>
      </div>
  );
};

export default SessionDetails;
