import React, { useState, useEffect, useContext } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import { FiSave } from 'react-icons/fi';

const FolderDetailsFinal = () => {
  const { folders_id } = useParams();
  const { store } = useContext(storeContext);

  // const isValid = data.folders.s2eps && data.folders.s2eps.length > 0;

  const [benificaires, setBenificaires] = useState([]);
  const [entretes, setEntretes] = useState([]);
  const [inspecteurs, setInspecteurs] = useState([]);
  const [gestes, setGestes] = useState([]);
  const navigate = useNavigate()

   const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const [filesList, setFilesList] = useState([]);

     const [news2epi, setNews2epi] = useState("");
     const [news3epi, setNews3epi] = useState("");
     const [news4epi, setNews4epi] = useState("");
     const [news5epi, setNews5epi] = useState("");
     const [news6epi, setNews6epi] = useState("");

     const [newEntrepriseRetenue, setNewEntrepriseRetenue] = useState("");

     const [newinspecteur3, setNewinspecteur3] = useState("");
     const [newdateVisite, setNewdateVisite] = useState("");

     const [newshab, setNewshab] = useState("");
     const [newnbrEtage, setNewnbrEtage] = useState("");
     const [newqusMSI, setNewqusMSI] = useState("");
     const [newsurfaceIso, setNewsurfaceIso] = useState("");
     const [newclassEnerInit, setNewclassEnerInit] = useState("");
     const [newsautsClassPre, setNewsautsClassPre] = useState("");
     const [newcategori, setNewcategori] = useState("");

     const [newrepensConfirm, setNewrepensConfirm] = useState("");

     const [newrepenVerif, setNewrepenVerif] = useState("");

    //  const [s2eps, setS2eps] = useState([]); 
     const [s2epsR, setS2epsR] = useState([]); 
 


  const [state, setState] = useState({
    gestesep4: [],
    offreMar: "Offre MAR",
    numFolderAnah: '',
    isValidS2ep: false,
    isValidS3ep: false,
    isValidS4ep: false,
    isValidS5ep: false,
    isValidpdfs: false,
    isValidS6ep: false,
    data: null,
  });

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  // const inputHandlerS2ep = (e) => {
  //   setNewEntrepriseRetenue(e.target.value);
  // };

  const [loader, setLoader] = useState(false)



  //update anah dossier number

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${base_url}/api/folders/update/${folders_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${store.token}`, // replace with your token logic
        },
        body: JSON.stringify({
          numFolderAnah: state.numFolderAnah,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("N° DOSSIER ANAH updated successfully");
        // optionally refresh data or update local state
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error updating N° DOSSIER ANAH:", err);
      alert("Something went wrong");
    }
  };

  // submit entreprise step 2


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
        const s2eps = data?.folders?.s2eps || [];
        const s3eps = data?.folders?.s3eps || [];
        const s4eps = data?.folders?.s4eps || [];
        const s5eps = data?.folders?.s5eps || [];
        const pdfs = data?.folders?.pdfs || [];
        const s6eps = data?.folders?.s6eps || [];
        console.log("s2eps:", s2eps); 
        console.log("s3eps:", s3eps); 
        console.log("s4eps:", s4eps); 
        console.log("s5eps:", s5eps); 
        console.log("pdfs:", pdfs); 
        console.log("s6eps:", s6eps); 
  
        const isValid = Array.isArray(s2eps) && s2eps.length > 0;
        const isValid3 = Array.isArray(s3eps) && s3eps.length > 0;
        const isValid4 = Array.isArray(s4eps) && s4eps.length > 0;
        const isValid5 = Array.isArray(s5eps) && s5eps.length > 0;
        const isValidpdfs = Array.isArray(pdfs) && pdfs.length > 0;
        const isValid6 = Array.isArray(s6eps) && s6eps.length > 0;
        // const isValid3 = Array.isArray(s3eps) && s3eps.length > 0 && s3eps.some(item => item !== '');
        // const isValid3 =  Array.isArray(s2epsR) && s2epsR.length > 0 && s2epsR.some(item => item?.EntrepriseRetenue?.trim() !== '')
        console.log("isValidS2ep:", isValid);
        console.log("isValidS3ep:", isValid3);
        console.log("isValidS4ep:", isValid4);
        console.log("isValidS5ep:", isValid5);
        console.log("isValidpdfs:", isValidpdfs);
        console.log("isValidS6ep:", isValid6);

        setState((prevState) => ({
          ...prevState,
          data: data,
          entrete: data.folders?.entrete?._id || "",
          offreMar: data.folders?.offreMar || "Offre MAR",
          numFolderAnah: data.folders?.numFolderAnah || "",
          benificaire: data.benificaire?._id || "",
          isValidS2ep: isValid, 
          isValidS3ep: isValid3,
          isValidS4ep: isValid4,
          isValidS5ep: isValid5,
          isValid55pdfs: isValidpdfs,
          isValidS6ep: isValid6,
        }));
      } catch (error) {
        console.error("Error fetching dossier details:", error);
      }
    }
  };


  const getS2epsR = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/folders/get-s2eps/${folders_id}`);
      setS2epsR(data.s2eps);
    } catch (error) {
      console.error("Error fetching S2epsR:", error);
    }
  };

  const deleteS2epsEntreprise = async (folders_id, s2eps_id) => {
    try {
      await axios.delete(`${base_url}/api/folders/${folders_id}/s2eps-entreprise/${s2eps_id}`);
      toast.success("steps entreprise supprimé avec succès !");
      getS2epsR();
    } catch (error) {
      console.error("Error deleting s2eps entreprise:", error);
      toast.error("Échec de la suppression du fichier.");
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


  const getFiles = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/folders/get-files/${folders_id}`);
      setFilesList(data.files);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

 




  useEffect(() => {
    getFolders();
    getFiles();
    
    getS2epsR();
  }, [folders_id]);

  return (
    <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
        <div className='bg-white rounded-lg shadow-lg w-full max-w-4xl border border-gray-300'>
    
          <div className='flex justify-between items-center p-4 border-b border-gray-200'>
            <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Dernière consultation du dossier</h2>
            <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to={`/dashboard/folders/view/${folders_id}`}>Retour à la page de confirmation</Link>
          </div>
          
    
    
          <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>
    N° DOSSIER ANAH
  </summary>
  
  <div className='grid grid-cols-1 gap-x-8 mb-3'>
    
    <span className="text-xs font-bold"> </span><span>{state.numFolderAnah}</span>
  </div>

  
</details>
    
    
         
    
    
<div className="relative">
  <div className="absolute top-2 right-2 z-50">
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
  </div>
</div>
    <details  className='p-4 border rounded-md'>
      
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    1
  </span>
  Offres MAR
</summary>           
<div className='grid grid-cols-1 gap-x-8 mb-3'>
            

            <span className="text-xs font-bold"> </span><span>{state.offreMar}</span>
          </div>
    
    </details>


    <form onSubmit={"submitS2ep"} className='space-y-1'>

    <div className="relative">
  <div className="absolute top-2 right-2 z-50">
    {state.isValidS2ep ? (
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
    ) : (
      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Non Validé</span>
    )}
  </div>
</div>

    <details  className='p-4 border rounded-md'>
    
    
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    2
  </span>
  Entreprise retenue 

</summary>  

<div className='grid grid-cols-1 gap-x-8 mb-3'>
<div className='flex flex-col gap-y-2'>
              
              {s2epsR && s2epsR.length > 0 ? (
               s2epsR.map((rep, index) => (
                 <div key={index}>
                   <span className="text-xs font-bold">entreprise retenue: </span><span>{rep.EntrepriseRetenue}</span>
                   
                 </div>
               ))
             ) : (
               <p>Aucun Entreprise Retenue trouvé.</p>
             )}
            </div>
          </div>
    
    </details>

    </form>
<form onSubmit={"submitS3ep"} className='space-y-1'>

<div className="relative">
  <div className="absolute top-2 right-2 z-50">
    {state.isValidS3ep ? (
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
    ) : (
      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Non Validé</span>
    )}
  </div>
</div>
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
             {s2epsR && s2epsR.length > 0 ? (
               s2epsR.map((rep, index) => (
                 <div key={index}>
                   <span className="text-xs font-bold">entreprise retenue: </span><span>{rep.EntrepriseRetenue}</span>
                   <button
                         onClick={() => deleteS2epsEntreprise(folders_id, rep._id)}
                         className="mt-2 text-red-500 hover:text-red-700"
                       >
                         <Trash2 className="w-5 h-5" />
                         
                       </button>
                 </div>
               ))
             ) : (
               <p>Aucun Entreprise Retenue trouvé.</p>
             )}
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='newinspecteur3'>sélectionner le technicien</label>
              <select onChange={(e) => setNewinspecteur3(e.target.value)} value={newinspecteur3 || ""} required name='newinspecteur3' id='newinspecteur3' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value=''>Sélectionner technicien</option>
                {inspecteurs.map(b => (
                  <option key={b._id} value={b.prenomIns}>{b.nomIns} {b.prenomIns}</option>
                ))}
              </select>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='newdateVisite'>date et l’heure de la visite</label>
              <input onChange={(e) => setNewdateVisite(e.target.value)} value={newdateVisite || ""} type='datetime-local'  name='newdateVisite' id='newdateVisite' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>
    </form>

    <div className="relative">
  <div className="absolute top-2 right-2 z-50">
    {state.isValidS4ep ? (
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
    ) : (
      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Non Validé</span>
    )}
  </div>
</div>

<form onSubmit={"submitS4ep"} className='space-y-1'>
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
              <label className='text-xs font-medium text-gray-600' htmlFor='newshab'>SHAB</label>
              <input onChange={(e) => setNewshab(e.target.value)} value={newshab || ""} type='text'   name='newshab' id='newshab' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='newnbrEtage'>Nombre d'étage</label>
              <input onChange={(e) => setNewnbrEtage(e.target.value)} value={newnbrEtage || ""} type='text'   name='newnbrEtage' id='newnbrEtage' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Est-ce que vous avez les mesures des surfaces à isoler ?*</label>
  <select
    onChange={(e) => setNewqusMSI(e.target.value)}
    value={newqusMSI || ""}
    name='newqusMSI'
    id='newqusMSI'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='Oui'>OUI</option>
    <option value='Non'>NON</option>
  </select>
</div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='newsurfaceIso'>Surface à isoler:*</label>
              <input onChange={(e) => setNewsurfaceIso(e.target.value)} value={newsurfaceIso || ""} type='text'   name='newsurfaceIso' id='newsurfaceIso' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='newclassEnerInit'>Classe énergétique initial *</label>
  <select
    onChange={(e) => setNewclassEnerInit(e.target.value)}
    value={newclassEnerInit || ""}
    name='newclassEnerInit'
    id='newclassEnerInit'
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
  <label className='text-xs font-medium text-gray-600' htmlFor='newsautsClassPre'>Sauts de classe prévu *</label>
  <select
    onChange={(e) => setNewsautsClassPre(e.target.value)}
    value={newsautsClassPre || ""}
    name='newsautsClassPre'
    id='newsautsClassPre'
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
  <label className='text-xs font-medium text-gray-600' htmlFor='newcategori'>Catégorie *</label>
  <select
    onChange={(e) => setNewcategori(e.target.value)}
    value={newcategori || ""}
    name='newcategori'
    id='newcategori'
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
    {gestes.map(g => {
      const isSelected = state.gestesep4.includes(g._id);

      return (
        <div
          key={g._id}
          onClick={() => handleToggleGeste(g._id)}
          className={`w-40 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition duration-200
            border shadow-sm cursor-pointer hover:shadow-md
            ${isSelected ? 'bg-green-400 text-white border-green-300' : 'bg-gray-50 text-gray-700 border-gray-300'}
          `}
        >
          {g.reference}
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


<div className="overflow-x-auto mt-8">
  <table className="w-full border-collapse text-center text-sm">
    <thead>
      <tr className="bg-[#f1f5f9] text-gray-700">
        {['Libelle', 'QTE', 'PRIX', 'UNITE', 'MONTANT', 'TVA', 'TTC'].map((title, i) => (
          <th key={i} className="border px-4 py-2 font-semibold">
            {title}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {gestes
        .filter(g => state.gestesep4.includes(g._id))
        .map((geste, idx) => (
          <tr key={geste._id}>
            <td className="border px-2 py-1">{geste.reference}</td>
            <td className="border px-2 py-1">1</td> {/* Default QTE */}
            <td className="border px-2 py-1">{geste.montantEtimatif}</td> {/* PRIX */}
            <td className="border px-2 py-1">U</td> {/* UNITE */}
            <td className="border px-2 py-1">{geste.montantEtimatif}</td> {/* MONTANT */}
            <td className="border px-2 py-1">5.50%</td> {/* TVA */}
            <td className="border px-2 py-1">0.00</td> {/* TTC */}
          </tr>
        ))}
    </tbody>
  </table>
</div>

<div className="flex justify-between items-center mt-8 px-4">
  {/* Left: Logo */}
  <div className="w-40">
    <img src="/src/assets/globgLogo.png" alt="Logo" className="w-full h-auto object-contain" />
  </div>

  {/* Right: Total */}
  <div className="text-right text-sm text-gray-800">
    <div className="font-semibold">Montant Total TTC :</div>
    <div className="text-lg font-bold text-green-600">
      {
        gestes
          .filter(g => state.gestesep4.includes(g._id))
          .reduce((total, g) => total + Number(g.montantEtimatif || 0), 0)
          .toFixed(2)
      } €
    </div>
  </div>
</div>
</details>
    
    <div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>
    </form>

    

    <div className="relative">
  <div className="absolute top-2 right-2 z-50">
    {state.isValidS5ep ? (
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
    ) : (
      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Non Validé</span>
    )}
  </div>
</div>

    <details className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    5
  </span>
  1ère visite   
</summary> 


<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>Attachez tous les documents nécessaires lors de la première visite. </summary>

 

  <ul className='mt-4 space-y-2'>
    {filesList.map(file => (
      <li key={file._id} className='flex justify-between items-center border p-2 rounded'>
        <a  href={`${base_url}/files/${file.pdf}`}  target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
          {file.title}
        </a>
      </li>
    ))}
  </ul>
</details>

<form onSubmit={"submitS5ep"} className='space-y-1'>
<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>Confirmation visite. </summary>

  <div className='grid grid-cols-1 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='newrepensConfirm'>Est-ce que vous avez terminé la visite ?*</label>
  <select
    onChange={(e) => setNewrepensConfirm(e.target.value)}
    value={newrepensConfirm || ""}
    name='newrepensConfirm'
    id='newrepensConfirm'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='Oui'>OUI</option>
    <option value='Non'>NON</option>
  </select>
</div>      
          </div>

  
</details>
</form>

<div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Confirmer Documents Et ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>
   



    <form onSubmit={"submitS6ep"} className='space-y-1'>

    <div className="relative">
  <div className="absolute top-2 right-2 z-50">
    {state.isValidS6ep ? (
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
    ) : (
      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Non Validé</span>
    )}
  </div>
</div>
    <details className='p-4 border rounded-md'>
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    6
  </span>
  Vérification Des Documents 
</summary> 

  <div className='grid grid-cols-1 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='newrepenVerif'> Vérifier tous les documents en relation avec le dossier*</label>
  <select
    onChange={(e) => setNewrepenVerif(e.target.value)}
    value={newrepenVerif || ""}
    name='newrepenVerif'
    id='newrepenVerif'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''></option>
    <option value='Vérifié'>Vérifié</option>
    <option value='Non Vérifié'>NON Vérifié</option>
  </select>
</div>      
          </div>

<div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Confirmer visite Et ENREGISTRER'}</button>
              </div>
              </div>
    
    </details>
    </form>
    
    
    
    <div className="relative">
  <div className="absolute top-2 right-2 z-50">
    {state.isValidS7ep ? (
      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">Validé</span>
    ) : (
      <span className="bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full">Non Validé</span>
    )}
  </div>
</div>
    <details className='p-4 border rounded-md'>

    
    <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4 flex items-center gap-2'>
    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#1960a9] text-white text-sm font-bold">
    7
  </span>
  Rapport d’audit   
</summary> 


{/* <ul className='mt-4 space-y-2'>
    {filesListr.map(file => (
      <li key={file._id} className='flex justify-between items-center border p-2 rounded'>
        <a  href={`${base_url}/filesr/${file.pdfrap}`}  target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
          {file.titler}
        </a>
        <button onClick={() => deleteFilerap(folders_id, file._id)} className='text-red-600 hover:text-red-800'>
          <Trash2 size={18} />
        </button>
      </li>
    ))}
  </ul>  */}
</details>



    <details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>Fichiers liés</summary>



  <ul className='mt-4 space-y-2'>
    {filesList.map(file => (
      <li key={file._id} className='flex justify-between items-center border p-2 rounded'>
        <a  href={`${base_url}/files/${file.pdf}`}  target="_blank" rel="noopener noreferrer" className='text-blue-600 hover:underline'>
          {file.title}
        </a>
        
      </li>
    ))}
  </ul>
</details>
    
    
    
<div className='grid grid-cols-1 gap-x-8 mb-3'>
                <div className='flex flex-col gap-y-2'>
                  <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Confirmer Dossier'}</button>
              </div>
              </div>
            
            
          </div>
        </div>
  );
};

export default FolderDetailsFinal;
