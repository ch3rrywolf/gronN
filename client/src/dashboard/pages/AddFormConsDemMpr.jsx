
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

const AddFormConsDemMpr = () => {
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

    const [Q1CDM,setQ1CDM] = useState('')
    const [Q2CDM,setQ2CDM] = useState('')
    const [Q3CDM,setQ3CDM] = useState('')
    const [Q4CDM,setQ4CDM] = useState('')
    const [Q5CDM,setQ5CDM] = useState('')
    const [Q6CDM,setQ6CDM] = useState('')
    const [Q7CDM,setQ7CDM] = useState('')
    const [Q8CDM,setQ8CDM] = useState('')
    const [Q9CDM,setQ9CDM] = useState('')
    const [Q10CDM,setQ10CDM] = useState('')
    const [Q11CDM,setQ11CDM] = useState('')
    const [Q12CDM,setQ12CDM] = useState('')
    const [Q13CDM,setQ13CDM] = useState('')
    const [Q14CDM,setQ14CDM] = useState('')
    const [Q15CDM,setQ15CDM] = useState('')
    const [Q16CDM,setQ16CDM] = useState('')
    const [Q17CDM,setQ17CDM] = useState('')
    const [Q18CDM,setQ18CDM] = useState('')
    const [Q19CDM,setQ19CDM] = useState('')
    const [Q20CDM,setQ20CDM] = useState('')
    const [Q21CDM,setQ21CDM] = useState('')
    const [Q22CDM,setQ22CDM] = useState('')
    const [Q23CDM,setQ23CDM] = useState('')
    const [Q24CDM,setQ24CDM] = useState('')
    const [Q25CDM,setQ25CDM] = useState('')
    const [Q26CDM,setQ26CDM] = useState('')

  
  


    const [CET1,setCET1] = useState('')
    const [imagesBase64IC, setImagesBase64IC] = useState([]);
    const [imagesBase64ICC, setImagesBase64ICC] = useState([]);
    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {Q1CDM,Q2CDM,Q3CDM,Q4CDM,Q5CDM,Q6CDM,Q7CDM,Q8CDM,Q9CDM,Q10CDM,Q11CDM,Q12CDM,Q13CDM,Q14CDM,Q15CDM,Q16CDM,Q17CDM,Q18CDM,Q19CDM,Q20CDM,Q21CDM,Q22CDM,Q23CDM,Q24CDM, Q25CDM, Q26CDM, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, CET1, imagesBase64IC, imagesBase64ICC, email}

        await axios.post(`${base_url}/api/createPdfConsDemMpr`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfConsDemMpr`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'CONSENTEMENT_DEMANDE_MPR.pdf');
                    
    
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

                        setQ1CDM('');
                        setQ2CDM('');
                        setQ3CDM('');
                        setQ4CDM('');
                        setQ5CDM('');
                        setQ6CDM('');
                        setQ7CDM('');
                        setQ8CDM('');
                        setQ9CDM('');
                        setQ10CDM('');
                        setQ11CDM('');
                        setQ12CDM('');
                        setQ13CDM('');
                        setQ14CDM('');
                        setQ15CDM('');
                        setQ16CDM('');
                        setQ17CDM('');
                        setQ18CDM('');
                        setQ19CDM('');
                        setQ20CDM('');
                        setQ21CDM('');
                        setQ22CDM('');
                        setQ23CDM('');
                        setQ24CDM('');
                        setQ25CDM('');
                        setQ26CDM('');
                  
                     
                        
                        

                        setCET1('');
                        setImagesBase64IC([]);
                        setImagesBase64ICC([]);
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendConsDemMpr`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire CONSENTEMENT DEMANDE MPR</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}

<div>
  <div>
    <div>
      <h2 className='text-xl font-medium'>Attestation de consentement à la demande de prime MaPrimeRénov’</h2>
      <h5 className='text-l font-medium'>Préalable à la validation de l’octroi de la prime MaPrimeRénov</h5>
      <br></br>
      <p className='text-xs font-medium'> Ce document a pour objectif de vérifier que vous êtes bien à l’origine de la demande de prime MaPrimeRénov’ déposée en votre nom.<br></br>  
      <span className='font-bold'>Si vous n’êtes pas à l’origine de cette demande de prime,</span> nous vous invitons à nous le signaler par retour d'e-mail</p>
    </div>
  </div>
  <br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>1. Identité du demandeur</h4>
</div>
<h6> Je soussigné(e), (Nom et prénom) : <span className='font-bold'>{demandeurNom} {demandeurPreNom}</span></h6>
<h6>  demeurant au : <span className='font-bold'>{demandeurAdresse}</span></h6>
  
</div>

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4> Atteste sur l'honneur :</h4>
</div>

<div>  
  
<input
      id="Q1CDMoui"
      type="checkbox"
      value="☑"
      checked={Q1CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ1CDM([...Q1CDM, "☑"]);
        } else {
          setQ1CDM(Q1CDM.filter((val) => val !== "☑"));
        }
      }}
    />
  
  <label htmlFor="Q1CDMoui" className="ml-2"> avoir créé moi-même un dossier sur la plateforme </label> <span className='font-bold text-blue-600'><u>maprimerenov.gouv.fr</u></span></div>

    <div >
    <input
      id="Q2CDMoui"
      type="checkbox"
      value="☑"
      checked={Q2CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ2CDM([...Q2CDM, "☑"]);
        } else {
          setQ2CDM(Q2CDM.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q2CDMoui" className="ml-2"> rénover mon logement situé au  :</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q3CDM"
            value={Q3CDM}
            onChange={(e)=>setQ3CDM(e.target.value)}
            id="Q3CDM"
            placeholder='...................................'
          />
          </div>

          <div> 
          <input
      id="Q4CDMoui"
      type="checkbox"
      value="☑"
      checked={Q4CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4CDM([...Q4CDM, "☑"]);
        } else {
          setQ4CDM(Q4CDM.filter((val) => val !== "☑"));
        }
      }}
    />
        <label htmlFor="Q4CDMoui" className="ml-2"> connaître mon numéro de dossier MaPrimeRénov’ : </label><span className='font-bold'>MPR-</span> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q5CDM"
            value={Q5CDM}
            onChange={(e)=>setQ5CDM(e.target.value)}
            id="Q5CDM"
            placeholder='...................................'
          />
          </div>

          <div >
          <input
      id="Q6CDMoui"
      type="checkbox"
      value="☑"
      checked={Q6CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6CDM([...Q6CDM, "☑"]);
        } else {
          setQ6CDM(Q6CDM.filter((val) => val !== "☑"));
        }
      }}
    />
           <label htmlFor="Q6CDMoui" className="ml-2"> que la prime MaPrimeRénov’ va me permettre de </label> <span className='font-bold'> financer les travaux suivants :</span></div>
          <div>
          Travaux 1 : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q7CDM"
            value={Q7CDM}
            onChange={(e)=>setQ7CDM(e.target.value)}
            id="Q7CDM"
            placeholder='...................................'
          />
          </div>
          <div>
          Travaux 2 : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q8CDM"
            value={Q8CDM}
            onChange={(e)=>setQ8CDM(e.target.value)}
            id="Q8CDM"
            placeholder='...................................'
          />
          </div>
          <div>
          Travaux 3 : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q9CDM"
            value={Q9CDM}
            onChange={(e)=>setQ9CDM(e.target.value)}
            id="Q9CDM"
            placeholder='...................................'
          />
          </div>
          <br></br>
          <div >
          <input
      id="Q10CDMoui"
      type="checkbox"
      value="☑"
      checked={Q10CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ10CDM([...Q10CDM, "☑"]);
        } else {
          setQ10CDM(Q10CDM.filter((val) => val !== "☑"));
        }
      }}
    /> 
           <label htmlFor="Q10CDMoui" className="ml-2"> par l(es) entreprise(s) qui a(ont) émis le devis : </label></div>
          <div>
          Entreprise 1 : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q11CDM"
            value={Q11CDM}
            onChange={(e)=>setQ11CDM(e.target.value)}
            id="Q11CDM"
            placeholder='...................................'
          />
           N° SIRET : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q12CDM"
            value={Q12CDM}
            onChange={(e)=>setQ12CDM(e.target.value)}
            id="Q12CDM"
            placeholder='|__|__|__|__|__|__|__|__|__|'
          />
          </div>
          <div>
          Entreprise 2 : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q13CDM"
            value={Q13CDM}
            onChange={(e)=>setQ13CDM(e.target.value)}
            id="Q13CDM"
            placeholder='...................................'
          />
           N° SIRET : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q14CDM"
            value={Q14CDM}
            onChange={(e)=>setQ14CDM(e.target.value)}
            id="Q14CDM"
            placeholder='|__|__|__|__|__|__|__|__|__|'
          />
          </div>
          <div>
          Entreprise 3 : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q15CDM"
            value={Q15CDM}
            onChange={(e)=>setQ15CDM(e.target.value)}
            id="Q15CDM"
            placeholder='...................................'
          />
          N° SIRET : <input
        className='items-center justify-center text-center'
            type="text"
            name="Q16CDM"
            value={Q16CDM}
            onChange={(e)=>setQ16CDM(e.target.value)}
            id="Q16CDM"
            placeholder='|__|__|__|__|__|__|__|__|__|'
          />
          </div>
          <br></br>
          <div> 
          <input
      id="Q17CDMoui"
      type="checkbox"
      value="☑"
      checked={Q17CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ17CDM([...Q17CDM, "☑"]);
        } else {
          setQ17CDM(Q17CDM.filter((val) => val !== "☑"));
        }
      }}
    />
          <label htmlFor="Q17CDMoui" className="ml-2"> pour un montant total TTC de : </label><input
        className='items-center justify-center text-center'
            type="text"
            name="Q18CDM"
            value={Q18CDM}
            onChange={(e)=>setQ18CDM(e.target.value)}
            id="Q18CDM"
            placeholder='...................................'
          />€
          </div>
          <div>
          <input
      id="Q19CDMoui"
      type="checkbox"
      value="☑"
      checked={Q19CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19CDM([...Q19CDM, "☑"]);
        } else {
          setQ19CDM(Q19CDM.filter((val) => val !== "☑"));
        }
      }}
    />

<label htmlFor="Q19CDMoui" className="ml-2"> que le montant qui restera à ma charge, une fois toutes les aides déduites,</label> <br></br>s’élèvera à <input
        className='items-center justify-center text-center'
            type="text"
            name="Q20CDM"
            value={Q20CDM}
            onChange={(e)=>setQ20CDM(e.target.value)}
            id="Q20CDMT"
            placeholder='...................................'
          />€
          </div>
          <br></br>
          <div>
          <span className='font-bold'>Avoir mandaté un mandataire </span>(Nom du mandataire) :  <input
        className='items-center justify-center text-center'
            type="text"
            name="Q21CDM"
            value={Q21CDM}
            onChange={(e)=>setQ21CDM(e.target.value)}
            id="Q21CDM"
            placeholder='...................................'
          />
          </div>
          <div>
          <input
      id="Q22CDMoui"
      type="checkbox"
      value="☑"
      checked={Q22CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ22CDM([...Q22CDM, "☑"]);
        } else {
          setQ22CDM(Q22CDM.filter((val) => val !== "☑"));
        }
      }}
    />
    <label htmlFor="Q22CDMoui" className="ml-2"> un mandataire administratif (le mandataire effectue les démarches administratives sur<br></br> 
      la plateforme maprimerenov.gouv.fr à ma place)</label>
  
          </div>
          <div>
          <input
      id="Q23CDMoui"
      type="checkbox"
      value="☑"
      checked={Q23CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23CDM([...Q23CDM, "☑"]);
        } else {
          setQ23CDM(Q23CDM.filter((val) => val !== "☑"));
        }
      }}
    />
    <label htmlFor="Q23CDMoui" className="ml-2"> un mandataire financier (le mandataire perçoit la prime MaPrimeRénov’ à ma place)</label>
  
          </div>
          <div>
          <input
      id="Q24CDMoui"
      type="checkbox"
      value="☑"
      checked={Q24CDM.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24CDM([...Q24CDM, "☑"]);
        } else {
          setQ24CDM(Q24CDM.filter((val) => val !== "☑"));
        }
      }}
    />
    <label htmlFor="Q24CDMoui" className="ml-2">  un mandataire mixte administratif et financier (le mandataire effectue les démarches <br></br>
      administratives sur la plateforme maprimerenov.gouv.fr et perçoit la prime à ma place)</label>
  
          </div>
          <br></br>
          <div>
            <p>
            Nous vous rappelons que pour désigner un mandataire, vous devez avoir rempli, signé et téléversé <br></br>
dans votre dossier de demande de prime le mandat disponible ici :  <br></br>
<span className='text-blue-600'><u>https://anah.fr/cerfa-mandat-general-MPR/ </u></span><br></br><br></br>
 Je suis informé(e) que si je ne complète pas toutes les informations demandées dans cette attesta
tion de consentement, ma demande de prime sera rejetée.<br></br><br></br>
 Je certifie l’exactitude des renseignements portés sur la présente attestation.
            </p>
          </div><br></br>

</div>

<div>


</div>

<div>




        


</div>










<br></br>
<div>
  <p>Fait à :<input
        className='items-center justify-center text-center'
            type="text"
            name="Q25CDM"
            value={Q25CDM}
            onChange={(e)=>setQ25CDM(e.target.value)}
            id="Q25CDM"
            placeholder='....................................................'
          />
 ,  NOM, Prénom(s) et signature : {demandeurNom} {demandeurPreNom}
 {/* <br></br>le <input
        className='items-center justify-center text-center'
            type="text"
            name="Q26CDM"
            value={Q26CDM}
            onChange={(e)=>setQ26CDM(e.target.value)}
            id="Q26CDM"
            placeholder='|__|__| |__|__| |__|__|__|__|'
          /> */}
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
           <span>Select Image Signature du demandeur</span>
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


export default AddFormConsDemMpr