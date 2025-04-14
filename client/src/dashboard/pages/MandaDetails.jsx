import React, { useState, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import { FaImage } from "react-icons/fa6"


const MandaDetails = () => {
  const { mandas_id } = useParams();
  const { store } = useContext(storeContext);
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [accountStatus, setAccountStatus] = useState("");

  const [raiSocMan, setraiSocMan] = useState("");
  const [numTelMan, setnumTelMan] = useState("");
  const [formJurMan, setformJurMan] = useState("");
  const [emailMan, setemailMan] = useState("");
  const [adresseMan, setadresseMan] = useState("");
  const [villeMan, setvilleMan] = useState("");
  const [codePostalMan, setcodePostalMan] = useState("");
  const [siteWebMan, setsiteWebMan] = useState("");
  const [montCapMan, setmontCapMan] = useState("");
  const [tauxTVAMan, settauxTVAMan] = useState("");
  const [signatureMan, setsignatureMan] = useState("");

  const [nomRepParMan, setnomRepParMan] = useState("");
  const [prenomRepParMan, setprenomRepParMan] = useState("");
  const [genreRepParMan, setgenreRepParMan] = useState("");
  const [fonctionRepParMan, setfonctionRepParMan] = useState("");
  const [numTelRepParMan, setnumTelRepParMan] = useState("");
  const [emailRepParMan, setemailRepParMan] = useState("");


  const [sirenIdentMan, setsirenIdentMan] = useState("");
  const [siretIdentMan, setsiretIdentMan] = useState("");
  const [identTVAIdentMan, setidentTVAIdentMan] = useState("");
  const [rcsIdentMan, setrcsIdentMan] = useState("");
  const [numAPEIdentMan, setnumAPEIdentMan] = useState("");
  const [numAgrIdentMan, setnumAgrIdentMan] = useState("");
  const [numDecIdentMan, setnumDecIdentMan] = useState("");

  const [raisocAssMan, setraisocAssMan] = useState("");
  const [adresseAssMan, setadresseAssMan] = useState("");
  const [numPolAssMan, setnumPolAssMan] = useState("");
  const [dateEmiAssMan, setdateEmiAssMan] = useState("");
  const [dateFinAssMan, setdateFinAssMan] = useState("");

  useEffect(() => {
    getMandas();
  }, [mandas_id]);

  const getMandas = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/mandas/${mandas_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setNom(data?.mandas?.name);
      setEmail(data?.mandas?.email);
      setPassword(data?.mandas?.password);
      setRole(data?.mandas?.role);
      setImage(data?.mandas?.image);
      setAccountStatus(data?.mandas?.accountStatus);

      setraiSocMan(data?.mandas?.raiSocMan);
      setnumTelMan(data?.mandas?.numTelMan);
      setformJurMan(data?.mandas?.formJurMan);
      setemailMan(data?.mandas?.emailMan);
      setadresseMan(data?.mandas?.adresseMan);
      setvilleMan(data?.mandas?.villeMan);
      setcodePostalMan(data?.mandas?.codePostalMan);
      setsiteWebMan(data?.mandas?.siteWebMan);
      setmontCapMan(data?.mandas?.montCapMan);
      settauxTVAMan(data?.mandas?.tauxTVAMan);
      setsignatureMan(data?.mandas?.signatureMan);

      setnomRepParMan(data?.mandas?.nomRepParMan);
      setprenomRepParMan(data?.mandas?.prenomRepParMan);
      setgenreRepParMan(data?.mandas?.genreRepParMan);
      setfonctionRepParMan(data?.mandas?.fonctionRepParMan);
      setnumTelRepParMan(data?.mandas?.numTelRepParMan);
      setemailRepParMan(data?.mandas?.emailRepParMan);


      setsirenIdentMan(data?.mandas?.sirenIdentMan);
      setsiretIdentMan(data?.mandas?.siretIdentMan);
      setidentTVAIdentMan(data?.mandas?.identTVAIdentMan);
      setrcsIdentMan(data?.mandas?.rcsIdentMan);
      setnumAPEIdentMan(data?.mandas?.numAPEIdentMan);
      setnumAgrIdentMan(data?.mandas?.numAgrIdentMan);
      setnumDecIdentMan(data?.mandas?.numDecIdentMan);

      setraisocAssMan(data?.mandas?.raisocAssMan);
      setadresseAssMan(data?.mandas?.adresseAssMan);
      setnumPolAssMan(data?.mandas?.numPolAssMan);
      setdateEmiAssMan(data?.mandas?.dateEmiAssMan);
      setdateFinAssMan(data?.mandas?.dateFinAssMan);
    } catch (error) {
      console.error("Error fetching Mandas details:", error);
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
          <span className="text-md font-bold">Forme juridique: {formJurMan}</span>
          <span className="text-md font-bold">Numéro de téléphone: {numTelMan}</span>
          <span className="text-md font-bold">Email : {emailMan}</span>
          <span className="text-md font-bold">Adresse: {adresseMan}</span>
          <span className="text-md font-bold">Code postal: {codePostalMan}</span>
          <span className="text-md font-bold">Ville: {villeMan}</span>
          
          <span className="text-md font-bold text-red-600">Représentant</span>
          <span className="text-md font-bold">Nom et Prénom : {nomRepParMan} {prenomRepParMan}</span>
          <span className="text-md font-bold text-red-600">Identifiant</span>
          <span className="text-md font-bold">SIREN: {sirenIdentMan}</span>
          <span className="text-md font-bold">SIRET: {siretIdentMan}</span>
          <span className="text-md font-bold">Identifiant TVA: {identTVAIdentMan}</span>
          <span className="text-md font-bold">RCS: {rcsIdentMan}</span>
          <span className="text-md font-bold">Numéro APE: {numAPEIdentMan}</span>
          <span className="text-md font-bold text-red-600">Assurance</span>
          <span className="text-md font-bold ">Raison sociale: {raisocAssMan}</span>
          <span className="text-md font-bold ">Numéro police:{numPolAssMan}</span>
          <span className="text-md font-bold ">Date d'émission: {dateEmiAssMan}</span>
          <span className="text-md font-bold ">Date de fin: {dateFinAssMan}</span>
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

export default MandaDetails;
