import { useState, useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import Sessions from './dashboard/pages/Sessions'
import SessionDetails from './dashboard/pages/SessionDetails'
import AddSession from './dashboard/pages/AddSession'
import ProtectDashboard from './middleware/ProtectDashboard'
import ProtectRole from './middleware/ProtectRole'
import Unable from './dashboard/pages/Unable'
import AddBackoffice from './dashboard/pages/AddBackoffice'
import Backoffices from './dashboard/pages/Backoffices'
import Profile from './dashboard/pages/Profile'
import storeContext from './context/storeContext'
import BackofficeIndex from './dashboard/pages/BackofficeIndex'
import BackofficeDetails from './dashboard/pages/BackofficeDetails'
import AddDossier from './dashboard/pages/AddDossier'
import Dossiers from './dashboard/pages/Dossiers'
import DossierDetails from './dashboard/pages/DossierDetails'

import AddFormInspec from './dashboard/pages/AddFormInspec'
import AddFormInspecAp from './dashboard/pages/AddFormInspecAp'
import AddFormInspecAv from './dashboard/pages/AddFormInspecAv'

import AddFormPlanDeFinancement from './dashboard/pages/AddFormPlanDeFinancement'
import AddFormAttDeTrav from './dashboard/pages/AddFormAttDeTrav'
import AddFormFichDeSynt from './dashboard/pages/AddFormFichDeSynt'
import AddFormFichDePres from './dashboard/pages/AddFormFichDePres'
import AddFormPlanDeFinancementDet from './dashboard/pages/AddFormPlanDeFinancementDet'
import AddFormConsDemMpr from './dashboard/pages/AddFormConsDemMpr'

import AddAddFormDevMarTreModVal from './dashboard/pages/AddFormDevMarTreModVal'
import AddFormSynDeGriAnaDuLogArc from './dashboard/pages/AddFormSynDeGriAnaDuLogArc'
import AddFormSynDeGriAnaDuLogVal from './dashboard/pages/AddFormSynDeGriAnaDuLogVal'
import AddFormConMarArc from './dashboard/pages/AddFormConMarArc'
import AddFormConMarVal from './dashboard/pages/AddFormConMarVal'
import AddFormDevMarArcMod from './dashboard/pages/AddFormDevMarArcMod'
import AddFormDevMarArcTreMod from './dashboard/pages/AddFormDevMarArcTreMod'
import AddFormDevMarModVal from './dashboard/pages/AddFormDevMarModVal'
import AddFormGriAnaDuLogVie from './dashboard/pages/AddFormGriAnaDuLogVie'
import AddFormManMarVie from './dashboard/pages/AddFormManMarVie'

import AddFormEngDuPro from './dashboard/pages/AddFormEngDuPro'
import AddFormSolDuProLeMai from './dashboard/pages/AddFromSolDuProLeMai'
import AddFormSolDuProLePre from './dashboard/pages/AddFromSolDuProLePre'
import AddFormHauSao from './dashboard/pages/AddFormHauSao'
import AddFormPerMed from './dashboard/pages/AddFormPerMed'

import Representants from './dashboard/pages/Representants'
import AddRepresentant from './dashboard/pages/AddRepresentant'

import Benificaires from './dashboard/pages/Benificaires'
import AddBenificaire from './dashboard/pages/AddBenificaire'
import BenificaireDetails from './dashboard/pages/BenificaireDetails'

import Marque from './dashboard/pages/Marques'
import AddMarque from './dashboard/pages/AddMarque'

import Prestation from './dashboard/pages/Prestations'
import AddPrestation from './dashboard/pages/AddPrestation'

import Prestationmar from './dashboard/pages/Prestationmars'
import AddPrestationmar from './dashboard/pages/AddPrestationmar'

import Geste from './dashboard/pages/Gestes'
import AddGeste from './dashboard/pages/AddGeste'

import Inspecteurs from './dashboard/pages/Inspecteurs'
import AddInspecteur from './dashboard/pages/AddInspecteur'

import Entretes from './dashboard/pages/entretes'
import AddEntrete from './dashboard/pages/AddEntrete'
import EntreteDetails from './dashboard/pages/EntreteDetails'
import EntreteIndex from './dashboard/pages/EntreteIndex'



import Mandas from './dashboard/pages/Mandas'
import AddManda from './dashboard/pages/AddManda'
import MandaDetails from './dashboard/pages/MandaDetails'
import MandaIndex from './dashboard/pages/MandaIndex'


import Auditeurs from './dashboard/pages/Auditeurs'
import AuditeurDetails from './dashboard/pages/AuditeurDetails'
import AuditeurIndex from './dashboard/pages/AuditeurIndex'
import AddAuditeur from './dashboard/pages/AddAuditeur'

import Folders from './dashboard/pages/Folders'
import AddFolder from './dashboard/pages/AddFolder'
import FolderDetails from './dashboard/pages/FolderDetails'

function App() {
  const { store } = useContext(storeContext)

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root path to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Login route */}
        <Route path="/login" element={<Login />} />
        
        {/* Dashboard Route (Protect dashboard access for logged-in users) */}
        <Route path='/dashboard' element={<ProtectDashboard />}>
          <Route path='' element={<MainLayout />} >
            
            {/* Default Redirect Based on Role */}
            <Route path='' element={store.userInfo.role === 'admin' ? <Navigate to='/dashboard/admin' /> : <Navigate to='/dashboard/backoffice' />} />
            <Route path='unable-access' element={<Unable/>} />
            
            
            <Route path='profile' element={<Profile/>} />
            <Route path="dossiers" element={<Dossiers />} />
            <Route path="dossiers/add" element={<AddDossier />} />
            <Route path="dossiers/view/:dossiers_id" element={<DossierDetails />} />

            <Route path="dossiers/form/plandefinancement/:dossiers_id" element={<AddFormPlanDeFinancement />} />
            <Route path="dossiers/form/attdetrav/:dossiers_id" element={<AddFormAttDeTrav />} />
            <Route path="dossiers/form/consdemmpr/:dossiers_id" element={<AddFormConsDemMpr />} />
            <Route path="dossiers/form/plandefinancementdet/:dossiers_id" element={<AddFormPlanDeFinancementDet />} />
            <Route path="dossiers/form/fichdepres/:dossiers_id" element={<AddFormFichDePres />} />
            <Route path="dossiers/form/fichdesynt/:dossiers_id" element={<AddFormFichDeSynt />} />

            <Route path="dossiers/form/devmartremodval/:dossiers_id" element={<AddAddFormDevMarTreModVal />} />
            <Route path="dossiers/form/syndegrianadulogarc/:dossiers_id" element={<AddFormSynDeGriAnaDuLogArc />} />
            <Route path="dossiers/form/syndegrianadulogval/:dossiers_id" element={<AddFormSynDeGriAnaDuLogVal />} />
            <Route path="dossiers/form/conmararc/:dossiers_id" element={<AddFormConMarArc />} />
            <Route path="dossiers/form/conmarval/:dossiers_id" element={<AddFormConMarVal />} />
            <Route path="dossiers/form/devmararcmod/:dossiers_id" element={<AddFormDevMarArcMod />} />
            <Route path="dossiers/form/devmararctremod/:dossiers_id" element={<AddFormDevMarArcTreMod />} />
            <Route path="dossiers/form/devmarmodval/:dossiers_id" element={<AddFormDevMarModVal />} />
            <Route path="dossiers/form/grianadulogvie/:dossiers_id" element={<AddFormGriAnaDuLogVie />} />
            <Route path="dossiers/form/manmarvie/:dossiers_id" element={<AddFormManMarVie />} />

            <Route path="dossiers/form/engdupro/:dossiers_id" element={<AddFormEngDuPro />} />
            <Route path="dossiers/form/solduprolemai/:dossiers_id" element={<AddFormSolDuProLeMai />} />
            <Route path="dossiers/form/souduprolepre/:dossiers_id" element={<AddFormSolDuProLePre />} />
            <Route path="dossiers/form/hausaoe/:dossiers_id" element={<AddFormHauSao />} />
            <Route path="dossiers/form/permed/:dossiers_id" element={<AddFormPerMed />} />

            <Route path="dossiers/form/apres/:dossiers_id" element={<AddFormInspec />} />
            <Route path="dossiers/form/ap/:dossiers_id" element={<AddFormInspecAp />} />
            <Route path="dossiers/form/av/:dossiers_id" element={<AddFormInspecAv />} />

            {/* Admin Route: Full access */}
            <Route path="" element={<ProtectRole role="admin" />}>
              <Route path="admin" element={<AdminIndex />} />
        
              <Route path="backoffice/add" element={<AddBackoffice />} />
              <Route path="backoffices" element={<Backoffices />} />
              <Route path="backoffices/view/:backoffices_id" element={<BackofficeDetails />} />

              <Route path='sessions' element={<Sessions/>} />
              <Route path='session/add' element={<AddSession/>} />
              <Route path="sessions/view/:sessions_id" element={<SessionDetails />} />

              <Route path="representant/add" element={<AddRepresentant />} />
              <Route path="representants" element={<Representants />} />

              <Route path="benificaires" element={<Benificaires />} />
              <Route path="benificaire/add" element={<AddBenificaire />} />
              <Route path="benificaires/view/:benificaires_id" element={<BenificaireDetails />} />

              <Route path="marques" element={<Marque />} />
              <Route path="marque/add" element={<AddMarque />} />

              
              <Route path="prestations" element={<Prestation />} />
              <Route path="prestation/add" element={<AddPrestation />} />

              <Route path="prestationmars" element={<Prestationmar />} />
              <Route path="prestationmar/add" element={<AddPrestationmar />} />

              <Route path="gestes" element={<Geste />} />
              <Route path="geste/add" element={<AddGeste />} />

              <Route path="inspecteurs" element={<Inspecteurs />} />
              <Route path="inspecteur/add" element={<AddInspecteur />} />

              <Route path="entretes" element={<Entretes />} />
              <Route path="entrete/add" element={<AddEntrete />} />              
              <Route path="entretes/view/:entretes_id" element={<EntreteDetails />} />

              <Route path="mandas" element={<Mandas />} />
              <Route path="manda/add" element={<AddManda />} />
              <Route path="mandas/view/:mandas_id" element={<MandaDetails />} />

              <Route path="auditeurs" element={<Auditeurs />} />
              <Route path="auditeur/add" element={<AddAuditeur />} />
              <Route path="auditeurs/view/:auditeurs_id" element={<AuditeurDetails />} />

              <Route path="folders" element={<Folders />} />
              <Route path="folders/add" element={<AddFolder />} />
              <Route path="folders/view/:folders_id" element={<FolderDetails />} />

             
            </Route>

            {/* Backoffice Route: Limited access */}
            <Route path="" element={<ProtectRole role="backoffice" />}>
              <Route path="backoffice" element={<BackofficeIndex />} />

              {/* <Route path="dossiers" element={<Dossiers />} /> */}
             
            </Route>

            {/* Entrete Route: Limited access */}
            <Route path="" element={<ProtectRole role="entrete" />}>
              <Route path="entrete" element={<EntreteIndex />} />

              {/* <Route path="dossiers" element={<Dossiers />} /> */}
             
            </Route>

            {/* Manda Route: Limited access */}
            <Route path="" element={<ProtectRole role="manda" />}>
              <Route path="manda" element={<MandaIndex />} />

              {/* <Route path="dossiers" element={<Dossiers />} /> */}
             
            </Route>

            {/* Manda Route: Limited access */}
            <Route path="" element={<ProtectRole role="auditeur" />}>
              <Route path="auditeur" element={<AuditeurIndex />} />

              {/* <Route path="dossiers" element={<Dossiers />} /> */}
             
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App


// import { useState, useContext } from 'react'
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import MainLayout from './dashboard/layout/MainLayout'
// import AdminIndex from './dashboard/pages/AdminIndex'
// import Login from './dashboard/pages/Login'
// import ProtectDashboard from './middleware/ProtectDashboard'
// import Unable from './dashboard/pages/Unable'
// import AddBackoffice from './dashboard/pages/AddBackoffice'
// import Backoffices from './dashboard/pages/Backoffices'
// import Profile from './dashboard/pages/Profile'
// import storeContext from './context/storeContext'
// import BackofficeIndex from './dashboard/pages/BackofficeIndex'
// import BackofficeDetails from './dashboard/pages/BackofficeDetails'
// import AddDossier from './dashboard/pages/AddDossier'
// import Dossiers from './dashboard/pages/Dossiers'
// import DossierDetails from './dashboard/pages/DossierDetails'
// import AddFormInspec from './dashboard/pages/AddFormInspec'
// import AddFormInspecAp from './dashboard/pages/AddFormInspecAp'
// import AddFormInspecAv from './dashboard/pages/AddFormInspecAv'
// import AddFormPlanDeFinancement from './dashboard/pages/AddFormPlanDeFinancement'
// import AddFormAttDeTrav from './dashboard/pages/AddFormAttDeTrav'
// import AddFormFichDeSynt from './dashboard/pages/AddFormFichDeSynt'
// import AddFormFichDePres from './dashboard/pages/AddFormFichDePres'
// import AddFormPlanDeFinancementDet from './dashboard/pages/AddFormPlanDeFinancementDet'
// import AddFormConsDemMpr from './dashboard/pages/AddFormConsDemMpr'

// function App() {
//   const { store } = useContext(storeContext)

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Redirect root path to login */}
//         <Route path="/" element={<Navigate to="/login" replace />} />
        
//         {/* Login route */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Dashboard Route (Protect dashboard access for logged-in users) */}
//         <Route path='/dashboard' element={<ProtectDashboard />}>
//           <Route path='' element={<MainLayout />} >

//             {/* Default Redirect Based on Role */}
//             <Route path='' element={<Navigate to={`/dashboard/${store.userInfo.role}`} />} />

//             <Route path='unable-access' element={<Unable />} />
//             <Route path='profile' element={<Profile />} />

//             {/* Dossiers */}
//             <Route path="dossiers" element={<Dossiers />} />
//             <Route path="dossiers/add" element={<AddDossier />} />
//             <Route path="dossiers/view/:dossiers_id" element={<DossierDetails />} />
//             <Route path="dossiers/form/plandefinancement/:dossiers_id" element={<AddFormPlanDeFinancement />} />
//             <Route path="dossiers/form/attdetrav/:dossiers_id" element={<AddFormAttDeTrav />} />
//             <Route path="dossiers/form/consdemmpr/:dossiers_id" element={<AddFormConsDemMpr />} />
//             <Route path="dossiers/form/plandefinancementdet/:dossiers_id" element={<AddFormPlanDeFinancementDet />} />
//             <Route path="dossiers/form/fichdepres/:dossiers_id" element={<AddFormFichDePres />} />
//             <Route path="dossiers/form/fichdesynt/:dossiers_id" element={<AddFormFichDeSynt />} />
//             <Route path="dossiers/form/apres/:dossiers_id" element={<AddFormInspec />} />
//             <Route path="dossiers/form/ap/:dossiers_id" element={<AddFormInspecAp />} />
//             <Route path="dossiers/form/av/:dossiers_id" element={<AddFormInspecAv />} />

//             {/* Accessible to both Admin and Backoffice */}
//             <Route path="admin" element={<AdminIndex />} />
//             <Route path="backoffice" element={<BackofficeIndex />} />

//             {/* Backoffice Management (Previously restricted to Admin) */}
//             <Route path="backoffice/add" element={<AddBackoffice />} />
//             <Route path="backoffices" element={<Backoffices />} />
//             <Route path="backoffices/view/:backoffices_id" element={<BackofficeDetails />} />
            
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;
