import React, { useState, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import { FaImage } from "react-icons/fa6"


const EntreteDetails = () => {
  const { entretes_id } = useParams();
  const { store } = useContext(storeContext);
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [accountStatus, setAccountStatus] = useState("");

  const [raiSocEntRe, setraiSocEntRe] = useState("");
  const [numTelEntRe, setnumTelEntRe] = useState("");
  const [formJurEntRe, setformJurEntRe] = useState("");
  const [emailEntRe, setemailEntRe] = useState("");
  const [adresseEntRe, setadresseEntRe] = useState("");
  const [villeEntRe, setvilleEntRe] = useState("");
  const [codePostalEntRe, setcodePostalEntRe] = useState("");
  const [siteWebEntRe, setsiteWebEntRe] = useState("");
  const [montCapEntRe, setmontCapEntRe] = useState("");
  const [tauxTVAEntRe, settauxTVAEntRe] = useState("");
  const [signatureEntRe, setsignatureEntRe] = useState("");

  useEffect(() => {
    getBackoffices();
  }, [entretes_id]);

  const getBackoffices = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/entretes/${entretes_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setNom(data?.entretes?.name);
      setEmail(data?.entretes?.email);
      setPassword(data?.entretes?.password);
      setRole(data?.entretes?.role);
      setImage(data?.entretes?.image);
      setAccountStatus(data?.entretes?.accountStatus);

      setraiSocEntRe(data?.entretes?.raiSocEntRe);
      setnumTelEntRe(data?.entretes?.numTelEntRe);
      setformJurEntRe(data?.entretes?.formJurEntRe);
      setemailEntRe(data?.entretes?.emailEntRe);
      setadresseEntRe(data?.entretes?.adresseEntRe);
      setvilleEntRe(data?.entretes?.villeEntRe);
      setcodePostalEntRe(data?.entretes?.codePostalEntRe);
      setsiteWebEntRe(data?.entretes?.siteWebEntRe);
      setmontCapEntRe(data?.entretes?.montCapEntRe);
      settauxTVAEntRe(data?.entretes?.tauxTVAEntRe);
      setsignatureEntRe(data?.entretes?.signatureEntRe);
    } catch (error) {
      console.error("Error fetching entretes details:", error);
    }
  };


 


  return (
    <div className="mt-3">
{/* 
<div className='w-full grid grid-cols-3 gap-x-6 mt-5'>
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

            </div> */}
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
            
          

      <div className="grid grid-cols-3 gap-x-4">
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
        <span className="text-md font-bold">Status: {accountStatus}</span>
        <span className="text-md font-bold"> {image}</span>
        <label htmlFor="img" className={`w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
                  <div className='flex justify-center items-center flex-col gap-y-2'>
                    <span className='text-2xl'><FaImage/></span>
                    <span>Select Image</span>
                  </div>
                </label>
          <span className="text-md font-bold">Forme juridique: {formJurEntRe}</span>
          <span className="text-md font-bold">Numéro de téléphone: {numTelEntRe}</span>
          <span className="text-md font-bold">Email : {emailEntRe}</span>
          <span className="text-md font-bold">Adresse: {adresseEntRe}</span>
          <span className="text-md font-bold">Code postal: {codePostalEntRe}</span>
          <span className="text-md font-bold">Ville: {villeEntRe}</span>
          
          <span className="text-md font-bold text-red-600">Représentant</span>
          <span className="text-md font-bold">Nom et Prénom : {"nomRepParEntRe"} {"prenomRepParEntRe"}</span>
          <span className="text-md font-bold text-red-600">Identifiant</span>
          <span className="text-md font-bold">SIREN: {"sirenIdentEntRe"}</span>
          <span className="text-md font-bold">SIRET: {"siretIdentEntRe"}</span>
          <span className="text-md font-bold">Identifiant TVA: {"identTVAIdentEntRe"}</span>
          <span className="text-md font-bold">RCS: {"rcsIdentEntRe"}</span>
          <span className="text-md font-bold">Numéro APE: {"numAPEIdentEntRe"}</span>
          <span className="text-md font-bold text-red-600">Assurance</span>
          <span className="text-md font-bold ">Raison sociale: {"raisocAssEntRe"}</span>
          <span className="text-md font-bold ">Numéro police:{"numPolAssEntRe"}</span>
          <span className="text-md font-bold ">Date d'émission: {"dateEmiAssEntRe"}</span>
          <span className="text-md font-bold ">Date de fin: {"dateFinAssEntRe"}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          PROJETS
        </div>

        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
        Liste des fichiers
        </div>
      </div>

      

      


    </div>
  );
};

export default EntreteDetails;
