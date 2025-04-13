import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

const BenificaireDetails = () => {
  const { benificaires_id } = useParams();
  const { store } = useContext(storeContext);
//   const [benificaires, setDossiers] = useState([]); 

  //benif
  const [genre, setgenre] = useState("");
  const [nomBeni, setnomBeni] = useState("");
  const [prenomBeni, setprenomBeni] = useState("");
  const [datenaiBeni, setdatenaiBeni] = useState("");
  const [emailBeni, setemailBeni] = useState("");
  const [emailAnah, setemailAnah] = useState("");
  const [passwordAnah, setpasswordAnah] = useState("");
  const [villeBeni, setvilleBeni] = useState("");
  const [numBeni, setnumBeni] = useState("");
  const [voieBeni, setvoieBeni] = useState("");
  const [codepostalBeni, setcodepostalBeni] = useState("");
  const [etageBeni, setetageBeni] = useState("");
  const [escalierBeni, setescalierBeni] = useState("");
  const [communeBeni, setcommuneBeni] = useState("");
  const [porteBeni, setporteBeni] = useState("");
  const [batimentBeni, setbatimentBeni] = useState("");
  const [numTelBeni, setnumTelBeni] = useState("");
  const [numPortableBeni, setnumPortableBeni] = useState("");
  const [RIBBeni, setRIBBeni] = useState("");
  const [IBANBeni, setIBANBeni] = useState("");
  const [ZoneClimaBeni, setZoneClimaBeni] = useState("");
  const [nomprenomPerConf, setnomprenomPerConf] = useState("");
  const [enQualitPerConf, setenQualitPerConf] = useState("");
  


  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [filesList, setFilesList] = useState([]);




  const getBenificaires = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/benificaires/${benificaires_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setgenre(data?.benificaires?.demandeurNom);
      setnomBeni(data?.benificaires?.nomBeni);
      setprenomBeni(data?.benificaires?.prenomBeni);
      setdatenaiBeni(data?.benificaires?.datenaiBeni);
      setemailBeni(data?.benificaires?.emailBeni);
      setemailAnah(data?.benificaires?.emailAnah);
      setpasswordAnah(data?.benificaires?.passwordAnah);
      setvilleBeni(data?.benificaires?.villeBeni);
      setnumBeni(data?.benificaires?.numBeni);
      setvoieBeni(data?.benificaires?.voieBeni);
      setcodepostalBeni(data?.benificaires?.codepostalBeni);
      setetageBeni(data?.benificaires?.etageBeni);
      setescalierBeni(data?.benificaires?.escalierBeni);
      setcommuneBeni(data?.benificaires?.communeBeni);
      setporteBeni(data?.benificaires?.porteBeni);
      setbatimentBeni(data?.benificaires?.batimentBeni);
      setnumTelBeni(data?.benificaires?.numTelBeni);
      setnumPortableBeni(data?.benificaires?.numPortableBeni);
      setRIBBeni(data?.benificaires?.RIBBeni);
      setIBANBeni(data?.benificaires?.IBANBeni);
      setZoneClimaBeni(data?.benificaires?.ZoneClimaBeni);
      setnomprenomPerConf(data?.benificaires?.nomprenomPerConf);
      setenQualitPerConf(data?.benificaires?.enQualitPerConf);
    } catch (error) {
      console.error("Error fetching bénificaire details:", error);
    }
  };

  const getFiles = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/benificaires/get-files/${benificaires_id}`);
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
    formData.append("benificaires_id", benificaires_id);

    try {
      await axios.post(`${base_url}/api/benificaires/upload-files`, formData, {
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

  const deleteFile = async (benificaires_id, pdf_id) => {
    try {
      await axios.delete(`${base_url}/api/benificaires/${benificaires_id}/pdf/${pdf_id}`);
      toast.success("Fichier supprimé avec succès !");
      getFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Échec de la suppression du fichier.");
    }
};



useEffect(() => {
    getBenificaires();
  }, [benificaires_id]);
  return (

    //<div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
    <div className="mt-3">
      <div className="grid grid-cols-2 gap-x-2">

        <div className="w-full p-2 flex flex-col items-left bg-white text-slate-700">
        <div className="flex flex-col items-center justify-center space-y-2">
  <div className="w-[50px] h-[50px] rounded-full bg-gray-300 flex items-center justify-center">
    <span className="text-md font-bold">
      {nomBeni.charAt(0)}{prenomBeni.charAt(0)}
    </span>
  </div>

  <span className="text-md font-bold">
    {nomBeni} {prenomBeni}
  </span>
</div>
          <span className="text-md font-bold">Date de naissance : {datenaiBeni}</span>
          <span className="text-md font-bold">Email (1): {emailBeni}</span>
          <span className="text-md font-bold">Adresse: {numBeni} {voieBeni}</span>
          <span className="text-red-600 font-bold text-center">-------------------------------------------- Anah --------------------------------------------</span>
          <span className="text-md font-bold">Email : {emailBeni}</span>
          <span className="text-md font-bold">Mot de passe : {passwordAnah}</span>
          <span className="text-md font-bold">N°: {numBeni}</span>
          <span className="text-md font-bold">Voie: {voieBeni}</span>
          <span className="text-md font-bold">Code Postal: {codepostalBeni}</span>
          <span className="text-md font-bold">Ville: {villeBeni}</span>
          <span className="text-red-600 font-bold text-center">-------------------------------------------- Ménage --------------------------------------------</span>
          <span className="text-md font-bold">Commune: {communeBeni}</span>
          {/* <span className="text-xs font-bold">Mèl: </span><span>{etageBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{escalierBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{communeBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{porteBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{batimentBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{numTelBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{numPortableBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{RIBBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{IBANBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{ZoneClimaBeni}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{nomprenomPerConf}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{enQualitPerConf}</span> */}
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <h2>PRJ000xxx</h2>
        </div>
        
      </div>


      <div className="bg-white p-4 mt-5">
        <form onSubmit={submitFile}>
          <div className="grid grid-cols-1 gap-x-8 mb-3">
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
            <button type="submit" className="px-3 py-2 bg-[#1960a9] rounded text-white hover:bg-[#9fc327]">
            Importer PDF
          </button>

          
          </div>

       
          </div> 

          <div>
               
          <h3 className="text-lg font-bold">Liste des fichiers</h3>
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
            onClick={() => deleteFile(benificaires_id, file._id)}
            className="mt-2 text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-5 h-5" />
            
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p>Aucun document ajouté.</p>
  )}
          </div>
          
          
        </form>
        
      </div>
      

      <div className="bg-white p-4 mt-5">
</div>



</div>
  );
};

export default BenificaireDetails;
