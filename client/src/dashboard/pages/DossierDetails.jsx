import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

const DossierDetails = () => {
  const { dossiers_id } = useParams();
  const { store } = useContext(storeContext);
  const [demandeurNom, setDemandeurNom] = useState("");
  const [demandeurPreNom, setDemandeurPreNom] = useState("");
  const [demandeurAdresse, setDemandeurAdresse] = useState("");
  const [numero, setnumero] = useState("");
  const [ville, setville] = useState("");
  const [voie, setvoie] = useState("");
  const [demandeurCommune, setDemandeurCommune] = useState("");
  const [demandeurCodePostal, setDemandeurCodePostal] = useState("");
  const [batiment, setBatiment] = useState("");
  const [etage, setEtage] = useState("");
  const [porte, setPorte] = useState("");
  const [escalier, setEscalier] = useState("");
  const [tel, setTel] = useState("");
  const [mel, setMel] = useState("");
  const [numDossier, setNumDossier] = useState("");
  const [dossierStatus, setDossierStatus] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [filesList, setFilesList] = useState([]);

  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState("");

  const [representants, setRepresentants] = useState([]); 
  const [drepresentants, setDRepresentants] = useState([]); 
  // const [idSelected, setIdSelected] = useState("");
  // const selectedRep = representants.find((rep) => rep._id === idSelected);
  const [selectedRepresentant, setSelectedRepresentant] = useState('');

  const lotDocuments = [
    {
      title: "Lot Documents 1",
      section: 1,
      documents: [
        { link: `/dashboard/dossiers/form/conmararc/${dossiers_id}`, label: "Contrat MAR ARCADIA", status: "accessible" },
      { link: `/dashboard/dossiers/form/conmarval/${dossiers_id}`, label: "Contrat MAR VALOREM", status: "accessible" },
      { link: `/dashboard/dossiers/form/devmararcmod/${dossiers_id}`, label: "Devis MAR ARCADIA MODESTE", status: "accessible" },
      { link: `/dashboard/dossiers/form/devmararctremod/${dossiers_id}`, label: "Devis MAR ARCADIA TRES MODESTE", status: "accessible" },
      { link: `/dashboard/dossiers/form/devmarmodval/${dossiers_id}`, label: "Devis MAR Modestes VALOREM", status: "accessible" },
      { link: `/dashboard/dossiers/form/devmartremodval/${dossiers_id}`, label: "Devis MAR Trés Modeste VALOREM", status: "accessible" },
      { link: `/dashboard/dossiers/form/grianadulogvie/${dossiers_id}`, label: "Grille d’analyse du logement VIERGE", status: "accessible" },
      { link: `/dashboard/dossiers/form/manmarvie/${dossiers_id}`, label: "Mandat MAR VIERGE", status: "accessible" },
      { link: `/dashboard/dossiers/form/syndegrianadulogarc/${dossiers_id}`, label: "Synthèse_de_grille_d’analyse_du_logement_arcadia", status: "accessible" },
      { link: `/dashboard/dossiers/form/syndegrianadulogval/${dossiers_id}`, label: "Synthèse_de_grille_d’analyse_du_logement_VALOREM..", status: "accessible" },
      ],
    },
    {
      title: "Lot Documents 2",
      section: 2,
      documents: [
        { link: `/dashboard/dossiers/form/plandefinancement/${dossiers_id}`, label: "PLAN DE FINANCEMENT", status: "en Cours" },
      { link: `/dashboard/dossiers/form/attdetrav/${dossiers_id}`, label: "ATTESTATION DE TRAVAUX (DEVIS)", status: "en Cours" },
      { link: `/dashboard/dossiers/form/consdemmpr/${dossiers_id}`, label: "CONSENTEMENT DEMANDE MPR", status: "en Cours" },
      { link: `/dashboard/dossiers/form/fichdesynt/${dossiers_id}`, label: "FICHE DE SYNTHESE", status: "en Cours" },
      { link: `/dashboard/dossiers/form/plandefinancementdet/${dossiers_id}`, label: "PLAN DE FINANCEMENT DETAILLÉ", status: "en Attente" },
      { link: `/dashboard/dossiers/form/fichdepres/${dossiers_id}`, label: "FICHE DE PRESENTATION", status: "en Attente" },
      ],
    },
    {
      title: "Lot Documents 3",
      section: 3,
      documents: [
        { link: `/dashboard/dossiers/form/engdupro/${dossiers_id}`, label: "ENGAGEMENT DU PROPRIETAIRE", status: "en Attente" },
      { link: `/dashboard/dossiers/form/solduprolemai/${dossiers_id}`, label: "SOLLICITATION DU PROPRIETAIRE - LE MAIRE", status: "en Attente" },
      { link: `/dashboard/dossiers/form/souduprolepre/${dossiers_id}`, label: "SOLLICITATION DU PROPRIETAIRE - LE PRESIDENT", status: "en Attente" },
      { link: `/dashboard/dossiers/form/hausaoe/${dossiers_id}`, label: "HAUTE SAONE", status: "en Attente" },
      { link: `/dashboard/dossiers/form/permed/${dossiers_id}`, label: "PERPIGNAN MEDITERRANEE", status: "en Attente" },
      ],
    },
  ];

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const getDossiers = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/dossiers/${dossiers_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setDemandeurNom(data?.dossiers?.demandeurNom);
      setDemandeurPreNom(data?.dossiers?.demandeurPreNom);
      setDemandeurAdresse(data?.dossiers?.demandeurAdresse);
      setnumero(data?.dossiers?.numero);
      setville(data?.dossiers?.ville);
      setvoie(data?.dossiers?.voie);
      setDemandeurCommune(data?.dossiers?.demandeurCommune);
      setDemandeurCodePostal(data?.dossiers?.demandeurCodePostal);
      setBatiment(data?.dossiers?.batiment);
      setEtage(data?.dossiers?.etage);
      setPorte(data?.dossiers?.porte);
      setEscalier(data?.dossiers?.escalier);
      setTel(data?.dossiers?.tel);
      setMel(data?.dossiers?.mel);
      setNumDossier(data?.dossiers?.numDossier);
      setDossierStatus(data?.dossiers?.dossierStatus);
    } catch (error) {
      console.error("Error fetching dossier details:", error);
    }
  };

  const getFiles = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/dossiers/get-files/${dossiers_id}`);
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
    formData.append("dossiers_id", dossiers_id);

    try {
      await axios.post(`${base_url}/api/dossiers/upload-files`, formData, {
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

  const deleteFile = async (dossiers_id, pdf_id) => {
    try {
      await axios.delete(`${base_url}/api/dossiers/${dossiers_id}/pdf/${pdf_id}`);
      toast.success("Fichier supprimé avec succès !");
      getFiles();
    } catch (error) {
      console.error("Error deleting file:", error);
      toast.error("Échec de la suppression du fichier.");
    }
};



const getComments = async () => {
  try {
    const { data } = await axios.get(`${base_url}/api/dossiers/get-comments/${dossiers_id}`);
    setComments(data.comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
};

const submitComment = async (e) => {
  e.preventDefault();
  if (!newComment.trim()) {
    toast.error("Le commentaire ne peut pas être vide !");
    return;
  }

  if (!store.userInfo || !store.userInfo.name) {
    toast.error("Utilisateur non authentifié !");
    return;
  }

  try {
    const response = await axios.post(
      `${base_url}/api/dossiers/comment/${dossiers_id}`,
      { name: store.userInfo.name, commentText: newComment },
      { headers: { Authorization: `Bearer ${store.token}` } }
    );
    toast.success("Commentaire ajouté !");
    setNewComment(""); 
    setComments([...comments, response.data.data]);
  } catch (error) {
    console.error("Error submitting comment:", error);
    toast.error("Erreur lors de l'ajout du commentaire.");
  }
};

// rep

const getRepresentants = async () => {
  try {
    const { data } = await axios.get(`${base_url}/api/representants`);
    setRepresentants(data.representants);
  } catch (error) {
    console.error("Error fetching representants:", error);
  }
};

const getDRepresentants = async () => {
  try {
    const { data } = await axios.get(`${base_url}/api/dossiers/get-representants/${dossiers_id}`);
    setDRepresentants(data.representants);
  } catch (error) {
    console.error("Error fetching representants:", error);
  }
};


const deleteRepre = async (dossiers_id, representant_id) => {
  try {
    await axios.delete(`${base_url}/api/dossiers/${dossiers_id}/rep/${representant_id}`);
    toast.success("Fichier supprimé avec succès !");
    getDRepresentants();
  } catch (error) {
    console.error("Error deleting file:", error);
    toast.error("Échec de la suppression du fichier.");
  }
};



const handleSubmitRep = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.put(`${base_url}/api/dossiers/update-ass-rep/${dossiers_id}`, {
      // dossiers_id: dossiers_id,
      representant_id: selectedRepresentant,
    });
    toast.success("représentant Effectué !");

    console.log('Dossier updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating dossier:', error);
  }
};

const handleSelectChange = (e) => {
  setSelectedRepresentant(e.target.value);
};

useEffect(() => {
  getDossiers();
  getFiles();
  getComments();
  getRepresentants();
  getDRepresentants();
}, [dossiers_id]);
  return (
    <div className="mt-3">
      <div className="grid grid-cols-6 gap-x-4">
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
        <span className="text-xl font-bold">IDENTITÉ DU DEMANDEUR DE LA SUBVENTION</span>
        <span className="text-xs font-bold">Nom:</span><span>{demandeurNom}</span>
          <span className="text-xs font-bold">PreNom: </span><span>{demandeurPreNom}</span>
        <span className="text-xs font-bold">N° Dossier:</span><span>#{numDossier}</span>
        {dossierStatus === 'Validé' && <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs">{dossierStatus}</span>}
        {dossierStatus === 'Non Validé' && <span className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs">{dossierStatus}</span>}
        {dossierStatus === 'Annulé' && <span className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs">{dossierStatus}</span>}
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          
          <span className="text-xs font-bold">adresse: </span><span>{demandeurAdresse}</span>
          <span className="text-xs font-bold">N°: </span><span>{numero}</span>
          <span className="text-xs font-bold">Ville: </span><span>{ville}</span>
          <span className="text-xs font-bold">Voie: </span><span>{voie}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xs font-bold">Bâtiment: </span><span>{batiment}</span>
          <span className="text-xs font-bold">Etage: </span><span>{etage}</span>
          <span className="text-xs font-bold">Porte: </span><span>{porte}</span>
          <span className="text-xs font-bold">Escalier: </span><span>{escalier}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xs font-bold">Code Postal: </span><span>{demandeurCodePostal}</span>
          <span className="text-xs font-bold">Commune: </span><span>{demandeurCommune}</span>
        </div>
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xs font-bold">Tél: </span><span>{tel}</span>
          <span className="text-xs font-bold">Mèl: </span><span>{mel}</span>
        </div>
        
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span>Répresentant:</span>
          {drepresentants && drepresentants.length > 0 ? (
  drepresentants.map((rep, index) => (
    <div key={index}>
      <span className="text-xs font-bold">Nom: </span><span>{rep.nom}</span>
      <br />
      <span className="text-xs font-bold">Prénom: </span><span>{rep.prenom}</span>
      <button
            onClick={() => deleteRepre(dossiers_id, rep._id)}
            className="mt-2 text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-5 h-5" />
            
          </button>
    </div>
  ))
) : (
  <p>Aucun représentant trouvé.</p>
)}

          <span>

          <form onSubmit={handleSubmitRep}>
          <select
        value={selectedRepresentant}
        onChange={handleSelectChange}
        className="form-select"
      >
        <option value="">Select a representant</option>
        {representants && representants.length > 0 ? (
  representants.map((rep) => (
    <option key={rep._id} value={rep._id}>
      {rep.nom} {rep.prenom} ({rep.raisoc})
    </option>
  ))
) : (
  <option disabled>Aucun représentant disponible</option>
)}
      </select>

  <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white">
    Assigner Représentant
  </button>
</form>

          </span>
        </div>
      </div>

      <div className="space-y-4">
      {lotDocuments.map(({ title, section, documents }) => (
        <div key={section} className="bg-white p-5 mt-5">
          <div
            className="flex justify-between items-center cursor-pointer bg-gray-200 p-3 rounded"
            onClick={() => toggleSection(section)}
          >
            <h6>{title}</h6>
            <span>{openSection === section ? "▲" : "▼"}</span>
          </div>

          {openSection === section && (
            <div className="flex flex-wrap gap-4 mt-3">
              {documents.map(({ link, label, status }, index) => (
                <div key={index} className="relative">
                  <span
                    className={`absolute -top-6 -left-1 text-white text-xs font-bold px-1 py-1 rounded-full ${
                      status === "accessible" ? "bg-green-600" : status === "en Attente" ? "bg-red-500" : "bg-orange-400"
                    }`}
                  >
                    {status.toUpperCase()}
                  </span>
                  <Link
                    to={link}
                    className="px-3 py-2 bg-[#9fc327] rounded text-white hover:bg-[#1960a9] relative"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>



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
            onClick={() => deleteFile(dossiers_id, file._id)}
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

<div className="bg-white shadow-md rounded-lg p-6 mt-5">
  {/* Display Comments */}
  <div className="space-y-4">
    {comments.map((comment, index) => (
      <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
        {/* User Info */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            {/* Profile Icon */}
            <div className="w-10 h-10 bg-blue-500 text-white font-bold flex items-center justify-center rounded-full">
              {comment.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-800">{comment.name}</p>
              <span className="text-xs text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
        {/* Comment Text */}
        <p className="text-gray-700 bg-white p-3 rounded-md shadow-inner">
          {comment.commentText}
        </p>
      </div>
    ))}
  </div>

  {/* Comment Input Section */}
  <form onSubmit={submitComment} className="mt-6">
    <div className="flex flex-col gap-3">
      <label className="text-md font-medium text-gray-700">Ajouter un commentaire</label>
      <textarea
        onChange={(e) => setNewComment(e.target.value)}
        value={newComment}
        placeholder="Écrivez votre commentaire ici..."
        className="px-4 py-3 border rounded-lg shadow-sm bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full mt-4 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 transition"
    >
      Ajouter Commentaire
    </button>
  </form>
</div>

</div>
  );
};

export default DossierDetails;
