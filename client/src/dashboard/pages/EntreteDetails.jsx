import React, { useState, useEffect, useContext } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import { FaImage } from "react-icons/fa6"
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";


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
  const [adresseEntRe, setadresseEntRe] = useState("");
  const [villeEntRe, setvilleEntRe] = useState("");
  const [codePostalEntRe, setcodePostalEntRe] = useState("");
  const [siteWebEntRe, setsiteWebEntRe] = useState("");
  const [montCapEntRe, setmontCapEntRe] = useState("");
  const [tauxTVAEntRe, settauxTVAEntRe] = useState("");

  const [nomRepParEntRe, setnomRepParEntRe] = useState("");
  const [prenomRepParEntRe, setprenomRepParEntRe] = useState("");
  const [genreRepParEntRe, setgenreRepParEntRe] = useState("");
  const [fonctionRepParEntRe, setfonctionRepParEntRe] = useState("");
  const [numTelRepParEntRe, setnumTelRepParEntRe] = useState("");
  const [emailRepParEntRe, setemailRepParEntRe] = useState("");


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

  const [genRevAudEntRe, setgenRevAudEntRe] = useState("");
  const [genDevisEntRe, setgenDevisEntRe] = useState("");


   const [rges, setRges] = useState([]); 
      const [newqualification, setNewqualification] = useState("");
      const [newnumeroRGE, setNewnumeroRGE] = useState("");
      const [neweditLe, setNeweditLe] = useState("");
      const [newvalableJA, setNewvalableJA] = useState("");
  
       const [title, setTitle] = useState("");
        const [file, setFile] = useState(null);
        const [filesList, setFilesList] = useState([]);

  useEffect(() => {
    getBackoffices();
    
    getRges();
    getFiles();
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
      setadresseEntRe(data?.entretes?.adresseEntRe);
      setvilleEntRe(data?.entretes?.villeEntRe);
      setcodePostalEntRe(data?.entretes?.codePostalEntRe);
      setsiteWebEntRe(data?.entretes?.siteWebEntRe);
      setmontCapEntRe(data?.entretes?.montCapEntRe);
      settauxTVAEntRe(data?.entretes?.tauxTVAEntRe);

      setnomRepParEntRe(data?.entretes?.nomRepParEntRe);
      setprenomRepParEntRe(data?.entretes?.prenomRepParEntRe);
      setgenreRepParEntRe(data?.entretes?.genreRepParEntRe);
      setfonctionRepParEntRe(data?.entretes?.fonctionRepParEntRe);
      setnumTelRepParEntRe(data?.entretes?.numTelRepParEntRe);
      setemailRepParEntRe(data?.entretes?.emailRepParEntRe);


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

      setgenRevAudEntRe(data?.entretes?.genRevAudEntRe);
      setgenDevisEntRe(data?.entretes?.genDevisEntRe);
    } catch (error) {
      console.error("Error fetching entretes details:", error);
    }
  };

  const getRges = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/entretes/get-rges/${entretes_id}`);
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
        `${base_url}/api/entretes/rge/${entretes_id}`,
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
      const { data } = await axios.get(`${base_url}/api/entretes/get-files/${entretes_id}`);
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
    formData.append("entretes_id", entretes_id);

    try {
      await axios.post(`${base_url}/api/entretes/upload-files`, formData, {
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

  const deleteFile = async (entretes_id, pdf_id) => {
    try {
      await axios.delete(`${base_url}/api/entretes/${entretes_id}/pdf/${pdf_id}`);
      toast.success("Fichier supprimé avec succès !");
      getFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Échec de la suppression du fichier.");
    }
};


  return (
<div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
  <div className='bg-white rounded-lg shadow-lg w-full max-w-6xl border border-gray-300'>

    <div className='flex justify-between items-center p-4 border-b border-gray-200'>
      <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Détails de Entreprise retenue</h2>
    </div>

    <div className="grid grid-cols-4 gap-4 p-4 text-slate-700">
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
        <span className="text-md font-bold">Email : <span className="font-extrabold">{email}</span></span>
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
                              onClick={() => deleteFile(entretes_id, file._id)}
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


      <div className="col-span-1 p-2 flex flex-col items-center bg-white border-l border-gray-200">
        <span className="text-md font-bold">Liste des fichiers</span>
        
        

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

export default EntreteDetails;
