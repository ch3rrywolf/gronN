
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

const AddFormSynDeGriAnaDuLogVal = () => {
  const {dossiers_id} = useParams()
  const {store} = useContext(storeContext)
  const [show, setShow] = useState(false)

    const [demandeurNom, setDemandeurNom] = useState("");
    const [demandeurPreNom, setDemandeurPreNom] = useState("");
    const [demandeurAdresse, setDemandeurAdresse] = useState("");
    const [numero, setnumero] = useState("");
    const [ville, setville] = useState("");
    const [voie, setvoie] = useState("");
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
            setnumero(data?.dossiers?.numero);
            setville(data?.dossiers?.ville);
            setvoie(data?.dossiers?.voie);
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

    const [Q1SDLGDDLA,setQ1SDLGDDLA] = useState('')
    const [Q2SDLGDDLA,setQ2SDLGDDLA] = useState('')
    const [Q3SDLGDDLA,setQ3SDLGDDLA] = useState('')
    const [Q4SDLGDDLA,setQ4SDLGDDLA] = useState('')
    const [Q5SDLGDDLA,setQ5SDLGDDLA] = useState('')
    const [Q6SDLGDDLA,setQ6SDLGDDLA] = useState('')
    const [Q7SDLGDDLA,setQ7SDLGDDLA] = useState('')
    const [Q8SDLGDDLA,setQ8SDLGDDLA] = useState('')
    const [Q9SDLGDDLA,setQ9SDLGDDLA] = useState('')
    const [Q10SDLGDDLA,setQ10SDLGDDLA] = useState('')
    const [Q11SDLGDDLA,setQ11SDLGDDLA] = useState('')
    const [Q12SDLGDDLA,setQ12SDLGDDLA] = useState('')
    const [Q13SDLGDDLA,setQ13SDLGDDLA] = useState('')
    const [Q14SDLGDDLA,setQ14SDLGDDLA] = useState('')
    const [Q15SDLGDDLA,setQ15SDLGDDLA] = useState('')
    const [Q16SDLGDDLA,setQ16SDLGDDLA] = useState('')
    const [Q17SDLGDDLA,setQ17SDLGDDLA] = useState('')
    const [Q18SDLGDDLA,setQ18SDLGDDLA] = useState('')
    const [Q19SDLGDDLA,setQ19SDLGDDLA] = useState('')
    const [Q20SDLGDDLA,setQ20SDLGDDLA] = useState('')
    const [Q21SDLGDDLA,setQ21SDLGDDLA] = useState('')
    const [Q22SDLGDDLA,setQ22SDLGDDLA] = useState('')
    const [Q23SDLGDDLA,setQ23SDLGDDLA] = useState('')
    const [Q24SDLGDDLA,setQ24SDLGDDLA] = useState('')
    const [Q25SDLGDDLA,setQ25SDLGDDLA] = useState('')


    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {Q1SDLGDDLA,Q2SDLGDDLA,Q3SDLGDDLA,Q4SDLGDDLA,Q5SDLGDDLA,Q6SDLGDDLA,Q7SDLGDDLA,Q8SDLGDDLA,Q9SDLGDDLA,Q10SDLGDDLA,Q11SDLGDDLA,Q12SDLGDDLA,Q13SDLGDDLA,Q14SDLGDDLA,Q15SDLGDDLA,Q16SDLGDDLA,Q17SDLGDDLA,Q18SDLGDDLA,Q19SDLGDDLA,Q20SDLGDDLA,Q21SDLGDDLA,Q22SDLGDDLA,Q23SDLGDDLA,Q24SDLGDDLA,Q25SDLGDDLA, demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, email}

        await axios.post(`${base_url}/api/createPdfSynDeGriAnaDuLogVal`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfSynDeGriAnaDuLogVal`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'SYNTHÈSE_DE_LA_GRILLE_DANALYSE_DU_LOGEMEN_VALOREM.pdf');
                    
    
                        setDemandeurNom(data?.dossiers?.demandeurNom);
                        setDemandeurPreNom(data?.dossiers?.demandeurPreNom);
                        setDemandeurAdresse(data?.dossiers?.demandeurAdresse);
                        setnumero(data?.dossiers?.numero);
                        setville(data?.dossiers?.ville);
                        setvoie(data?.dossiers?.voie);
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

                        setQ1SDLGDDLA('');
                        setQ2SDLGDDLA('');
                        setQ3SDLGDDLA('');
                        setQ4SDLGDDLA('');
                        setQ5SDLGDDLA('');
                        setQ6SDLGDDLA('');
                        setQ7SDLGDDLA('');
                        setQ8SDLGDDLA('');
                        setQ9SDLGDDLA('');
                        setQ10SDLGDDLA('');
                        setQ11SDLGDDLA('');
                        setQ12SDLGDDLA('');
                        setQ13SDLGDDLA('');
                        setQ14SDLGDDLA('');
                        setQ15SDLGDDLA('');
                        setQ16SDLGDDLA('');
                        setQ17SDLGDDLA('');
                        setQ18SDLGDDLA('');
                        setQ19SDLGDDLA('');
                        setQ20SDLGDDLA('');
                        setQ21SDLGDDLA('');
                        setQ22SDLGDDLA('');
                        setQ23SDLGDDLA('');
                        setQ24SDLGDDLA('');
                        setQ25SDLGDDLA('');

                        
                     
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendSynDeGriAnaDuLogVal`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire SYNTHÈSE DE LA GRILLE D'ANALYSE DU LOGEMENT VALOREM</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}

<div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>Dossier :</h4>
</div>
<h6> Nom et prénom (dépositaire de la demande d'aide): <span className='font-bold'>{demandeurNom} {demandeurPreNom}</span></h6>
<h6>   Adresse (adresse du logement à rénover visé par une demande d'aide): <span className='font-bold'>{demandeurAdresse}</span></h6>
  
</div>

<div>
<div>
    <label htmlFor="Q1SDLGDDLAoui" className="ml-2">N° :  </label> <span className='font-bold'>{numero}</span>
    <label htmlFor="Q2SDLGDDLAoui" className="ml-2">Voie :  </label> <span className='font-bold'>{voie}</span>
</div>
<div>
    <label htmlFor="Q3SDLGDDLAoui" className="ml-2">Code postal: </label> <span className='font-bold'>{demandeurCodePostal}</span>
    <label htmlFor="Q4SDLGDDLAoui" className="ml-2">Ville :  </label> <span className='font-bold'>{ville}</span>
</div>

<div>
    <h4>Nom de l’accompagnateur : </h4>
    <h6 className='font-bold'>ARCADIA AUDIT</h6>
</div>
<div>
    <h4> N° SIRET: <span className='font-bold'>95384672200015</span></h4>
</div>
<div>
<label htmlFor="Q2SDLGDDLAoui" className="ml-2">Date de visite :  </label><input
    className='items-center justify-center text-center'
    type="text"
    name="Q2SDLGDDLA"
    value={Q2SDLGDDLA}
    onChange={(e)=>setQ2SDLGDDLA(e.target.value)}
    id="Q2SDLGDDLA"
    placeholder='__ /__ /____ '
    />
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>Entrées de travaux identifiées :</h4>
</div>

<div >
    <input
      id="Q5SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q5SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5SDLGDDLA([...Q5SDLGDDLA, "✔"]);
        } else {
          setQ5SDLGDDLA(Q5SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5SDLGDDLAoui" className="ml-2"> Dégradation </label>
       <input
      id="Q6SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q6SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6SDLGDDLA([...Q6SDLGDDLA, "✔"]);
        } else {
          setQ6SDLGDDLA(Q6SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6SDLGDDLAoui" className="ml-2"> Adaptation </label>
</div>
<div >
    <input
      id="Q7SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q7SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7SDLGDDLA([...Q7SDLGDDLA, "✔"]);
        } else {
          setQ7SDLGDDLA(Q7SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q7SDLGDDLAoui" className="ml-2"> Insalubrité </label>
       <input
      id="Q8SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q8SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8SDLGDDLA([...Q8SDLGDDLA, "✔"]);
        } else {
          setQ8SDLGDDLA(Q8SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q8SDLGDDLAoui" className="ml-2"> Réparation/entretien </label>
</div>
<div >
    <input
      id="Q9SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q9SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ9SDLGDDLA([...Q9SDLGDDLA, "✔"]);
        } else {
          setQ9SDLGDDLA(Q9SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q9SDLGDDLAoui" className="ml-2">  Isolation (ITE, ITI, toiture, menuiseries, etc.) </label>
       <input
      id="Q10SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q10SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ10SDLGDDLA([...Q10SDLGDDLA, "✔"]);
        } else {
          setQ10SDLGDDLA(Q10SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q10SDLGDDLAoui" className="ml-2"> Amélioration/embellissement </label>
</div>
<div >
    <input
      id="Q11SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q11SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ11SDLGDDLA([...Q11SDLGDDLA, "✔"]);
        } else {
          setQ11SDLGDDLA(Q11SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q11SDLGDDLAoui" className="ml-2">Changement du système de chauffage</label>
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>Signalement d'une situation manifeste d’habitat indigne, d’indécence au titre de la
 performance énergétique, de non-adaptation ou d’inadaptation des ressources du
 ménage:</h4>
</div>
<div >
    <input
      id="Q12SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q12SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12SDLGDDLA([...Q12SDLGDDLA, "✔"]);
        } else {
          setQ12SDLGDDLA(Q12SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12SDLGDDLAoui" className="ml-2">  Oui </label>
       <input
      id="Q13SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q13SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13SDLGDDLA([...Q13SDLGDDLA, "✔"]);
        } else {
          setQ13SDLGDDLA(Q13SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13SDLGDDLAoui" className="ml-2"> Non </label>

</div>
<div>
<label htmlFor="Q14SDLGDDLAoui" className="ml-2"> Si oui, description de la situation :</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q14SDLGDDLA"
            value={Q14SDLGDDLA}
            onChange={(e)=>setQ14SDLGDDLA(e.target.value)}
            id="Q14SDLGDDLA"
            placeholder='...................................'
          />
</div>
<div>
<label htmlFor="Q15SDLGDDLAoui" className="ml-2"> En cas de situation manifeste d’habitat indigne, nom et adresse du service à qui a été adressé le signalement :
</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q15SDLGDDLA"
            value={Q15SDLGDDLA}
            onChange={(e)=>setQ15SDLGDDLA(e.target.value)}
            id="Q15SDLGDDLA"
            placeholder='...................................'
          />
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>Orientation vers un accompagnement renforcé :</h4>
</div>

<div >
    <input
      id="Q16SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q16SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ16SDLGDDLA([...Q16SDLGDDLA, "✔"]);
        } else {
          setQ16SDLGDDLA(Q16SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q16SDLGDDLAoui" className="ml-2">  Oui </label>
       <input
      id="Q17SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q17SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ17SDLGDDLA([...Q17SDLGDDLA, "✔"]);
        } else {
          setQ17SDLGDDLA(Q17SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q17SDLGDDLAoui" className="ml-2"> Non </label>

</div>
<div>
<label htmlFor="Q18SDLGDDLAoui" className="ml-2">  Si oui, l’accompagnement renforcé sera:</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q18SDLGDDLA"
            value={Q18SDLGDDLA}
            onChange={(e)=>setQ18SDLGDDLA(e.target.value)}
            id="Q18SDLGDDLA"
            placeholder='...................................'
          />
</div>
<div >
    <input
      id="Q19SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q19SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19SDLGDDLA([...Q19SDLGDDLA, "✔"]);
        } else {
          setQ19SDLGDDLA(Q19SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19SDLGDDLAoui" className="ml-2">  Réalisé en propre </label>
       <input
      id="Q20SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q20SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ20SDLGDDLA([...Q20SDLGDDLA, "✔"]);
        } else {
          setQ20SDLGDDLA(Q20SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q20SDLGDDLAoui" className="ml-2"> Via une structure externe en sous-traitance </label>
</div>
<div>
<label htmlFor="Q21SDLGDDLAoui" className="ml-2">   Nom et adresse de la structure vers qui est redirigé le ménage:</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q21SDLGDDLA"
            value={Q21SDLGDDLA}
            onChange={(e)=>setQ21SDLGDDLA(e.target.value)}
            id="Q21SDLGDDLA"
            placeholder='...................................'
          />
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4> Orientation pour une action d’adaptation :</h4>
</div>
<div >
    <input
      id="Q22SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q22SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ22SDLGDDLA([...Q22SDLGDDLA, "✔"]);
        } else {
          setQ22SDLGDDLA(Q22SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q22SDLGDDLAoui" className="ml-2">  Oui </label>
       <input
      id="Q23SDLGDDLAoui"
      type="checkbox"
      value="✔"
      checked={Q23SDLGDDLA.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23SDLGDDLA([...Q23SDLGDDLA, "✔"]);
        } else {
          setQ23SDLGDDLA(Q23SDLGDDLA.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23SDLGDDLAoui" className="ml-2"> Non </label>

</div>
<div>
<label htmlFor="Q24SDLGDDLAoui" className="ml-2">   Si oui, précisions sur l’action d’orientation:</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q24SDLGDDLA"
            value={Q24SDLGDDLA}
            onChange={(e)=>setQ24SDLGDDLA(e.target.value)}
            id="Q24SDLGDDLA"
            placeholder='...................................'
          />
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>  Observations :</h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-400' >
    <h4>  Signature :</h4>
</div>
<div>
    <p> J’atteste avoir évalué la situation du logement à l’aide de la grille d'analyse fournie par l’Anah, avoir
    orienté le ménage en conséquence et effectué les signalements si la situation le nécessitait.</p>
</div>
<div>
<label htmlFor="Q25SDLGDDLAoui" className="ml-2">Date:</label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q25SDLGDDLA"
            value={Q25SDLGDDLA}
            onChange={(e)=>setQ25SDLGDDLA(e.target.value)}
            id="Q25SDLGDDLA"
            placeholder='__ /__ /____ '
          />
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


export default AddFormSynDeGriAnaDuLogVal