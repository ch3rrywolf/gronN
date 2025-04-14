import React, { useContext }  from 'react'
import { Link } from 'react-router-dom'
// import {NewContent} from '../components/NewContent'
import storeContext from '../../context/storeContext';
const AuditeurIndex = () => {
  const userInfo = {
    role : "auditeur",
  }
  const { store } = useContext(storeContext);
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Bienvenue {store.userInfo?.name || 'auditeur'} !</h2>
        {
          userInfo.role !== 'admin' && <Link className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]' to='/dashboard/dossiers/'>Dossiers</Link>
        }
      </div>
      {/* <NewContent /> */}
    </div>
  )
}

export default AuditeurIndex;