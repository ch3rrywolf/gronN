
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

const AddFormConMarVal = () => {
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
    const [Q1CMA,setQ1CMA] = useState([])
    const [Q2CMA,setQ2CMA] = useState([])
    const [Q3CMA,setQ3CMA] = useState('')
    const [Q4CMA,setQ4CMA] = useState('')
  
    const [imagesBase64IC, setImagesBase64IC] = useState([]);
    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {Q1CMA,Q2CMA,Q3CMA,Q4CMA, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, imagesBase64IC, email}

        await axios.post(`${base_url}/api/createPdfConMarVal`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfConMarVal`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'CONTRAT_MAR_VALOREM.pdf');
                    
    
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

                        setQ1CMA('');
                        setQ2CMA('');
                        setQ3CMA('');
                        setQ4CMA('');

                  
                      
                        
                      
                        

                        
                        setImagesBase64IC([]);
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendConMarVal`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire CONTRAT MAR VALOREM</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}


<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2"></th>
       
      </tr>
    </thead>
    <tbody>

    <tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <input
      id="Q1CMAm"
      type="checkbox"
      value="M."
      checked={Q1CMA.includes("M.")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ1CMA([...Q1CMA, "M."]);
        } else {
          setQ1CMA(Q1CMA.filter((val) => val !== "M."));
        }
      }}
    />
    <label htmlFor="Q1CMAm" className="ml-2">M. {demandeurNom} {demandeurPreNom}</label>
    <input
      id="Q2CMAmme"
      type="checkbox"
      value="Mme."
      checked={Q2CMA.includes("Mme.")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ2CMA([...Q2CMA, "Mme."]);
        } else {
          setQ2CMA(Q2CMA.filter((val) => val !== "Mme."));
        }
      }}
    />
    <label htmlFor="Q2CMAmme" className="ml-2">Mme. {demandeurNom} {demandeurPreNom}</label>
  
  </td>
  <td>
    <div >Demeurent: {demandeurAdresse} </div>
  </td>
</tr>         
    </tbody>
  </table>


</div>

<div>
  <p>
 <br></br>Contrat pour la réalisation d’une mission d’accompagnateur rénov
 <br></br>Fait, en deux exemplaires originaux le <input
        className='items-center justify-center text-center'
            type="text"
            name="Q3CMA"
            value={Q3CMA}
            onChange={(e)=>setQ3CMA(e.target.value)}
            id="Q3CMA"
            placeholder='|__|__| |__|__| |__|__|__|__|'
          />, à<input
          className='items-center justify-center text-center'
              type="text"
              name="Q4CMA"
              value={Q4CMA}
              onChange={(e)=>setQ4CMA(e.target.value)}
              id="Q4CMA"
              placeholder='....................................................'
            /> 
 </p>
 </div>
<br></br>
 <label
         htmlFor="imgIC"
         className="w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
       >
         <div className="flex justify-center items-center flex-col gap-y-2">
           <span className="text-2xl">
             <MdCloudUpload />
           </span>
           <span>Select Image Signature bénéficiaire</span>
         </div>
       </label>
       <input
         type="file"
         id="imgIC"
         className="hidden"
         onChange={handleImageUploadIC}
         multiple
       />
 
       {/* Display image previews */}
       {imagesBase64IC.length > 0 && (
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
       )}



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

export default AddFormConMarVal