import React, { useState, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa6"
import { Trash2 } from "lucide-react";


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
  const [adresseAud, setadresseAud] = useState("");
  const [villeAud, setvilleAud] = useState("");
  const [codePostalAud, setcodePostalAud] = useState("");
  const [siteWebAud, setsiteWebAud] = useState("");
  const [montCapAud, setmontCapAud] = useState("");

  const [nomRepParAud, setnomRepParAud] = useState("");
  const [prenomRepParAud, setprenomRepParAud] = useState("");
  const [genreRepParAud, setgenreRepParAud] = useState("");
  const [fonctionRepParAud, setfonctionRepParAud] = useState("");
  const [numTelRepParAud, setnumTelRepParAud] = useState("");
  const [emailRepParAud, setemailRepParAud] = useState("");

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


    const [rges, setRges] = useState([]); 
    const [newqualification, setNewqualification] = useState("");
    const [newnumeroRGE, setNewnumeroRGE] = useState("");
    const [neweditLe, setNeweditLe] = useState("");
    const [newvalableJA, setNewvalableJA] = useState("");

     const [title, setTitle] = useState("");
      const [file, setFile] = useState(null);
      const [filesList, setFilesList] = useState([]);


  const getAuditeurs = async () => {
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


 
  
  
  const getRges = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/auditeurs/get-rges/${auditeurs_id}`);
      setRges(data.rges);
    } catch (error) {
      console.error("Error fetching rges:", error);
    }
  };
  
  const submitRge = async (e) => {
    e.preventDefault();
    if (!newqualification.trim()) {
      toast.error("Le quali ne peut pas être vide !");
      return;
    }

    if (!newnumeroRGE.trim()) {
      toast.error("Le num  ne peut pas être vide !");
      return;
    }

    if (!neweditLe.trim()) {
      toast.error("Le date ne peut pas être vide !");
      return;
    }

    if (!newvalableJA.trim()) {
      toast.error("Le date ne peut pas être vide !");
      return;
    }
  
  
    try {
      const response = await axios.post(
        `${base_url}/api/auditeurs/rge/${auditeurs_id}`,
        { qualification: newqualification, numeroRGE: newnumeroRGE, editLe:neweditLe, valableJA: newvalableJA},
        { headers: { Authorization: `Bearer ${store.token}` } }
      );
      toast.success("rge ajouté !");
      setNewqualification(""); 
      setNewnumeroRGE(""); 
      setNeweditLe(""); 
      setNewvalableJA(""); 
      setRges([...rges, response.data.data]);
    } catch (error) {
      console.error("Error submitting rge:", error);
      toast.error("Erreur lors de l'ajout du rge.");
    }
  };


  
  const getFiles = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/auditeurs/get-files/${auditeurs_id}`);
      setFilesList(data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const submitFile = async (e) => {
    e.preventDefault();
    if (!file || !title) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("auditeurs_id", auditeurs_id);

    try {
      await axios.post(`${base_url}/api/auditeurs/upload-files`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Fichier importé avec succès !");
      setTitle("");
      setFile(null);
      getFiles();
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Échec de l'importation du fichier.");
    }
  };

  const deleteFile = async (auditeurs_id, pdf_id) => {
    try {
      await axios.delete(`${base_url}/api/auditeurs/${auditeurs_id}/pdf/${pdf_id}`);
      toast.success("Fichier supprimé avec succès !");
      getFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Échec de la suppression du fichier.");
    }
};



  
  useEffect(() => {
    getAuditeurs();
    getRges();
    getFiles();
  }, [auditeurs_id]);

  return (
    <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
    <div className='bg-white rounded-lg shadow-lg w-full max-w-6xl border border-gray-300'>
  
      <div className='flex justify-between items-center p-4 border-b border-gray-200'>
        <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Détails de l'Auditeur</h2>
      </div>
  
      <div className="grid grid-cols-4 gap-4 p-4">
  
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
          
          <div className="bg-white p-4 mt-5">
                  <form onSubmit={submitFile}>
                    <div className="grid grid-cols-2 gap-x-8 mb-3">
                      <div className="flex flex-col gap-y-2">
                        <label className="text-md font-medium text-gray-600">Titre*</label>
                        <input
                          onChange={(e) => setTitle(e.target.value)}
                          value={title}
                          required
                          type="text"
                          placeholder="Titre du fichier"
                          className="px-3 py-2 rounded-md border border-gray-300 focus:border-green-500"
                        />
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <label className="text-md font-medium text-gray-600">Importer PDF*</label>
                        <input
                          onChange={(e) => setFile(e.target.files[0])}
                          required
                          type="file"
                          accept="application/pdf"
                          className="px-3 py-2 rounded-md border border-gray-300 focus:border-green-500"
                        />
                      </div>
                    </div>
                    <button type="submit" className="px-3 py-2 bg-[#1960a9] rounded text-white hover:bg-[#9fc327]">
                      Importer PDF
                    </button>
                  </form>
                </div>
          
                <div className="bg-white p-4 mt-5">
            <h3 className="text-lg font-bold">Rapports téléchargés</h3>
            {filesList.length > 0 ? (
              <div className="mt-3 flex gap-4 overflow-x-auto">
                {filesList.map((file, index) => (
                  <div key={index} className="py-2 border p-2 rounded shadow-md min-w-[150px] flex flex-col items-center">
                    <a 
                      href={`${base_url}/files/${file.pdf}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 block text-center mb-2"
                    >
                      {file.title}
                    </a>
                    <button
                      onClick={() => deleteFile(auditeurs_id, file._id)}
                      className="mt-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                      
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Aucun fichier téléchargé.</p>
            )}
          </div>
          
                  </div>

        {/* RGE SECTION */}
        <div className="w-full flex flex-col items-center bg-white text-slate-700 border border-gray-100 rounded-md shadow-sm p-4">
          <h3 className="text-lg font-semibold text-[#1960a9] mb-2">RGE</h3>
          
          
          <div className="bg-white shadow-md rounded-lg p-6 mt-5">
  {/* Display Comments */}
  <div className="space-y-4">
    {rges.map((rge, index) => (
      <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
        {/* User Info */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            {/* Profile Icon */}
            {/* <div className="w-10 h-10 bg-blue-500 text-white font-bold flex items-center justify-center rounded-full">
              {rge.name.charAt(0).toUpperCase()}
            </div> */}
            <div>
              
             
              <span className="text-xs text-gray-500">
                {new Date(rge.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        {/* Comment Text */}
        <p className="text-gray-700 bg-white p-3 rounded-md shadow-inner">
        <p className="font-semibold text-gray-800">{rge.qualification}</p>
        <p className="font-semibold text-gray-800">{rge.numeroRGE}</p>
              <p className="font-semibold text-gray-800">{rge.editLe}</p>
              <p className="font-semibold text-gray-800">{rge.valableJA}</p>
        </p>
      </div>
    ))}
  </div>

  {/* Comment Input Section */}
  <form onSubmit={submitRge} className="mt-6">
  <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>Ajouter RGE</summary>


    <div className="flex flex-col gap-3">
      <label className="text-md font-medium text-gray-700">Ajouter un RGE</label>
      

<select
                required
                name="genre"
                id="genre"
                value={newqualification}
                onChange={(e) => setNewqualification(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:border-green-500 h-10"
              >
                <option value="">-- Sélectionner Qualification --</option>
                <option value="QUALIBAT">QUALIBAT</option>
                <option value="QualiBOIS">QualiBOIS</option>
                <option value="QualiSOL">QualiSOL</option>
                <option value="QualiPV">QualiPV</option>
                <option value="QualiPAC">QualiPAC</option>
                <option value="Ventilation +">Ventilation +</option>
                <option value="OPQIBI">OPQIBI</option>
                <option value="AFNOR">AFNOR</option>
              </select>
    </div>
    <div className="flex flex-col gap-3">
      <label className="text-md font-medium text-gray-700">Numéro RGE</label>
       <input onChange={(e) => setNewnumeroRGE(e.target.value)} value={newnumeroRGE} required type='text' placeholder='Numéro RGE' name='newnumeroRGE' id='newnumeroRGE' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
    </div>
    <div className="flex flex-col gap-3">
      <label className="text-md font-medium text-gray-700">Edité Le</label>
      <input onChange={(e) => setNeweditLe(e.target.value)} value={neweditLe} required type='date' placeholder='Edité Le' name='neweditLe' id='neweditLe' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
    </div>
    <div className="flex flex-col gap-3">
      <label className="text-md font-medium text-gray-700">VALABLE JUSQU'AU</label>   
      <input onChange={(e) => setNewvalableJA(e.target.value)} value={newvalableJA} required type='date' placeholder='VALABLE JUSQU"AU' name='newvalableJA' id='newvalableJA' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
    </div>
    <button
      type="submit"
      className="w-full mt-4 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 transition"
    >
      Ajouter RGE
    </button>
</details>

  </form>
</div>
        </div>
  
      </div>
    </div>
  </div>
  
  );
};

export default AuditeurDetails;
