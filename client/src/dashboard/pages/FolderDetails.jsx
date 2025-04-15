import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

const FolderDetails = () => {
  const { folders_id } = useParams();
  const { store } = useContext(storeContext);

  const [demandeurNom, setDemandeurNom] = useState("");
  const [demandeurPreNom, setDemandeurPreNom] = useState("");
  const [numDossier, setNumDossier] = useState("");
  const [dossierStatus, setDossierStatus] = useState("");

  const [selectedStep, setSelectedStep] = useState(1);
  const [formStep1, setFormStep1] = useState({ fieldA: "", fieldB: "" });
  const [formStep2, setFormStep2] = useState({ fieldC: "", fieldD: "" });
  const [formStep3, setFormStep3] = useState({ fieldE: "", fieldF: "" });
  const [formStep4, setFormStep4] = useState({ fieldG: "", fieldH: "" });

  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (formStep1.fieldA && formStep1.fieldB) {
      toast.success("Étape 1 validée ✅");
    } else {
      toast.error("Remplir tous les champs de l'étape 1");
    }
  };

  const handleStep2Submit = (e) => {
    e.preventDefault();
    if (formStep2.fieldC && formStep2.fieldD) {
      toast.success("Étape 2 validée ✅");
    } else {
      toast.error("Remplir tous les champs de l'étape 2");
    }
  };

  const handleStep3Submit = (e) => {
    e.preventDefault();
    if (formStep3.fieldE && formStep3.fieldF) {
      toast.success("Étape 1 validée ✅");
    } else {
      toast.error("Remplir tous les champs de l'étape 3");
    }
  };

  const handleStep4Submit = (e) => {
    e.preventDefault();
    if (formStep4.fieldG && formStep4.fieldH) {
      toast.success("Étape 2 validée ✅");
    } else {
      toast.error("Remplir tous les champs de l'étape 4");
    }
  };

  const getFolders = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/folders/${folders_id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setDemandeurNom(data?.dossiers?.demandeurNom);
      setDemandeurPreNom(data?.dossiers?.demandeurPreNom);
      setNumDossier(data?.dossiers?.numDossier);
      setDossierStatus(data?.dossiers?.dossierStatus);
    } catch (error) {
      console.error("Error fetching dossier details:", error);
    }
  };

  useEffect(() => {
    getFolders();
  }, [folders_id]);

  return (
    <div className="mt-3">
      {/* Dossier Info */}
      <div className="grid grid-cols-1 gap-x-4">
        <div className="w-full p-2 flex flex-col items-center bg-white text-slate-700">
          <span className="text-xl font-bold">IDENTITÉ DU DEMANDEUR DE LA SUBVENTION</span>
          {dossierStatus === "Validé" && (
            <span className="px-2 py-[2px] bg-green-100 text-green-800 rounded-lg text-xs">{dossierStatus}</span>
          )}
          {dossierStatus === "Non Validé" && (
            <span className="px-2 py-[2px] bg-gray-100 text-gray-800 rounded-lg text-xs">{dossierStatus}</span>
          )}
          {dossierStatus === "Annulé" && (
            <span className="px-2 py-[2px] bg-red-100 text-red-800 rounded-lg text-xs">{dossierStatus}</span>
          )}
        </div>
      </div>

      {/* Step Navigation + Forms */}
      <div className="mt-6 grid grid-cols-4 gap-4">
        {/* Sidebar */}
        <div className="col-span-1 bg-white p-4 rounded shadow">
          <h3 className="text-md font-bold mb-4">Étapes</h3>
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedStep === 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedStep(1)}
              >
                Étape 1: Création du dossier et simulation
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedStep === 2 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedStep(2)}
              >
                Étape 2: Offres MAR
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedStep === 3 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedStep(3)}
              >
                Étape 3: Selection des Entreprises
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-3 py-2 rounded ${
                  selectedStep === 4 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedStep(4)}
              >
                Étape 4: Planification de(s) 1ère(s) Visite(s)
              </button>
            </li>
          </ul>
        </div>

        {/* Form Content */}
        <div className="col-span-3 bg-white p-5 rounded shadow">
          {selectedStep === 1 && (
            <form onSubmit={handleStep1Submit} className="space-y-4">
              <h2 className="text-lg font-bold">Étape 1: Création du dossier et simulation</h2>
              <input
                type="text"
                placeholder="Champ A"
                className="border p-2 w-full"
                value={formStep1.fieldA}
                onChange={(e) => setFormStep1({ ...formStep1, fieldA: e.target.value })}
              />
              <input
                type="text"
                placeholder="Champ B"
                className="border p-2 w-full"
                value={formStep1.fieldB}
                onChange={(e) => setFormStep1({ ...formStep1, fieldB: e.target.value })}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Valider Étape 1
              </button>
            </form>
          )}

          {selectedStep === 2 && (
            <form onSubmit={handleStep2Submit} className="space-y-4">
              <h2 className="text-lg font-bold">Étape 2: Offres MAR</h2>
              <input
                type="text"
                placeholder="Champ C"
                className="border p-2 w-full"
                value={formStep2.fieldC}
                onChange={(e) => setFormStep2({ ...formStep2, fieldC: e.target.value })}
              />
              <input
                type="text"
                placeholder="Champ D"
                className="border p-2 w-full"
                value={formStep2.fieldD}
                onChange={(e) => setFormStep2({ ...formStep2, fieldD: e.target.value })}
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Valider Étape 2
              </button>
            </form>
          )}

{selectedStep === 3 && (
            <form onSubmit={handleStep3Submit} className="space-y-4">
              <h2 className="text-lg font-bold">Étape 3: Selection des Entreprises</h2>
              <input
                type="text"
                placeholder="Champ E"
                className="border p-2 w-full"
                value={formStep3.fieldE}
                onChange={(e) => setFormStep3({ ...formStep3, fieldE: e.target.value })}
              />
              <input
                type="text"
                placeholder="Champ F"
                className="border p-2 w-full"
                value={formStep3.fieldF}
                onChange={(e) => setFormStep3({ ...formStep3, fieldF: e.target.value })}
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Valider Étape 3
              </button>
            </form>
          )}

{selectedStep === 4 && (
            <form onSubmit={handleStep4Submit} className="space-y-4">
              <h2 className="text-lg font-bold">Étape 4: Planification de(s) 1ère(s) Visite(s)</h2>
              <input
                type="text"
                placeholder="Champ G"
                className="border p-2 w-full"
                value={formStep4.fieldG}
                onChange={(e) => setFormStep4({ ...formStep4, fieldG: e.target.value })}
              />
              <input
                type="text"
                placeholder="Champ H"
                className="border p-2 w-full"
                value={formStep4.fieldH}
                onChange={(e) => setFormStep4({ ...formStep4, fieldH: e.target.value })}
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Valider Étape 4
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FolderDetails;
