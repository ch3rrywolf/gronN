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
    getBackoffices();
  }, [sessions_id]);

  const getBackoffices = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/sessions/${sessions_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setNom(data?.backoffices?.name);
      setEmail(data?.backoffices?.email);
      setPassword(data?.backoffices?.password);
      setRole(data?.backoffices?.role);
      setImage(data?.backoffices?.image);
      setAccountStatus(data?.backoffices?.accountStatus);
    } catch (error) {
      console.error("Error fetching backoffices details:", error);
    }
  };


 


  return (
    <div className="mt-3">

      <div className="grid grid-cols-5 gap-x-4">
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xl font-bold">Référence</span>
          <span>#{sessions_id}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xl font-bold">Name</span>
          <span>{name}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xl font-bold">Info Email</span>
          <span className="text-xs font-bold">Email: </span><span>{email}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xl font-bold">Rôle</span>
          <span className="text-xs font-bold">Rôle: </span><span>{role}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xl font-bold">Donneur d'Ordre</span>
          <span className="text-xs font-bold">image: </span><span>{image}</span>
          <span className="text-xs font-bold">Status: </span><span>{accountStatus}</span>
        </div>
      </div>

      <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
            <div className='bg-white gap-x-3 p-6 rounded flex justify-center items-center'>
              <div>
                <label htmlFor="img" className={`w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
                  <div className='flex justify-center items-center flex-col gap-y-2'>
                    <span className='text-2xl'><FaImage/></span>
                    <span>Select Image</span>
                  </div>
                </label>
                <input className='hidden' type="file" id='img' />
              </div>
              <div className='text-[#404040] flex flex-col gap-y-1 justify-center items-start'>
                <span>Nom et Prénom: {name}</span>
                <span>Email: {email}</span>
                <span>Rôle : {role}</span>
              </div>
            </div>
            {/* <div className='bg-white px-6 py-4 text-[#404040]'>
              <h2 className='pb-3 text-center'>Change mot de passe {password}</h2>
              <form>
              <div className='grid grid-cols-1 gap-y-5 mb-3'>
                  <div className='flex flex-col gap-y-2'>
                    <label className='text-md font-medium text-gray-600' htmlFor='old_password'>old mot de passe*</label>
                    <input type='password' placeholder='Old mot de passe' name='old_password' id='old_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <label className='text-md font-medium text-gray-600' htmlFor='new_password'>New mot de Passe*</label>
                    <input type='password' placeholder='New mot de passe' name='new_password' id='new_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
                  </div>
                  <div className='mt-4'>
                  <button className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>Change mot de passe</button>
                  </div>
                  </div>
              </form>
            </div> */}
          </div>

      


    </div>
  );
};

export default SessionDetails;
