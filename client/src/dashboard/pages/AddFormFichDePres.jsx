
import {saveAs} from 'file-saver'
import {MdCloudUpload} from 'react-icons/md'
import React, {useState, useRef, useContext, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaEye} from "react-icons/fa"
import JoditEditor from 'jodit-react'
import {base_url} from '../config/config'
import axios from 'axios'
import storeContext from '../../context/storeContext'
import toast from 'react-hot-toast'
import SvgImage from "../../assets/logo-mar.png";

const AddFormFichDePres = () => {
  const {dossiers_id} = useParams()
  const {store} = useContext(storeContext)
  const [show, setShow] = useState(false)

    const [demandeurNom, setDemandeurNom] = useState("");
    const [demandeurPreNom, setDemandeurPreNom] = useState("");
    const [demandeurAdresse, setDemandeurAdresse] = useState("");
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


      const get_dossiers = async()=>{
        try {
            const { data } = await axios.get(`${base_url}/api/dossiers/${dossiers_id}`, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setDemandeurNom(data?.dossiers?.demandeurNom);
            setDemandeurPreNom(data?.dossiers?.demandeurPreNom);
            setDemandeurAdresse(data?.dossiers?.demandeurAdresse);
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
            console.log(error)            
        }
    }



       useEffect(()=>{
            get_dossiers()
          },[dossiers_id])

        
    
    // const [loader, setLoader] = useState(false)
    // mise ouvre
    const [Q1FDT,setQ1FDT] = useState([])
    const [QV1FDT,setQV1FDT] = useState('')
    const [Q2FDT,setQ2FDT] = useState([])
    const [QV2FDT,setQV2FDT] = useState('')
    const [Q3FDT,setQ3FDT] = useState([])
    const [QV3FDT,setQV3FDT] = useState('')
    const [QV4FDT,setQV4FDT] = useState('')
    const [Q5FDT,setQ5FDT] = useState([])
    const [QV5FDT,setQV5FDT] = useState('')
    const [QV6FDT,setQV6FDT] = useState('')
    const [QV7FDT,setQV7FDT] = useState('')
    const [QV8FDT,setQV8FDT] = useState('')

    const [Q9nFDT,setQ9nFDT] = useState([])
    const [Q9oFDT,setQ9oFDT] = useState([])
    const [QV9FDT,setQV9FDT] = useState('')
    const [Q10nFDT,setQ10nFDT] = useState([])
    const [Q10oFDT,setQ10oFDT] = useState([])
    const [QV10FDT,setQV10FDT] = useState('')
    const [Q11nFDT,setQ11nFDT] = useState([])
    const [Q11oFDT,setQ11oFDT] = useState([])
    const [QV11FDT,setQV11FDT] = useState('')
    const [Q12nFDT,setQ12nFDT] = useState([])
    const [Q12oFDT,setQ12oFDT] = useState([])
    const [QV12FDT,setQV12FDT] = useState('')
    const [Q13nFDT,setQ13nFDT] = useState([])
    const [Q13oFDT,setQ13oFDT] = useState([])
    const [QV13FDT,setQV13FDT] = useState('')
    const [Q14nFDT,setQ14nFDT] = useState([])
    const [Q14oFDT,setQ14oFDT] = useState([])
    const [QV14FDT,setQV14FDT] = useState('')

    const [Q15FDT1,setQ15FDT1] = useState([])
    const [Q15FDT2,setQ15FDT2] = useState([])
    const [Q15FDT3,setQ15FDT3] = useState([])
    const [Q15FDT4,setQ15FDT4] = useState([])

    const [Q16nFDT,setQ16nFDT] = useState([])
    const [Q16oFDT,setQ16oFDT] = useState([])
    const [QV16FDT,setQV16FDT] = useState('')

    const [Q17FDT1,setQ17FDT1] = useState([])
    const [Q17FDT2,setQ17FDT2] = useState([])
    const [Q17FDT3,setQ17FDT3] = useState([])
    const [Q17FDT4,setQ17FDT4] = useState([])

    const [Q18nFDT,setQ18nFDT] = useState([])
    const [Q18oFDT,setQ18oFDT] = useState([])
    const [QV18FDT,setQV18FDT] = useState('')
    const [QV19FDT,setQV19FDT] = useState('')

    const [Q20nFDT,setQ20nFDT] = useState([])
    const [Q20oFDT,setQ20oFDT] = useState([])
    const [QV20FDT,setQV20FDT] = useState('')
    const [QV21FDT,setQV21FDT] = useState('')
    const [QV22FDT,setQV22FDT] = useState('')
    const [QV23FDT,setQV23FDT] = useState('')
    const [QV24FDT,setQV24FDT] = useState('')

    const [Q4MO,setQ4MO] = useState('')
    const [Q5MO,setQ5MO] = useState('')
    const [Q1,setQ1] = useState('')
    const [Q2,setQ2] = useState('')
    const [Q3,setQ3] = useState('')
    const [Q4,setQ4] = useState('')
    const [Q5,setQ5] = useState('')
    const [Q6,setQ6] = useState('')
    const [Q7,setQ7] = useState('')
    const [Q8,setQ8] = useState('')
    const [Q9,setQ9] = useState('')
    const [Q18,setQ18] = useState('')
  
    const [Q2MO, setQ2MO] = useState([]);



    const [CET1,setCET1] = useState('')
    const [imagesBase64IC, setImagesBase64IC] = useState([]);
    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT,QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, Q2MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1, imagesBase64IC, email}

        await axios.post(`${base_url}/api/createPdfFicheDePres`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfFicheDePres`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'FormulaireDocumentFicheDePres.pdf');
                    
    
                        setDemandeurNom(data?.dossiers?.demandeurNom);
                        setDemandeurPreNom(data?.dossiers?.demandeurPreNom);
                        setDemandeurAdresse(data?.dossiers?.demandeurAdresse);
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

                        setQ1FDT('');
                        setQV1FDT('');
                        setQ2FDT('');
                        setQV2FDT('');
                        setQ3FDT('');
                        setQV3FDT('');                        
                        setQV4FDT('');
                        setQ5FDT('');
                        setQV5FDT('');
                        setQV6FDT('');
                        setQV7FDT('');
                        setQV8FDT('');

                        setQ9nFDT('');
                        setQ9oFDT('');
                        setQV9FDT('');
                        setQ10nFDT('');
                        setQ10oFDT('');
                        setQV10FDT('');
                        setQ11nFDT('');
                        setQ11oFDT('');
                        setQV11FDT('');
                        setQ12nFDT('');
                        setQ12oFDT('');
                        setQV12FDT('');
                        setQ13nFDT('');
                        setQ13oFDT('');
                        setQV13FDT('');
                        setQ14nFDT('');
                        setQ14oFDT('');
                        setQV14FDT('');

                        setQ15FDT1('');
                        setQ15FDT2('');
                        setQ15FDT3('');
                        setQ15FDT4('');

                        setQ16nFDT('');
                        setQ16oFDT('');
                        setQV16FDT('');

                        setQ17FDT1('');
                        setQ17FDT2('');
                        setQ17FDT3('');
                        setQ17FDT4('');

                        setQ18nFDT('');
                        setQ18oFDT('');
                        setQV18FDT('');

                        setQV19FDT('');

                        setQ20nFDT('');
                        setQ20oFDT('');
                        setQV20FDT('');

                        setQV21FDT('');

                        setQV22FDT('');
                        setQV23FDT('');
                        setQV24FDT('');
                        
                        setQ4MO('');
                        setQ5MO('');
                        setQ1('');
                        setQ2('');
                        setQ3('');
                        setQ4('');
                        setQ5('');
                        setQ6('');
                        setQ7('');
                        setQ8('');
                        setQ9('');
                        setQ18('');
                        

                        setCET1('');
                        setImagesBase64IC([]);
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendFicheDePres`, {email})
                            .then((response) => {
                                console.log(response);
                                alert(response.data);
                            })
                    )
            )
            
    };



    const handleImageUploadIC = (e) => {
      const files = Array.from(e.target.files);
      const newImagesBase64IC = [];

      files.forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
              newImagesBase64IC.push(reader.result);
              setImagesBase64IC((prevState) => [...prevState, reader.result]); // Add to state
          };
          reader.readAsDataURL(file);
      });
  };
    

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire FICHE DE PRESENTATION</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}
{/* 
<div className='text-center items-center text-white font-bold border border-solid bg-yellow-500' >
    <h4>FINANCEMENT DES TRAVAUX</h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2"></th>
        <th className="border border-gray-300 px-4 py-2"></th>
       
      </tr>
    </thead>
    <tbody>

    <tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <input
      id="Q1FDToui"
      type="checkbox"
      value="⛝"
      checked={Q1FDT.includes("⛝")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ1FDT([...Q1FDT, "⛝"]);
        } else {
          setQ1FDT(Q1FDT.filter((val) => val !== "⛝"));
        }
      }}
    />
    <label htmlFor="Q1FDToui" className="ml-2">Coût total des travaux à réaliser.</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV1FDT"
            value={QV1FDT}
            onChange={(e)=>setQV1FDT(e.target.value)}
            id="QV1FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    € HT
  </td>
</tr>


<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <input
      id="Q2FDToui"
      type="checkbox"
      value="⛝"
      checked={Q2FDT.includes("⛝")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ2FDT([...Q2FDT, "⛝"]);
        } else {
          setQ2FDT(Q2FDT.filter((val) => val !== "⛝"));
        }
      }}
    />
    <label htmlFor="Q2FDToui" className="ml-2">Honoraires d’assistance à maîtrise d’ouvrage</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV2FDT"
            value={QV2FDT}
            onChange={(e)=>setQV2FDT(e.target.value)}
            id="QV2FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    € HT
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <input
      id="Q3FDToui"
      type="checkbox"
      value="⛝"
      checked={Q3FDT.includes("⛝")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3FDT([...Q3FDT, "⛝"]);
        } else {
          setQ3FDT(Q3FDT.filter((val) => val !== "⛝"));
        }
      }}
    />
    <label htmlFor="Q3FDToui" className="ml-2">Honoraires de maîtrise d’œuvre</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV3FDT"
            value={QV3FDT}
            onChange={(e)=>setQV3FDT(e.target.value)}
            id="QV3FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    € HT
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="Q2MOoui" className="ml-2"> Montant total des dépenses HT</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV4FDT"
            value={QV4FDT}
            onChange={(e)=>setQV4FDT(e.target.value)}
            id="QV4FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    € HT
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="Q2MOoui" className="ml-2">Montant total des dépenses TTC</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV5FDT"
            value={QV5FDT}
            onChange={(e)=>setQV5FDT(e.target.value)}
            id="QV5FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    € TTC
  </td>
</tr>
      

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <input
      id="Q5FDToui"
      type="checkbox"
      value="⛝"
      checked={Q5FDT.includes("⛝")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5FDT([...Q5FDT, "⛝"]);
        } else {
          setQ5FDT(Q5FDT.filter((val) => val !== "⛝"));
        }
      }}
    />
    <label htmlFor="Q5FDToui" className="ml-2"> Financement :</label>
  </td> 
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="QV6FDToui" className="ml-2">• Prêt bancaire</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV6FDT"
            value={QV6FDT}
            onChange={(e)=>setQV6FDT(e.target.value)}
            id="QV6FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    €
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="QV7FDToui" className="ml-2">• Apport de fonds personnels</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV7FDT"
            value={QV7FDT}
            onChange={(e)=>setQV7FDT(e.target.value)}
            id="QV7FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    €
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="Q2MOoui" className="ml-2">• Aides publiques accordées :</label>
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="QV8FDToui" className="ml-2">- Aide de l’Anah</label>
  </td>
  <td>
  <input
        className='items-center justify-center text-center'
            type="text"
            name="QV8FDT"
            value={QV8FDT}
            onChange={(e)=>setQV8FDT(e.target.value)}
            id="QV8FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q9nFDToui" className="ml-2">
    - Aide du FART (programme "Habiter Mieux")
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q9nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q9nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ9nFDT([...Q9nFDT, "⛝"]);
          } else {
            setQ9nFDT(Q9nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q9oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q9oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ9oFDT([...Q9oFDT, "⛝"]);
          } else {
            setQ9oFDT(Q9oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV9FDT"
            value={QV9FDT}
            onChange={(e)=>setQV9FDT(e.target.value)}
            id="QV9FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

      
<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
    - Commune ou établissement public de coopération intercommunale
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q10nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q10nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ10nFDT([...Q10nFDT, "⛝"]);
          } else {
            setQ10nFDT(Q10nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q10oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q10oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ10oFDT([...Q10oFDT, "⛝"]);
          } else {
            setQ10oFDT(Q10oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV10FDT"
            value={QV10FDT}
            onChange={(e)=>setQV10FDT(e.target.value)}
            id="QV10FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
    - Département
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q11nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q11nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ11nFDT([...Q11nFDT, "⛝"]);
          } else {
            setQ11nFDT(Q11nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q10oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q11oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ11oFDT([...Q11oFDT, "⛝"]);
          } else {
            setQ11oFDT(Q11oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV11FDT"
            value={QV11FDT}
            onChange={(e)=>setQV11FDT(e.target.value)}
            id="QV11FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q12nFDToui" className="ml-2">
    - Région
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q12nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q12nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ12nFDT([...Q12nFDT, "⛝"]);
          } else {
            setQ12nFDT(Q12nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q12oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q12oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ12oFDT([...Q12oFDT, "⛝"]);
          } else {
            setQ12oFDT(Q12oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV12FDT"
            value={QV12FDT}
            onChange={(e)=>setQV12FDT(e.target.value)}
            id="QV12FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
    - Union européenne
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q13nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q13nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ13nFDT([...Q13nFDT, "⛝"]);
          } else {
            setQ13nFDT(Q13nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q13oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q13oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ13oFDT([...Q13oFDT, "⛝"]);
          } else {
            setQ13oFDT(Q13oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV13FDT"
            value={QV13FDT}
            onChange={(e)=>setQV13FDT(e.target.value)}
            id="QV13FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
    - Caisses de retraite - régime de base 
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q14nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q14nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ14nFDT([...Q14nFDT, "⛝"]);
          } else {
            setQ14nFDT(Q14nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q14oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q14oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ14oFDT([...Q14oFDT, "⛝"]);
          } else {
            setQ14oFDT(Q14oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV14FDT"
            value={QV14FDT}
            onChange={(e)=>setQV14FDT(e.target.value)}
            id="QV14FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>
      
<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
  Si oui, cocher la case correspondant à l’organisme 
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
      <input
        id="Q15FDT1non"
        type="checkbox"
        value="⛝"
        checked={Q15FDT1.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ15FDT1([...Q15FDT1, "⛝"]);
          } else {
            setQ15FDT1(Q15FDT1.filter((val) => val !== "⛝"));
          }
        }}
      />
      CNAV/CARSAT
      
    </label>
    <label className="flex items-center gap-1">
      <input
        id="Q15FDT2oui"
        type="checkbox"
        value="⛝"
        checked={Q15FDT2.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ15FDT2([...Q15FDT2, "⛝"]);
          } else {
            setQ15FDT2(Q15FDT2.filter((val) => val !== "⛝"));
          }
        }}
      />
      MSA
    </label>
    <label className="flex items-center gap-1">
      <input
        id="Q15FDT3oui"
        type="checkbox"
        value="⛝"
        checked={Q15FDT3.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ15FDT3([...Q15FDT3, "⛝"]);
          } else {
            setQ15FDT3(Q15FDT3.filter((val) => val !== "⛝"));
          }
        }}
      />
      RSI
    </label>
    <label className="flex items-center gap-1">
      <input
        id="Q15FDT4oui"
        type="checkbox"
        value="⛝"
        checked={Q15FDT4.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ15FDT4([...Q15FDT4, "⛝"]);
          } else {
            setQ15FDT4(Q15FDT4.filter((val) => val !== "⛝"));
          }
        }}
      />
      Autres
    </label>

  </div>
</td>
</tr>
      
      

      
<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
    - Caisses de retraite complémentaires obligatoires 
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q16nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q16nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ16nFDT([...Q16nFDT, "⛝"]);
          } else {
            setQ16nFDT(Q16nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q16oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q16oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ16oFDT([...Q16oFDT, "⛝"]);
          } else {
            setQ16oFDT(Q16oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV16FDT"
            value={QV16FDT}
            onChange={(e)=>setQV16FDT(e.target.value)}
            id="QV16FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>
      
<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
  Si oui, cocher la case correspondant à l’organisme 
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
      <input
        id="Q17FDT1non"
        type="checkbox"
        value="⛝"
        checked={Q17FDT1.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ17FDT1([...Q17FDT1, "⛝"]);
          } else {
            setQ17FDT1(Q17FDT1.filter((val) => val !== "⛝"));
          }
        }}
      />
      AGIRC
      
    </label>
    <label className="flex items-center gap-1">
      <input
        id="Q17FDT2oui"
        type="checkbox"
        value="⛝"
        checked={Q17FDT2.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ17FDT2([...Q17FDT2, "⛝"]);
          } else {
            setQ17FDT2(Q17FDT2.filter((val) => val !== "⛝"));
          }
        }}
      />
      ARRCO
    </label>
    <label className="flex items-center gap-1">
      <input
        id="Q17FDT3oui"
        type="checkbox"
        value="⛝"
        checked={Q17FDT3.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ17FDT3([...Q17FDT3, "⛝"]);
          } else {
            setQ17FDT3(Q17FDT3.filter((val) => val !== "⛝"));
          }
        }}
      />
      IRCANTEC
    </label>
    <label className="flex items-center gap-1">
      <input
        id="Q17FDT4oui"
        type="checkbox"
        value="⛝"
        checked={Q17FDT4.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ17FDT4([...Q17FDT4, "⛝"]);
          } else {
            setQ17FDT4(Q17FDT4.filter((val) => val !== "⛝"));
          }
        }}
      />
      Autres
    </label>

  </div>
</td>
</tr>

<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
 - Autre aide publique (ADEME, Agence de l’eau …)
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q18nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q18nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ18nFDT([...Q18nFDT, "⛝"]);
          } else {
            setQ18nFDT(Q18nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q18oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q18oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ18oFDT([...Q18oFDT, "⛝"]);
          } else {
            setQ18oFDT(Q18oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV18FDT"
            value={QV18FDT}
            onChange={(e)=>setQV18FDT(e.target.value)}
            id="QV18FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="Q2MOoui" className="ml-2"> Total des aides publiques</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV19FDT"
            value={QV19FDT}
            onChange={(e)=>setQV19FDT(e.target.value)}
            id="QV19FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    €
  </td>
</tr>


<tr>
<td className="border border-gray-300 px-4 py-2 text-start flex justify-between items-center">
  <label htmlFor="Q2MOoui" className="ml-2">
  • Autres aides
  </label>
  <div className="flex items-center gap-4">
  <label className="flex items-center gap-1">
    non
      <input
        id="Q20nFDTnon"
        type="checkbox"
        value="⛝"
        checked={Q20nFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ20nFDT([...Q20nFDT, "⛝"]);
          } else {
            setQ20nFDT(Q20nFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
      
    </label>
    <label className="flex items-center gap-1">
      oui
      <input
        id="Q20oFDToui"
        type="checkbox"
        value="⛝"
        checked={Q20oFDT.includes("⛝")}
        onChange={(e) => {
          if (e.target.checked) {
            setQ20oFDT([...Q20oFDT, "⛝"]);
          } else {
            setQ20oFDT(Q20oFDT.filter((val) => val !== "⛝"));
          }
        }}
      />
    </label>
    montant :
   
  </div>
</td>
  <td>
    <input
        className='items-center justify-center text-center'
            type="text"
            name="QV20FDT"
            value={QV20FDT}
            onChange={(e)=>setQV20FDT(e.target.value)}
            id="QV20FDT"
            placeholder='|__|__|__|__|__|'
          />
  </td>
  <td>
    €
  </td>
</tr>
      
      
<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="Q2MOoui" className="ml-2"> Total des ressources </label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV21FDT"
            value={QV21FDT}
            onChange={(e)=>setQV21FDT(e.target.value)}
            id="QV21FDT"
            placeholder='|__|__|__|__|__|'
          /></div>
  </td>
  <td>
    €
  </td>
</tr>
      
      
        
      
    </tbody>
  </table>


</div> */}
{/* 
<div>
  <p>Je soussigné(e), nom et prénom :<input
        className='items-center justify-center text-center'
            type="text"
            name="QV22FDT"
            value={QV22FDT}
            onChange={(e)=>setQV22FDT(e.target.value)}
            id="QV22FDT"
            placeholder='....................................................'
          />
 <br></br>certifie sur l’honneur(4) l’exactitude des renseignements ci-dessus.
 <br></br>Fait à <input
        className='items-center justify-center text-center'
            type="text"
            name="QV23FDT"
            value={QV23FDT}
            onChange={(e)=>setQV23FDT(e.target.value)}
            id="QV23FDT"
            placeholder='....................................................'
          />, le<input
          className='items-center justify-center text-center'
              type="text"
              name="QV24FDT"
              value={QV24FDT}
              onChange={(e)=>setQV24FDT(e.target.value)}
              id="QV24FDT"
              placeholder='|__|__| |__|__| |__|__|__|__|'
            /> 
 </p>
 </div>
<br></br> */}
 {/* <label
         htmlFor="imgIC"
         className="w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
       >
         <div className="flex justify-center items-center flex-col gap-y-2">
           <span className="text-2xl">
             <MdCloudUpload />
           </span>
           <span>Select Image Signature du demandeur</span>
         </div>
       </label>
       <input
         type="file"
         id="imgIC"
         className="hidden"
         onChange={handleImageUploadIC}
         multiple
       /> */}
 
       {/* Display image previews */}
       {/* {imagesBase64IC.length > 0 && (
         <div className="mt-4 flex gap-2 flex-wrap">
           {imagesBase64IC.map((imgBase64IC, index) => (
             <div className="image-container" key={index}>
               <img
                 src={imgBase64IC}
                 alt={`Image preview ${index + 1}`}
                 className="w-20 h-20 object-cover rounded-md"
               />
             </div>
           ))}
         </div>
       )} */}



<div className="flex justify-between flex-wrap items-center min-h-screen">
          <div className="max-w-[500px] space-y-4">
            
            <div className="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-slate-900">
              En Attente ...
            </div>
            <p className="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]">
              Dossier + PDF
            </p>
            
            
          </div>
          <div>
            <img src={SvgImage} alt="" />
          </div>
        </div>




<br></br>

          

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='email'>Email*</label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} required type='email' placeholder='' name='email' id='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='tVa'>Confirmer</label>
              <button className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>Confirmé formulaire</button>
              </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddFormFichDePres