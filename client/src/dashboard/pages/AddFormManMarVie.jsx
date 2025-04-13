
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

const AddFormManMarVie = () => {
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

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [raisoc, setRaisoc] = useState("");
    const [addresse, setAddresse] = useState("");
    const [mail, setMail] = useState("");
     const [ttel, setTtel] = useState("");


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

            // setnom(data?.representants?.nom);
            
        } catch (error) {
            console.log(error)            
        }
    }

    const get_representants = async () => {
      try {
        const { data } = await axios.get(`${base_url}/api/dossiers/get-representants/${dossiers_id}`, {
          headers: {
            "Authorization": `Bearer ${store.token}`
          }
        });
    
        if (data?.representants?.length > 0) {
          setNom(data.representants[0].nom);  // Get the first representative's name
          setPrenom(data.representants[0].prenom);  // Get the first representative's name
          setRaisoc(data.representants[0].raisoc);  // Get the first representative's name
          setAddresse(data.representants[0].addresse);  // Get the first representative's name
          setMail(data.representants[0].mail);  // Get the first representative's name
          setTtel(data.representants[0].ttel);  // Get the first representative's name
        } else {
          setNom("N/A");  // Fallback if no representative is found
        }
      } catch (error) {
        console.log(error);
      }
    };



  useEffect(() => {
    get_dossiers();
    get_representants();
    return () => {
      setDemandeurNom('');
      setDemandeurPreNom('');
      setDemandeurAdresse('');
      setDemandeurCommune('');
      setDemandeurCodePostal('');
      setBatiment('');
      setEtage('');
      setPorte('');
      setEscalier('');
      setTel('');
      setMel('');
      setNumDossier('');
      setDossierStatus('');
      setNom('');
      setPrenom('');
      setRaisoc('');
      setAddresse('');
      setMail('');
      setTtel('');
    };
  }, [dossiers_id]);

        
    
    // const [loader, setLoader] = useState(false)
    // mise ouvre

    const [Q1MMV,setQ1MMV] = useState('')
    const [Q2MMV,setQ2MMV] = useState('')
    const [Q3MMV,setQ3MMV] = useState('')
    const [Q4MMV,setQ4MMV] = useState('')
    const [Q5MMV,setQ5MMV] = useState('')
    const [Q6MMV,setQ6MMV] = useState('')
    const [Q7MMV,setQ7MMV] = useState('')
    const [Q8MMV,setQ8MMV] = useState('')
    const [Q9MMV,setQ9MMV] = useState('')
    const [Q10MMV,setQ10MMV] = useState('')
    
    const [imagesBase64IC, setImagesBase64IC] = useState([]);
    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {nom,prenom,addresse,raisoc,mail,ttel,imagesBase64IC,Q1MMV,Q2MMV,Q3MMV,Q4MMV,Q5MMV,Q6MMV,Q7MMV,Q8MMV,Q9MMV,Q10MMV, demandeurNom, demandeurPreNom, demandeurAdresse, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, email}

        await axios.post(`${base_url}/api/createPdfManMarVie`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfManMarVie`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'Mandat_Mar_Vierge.pdf');
                    
    
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
                        
                        setNom(data?.representants?.nom);
                        setPrenom(data?.representants?.prenom);
                        setRaisoc(data?.representants?.raisoc);
                        setAddresse(data?.representants?.addresse);
                        setMail(data?.representants?.mail);
                        setTtel(data?.representants?.ttel);

                        setQ1MMV('');
                        setQ2MMV('');
                        setQ3MMV('');
                        setQ4MMV('');
                        setQ5MMV('');
                        setQ6MMV('');
                        setQ7MMV('');
                        setQ8MMV('');
                        setQ9MMV('');
                        setQ10MMV('');
                     

                        
                        setImagesBase64IC([]);
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendManMarVie`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire MANDAT POUR LA CONSTITUTION D’UNE DEMANDE D’AIDE EN LIGNE - PROPRIETAIRE OCCUPANT</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}

<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Je, soussigné(e) :</h4>
</div>

  <div>
<input
      id="Q1MMV"
      type="checkbox"
      value="☑"
      checked={Q1MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ1MMV([...Q1MMV, "☑"]);
        } else {
          setQ1MMV(Q1MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q1MMV" className="ml-2"> M. </label>
       <input
      id="Q2MMV"
      type="checkbox"
      value="☑"
      checked={Q2MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ2MMV([...Q2MMV, "☑"]);
        } else {
          setQ2MMV(Q2MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q2MMV" className="ml-2"> Mme </label>
</div>

<div>
<p> Nom : <span className='font-bold'>{demandeurNom} </span>
  Prénom : <span className='font-bold'>{demandeurPreNom}</span></p>
  </div>

  <div>
<input
      id="Q3MMV"
      type="checkbox"
      value="☑"
      checked={Q3MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3MMV([...Q3MMV, "☑"]);
        } else {
          setQ3MMV(Q3MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q3MMV" className="ml-2"> Propriétaire </label>
       <input
      id="Q4MMV"
      type="checkbox"
      value="☑"
      checked={Q4MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4MMV([...Q4MMV, "☑"]);
        } else {
          setQ4MMV(Q4MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q4MMV" className="ml-2"> Autre (préciser) : </label>
</div>

<div>
    <p>du logement à rénover sis au (indiquer l’adresse complète, y compris s’il y en a, les numéros de bâtiments et/ ou d’étages) :</p>
    <span className='font-bold'>{demandeurAdresse}</span>
</div>

<div>
<p> mail : <span className='font-bold'>{demandeurNom} </span>
tél (mobile et/ ou fixe): <span className='font-bold'>+33 {tel}</span></p>
  </div>

</div>

<br></br>
<div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Donne mandat à :</h4>
</div>

  <div>
<input
      id="Q5MMV"
      type="checkbox"
      value="☑"
      checked={Q5MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5MMV([...Q5MMV, "☑"]);
        } else {
          setQ5MMV(Q5MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q5MMV" className="ml-2">M. </label>
       <input
      id="Q6MMV"
      type="checkbox"
      value="☑"
      checked={Q6MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6MMV([...Q6MMV, "☑"]);
        } else {
          setQ6MMV(Q6MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q6MMV" className="ml-2">Mme </label> (si personne morale, nom-prénom du représentant ayant délégation de signature)
</div>
<div>
<p> Nom : <span className='font-bold'>{nom} </span>
  Prénom : <span className='font-bold'>{prenom}</span></p>
  <p>Raison sociale (si personne morale): <span className='font-bold'>{raisoc}</span></p>
  <p>adresse complète : <span className='font-bold'>{addresse}</span></p>
  </div>

<div>
<p> mail : <span className='font-bold'>{mail} </span>
tél (mobile et/ ou fixe): <span className='font-bold'>+33 {ttel}</span></p>
  </div>

</div>
<br></br>
<hr></hr>
<div>
<p className='font-bold'>DEMANDE D’AIDE (à cocher si le mandat porte sur cette demande)</p>
<input
      id="Q7MMV"
      type="checkbox"
      value="☑"
      checked={Q7MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7MMV([...Q7MMV, "☑"]);
        } else {
          setQ7MMV(Q7MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q7MMV" className="ml-2">Je donne mandat pour la constitution de mon dossier de demande d’aide, le dépôt EN LIGNE de ma 
       demande ainsi que la réception et le traitement de toute correspondance avec l’Anah et ses services. </label>
</div>
<br></br>
<hr></hr>
<div>
<p className='font-bold'>DEMANDE DE PAIEMENT (à cocher si le mandat porte sur cette demande)</p>
<input
      id="Q8MMV"
      type="checkbox"
      value="☑"
      checked={Q8MMV.includes("☑")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8MMV([...Q8MMV, "☑"]);
        } else {
          setQ8MMV(Q8MMV.filter((val) => val !== "☑"));
        }
      }}
    />
       <label htmlFor="Q8MMV" className="ml-2">Je donne mandat pour la constitution et le dépôt de toute(s) demande(s) EN LIGNE de paiement (avance, 
acompte, solde) ainsi que, le cas échéant, le traitement des correspondances avec l’Anah et ses services 
la (les) concernant. </label>
</div>

<br></br>
<hr></hr>

<div>
<span>Fait à:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q9MMV"
            value={Q9MMV}
            onChange={(e)=>setQ9MMV(e.target.value)}
            id="Q9MMV"
            placeholder='....................'
          />
          <span>,le</span>
          <input
        className='items-center justify-center text-center'
            type="text"
            name="Q10MMV"
            value={Q10MMV}
            onChange={(e)=>setQ10MMV(e.target.value)}
            id="Q10MMV"
            placeholder='....................'
          />
    </div>

<br></br>
<hr></hr>

<div>
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


export default AddFormManMarVie