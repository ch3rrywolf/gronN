import React, { useState, useEffect, useContext } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

const FolderDetails = () => {
  const { folders_id } = useParams();
  const { store } = useContext(storeContext);

  const [benificaires, setBenificaires] = useState([]);
  const [entretes, setEntretes] = useState([]);
  const [inspecteurs, setInspecteurs] = useState([]);
  const [gestes, setGestes] = useState([]);
  const navigate = useNavigate()
 
//   const [state, setState] = useState({
//     numFolderAnah:"",
//     benificaire:"",
//     source:"",
//     classeEng:"",
//     residance:"",
//     classeRevenue:"",
//     parrinage:"",

//     numbTotOLA:"",
//     numbEN:"",
//     titreResPriAm:"",
//     RFRtot:"",
//     anneeRFRtot:"",
//     numbPers:"",
//     numbEnfNai:"",
//     RFRtotInclu:"",
//     anneeREFtotInclu:"",

//     numLogAm:"",
//     voieLogAm:"",
//     villeLogAm:"",
//     codePostalLogAm:"",

//     communeLogAm:"",
//     batimentLogAm:"",
//     escalierLogAm:"",
//     etageLogAm:"",
//     porteLogAm:"",
//     logAmel:"",
//     const15ans:"",
//     const15ansAnnee:"",
//     PTZ:"",
//     travPartiel:"",
//     avantTravProj:"",
//     apresTrav:"",
//     souhaiTrav:"",
    
//   })

  const [state, setState] = useState({
    gestesep4: []  // make sure it's an array
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const [loader, setLoader] = useState(false)

  const submit = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const {data} = await axios.post(`${base_url}/api/folders/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/folders')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  useEffect(() => {
    const fetchBenificaires = async () => {
      try {
        const { data } = await axios.get(`${base_url}/api/benificaires`, {
          headers: {
            'Authorization': `Bearer ${store.token}`
          }
        })
        setBenificaires(data?.benificaires)
      } catch (error) {
        console.error('Erreur lors du chargement des bénéficiaires', error)
      }
    }
  
    fetchBenificaires()
  }, [store.token])

  useEffect(() => {
    const fetchEntretes = async () => {
      try {
        const { data } = await axios.get(`${base_url}/api/entretes`, {
          headers: {
            'Authorization': `Bearer ${store.token}`
          }
        })
        setEntretes(data?.entretes)
      } catch (error) {
        console.error('Erreur lors du chargement des Entretes', error)
      }
    }
  
    fetchEntretes()
  }, [store.token])

  useEffect(() => {
    const fetchInspecteurs = async () => {
      try {
        const { data } = await axios.get(`${base_url}/api/inspecteurs`, {
          headers: {
            'Authorization': `Bearer ${store.token}`
          }
        })
        setInspecteurs(data?.inspecteurs)
      } catch (error) {
        console.error('Erreur lors du chargement des inspecteurs', error)
      }
    }
  
    fetchInspecteurs()
  }, [store.token])

  useEffect(() => {
    const fetchsetGestes = async () => {
      try {
        const { data } = await axios.get(`${base_url}/api/gestes`, {
          headers: {
            'Authorization': `Bearer ${store.token}`
          }
        })
        setGestes(data?.gestes)
      } catch (error) {
        console.error('Erreur lors du chargement des gestes', error)
      }
    }
  
    fetchsetGestes()
  }, [store.token])

  const getFolders = async () => {
    if (folders_id) {
      try {
        const { data } = await axios.get(`${base_url}/api/folders/${folders_id}`, {
          headers: { Authorization: `Bearer ${store.token}` },
        });
        // Populate the state with fetched folder data
        setState((prevState) => ({
          ...prevState,
          numFolderAnah: data.folders?.numFolderAnah || "", // Ensure numFolderAnah is set
          benificaire: data.benificaire?._id || "", // Ensure benificaire is set
          // Add other fields as needed
        }));
      } catch (error) {
        console.error("Error fetching dossier details:", error);
      }
    }
  };

  const handleToggleGeste = (id) => {
    setState(prev => {
      const alreadySelected = prev.gestesep4.includes(id);
      const updated = alreadySelected
        ? prev.gestesep4.filter(g => g !== id)
        : [...prev.gestesep4, id];
  
      return { ...prev, gestesep4: updated };
    });
  };


  useEffect(() => {
    getFolders();
  }, [folders_id]);

  return (
    <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
        <div className='bg-white rounded-lg shadow-lg w-full max-w-4xl border border-gray-300'>
    
          <div className='flex justify-between items-center p-4 border-b border-gray-200'>
            <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Confirmation Dossier</h2>
            <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/folders'>Dossiers</Link>
          </div>
          
    
    
    
    
          <form onSubmit={submit} className='space-y-6'>
    
    <details className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>
  N° DOSSIER ANAH
</summary>           
<div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numFolderAnah'>N° DOSSIER ANAH</label>
              <input onChange={inputHandler} value={state.numFolderAnah} type='text' placeholder='N° DOSSIER ANAH' name='numFolderAnah' id='numFolderAnah' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>
    
    </details>

    <details  className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    1
  </span>
  Offres MAR
</summary>           
<div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbTotOLA'>Offre MAR</label>
              <input onChange={inputHandler} value="Offre MAR" type='text' readOnly placeholder='Offre MAR' name='Offre MAR' id='Offre MAR' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>
    
    </details>

    <details  className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    2
  </span>
  Sélection Des Entreprises 
</summary>  
<div className='grid grid-cols-1 gap-x-8 mb-3'>
<div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='entrete'>Entreprises retenue *</label>
              <select onChange={inputHandler} value={state.entrete} required name='entrete' id='entrete' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value=''>Sélectionner un Entreprises retenue</option>
                {entretes.map(b => (
                  <option key={b._id} value={b._id}>{b.raiSocEntRe}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>

    <details  className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    3
  </span>
  Planification de(s) 1ère(s) Visite(s)  
</summary>  
<div className='grid grid-cols-3 gap-x-8 mb-3'>
<div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbTotOLA'>l’entreprise retenue sélectionnée</label>
              <input onChange={inputHandler} value={state.folders?.raiSocEntRe} type='text' readOnly  name='Offre MAR' id='Offre MAR' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='inspectep4'>sélectionner le technicien</label>
              <select onChange={inputHandler} value={state.inspectep4} required name='inspectep4' id='inspectep4' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value=''>Sélectionner un Entreprises retenue</option>
                {inspecteurs.map(b => (
                  <option key={b._id} value={b._id}>{b.nomIns} {b.prenomIns}</option>
                ))}
              </select>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='dateVisit'>date et l’heure de la visite</label>
              <input onChange={inputHandler} value={state.dateVisit} type='datetime-local'  name='dateVisit' id='dateVisit' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>
    
    <details className='p-4 border rounded-md'>
        
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    4
  </span>
  SIMULATION
</summary> 

      <details className='p-4 border rounded-md'>
      <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATIONS GENERALES</summary>
    
      <div className='grid grid-cols-2 gap-x-8 mb-3'>
<div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='SHAB'>SHAB</label>
              <input onChange={inputHandler} value={state.SHAB} type='text'   name='SHAB' id='SHAB' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='nombeta'>Nombre d'étage</label>
              <input onChange={inputHandler} value={state.nombeta} type='text'   name='nombeta' id='v' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Est-ce que vous avez les mesures des surfaces à isoler ?*</label>
  <select
    onChange={inputHandler}
    value={state.titreResPriAm}
    name='titreResPriAm'
    id='titreResPriAm'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='Oui'>OUI</option>
    <option value='Non'>NON</option>
  </select>
</div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='surfIsol'>Surface à isoler:*</label>
              <input onChange={inputHandler} value={state.surfIsol} type='text'   name='surfIsol' id='surfIsol' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Classe énergétique initial *</label>
  <select
    onChange={inputHandler}
    value={state.titreResPriAm}
    name='titreResPriAm'
    id='titreResPriAm'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='Aucun'>Aucun</option>
    <option value='G'>G</option>
    <option value='F'>F</option>
    <option value='E'>E</option>
    <option value='D'>D</option>
    <option value='C'>C</option>
    <option value='B'>B</option>
    <option value='A'>A</option>
  </select>
</div>

<div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Sauts de classe prévu *</label>
  <select
    onChange={inputHandler}
    value={state.titreResPriAm}
    name='titreResPriAm'
    id='titreResPriAm'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='4 ou plus'>4 ou plus</option>
    <option value='4'>4</option>
    <option value='3'>3</option>
    <option value='2'>2</option>
    <option value='1'>1</option>
  </select>
</div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Catégorie *</label>
  <select
    onChange={inputHandler}
    value={state.titreResPriAm}
    name='titreResPriAm'
    id='titreResPriAm'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='Aucun'>Aucun</option>
    <option value='Classique'>Classique</option>
    <option value='Intérmédiaires'>Intérmédiaires</option>
    <option value='Modestes'>Modestes</option>
    <option value='Trés Modeste'>Trés Modeste</option>
  </select>
</div>

          </div>
    
    </details>

    <details className="p-4 border rounded-md">
  <summary className="text-lg font-bold text-[#1960a9] cursor-pointer mb-4 select-none">GESTES</summary>

  <div className="flex flex-wrap gap-4 mt-4">
    {gestes.map(b => {
      const isSelected = state.gestesep4.includes(b._id);

      return (
        <div
          key={b._id}
          onClick={() => handleToggleGeste(b._id)}
          className={`w-40 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition duration-200
            border shadow-sm cursor-pointer hover:shadow-md
            ${isSelected ? 'bg-green-400 text-white border-green-300' : 'bg-gray-50 text-gray-700 border-gray-300'}
          `}
        >
          {b.reference}
        </div>
      );
    })}
  </div>

  {state.gestesep4.length > 0 && (
  <div className="w-full mt-6 text-center text-sm text-gray-700">
    <span className="font-medium text-gray-500"></span>
    {gestes
      .filter(g => state.gestesep4.includes(g._id))
      .map(g => g.reference)
      .join(' + ')}
  </div>
)}
</details>
    
    <div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>
    
    <details className='p-4 border rounded-md'>
      <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>DESCRIPTION DU LOGEMENT A AMELIORER</summary>
    

    
    </details>
    
    <details className='p-4 border rounded-md'>
      <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>LISTE DES DOCUMENTS</summary>
    
      {/* ... all your fields related to personal info here ... */}
    
    </details>
    
    
    <div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Ajoute Dossier'}</button>
              </div>
              </div>
    </form>
    
    
    
            
            
          </div>
        </div>
  );
};

export default FolderDetails;
