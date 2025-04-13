
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

const AddFormDevMarModVal = () => {
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
    const [QV0DMTMV,setQV0DMTMV] = useState([])
    const [QV1DMTMV,setQV1DMTMV] = useState([])
    const [QV2DMTMV,setQV2DMTMV] = useState([])
    const [QV3DMTMV,setQV3DMTMV] = useState([])
    const [QV4DMTMV,setQV4DMTMV] = useState([])
    const [QV5DMTMV,setQV5DMTMV] = useState([])
    const [QV6DMTMV,setQV6DMTMV] = useState([])
    const [QV7DMTMV,setQV7DMTMV] = useState([])
    // const [QV8DMTMV,setQV8DMTMV] = useState([])
    const [QV9DMTMV,setQV9DMTMV] = useState([])
    const [QV10DMTMV,setQV10DMTMV] = useState([])
    const [QV11DMTMV,setQV11DMTMV] = useState([])
    const [QV12DMTMV,setQV12DMTMV] = useState([])
    const [QV13DMTMV,setQV13DMTMV] = useState([])
    const [Q1DMAM,setQ1DMAM] = useState([])
    const [Q2DMAM,setQ2DMAM] = useState([])
 




  



    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {Q1DMAM,Q2DMAM,QV0DMTMV,QV1DMTMV,QV2DMTMV,QV3DMTMV,QV4DMTMV,QV5DMTMV,QV6DMTMV,QV7DMTMV,QV9DMTMV,QV10DMTMV,QV11DMTMV,QV12DMTMV,QV13DMTMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, email}

        await axios.post(`${base_url}/api/createPdfDevMarModVal`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfDevMarModVal`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'Devis_MAR_Modestes_VALOREM.pdf');
                    
    
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

                        setQV0DMTMV('');
                        setQV1DMTMV('');
                        setQV2DMTMV('');
                        setQV3DMTMV('');
                        setQV4DMTMV('');
                        setQV5DMTMV('');
                        setQV6DMTMV('');
                        setQV7DMTMV('');
                        // setQV8DMTMV('');
                        setQV9DMTMV('');
                        setQV10DMTMV('');
                        setQV11DMTMV('');
                        setQV12DMTMV('');
                        setQV13DMTMV('');
                        setQ1DMAM('');
                        setQ2DMAM('');
                        
                        
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendDevMarModVal`, {email})
                            .then((response) => {
                                console.log(response);
                                alert(response.data);
                            })
                    )
            )
            
    };

    

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire Devis MAR Modeste VALOREM</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}


<div className="overflow-x-auto">
<table>
  <th>Monsieur ou Mme.</th>
<td className="border border-gray-300 px-4 py-2 text-start">
    <input
      id="Q1DMAM"
      type="checkbox"
      value="Monsieur"
      checked={Q1DMAM.includes("Monsieur")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ1DMAM([...Q1DMAM, "Monsieur"]);
        } else {
          setQ1DMAM(Q1DMAM.filter((val) => val !== "Monsieur"));
        }
      }}
    /> 
    <label htmlFor="Q1DMAM" className="ml-2"><span className='font-bold'>Monsieur</span> {demandeurNom} {demandeurPreNom}</label>
    <input
      id="Q2DMAM"
      type="checkbox"
      value="Madame"
      checked={Q2DMAM.includes("Madame")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ2DMAM([...Q2DMAM, "Madame"]);
        } else {
          setQ2DMAM(Q2DMAM.filter((val) => val !== "Madame"));
        }
      }}
    />
    <label htmlFor="Q2DMAM" className="ml-2"><span className='font-bold'>Madame</span> {demandeurNom} {demandeurPreNom}</label>
  
  </td>

  </table>

  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
    <tr>
        <th className="border bg-gray-200 border-gray-300 px-4 py-2">Libellé</th>
        <th className="border bg-gray-200 border-gray-300 px-4 py-2">Quantité</th>       
        <th className="border bg-gray-200 border-gray-300 px-4 py-2">Montant HT</th>       
        <th className="border bg-gray-200 border-gray-300 px-4 py-2">TVA</th>       
        <th className="border bg-gray-200 border-gray-300 px-4 py-2">Montant TTC</th>       
      </tr>
    </thead>
    <tbody>
      <tr>
      <td className="border border-gray-300 px-4 py-2 text-start">Audit Energétique Réglementaire</td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV0DMTMV"
                value={QV0DMTMV}
                onChange={(e)=>setQV0DMTMV(e.target.value)}
                id="QV0DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV1DMTMV"
                value={QV1DMTMV}
                onChange={(e)=>setQV1DMTMV(e.target.value)}
                id="QV1DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV2DMTMV"
                value={QV2DMTMV}
                onChange={(e)=>setQV2DMTMV(e.target.value)}
                id="QV2DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV3DMTMV"
                value={QV3DMTMV}
                onChange={(e)=>setQV3DMTMV(e.target.value)}
                id="QV3DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    </tr>

    <tr>
      <td className="border border-gray-300 px-4 py-2 text-start">Prestation Mon Accompagnateur Renov'</td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV4DMTMV"
                value={QV4DMTMV}
                onChange={(e)=>setQV4DMTMV(e.target.value)}
                id="QV4DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV5DMTMV"
                value={QV5DMTMV}
                onChange={(e)=>setQV5DMTMV(e.target.value)}
                id="QV5DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV6DMTMV"
                value={QV6DMTMV}
                onChange={(e)=>setQV6DMTMV(e.target.value)}
                id="QV6DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV7DMTMV"
                value={QV7DMTMV}
                onChange={(e)=>setQV7DMTMV(e.target.value)}
                id="QV7DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    </tr>

    <tr>
      <td className="border border-gray-300 px-4 py-2 text-start">Sous-total</td>
    <td>
        {/* <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV8DMTMV"
                value={QV8DMTMV}
                onChange={(e)=>setQV8DMTMV(e.target.value)}
                id="QV8DMTMV"
                placeholder='.......................................'
            /></div> */}
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV9DMTMV"
                value={QV9DMTMV}
                onChange={(e)=>setQV9DMTMV(e.target.value)}
                id="QV9DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center'
                type="text"
                name="QV10DMTMV"
                value={QV10DMTMV}
                onChange={(e)=>setQV10DMTMV(e.target.value)}
                id="QV10DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    <td>
        <div ><input
            className='items-center justify-center text-center bg-gray-200'
                type="text"
                name="QV11DMTMV"
                value={QV11DMTMV}
                onChange={(e)=>setQV11DMTMV(e.target.value)}
                id="QV11DMTMV"
                placeholder='.......................................'
            /></div>
    </td>
    </tr>

   <tr>
   <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="QV12DMTMVoui" className="ml-2">Devis N°:</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV12DMTMV"
            value={QV12DMTMV}
            onChange={(e)=>setQV12DMTMV(e.target.value)}
            id="QV12DMTMV"
            placeholder='DEV |__|__|__|__|__|__|'
          /></div>
  </td>
   </tr>
   <tr>
   <td className="border border-gray-300 px-4 py-2 text-start">
    <label htmlFor="QV13DMTMVoui" className="ml-2">Date:</label>
  </td>
  <td>
    <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="QV13DMTMV"
            value={QV13DMTMV}
            onChange={(e)=>setQV13DMTMV(e.target.value)}
            id="QV13DMTMV"
            placeholder='|__|__| |__|__| |__|__|__|__|'
          /></div>
  </td>
   </tr>

</tbody>
  </table>


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

export default AddFormDevMarModVal