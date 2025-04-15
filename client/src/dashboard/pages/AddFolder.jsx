import React, {useContext, useEffect , useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import { base_url} from '../config/config'
import storeContext from '../../context/storeContext'

const AddFolder = () => {
    const [benificaires, setBenificaires] = useState([]);
  const navigate = useNavigate()
  const {store} = useContext(storeContext)
  const [state, setState] = useState({
    numFolderAnah:"",
    benificaire:"",
    source:"",
    classeEng:"",
    residance:"",
    classeRevenue:"",
    parrinage:"",

    numbTotOLA:"",
    numbEN:"",
    titreResPriAm:"",
    RFRtot:"",
    anneeRFRtot:"",
    numbPers:"",
    numbEnfNai:"",
    RFRtotInclu:"",
    anneeREFtotInclu:"",

    numLogAm:"",
    voieLogAm:"",
    villeLogAm:"",
    codePostalLogAm:"",

    communeLogAm:"",
    batimentLogAm:"",
    escalierLogAm:"",
    etageLogAm:"",
    porteLogAm:"",
    logAmel:"",
    const15ans:"",
    const15ansAnnee:"",
    PTZ:"",
    travPartiel:"",
    avantTravProj:"",
    apresTrav:"",
    souhaiTrav:"",
    
  })

  const inputHandler = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const [loader, setLoader] = useState(false)

  const submit = async(e) => {
    e.preventDefault()
    try {
      setLoader(true)
      const {data} = await axios.post(`${base_url}/api/folders/add`,state, {
        headers : {
          'Authorization' : `Bearer ${store.token}`
        }
      })
      setLoader(false)
      toast.success(data.message)
      navigate('/dashboard/folders')
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.message)
      // console.log(error)
    }
  }

  useEffect(() => {
    const fetchBenificaires = async () => {
      try {
        const { data } = await axios.get(`${base_url}/api/benificaires`, {
          headers: {
            'Authorization': `Bearer ${store.token}`
          }
        })
        setBenificaires(data?.benificaires)
      } catch (error) {
        console.error('Erreur lors du chargement des bénéficiaires', error)
      }
    }
  
    fetchBenificaires()
  }, [store.token])

  return (
    <div className='flex justify-center items-start min-h-screen bg-gray-100 py-10'>
    <div className='bg-white rounded-lg shadow-lg w-full max-w-4xl border border-gray-300'>

      <div className='flex justify-between items-center p-4 border-b border-gray-200'>
        <h2 className='text-xl text-[#1960a9] hover:text-[#9fc327] font-bold'>Ajoute Dossier</h2>
        <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/folders'>Dossiers</Link>
      </div>
      




      <form onSubmit={submit} className='space-y-6'>

<details open className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATION GÉNÉRALE</summary>

  <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numFolderAnah'>N° Dossier Anah</label>
              <input onChange={inputHandler} value={state.numFolderAnah} type='text' placeholder='N° Dossier Anah' name='numFolderAnah' id='numFolderAnah' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='benificaire'>Bénéficiaire *</label>
              <select onChange={inputHandler} value={state.benificaire} required name='benificaire' id='benificaire' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'>
                <option value=''>Sélectionner un bénéficiaire</option>
                {benificaires.map(b => (
                  <option key={b._id} value={b._id}>{b.nomBeni} {b.prenomBeni}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          

            <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='source'>Source*</label>
  <select
    onChange={inputHandler}
    value={state.source}
    name='source'
    id='source'
    className='px-3 py-2 rounded-xs outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''>Sélectionner Source</option>
    <option value='ANAH'>ANAH</option>
    <option value='Contact Direct'>Contact Direct</option>
  </select>
</div>

            <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeEng'>Classe Énergétique</label>
  <select
    onChange={inputHandler}
    value={state.classeEng}
    name='classeEng'
    id='classeEng'
    className='px-3 py-2 rounded-xs outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''>Sélectionner Classe Énergétique</option>
    <option value='Aucun'>Aucun</option>
    <option value='G'>G</option>
    <option value='F'>F</option>
    <option value='E'>E</option>
    <option value='D'>D</option>
    <option value='C'>C</option>
    <option value='B'>B</option>
    <option value='A'>A</option>
  </select>
</div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='residance'>Résidence</label>
  <select
    onChange={inputHandler}
    value={state.residance}
    name='residance'
    id='residance'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''>Sélectionner Résidence</option>
    <option value='Secondaire'>Secondaire</option>
    <option value='Principale'>Principale</option>
  </select>
</div>
            
            <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Classe du revenue</label>
  <select
    onChange={inputHandler}
    value={state.classeRevenue}
    name='classeRevenue'
    id='classeRevenue'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''>Sélectionner une classe</option>
    <option value='Aucun'>Aucun</option>
    <option value='Classiques'>Classiques</option>
    <option value='Intérmédiaires'>Intérmédiaires</option>
    <option value='Modestes'>Modestes</option>
    <option value='Trés Modeste'>Trés Modeste</option>
  </select>
</div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='parrinage'>Parrainage</label>
  <div className='flex gap-x-4'>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='parrinage'
        value='Oui'
        checked={state.parrinage === 'Oui'}
        onChange={inputHandler}
      />
      Oui
    </label>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='parrinage'
        value='Non'
        checked={state.parrinage === 'Non'}
        onChange={inputHandler}
      />
      Non
    </label>
  </div>
</div>

          </div>

</details>

<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>IDENTITE DU DEMANDEUR DE L'AIDE</summary>

  <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbTotOLA'>Nombre total d'occupants du logement à améliorer</label>
              <input onChange={inputHandler} value={state.numbTotOLA} type='text' placeholder='' name='numbTotOLA' id='numbTotOLA' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbEN'>Le cas échéant, nombre d'enfant(s) à naitre</label>
              <input onChange={inputHandler} value={state.numbEN} type='text' placeholder='' name='numbEN' id='numbEN' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='classeRevenue'>Titre de résidence principale à améliorer</label>
  <select
    onChange={inputHandler}
    value={state.titreResPriAm}
    name='titreResPriAm'
    id='titreResPriAm'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8'
  >
    <option value=''></option>
    <option value='Aucun'>Aucun</option>
    <option value='Classiques'>Classiques</option>
    <option value='Intérmédiaires'>Intérmédiaires</option>
    <option value='Modestes'>Modestes</option>
    <option value='Trés Modeste'>Trés Modeste</option>
  </select>
</div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='RFRtot'>RFR total des occupants du logement à améliorer, vous inclus le cas échéant *</label>
              <input onChange={inputHandler} value={state.RFRtot} type='text' placeholder='€' name='RFRtot' id='RFRtot' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='anneeRFRtot'>Année RFR</label>
              <input onChange={inputHandler} value={state.anneeRFRtot} type='text' placeholder='Année RFR' name='anneeRFRtot' id='anneeRFRtot' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbPers'>Nomber de personnes vivant sous votre toit</label>
              <input onChange={inputHandler} value={state.numbPers} type='text' placeholder='' name='numbPers' id='numbPers' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numbEnfNai'>Le cas échant, nombre d'enfant(s) à naitre</label>
              <input onChange={inputHandler} value={state.numbEnfNai} type='text' placeholder='' name='numbEnfNai' id='numbEnfNai' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-4 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='RFRtotInclu'>RFR total des occupants du logement à améliorer, vous inclus  </label>
              <input onChange={inputHandler} value={state.RFRtotInclu} type='text' placeholder='€' name='RFRtotInclu' id='RFRtotInclu' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='anneeREFtotInclu'>Année RFR</label>
              <input onChange={inputHandler} value={state.anneeREFtotInclu} type='text' placeholder='Année RFR' name='anneeREFtotInclu' id='anneeREFtotInclu' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

</details>

<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>DESCRIPTION DU LOGEMENT A AMELIORER</summary>

  <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='numLogAm'>N°</label>
              <input onChange={inputHandler} value={state.numLogAm} type='text' placeholder='' name='numLogAm' id='numLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='voieLogAm'>Voie</label>
              <input onChange={inputHandler} value={state.voieLogAm} type='text' placeholder='' name='voieLogAm' id='voieLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='villeLogAm'>Ville</label>
              <input onChange={inputHandler} value={state.villeLogAm} type='text' placeholder='Ville' name='villeLogAm' id='villeLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='codePostalLogAm'>Code Postal</label>
              <input onChange={inputHandler} value={state.codePostalLogAm} type='text' placeholder='Code Postal' name='codePostalLogAm' id='codePostalLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='communeLogAm'>Commune</label>
              <input onChange={inputHandler} value={state.communeLogAm} type='text' placeholder='Commune' name='communeLogAm' id='communeLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-4 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='batimentLogAm'>Bâtiment</label>
              <input onChange={inputHandler} value={state.batimentLogAm} type='text' placeholder='Bâtiment' name='batimentLogAm' id='batimentLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='escalierLogAm'>Escalier</label>
              <input onChange={inputHandler} value={state.escalierLogAm} type='text' placeholder='Escalier' name='escalierLogAm' id='escalierLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='etageLogAm'>Etage</label>
              <input onChange={inputHandler} value={state.etageLogAm} type='text' placeholder='Etage' name='etageLogAm' id='etageLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='porteLogAm'>Porte</label>
              <input onChange={inputHandler} value={state.porteLogAm} type='text' placeholder='Porte' name='porteLogAm' id='porteLogAm' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-4 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='logAmel'>Logement à améliorer</label>
            </div>
            <div className='flex flex-col gap-y-2'>
              <select
    onChange={inputHandler}
    value={state.logAmel}
    name='logAmel'
    id='logAmel'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8'
  >
    <option value=''></option>
    <option value='maison individuelle'>maison individuelle</option>
    <option value='maison individuelle1'>maison individuelle1</option>
    </select>
</div>
          </div>

          <div className='grid grid-cols-3 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='const15ans'>Construit depuis plus de 15 ans:</label>
            </div>


            <div className='flex gap-x-4'>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='const15ans'
        value='Oui'
        checked={state.const15ans === 'Oui'}
        onChange={inputHandler}
      />
      Oui
    </label>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='const15ans'
        value='Non'
        checked={state.const15ans === 'Non'}
        onChange={inputHandler}
      />
      Non
    </label>
  </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='const15ansAnnee'>Annee de construction</label>
              <input onChange={inputHandler} value={state.const15ansAnnee} type='text' placeholder='Annee de construction' name='const15ansAnnee' id='const15ansAnnee' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>

          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='PTZ'>Vous avez bénéficié d'un Prêt à Taux Zéro (PTZ) du ministère du Logement au cours des cinq derniéres années pour son acquisition:</label>
            </div>

            <div className='flex gap-x-4'>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='PTZ'
        value='Oui'
        checked={state.PTZ === 'Oui'}
        onChange={inputHandler}
      />
      Oui
    </label>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='PTZ'
        value='Non'
        checked={state.PTZ === 'Non'}
        onChange={inputHandler}
      />
      Non
    </label>
  </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-gray-600' htmlFor='travPartiel'>Travaux vont être réalisés partienllement ou totalement dans le cadre du dispositif d'auto-réhabilitation avec un opérateur spécialisé:</label>
            </div>
            
            <div className='flex gap-x-4'>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='travPartiel'
        value='Oui'
        checked={state.travPartiel === 'Oui'}
        onChange={inputHandler}
      />
      Oui
    </label>
    <label className='flex items-center gap-x-2'>
      <input
        type='radio'
        name='travPartiel'
        value='Non'
        checked={state.travPartiel === 'Non'}
        onChange={inputHandler}
      />
      Non
    </label>
  </div>
          </div>
          <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium text-center text-gray-600' htmlFor='avantTravProj'>Pour le bénéfice de la prime <span className='text-green-700'>Habiter Mieux sérénité</span>, indiquez la consommation énergétique conventionnelle en k Wh ep/m2 .an de votre logement: </label>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium  text-gray-600' htmlFor='avantTravProj'>Avant travaux</label>
            </div>

            <div className='flex flex-col gap-y-2'>
              <input onChange={inputHandler} value={state.avantTravProj} type='text' placeholder='kWh ep/m2' name='avantTravProj' id='avantTravProj' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-xs font-medium  text-gray-600' htmlFor='apresTrav'>Projetèe après travaux</label>
            </div>

            <div className='flex flex-col gap-y-2'>
              <input onChange={inputHandler} value={state.apresTrav} type='text' placeholder='kWh ep/m2' name='apresTrav' id='apresTrav' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8' />
            </div>
          </div>


          <div className='grid grid-cols-1 gap-x-8 mb-3'>
          <div className='flex flex-col gap-y-2'>
  <label className='text-xs font-medium text-gray-600' htmlFor='souhaiTrav'>Travaux souhaités</label>
  <select
    onChange={inputHandler}
    value={state.souhaiTrav}
    name='souhaiTrav'
    id='souhaiTrav'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-8'
  >
    <option value=''></option>
    <option value='Rénovation énergétique'>Rénovation énergétique</option>
    <option value='Rénovation énergétique1'>Rénovation énergétique1</option>
    <option value='Rénovation énergétique2'>Rénovation énergétique2</option>
    <option value='Rénovation énergétique3'>Rénovation énergétique3</option>
    <option value='Rénovation énergétique4'>Rénovation énergétique4</option>
  </select>
</div>
</div>

</details>

<details className='p-4 border rounded-md'>
  <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>LISTE DES DOCUMENTS</summary>

  {/* ... all your fields related to personal info here ... */}

</details>


<div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Ajoute Dossier'}</button>
          </div>
          </div>
</form>



        
        
      </div>
    </div>
  )
}

export default AddFolder

