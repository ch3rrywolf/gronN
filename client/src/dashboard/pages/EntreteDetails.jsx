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

  const [nomRepParEntRe, setnomRepParEntRe] = useState("");
  const [prenomRepParEntRe, setprenomRepParEntRe] = useState("");
  const [genreRepParEntRe, setgenreRepParEntRe] = useState("");
  const [fonctionRepParEntRe, setfonctionRepParEntRe] = useState("");
  const [numTelRepParEntRe, setnumTelRepParEntRe] = useState("");
  const [emailRepParEntRe, setemailRepParEntRe] = useState("");

  const [qualifiRGEEntRe, setqualifiRGEEntRe] = useState("");
  const [numRGEEntRe, setnumRGEEntRe] = useState("");
  const [editLeRGEEntRe, seteditLeRGEEntRe] = useState("");
  const [valableJusRGEEntRe, setvalableJusRGEEntRe] = useState("");

  const [sirenIdentEntRe, setsirenIdentEntRe] = useState("");
  const [siretIdentEntRe, setsiretIdentEntRe] = useState("");
  const [identTVAIdentEntRe, setidentTVAIdentEntRe] = useState("");
  const [rcsIdentEntRe, setrcsIdentEntRe] = useState("");
  const [numAPEIdentEntRe, setnumAPEIdentEntRe] = useState("");
  const [numAgrIdentEntRe, setnumAgrIdentEntRe] = useState("");
  const [numDecIdentEntRe, setnumDecIdentEntRe] = useState("");

  const [raisocAssEntRe, setraisocAssEntRe] = useState("");
  const [adresseAssEntRe, setadresseAssEntRe] = useState("");
  const [numPolAssEntRe, setnumPolAssEntRe] = useState("");
  const [dateEmiAssEntRe, setdateEmiAssEntRe] = useState("");
  const [dateFinAssEntRe, setdateFinAssEntRe] = useState("");
  const [documentsEntRe, setdocumentsEntRe] = useState("");

  const [genRevAudEntRe, setgenRevAudEntRe] = useState("");
  const [genDevisEntRe, setgenDevisEntRe] = useState("");

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

      setnomRepParEntRe(data?.entretes?.nomRepParEntRe);
      setprenomRepParEntRe(data?.entretes?.prenomRepParEntRe);
      setgenreRepParEntRe(data?.entretes?.genreRepParEntRe);
      setfonctionRepParEntRe(data?.entretes?.fonctionRepParEntRe);
      setnumTelRepParEntRe(data?.entretes?.numTelRepParEntRe);
      setemailRepParEntRe(data?.entretes?.emailRepParEntRe);

      setqualifiRGEEntRe(data?.entretes?.qualifiRGEEntRe);
      setnumRGEEntRe(data?.entretes?.numRGEEntRe);
      seteditLeRGEEntRe(data?.entretes?.editLeRGEEntRe);
      setvalableJusRGEEntRe(data?.entretes?.valableJusRGEEntRe);

      setsirenIdentEntRe(data?.entretes?.sirenIdentEntRe);
      setsiretIdentEntRe(data?.entretes?.siretIdentEntRe);
      setidentTVAIdentEntRe(data?.entretes?.identTVAIdentEntRe);
      setrcsIdentEntRe(data?.entretes?.rcsIdentEntRe);
      setnumAPEIdentEntRe(data?.entretes?.numAPEIdentEntRe);
      setnumAgrIdentEntRe(data?.entretes?.numAgrIdentEntRe);
      setnumDecIdentEntRe(data?.entretes?.numDecIdentEntRe);

      setraisocAssEntRe(data?.entretes?.raisocAssEntRe);
      setadresseAssEntRe(data?.entretes?.adresseAssEntRe);
      setnumPolAssEntRe(data?.entretes?.numPolAssEntRe);
      setdateEmiAssEntRe(data?.entretes?.dateEmiAssEntRe);
      setdateFinAssEntRe(data?.entretes?.dateFinAssEntRe);
      setdocumentsEntRe(data?.entretes?.documentsEntRe);

      setgenRevAudEntRe(data?.entretes?.genRevAudEntRe);
      setgenDevisEntRe(data?.entretes?.genDevisEntRe);
    } catch (error) {
      console.error("Error fetching entretes details:", error);
    }
  };


 


  return (
<div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
  <div className='bg-white rounded-lg shadow-lg w-full max-w-6xl border border-gray-300'>

    <div className='flex justify-between items-center p-4 border-b border-gray-200'>
      <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Détails de Entreprise retenue</h2>
    </div>

    <div className="grid grid-cols-3 gap-4 p-4 text-slate-700">
      <div className="col-span-1 flex flex-col gap-2">
        <span className="text-md font-bold">Status: <span className="font-extrabold">{accountStatus}</span></span>
        <span className="text-md font-bold">{image}</span>
        <label htmlFor="img" className="w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed">
          <div className='flex justify-center items-center flex-col gap-y-2'>
            <span className='text-2xl'><FaImage/></span>
            <span>Select Image</span>
          </div>
        </label>
        <span className="text-md font-bold">Forme juridique: <span className="font-extrabold">{formJurEntRe}</span></span>
        <span className="text-md font-bold">Numéro de téléphone: <span className="font-extrabold">{numTelEntRe}</span></span>
        <span className="text-md font-bold">Email : <span className="font-extrabold">{emailEntRe}</span></span>
        <span className="text-md font-bold">Adresse: <span className="font-extrabold">{adresseEntRe}</span></span>
        <span className="text-md font-bold">Code postal: <span className="font-extrabold">{codePostalEntRe}</span></span>
        <span className="text-md font-bold">Ville: <span className="font-extrabold">{villeEntRe}</span></span>

        <span className="text-md font-bold text-red-600">Représentant</span>
        <span className="text-md font-bold">Nom et Prénom : <span className="font-extrabold">{nomRepParEntRe} {prenomRepParEntRe}</span></span>

        <span className="text-md font-bold text-red-600">Identifiant</span>
        <span className="text-md font-bold">SIREN: <span className="font-extrabold">{sirenIdentEntRe}</span></span>
        <span className="text-md font-bold">SIRET: <span className="font-extrabold">{siretIdentEntRe}</span></span>
        <span className="text-md font-bold">Identifiant TVA: <span className="font-extrabold">{identTVAIdentEntRe}</span></span>
        <span className="text-md font-bold">RCS: <span className="font-extrabold">{rcsIdentEntRe}</span></span>
        <span className="text-md font-bold">Numéro APE: <span className="font-extrabold">{numAPEIdentEntRe}</span></span>

        <span className="text-md font-bold text-red-600">Assurance</span>
        <span className="text-md font-bold">Raison sociale: <span className="font-extrabold">{raisocAssEntRe}</span></span>
        <span className="text-md font-bold">Numéro police: <span className="font-extrabold">{numPolAssEntRe}</span></span>
        <span className="text-md font-bold">Date d'émission: <span className="font-extrabold">{dateEmiAssEntRe}</span></span>
        <span className="text-md font-bold">Date de fin: <span className="font-extrabold">{dateFinAssEntRe}</span></span>
      </div>

      <div className="col-span-1 p-2 flex flex-col items-center bg-white border-l border-gray-200">
        <span className="text-md font-bold">PROJETS</span>
        {/* Add your project data here */}
      </div>

      <div className="col-span-1 p-2 flex flex-col items-center bg-white border-l border-gray-200">
        <span className="text-md font-bold">Liste des fichiers</span>
        {/* Add your file list here */}
      </div>
    </div>

  </div>
</div>

  );
};

export default EntreteDetails;
