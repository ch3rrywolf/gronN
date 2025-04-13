
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

const AddFormSolDuProLeMai = () => {
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

        await axios.post(`${base_url}/api/createPdfPlandeFinancementDet`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfPlandeFinancementDet`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'FormulaireDocumentPlandeFinancementDet.pdf');
                    
    
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
                        axios.post(`${base_url}/api/sendPlandeFinancementDet`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire SOLLICITATION DU PROPRIETAIRE - LE MAIRE</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}




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

export default AddFormSolDuProLeMai