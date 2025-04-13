
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

const AddFormAttDeTrav = () => {
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
    const [QV1IDD,setQV1IDD] = useState('')
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

    const [QV1ADT,setQV1ADT] = useState('')
    const [QV2ADT,setQV2ADT] = useState('')
    const [QV3ADT,setQV3ADT] = useState('')
    const [QV4ADT,setQV4ADT] = useState('')
    const [QV5ADT,setQV5ADT] = useState('')
    const [QV6ADT,setQV6ADT] = useState('')
    const [QV7ADT,setQV7ADT] = useState('')
    const [QV8ADT,setQV8ADT] = useState('')
    const [QV9ADT,setQV9ADT] = useState('')
    const [QV10ADT,setQV10ADT] = useState('')
    const [QV11ADT,setQV11ADT] = useState('')
    const [QV12ADT,setQV12ADT] = useState('')
    const [QV13ADT,setQV13ADT] = useState('')
    const [QV14ADT,setQV14ADT] = useState('')
    const [QV15ADT,setQV15ADT] = useState('')
    const [QV16ADT,setQV16ADT] = useState('')
    const [QV17ADT,setQV17ADT] = useState('')
    const [QV18ADT,setQV18ADT] = useState('')
    const [QV19ADT,setQV19ADT] = useState('')
    const [QV20ADT,setQV20ADT] = useState('')
    const [QV21ADT,setQV21ADT] = useState('')
    const [QV22ADT,setQV22ADT] = useState('')
    const [QV23ADT,setQV23ADT] = useState('')
    const [QV24ADT,setQV24ADT] = useState('')
    const [QV25ADT,setQV25ADT] = useState('')
    const [QV26ADT,setQV26ADT] = useState('')
    const [QV27ADT,setQV27ADT] = useState('')
    const [QV28ADT,setQV28ADT] = useState('')
    const [QV29ADT,setQV29ADT] = useState('')
    const [QV30ADT,setQV30ADT] = useState('')
    const [QV31ADT,setQV31ADT] = useState('')
    const [QV32ADT,setQV32ADT] = useState('')
    const [QV33ADT,setQV33ADT] = useState('')
    const [QV34ADT,setQV34ADT] = useState('')
    const [QV35ADT,setQV35ADT] = useState('')
    const [QV36ADT,setQV36ADT] = useState('')
    const [QV37ADT,setQV37ADT] = useState('')
    const [QV38ADT,setQV38ADT] = useState('')
    const [QV39ADT,setQV39ADT] = useState('')
    const [QV40ADT,setQV40ADT] = useState('')
    const [QV41ADT,setQV41ADT] = useState('')
    const [QV42ADT,setQV42ADT] = useState('')
    const [QV43ADT,setQV43ADT] = useState('')
    const [QV44ADT,setQV44ADT] = useState('')
    const [QV444ADT,setQV444ADT] = useState('')
    const [QV45ADT,setQV45ADT] = useState('')
    const [QV46ADT,setQV46ADT] = useState('')
    const [QV47ADT,setQV47ADT] = useState('')
    const [QV49ADT,setQV49ADT] = useState('')
    const [QV50ADT,setQV50ADT] = useState('')



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
  
  


    const [CET1,setCET1] = useState('')
    const [imagesBase64IC, setImagesBase64IC] = useState([]);
    const [imagesBase64ICC, setImagesBase64ICC] = useState([]);
    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {QV1ADT,QV2ADT ,QV3ADT ,QV4ADT ,QV5ADT ,QV6ADT ,QV7ADT ,QV8ADT ,QV9ADT ,QV10ADT ,QV11ADT, QV12ADT,QV13ADT,QV14ADT,QV15ADT,QV16ADT,QV17ADT,QV18ADT,QV19ADT,QV20ADT,QV21ADT,QV22ADT,QV23ADT,QV24ADT, QV25ADT,QV26ADT,QV27ADT,QV28ADT,QV29ADT,QV30ADT,QV31ADT,QV32ADT,QV33ADT,QV34ADT,QV35ADT,QV36ADT,QV37ADT,QV38ADT, QV39ADT,QV40ADT,QV41ADT,QV42ADT,QV43ADT,QV44ADT, QV444ADT, QV45ADT, QV46ADT, QV47ADT, QV49ADT,QV50ADT, QV1IDD, Q1FDT,QV1FDT,Q2FDT,QV2FDT,Q3FDT,QV3FDT,QV4FDT,Q5FDT,QV5FDT,QV6FDT,QV7FDT,QV8FDT, Q9nFDT,Q9oFDT,QV9FDT, Q10nFDT,Q10oFDT,QV10FDT, Q11nFDT,Q11oFDT,QV11FDT, Q12nFDT,Q12oFDT,QV12FDT, Q13nFDT,Q13oFDT,QV13FDT, Q14nFDT,Q14oFDT,QV14FDT, Q15FDT1,Q15FDT2,Q15FDT3,Q15FDT4, Q16nFDT,Q16oFDT,QV16FDT, Q17FDT1,Q17FDT2,Q17FDT3,Q17FDT4, Q18nFDT,Q18oFDT,QV18FDT, QV19FDT, Q20nFDT,Q20oFDT,QV20FDT, QV21FDT, QV22FDT, QV23FDT, QV24FDT, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus,  Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q18, CET1, imagesBase64IC, imagesBase64ICC, email}

        await axios.post(`${base_url}/api/createPdfAttDeTrav`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfAttDeTrav`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'TTESTATION_DE_TRAVAUX_(DEVIS).pdf');
                    
    
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

                        setQV1ADT('');
                        setQV11ADT('');
                        setQV12ADT('');
                        setQV13ADT('');
                        setQV14ADT('');
                        setQV15ADT('');
                        setQV16ADT('');
                        setQV17ADT('');
                        setQV18ADT('');
                        setQV19ADT('');
                        setQV20ADT('');
                        setQV21ADT('');
                        setQV22ADT('');
                        setQV23ADT('');
                        setQV24ADT('');
                        setQV25ADT('');
                        setQV26ADT('');
                        setQV27ADT('');
                        setQV28ADT('');
                        setQV29ADT('');
                        setQV30ADT('');
                        setQV31ADT('');
                        setQV32ADT('');
                        setQV33ADT('');
                        setQV34ADT('');
                        setQV35ADT('');
                        setQV36ADT('');
                        setQV37ADT('');
                        setQV38ADT('');
                        setQV39ADT('');
                        setQV40ADT('');
                        setQV41ADT('');
                        setQV42ADT('');
                        setQV43ADT('');
                        setQV44ADT('');
                        setQV444ADT('');
                        setQV45ADT('');
                        setQV46ADT('');
                        setQV47ADT('');
                       
                        setQV49ADT('');
                        setQV50ADT('');
                        setQV2ADT('');
                        setQV3ADT('');
                        setQV4ADT('');
                        setQV5ADT('');
                        setQV6ADT('');
                        setQV7ADT('');
                        setQV8ADT('');
                        setQV9ADT('');
                        setQV10ADT('');

                        setQ1FDT('');
                        setQV1IDD('');
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
                        setImagesBase64ICC([]);
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendAttDeTrav`, {email})
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

  const handleImageUploadICC = (e) => {
    const files = Array.from(e.target.files);
    const newImagesBase64ICC = [];

    files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            newImagesBase64ICC.push(reader.result);
            setImagesBase64ICC((prevState) => [...prevState, reader.result]); // Add to state
        };
        reader.readAsDataURL(file);
    });
};
    

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire ATTESTATION DE TRAVAUX (DEVIS)</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>1. Identité du demandeur</h4>
</div>
<h6>NOM, Prénom(s) du demandeur : <span className='font-bold'>{demandeurNom} {demandeurPreNom}</span></h6>
  
</div>

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>2. Adresse du chantier</h4>
</div>

    <div >N°: <input
        className='items-center justify-center text-center'
            type="text"
            name="QV1ADT"
            value={QV1ADT}
            onChange={(e)=>setQV1ADT(e.target.value)}
            id="QV1ADT"
            placeholder='...................................'
          />
          Voie: <input
        className='items-center justify-center text-center'
            type="text"
            name="QV2ADT"
            value={QV2ADT}
            onChange={(e)=>setQV2ADT(e.target.value)}
            id="QV2ADT"
            placeholder='...................................'
          />
          </div>

          <div >Code postal : {demandeurCodePostal} 
            Ville : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV4ADT"
            value={QV4ADT}
            onChange={(e)=>setQV4ADT(e.target.value)}
            id="QV4ADT"
            placeholder='..................................'
          />
          </div>
</div>

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
<h4>3. Synthèse des travaux éligibles</h4>
</div>
<div > Coût total des travaux éligibles1 : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV5ADT"
            value={QV5ADT}
            onChange={(e)=>setQV5ADT(e.target.value)}
            id="QV5ADT"
            placeholder='...................................'
          /> € HT
          <br></br>
           <input
        className='items-center justify-center text-center'
            type="text"
            name="QV6ADT"
            value={QV6ADT}
            onChange={(e)=>setQV6ADT(e.target.value)}
            id="QV6ADT"
            placeholder='...................................'
          /> € TTC
          </div>
</div>

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
<h4>4. Synthèse de l’audit énergétique</h4>
</div>
<div > Date de réalisation de l’audit énergétique :  <input
        className='items-center justify-center text-center'
            type="text"
            name="QV7ADT"
            value={QV7ADT}
            onChange={(e)=>setQV7ADT(e.target.value)}
            id="QV7ADT"
            placeholder='|__|__| |__|__| |__|__|__|__|'
          />
          </div>

          <div > Identifiant de l’audit énergétique (n°) :   <input
        className='items-center justify-center text-center'
            type="text"
            name="QV8ADT"
            value={QV8ADT}
            onChange={(e)=>setQV8ADT(e.target.value)}
            id="QV8ADT"
            placeholder='....................................'
          />
          </div>

          <div > Professionnel ayant réalisé l’audit énergétique :
          </div>

          <div >  Raison sociale :   <input
        className='items-center justify-center text-center'
            type="text"
            name="QV9ADT"
            value={QV9ADT}
            onChange={(e)=>setQV9ADT(e.target.value)}
            id="QV9ADT"
            placeholder='......................................'
          />
          </div>

          <div > N° SIRET (14 chiffres) : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV10ADT"
            value={QV10ADT}
            onChange={(e)=>setQV10ADT(e.target.value)}
            id="QV10ADT"
            placeholder='|__|__|__|__|__|__|__|__|__|__|__|__|__|__|'
          />
          </div>

          <div ><h5> Situation initiale du logement (« avant travaux »)</h5>
          <p>Consommation conventionnelle (chauffage, refroidissement, production d'eau chaude sanitaire, 
            éclairage, auxiliaires)</p>

            <div > en kWh/m²/an d’énergie primaire : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV11ADT"
            value={QV11ADT}
            onChange={(e)=>setQV11ADT(e.target.value)}
            id="QV11ADT"
            placeholder='.................................'
          />
          </div>

          <div >en kWh/m²/an d’énergie finale : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV12ADT"
            value={QV12ADT}
            onChange={(e)=>setQV12ADT(e.target.value)}
            id="QV12ADT"
            placeholder='................................'
          />
          </div>

          <div > Émissions annuelles de gaz à effet de serre en kgCO2
          eq/m2/an : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV13ADT"
            value={QV13ADT}
            onChange={(e)=>setQV13ADT(e.target.value)}
            id="QV13ADT"
            placeholder='................................'
          />
          </div>

          <div >Classe de performance énergétique (de A à G) :<input
        className='items-center justify-center text-center'
            type="text"
            name="QV14ADT"
            value={QV14ADT}
            onChange={(e)=>setQV14ADT(e.target.value)}
            id="QV14ADT"
            placeholder='...........................'
          />
          </div>

          <div > Surface de référence du logement en m² :  <input
        className='items-center justify-center text-center'
            type="text"
            name="QV15ADT"
            value={QV15ADT}
            onChange={(e)=>setQV15ADT(e.target.value)}
            id="QV15ADT"
            placeholder='................................................'
          />
          </div>
          </div>


          <div ><h5>Situation du logement projetée dans le scénario de travaux retenu (« après travaux »)</h5>

            <div >  Référence ou n° du scénario retenu : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV16ADT"
            value={QV16ADT}
            onChange={(e)=>setQV16ADT(e.target.value)}
            id="QV16ADT"
            placeholder='.................................'
          />
          </div>

          <div ><p>Consommation conventionnelle (chauffage, refroidissement, production d'eau chaude sanitaire, 
            éclairage, auxiliaires)</p>
          </div>

          <div >  en kWh/m²/an d’énergie primaire  : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV17ADT"
            value={QV17ADT}
            onChange={(e)=>setQV17ADT(e.target.value)}
            id="QV17ADT"
            placeholder='................................'
          />
          </div>

          <div >en kWh/m²/an d’énergie finale : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV18ADT"
            value={QV18ADT}
            onChange={(e)=>setQV18ADT(e.target.value)}
            id="QV18ADT"
            placeholder='...........................'
          />
          </div>

          <div >Émissions annuelles de gaz à effet de serre en kgCO2
          eq/m2/an  :<input
        className='items-center justify-center text-center'
            type="text"
            name="QV19ADT"
            value={QV19ADT}
            onChange={(e)=>setQV19ADT(e.target.value)}
            id="QV19ADT"
            placeholder='................................................'
          />
          </div>

          <div >Classe de performance énergétique (de A à G) :  <input
        className='items-center justify-center text-center'
            type="text"
            name="QV20ADT"
            value={QV20ADT}
            onChange={(e)=>setQV20ADT(e.target.value)}
            id="QV20ADT"
            placeholder='................................................'
          />
          </div>

          <div >Surface de référence du logement en m²  <input
        className='items-center justify-center text-center'
            type="text"
            name="QV21ADT"
            value={QV21ADT}
            onChange={(e)=>setQV21ADT(e.target.value)}
            id="QV21ADT"
            placeholder='................................................'
          />
          </div>

          <div ><p>Gain de classes de performance énergétique associé au projet de travaux </p>
          </div>
          <div>
          <input
      id="QV22ADToui"
      type="checkbox"
      value="X"
      checked={QV22ADT.includes("X")}
      onChange={(e) => {
        if (e.target.checked) {
          setQV22ADT([...QV22ADT, "X"]);
        } else {
          setQV22ADT(QV22ADT.filter((val) => val !== "X"));
        }
      }}
    />
    <label htmlFor="QV22ADToui" className="ml-2">Gain de 2 classes</label>
  
          </div>
          <div>
          <input
      id="QV23ADToui"
      type="checkbox"
      value="X"
      checked={QV23ADT.includes("X")}
      onChange={(e) => {
        if (e.target.checked) {
          setQV23ADT([...QV21ADT, "X"]);
        } else {
          setQV23ADT(QV23ADT.filter((val) => val !== "X"));
        }
      }}
    />
    <label htmlFor="QV23ADToui" className="ml-2">Gain de 3 classes</label>
  
          </div>
          <div>
          <input
      id="QV24ADToui"
      type="checkbox"
      value="X"
      checked={QV24ADT.includes("X")}
      onChange={(e) => {
        if (e.target.checked) {
          setQV24ADT([...QV24ADT, "X"]);
        } else {
          setQV24ADT(QV24ADT.filter((val) => val !== "X"));
        }
      }}
    />
    <label htmlFor="QV24ADToui" className="ml-2">Gain de 4 classes ou plus</label>
  
          </div>
          </div>
</div>

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4> 5.Description des travaux éligibles</h4>
</div>


</div>



<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Description des postes de travaux éligibles
        (dont travaux induits)</th>
        <th className="border border-gray-300 px-4 py-2"> Coût des travaux  
en € HT/€ TTC
 (à partir des devis  
des entreprises)</th>
      </tr>
    </thead>
    <tbody>

    <tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV25ADT"
    value={QV25ADT}
    onChange={(e) => setQV25ADT(e.target.value)}
    id="QV25ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV26ADT"
    value={QV26ADT}
    onChange={(e) => setQV26ADT(e.target.value)}
    id="QV26ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>
<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV27ADT"
    value={QV27ADT}
    onChange={(e) => setQV27ADT(e.target.value)}
    id="QV27ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV28ADT"
    value={QV28ADT}
    onChange={(e) => setQV28ADT(e.target.value)}
    id="QV28ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>
<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV29ADT"
    value={QV29ADT}
    onChange={(e) => setQV29ADT(e.target.value)}
    id="QV29ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV30ADT"
    value={QV30ADT}
    onChange={(e) => setQV30ADT(e.target.value)}
    id="QV30ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV31ADT"
    value={QV31ADT}
    onChange={(e) => setQV31ADT(e.target.value)}
    id="QV31ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV32ADT"
    value={QV32ADT}
    onChange={(e) => setQV32ADT(e.target.value)}
    id="QV32ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV33ADT"
    value={QV33ADT}
    onChange={(e) => setQV33ADT(e.target.value)}
    id="QV33ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV34ADT"
    value={QV34ADT}
    onChange={(e) => setQV34ADT(e.target.value)}
    id="QV34ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV35ADT"
    value={QV35ADT}
    onChange={(e) => setQV35ADT(e.target.value)}
    id="QV35ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV36ADT"
    value={QV36ADT}
    onChange={(e) => setQV36ADT(e.target.value)}
    id="QV36ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>

<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV37ADT"
    value={QV37ADT}
    onChange={(e) => setQV37ADT(e.target.value)}
    id="QV37ADT"
    placeholder="Maximum 55 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV38ADT"
    value={QV38ADT}
    onChange={(e) => setQV38ADT(e.target.value)}
    id="QV38ADT"
    placeholder="Maximum 23 lettres par ligne"
  />
</div>
  </td>
 
</tr>



  
      
        
      
    </tbody>
  </table>


</div>



<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4> 6. Demande de dérogation aux critères de résistance thermique, de coefficient 
    de transmission thermique ou de facteur de transmission solaire</h4>
</div>


</div>



<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2"> Paroi opaque ou vitrée concernée</th>
        <th className="border border-gray-300 px-4 py-2"> Motifs  
(description de la contrainte technique, 
architecturale ou patrimoniale)
</th>
      </tr>
    </thead>
    <tbody>

    <tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV39ADT"
    value={QV39ADT}
    onChange={(e) => setQV39ADT(e.target.value)}
    id="QV39ADT"
    placeholder="Maximum 35 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV40ADT"
    value={QV40ADT}
    onChange={(e) => setQV40ADT(e.target.value)}
    id="QV40ADT"
    placeholder="Maximum 39 lettres par ligne"
  />
</div>
  </td>
 
</tr>
<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV41ADT"
    value={QV41ADT}
    onChange={(e) => setQV41ADT(e.target.value)}
    id="QV41ADT"
    placeholder="Maximum 35 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV42ADT"
    value={QV42ADT}
    onChange={(e) => setQV42ADT(e.target.value)}
    id="QV42ADT"
    placeholder="Maximum 39 lettres par ligne"
  />
</div>
  </td>
 
</tr>
<tr>
    <td className="border border-gray-300 px-4 py-2 text-start">
    <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV43ADT"
    value={QV43ADT}
    onChange={(e) => setQV43ADT(e.target.value)}
    id="QV43ADT"
    placeholder="Maximum 35 lettres par ligne"
  />
</div>
  </td>
  <td>
  <div className="flex items-center justify-center">
  <textarea
    className="text-center border rounded-md p-3 w-full min-h-[50px] resize"
    name="QV44ADT"
    value={QV44ADT}
    onChange={(e) => setQV44ADT(e.target.value)}
    id="QV44ADT"
    placeholder="Maximum 39 lettres par ligne"
  />
</div>
  </td>
 
</tr>








  
      
        
      
    </tbody>
  </table>


</div>


<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>En signant le présent document, le demandeur </h4>
</div>
<p>3) comprend qu’il demande à bénéficier, pour les travaux relevant de la présente attestation, d’une 
prime de l’Agence nationale de l’habitat intégrant une prime au titre du dispositif des Certificats 
d’économie d’énergie (CEE), et s’engage à réserver pour ces travaux l’exclusivité de la valorisation 
des Certificats d’économie d’énergie à l’Agence nationale de l’habitat.</p>
</div>
<br></br>
<div>
  <p>Fait à :<input
        className='items-center justify-center text-center'
            type="text"
            name="QV444ADT"
            value={QV444ADT}
            onChange={(e)=>setQV444ADT(e.target.value)}
            id="QV444ADT"
            placeholder='....................................................'
          />
 ,  NOM, Prénom(s) et signature du demandeur : {demandeurNom} {demandeurPreNom}
 <br></br>le <input
        className='items-center justify-center text-center'
            type="text"
            name="QV45ADT"
            value={QV45ADT}
            onChange={(e)=>setQV45ADT(e.target.value)}
            id="QV45ADT"
            placeholder='|__|__| |__|__| |__|__|__|__|'
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


<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>En signant le présent document, l’accompagnateur agréé  
    « Mon Accompagnateur Rénov’ »  </h4>
</div>
<p> 1) atteste sur la base des devis remis de la concordance entre le programme de travaux  
et le scénario de travaux issu de l’audit énergétique retenu par le ménage ;
 <br></br>2) atteste que l’audit énergétique a été réalisé conformément aux exigences relatives au contenu  
de l’audit prévues à l’article 8 de l’arrêté du 17 novembre 2020 susmentionné, par une personne 
répondant aux conditions mentionnées au VII de l’article 2 du décret du 14 janvier 2020 relatif  
à la prime de transition énergétique.</p>
</div>
<br></br>
<div>
  <p>Fait à :<input
        className='items-center justify-center text-center'
            type="text"
            name="QV46ADT"
            value={QV46ADT}
            onChange={(e)=>setQV46ADT(e.target.value)}
            id="QV46ADT"
            placeholder='....................................................'
          />

 <br></br>le <input
        className='items-center justify-center text-center'
            type="text"
            name="QV47ADT"
            value={QV47ADT}
            onChange={(e)=>setQV47ADT(e.target.value)}
            id="QV47ADT"
            placeholder='|__|__| |__|__| |__|__|__|__|'
          />
 </p>
 </div>
 <div>
    <br></br>
    NOM, Prénom(s) et signature de l'accompagnateur :<br></br>
 </div>
<br></br>
 <label
         htmlFor="imgICC"
         className="w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
       >
         <div className="flex justify-center items-center flex-col gap-y-2">
           <span className="text-2xl">
             <MdCloudUpload />
           </span>
           <span>Select Image signature de l'accompagnateur :</span>
         </div>
       </label>
       <input
         type="file"
         id="imgICC"
         className="hidden"
         onChange={handleImageUploadICC}
         multiple
       />
 
       {/* Display image previews */}
       {imagesBase64ICC.length > 0 && (
         <div className="mt-4 flex gap-2 flex-wrap">
           {imagesBase64ICC.map((imgBase64ICC, index) => (
             <div className="image-container" key={index}>
               <img
                 src={imgBase64ICC}
                 alt={`Image preview ${index + 1}`}
                 className="w-20 h-20 object-cover rounded-md"
               />
             </div>
           ))}
         </div>
       )}

<div>
  <p> Raison sociale :<input
        className='items-center justify-center text-center'
            type="text"
            name="QV49ADT"
            value={QV49ADT}
            onChange={(e)=>setQV49ADT(e.target.value)}
            id="QV49ADT"
            placeholder='.............................................................................'
          />

 <br></br> N° SIRET (14 chiffres) : <input
        className='items-center justify-center text-center'
            type="text"
            name="QV50ADT"
            value={QV50ADT}
            onChange={(e)=>setQV50ADT(e.target.value)}
            id="QV50ADT"
            placeholder='|__|__|__|__|__|__|__|__|__|__|__|__|__|__|'
          />
 </p>
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

export default AddFormAttDeTrav