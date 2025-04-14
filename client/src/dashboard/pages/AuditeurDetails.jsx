import React, { useState, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import { FaImage } from "react-icons/fa6"


const AuditeurDetails = () => {
  const { auditeurs_id } = useParams();
  const { store } = useContext(storeContext);
  const [name, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [accountStatus, setAccountStatus] = useState("");

  const [raiSocAud, setraiSocAud] = useState("");
  const [numTelAud, setnumTelAud] = useState("");
  const [formJurAud, setformJurAud] = useState("");
  const [emailAud, setemailAud] = useState("");
  const [adresseAud, setadresseAud] = useState("");
  const [villeAud, setvilleAud] = useState("");
  const [codePostalAud, setcodePostalAud] = useState("");
  const [siteWebAud, setsiteWebAud] = useState("");
  const [montCapAud, setmontCapAud] = useState("");
  const [tauxTVAAud, settauxTVAAud] = useState("");
  const [signatureAud, setsignatureAud] = useState("");

  const [nomRepParAud, setnomRepParAud] = useState("");
  const [prenomRepParAud, setprenomRepParAud] = useState("");
  const [genreRepParAud, setgenreRepParAud] = useState("");
  const [fonctionRepParAud, setfonctionRepParAud] = useState("");
  const [numTelRepParAud, setnumTelRepParAud] = useState("");
  const [emailRepParAud, setemailRepParAud] = useState("");

  const [qualifiRGEAud, setqualifiRGEAud] = useState("");
  const [numRGEAud, setnumRGEAud] = useState("");
  const [editLeRGEAud, seteditLeRGEAud] = useState("");
  const [valableJusRGEAud, setvalableJusRGEAud] = useState("");


  const [sirenIdentAud, setsirenIdentAud] = useState("");
  const [siretIdentAud, setsiretIdentAud] = useState("");
  const [identTVAIdentAud, setidentTVAIdentAud] = useState("");
  const [rcsIdentAud, setrcsIdentAud] = useState("");
  const [numAPEIdentAud, setnumAPEIdentAud] = useState("");
  const [numAgrIdentAud, setnumAgrIdentAud] = useState("");
  const [numDecIdentAud, setnumDecIdentAud] = useState("");

  const [raisocAssAud, setraisocAssAud] = useState("");
  const [adresseAssAud, setadresseAssAud] = useState("");
  const [numPolAssAud, setnumPolAssAud] = useState("");
  const [dateEmiAssAud, setdateEmiAssAud] = useState("");
  const [dateFinAssAud, setdateFinAssAud] = useState("");

  useEffect(() => {
    getMandas();
  }, [auditeurs_id]);

  const getMandas = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/auditeurs/${auditeurs_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setNom(data?.auditeurs?.name);
      setEmail(data?.auditeurs?.email);
      setPassword(data?.auditeurs?.password);
      setRole(data?.auditeurs?.role);
      setImage(data?.auditeurs?.image);
      setAccountStatus(data?.auditeurs?.accountStatus);

      setraiSocAud(data?.auditeurs?.raiSocAud);
      setnumTelAud(data?.auditeurs?.numTelAud);
      setformJurAud(data?.auditeurs?.formJurAud);
      setemailAud(data?.auditeurs?.emailAud);
      setadresseAud(data?.auditeurs?.adresseAud);
      setvilleAud(data?.auditeurs?.villeAud);
      setcodePostalAud(data?.auditeurs?.codePostalAud);
      setsiteWebAud(data?.auditeurs?.siteWebAud);
      setmontCapAud(data?.auditeurs?.montCapAud);
      settauxTVAAud(data?.auditeurs?.tauxTVAAud);
      setsignatureAud(data?.auditeurs?.signatureAud);

      setnomRepParAud(data?.auditeurs?.nomRepParAud);
      setprenomRepParAud(data?.auditeurs?.prenomRepParAud);
      setgenreRepParAud(data?.auditeurs?.genreRepParAud);
      setfonctionRepParAud(data?.auditeurs?.fonctionRepParAud);
      setnumTelRepParAud(data?.auditeurs?.numTelRepParAud);
      setemailRepParAud(data?.auditeurs?.emailRepParAud);

      setqualifiRGEAud(data?.auditeurs?.qualifiRGEAud);
      setnumRGEAud(data?.auditeurs?.numRGEAud);
      seteditLeRGEAud(data?.auditeurs?.editLeRGEAud);
      setvalableJusRGEAud(data?.auditeurs?.valableJusRGEAud);


      setsirenIdentAud(data?.auditeurs?.sirenIdentAud);
      setsiretIdentAud(data?.auditeurs?.siretIdentAud);
      setidentTVAIdentAud(data?.auditeurs?.identTVAIdentAud);
      setrcsIdentAud(data?.auditeurs?.rcsIdentAud);
      setnumAPEIdentAud(data?.auditeurs?.numAPEIdentAud);
      setnumAgrIdentAud(data?.auditeurs?.numAgrIdentAud);
      setnumDecIdentAud(data?.auditeurs?.numDecIdentAud);

      setraisocAssAud(data?.auditeurs?.raisocAssAud);
      setadresseAssAud(data?.auditeurs?.adresseAssAud);
      setnumPolAssAud(data?.auditeurs?.numPolAssAud);
      setdateEmiAssAud(data?.auditeurs?.dateEmiAssAud);
      setdateFinAssAud(data?.auditeurs?.dateFinAssAud);
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
          <span className="text-md font-bold">Forme juridique: {formJurAud}</span>
          <span className="text-md font-bold">Numéro de téléphone: {numTelAud}</span>
          <span className="text-md font-bold">Email : {emailAud}</span>
          <span className="text-md font-bold">Adresse: {adresseAud}</span>
          <span className="text-md font-bold">Code postal: {codePostalAud}</span>
          <span className="text-md font-bold">Ville: {villeAud}</span>
          
          <span className="text-md font-bold text-red-600">Représentant</span>
          <span className="text-md font-bold">Nom et Prénom : {nomRepParAud} {prenomRepParAud}</span>
          <span className="text-md font-bold text-red-600">Identifiant</span>
          <span className="text-md font-bold">SIREN: {sirenIdentAud}</span>
          <span className="text-md font-bold">SIRET: {siretIdentAud}</span>
          <span className="text-md font-bold">Identifiant TVA: {identTVAIdentAud}</span>
          <span className="text-md font-bold">RCS: {rcsIdentAud}</span>
          <span className="text-md font-bold">Numéro APE: {numAPEIdentAud}</span>
          <span className="text-md font-bold text-red-600">Assurance</span>
          <span className="text-md font-bold ">Raison sociale: {raisocAssAud}</span>
          <span className="text-md font-bold ">Numéro police:{numPolAssAud}</span>
          <span className="text-md font-bold ">Date d'émission: {dateEmiAssAud}</span>
          <span className="text-md font-bold ">Date de fin: {dateFinAssAud}</span>
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

export default AuditeurDetails;
