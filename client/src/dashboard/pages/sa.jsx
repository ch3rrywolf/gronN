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

    escalier:"",
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
      <details open className='p-4'>
        <summary className='text-lg font-semibold text-[#1960a9] cursor-pointer mb-4'>INFORMATION GÉNÉRALE</summary>

        <form onSubmit={submit}>
          <div className='grid grid-cols-2 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='numFolderAnah'>N° Dossier Anah</label>
              <input onChange={inputHandler} value={state.numFolderAnah} type='text' placeholder='N° Dossier Anah' name='numFolderAnah' id='numFolderAnah' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='benificaire'>Bénéficiaire *</label>
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
  <label className='text-md font-medium text-gray-600' htmlFor='source'>Source*</label>
  <select
    onChange={inputHandler}
    value={state.source}
    name='source'
    id='source'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
  >
    <option value=''>Sélectionner Source</option>
    <option value='ANAH'>ANAH</option>
    <option value='Contact Direct'>Contact Direct</option>
  </select>
</div>

            <div className='flex flex-col gap-y-2'>
  <label className='text-md font-medium text-gray-600' htmlFor='classeEng'>Classe Énergétique*</label>
  <select
    onChange={inputHandler}
    value={state.classeEng}
    name='classeEng'
    id='classeEng'
    className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10'
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
  <label className='text-md font-medium text-gray-600' htmlFor='residance'>Résidence*</label>
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
  <label className='text-md font-medium text-gray-600' htmlFor='classeRevenue'>Classe du revenue</label>
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
  <label className='text-md font-medium text-gray-600' htmlFor='parrinage'>Parrainage</label>
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
  
        </form>
        </details>
        
        <div className='grid grid-cols-1 gap-x-8 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <button disabled={loader} className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>{loader ? 'Loading...':'Ajoute Dossier'}</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default AddFolder

