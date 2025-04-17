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
  // const [emailAud, setemailAud] = useState("");
  const [adresseAud, setadresseAud] = useState("");
  const [villeAud, setvilleAud] = useState("");
  const [codePostalAud, setcodePostalAud] = useState("");
  const [siteWebAud, setsiteWebAud] = useState("");
  const [montCapAud, setmontCapAud] = useState("");
  // const [tauxTVAAud, settauxTVAAud] = useState("");
  // const [signatureAud, setsignatureAud] = useState("");

  const [nomRepParAud, setnomRepParAud] = useState("");
  const [prenomRepParAud, setprenomRepParAud] = useState("");
  const [genreRepParAud, setgenreRepParAud] = useState("");
  const [fonctionRepParAud, setfonctionRepParAud] = useState("");
  const [numTelRepParAud, setnumTelRepParAud] = useState("");
  const [emailRepParAud, setemailRepParAud] = useState("");

  // const [qualifiRGEAud, setqualifiRGEAud] = useState("");
  // const [numRGEAud, setnumRGEAud] = useState("");
  // const [editLeRGEAud, seteditLeRGEAud] = useState("");
  // const [valableJusRGEAud, setvalableJusRGEAud] = useState("");


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
      // setemailAud(data?.auditeurs?.emailAud);
      setadresseAud(data?.auditeurs?.adresseAud);
      setvilleAud(data?.auditeurs?.villeAud);
      setcodePostalAud(data?.auditeurs?.codePostalAud);
      setsiteWebAud(data?.auditeurs?.siteWebAud);
      setmontCapAud(data?.auditeurs?.montCapAud);
      // settauxTVAAud(data?.auditeurs?.tauxTVAAud);
      // setsignatureAud(data?.auditeurs?.signatureAud);

      setnomRepParAud(data?.auditeurs?.nomRepParAud);
      setprenomRepParAud(data?.auditeurs?.prenomRepParAud);
      setgenreRepParAud(data?.auditeurs?.genreRepParAud);
      setfonctionRepParAud(data?.auditeurs?.fonctionRepParAud);
      setnumTelRepParAud(data?.auditeurs?.numTelRepParAud);
      setemailRepParAud(data?.auditeurs?.emailRepParAud);

      // setqualifiRGEAud(data?.auditeurs?.qualifiRGEAud);
      // setnumRGEAud(data?.auditeurs?.numRGEAud);
      // seteditLeRGEAud(data?.auditeurs?.editLeRGEAud);
      // setvalableJusRGEAud(data?.auditeurs?.valableJusRGEAud);


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
    <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
    <div className='bg-white rounded-lg shadow-lg w-full max-w-6xl border border-gray-300'>
  
      <div className='flex justify-between items-center p-4 border-b border-gray-200'>
        <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Détails de l'Auditeur</h2>
      </div>
  
      <div className="grid grid-cols-3 gap-4 p-4">
  
        {/* INFO SECTION */}
        <div className="w-full flex flex-col gap-2 bg-white text-slate-700">
          <span className="text-md font-bold">Status: {accountStatus}</span>
          <span className="text-md font-bold">{image}</span>
  
          <label htmlFor="img" className="w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed self-center">
            <div className='flex justify-center items-center flex-col gap-y-2'>
              <span className='text-2xl'><FaImage /></span>
              <span>Select Image</span>
            </div>
          </label>
  
          <span className="text-md font-bold">Forme juridique: {formJurAud}</span>
          <span className="text-md font-bold">Numéro de téléphone: {numTelAud}</span>
          <span className="text-md font-bold">Email : {email}</span>
          <span className="text-md font-bold">Adresse: {adresseAud}</span>
          <span className="text-md font-bold">Code postal: {codePostalAud}</span>
          <span className="text-md font-bold">Ville: {villeAud}</span>
  
          <span className="text-md font-bold text-red-600 mt-4">Représentant</span>
          <span className="text-md font-bold">Nom et Prénom : {nomRepParAud} {prenomRepParAud}</span>
  
          <span className="text-md font-bold text-red-600 mt-4">Identifiant</span>
          <span className="text-md font-bold">SIREN: {sirenIdentAud}</span>
          <span className="text-md font-bold">SIRET: {siretIdentAud}</span>
          <span className="text-md font-bold">Identifiant TVA: {identTVAIdentAud}</span>
          <span className="text-md font-bold">RCS: {rcsIdentAud}</span>
          <span className="text-md font-bold">Numéro APE: {numAPEIdentAud}</span>
  
          <span className="text-md font-bold text-red-600 mt-4">Assurance</span>
          <span className="text-md font-bold">Raison sociale: {raisocAssAud}</span>
          <span className="text-md font-bold">Numéro police: {numPolAssAud}</span>
          <span className="text-md font-bold">Date d'émission: {dateEmiAssAud}</span>
          <span className="text-md font-bold">Date de fin: {dateFinAssAud}</span>
        </div>
  
        {/* PROJECTS SECTION */}
        <div className="w-full flex flex-col items-center bg-white text-slate-700 border border-gray-100 rounded-md shadow-sm p-4">
          <h3 className="text-lg font-semibold text-[#1960a9] mb-2">Projets</h3>
          <p></p>
        </div>
  
        {/* FILE LIST SECTION */}
        <div className="w-full flex flex-col items-center bg-white text-slate-700 border border-gray-100 rounded-md shadow-sm p-4">
          <h3 className="text-lg font-semibold text-[#1960a9] mb-2">Liste des fichiers</h3>
          <p></p>
        </div>
  
      </div>
    </div>
  </div>
  
  );
};

export default AuditeurDetails;
