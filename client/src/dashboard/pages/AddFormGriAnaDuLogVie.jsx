
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

const AddFormGriAnaDuLogVie = () => {
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

    const [Q2GADLQ,setQ2GADLQ] = useState('')

    const [Q3G1ADLQ,setQ3G1ADLQ] = useState('')
    const [Q3G2ADLQ,setQ3G2ADLQ] = useState('')
    const [Q3G3ADLQ,setQ3G3ADLQ] = useState('')
    const [Q3G4ADLQ,setQ3G4ADLQ] = useState('')
    const [Q3G5ADLQ,setQ3G5ADLQ] = useState('')
    const [Q3G22ADLQ,setQ3G22ADLQ] = useState('')
    const [Q3G33ADLQ,setQ3G33ADLQ] = useState('')
    const [Q3G44ADLQ,setQ3G44ADLQ] = useState('')
    const [Q3G55ADLQ,setQ3G55ADLQ] = useState('')

    const [Q4G1ADLQ,setQ4G1ADLQ] = useState('')
    const [Q4G2ADLQ,setQ4G2ADLQ] = useState('')
    const [Q4G3ADLQ,setQ4G3ADLQ] = useState('')
    const [Q4G4ADLQ,setQ4G4ADLQ] = useState('')
    const [Q4G5ADLQ,setQ4G5ADLQ] = useState('')
    const [Q4G6ADLQ,setQ4G6ADLQ] = useState('')
    const [Q4G7ADLQ,setQ4G7ADLQ] = useState('')

    const [Q5G1ADLQ,setQ5G1ADLQ] = useState('')
    const [Q5G2ADLQ,setQ5G2ADLQ] = useState('')
    const [Q5G3ADLQ,setQ5G3ADLQ] = useState('')
    const [Q5G4ADLQ,setQ5G4ADLQ] = useState('')
    const [Q5G5ADLQ,setQ5G5ADLQ] = useState('')
    const [Q5G6ADLQ,setQ5G6ADLQ] = useState('')
    const [Q5G7ADLQ,setQ5G7ADLQ] = useState('')
    const [Q5G8ADLQ,setQ5G8ADLQ] = useState('')

    const [Q6G1ADLQ,setQ6G1ADLQ] = useState('')
    const [Q6G2ADLQ,setQ6G2ADLQ] = useState('')
    const [Q6G3ADLQ,setQ6G3ADLQ] = useState('')
    const [Q6G4ADLQ,setQ6G4ADLQ] = useState('')
    const [Q6G5ADLQ,setQ6G5ADLQ] = useState('')
    const [Q6G6ADLQ,setQ6G6ADLQ] = useState('')
    const [Q6G7ADLQ,setQ6G7ADLQ] = useState('')

    const [Q7G1ADLQ,setQ7G1ADLQ] = useState('')
    const [Q7G2ADLQ,setQ7G2ADLQ] = useState('')
    const [Q7G3ADLQ,setQ7G3ADLQ] = useState('')
    const [Q7G4ADLQ,setQ7G4ADLQ] = useState('')
    const [Q7G5ADLQ,setQ7G5ADLQ] = useState('')

    const [Q8G1ADLQ,setQ8G1ADLQ] = useState('')
    const [Q8G2ADLQ,setQ8G2ADLQ] = useState('')
    const [Q8G3ADLQ,setQ8G3ADLQ] = useState('')
    const [Q8G4ADLQ,setQ8G4ADLQ] = useState('')
    const [Q8G5ADLQ,setQ8G5ADLQ] = useState('')

    const [Q9G1ADLQ,setQ9G1ADLQ] = useState('')
    const [Q9G2ADLQ,setQ9G2ADLQ] = useState('')
    const [Q9G3ADLQ,setQ9G3ADLQ] = useState('')
    const [Q9G4ADLQ,setQ9G4ADLQ] = useState('')
    const [Q9G5ADLQ,setQ9G5ADLQ] = useState('')

    const [Q10G1ADLQ,setQ10G1ADLQ] = useState('')
    const [Q10G2ADLQ,setQ10G2ADLQ] = useState('')
    const [Q10G3ADLQ,setQ10G3ADLQ] = useState('')

    const [Q11G1ADLQ,setQ11G1ADLQ] = useState('')
    const [Q11G2ADLQ,setQ11G2ADLQ] = useState('')
    const [Q11G3ADLQ,setQ11G3ADLQ] = useState('')
    const [Q11G4ADLQ,setQ11G4ADLQ] = useState('')
    const [Q11G5ADLQ,setQ11G5ADLQ] = useState('')

    const [Q12G1ADLQ,setQ12G1ADLQ] = useState('')
    const [Q12G2ADLQ,setQ12G2ADLQ] = useState('')
    const [Q12G3ADLQ,setQ12G3ADLQ] = useState('')
    const [Q12G4ADLQ,setQ12G4ADLQ] = useState('')
    const [Q12G5ADLQ,setQ12G5ADLQ] = useState('')
    const [Q12G6ADLQ,setQ12G6ADLQ] = useState('')

    const [Q13G1ADLQ,setQ13G1ADLQ] = useState('')
    const [Q13G2ADLQ,setQ13G2ADLQ] = useState('')
    const [Q13G3ADLQ,setQ13G3ADLQ] = useState('')
    const [Q13G4ADLQ,setQ13G4ADLQ] = useState('')
    const [Q13G5ADLQ,setQ13G5ADLQ] = useState('')
    const [Q13G6ADLQ,setQ13G6ADLQ] = useState('')

    const [Q14G0ADLQ,setQ14G0ADLQ] = useState('')
    const [Q14G1ADLQ,setQ14G1ADLQ] = useState('')
    const [Q14G2ADLQ,setQ14G2ADLQ] = useState('')
    const [Q14G3ADLQ,setQ14G3ADLQ] = useState('')
    const [Q14G4ADLQ,setQ14G4ADLQ] = useState('')
    const [Q14G5ADLQ,setQ14G5ADLQ] = useState('')

    const [Q15G1ADLQ,setQ15G1ADLQ] = useState('')
    const [Q15G2ADLQ,setQ15G2ADLQ] = useState('')
    const [Q15G3ADLQ,setQ15G3ADLQ] = useState('')
    const [Q15G4ADLQ,setQ15G4ADLQ] = useState('')

    const [Q16G1ADLQ,setQ16G1ADLQ] = useState('')
    const [Q16G2ADLQ,setQ16G2ADLQ] = useState('')
    const [Q16G3ADLQ,setQ16G3ADLQ] = useState('')
    const [Q16G4ADLQ,setQ16G4ADLQ] = useState('')

    const [Q17G1ADLQ,setQ17G1ADLQ] = useState('')
    const [Q17G2ADLQ,setQ17G2ADLQ] = useState('')
    const [Q17G3ADLQ,setQ17G3ADLQ] = useState('')
    const [Q17G4ADLQ,setQ17G4ADLQ] = useState('')

    const [Q18G1ADLQ,setQ18G1ADLQ] = useState('')
    const [Q18G2ADLQ,setQ18G2ADLQ] = useState('')
    const [Q18G3ADLQ,setQ18G3ADLQ] = useState('')
    const [Q18G4ADLQ,setQ18G4ADLQ] = useState('')

    const [Q19G1ADLQ,setQ19G1ADLQ] = useState('')
    const [Q19G2ADLQ,setQ19G2ADLQ] = useState('')
    const [Q19G3ADLQ,setQ19G3ADLQ] = useState('')
    const [Q19G4ADLQ,setQ19G4ADLQ] = useState('')
    const [Q19G5ADLQ,setQ19G5ADLQ] = useState('')
    const [Q19G6ADLQ,setQ19G6ADLQ] = useState('')
    const [Q19G7ADLQ,setQ19G7ADLQ] = useState('')
    const [Q19G8ADLQ,setQ19G8ADLQ] = useState('')
    const [Q19G9ADLQ,setQ19G9ADLQ] = useState('')

    const [Q20G1ADLQ,setQ20G1ADLQ] = useState('')
    const [Q20G2ADLQ,setQ20G2ADLQ] = useState('')
    const [Q20G3ADLQ,setQ20G3ADLQ] = useState('')

    const [Q21G1ADLQ,setQ21G1ADLQ] = useState('')
    const [Q21G2ADLQ,setQ21G2ADLQ] = useState('')
    const [Q21G3ADLQ,setQ21G3ADLQ] = useState('')
    const [Q21G4ADLQ,setQ21G4ADLQ] = useState('')
    const [Q21G5ADLQ,setQ21G5ADLQ] = useState('')
    const [Q21G6ADLQ,setQ21G6ADLQ] = useState('')
    const [Q21G7ADLQ,setQ21G7ADLQ] = useState('')

    const [Q22G1ADLQ,setQ22G1ADLQ] = useState('')
    const [Q22G2ADLQ,setQ22G2ADLQ] = useState('')
    const [Q22G3ADLQ,setQ22G3ADLQ] = useState('')
    const [Q22G4ADLQ,setQ22G4ADLQ] = useState('')

    const [Q23G1ADLQ,setQ23G1ADLQ] = useState('')
    const [Q23G2ADLQ,setQ23G2ADLQ] = useState('')
    const [Q23G3ADLQ,setQ23G3ADLQ] = useState('')
    const [Q23G4ADLQ,setQ23G4ADLQ] = useState('')
    const [Q23G5ADLQ,setQ23G5ADLQ] = useState('')
    const [Q23G6ADLQ,setQ23G6ADLQ] = useState('')
    const [Q23G7ADLQ,setQ23G7ADLQ] = useState('')
    const [Q23G8ADLQ,setQ23G8ADLQ] = useState('')
    const [Q23G9ADLQ,setQ23G9ADLQ] = useState('')
    const [Q23G10ADLQ,setQ23G10ADLQ] = useState('')
    const [Q23G11ADLQ,setQ23G11ADLQ] = useState('')
    const [Q23G12ADLQ,setQ23G12ADLQ] = useState('')

    const [Q24G1ADLQ,setQ24G1ADLQ] = useState('')
    const [Q24G2ADLQ,setQ24G2ADLQ] = useState('')
    const [Q24G3ADLQ,setQ24G3ADLQ] = useState('')
    const [Q24G4ADLQ,setQ24G4ADLQ] = useState('')
    const [Q24G5ADLQ,setQ24G5ADLQ] = useState('')
    const [Q24G6ADLQ,setQ24G6ADLQ] = useState('')

    const [Q25G1ADLQ,setQ25G1ADLQ] = useState('')
    const [Q25G2ADLQ,setQ25G2ADLQ] = useState('')
    const [Q25G3ADLQ,setQ25G3ADLQ] = useState('')
    const [Q25G4ADLQ,setQ25G4ADLQ] = useState('')

    const [Q26G1ADLQ,setQ26G1ADLQ] = useState('')
    const [Q26G2ADLQ,setQ26G2ADLQ] = useState('')
    const [Q26G3ADLQ,setQ26G3ADLQ] = useState('')
    const [Q26G4ADLQ,setQ26G4ADLQ] = useState('')
    const [Q26G5ADLQ,setQ26G5ADLQ] = useState('')
    const [Q26G6ADLQ,setQ26G6ADLQ] = useState('')
    const [Q26G7ADLQ,setQ26G7ADLQ] = useState('')

    const [Q27G1ADLQ,setQ27G1ADLQ] = useState('')
    const [Q27G2ADLQ,setQ27G2ADLQ] = useState('')
    const [Q27G3ADLQ,setQ27G3ADLQ] = useState('')

    const [Q28G1ADLQ,setQ28G1ADLQ] = useState('')
    const [Q28G2ADLQ,setQ28G2ADLQ] = useState('')
    const [Q28G3ADLQ,setQ28G3ADLQ] = useState('')
    const [Q28G4ADLQ,setQ28G4ADLQ] = useState('')
    const [Q28G5ADLQ,setQ28G5ADLQ] = useState('')

    const [Q29G1ADLQ,setQ29G1ADLQ] = useState('')
    const [Q29G2ADLQ,setQ29G2ADLQ] = useState('')
    const [Q29G3ADLQ,setQ29G3ADLQ] = useState('')
    const [Q29G4ADLQ,setQ29G4ADLQ] = useState('')
    const [Q29G5ADLQ,setQ29G5ADLQ] = useState('')
    const [Q29G6ADLQ,setQ29G6ADLQ] = useState('')

    const [Q30G1ADLQ,setQ30G1ADLQ] = useState('')
    const [Q30G2ADLQ,setQ30G2ADLQ] = useState('')
    const [Q30G3ADLQ,setQ30G3ADLQ] = useState('')
    const [Q30G4ADLQ,setQ30G4ADLQ] = useState('')
    const [Q30G5ADLQ,setQ30G5ADLQ] = useState('')
    const [Q30G6ADLQ,setQ30G6ADLQ] = useState('')
    const [Q30G7ADLQ,setQ30G7ADLQ] = useState('')
    const [Q30G8ADLQ,setQ30G8ADLQ] = useState('')
    const [Q30G9ADLQ,setQ30G9ADLQ] = useState('')

    const [Q31G1ADLQ,setQ31G1ADLQ] = useState('')
    const [Q31G2ADLQ,setQ31G2ADLQ] = useState('')
    const [Q31G3ADLQ,setQ31G3ADLQ] = useState('')
    const [Q31G4ADLQ,setQ31G4ADLQ] = useState('')
    const [Q31G5ADLQ,setQ31G5ADLQ] = useState('')

    const [Q32G1ADLQ,setQ32G1ADLQ] = useState('')
    const [Q32G2ADLQ,setQ32G2ADLQ] = useState('')
    const [Q32G3ADLQ,setQ32G3ADLQ] = useState('')

    const [Q33G1ADLQ,setQ33G1ADLQ] = useState('')
    const [Q33G2ADLQ,setQ33G2ADLQ] = useState('')
    const [Q33G3ADLQ,setQ33G3ADLQ] = useState('')

    const [Q34G1ADLQ,setQ34G1ADLQ] = useState('')
    const [Q34G2ADLQ,setQ34G2ADLQ] = useState('')
    const [Q34G3ADLQ,setQ34G3ADLQ] = useState('')

    const [Q35G1ADLQ,setQ35G1ADLQ] = useState('')
    const [Q35G2ADLQ,setQ35G2ADLQ] = useState('')
    const [Q35G3ADLQ,setQ35G3ADLQ] = useState('')

    const [Q36G1ADLQ,setQ36G1ADLQ] = useState('')
    const [Q36G2ADLQ,setQ36G2ADLQ] = useState('')
    const [Q36G3ADLQ,setQ36G3ADLQ] = useState('')
    const [Q36G4ADLQ,setQ36G4ADLQ] = useState('')
    const [Q36G5ADLQ,setQ36G5ADLQ] = useState('')
    const [Q36G6ADLQ,setQ36G6ADLQ] = useState('')
    const [Q36G7ADLQ,setQ36G7ADLQ] = useState('')
    const [Q36G8ADLQ,setQ36G8ADLQ] = useState('')
    const [Q36G9ADLQ,setQ36G9ADLQ] = useState('')
    const [Q36G10ADLQ,setQ36G10ADLQ] = useState('')
    const [Q36G11ADLQ,setQ36G11ADLQ] = useState('')
    const [Q36G12ADLQ,setQ36G12ADLQ] = useState('')
    const [Q36G13ADLQ,setQ36G13ADLQ] = useState('')
    const [Q36G14ADLQ,setQ36G14ADLQ] = useState('')
    const [Q36G15ADLQ,setQ36G15ADLQ] = useState('')
    const [Q36G16ADLQ,setQ36G16ADLQ] = useState('')
    const [Q36G17ADLQ,setQ36G17ADLQ] = useState('')
    const [Q36G18ADLQ,setQ36G18ADLQ] = useState('')

    const [Q37G1ADLQ,setQ37G1ADLQ] = useState('')
    const [Q37G2ADLQ,setQ37G2ADLQ] = useState('')
    const [Q37G3ADLQ,setQ37G3ADLQ] = useState('')
    const [Q37G4ADLQ,setQ37G4ADLQ] = useState('')
    const [Q37G5ADLQ,setQ37G5ADLQ] = useState('')
    const [Q37G6ADLQ,setQ37G6ADLQ] = useState('')

    const [Q38G1ADLQ,setQ38G1ADLQ] = useState('')
    const [Q38G2ADLQ,setQ38G2ADLQ] = useState('')
    const [Q38G3ADLQ,setQ38G3ADLQ] = useState('')
    const [Q38G4ADLQ,setQ38G4ADLQ] = useState('')

    const [Q39G1ADLQ,setQ39G1ADLQ] = useState('')
    const [Q39G2ADLQ,setQ39G2ADLQ] = useState('')
    const [Q39G3ADLQ,setQ39G3ADLQ] = useState('')
    const [Q39G4ADLQ,setQ39G4ADLQ] = useState('')
    const [Q39G5ADLQ,setQ39G5ADLQ] = useState('')
    const [Q39G6ADLQ,setQ39G6ADLQ] = useState('')
    const [Q39G7ADLQ,setQ39G7ADLQ] = useState('')
    const [Q39G8ADLQ,setQ39G8ADLQ] = useState('')
    const [Q39G9ADLQ,setQ39G9ADLQ] = useState('')
    const [Q39G10ADLQ,setQ39G10ADLQ] = useState('')
    const [Q39G11ADLQ,setQ39G11ADLQ] = useState('')
    const [Q39G12ADLQ,setQ39G12ADLQ] = useState('')

    const [Q40G1ADLQ,setQ40G1ADLQ] = useState('')
    const [Q40G2ADLQ,setQ40G2ADLQ] = useState('')
    const [Q40G3ADLQ,setQ40G3ADLQ] = useState('')
    const [Q40G4ADLQ,setQ40G4ADLQ] = useState('')


    const [email,setEmail] = useState('')


    
    const submit = async (e) => {
        e.preventDefault();
        const data = {Q29G6ADLQ,Q14G0ADLQ,Q11G4ADLQ,Q11G5ADLQ,Q40G4ADLQ,Q40G3ADLQ,Q40G2ADLQ,Q40G1ADLQ,Q39G12ADLQ,Q39G11ADLQ,Q39G10ADLQ,Q39G9ADLQ,Q39G8ADLQ,Q39G7ADLQ,Q39G6ADLQ,Q39G5ADLQ,Q39G4ADLQ,Q39G3ADLQ,Q39G2ADLQ,Q39G1ADLQ,Q38G4ADLQ,Q38G3ADLQ,Q38G2ADLQ,Q38G1ADLQ,Q37G6ADLQ,Q37G5ADLQ,Q37G4ADLQ,Q37G3ADLQ,Q37G2ADLQ,Q37G1ADLQ,Q36G18ADLQ,Q36G17ADLQ,Q36G16ADLQ,Q36G15ADLQ,Q36G14ADLQ,Q36G13ADLQ,Q36G12ADLQ,Q36G11ADLQ,Q36G10ADLQ,Q36G9ADLQ,Q36G8ADLQ,Q36G7ADLQ,Q36G6ADLQ,Q36G5ADLQ,Q36G4ADLQ,Q36G3ADLQ,Q36G2ADLQ,Q36G1ADLQ,Q35G3ADLQ,Q35G2ADLQ,Q35G1ADLQ,Q34G3ADLQ,Q34G2ADLQ,Q34G1ADLQ,Q33G3ADLQ,Q33G2ADLQ,Q33G1ADLQ,Q32G3ADLQ,Q32G2ADLQ,Q32G1ADLQ,Q31G5ADLQ,Q31G4ADLQ,Q31G3ADLQ,Q31G2ADLQ,Q31G1ADLQ,Q30G9ADLQ,Q30G8ADLQ,Q30G7ADLQ,Q30G6ADLQ,Q30G5ADLQ,Q30G4ADLQ,Q30G3ADLQ,Q30G2ADLQ,Q30G1ADLQ,Q29G5ADLQ,Q29G4ADLQ,Q29G3ADLQ,Q29G2ADLQ,Q29G1ADLQ,Q28G5ADLQ,Q28G4ADLQ,Q28G3ADLQ,Q28G2ADLQ,Q28G1ADLQ,Q27G3ADLQ,Q27G2ADLQ,Q27G1ADLQ,Q26G7ADLQ,Q26G6ADLQ,Q26G5ADLQ,Q26G4ADLQ,Q26G3ADLQ,Q26G2ADLQ,Q26G1ADLQ,Q25G4ADLQ,Q25G3ADLQ,Q25G2ADLQ,Q25G1ADLQ,Q24G6ADLQ,Q24G5ADLQ,Q24G4ADLQ,Q24G3ADLQ,Q24G2ADLQ,Q24G1ADLQ,Q23G12ADLQ,Q23G11ADLQ,Q23G10ADLQ,Q23G9ADLQ,Q23G8ADLQ,Q23G7ADLQ,Q23G6ADLQ,Q23G5ADLQ,Q23G4ADLQ,Q23G3ADLQ,Q23G2ADLQ,Q23G1ADLQ,Q22G4ADLQ,Q22G3ADLQ,Q22G2ADLQ,Q22G1ADLQ,Q21G7ADLQ,Q21G6ADLQ,Q21G5ADLQ,Q21G4ADLQ,Q21G3ADLQ,Q21G2ADLQ,Q21G1ADLQ,Q20G3ADLQ,Q20G2ADLQ,Q20G1ADLQ,Q19G9ADLQ,Q19G8ADLQ,Q19G7ADLQ,Q19G6ADLQ,Q19G5ADLQ,Q19G4ADLQ,Q19G3ADLQ,Q19G2ADLQ,Q19G1ADLQ,Q18G4ADLQ,Q18G3ADLQ,Q18G2ADLQ,Q18G1ADLQ,Q17G4ADLQ,Q17G3ADLQ,Q17G2ADLQ,Q17G1ADLQ,Q16G4ADLQ,Q16G3ADLQ,Q16G2ADLQ,Q16G1ADLQ,Q15G4ADLQ,Q15G3ADLQ,Q15G2ADLQ,Q15G1ADLQ,Q14G5ADLQ,Q14G4ADLQ,Q14G3ADLQ,Q14G2ADLQ,Q14G1ADLQ,Q13G6ADLQ,Q13G5ADLQ,Q13G4ADLQ,Q13G3ADLQ,Q13G2ADLQ,Q13G1ADLQ,Q12G6ADLQ,Q12G5ADLQ,Q12G4ADLQ,Q12G3ADLQ,Q12G2ADLQ,Q12G1ADLQ,Q11G3ADLQ,Q11G2ADLQ,Q11G1ADLQ,Q10G3ADLQ,Q10G2ADLQ,Q10G1ADLQ,Q9G5ADLQ,Q9G4ADLQ,Q9G3ADLQ,Q9G2ADLQ,Q9G1ADLQ,Q8G5ADLQ,Q8G4ADLQ,Q8G3ADLQ,Q8G2ADLQ,Q8G1ADLQ,Q7G5ADLQ,Q7G4ADLQ,Q7G3ADLQ,Q7G2ADLQ,Q7G1ADLQ,Q6G7ADLQ,Q6G6ADLQ,Q6G5ADLQ,Q6G4ADLQ,Q6G3ADLQ,Q6G2ADLQ,Q6G1ADLQ,Q5G8ADLQ,Q5G7ADLQ,Q5G6ADLQ,Q5G5ADLQ,Q5G4ADLQ,Q5G3ADLQ,Q5G2ADLQ,Q5G1ADLQ,Q4G7ADLQ,Q4G6ADLQ,Q4G5ADLQ,Q4G4ADLQ,Q4G3ADLQ,Q4G2ADLQ,Q4G1ADLQ,Q3G5ADLQ,Q3G4ADLQ,Q3G3ADLQ,Q3G2ADLQ,Q3G1ADLQ ,Q3G22ADLQ,Q3G33ADLQ,Q3G44ADLQ,Q3G55ADLQ, Q2GADLQ,    Q1SDLGDDLA,Q2SDLGDDLA,Q3SDLGDDLA,Q4SDLGDDLA,Q5SDLGDDLA,Q6SDLGDDLA,Q7SDLGDDLA,Q8SDLGDDLA,Q9SDLGDDLA,Q10SDLGDDLA,Q11SDLGDDLA,Q12SDLGDDLA,Q13SDLGDDLA,Q14SDLGDDLA,Q15SDLGDDLA,Q16SDLGDDLA,Q17SDLGDDLA,Q18SDLGDDLA,Q19SDLGDDLA,Q20SDLGDDLA,Q21SDLGDDLA,Q22SDLGDDLA,Q23SDLGDDLA,Q24SDLGDDLA,Q25SDLGDDLA, demandeurNom, demandeurPreNom, demandeurAdresse, numero, ville, voie, demandeurCommune, demandeurCodePostal, batiment, etage, porte, escalier, tel, mel, numDossier, dossierStatus, email}

        await axios.post(`${base_url}/api/createPdfGriAnaDuLogVie`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfGriAnaDuLogVie`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, 'GRILLE_ANALYSE_DU_LOGEMENT.pdf');
                    
    
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

                      // new var

                        setQ2GADLQ('');

                        setQ3G1ADLQ('');
                        setQ3G2ADLQ('');
                        setQ3G3ADLQ('');
                        setQ3G4ADLQ('');
                        setQ3G5ADLQ('');
                        setQ3G22ADLQ('');
                        setQ3G33ADLQ('');
                        setQ3G44ADLQ('');
                        setQ3G55ADLQ('');

                        setQ4G1ADLQ('');
                        setQ4G2ADLQ('');
                        setQ4G3ADLQ('');
                        setQ4G4ADLQ('');
                        setQ4G5ADLQ('');
                        setQ4G6ADLQ('');
                        setQ4G7ADLQ('');

                        setQ5G1ADLQ('');
                        setQ5G2ADLQ('');
                        setQ5G3ADLQ('');
                        setQ5G4ADLQ('');
                        setQ5G5ADLQ('');
                        setQ5G6ADLQ('');
                        setQ5G7ADLQ('');
                        setQ5G8ADLQ('');

                        setQ6G1ADLQ('');
                        setQ6G2ADLQ('');
                        setQ6G3ADLQ('');
                        setQ6G4ADLQ('');
                        setQ6G5ADLQ('');
                        setQ6G6ADLQ('');
                        setQ6G7ADLQ('');

                        setQ7G1ADLQ('');
                        setQ7G2ADLQ('');
                        setQ7G3ADLQ('');
                        setQ7G4ADLQ('');
                        setQ7G5ADLQ('');

                        setQ8G1ADLQ('');
                        setQ8G2ADLQ('');
                        setQ8G3ADLQ('');
                        setQ8G4ADLQ('');
                        setQ8G5ADLQ('');

                        setQ9G1ADLQ('');
                        setQ9G2ADLQ('');
                        setQ9G3ADLQ('');
                        setQ9G4ADLQ('');
                        setQ9G5ADLQ('');

                        setQ10G1ADLQ('');
                        setQ10G2ADLQ('');
                        setQ10G3ADLQ('');

                        setQ11G1ADLQ('');
                        setQ11G2ADLQ('');
                        setQ11G3ADLQ('');
                        setQ11G4ADLQ('');
                        setQ11G5ADLQ('');

                        setQ12G1ADLQ('');
                        setQ12G2ADLQ('');
                        setQ12G3ADLQ('');
                        setQ12G4ADLQ('');
                        setQ12G5ADLQ('');
                        setQ12G6ADLQ('');

                        setQ13G1ADLQ('');
                        setQ13G2ADLQ('');
                        setQ13G3ADLQ('');
                        setQ13G4ADLQ('');
                        setQ13G5ADLQ('');
                        setQ13G6ADLQ('');

                        setQ14G0ADLQ('');
                        setQ14G1ADLQ('');
                        setQ14G2ADLQ('');
                        setQ14G3ADLQ('');
                        setQ14G4ADLQ('');
                        setQ14G5ADLQ('');

                        setQ15G1ADLQ('');
                        setQ15G2ADLQ('');
                        setQ15G3ADLQ('');
                        setQ15G4ADLQ('');

                        setQ16G1ADLQ('');
                        setQ16G2ADLQ('');
                        setQ16G3ADLQ('');
                        setQ16G4ADLQ('');

                        setQ17G1ADLQ('');
                        setQ17G2ADLQ('');
                        setQ17G3ADLQ('');
                        setQ17G4ADLQ('');

                        setQ18G1ADLQ('');
                        setQ18G2ADLQ('');
                        setQ18G3ADLQ('');
                        setQ18G4ADLQ('');

                        setQ19G1ADLQ('');
                        setQ19G2ADLQ('');
                        setQ19G3ADLQ('');
                        setQ19G4ADLQ('');
                        setQ19G5ADLQ('');
                        setQ19G6ADLQ('');
                        setQ19G7ADLQ('');
                        setQ19G8ADLQ('');
                        setQ19G9ADLQ('');

                        setQ20G1ADLQ('');
                        setQ20G2ADLQ('');
                        setQ20G3ADLQ('');

                        setQ21G1ADLQ('');
                        setQ21G2ADLQ('');
                        setQ21G3ADLQ('');
                        setQ21G4ADLQ('');
                        setQ21G5ADLQ('');
                        setQ21G6ADLQ('');
                        setQ21G7ADLQ('');

                        setQ22G1ADLQ('');
                        setQ22G2ADLQ('');
                        setQ22G3ADLQ('');
                        setQ22G4ADLQ('');

                        setQ23G1ADLQ('');
                        setQ23G2ADLQ('');
                        setQ23G3ADLQ('');
                        setQ23G4ADLQ('');
                        setQ23G5ADLQ('');
                        setQ23G6ADLQ('');
                        setQ23G7ADLQ('');
                        setQ23G8ADLQ('');
                        setQ23G9ADLQ('');
                        setQ23G10ADLQ('');
                        setQ23G11ADLQ('');
                        setQ23G12ADLQ('');

                        setQ24G1ADLQ('');
                        setQ24G2ADLQ('');
                        setQ24G3ADLQ('');
                        setQ24G4ADLQ('');
                        setQ24G5ADLQ('');
                        setQ24G6ADLQ('');

                        setQ25G1ADLQ('');
                        setQ25G2ADLQ('');
                        setQ25G3ADLQ('');
                        setQ25G4ADLQ('');

                        setQ26G1ADLQ('');
                        setQ26G2ADLQ('');
                        setQ26G3ADLQ('');
                        setQ26G4ADLQ('');
                        setQ26G5ADLQ('');
                        setQ26G6ADLQ('');
                        setQ26G7ADLQ('');

                        setQ27G1ADLQ('');
                        setQ27G2ADLQ('');
                        setQ27G3ADLQ('');

                        setQ28G1ADLQ('');
                        setQ28G2ADLQ('');
                        setQ28G3ADLQ('');
                        setQ28G4ADLQ('');
                        setQ28G5ADLQ('');

                        setQ29G1ADLQ('');
                        setQ29G2ADLQ('');
                        setQ29G3ADLQ('');
                        setQ29G4ADLQ('');
                        setQ29G5ADLQ('');
                        setQ29G6ADLQ('');

                        setQ30G1ADLQ('');
                        setQ30G2ADLQ('');
                        setQ30G3ADLQ('');
                        setQ30G4ADLQ('');
                        setQ30G5ADLQ('');
                        setQ30G6ADLQ('');
                        setQ30G7ADLQ('');
                        setQ30G8ADLQ('');
                        setQ30G9ADLQ('');

                        setQ31G1ADLQ('');
                        setQ31G2ADLQ('');
                        setQ31G3ADLQ('');
                        setQ31G4ADLQ('');
                        setQ31G5ADLQ('');

                        setQ32G1ADLQ('');
                        setQ32G2ADLQ('');
                        setQ32G3ADLQ('');

                        setQ33G1ADLQ('');
                        setQ33G2ADLQ('');
                        setQ33G3ADLQ('');

                        setQ34G1ADLQ('');
                        setQ34G2ADLQ('');
                        setQ34G3ADLQ('');

                        setQ35G1ADLQ('');
                        setQ35G2ADLQ('');
                        setQ35G3ADLQ('');

                        setQ36G1ADLQ('');
                        setQ36G2ADLQ('');
                        setQ36G3ADLQ('');
                        setQ36G4ADLQ('');
                        setQ36G5ADLQ('');
                        setQ36G6ADLQ('');
                        setQ36G7ADLQ('');
                        setQ36G8ADLQ('');
                        setQ36G9ADLQ('');
                        setQ36G10ADLQ('');
                        setQ36G11ADLQ('');
                        setQ36G12ADLQ('');
                        setQ36G13ADLQ('');
                        setQ36G14ADLQ('');
                        setQ36G15ADLQ('');
                        setQ36G16ADLQ('');
                        setQ36G17ADLQ('');
                        setQ36G18ADLQ('');

                        setQ37G1ADLQ('');
                        setQ37G2ADLQ('');
                        setQ37G3ADLQ('');
                        setQ37G4ADLQ('');
                        setQ37G5ADLQ('');
                        setQ37G6ADLQ('');

                        setQ38G1ADLQ('');
                        setQ38G2ADLQ('');
                        setQ38G3ADLQ('');
                        setQ38G4ADLQ('');

                        setQ39G1ADLQ('');
                        setQ39G2ADLQ('');
                        setQ39G3ADLQ('');
                        setQ39G4ADLQ('');
                        setQ39G5ADLQ('');
                        setQ39G6ADLQ('');
                        setQ39G7ADLQ('');
                        setQ39G8ADLQ('');
                        setQ39G9ADLQ('');
                        setQ39G10ADLQ('');
                        setQ39G11ADLQ('');
                        setQ39G12ADLQ('');

                        setQ40G1ADLQ('');
                        setQ40G2ADLQ('');
                        setQ40G3ADLQ('');
                        setQ40G4ADLQ('');

                        
                     
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendGriAnaDuLogVie`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire GRILLE D'ANALYSE DU LOGEMENT QUESTIONNAIRE</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers'>Dossiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
   


{/* Mise/Oeuv */}

<div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>QUESTIONS SOCIALE</h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q1 : Informations administratives pour la création de dossier :</h4>
</div>
<h6> Nom du ménage: <span className='font-bold'>{demandeurNom} {demandeurPreNom}</span></h6>
<h6>   Adresse: <span className='font-bold'>{demandeurAdresse}</span></h6>
  
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

<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q2 : Revenu fiscal du ménage:</h4>
</div>
<div>
<label htmlFor="Q2GADLQ" className="ml-2"></label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q2GADLQ"
            value={Q2GADLQ}
            onChange={(e)=>setQ2GADLQ(e.target.value)}
            id="Q2GADLQ"
            placeholder=' ............... €'
          />
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q3 : Occupation du logement: </h4>
</div>

<div>
    <p><span className='font-bold'>Nombre d'occupants du logement :</span> <label htmlFor="Q18SDLGDDLAoui" className="ml-2"></label><input
        className='items-center justify-center text-center'
            type="text"
            name="Q3G1ADLQ"
            value={Q3G1ADLQ}
            onChange={(e)=>setQ3G1ADLQ(e.target.value)}
            id="Q3G1ADLQ"
            placeholder=' ...............'
          /> personnes</p>
    <span>enfants de moins de 6 ans </span>
<input
      id="Q3G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G2ADLQ([...Q3G2ADLQ, "✔"]);
        } else {
          setQ3G2ADLQ(Q3G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G2ADLQ" className="ml-2"> Oui </label>
       <input
      id="Q3G22ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G22ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G22ADLQ([...Q3G22ADLQ, "✔"]);
        } else {
          setQ3G22ADLQ(Q3G22ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G22ADLQ" className="ml-2"> Non </label>
</div>
<div>
<span>dont personnes handicapées (tout âge) </span>
<input
      id="Q3G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G3ADLQ([...Q3G3ADLQ, "✔"]);
        } else {
          setQ3G3ADLQ(Q3G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G3ADLQ" className="ml-2"> Oui </label>
       <input
      id="Q3G33ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G33ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G33ADLQ([...Q3G33ADLQ, "✔"]);
        } else {
          setQ3G33ADLQ(Q3G33ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G33ADLQ" className="ml-2"> Non </label>
</div>
<div>
<span>dont personnes de plus de 70 ans </span>
<input
      id="Q3G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G4ADLQ([...Q3G4ADLQ, "✔"]);
        } else {
          setQ3G4ADLQ(Q3G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G4ADLQ" className="ml-2"> Oui </label>
       <input
      id="Q3G44ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G44ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G44ADLQ([...Q3G44ADLQ, "✔"]);
        } else {
          setQ3G44ADLQ(Q3G44ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G44ADLQ" className="ml-2"> Non </label>
</div>
<div>
<span>dont personnes de 60 à 69 ans avec un GIR (perte d'autonomie)  </span>
<input
      id="Q3G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G5ADLQ([...Q3G5ADLQ, "✔"]);
        } else {
          setQ3G5ADLQ(Q3G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G5ADLQ" className="ml-2"> Oui </label>
       <input
      id="Q3G55ADLQ"
      type="checkbox"
      value="✔"
      checked={Q3G55ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ3G55ADLQ([...Q3G55ADLQ, "✔"]);
        } else {
          setQ3G55ADLQ(Q3G55ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q3G55ADLQ" className="ml-2"> Non </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q4 : Statut d’occupation du ménage: </h4>
</div>

<div >
    <input
      id="Q4G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G1ADLQ([...Q4G1ADLQ, "✔"]);
        } else {
          setQ4G1ADLQ(Q4G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G1ADLQ" className="ml-2"> Propriétaire: résidence principale </label>
</div>
<div >
    <input
      id="Q4G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G2ADLQ([...Q4G2ADLQ, "✔"]);
        } else {
          setQ4G2ADLQ(Q4G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G2ADLQ" className="ml-2"> Propriétaire: logement destiné à la location </label>
</div>
<div >
    <input
      id="Q4G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G3ADLQ([...Q4G3ADLQ, "✔"]);
        } else {
          setQ4G3ADLQ(Q4G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G3ADLQ" className="ml-2"> Propriétaire usufruitier </label>
</div>
<div >
    <input
      id="Q4G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G4ADLQ([...Q4G4ADLQ, "✔"]);
        } else {
          setQ4G4ADLQ(Q4G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G4ADLQ" className="ml-2"> Occupant à titre gratuit </label>
</div>
<div >
    <input
      id="Q4G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G5ADLQ([...Q4G5ADLQ, "✔"]);
        } else {
          setQ4G5ADLQ(Q4G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G5ADLQ" className="ml-2"> Locataire </label>
</div>
<div >
    <input
      id="Q4G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G6ADLQ([...Q4G6ADLQ, "✔"]);
        } else {
          setQ4G6ADLQ(Q4G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G6ADLQ" className="ml-2"> Nu-propriétaire </label>
</div>
<div >
    <input
      id="Q4G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q4G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ4G7ADLQ([...Q4G7ADLQ, "✔"]);
        } else {
          setQ4G7ADLQ(Q4G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q4G7ADLQ" className="ml-2"> Autre, préciser: </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q5 : Décisions administratives ou constat sur le logement: </h4>
</div>

<div >
    <input
      id="Q5G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G1ADLQ([...Q5G1ADLQ, "✔"]);
        } else {
          setQ5G1ADLQ(Q5G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G1ADLQ" className="ml-2"> Un arrêté de mise en sécurité ou de traitement de l'insalubrité, arrêté de péril </label>
</div>
<div >
    <input
      id="Q5G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G2ADLQ([...Q5G2ADLQ, "✔"]);
        } else {
          setQ5G2ADLQ(Q5G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G2ADLQ" className="ml-2"> Une notification de travaux</label>
</div>
<div >
    <input
      id="Q5G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G3ADLQ([...Q5G3ADLQ, "✔"]);
        } else {
          setQ5G3ADLQ(Q5G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G3ADLQ" className="ml-2"> Un justificatif de handicap ou de perte d’autonomie </label>
</div>
<div >
    <input
      id="Q5G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G4ADLQ([...Q5G4ADLQ, "✔"]);
        } else {
          setQ5G4ADLQ(Q5G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G4ADLQ" className="ml-2"> Risque d’exposition au plomb </label>
</div>
<div >
    <input
      id="Q5G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G5ADLQ([...Q5G5ADLQ, "✔"]);
        } else {
          setQ5G5ADLQ(Q5G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G5ADLQ" className="ml-2"> Non-conformité au Règlement sanitaire départemental (RSD) </label>
</div>
<div >
    <input
      id="Q5G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G6ADLQ([...Q5G6ADLQ, "✔"]);
        } else {
          setQ5G6ADLQ(Q5G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G6ADLQ" className="ml-2"> Un signalement antérieur du ménage auprès du pôle départemental de l'habitat </label>
</div>
<div >
    <input
      id="Q5G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G7ADLQ([...Q5G7ADLQ, "✔"]);
        } else {
          setQ5G7ADLQ(Q5G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G7ADLQ" className="ml-2"> Aucun des constats précédents </label>
</div>
<div >
    <input
      id="Q5G8ADLQ"
      type="checkbox"
      value="✔"
      checked={Q5G8ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ5G8ADLQ([...Q5G8ADLQ, "✔"]);
        } else {
          setQ5G8ADLQ(Q5G8ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q5G8ADLQ" className="ml-2"> Ne sait pas. </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q6 : Motivations des travaux que souhaite réaliser le ménage: </h4>
</div>

<div >
    <input
      id="Q6G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G1ADLQ([...Q6G1ADLQ, "✔"]);
        } else {
          setQ6G1ADLQ(Q6G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G1ADLQ" className="ml-2"> Faire des économies d’énergie </label>
</div>
<div >
    <input
      id="Q6G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G2ADLQ([...Q6G2ADLQ, "✔"]);
        } else {
          setQ6G2ADLQ(Q6G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G2ADLQ" className="ml-2"> Corriger des gros défauts, anticiper ou réparer une panne </label>
</div>
<div >
    <input
      id="Q6G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G3ADLQ([...Q6G3ADLQ, "✔"]);
        } else {
          setQ6G3ADLQ(Q6G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G3ADLQ" className="ml-2"> Effectuer des travaux pour des raisons médicales </label>
</div>
<div >
    <input
      id="Q6G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G4ADLQ([...Q6G4ADLQ, "✔"]);
        } else {
          setQ6G4ADLQ(Q6G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G4ADLQ" className="ml-2"> Modifier le logement pour répondre aux besoins du ménage </label>
</div>
<div >
    <input
      id="Q6G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G5ADLQ([...Q6G5ADLQ, "✔"]);
        } else {
          setQ6G5ADLQ(Q6G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G5ADLQ" className="ml-2"> Améliorer le confort </label>
</div>
<div >
    <input
      id="Q6G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G6ADLQ([...Q6G6ADLQ, "✔"]);
        } else {
          setQ6G6ADLQ(Q6G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G6ADLQ" className="ml-2"> Profiter de travaux pour avoir une maison plus écologique </label>
</div>
<div >
    <input
      id="Q6G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q6G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ6G7ADLQ([...Q6G7ADLQ, "✔"]);
        } else {
          setQ6G7ADLQ(Q6G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q6G7ADLQ" className="ml-2"> Autre, préciser. </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q7 : Selon vous, quel est le niveau d’accompagnement nécessaire pour le ménage? </h4>
</div>

<div>
    <span>Le ménage a une bonne idée des travaux à réaliser </span>

    <input
      id="Q7G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q7G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7G1ADLQ([...Q7G1ADLQ, "✔"]);
        } else {
          setQ7G1ADLQ(Q7G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q7G1ADLQ" className="ml-2">1 </label>
       <input
      id="Q7G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q7G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7G2ADLQ([...Q7G2ADLQ, "✔"]);
        } else {
          setQ7G2ADLQ(Q7G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q7G2ADLQ" className="ml-2">2 </label>

       <input
      id="Q7G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q7G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7G3ADLQ([...Q7G3ADLQ, "✔"]);
        } else {
          setQ7G3ADLQ(Q7G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q7G3ADLQ" className="ml-2">3 </label>

       <input
      id="Q7G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q7G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7G4ADLQ([...Q7G4ADLQ, "✔"]);
        } else {
          setQ7G4ADLQ(Q7G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q7G4ADLQ" className="ml-2">4 </label>

       <input
      id="Q7G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q7G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ7G5ADLQ([...Q7G5ADLQ, "✔"]);
        } else {
          setQ7G5ADLQ(Q7G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q7G5ADLQ" className="ml-2">5 </label>


       <span>Le ménage est un peu perdu sur ce qu’il convient de faire</span>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q8 : Selon vous, quel est le degré de confiance du ménage vis-à-vis de la conduite du chantier?
 </h4>
</div>

<div>
    <span>Le ménage se sent capable de piloter le chantier  </span>

    <input
      id="Q8G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q8G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8G1ADLQ([...Q8G1ADLQ, "✔"]);
        } else {
          setQ8G1ADLQ(Q8G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q8G1ADLQ" className="ml-2">1 </label>
       <input
      id="Q8G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q8G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8G2ADLQ([...Q8G2ADLQ, "✔"]);
        } else {
          setQ8G2ADLQ(Q8G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q8G2ADLQ" className="ml-2">2 </label>

       <input
      id="Q8G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q8G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8G3ADLQ([...Q8G3ADLQ, "✔"]);
        } else {
          setQ8G3ADLQ(Q8G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q8G3ADLQ" className="ml-2">3 </label>

       <input
      id="Q8G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q8G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8G4ADLQ([...Q8G4ADLQ, "✔"]);
        } else {
          setQ8G4ADLQ(Q8G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q8G4ADLQ" className="ml-2">4 </label>

       <input
      id="Q8G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q8G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ8G5ADLQ([...Q8G5ADLQ, "✔"]);
        } else {
          setQ8G5ADLQ(Q8G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q8G5ADLQ" className="ml-2">5 </label>


       <span>Le ménage craint de « se faire avoir » par les artisans</span>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q9 : Selon vous, quel est le degré d’acceptation des perturbations liées aux travaux?
 </h4>
</div>

<div>
    <span>Le ménage peut accepter un chantier important  </span>

    <input
      id="Q9G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q9G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ9G1ADLQ([...Q9G1ADLQ, "✔"]);
        } else {
          setQ9G1ADLQ(Q9G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q9G1ADLQ" className="ml-2">1 </label>
       <input
      id="Q9G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q9G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ9G2ADLQ([...Q9G2ADLQ, "✔"]);
        } else {
          setQ9G2ADLQ(Q9G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q9G2ADLQ" className="ml-2">2 </label>

       <input
      id="Q9G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q9G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ9G3ADLQ([...Q9G3ADLQ, "✔"]);
        } else {
          setQ9G3ADLQ(Q9G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q9G3ADLQ" className="ml-2">3 </label>

       <input
      id="Q9G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q9G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ9G4ADLQ([...Q9G4ADLQ, "✔"]);
        } else {
          setQ9G4ADLQ(Q9G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q9G4ADLQ" className="ml-2">4 </label>

       <input
      id="Q9G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q9G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ9G5ADLQ([...Q9G5ADLQ, "✔"]);
        } else {
          setQ9G5ADLQ(Q9G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q9G5ADLQ" className="ml-2">5 </label>
       <span>Le ménage souhaite minimiser l’impact des travaux
</span>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q10 : Pour financer ses travaux, le ménage:
 </h4>
</div>

<div >
    <input
      id="Q10G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q10G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ10G1ADLQ([...Q10G1ADLQ, "✔"]);
        } else {
          setQ10G1ADLQ(Q10G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q10G1ADLQ" className="ml-2"> Dispose de fonds propres </label>
</div>
<div >
    <input
      id="Q10G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q10G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ10G2ADLQ([...Q10G2ADLQ, "✔"]);
        } else {
          setQ10G2ADLQ(Q10G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q10G2ADLQ" className="ml-2"> Est disposé à emprunter </label>
</div>
<div >
    <input
      id="Q10G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q10G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ10G3ADLQ([...Q10G3ADLQ, "✔"]);
        } else {
          setQ10G3ADLQ(Q10G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q10G3ADLQ" className="ml-2"> Ne peut pas financer le reste à charge des travaux. </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q11 : Si le ménage est en capacité de financer ses travaux, quel reste à charge maximum peut-il supporter?
 </h4>
</div>

<div >
    <input
      id="Q11G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q11G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ11G1ADLQ([...Q11G1ADLQ, "✔"]);
        } else {
          setQ11G1ADLQ(Q11G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q11G1ADLQ" className="ml-2">Moins de 1 000,00 € </label>
       <input
      id="Q11G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q11G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ11G2ADLQ([...Q11G2ADLQ, "✔"]);
        } else {
          setQ11G2ADLQ(Q11G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q11G2ADLQ" className="ml-2">Entre 10 000,00 € et 30 000,00 € </label>
</div>

<div >
    <input
      id="Q11G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q11G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ11G3ADLQ([...Q11G3ADLQ, "✔"]);
        } else {
          setQ11G3ADLQ(Q11G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q11G3ADLQ" className="ml-2">Entre 1 000,00 € et 5 000,00 € </label>
       <input
      id="Q11G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q11G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ11G4ADLQ([...Q11G4ADLQ, "✔"]);
        } else {
          setQ11G4ADLQ(Q11G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q11G4ADLQ" className="ml-2">Plus de 30 000,00 € </label>
</div>

<div >
    <input
      id="Q11G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q11G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ11G5ADLQ([...Q11G5ADLQ, "✔"]);
        } else {
          setQ11G5ADLQ(Q11G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q11G5ADLQ" className="ml-2">Entre 5 000,00 € et 10 000,00 € </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q12 : Typologie de logements et bâti:
 </h4>
</div>

<div >
    <input
      id="Q12G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q12G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12G1ADLQ([...Q12G1ADLQ, "✔"]);
        } else {
          setQ12G1ADLQ(Q12G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12G1ADLQ" className="ml-2">Une maison individuelle</label>
</div>

<div >
    <input
      id="Q12G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q12G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12G2ADLQ([...Q12G2ADLQ, "✔"]);
        } else {
          setQ12G2ADLQ(Q12G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12G2ADLQ" className="ml-2">Un logement collectif</label>
</div>
<div >
    <input
      id="Q12G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q12G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12G3ADLQ([...Q12G3ADLQ, "✔"]);
        } else {
          setQ12G3ADLQ(Q12G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12G3ADLQ" className="ml-2">En copropriété. Préciser les coordonnées du syndic</label>
</div>
<div >
    <input
      id="Q12G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q12G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12G4ADLQ([...Q12G4ADLQ, "✔"]);
        } else {
          setQ12G4ADLQ(Q12G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12G4ADLQ" className="ml-2">En monopropriété</label>
</div>
<div >
    <input
      id="Q12G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q12G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12G5ADLQ([...Q12G5ADLQ, "✔"]);
        } else {
          setQ12G5ADLQ(Q12G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12G5ADLQ" className="ml-2">Ne sait pas</label>
</div>
<div >
    <input
      id="Q12G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q12G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ12G6ADLQ([...Q12G6ADLQ, "✔"]);
        } else {
          setQ12G6ADLQ(Q12G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q12G6ADLQ" className="ml-2">Autre, préciser:</label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q13 : Type de bâtiments:
 </h4>
</div>

<div >
    <input
      id="Q13G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q13G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13G1ADLQ([...Q13G1ADLQ, "✔"]);
        } else {
          setQ13G1ADLQ(Q13G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13G1ADLQ" className="ml-2">Pavillon</label>
</div>
<div >
    <input
      id="Q13G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q13G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13G2ADLQ([...Q13G2ADLQ, "✔"]);
        } else {
          setQ13G2ADLQ(Q13G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13G2ADLQ" className="ml-2">Grand ensemble</label>
</div>
<div >
    <input
      id="Q13G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q13G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13G3ADLQ([...Q13G3ADLQ, "✔"]);
        } else {
          setQ13G3ADLQ(Q13G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13G3ADLQ" className="ml-2">Maison de ville</label>
</div>
<div >
    <input
      id="Q13G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q13G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13G4ADLQ([...Q13G4ADLQ, "✔"]);
        } else {
          setQ13G4ADLQ(Q13G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13G4ADLQ" className="ml-2">Petite immeuble de centre ancien</label>
</div>
<div >
    <input
      id="Q13G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q13G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13G5ADLQ([...Q13G5ADLQ, "✔"]);
        } else {
          setQ13G5ADLQ(Q13G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13G5ADLQ" className="ml-2">Haussmannien, faubourien, grand immeuble de centre ancien</label>
</div>
<div >
    <input
      id="Q13G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q13G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ13G6ADLQ([...Q13G6ADLQ, "✔"]);
        } else {
          setQ13G6ADLQ(Q13G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q13G6ADLQ" className="ml-2">Maison rurale.</label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q14 : Surface habitable du logement:
 </h4>
</div>
<div>
    <p><label htmlFor="Q14G0ADLQ" className="ml-2"></label> <input
        className='items-center justify-center text-center'
            type="text"
            name="Q14G0ADLQ"
            value={Q14G0ADLQ}
            onChange={(e)=>setQ14G0ADLQ(e.target.value)}
            id="Q14G0ADLQ"
            placeholder=' ............... m²'
          /></p>
    
    <span>Pour le nombre de pièces (hors pièces humides)   </span>
    <input
      id="Q14G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q14G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ14G1ADLQ([...Q14G1ADLQ, "✔"]);
        } else {
          setQ14G1ADLQ(Q14G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q14G1ADLQ" className="ml-2">T1 </label>
       <input
      id="Q14G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q14G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ14G2ADLQ([...Q14G2ADLQ, "✔"]);
        } else {
          setQ14G2ADLQ(Q14G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q14G2ADLQ" className="ml-2">T2 </label>
       <input
      id="Q14G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q14G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ14G3ADLQ([...Q14G3ADLQ, "✔"]);
        } else {
          setQ14G3ADLQ(Q14G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q14G3ADLQ" className="ml-2">T3 </label>
       <input
      id="Q14G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q14G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ14G4ADLQ([...Q14G4ADLQ, "✔"]);
        } else {
          setQ14G4ADLQ(Q14G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q14G4ADLQ" className="ml-2">T4 </label>
       <input
      id="Q14G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q14G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ14G5ADLQ([...Q14G5ADLQ, "✔"]);
        } else {
          setQ14G5ADLQ(Q14G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q14G5ADLQ" className="ml-2">T5 </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q15 : travaux de gros entretiens sont nécessaires à court ou moyen terme (réfection de toiture, ravalement, rafraîchissement, fin de vie de la chaudière, etc.):
 </h4>
</div>

<div>
<input
      id="Q15G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q15G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ15G1ADLQ([...Q15G1ADLQ, "✔"]);
        } else {
          setQ15G1ADLQ(Q15G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q15G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q15G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q15G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ15G2ADLQ([...Q15G2ADLQ, "✔"]);
        } else {
          setQ15G2ADLQ(Q15G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q15G2ADLQ" className="ml-2">Non </label>
       <input
      id="Q15G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q15G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ15G3ADLQ([...Q15G3ADLQ, "✔"]);
        } else {
          setQ15G3ADLQ(Q15G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q15G3ADLQ" className="ml-2">Ne sait pas </label>
       <p>Si oui ,préciser:</p>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q15G4ADLQ"
            value={Q15G4ADLQ}
            onChange={(e)=>setQ15G4ADLQ(e.target.value)}
            id="Q15G4ADLQ"
            placeholder='...................................'
          />
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q16 : Le ménage pense que le logement n'est pas adapté à ses besoins (taille, accessibilité, etc.):
 </h4>
</div>

<div>
<input
      id="Q16G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q16G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ16G1ADLQ([...Q16G1ADLQ, "✔"]);
        } else {
          setQ16G1ADLQ(Q16G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q16G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q16G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q16G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ16G2ADLQ([...Q16G2ADLQ, "✔"]);
        } else {
          setQ16G2ADLQ(Q16G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q16G2ADLQ" className="ml-2">Non </label>
       
       <p>Si oui ,préciser:</p>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q16G4ADLQ"
            value={Q16G4ADLQ}
            onChange={(e)=>setQ16G4ADLQ(e.target.value)}
            id="Q16G4ADLQ"
            placeholder='...................................'
          />
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q17 : Le ménage trouve son logement inconfortable (température, humidité, bruit, etc.) en été ou en hiver :
 </h4>
</div>

<div>
<input
      id="Q17G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q17G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ17G1ADLQ([...Q17G1ADLQ, "✔"]);
        } else {
          setQ17G1ADLQ(Q17G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q17G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q17G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q17G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ17G2ADLQ([...Q17G2ADLQ, "✔"]);
        } else {
          setQ17G2ADLQ(Q17G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q17G2ADLQ" className="ml-2">Non </label>
       
       <p>Si oui ,préciser:</p>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q17G4ADLQ"
            value={Q17G4ADLQ}
            onChange={(e)=>setQ17G4ADLQ(e.target.value)}
            id="Q17G4ADLQ"
            placeholder='...................................'
          />
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q18 : Le ménage considère son logement en bon état général:
 </h4>
</div>

<div>
<input
      id="Q18G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q18G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ18G1ADLQ([...Q18G1ADLQ, "✔"]);
        } else {
          setQ18G1ADLQ(Q18G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q18G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q18G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q18G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ18G2ADLQ([...Q18G2ADLQ, "✔"]);
        } else {
          setQ18G2ADLQ(Q18G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q18G2ADLQ" className="ml-2">Non </label>
       
       <p>Si oui ,préciser:</p>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q18G4ADLQ"
            value={Q18G4ADLQ}
            onChange={(e)=>setQ18G4ADLQ(e.target.value)}
            id="Q18G4ADLQ"
            placeholder='...................................'
          />
</div>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-300' >
    <h4>CONDITIONS D'EXISTENCE DU MÉNAGE
 </h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q19 : Connaissance d'ordre économique et social du ménage
 </h4>
</div>

<div>
    <p>Le ménage a des difficultés d’ordre économique et social</p>
<input
      id="Q19G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G1ADLQ([...Q19G1ADLQ, "✔"]);
        } else {
          setQ19G1ADLQ(Q19G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q19G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G2ADLQ([...Q19G2ADLQ, "✔"]);
        } else {
          setQ19G2ADLQ(Q19G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G2ADLQ" className="ml-2">Non </label>
       <p>Si oui ,préciser:</p>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q19G3ADLQ"
            value={Q19G3ADLQ}
            onChange={(e)=>setQ19G3ADLQ(e.target.value)}
            id="Q19G3ADLQ"
            placeholder='...................................'
          />
</div>
<br></br>
<div>
    <p>Le ménage a des difficultés à régler des factures (d’énergie particulièrement)</p>
<input
      id="Q19G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G4ADLQ([...Q19G4ADLQ, "✔"]);
        } else {
          setQ19G4ADLQ(Q19G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G4ADLQ" className="ml-2">Oui </label>
       <input
      id="Q19G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G5ADLQ([...Q19G5ADLQ, "✔"]);
        } else {
          setQ19G5ADLQ(Q19G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G5ADLQ" className="ml-2">Non </label>
       <input
      id="Q19G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G6ADLQ([...Q19G6ADLQ, "✔"]);
        } else {
          setQ19G6ADLQ(Q19G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G6ADLQ" className="ml-2">Ne sait pas </label>
</div>
<br></br>
<div>
    <p>Le ménage bénéficie déjà d'un accompagnement social</p>
<input
      id="Q19G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G7ADLQ([...Q19G7ADLQ, "✔"]);
        } else {
          setQ19G7ADLQ(Q19G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G7ADLQ" className="ml-2">Oui </label>
       <input
      id="Q19G8ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G8ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G8ADLQ([...Q19G8ADLQ, "✔"]);
        } else {
          setQ19G8ADLQ(Q19G8ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G8ADLQ" className="ml-2">Non </label>
       <input
      id="Q19G9ADLQ"
      type="checkbox"
      value="✔"
      checked={Q19G9ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ19G9ADLQ([...Q19G9ADLQ, "✔"]);
        } else {
          setQ19G9ADLQ(Q19G9ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q19G9ADLQ" className="ml-2">Ne sait pas </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q20 : Le ménage est en situation d'isolement social dont difficultés à utiliser les outils numériques (connexion Internet, autonomie démarches en ligne, etc.):
 </h4>
</div>

<div>
<input
      id="Q20G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q20G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ20G1ADLQ([...Q20G1ADLQ, "✔"]);
        } else {
          setQ20G1ADLQ(Q20G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q20G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q20G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q20G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ20G2ADLQ([...Q20G2ADLQ, "✔"]);
        } else {
          setQ20G2ADLQ(Q20G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q20G2ADLQ" className="ml-2">Non </label>
       <input
      id="Q20G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q20G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ20G3ADLQ([...Q20G3ADLQ, "✔"]);
        } else {
          setQ20G3ADLQ(Q20G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q20G3ADLQ" className="ml-2">Ne sait pas </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q21 : Des occupants du logement rencontrent des difficultés particulières d’autonomie:
 </h4>
</div>

<div>
    <p>Difficultés pour accéder au logement</p>
<input
      id="Q21G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q21G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ21G1ADLQ([...Q21G1ADLQ, "✔"]);
        } else {
          setQ21G1ADLQ(Q21G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q21G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q21G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q21G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ21G2ADLQ([...Q21G2ADLQ, "✔"]);
        } else {
          setQ21G2ADLQ(Q21G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q21G2ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>
       <div>
       <span>Préciser l’étage où se situe le logement et le nombre d'étages du logement :</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q21G3ADLQ"
            value={Q21G3ADLQ}
            onChange={(e)=>setQ21G3ADLQ(e.target.value)}
            id="Q21G3ADLQ"
            placeholder='.............................'
          />
</div>

<div>
    <p>Absence d'ascenseur ou ascenseur hors d’état de marche</p>
<input
      id="Q21G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q21G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ21G4ADLQ([...Q21G4ADLQ, "✔"]);
        } else {
          setQ21G4ADLQ(Q21G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q21G4ADLQ" className="ml-2">Oui </label>
       <input
      id="Q21G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q21G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ21G5ADLQ([...Q21G5ADLQ, "✔"]);
        } else {
          setQ21G5ADLQ(Q21G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q21G5ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <div>
    <p>Difficultés dans la réalisation des gestes quotidiens (toilette, repas, déplacement, etc.)</p>
<input
      id="Q21G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q21G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ21G6ADLQ([...Q21G6ADLQ, "✔"]);
        } else {
          setQ21G6ADLQ(Q21G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q21G6ADLQ" className="ml-2">Oui </label>
       <input
      id="Q21G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q21G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ21G7ADLQ([...Q21G7ADLQ, "✔"]);
        } else {
          setQ21G7ADLQ(Q21G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q21G7ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <div className='text-start items-center text-black font-bold border border-solid bg-gray-300' >
    <h4>ÉTAT DE L’ENVELOPPE ET DES SYSTÈMES
 </h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q22 : Disponibilité d'un DPE (ou audit énergétique antérieur) réalisé sur le logement:</h4>
</div>

<div>
<input
      id="Q22G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q22G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ22G1ADLQ([...Q22G1ADLQ, "✔"]);
        } else {
          setQ22G1ADLQ(Q22G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q22G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q22G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q22G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ22G2ADLQ([...Q22G2ADLQ, "✔"]);
        } else {
          setQ22G2ADLQ(Q22G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q22G2ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>
       <div>
       <span>Si oui, quelle étiquette a été attribuée au logement? Préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q22G3ADLQ"
            value={Q22G3ADLQ}
            onChange={(e)=>setQ22G3ADLQ(e.target.value)}
            id="Q22G3ADLQ"
            placeholder='.............................'
          />
</div>
<div>
       <span>Date du DPE:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q22G4ADLQ"
            value={Q22G4ADLQ}
            onChange={(e)=>setQ22G4ADLQ(e.target.value)}
            id="Q22G4ADLQ"
            placeholder='__ /__ /____'
          />
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q23 : Système de chauffage du logement: </h4>
</div>
<p>Le système de chauffage est :</p>
<div >
    <input
      id="Q23G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G1ADLQ([...Q23G1ADLQ, "✔"]);
        } else {
          setQ23G1ADLQ(Q23G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G1ADLQ" className="ml-2">Installation individuelle</label>
</div>
<div >
    <input
      id="Q23G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G2ADLQ([...Q23G2ADLQ, "✔"]);
        } else {
          setQ23G2ADLQ(Q23G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G2ADLQ" className="ml-2">Installation collective</label>
</div>
<div >
    <input
      id="Q23G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G3ADLQ([...Q23G3ADLQ, "✔"]);
        } else {
          setQ23G3ADLQ(Q23G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G3ADLQ" className="ml-2">Gaz</label>
</div>
<div >
    <input
      id="Q23G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G4ADLQ([...Q23G4ADLQ, "✔"]);
        } else {
          setQ23G4ADLQ(Q23G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G4ADLQ" className="ml-2">Électricité</label>
</div>
<div >
    <input
      id="Q23G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G5ADLQ([...Q23G5ADLQ, "✔"]);
        } else {
          setQ23G5ADLQ(Q23G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G5ADLQ" className="ml-2">Autres, préciser:</label>
</div>
<p>Le système de chauffage est absent dans certaines pièces de vie</p>
<div>
<input
      id="Q23G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G6ADLQ([...Q23G6ADLQ, "✔"]);
        } else {
          setQ23G6ADLQ(Q23G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G6ADLQ" className="ml-2">Oui </label>
       <input
      id="Q23G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G7ADLQ([...Q23G7ADLQ, "✔"]);
        } else {
          setQ23G7ADLQ(Q23G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G7ADLQ" className="ml-2">Non </label>
       </div>

       <p>Le ménage peut régler la température de chauffe de son logement (thermostat, robinet thermostatique, etc.)</p>
<div>
<input
      id="Q23G8ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G8ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G8ADLQ([...Q23G8ADLQ, "✔"]);
        } else {
          setQ23G8ADLQ(Q23G8ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G8ADLQ" className="ml-2">Oui </label>
       <input
      id="Q23G9ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G9ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G9ADLQ([...Q23G9ADLQ, "✔"]);
        } else {
          setQ23G9ADLQ(Q23G9ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G9ADLQ" className="ml-2">Non </label>
       </div>

       <div>
       <span>Si oui, préciser la température de consigne fixée:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q23G10ADLQ"
            value={Q23G10ADLQ}
            onChange={(e)=>setQ23G10ADLQ(e.target.value)}
            id="Q23G10ADLQ"
            placeholder='.......'
          />°C
</div>

<p>Le ménage a la possibilité d'automatiser la baisse de température sur certaines plages horaires</p>
<div>
<input
      id="Q23G11ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G11ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G11ADLQ([...Q23G11ADLQ, "✔"]);
        } else {
          setQ23G11ADLQ(Q23G11ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G11ADLQ" className="ml-2">Oui </label>
       <input
      id="Q23G12ADLQ"
      type="checkbox"
      value="✔"
      checked={Q23G12ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ23G12ADLQ([...Q23G12ADLQ, "✔"]);
        } else {
          setQ23G12ADLQ(Q23G12ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q23G12ADLQ" className="ml-2">Non </label>
       </div>
<br></br>
       <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q24 : Système de ventilation du logement: </h4>
</div>

<p>Présence d’humidité et/ou de moisissure dans le logement</p>
<div>
<input
      id="Q24G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q24G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24G1ADLQ([...Q24G1ADLQ, "✔"]);
        } else {
          setQ24G1ADLQ(Q24G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q24G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q24G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q24G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24G2ADLQ([...Q24G2ADLQ, "✔"]);
        } else {
          setQ24G2ADLQ(Q24G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q24G2ADLQ" className="ml-2">Non </label>
       </div>

       <p>Le logement dispose de ventilation naturelle ou mécanique fonctionnelle en continu (VMC en état de marche, bonnes prises d’air visibles basses et hautes, présence et état d’aérateurs au-dessus des fenêtres ou intégrés aux fenêtres)</p>
<div>
<input
      id="Q24G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q24G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24G3ADLQ([...Q24G3ADLQ, "✔"]);
        } else {
          setQ24G3ADLQ(Q24G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q24G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q24G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q24G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24G4ADLQ([...Q24G4ADLQ, "✔"]);
        } else {
          setQ24G4ADLQ(Q24G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q24G4ADLQ" className="ml-2">Non </label>
       </div>

       <p>Ces ventilations sont présentes dans toutes les pièces d’eau</p>
<div>
<input
      id="Q24G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q24G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24G5ADLQ([...Q24G5ADLQ, "✔"]);
        } else {
          setQ24G5ADLQ(Q24G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q24G5ADLQ" className="ml-2">Oui </label>
       <input
      id="Q24G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q24G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ24G6ADLQ([...Q24G6ADLQ, "✔"]);
        } else {
          setQ24G6ADLQ(Q24G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q24G6ADLQ" className="ml-2">Non </label>
       </div>
<br></br>
       <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q25 : Confort d’été dans le logement: </h4>
</div>

<p>Le ménage a trop chaud en été dans le logement</p>
<div>
<input
      id="Q25G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q25G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ25G1ADLQ([...Q25G1ADLQ, "✔"]);
        } else {
          setQ25G1ADLQ(Q25G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q25G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q25G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q25G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ25G2ADLQ([...Q25G2ADLQ, "✔"]);
        } else {
          setQ25G2ADLQ(Q25G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q25G2ADLQ" className="ml-2">Non </label>
       </div>

       <p>Présence d'une climatisation</p>
<div>
<input
      id="Q25G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q25G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ25G3ADLQ([...Q25G3ADLQ, "✔"]);
        } else {
          setQ25G3ADLQ(Q25G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q25G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q25G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q25G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ25G4ADLQ([...Q25G4ADLQ, "✔"]);
        } else {
          setQ25G4ADLQ(Q25G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q25G4ADLQ" className="ml-2">Non </label>
       </div>
<br></br>
       <div className='text-start items-center text-black font-bold border border-solid bg-gray-300' >
    <h4>ÉTAT GÉNÉRAL DU BATIMENT </h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q26 : Présence de fissure, de déformation ou d'effondrement: </h4>
</div>

<div>
<input
      id="Q26G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q26G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ26G1ADLQ([...Q26G1ADLQ, "✔"]);
        } else {
          setQ26G1ADLQ(Q26G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q26G1ADLQ" className="ml-2">Mur </label>
</div>
<div>
<input
      id="Q26G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q26G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ26G2ADLQ([...Q26G2ADLQ, "✔"]);
        } else {
          setQ26G2ADLQ(Q26G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q26G2ADLQ" className="ml-2">Toit </label>
</div>
<div>
<input
      id="Q26G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q26G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ26G3ADLQ([...Q26G3ADLQ, "✔"]);
        } else {
          setQ26G3ADLQ(Q26G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q26G3ADLQ" className="ml-2">Sol </label>
</div>
<div>
<input
      id="Q26G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q26G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ26G4ADLQ([...Q26G4ADLQ, "✔"]);
        } else {
          setQ26G4ADLQ(Q26G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q26G4ADLQ" className="ml-2">Autres, préciser: </label>
</div>
<div>
<span>Depuis combien de temps sont apparus ces désordres?</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q26G5ADLQ"
            value={Q26G5ADLQ}
            onChange={(e)=>setQ26G5ADLQ(e.target.value)}
            id="Q26G5ADLQ"
            placeholder='....................'
          />
    </div>
   <span>Si copropriété localisation</span>   

   <div>
<input
      id="Q26G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q26G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ26G6ADLQ([...Q26G6ADLQ, "✔"]);
        } else {
          setQ26G6ADLQ(Q26G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q26G6ADLQ" className="ml-2">Partie commune </label>
</div>
<div>
<input
      id="Q26G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q26G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ26G7ADLQ([...Q26G7ADLQ, "✔"]);
        } else {
          setQ26G7ADLQ(Q26G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q26G7ADLQ" className="ml-2">Partie privative </label>
</div>    
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q27 : Risque de chutes d’éléments (briques, gouttières, cheminée, antenne, volets, etc.)? </h4>
</div>
<div>
<input
      id="Q27G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q27G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ27G1ADLQ([...Q27G1ADLQ, "✔"]);
        } else {
          setQ27G1ADLQ(Q27G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q27G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q27G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q27G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ27G2ADLQ([...Q27G2ADLQ, "✔"]);
        } else {
          setQ27G2ADLQ(Q27G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q27G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Si oui ,préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q27G3ADLQ"
            value={Q27G3ADLQ}
            onChange={(e)=>setQ27G3ADLQ(e.target.value)}
            id="Q27G3ADLQ"
            placeholder='....................'
          />
    </div>
<br></br>
    <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q28 : Infiltrations d'eau (défaut d'étanchéité, remontées depuis le sol, fuite de canalisations, etc.)? </h4>
</div>
<div>
<input
      id="Q28G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q28G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ28G1ADLQ([...Q28G1ADLQ, "✔"]);
        } else {
          setQ28G1ADLQ(Q28G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q28G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q28G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q28G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ28G2ADLQ([...Q28G2ADLQ, "✔"]);
        } else {
          setQ28G2ADLQ(Q28G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q28G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Si oui, préciser la localisation et origine:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q28G3ADLQ"
            value={Q28G3ADLQ}
            onChange={(e)=>setQ28G3ADLQ(e.target.value)}
            id="Q28G3ADLQ"
            placeholder='....................'
          />
    </div>
    <span>Si copropriété localisation</span>
    <div>
<input
      id="Q28G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q28G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ28G4ADLQ([...Q28G4ADLQ, "✔"]);
        } else {
          setQ28G4ADLQ(Q28G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q28G4ADLQ" className="ml-2">Partie commune </label>
</div>
<div>
<input
      id="Q28G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q28G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ28G5ADLQ([...Q28G5ADLQ, "✔"]);
        } else {
          setQ28G5ADLQ(Q28G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q28G5ADLQ" className="ml-2">Partie privative </label>
</div>
<br></br>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q29 : Les menuiseries présentent-elles des dysfonctionnements? </h4>
</div>

<p>Défaut d’étanchéité (absence de joints ou en mauvais état, vitres cassées, etc.)</p>
<div>
<input
      id="Q29G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q29G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ29G1ADLQ([...Q29G1ADLQ, "✔"]);
        } else {
          setQ29G1ADLQ(Q29G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q29G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q29G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q29G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ29G2ADLQ([...Q29G2ADLQ, "✔"]);
        } else {
          setQ29G2ADLQ(Q29G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q29G2ADLQ" className="ml-2">Non </label>
       </div>

       <p>Difficulté pour les fermer ou les ouvrir</p>
<div>
<input
      id="Q29G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q29G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ29G3ADLQ([...Q29G3ADLQ, "✔"]);
        } else {
          setQ29G3ADLQ(Q29G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q29G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q29G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q29G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ29G4ADLQ([...Q29G4ADLQ, "✔"]);
        } else {
          setQ29G4ADLQ(Q29G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q29G4ADLQ" className="ml-2">Non </label>
       </div>

       <p>Présence de grilles de ventilation</p>
<div>
<input
      id="Q29G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q29G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ29G5ADLQ([...Q29G5ADLQ, "✔"]);
        } else {
          setQ29G5ADLQ(Q29G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q29G5ADLQ" className="ml-2">Oui </label>
       <input
      id="Q29G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q29G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ29G6ADLQ([...Q29G6ADLQ, "✔"]);
        } else {
          setQ29G6ADLQ(Q29G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q29G6ADLQ" className="ml-2">Non </label>
       </div>
<br></br>
       <div className='text-start items-center text-black font-bold border border-solid bg-gray-300' >
    <h4>CONDITIONS SANITAIRES ET D'UTILISATION DU LOGEMENT </h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q30 : Pièces de vie du logement: </h4>
</div>

<div>
    <p>Certaines pièces de vie du logement sont situées en sous-sol</p>
<input
      id="Q30G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q30G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ30G1ADLQ([...Q30G1ADLQ, "✔"]);
        } else {
          setQ30G1ADLQ(Q30G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q30G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q30G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q30G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ30G2ADLQ([...Q30G2ADLQ, "✔"]);
        } else {
          setQ30G2ADLQ(Q30G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q30G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser lesquelles:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q30G3ADLQ"
            value={Q30G3ADLQ}
            onChange={(e)=>setQ30G3ADLQ(e.target.value)}
            id="Q30G3ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>
    <div>
    <p>Certaines pièces de vie ne disposent pas d'une fenêtre permettant un éclairage naturel par temps clair</p>
<input
      id="Q30G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q30G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ30G4ADLQ([...Q30G4ADLQ, "✔"]);
        } else {
          setQ30G4ADLQ(Q30G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q30G4ADLQ" className="ml-2">Oui </label>
       <input
      id="Q30G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q30G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ30G5ADLQ([...Q30G5ADLQ, "✔"]);
        } else {
          setQ30G5ADLQ(Q30G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q30G5ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser lesquelles:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q30G6ADLQ"
            value={Q30G6ADLQ}
            onChange={(e)=>setQ30G6ADLQ(e.target.value)}
            id="Q30G6ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>
    <div>
    <p>Certaines pièces de vie n'ont pas une hauteur de plafonds minimum de 2,20 m</p>
<input
      id="Q30G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q30G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ30G7ADLQ([...Q30G7ADLQ, "✔"]);
        } else {
          setQ30G7ADLQ(Q30G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q30G7ADLQ" className="ml-2">Oui </label>
       <input
      id="Q30G8ADLQ"
      type="checkbox"
      value="✔"
      checked={Q30G8ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ30G8ADLQ([...Q30G8ADLQ, "✔"]);
        } else {
          setQ30G8ADLQ(Q30G8ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q30G8ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser lesquelles:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q30G9ADLQ"
            value={Q30G9ADLQ}
            onChange={(e)=>setQ30G9ADLQ(e.target.value)}
            id="Q30G9ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>


    <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q31 : Accès à l'eau:</h4>
</div>

<div>
    <p>Accès à l’eau potable à l’intérieur du logement</p>
<input
      id="Q31G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q31G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ31G1ADLQ([...Q31G1ADLQ, "✔"]);
        } else {
          setQ31G1ADLQ(Q31G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q31G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q31G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q31G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ31G2ADLQ([...Q31G2ADLQ, "✔"]);
        } else {
          setQ31G2ADLQ(Q31G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q31G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Si non, préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q31G3ADLQ"
            value={Q31G3ADLQ}
            onChange={(e)=>setQ31G3ADLQ(e.target.value)}
            id="Q31G3ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>

    <div>
    <p>Accès à l'eau chaude sanitaire</p>
<input
      id="Q31G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q31G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ31G4ADLQ([...Q31G4ADLQ, "✔"]);
        } else {
          setQ31G4ADLQ(Q31G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q31G4ADLQ" className="ml-2">Oui </label>
       <input
      id="Q31G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q31G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ31G5ADLQ([...Q31G5ADLQ, "✔"]);
        } else {
          setQ31G5ADLQ(Q31G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q31G5ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q32 : Présence de nuisibles (cafards, rongeurs, punaises de lit, etc.) au domicile:</h4>
</div>


<div>
<input
      id="Q32G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q32G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ32G1ADLQ([...Q32G1ADLQ, "✔"]);
        } else {
          setQ32G1ADLQ(Q32G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q32G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q32G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q32G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ32G2ADLQ([...Q32G2ADLQ, "✔"]);
        } else {
          setQ32G2ADLQ(Q32G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q32G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q32G3ADLQ"
            value={Q32G3ADLQ}
            onChange={(e)=>setQ32G3ADLQ(e.target.value)}
            id="Q32G3ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>

    <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q33 : Présence d’un WC et d’une salle d’eau à l’intérieur du logement?</h4>
</div>



<div>
<input
      id="Q33G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q33G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ33G1ADLQ([...Q33G1ADLQ, "✔"]);
        } else {
          setQ33G1ADLQ(Q33G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q33G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q33G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q33G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ33G2ADLQ([...Q33G2ADLQ, "✔"]);
        } else {
          setQ33G2ADLQ(Q33G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q33G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q33G3ADLQ"
            value={Q33G3ADLQ}
            onChange={(e)=>setQ33G3ADLQ(e.target.value)}
            id="Q33G3ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>

    <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q34 : Les canalisations sont fréquemment bouchées ou les WC très dégradés?</h4>
</div>


<div>
<input
      id="Q34G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q34G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ34G1ADLQ([...Q34G1ADLQ, "✔"]);
        } else {
          setQ34G1ADLQ(Q34G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q34G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q34G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q34G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ34G2ADLQ([...Q34G2ADLQ, "✔"]);
        } else {
          setQ34G2ADLQ(Q34G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q34G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q34G3ADLQ"
            value={Q34G3ADLQ}
            onChange={(e)=>setQ34G3ADLQ(e.target.value)}
            id="Q34G3ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>

    <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q35 : L’entretien du logement et/ou des parties communes est-il suffisant (propreté, encombrement, etc.)?</h4>
</div>


<div>
<input
      id="Q35G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q35G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ35G1ADLQ([...Q35G1ADLQ, "✔"]);
        } else {
          setQ35G1ADLQ(Q35G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q35G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q35G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q35G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ35G2ADLQ([...Q35G2ADLQ, "✔"]);
        } else {
          setQ35G2ADLQ(Q35G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q35G2ADLQ" className="ml-2">Non </label>
       </div>
       <div>
<span>Préciser:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q35G3ADLQ"
            value={Q35G3ADLQ}
            onChange={(e)=>setQ35G3ADLQ(e.target.value)}
            id="Q35G3ADLQ"
            placeholder='....................'
          />
    </div>
    <br></br>

    <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q36 : Existence de diagnostic sur le logement:</h4>
</div>

<div>
    <span>Amiante </span>
    <input
      id="Q36G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G1ADLQ([...Q36G1ADLQ, "✔"]);
        } else {
          setQ36G1ADLQ(Q36G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q36G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G2ADLQ([...Q36G2ADLQ, "✔"]);
        } else {
          setQ36G2ADLQ(Q36G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G2ADLQ" className="ml-2">Non </label>
       <span>Points de vigilance:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q36G3ADLQ"
            value={Q36G3ADLQ}
            onChange={(e)=>setQ36G3ADLQ(e.target.value)}
            id="Q36G3ADLQ"
            placeholder='....................'
          />
</div>

<div>
    <span>Plomb </span>
    <input
      id="Q36G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G4ADLQ([...Q36G4ADLQ, "✔"]);
        } else {
          setQ36G4ADLQ(Q36G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G4ADLQ" className="ml-2">Oui </label>
       <input
      id="Q36G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G5ADLQ([...Q36G5ADLQ, "✔"]);
        } else {
          setQ36G5ADLQ(Q36G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G5ADLQ" className="ml-2">Non </label>
       <span>Points de vigilance:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q36G6ADLQ"
            value={Q36G6ADLQ}
            onChange={(e)=>setQ36G6ADLQ(e.target.value)}
            id="Q36G6ADLQ"
            placeholder='....................'
          />
</div>

<div>
    <span>Risques naturels </span>
    <input
      id="Q36G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G7ADLQ([...Q36G7ADLQ, "✔"]);
        } else {
          setQ36G7ADLQ(Q36G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G7ADLQ" className="ml-2">Oui </label>
       <input
      id="Q36G8ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G8ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G8ADLQ([...Q36G8ADLQ, "✔"]);
        } else {
          setQ36G8ADLQ(Q36G8ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G8ADLQ" className="ml-2">Non </label>
       <span>Points de vigilance:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q36G9ADLQ"
            value={Q36G9ADLQ}
            onChange={(e)=>setQ36G9ADLQ(e.target.value)}
            id="Q36G9ADLQ"
            placeholder='....................'
          />
</div>

<div>
    <span>Radon </span>
    <input
      id="Q36G10ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G10ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G10ADLQ([...Q36G10ADLQ, "✔"]);
        } else {
          setQ36G10ADLQ(Q36G10ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G10ADLQ" className="ml-2">Oui </label>
       <input
      id="Q36G11ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G11ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G11ADLQ([...Q36G11ADLQ, "✔"]);
        } else {
          setQ36G11ADLQ(Q36G11ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G11ADLQ" className="ml-2">Non </label>
       <span>Points de vigilance:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q36G12ADLQ"
            value={Q36G12ADLQ}
            onChange={(e)=>setQ36G12ADLQ(e.target.value)}
            id="Q36G12ADLQ"
            placeholder='....................'
          />
</div>

<div>
    <span>Termites </span>
    <input
      id="Q36G13ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G13ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G13ADLQ([...Q36G13ADLQ, "✔"]);
        } else {
          setQ36G13ADLQ(Q36G13ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G13ADLQ" className="ml-2">Oui </label>
       <input
      id="Q36G14ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G14ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G14ADLQ([...Q36G14ADLQ, "✔"]);
        } else {
          setQ36G14ADLQ(Q36G14ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G14ADLQ" className="ml-2">Non </label>
       <span>Points de vigilance:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q36G15ADLQ"
            value={Q36G15ADLQ}
            onChange={(e)=>setQ36G15ADLQ(e.target.value)}
            id="Q36G15ADLQ"
            placeholder='....................'
          />
</div>

<div>
    <span>Mérule </span>
    <input
      id="Q36G16ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G16ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G16ADLQ([...Q36G16ADLQ, "✔"]);
        } else {
          setQ36G16ADLQ(Q36G16ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G16ADLQ" className="ml-2">Oui </label>
       <input
      id="Q36G17ADLQ"
      type="checkbox"
      value="✔"
      checked={Q36G17ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ36G17ADLQ([...Q36G17ADLQ, "✔"]);
        } else {
          setQ36G17ADLQ(Q36G17ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q36G17ADLQ" className="ml-2">Non </label>
       <span>Points de vigilance:</span>
       <input
        className='items-center justify-center text-center'
            type="text"
            name="Q36G18ADLQ"
            value={Q36G18ADLQ}
            onChange={(e)=>setQ36G18ADLQ(e.target.value)}
            id="Q36G18ADLQ"
            placeholder='....................'
          />
</div>
<br></br>

<div className='text-start items-center text-black font-bold border border-solid bg-gray-300' >
    <h4>SÉCURITÉ DES PERSONNES DANS LE LOGEMENT</h4>
</div>
<div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q37 : Risque incendie, fumées et monoxyde de carbone</h4>
</div>

<p>Le logement est équipé de détecteurs avertisseurs autonomes de fumée</p>
<div>
<input
      id="Q37G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q37G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ37G1ADLQ([...Q37G1ADLQ, "✔"]);
        } else {
          setQ37G1ADLQ(Q37G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q37G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q37G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q37G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ37G2ADLQ([...Q37G2ADLQ, "✔"]);
        } else {
          setQ37G2ADLQ(Q37G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q37G2ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <p>Des raccordements (alimentation et évacuation) d’appareils à gaz sont inadéquats (tuyaux de gaz périmés), chaudière non entretenue</p>
<div>
<input
      id="Q37G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q37G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ37G3ADLQ([...Q37G3ADLQ, "✔"]);
        } else {
          setQ37G3ADLQ(Q37G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q37G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q37G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q37G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ37G4ADLQ([...Q37G4ADLQ, "✔"]);
        } else {
          setQ37G4ADLQ(Q37G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q37G4ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <p>Des chauffages d’appoint sont utilisés</p>
<div>
<input
      id="Q37G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q37G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ37G5ADLQ([...Q37G5ADLQ, "✔"]);
        } else {
          setQ37G5ADLQ(Q37G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q37G5ADLQ" className="ml-2">Oui </label>
       <input
      id="Q37G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q37G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ37G6ADLQ([...Q37G6ADLQ, "✔"]);
        } else {
          setQ37G6ADLQ(Q37G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q37G6ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>


       <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q38 : Accès et évacuations:</h4>
</div>

<p>Accessibilité difficile aux dispositifs et engins de secours</p>
<div>
<input
      id="Q38G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q38G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ38G1ADLQ([...Q38G1ADLQ, "✔"]);
        } else {
          setQ38G1ADLQ(Q38G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q38G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q38G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q38G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ38G2ADLQ([...Q38G2ADLQ, "✔"]);
        } else {
          setQ38G2ADLQ(Q38G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q38G2ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <p>Évacuation complexe (une seule sortie, étroite, non protégée, pas de fenêtres, etc.)</p>
<div>
<input
      id="Q38G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q38G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ38G3ADLQ([...Q38G3ADLQ, "✔"]);
        } else {
          setQ38G3ADLQ(Q38G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q38G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q38G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q38G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ38G4ADLQ([...Q38G4ADLQ, "✔"]);
        } else {
          setQ38G4ADLQ(Q38G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q38G4ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q39 : Risque électrique:</h4>
</div>
<div>
<span>L’électricité se coupe fréquemment </span>

<input
      id="Q39G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G1ADLQ([...Q39G1ADLQ, "✔"]);
        } else {
          setQ39G1ADLQ(Q39G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q39G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G2ADLQ([...Q39G2ADLQ, "✔"]);
        } else {
          setQ39G2ADLQ(Q39G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G2ADLQ" className="ml-2">Non </label>
       </div>

       <div>
<span>Présence d'un dispositif de coupure générale à l’intérieur du logement </span>

<input
      id="Q39G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G3ADLQ([...Q39G3ADLQ, "✔"]);
        } else {
          setQ39G3ADLQ(Q39G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q39G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G4ADLQ([...Q39G4ADLQ, "✔"]);
        } else {
          setQ39G4ADLQ(Q39G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G4ADLQ" className="ml-2">Non </label>
       </div>

       <div>
<span>Installation électrique dans toutes les pièces </span>

<input
      id="Q39G5ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G5ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G5ADLQ([...Q39G5ADLQ, "✔"]);
        } else {
          setQ39G5ADLQ(Q39G5ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G5ADLQ" className="ml-2">Oui </label>
       <input
      id="Q39G6ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G6ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G6ADLQ([...Q39G6ADLQ, "✔"]);
        } else {
          setQ39G6ADLQ(Q39G6ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G6ADLQ" className="ml-2">Non </label>
       </div>

       <div>
<span>Présence de fils apparents dénudés </span>

<input
      id="Q39G7ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G7ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G7ADLQ([...Q39G7ADLQ, "✔"]);
        } else {
          setQ39G7ADLQ(Q39G7ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G7ADLQ" className="ml-2">Oui </label>
       <input
      id="Q39G8ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G8ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G8ADLQ([...Q39G8ADLQ, "✔"]);
        } else {
          setQ39G8ADLQ(Q39G8ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G8ADLQ" className="ml-2">Non </label>
       </div>

       <div>
<span>Présence disjoncteur avec différentiel </span>

<input
      id="Q39G9ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G9ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G9ADLQ([...Q39G9ADLQ, "✔"]);
        } else {
          setQ39G9ADLQ(Q39G9ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G9ADLQ" className="ml-2">Oui </label>
       <input
      id="Q39G10ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G10ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G10ADLQ([...Q39G10ADLQ, "✔"]);
        } else {
          setQ39G10ADLQ(Q39G10ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G10ADLQ" className="ml-2">Non </label>
       </div>

       <div>
<span>Insuffisance du nombre de prises électriques </span>

<input
      id="Q39G11ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G11ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G11ADLQ([...Q39G11ADLQ, "✔"]);
        } else {
          setQ39G11ADLQ(Q39G11ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G11ADLQ" className="ml-2">Oui </label>
       <input
      id="Q39G12ADLQ"
      type="checkbox"
      value="✔"
      checked={Q39G12ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ39G12ADLQ([...Q39G12ADLQ, "✔"]);
        } else {
          setQ39G12ADLQ(Q39G12ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q39G12ADLQ" className="ml-2">Non </label>
       </div>
<br></br>
       <div className='text-start items-center text-black font-bold border border-solid bg-gray-200' >
    <h4>Q40 : Risque pour les personnes:</h4>
</div>

<p>Les escaliers sont-ils en mauvais état / déformés / dangereux / avec risques de chutes</p>
<div>
<input
      id="Q40G1ADLQ"
      type="checkbox"
      value="✔"
      checked={Q40G1ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ40G1ADLQ([...Q40G1ADLQ, "✔"]);
        } else {
          setQ40G1ADLQ(Q40G1ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q40G1ADLQ" className="ml-2">Oui </label>
       <input
      id="Q40G2ADLQ"
      type="checkbox"
      value="✔"
      checked={Q40G2ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ40G2ADLQ([...Q40G2ADLQ, "✔"]);
        } else {
          setQ40G2ADLQ(Q40G2ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q40G2ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>

       <p>Présence de rampe / garde-corps</p>
<div>
<input
      id="Q40G3ADLQ"
      type="checkbox"
      value="✔"
      checked={Q40G3ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ40G3ADLQ([...Q40G3ADLQ, "✔"]);
        } else {
          setQ40G3ADLQ(Q40G3ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q40G3ADLQ" className="ml-2">Oui </label>
       <input
      id="Q40G4ADLQ"
      type="checkbox"
      value="✔"
      checked={Q40G4ADLQ.includes("✔")}
      onChange={(e) => {
        if (e.target.checked) {
          setQ40G4ADLQ([...Q40G4ADLQ, "✔"]);
        } else {
          setQ40G4ADLQ(Q40G4ADLQ.filter((val) => val !== "✔"));
        }
      }}
    />
       <label htmlFor="Q40G4ADLQ" className="ml-2">Non </label>
       </div>
       <br></br>








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


export default AddFormGriAnaDuLogVie