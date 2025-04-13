
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

const AddFormInspecAp = () => {
  const {chantiers_id} = useParams()
  const {store} = useContext(storeContext)
  const [show, setShow] = useState(false)

  const [operationName, setOperationName] = useState('')
  const [benefNom, setbenefNom] = useState('')
  const [benefPreNom, setbenefPreNom] = useState('')
  const [chantierAdresse, setchantierAdresse] = useState('')
  const [chantierCodePostal, setchantierCodePostal] = useState('')
  const [chantierVille, setchantierVille] = useState('')
  const [chantierPhone, setchantierPhone] = useState('')
  const [chantierEmail, setchantierEmail] = useState('')
  const [chantierNomDO, setchantierNomDO] = useState('')
  const [chantierAdresseDO, setchantierAdresseDO] = useState('')
  const [chantierSirenDO, setchantierSirenDO] = useState('')
  const [clientName, setclientName] = useState('')
  const [createdAt, setcreatedAt] = useState('')


      const get_chantiers = async()=>{
        try {
            const { data } = await axios.get(`${base_url}/api/chantiers/${chantiers_id}`, {
                headers: {
                    "Authorization": `Bearer ${store.token}`
                }
            })
            setOperationName(data?.chantiers?.operationName)
            setbenefNom(data?.chantiers?.benefNom)
            setbenefPreNom(data?.chantiers?.benefPreNom)
            setchantierAdresse(data?.chantiers?.chantierAdresse)
            setchantierCodePostal(data?.chantiers?.chantierCodePostal)
            setchantierVille(data?.chantiers?.chantierVille)
            setchantierPhone(data?.chantiers?.chantierPhone)
            setchantierEmail(data?.chantiers?.chantierEmail)
            setchantierNomDO(data?.chantiers?.chantierNomDO)
            setchantierAdresseDO(data?.chantiers?.chantierAdresseDO)
            setchantierSirenDO(data?.chantiers?.chantierSirenDO)
            setclientName(data?.chantiers?.clientName)
            setcreatedAt(data?.chantiers?.createdAt)
            
        } catch (error) {
            console.log(error)            
        }
    }



       useEffect(()=>{
            get_chantiers()
          },[chantiers_id])

        // page garde 
        const [PGAPQ1,setPGAPQ1] = useState('')
        const [PGAPQ2,setPGAPQ2] = useState('')
        const [PGAPQ3,setPGAPQ3] = useState('')
        const [PGAPQq3,setPGAPQq3] = useState('')

        const [APCATQ000,setAPCATQ000] = useState('')

        const [ADAPQ1,setADAPQ1] = useState('')
        const [ADAPQ2,setADAPQ2] = useState('')
        const [ADAPQ3,setADAPQ3] = useState('')
        const [ADAPQ4,setADAPQ4] = useState('')
        const [ADAPQ5,setADAPQ5] = useState('')
        const [ADAPQ6,setADAPQ6] = useState('')
        const [ADAPQ7,setADAPQ7] = useState('')
        const [ADAPQ8,setADAPQ8] = useState('')
        const [ADAPQ9,setADAPQ9] = useState('')

        const [APRCVQ1,setAPRCVQ1] = useState('')
        const [APRCVQ2,setAPRCVQ2] = useState('')
        const [APRCVQ3,setAPRCVQ3] = useState('')
        const [APRCVQ4,setAPRCVQ4] = useState('')
        const [APRCVQ5,setAPRCVQ5] = useState('')
        const [APRCVQ6,setAPRCVQ6] = useState('')
        const [APRCVQ7,setAPRCVQ7] = useState('')
        const [APRCVQ8,setAPRCVQ8] = useState('')

        const [APCATQ1,setAPCATQ1] = useState('')
        const [APCATQ2,setAPCATQ2] = useState('')
        const [APCATQ3,setAPCATQ3] = useState('')
        const [APCATQ4,setAPCATQ4] = useState('')
        const [APCATQ5,setAPCATQ5] = useState('')
        const [APCATQ6,setAPCATQ6] = useState('')
        const [APCATQ7,setAPCATQ7] = useState('')
        const [APCATQ8,setAPCATQ8] = useState('')
        const [APCATQ9,setAPCATQ9] = useState('')
        const [APCATQ10,setAPCATQ10] = useState('')
        const [APCATQ11,setAPCATQ11] = useState('')
        const [APCATQ12,setAPCATQ12] = useState('')
        const [APCATQ13,setAPCATQ13] = useState('')
        const [APCATQ14,setAPCATQ14] = useState('')
        const [APCATQ15,setAPCATQ15] = useState('')
        const [APCATQ16,setAPCATQ16] = useState('')
        const [APCATQ17,setAPCATQ17] = useState('')
        const [APCATQ18,setAPCATQ18] = useState('')
        const [APCATQ19,setAPCATQ19] = useState('')
        const [APCATQ20,setAPCATQ20] = useState('')
        const [APCATQ21,setAPCATQ21] = useState('')
        const [APCATQ22,setAPCATQ22] = useState('')
        const [APCATQ23,setAPCATQ23] = useState('')
        const [APCATQ24,setAPCATQ24] = useState('')
        const [APCATQ25,setAPCATQ25] = useState('')
        const [APCATQ26,setAPCATQ26] = useState('')
        const [APCATQ27,setAPCATQ27] = useState('')
        


        // Controle plage
        const [AVCCAQ2,setAVCCAQ2] = useState('')
        const [AVCCAQ1,setAVCCAQ1] = useState('')
        const [AVCCAQ3,setAVCCAQ3] = useState('')
        const [AVCCAQ4,setAVCCAQ4] = useState('')
        const [AVCCAQ5,setAVCCAQ5] = useState('')
        const [AVCCAQ6,setAVCCAQ6] = useState('')
        const [AVCCAQ7,setAVCCAQ7] = useState('')
        const [AVCCAQ8,setAVCCAQ8] = useState('')
        const [AVCCAQ9,setAVCCAQ9] = useState('')
        const [AVCCAQ10,setAVCCAQ10] = useState('')
        const [AVCCAQ11,setAVCCAQ11] = useState('')
        const [AVCCAQ12,setAVCCAQ12] = useState('')
        const [AVCCAQ13,setAVCCAQ13] = useState('')
        const [AVCCAQ14,setAVCCAQ14] = useState('')
        const [AVCCAQ15,setAVCCAQ15] = useState('')
        const [AVCCAQ16,setAVCCAQ16] = useState('')

        const [AVCDPQ1,setAVCDPQ1] = useState('')
        const [AVCDPQ2,setAVCDPQ2] = useState('')
        const [AVCDPQ3,setAVCDPQ3] = useState('')
        const [AVCDPQ4,setAVCDPQ4] = useState('')
        const [AVCDPQ5,setAVCDPQ5] = useState('')
        const [AVCDPQ6,setAVCDPQ6] = useState('')
        const [AVCDPQ7,setAVCDPQ7] = useState('')
        const [AVCDPQ8,setAVCDPQ8] = useState('')
        const [AVCDPQ9,setAVCDPQ9] = useState('')
        const [AVCDPQ10,setAVCDPQ10] = useState('')
        const [AVCDPQ11,setAVCDPQ11] = useState('')

        const [AVHCPQ1,setAVHCPQ1] = useState('')
        const [AVHCPQ2,setAVHCPQ2] = useState('')
        const [AVHCPQ3,setAVHCPQ3] = useState('')
        const [AVHCPQ4,setAVHCPQ4] = useState('')
        const [AVHCPQ5,setAVHCPQ5] = useState('')
        const [AVHCPQ6,setAVHCPQ6] = useState('')

        const [AVCDAQ1,setAVCDAQ1] = useState('')
        const [AVCDAQ2,setAVCDAQ2] = useState('')
        const [AVCDAQ3,setAVCDAQ3] = useState('')
        const [AVCDAQ4,setAVCDAQ4] = useState('')
        const [AVCDAQ5,setAVCDAQ5] = useState('')
        const [AVCDAQ6,setAVCDAQ6] = useState('')
        const [AVCDAQ7,setAVCDAQ7] = useState('')
        const [AVCDAQ8,setAVCDAQ8] = useState('')
        const [AVCDAQ9,setAVCDAQ9] = useState('')
        const [AVCDAQ10,setAVCDAQ10] = useState('')
        const [AVCDAQ11,setAVCDAQ11] = useState('')
        const [AVCDAQ12,setAVCDAQ12] = useState('')

        //Administratif
        const [ADAVQ1,setADAVQ1] = useState('')
        const [ADAVQ2,setADAVQ2] = useState('')
        const [ADAVQ3,setADAVQ3] = useState('')
        const [ADAVQ4,setADAVQ4] = useState('')
        const [ADAVQ5,setADAVQ5] = useState('')
        const [ADAVQ6,setADAVQ6] = useState('')
        
            
    // const [loader, setLoader] = useState(false)
    // mise ouvre
    const [Q1MO,setQ1MO] = useState('')
    const [Q2MO,setQ2MO] = useState('')
    const [Q3MO,setQ3MO] = useState('')
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
    const [Q10,setQ10] = useState('')
    const [Q11,setQ11] = useState('')
    const [Q12,setQ12] = useState('')
    const [Q13,setQ13] = useState('')
    const [Q14,setQ14] = useState('')
    const [Q15,setQ15] = useState('')
    const [Q16,setQ16] = useState('')
    const [Q17,setQ17] = useState('')
    const [Q18,setQ18] = useState('')
    const [Q19,setQ19] = useState('')


// Air-Air
    const [AAmarqu1e,setAAmarqu1e] = useState('')
    const [AAreferenc1e,setAAreferenc1e] = useState('')
    const [AAnomberuni1t1,setAAnomberuni1t1] = useState('')
    const [AAnomberuni1t2,setAAnomberuni1t2] = useState('')
    const [AApuissancenomina1l,setAApuissancenomina1l] = useState('')
    const [AACO1P,setAACO1P] = useState('')

    const [AAmarqu2e,setAAmarqu2e] = useState('')
    const [AAreferenc2e,setAAreferenc2e] = useState('')
    const [AAnomberuni2t1,setAAnomberuni2t1] = useState('')
    const [AAnomberuni2t2,setAAnomberuni2t2] = useState('')
    const [AApuissancenomina2l,setAApuissancenomina2l] = useState('')
    const [AACO2P,setAACO2P] = useState('')

    const [AAmarqu3e,setAAmarqu3e] = useState('')
    const [AAreferenc3e,setAAreferenc3e] = useState('')
    const [AAnomberuni3t1,setAAnomberuni3t1] = useState('')
    const [AAnomberuni3t2,setAAnomberuni3t2] = useState('')
    const [AApuissancenomina3l,setAApuissancenomina3l] = useState('')
    const [AACO3P,setAACO3P] = useState('')

    const [AAmarqu4e,setAAmarqu4e] = useState('')
    const [AAreferenc4e,setAAreferenc4e] = useState('')
    const [AAnomberuni4t1,setAAnomberuni4t1] = useState('')
    const [AAnomberuni4t2,setAAnomberuni4t2] = useState('')
    const [AApuissancenomina4l,setAApuissancenomina4l] = useState('')
    const [AACO4P,setAACO4P] = useState('')

    const [AAmarqu5e,setAAmarqu5e] = useState('')
    const [AAreferenc5e,setAAreferenc5e] = useState('')
    const [AAnomberuni5t1,setAAnomberuni5t1] = useState('')
    const [AAnomberuni5t2,setAAnomberuni5t2] = useState('')
    const [AApuissancenomina5l,setAApuissancenomina5l] = useState('')
    const [AACO5P,setAACO5P] = useState('')

    const [AAQ1,setAAQ1] = useState('')
    const [AA1Q1,setAA1Q1] = useState('')
    const [AAQ2,setAAQ2] = useState('')
    const [AAQ3,setAAQ3] = useState('')
    const [AAQ4,setAAQ4] = useState('')
    const [AAQ5,setAAQ5] = useState('')
    const [AAQ6,setAAQ6] = useState('')
    const [AAQ7,setAAQ7] = useState('')
    const [AAQ8,setAAQ8] = useState('')
    const [AAQ9,setAAQ9] = useState('')
    const [AAQ10,setAAQ10] = useState('')
    const [AAQ11,setAAQ11] = useState('')
    const [AAQ12,setAAQ12] = useState('')
    const [AAQ13,setAAQ13] = useState('')
    const [AAQ14,setAAQ14] = useState('')
    const [AAQ15,setAAQ15] = useState('')
    const [AAQ16,setAAQ16] = useState('')
    const [AAQ17,setAAQ17] = useState('')



// Air-Eau
const [AEmarqu1e,setAEmarqu1e] = useState('')
const [AEreferenc1e,setAEreferenc1e] = useState('')
const [AEnomberuni1t1,setAEnomberuni1t1] = useState('')
const [AEnomberuni1t2,setAEnomberuni1t2] = useState('')
const [AEpuissancenomina1l,setAEpuissancenomina1l] = useState('')
const [AECO1P,setAECO1P] = useState('')

const [AEmarqu2e,setAEmarqu2e] = useState('')
const [AEreferenc2e,setAEreferenc2e] = useState('')
const [AEnomberuni2t1,setAEnomberuni2t1] = useState('')
const [AEnomberuni2t2,setAEnomberuni2t2] = useState('')
const [AEpuissancenomina2l,setAEpuissancenomina2l] = useState('')
const [AECO2P,setAECO2P] = useState('')

const [AEmarqu3e,setAEmarqu3e] = useState('')
const [AEreferenc3e,setAEreferenc3e] = useState('')
const [AEnomberuni3t1,setAEnomberuni3t1] = useState('')
const [AEnomberuni3t2,setAEnomberuni3t2] = useState('')
const [AEpuissancenomina3l,setAEpuissancenomina3l] = useState('')
const [AECO3P,setAECO3P] = useState('')

const [AEmarqu4e,setAEmarqu4e] = useState('')
const [AEreferenc4e,setAEreferenc4e] = useState('')
const [AEnomberuni4t1,setAEnomberuni4t1] = useState('')
const [AEnomberuni4t2,setAEnomberuni4t2] = useState('')
const [AEpuissancenomina4l,setAEpuissancenomina4l] = useState('')
const [AECO4P,setAECO4P] = useState('')

const [AEmarqu5e,setAEmarqu5e] = useState('')
const [AEreferenc5e,setAEreferenc5e] = useState('')
const [AEnomberuni5t1,setAEnomberuni5t1] = useState('')
const [AEnomberuni5t2,setAEnomberuni5t2] = useState('')
const [AEpuissancenomina5l,setAEpuissancenomina5l] = useState('')
const [AECO5P,setAECO5P] = useState('')

const [AEQ1,setAEQ1] = useState('')
const [AE1Q1,setAE1Q1] = useState('')
const [AEQ2,setAEQ2] = useState('')
const [AEQ3,setAEQ3] = useState('')
const [AEQ4,setAEQ4] = useState('')
const [AEQ5,setAEQ5] = useState('')
const [AEQ6,setAEQ6] = useState('')
const [AEQ7,setAEQ7] = useState('')
const [AEQ8,setAEQ8] = useState('')
const [AEQ9,setAEQ9] = useState('')
const [AEQ10,setAEQ10] = useState('')
const [AEQ11,setAEQ11] = useState('')
const [AEQ12,setAEQ12] = useState('')

//CET

const [CETQ1,setCETQ1] = useState('')
const [CETQ2,setCETQ2] = useState('')
const [CETQ3,setCETQ3] = useState('')
const [CETQ4,setCETQ4] = useState('')
const [CETQ5,setCETQ5] = useState('')
const [CETQ6,setCETQ6] = useState('')
const [CETQ7,setCETQ7] = useState('')
const [CETQ8,setCETQ8] = useState('')
const [CETQ9,setCETQ9] = useState('')
const [CETQ10,setCETQ10] = useState('')
const [CETQ11,setCETQ11] = useState('')
const [CETQ12,setCETQ12] = useState('')
const [CETQ13,setCETQ13] = useState('')
const [CETQ14,setCETQ14] = useState('')


//IC

const [ICQQ1,setICQQ1] = useState('')
const [ICQQ2,setICQQ2] = useState('')
const [ICQQ3,setICQQ3] = useState('')
const [ICQQ4,setICQQ4] = useState('')
const [ICQQ5,setICQQ5] = useState('')
const [ICQQ6,setICQQ6] = useState('')
const [ICQQ7,setICQQ7] = useState('')
const [ICQQ8,setICQQ8] = useState('')
const [ICQQ9,setICQQ9] = useState('')
const [ICQQ10,setICQQ10] = useState('')
const [ICQQ11,setICQQ11] = useState('')
const [ICQQ12,setICQQ12] = useState('')
const [ICQQ13,setICQQ13] = useState('')

const [ICQQ15,setICQQ15] = useState('')
const [ICQQ16,setICQQ16] = useState('')
const [ICQQ17,setICQQ17] = useState('')
const [ICQQ18,setICQQ18] = useState('')
const [ICQQ19,setICQQ19] = useState('')
const [ICQQ20,setICQQ20] = useState('')
const [ICQQ21,setICQQ21] = useState('')
const [ICQQ22,setICQQ22] = useState('')
const [ICQQ23,setICQQ23] = useState('')
const [ICQQ24,setICQQ24] = useState('')




    const [CET1,setCET1] = useState('')


    const [email,setEmail] = useState('')

    const [imagesBase64CET, setImagesBase64CET] = useState([]);
    const [imagesBase64AE, setImagesBase64AE] = useState([]);
    const [imagesBase64AA, setImagesBase64AA] = useState([]);
    const [imagesBase64IC, setImagesBase64IC] = useState([]);
    const [imagesBase64MO, setImagesBase64MO] = useState([]);

    const handleImageUploadMO = (e) => {
      const files = Array.from(e.target.files); // Get all selected files
      const newImagesBase64MO = [];

      files.forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
              newImagesBase64MO.push(reader.result); // Store base64 string of each image
              setImagesBase64MO((prevState) => [...prevState, reader.result]); // Add to state
          };
          reader.readAsDataURL(file); // Convert each file to base64
      });
  };

    const handleImageUploadIC = (e) => {
      const files = Array.from(e.target.files); // Get all selected files
      const newImagesBase64IC = [];

      files.forEach((file) => {
          const reader = new FileReader();
          reader.onloadend = () => {
              newImagesBase64IC.push(reader.result); // Store base64 string of each image
              setImagesBase64IC((prevState) => [...prevState, reader.result]); // Add to state
          };
          reader.readAsDataURL(file); // Convert each file to base64
      });
  };

      // Handle image upload and conversion to base64 string
      const handleImageUploadAA = (e) => {
        const files = Array.from(e.target.files); // Get all selected files
        const newImagesBase64AA = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newImagesBase64AA.push(reader.result); // Store base64 string of each image
                setImagesBase64AA((prevState) => [...prevState, reader.result]); // Add to state
            };
            reader.readAsDataURL(file); // Convert each file to base64
        });
    };


      const handleImageUploadAE = (e) => {
        const files = Array.from(e.target.files); // Get all selected files
        const newImagesBase64AE = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newImagesBase64AE.push(reader.result); // Store base64 string of each image
                setImagesBase64AE((prevState) => [...prevState, reader.result]); // Add to state
            };
            reader.readAsDataURL(file); // Convert each file to base64
        });
    };
      
      const handleImageUpload = (e) => {
        const files = Array.from(e.target.files); // Get all selected files
        const newImagesBase64CET = [];

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                newImagesBase64CET.push(reader.result); // Store base64 string of each image
                setImagesBase64CET((prevState) => [...prevState, reader.result]); // Add to state
            };
            reader.readAsDataURL(file); // Convert each file to base64
        });
    };

    
    const submit = async (e) => {
        e.preventDefault();
        const data = {APCATQ1, APCATQ2, APCATQ3, APCATQ4, APCATQ5, APCATQ6, APCATQ7, APCATQ8, APCATQ9, APCATQ10, APCATQ11, APCATQ12, APCATQ13, APCATQ14, APCATQ15, APCATQ16, APCATQ17, APCATQ18, APCATQ19, APCATQ20, APCATQ21, APCATQ22, APCATQ23, APCATQ24, APCATQ25, APCATQ26, APCATQ27, APRCVQ1, APRCVQ2, APRCVQ3, APRCVQ4, APRCVQ5, APRCVQ6, APRCVQ7, APRCVQ8, ADAPQ1, ADAPQ2, ADAPQ3, ADAPQ4, ADAPQ5, ADAPQ6, ADAPQ7, ADAPQ8, ADAPQ9, APCATQ000, PGAPQ1, PGAPQ2, PGAPQ3, PGAPQq3, ADAVQ1,ADAVQ2,ADAVQ3,ADAVQ4,ADAVQ5,ADAVQ6, AVCDAQ1,AVCDAQ2,AVCDAQ3,AVCDAQ4,AVCDAQ5,AVCDAQ6,AVCDAQ7,AVCDAQ8,AVCDAQ9,AVCDAQ10,AVCDAQ11, AVCDAQ12, AVHCPQ1,AVHCPQ2,AVHCPQ3,AVHCPQ4,AVHCPQ5, AVHCPQ6, AVCDPQ1,AVCDPQ2,AVCDPQ3,AVCDPQ4,AVCDPQ5,AVCDPQ6,AVCDPQ7,AVCDPQ8,AVCDPQ9,AVCDPQ10,AVCDPQ11, AVCCAQ1, AVCCAQ2, AVCCAQ3, AVCCAQ4, AVCCAQ5, AVCCAQ6, AVCCAQ7,AVCCAQ8, AVCCAQ15, AVCCAQ16 ,AVCCAQ9,AVCCAQ10,AVCCAQ11,AVCCAQ12, AVCCAQ13,AVCCAQ14, createdAt, clientName, chantierSirenDO, chantierAdresseDO, chantierNomDO, chantierEmail, chantierPhone, chantierVille, chantierCodePostal, chantierAdresse, benefPreNom, benefNom, operationName, imagesBase64MO, imagesBase64IC, imagesBase64AA, imagesBase64AE ,imagesBase64CET  ,Q1MO, Q2MO, Q3MO, Q4MO, Q5MO, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, CET1, AAmarqu1e, AAreferenc1e, AAnomberuni1t1, AAnomberuni1t2, AApuissancenomina1l, AACO1P, AAmarqu2e, AAreferenc2e, AAnomberuni2t1, AAnomberuni2t2, AApuissancenomina2l, AACO2P, AAmarqu3e, AAreferenc3e, AAnomberuni3t1, AAnomberuni3t2, AApuissancenomina3l, AACO3P, AAmarqu4e, AAreferenc4e, AAnomberuni4t1, AAnomberuni4t2, AApuissancenomina4l, AACO4P, AAmarqu5e, AAreferenc5e, AAnomberuni5t1, AAnomberuni5t2, AApuissancenomina5l, AACO5P, AA1Q1, AAQ1, AAQ2, AAQ3, AAQ4, AAQ5, AAQ6, AAQ7, AAQ8, AAQ9, AAQ10, AAQ11, AAQ12, AAQ13, AAQ14, AAQ15, AAQ16, AAQ17, AEmarqu1e, AEreferenc1e, AEnomberuni1t1, AEnomberuni1t2, AEpuissancenomina1l, AECO1P, AEmarqu2e, AEreferenc2e, AEnomberuni2t1, AEnomberuni2t2, AEpuissancenomina2l, AECO2P, AEmarqu3e, AEreferenc3e, AEnomberuni3t1, AEnomberuni3t2, AEpuissancenomina3l, AECO3P, AEmarqu4e, AEreferenc4e, AEnomberuni4t1, AEnomberuni4t2, AEpuissancenomina4l, AECO4P, AEmarqu5e, AEreferenc5e, AEnomberuni5t1, AEnomberuni5t2, AEpuissancenomina5l, AECO5P, AE1Q1, AEQ1, AEQ2, AEQ3, AEQ4, AEQ5, AEQ6, AEQ7, AEQ8, AEQ9, AEQ10, AEQ11, AEQ12, CETQ1, CETQ2, CETQ3, CETQ4, CETQ5, CETQ6, CETQ7, CETQ8, CETQ9, CETQ10, CETQ11, CETQ12, CETQ13, CETQ14, ICQQ1, ICQQ2, ICQQ3, ICQQ4, ICQQ5, ICQQ6, ICQQ7, ICQQ8, ICQQ9, ICQQ10, ICQQ11, ICQQ12, ICQQ13,  ICQQ15, ICQQ16, ICQQ17, ICQQ18, ICQQ19, ICQQ20, ICQQ21, ICQQ22, ICQQ23, ICQQ24, email}

        await axios.post(`${base_url}/api/createPdfAp`, data)
            .then(() =>
                axios.get(`${base_url}/api/fetchPdfAp`, { responseType: 'blob' })
                    .then((res) => {
                        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
                        saveAs(pdfBlob, `Rapport_Inspection_BAR-TH-145_après_travaux_${benefPreNom}_${benefNom}_${chantierAdresse}.pdf`);
                        setImagesBase64CET([]);
                        setImagesBase64AE([]);
                        setImagesBase64AA([]);
                        setImagesBase64IC([]);
                        setImagesBase64MO([]);

                       

                        setPGAPQ1('');
                        setPGAPQ2('');
                        setPGAPQ3('');
                        setPGAPQq3('');

                        setAPCATQ000('');

                        setADAPQ1('');
                        setADAPQ2('');
                        setADAPQ3('');
                        setADAPQ4('');
                        setADAPQ5('');
                        setADAPQ6('');
                        setADAPQ7('');
                        setADAPQ8('');
                        setADAPQ9('');

                        setAPRCVQ1('');
                        setAPRCVQ2('');
                        setAPRCVQ3('');
                        setAPRCVQ4('');
                        setAPRCVQ5('');
                        setAPRCVQ6('');
                        setAPRCVQ7('');
                        setAPRCVQ8('');

                        setAPCATQ1('');
                        setAPCATQ2('');
                        setAPCATQ3('');
                        setAPCATQ4('');
                        setAPCATQ5('');
                        setAPCATQ6('');
                        setAPCATQ7('');
                        setAPCATQ8('');
                        setAPCATQ9('');
                        setAPCATQ10('');
                        setAPCATQ11('');
                        setAPCATQ12('');
                        setAPCATQ13('');
                        setAPCATQ14('');
                        setAPCATQ15('');
                        setAPCATQ16('');
                        setAPCATQ17('');
                        setAPCATQ18('');
                        setAPCATQ19('');
                        setAPCATQ20('');
                        setAPCATQ21('');
                        setAPCATQ22('');
                        setAPCATQ23('');
                        setAPCATQ24('');
                        setAPCATQ25('');
                        setAPCATQ26('');
                        setAPCATQ27('');

                        setAVCCAQ1('');
                        setAVCCAQ2('');
                        setAVCCAQ3('');
                        setAVCCAQ4('');
                        setAVCCAQ5('');
                        setAVCCAQ6('');
                        setAVCCAQ7('');
                        setAVCCAQ8('');
                        setAVCCAQ9('');
                        setAVCCAQ10('');
                        setAVCCAQ11('');
                        setAVCCAQ12('');
                        setAVCCAQ13('');
                        setAVCCAQ14('');
                        setAVCCAQ15('');
                        setAVCCAQ16('');

                        setAVCDPQ1('');
                        setAVCDPQ2('');
                        setAVCDPQ3('');
                        setAVCDPQ4('');
                        setAVCDPQ5('');
                        setAVCDPQ6('');
                        setAVCDPQ7('');
                        setAVCDPQ8('');
                        setAVCDPQ9('');
                        setAVCDPQ10('');
                        setAVCDPQ11('');

                        setAVHCPQ1('');
                        setAVHCPQ2('');
                        setAVHCPQ3('');
                        setAVHCPQ4('');
                        setAVHCPQ5('');
                        setAVHCPQ6('');

                        setAVCDAQ1('');
                        setAVCDAQ2('');
                        setAVCDAQ3('');
                        setAVCDAQ4('');
                        setAVCDAQ5('');
                        setAVCDAQ6('');
                        setAVCDAQ7('');
                        setAVCDAQ8('');
                        setAVCDAQ9('');
                        setAVCDAQ10('');
                        setAVCDAQ11('');
                        setAVCDAQ12('');

                        setADAVQ1('');
                        setADAVQ2('');
                        setADAVQ3('');
                        setADAVQ4('');
                        setADAVQ5('');
                        setADAVQ6('');
                        

    
                        setOperationName(data?.chantiers?.operationName)
                        setbenefNom(data?.chantiers?.benefNom)
                        setbenefPreNom(data?.chantiers?.benefPreNom)
                        setchantierAdresse(data?.chantiers?.chantierAdresse)
                        setchantierCodePostal(data?.chantiers?.chantierCodePostal)
                        setchantierVille(data?.chantiers?.chantierVille)
                        setchantierPhone(data?.chantiers?.chantierPhone)
                        setchantierEmail(data?.chantiers?.chantierEmail)
                        setchantierNomDO(data?.chantiers?.chantierNomDO)
                        setchantierAdresseDO(data?.chantiers?.chantierAdresseDO)
                        setchantierSirenDO(data?.chantiers?.chantierSirenDO)
                        setclientName(data?.chantiers?.clientName)
                        setcreatedAt(data?.chantiers?.createdAt)

                        setQ1MO('');
                        setQ2MO('');
                        setQ3MO('');
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
                        setQ10('');
                        setQ11('');
                        setQ12('');
                        setQ13('');
                        setQ14('');
                        setQ15('');
                        setQ16('');
                        setQ17('');
                        setQ18('');
                        setQ19('');

                        //air-air
                        setAAmarqu1e('');
                        setAAreferenc1e('');
                        setAAnomberuni1t1('');
                        setAAnomberuni1t2('');
                        setAApuissancenomina1l('');
                        setAACO1P('');
                        setAAmarqu2e('');
                        setAAreferenc2e('');
                        setAAnomberuni2t1('');
                        setAAnomberuni2t2('');
                        setAApuissancenomina2l('');
                        setAACO2P('');
                        setAAmarqu3e('');
                        setAAreferenc3e('');
                        setAAnomberuni3t1('');
                        setAAnomberuni3t2('');
                        setAApuissancenomina3l('');
                        setAACO3P('');
                        setAAmarqu4e('');
                        setAAreferenc4e('');
                        setAAnomberuni4t1('');
                        setAAnomberuni4t2('');
                        setAApuissancenomina4l('');
                        setAACO4P('');
                        setAAmarqu5e('');
                        setAAreferenc5e('');
                        setAAnomberuni5t1('');
                        setAAnomberuni5t2('');
                        setAApuissancenomina5l('');
                        setAACO5P('');

                        setAAQ1('');
                        setAAQ2('');
                        setAAQ3('');
                        setAAQ4('');
                        setAAQ5('');
                        setAAQ6('');
                        setAAQ7('');
                        setAAQ8('');
                        setAAQ9('');
                        setAAQ10('');
                        setAAQ11('');
                        setAAQ12('');
                        setAAQ13('');
                        setAAQ14('');
                        setAAQ15('');
                        setAAQ16('');
                        setAAQ17('');

                        // Air/Eau

                        //air-air
                        setAEmarqu1e('');
                        setAEreferenc1e('');
                        setAEnomberuni1t1('');
                        setAEnomberuni1t2('');
                        setAEpuissancenomina1l('');
                        setAECO1P('');
                        setAEmarqu2e('');
                        setAEreferenc2e('');
                        setAEnomberuni2t1('');
                        setAEnomberuni2t2('');
                        setAEpuissancenomina2l('');
                        setAECO2P('');
                        setAEmarqu3e('');
                        setAEreferenc3e('');
                        setAEnomberuni3t1('');
                        setAEnomberuni3t2('');
                        setAEpuissancenomina3l('');
                        setAECO3P('');
                        setAEmarqu4e('');
                        setAEreferenc4e('');
                        setAEnomberuni4t1('');
                        setAEnomberuni4t2('');
                        setAEpuissancenomina4l('');
                        setAECO4P('');
                        setAEmarqu5e('');
                        setAEreferenc5e('');
                        setAEnomberuni5t1('');
                        setAEnomberuni5t2('');
                        setAEpuissancenomina5l('');
                        setAECO5P('');

                        setAE1Q1('');
                        setAEQ1('');
                        setAEQ2('');
                        setAEQ3('');
                        setAEQ4('');
                        setAEQ5('');
                        setAEQ6('');
                        setAEQ7('');
                        setAEQ8('');
                        setAEQ9('');
                        setAEQ10('');
                        setAEQ11('');
                        setAEQ12('');

                        // CET

                        setCETQ1('');
                        setCETQ2('');
                        setCETQ3('');
                        setCETQ4('');
                        setCETQ5('');
                        setCETQ6('');
                        setCETQ7('');
                        setCETQ8('');
                        setCETQ9('');
                        setCETQ10('');
                        setCETQ11('');
                        setCETQ12('');
                        setCETQ13('');
                        setCETQ14('');

                        // IC
                        setICQQ1('');
                        setICQQ2('');
                        setICQQ3('');
                        setICQQ4('');
                        setICQQ5('');
                        setICQQ6('');
                        setICQQ7('');
                        setICQQ8('');
                        setICQQ9('');
                        setICQQ10('');
                        setICQQ11('');
                        setICQQ12('');
                        setICQQ13('');
                      
                        setICQQ15('');
                        setICQQ16('');
                        setICQQ17('');
                        setICQQ18('');
                        setICQQ19('');
                        setICQQ20('');
                        setICQQ21('');
                        setICQQ22('');
                        setICQQ23('');
                        setICQQ24('');
                        
                        



                        setCET1('');
                        setEmail('');
                    })
                    .then(() => 
                        axios.post(`${base_url}/api/sendPdfAP`, {email})
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
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Formulaire: Rapport d'inspection sur le lieu d'opération BAR-TH-145
        Selon fiche BAR-TH-145 "Après"</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/chantiers'>Chantiers</Link>
      </div>
      <div className='p-4'>
        <form onSubmit={submit}>
        <div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Photo bâtiment</h4>
</div>
        <label
  htmlFor="imgMO"
  className="w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
>
  <div className="flex justify-center items-center flex-col gap-y-2">
    <span className="text-2xl">
      <MdCloudUpload />
    </span>
    <span>Select Images</span>
  </div>
</label>

<input
  type="file"
  id="imgMO"
  className="hidden"
  onChange={handleImageUploadMO}
  multiple
/>

{/* Display image previews */}
{imagesBase64MO.length > 0 && (
  <div className="mt-4 flex justify-center items-center flex-wrap gap-4">
    {imagesBase64MO.map((imgBase64MO, index) => (
      <div className="image-container" key={index}>
        <img
          src={imgBase64MO}
          alt={`Image preview ${index + 1}`}
          className="w-20 h-20 object-cover rounded-md"
          style={{ marginTop: '10px', marginLeft: '20px' }}
        />
      </div>
    ))}
  </div>
)}

{/* Page garde */}
<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Page de Garde Information</h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">Réponse</th>
      </tr>
    </thead>
    <tbody>

    

      
      
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Numéro de dossier :
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="PGAPQ1"
            value={PGAPQ1}
            onChange={(e)=>setPGAPQ1(e.target.value)}
            id="PGAPQ1"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Référence demandeur:
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="PGAPQ2"
            value={PGAPQ2}
            onChange={(e)=>setPGAPQ2(e.target.value)}
            id="PGAPQ2"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Date de visite
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="PGAPQ3"
            value={PGAPQ3}
            onChange={(e)=>setPGAPQ3(e.target.value)}
            id="PGAPQ3"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Date saisie rapport
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="PGAPQq3"
            value={PGAPQq3}
            onChange={(e)=>setPGAPQq3(e.target.value)}
            id="PGAPQq3"
            placeholder='...'
          /></div>
      </tr>
     
    
      
      
    </tbody>
  </table>
</div>

{/* Administratif */}

<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Administratif</h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Entreprise ayant effectué
l'étude énergéque:
 Question</th>
        <th className="border border-gray-300 px-4 py-2">Réponse</th>
      </tr>
    </thead>
    <tbody>

    

      
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Nom :
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ1"
            value={ADAPQ1}
            onChange={(e)=>setADAPQ1(e.target.value)}
            id="ADAPQ1"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Siret : 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ2"
            value={ADAPQ2}
            onChange={(e)=>setADAPQ2(e.target.value)}
            id="ADAPQ2"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Référence de l'étude énergéque (RGE étude) : 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ3"
            value={ADAPQ3}
            onChange={(e)=>setADAPQ3(e.target.value)}
            id="ADAPQ3"
            placeholder='...'
          /></div>
      </tr>
           
    </tbody>
  </table>

  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Professionnel ayant réalisé les travaux :
 Question</th>
        <th className="border border-gray-300 px-4 py-2">Réponse</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Raison sociale :
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ4"
            value={ADAPQ4}
            onChange={(e)=>setADAPQ4(e.target.value)}
            id="ADAPQ4"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Siret : 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ5"
            value={ADAPQ5}
            onChange={(e)=>setADAPQ5(e.target.value)}
            id="ADAPQ5"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Domaine de travaux réalisés: 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ6"
            value={ADAPQ6}
            onChange={(e)=>setADAPQ6(e.target.value)}
            id="ADAPQ6"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Référence de la qualification ou certification: 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ7"
            value={ADAPQ7}
            onChange={(e)=>setADAPQ7(e.target.value)}
            id="ADAPQ7"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Nom du représentant: 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ8"
            value={ADAPQ8}
            onChange={(e)=>setADAPQ8(e.target.value)}
            id="ADAPQ8"
            placeholder='...'
          /></div>
      </tr>
           
    </tbody>
  </table>

  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Inspecteur</th>
        <th className="border border-gray-300 px-4 py-2">Réponse</th>
      </tr>
    </thead>
    <tbody> 
      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Nom, Prénom : 
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="ADAPQ9"
            value={ADAPQ9}
            onChange={(e)=>setADAPQ9(e.target.value)}
            id="ADAPQ9"
            placeholder='...'
          /></div>
      </tr> 
           
    </tbody>
  </table>
</div>


{/*RESULTAT DU CONSTAT VISUEL*/}


<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>RESULTAT DU CONSTAT VISUEL</h4>
</div><br></br>
<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h5>Documentation client / maître d'œuvre</h5>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">OUI</th>
        <th className="border border-gray-300 px-4 py-2">NON</th>
      </tr>
    </thead>
    <tbody>

    <tr>
        <td className="border border-gray-300 px-4 py-2">
        Document matérialisant l'engagement de l'opération (devis signé…):
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APRCVQ1oui"
            type="radio"
            name="APRCVQ1"
            value="Oui"
            checked={APRCVQ1 === "Oui"}
            onChange={(e) => setAPRCVQ1(e.target.value)}
          />
          <label for="APRCVQ1oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APRCVQ1non'
            type="radio"
            name="APRCVQ1"
            value="NON"
            checked={APRCVQ1 === "NON"}
            onChange={(e) => setAPRCVQ1(e.target.value)}
          />
          <label for="APRCVQ1non">Non</label>
          </td>
      </tr>

      

      
      <tr>
        <td className="border border-gray-300 px-4 py-2">Date d’engagement de l'opération :
(ex : date d’acceptation du devis)</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APRCVQ2"
            value={APRCVQ2}
            onChange={(e)=>setAPRCVQ2(e.target.value)}
            id="APRCVQ2"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Document prouvant la réalisation de
l’opération (facture destravaux, PV de
réception, etc) remis au bénéficiaire :</td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APRCVQ1oui"
            type="radio"
            name="APRCVQ3"
            value="Oui"
            checked={APRCVQ3 === "Oui"}
            onChange={(e) => setAPRCVQ3(e.target.value)}
          />
          <label for="APRCVQ3oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APRCVQ3non'
            type="radio"
            name="APRCVQ3"
            value="NON"
            checked={APRCVQ3 === "NON"}
            onChange={(e) => setAPRCVQ3(e.target.value)}
          />
          <label for="APRCVQ3non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Date de preuve de réalisation de l’opération :
        (ex : date de la facture)</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APRCVQ4"
            value={APRCVQ4}
            onChange={(e)=>setAPRCVQ4(e.target.value)}
            id="APRCVQ4"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Référence de la facture :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APRCVQ5"
            value={APRCVQ5}
            onChange={(e)=>setAPRCVQ5(e.target.value)}
            id="APRCVQ5"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Cadre contribution remis au bénéficiaire</td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APRCVQ6oui"
            type="radio"
            name="APRCVQ6"
            value="Oui"
            checked={APRCVQ6 === "Oui"}
            onChange={(e) => setAPRCVQ6(e.target.value)}
          />
          <label for="APRCVQ6oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APRCVQ6non'
            type="radio"
            name="APRCVQ6"
            value="NON"
            checked={APRCVQ6 === "NON"}
            onChange={(e) => setAPRCVQ6(e.target.value)}
          />
          <label for="APRCVQ6non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Commentaires:
        </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APRCVQ7"
            value={APRCVQ7}
            onChange={(e)=>setAPRCVQ7(e.target.value)}
            id="APRCVQ7"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Maison individuelle existant depuis plus de 2 ans
        à la date d'engagement de l'opération</td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APRCVQ8oui"
            type="radio"
            name="APRCVQ8"
            value="Oui"
            checked={APRCVQ8 === "Oui"}
            onChange={(e) => setAPRCVQ8(e.target.value)}
          />
          <label for="APRCVQ8oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APRCVQ8non'
            type="radio"
            name="APRCVQ8"
            value="NON"
            checked={APRCVQ8 === "NON"}
            onChange={(e) => setAPRCVQ8(e.target.value)}
          />
          <label for="APRCVQ8non">Non</label>
          </td>
      </tr>
  
    </tbody>
  </table>
</div>


{/* Contrôle à l'achevement des travaux  */}

<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Contrôle à l'achevement des travaux</h4>
</div>
<div className="overflow-x-auto">
  <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-gray-600">
    <thead>
      <tr>
        <th className="border border-gray-300 px-4 py-2">Question</th>
        <th className="border border-gray-300 px-4 py-2">OUI</th>
        <th className="border border-gray-300 px-4 py-2">NON</th>
      </tr>
    </thead>
    <tbody>

    <tr>
        <td className="border border-gray-300 px-4 py-2">Travaux réalisés
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ1oui"
            type="radio"
            name="APCATQ1"
            value="Oui"
            checked={APCATQ1 === "Oui"}
            onChange={(e) => setAPCATQ1(e.target.value)}
          />
          <label for="APCATQ1oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ1non'
            type="radio"
            name="APCATQ1"
            value="NON"
            checked={APCATQ1 === "NON"}
            onChange={(e) => setAPCATQ1(e.target.value)}
          />
          <label for="APCATQ1non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Chantier accessible
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ2oui"
            type="radio"
            name="APCATQ2"
            value="Oui"
            checked={APCATQ2 === "Oui"}
            onChange={(e) => setAPCATQ2(e.target.value)}
          />
          <label for="APCATQ2oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ2non'
            type="radio"
            name="APCATQ2"
            value="NON"
            checked={APCATQ2 === "NON"}
            onChange={(e) => setAPCATQ2(e.target.value)}
          />
          <label for="APCATQ2non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Date de l'étude énergétique:</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ3"
            value={APCATQ3}
            onChange={(e)=>setAPCATQ3(e.target.value)}
            id="APCATQ3"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Référence de l'étude énergétique:</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ4"
            value={APCATQ4}
            onChange={(e)=>setAPCATQ4(e.target.value)}
            id="APCATQ4"
            placeholder='...'
          /></div>
      </tr>

    <tr>
        <td className="border border-gray-300 px-4 py-2">Le contrôle de l'audit énergétique a donné lieu à un avis satisfaisant
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ5oui"
            type="radio"
            name="APCATQ5"
            value="Oui"
            checked={APCATQ5 === "Oui"}
            onChange={(e) => setAPCATQ5(e.target.value)}
          />
          <label for="APCATQ5oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ5non'
            type="radio"
            name="APCATQ5"
            value="NON"
            checked={APCATQ5 === "NON"}
            onChange={(e) => setAPCATQ5(e.target.value)}
          />
          <label for="APCATQ5non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Coup de pouce
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ6oui"
            type="radio"
            name="APCATQ6"
            value="Oui"
            checked={APCATQ6 === "Oui"}
            onChange={(e) => setAPCATQ6(e.target.value)}
          />
          <label for="APCATQ6oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ6non'
            type="radio"
            name="APCATQ6"
            value="NON"
            checked={APCATQ6 === "NON"}
            onChange={(e) => setAPCATQ6(e.target.value)}
          />
          <label for="APCATQ6non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Scénarios de travaux choisis:</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ7"
            value={APCATQ7}
            onChange={(e)=>setAPCATQ7(e.target.value)}
            id="APCATQ7"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Geste 1 mis en place :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ8"
            value={APCATQ8}
            onChange={(e)=>setAPCATQ8(e.target.value)}
            id="APCATQ8"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Geste 2 mis en place :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ9"
            value={APCATQ9}
            onChange={(e)=>setAPCATQ9(e.target.value)}
            id="APCATQ9"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Geste 3 mis en place :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ10"
            value={APCATQ10}
            onChange={(e)=>setAPCATQ10(e.target.value)}
            id="APCATQ10"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Geste 4 mis en place :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ11"
            value={APCATQ11}
            onChange={(e)=>setAPCATQ11(e.target.value)}
            id="APCATQ11"
            placeholder='...'
          /></div>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Geste 5 mis en place :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ12"
            value={APCATQ12}
            onChange={(e)=>setAPCATQ12(e.target.value)}
            id="APCATQ12"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">En cas de CDP, les travaux réalisésfont partie des scénarios de travaux de
        l'audit énergétique éligibles au CDP
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ13oui"
            type="radio"
            name="APCATQ13"
            value="Oui"
            checked={APCATQ13 === "Oui"}
            onChange={(e) => setAPCATQ13(e.target.value)}
          />
          <label for="APCATQ13oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ13non'
            type="radio"
            name="APCATQ13"
            value="NON"
            checked={APCATQ13 === "NON"}
            onChange={(e) => setAPCATQ13(e.target.value)}
          />
          <label for="APCATQ13non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Hors CDP, lestravaux réalisésfont partie desscénarios de travaux de l'audit
        énergétique respectant les critères des fiches BAR TH-164</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ14"
            value={APCATQ14}
            onChange={(e)=>setAPCATQ14(e.target.value)}
            id="APCATQ14"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Cep initial (kWh/m²/an) :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ15"
            value={APCATQ15}
            onChange={(e)=>setAPCATQ15(e.target.value)}
            id="APCATQ15"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Cep projet (kWh/m²/an) :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ16"
            value={APCATQ16}
            onChange={(e)=>setAPCATQ16(e.target.value)}
            id="APCATQ16"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Cef initial (kWh/m²/an) :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ17"
            value={APCATQ17}
            onChange={(e)=>setAPCATQ17(e.target.value)}
            id="APCATQ17"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Cef projet (kWh/m²/an) :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ18"
            value={APCATQ18}
            onChange={(e)=>setAPCATQ18(e.target.value)}
            id="APCATQ18"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Gain énergétique du projet par rapport à la consommation conventionnelle en
        énergie primaire avant travaux :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ19"
            value={APCATQ19}
            onChange={(e)=>setAPCATQ19(e.target.value)}
            id="APCATQ19"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Les émissions de gaz à effet de serre après rénovation, exprimées en kgeq
CO2/m²/an,sont inférieures ou égales à la valeur initiale de ces émissions
avant travaux :
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ20oui"
            type="radio"
            name="APCATQ20"
            value="Oui"
            checked={APCATQ20 === "Oui"}
            onChange={(e) => setAPCATQ20(e.target.value)}
          />
          <label for="APCATQ20oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ20non'
            type="radio"
            name="APCATQ20"
            value="NON"
            checked={APCATQ20 === "NON"}
            onChange={(e) => setAPCATQ20(e.target.value)}
          />
          <label for="APCATQ20non">Non</label>
          </td>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">
        Un écart est relevé entre les équipements installés et le scénario retenu de
l'audit ou les factures des travaux en quantité et en qualité (performances
thermiques et
énergétiques)
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ21oui"
            type="radio"
            name="APCATQ21"
            value="Oui"
            checked={APCATQ21 === "Oui"}
            onChange={(e) => setAPCATQ21(e.target.value)}
          />
          <label for="APCATQ21oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ21non'
            type="radio"
            name="APCATQ21"
            value="NON"
            checked={APCATQ21 === "NON"}
            onChange={(e) => setAPCATQ21(e.target.value)}
          />
          <label for="APCATQ21non">Non</label>
          </td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Commentaires</td>
        <div ><input
        className='items-center justify-center text-center'
            type="textarea"
            name="APCATQ22"
            value={APCATQ22}
            onChange={(e)=>setAPCATQ22(e.target.value)}
            id="APCATQ22"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Des non qualités manifestes sont relevées</td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id="APCATQ23oui"
            type="radio"
            name="APCATQ23"
            value="Oui"
            checked={APCATQ23 === "Oui"}
            onChange={(e) => setAPCATQ23(e.target.value)}
          />
          <label for="APCATQ23oui">Oui</label>
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          <input
            id='APCATQ23non'
            type="radio"
            name="APCATQ23"
            value="NON"
            checked={APCATQ23 === "NON"}
            onChange={(e) => setAPCATQ23(e.target.value)}
          />
          <label for="APCATQ23non">Non</label>
          </td>
      </tr>

      

      <tr>
        <td className="border border-gray-300 px-4 py-2">Commentaire (le cas échéant, lister les non qualitésrelevées au regard des
référentiels de contrôle "geste par geste" correspondant à chaque poste de
travaux mono-lot)</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ24"
            value={APCATQ24}
            onChange={(e)=>setAPCATQ24(e.target.value)}
            id="APCATQ24"
            placeholder='...'
          /></div>
      </tr>
      

      <tr>
        <td className="border border-gray-300 px-4 py-2">Conclusion </td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ000"
            value={APCATQ000}
            onChange={(e)=>setAPCATQ000(e.target.value)}
            id="APCATQ000"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Commentaires</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ25"
            value={APCATQ25}
            onChange={(e)=>setAPCATQ25(e.target.value)}
            id="APCATQ25"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Nom du technicien :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ26"
            value={APCATQ26}
            onChange={(e)=>setAPCATQ26(e.target.value)}
            id="APCATQ26"
            placeholder='...'
          /></div>
      </tr>

      <tr>
        <td className="border border-gray-300 px-4 py-2">Signature le :</td>
        <div ><input
        className='items-center justify-center text-center'
            type="text"
            name="APCATQ27"
            value={APCATQ27}
            onChange={(e)=>setAPCATQ27(e.target.value)}
            id="APCATQ27"
            placeholder='...'
          /></div>
      </tr>
      
  
    </tbody>
  </table>
  
<label
        htmlFor="imgIC"
        className="w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
      >
        <div className="flex justify-center items-center flex-col gap-y-2">
          <span className="text-2xl">
            <MdCloudUpload />
          </span>
          <span>Select Image Signature technicien</span>
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



<div className='text-center items-center text-white font-bold border border-solid bg-orange-700' >
    <h4>Photos</h4>
</div>

<label
        htmlFor="imgAA"
        className="w-full h-[180px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed"
      >
        <div className="flex justify-center items-center flex-col gap-y-2">
          <span className="text-2xl">
            <MdCloudUpload />
          </span>
          <span>Select PDF file</span>
        </div>
      </label>
      <input
        type="file"
        id="imgAA"
        className="hidden"
        onChange={handleImageUploadAA}
        multiple
      />

      {/* Display image previews */}
      {imagesBase64AA.length > 0 && (
        <div className="mt-4 flex gap-2 flex-wrap">
          {imagesBase64AA.map((imgBase64AA, index) => (
            <div className="image-container" key={index}>
              <img
                src={imgBase64AA}
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
              <button className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600'>Confirmé formulaire</button>
              </div>
          </div>

            
        </form>
      </div>
    </div>
  )
}

export default AddFormInspecAp