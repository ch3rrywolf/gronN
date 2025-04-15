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
  const navigate = useNavigate()
 
  const [state, setState] = useState({
    numFolderAnah:"",
    benificaire:"",
    source:"",
    classeEng:"",
    residance:"",
    classeRevenue:"",
    parrinage:"",

    numbTotOLA:"",
    numbEN:"",
    titreResPriAm:"",
    RFRtot:"",
    anneeRFRtot:"",
    numbPers:"",
    numbEnfNai:"",
    RFRtotInclu:"",
    anneeREFtotInclu:"",

    numLogAm:"",
    voieLogAm:"",
    villeLogAm:"",
    codePostalLogAm:"",

    communeLogAm:"",
    batimentLogAm:"",
    escalierLogAm:"",
    etageLogAm:"",
    porteLogAm:"",
    logAmel:"",
    const15ans:"",
    const15ansAnnee:"",
    PTZ:"",
    travPartiel:"",
    avantTravProj:"",
    apresTrav:"",
    souhaiTrav:"",
    
  })

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
    
    <details open className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    1
  </span>
  N° DOSSIER ANAH
</summary>           
<div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numFolderAnah'>N° DOSSIER ANAH</label>
              <input onChange={inputHandler} value={state.numFolderAnah} type='text' placeholder='N° DOSSIER ANAH' name='numFolderAnah' id='numFolderAnah' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>
    
    </details>

    <details open className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    2
  </span>
  Offres MAR
</summary>           
<div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbTotOLA'>N° DOSSIER ANAH</label>
              <input onChange={inputHandler} value={state.numbTotOLA} type='text' placeholder='N° DOSSIER ANAH' name='numbTotOLA' id='numbTotOLA' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>
    
    </details>

    <details open className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    3
  </span>
  Sélection Des Entreprises 
</summary>  
<div className='grid grid-cols-1 gap-x-8 mb-3'>
<div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='benificaire'>Bénéficiaire *</label>
              <select onChange={inputHandler} value={state.benificaire} required name='benificaire' id='benificaire' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value=''>Sélectionner un bénéficiaire</option>
                {benificaires.map(b => (
                  <option key={b._id} value={b._id}>{b.nomBeni} {b.prenomBeni}</option>
                ))}
              </select>
            </div>
          </div>
    
    </details>

    <details open className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    4
  </span>
  Planification de(s) 1ère(s) Visite(s)  
</summary>  
<div className='grid grid-cols-1 gap-x-8 mb-3'>
<div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='benificaire'>Bénéficiaire *</label>
              <select onChange={inputHandler} value={state.benificaire} required name='benificaire' id='benificaire' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value=''>Sélectionner un bénéficiaire</option>
                {benificaires.map(b => (
                  <option key={b._id} value={b._id}>{b.nomBeni} {b.prenomBeni}</option>
                ))}
              </select>
            </div>
          </div>
    
    </details>
    
    <details className='p-4 border rounded-md'>
      <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>IDENTITE DU DEMANDEUR DE L'AIDE</summary>
    
  
    
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
