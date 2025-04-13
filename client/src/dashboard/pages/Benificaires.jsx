import React, { useEffect, useState, useContext } from 'react';
import { FaEye, FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../config/config';
import storeContext from '../../context/storeContext';
import toast from 'react-hot-toast';

const Benificaires = () => {
  const { store } = useContext(storeContext);
  const [benificaires, setBenificaires] = useState([]);
  const [editBenificaire, setEditBenificaire] = useState(null);

  const [newgenre, setNewgenre] = useState('');
  const [newnomBeni, setNewnomBeni] = useState('');
  const [newprenomBeni, setNewprenomBeni] = useState('');
  const [newdatenaiBeni, setNewdatenaiBeni] = useState('');
  const [newemailBeni, setNewemailBeni] = useState('');
  const [newemailAnah, setNewemailAnah] = useState('');
  const [newpasswordAnah, setNewpasswordAnah] = useState('');
  const [newvilleBeni, setNewvilleBeni] = useState('');
  const [newnumBeni, setNewnumBeni] = useState('');
  const [newvoieBeni, setNewvoieBeni] = useState('');
  const [newcodepostalBeni, setNewcodepostalBeni] = useState('');
  const [newetageBeni, setNewetageBeni] = useState('');
  const [newescalierBeni, setNewescalierBeni] = useState('');
  const [newcommuneBeni, setNewcommuneBeni] = useState('');
  const [newporteBeni, setNewporteBeni] = useState('');
  const [newbatimentBeni, setNewbatimentBeni] = useState('');
  const [newnumTelBeni, setNewnumTelBeni] = useState('');
  const [newnumPortableBeni, setNewnumPortableBeni] = useState('');
  const [newRIBBeni, setNewRIBBeni] = useState('');
  const [newIBANBeni, setNewIBANBeni] = useState('');
  const [newZoneClimaBeni, setNewZoneClimaBeni] = useState('');
  const [newnomprenomPerConf, setNewnomprenomPerConf] = useState('');
  const [newenQualitPerConf, setNewenQualitPerConf] = useState('');

   const [res, set_res] = useState({ id: '', loader: false }); 

  const get_benificaires = async () => {
    try {
      const { data } = await axios.get(`${base_url}/api/benificaires`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });
      setBenificaires(data.benificaires);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_benificaires();
  }, []);

  const handleUpdate = async (id) => {
    try {
      const updateData = {
        genre: newgenre.trim(),
                    nomBeni: newnomBeni.trim(),
                    prenomBeni: newprenomBeni.trim(),
                    datenaiBeni: newdatenaiBeni.trim(),
                    emailBeni: newemailBeni.trim(),
                    emailAnah: newemailAnah.trim(),
                    passwordAnah: newpasswordAnah.trim(),
                    villeBeni: newvilleBeni.trim(),
                    numBeni: newnumBeni.trim(),
                    voieBeni: newvoieBeni.trim(),
                    codepostalBeni: newcodepostalBeni.trim(),
                    etageBeni: newetageBeni.trim(),
                    escalierBeni: newescalierBeni.trim(),
                    communeBeni: newcommuneBeni.trim(),
                    porteBeni: newporteBeni.trim(),
                    batimentBeni: newbatimentBeni.trim(),
                    numTelBeni: newnumTelBeni.trim(),
                    numPortableBeni: newnumPortableBeni.trim(),
                    RIBBeni: newRIBBeni.trim(),
                    IBANBeni: newIBANBeni.trim(),
                    ZoneClimaBeni: newZoneClimaBeni.trim(),
                    nomprenomPerConf: newnomprenomPerConf.trim(),
                    enQualitPerConf: newenQualitPerConf.trim(),
      };

      const { data } = await axios.put(
        `${base_url}/api/benificaire/update/${id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${store.token}` },
        }
      );

      setBenificaires((prev) =>
        prev.map((op) =>
          op._id === id
            ? { ...op, genre: newgenre, nomBeni: newnomBeni, prenomBeni: newprenomBeni, datenaiBeni: newdatenaiBeni, emailBeni: newemailBeni, emailAnah: newemailAnah, passwordAnah: newpasswordAnah, villeBeni: newvilleBeni, numBeni: newnumBeni, voieBeni: newvoieBeni, codepostalBeni: newcodepostalBeni, etageBeni: newetageBeni, escalierBeni: newescalierBeni, communeBeni: newcommuneBeni, porteBeni: newporteBeni, batimentBeni: newbatimentBeni, numTelBeni: newnumTelBeni, numPortableBeni: newnumPortableBeni, RIBBeni: newRIBBeni, IBANBeni: newIBANBeni, ZoneClimaBeni: newZoneClimaBeni, nomprenomPerConf: newnomprenomPerConf, enQualitPerConf: newenQualitPerConf }
            : op
        )
      );

      setEditBenificaire(null);
      setNewgenre('');
      setNewnomBeni('');
      setNewprenomBeni('');
      setNewdatenaiBeni('');
      setNewemailBeni('');
      setNewemailAnah('');
      setNewpasswordAnah('');
      setNewvilleBeni('');
      setNewnumBeni('');
      setNewvoieBeni('');
      setNewcodepostalBeni('');
      setNewetageBeni('');
      setNewescalierBeni('');
      setNewcommuneBeni('');
      setNewporteBeni('');
      setNewbatimentBeni('');
      setNewnumTelBeni('');
      setNewnumPortableBeni('');
      setNewRIBBeni('');
      setNewIBANBeni('');
      setNewZoneClimaBeni('');
      setNewnomprenomPerConf('');
      setNewenQualitPerConf('');
      alert(data.message);
    } catch (error) {
      console.error('Error updating benificaire:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this Benificaire ?'))
      return;

    try {
      await axios.delete(`${base_url}/api/benificaire/delete/${id}`, {
        headers: { Authorization: `Bearer ${store.token}` },
      });

      setBenificaires((prev) => prev.filter((op) => op._id !== id));
      alert('Benificaire deleted successfully');
    } catch (error) {
      console.error('Error deleting benificaire:', error);
    }
  };

  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl  text-[#1960a9] hover:text-[#9fc327] font-bold'>Bénificaires</h2>
        <Link
          className='px-3 py-[6px] bg-[#9fc327] rounded-sm text-white hover:bg-[#1960a9]'
          to='/dashboard/benificaire/add'
        >
          Ajoute Bénificaires
        </Link>
      </div>
      <div className='relative overflow-y-auto p-4'>
        <table className='w-full text-sm text-left text-slate-600'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>Genre</th>
              <th className='px-7 py-3'>Nom</th>
              <th className='px-7 py-3'>Prénom</th>
              <th className='px-7 py-3'>Date de naissance</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Email Anah</th>
              <th className='px-7 py-3'>Mot de passe Anah</th>
              <th className='px-7 py-3'>Ville  </th>
              <th className='px-7 py-3'>N ° </th>
              <th className='px-7 py-3'>Voie </th>
              <th className='px-7 py-3'>Code postal  </th>
              <th className='px-7 py-3'>Étage </th>
              <th className='px-7 py-3'>Escalier </th>
              <th className='px-7 py-3'>Commune </th>
              <th className='px-7 py-3'>Porte </th>
              <th className='px-7 py-3'>Bâtiment </th>
              <th className='px-7 py-3'>Numéro de téléphone  </th>
              <th className='px-7 py-3'>Portable </th>
              <th className='px-7 py-3'>RIB </th>
              <th className='px-7 py-3'>IBAN </th>
              <th className='px-7 py-3'>Zone climatique </th>
              <th className='px-7 py-3'>Nom et prénom </th>
              <th className='px-7 py-3'>En qualité de </th>
            </tr>
          </thead>
          <tbody>
            {benificaires.map((r, i) => (
              <tr key={i} className='bg-white border-b'>
                

                {editBenificaire === r._id ? (
                  <>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newgenre}
                        onChange={(e) => setNewgenre(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newnomBeni}
                        onChange={(e) => setNewnomBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newprenomBeni}
                        onChange={(e) => setNewprenomBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newdatenaiBeni}
                        onChange={(e) => setNewdatenaiBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='email'
                        value={newemailBeni}
                        onChange={(e) => setNewemailBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newemailAnah}
                        onChange={(e) => setNewemailAnah(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>

                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newpasswordAnah}
                        onChange={(e) => setNewpasswordAnah(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newvilleBeni}
                        onChange={(e) => setNewvilleBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newnumBeni}
                        onChange={(e) => setNewnumBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newvoieBeni}
                        onChange={(e) => setNewvoieBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='email'
                        value={newcodepostalBeni}
                        onChange={(e) => setNewcodepostalBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newetageBeni}
                        onChange={(e) => setNewetageBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>

                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newescalierBeni}
                        onChange={(e) => setNewescalierBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newcommuneBeni}
                        onChange={(e) => setNewcommuneBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newporteBeni}
                        onChange={(e) => setNewporteBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newbatimentBeni}
                        onChange={(e) => setNewbatimentBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='email'
                        value={newnumTelBeni}
                        onChange={(e) => setNewnumTelBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newnumPortableBeni}
                        onChange={(e) => setNewnumPortableBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newRIBBeni}
                        onChange={(e) => setNewRIBBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newIBANBeni}
                        onChange={(e) => setNewIBANBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newZoneClimaBeni}
                        onChange={(e) => setNewZoneClimaBeni(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newnomprenomPerConf}
                        onChange={(e) => setNewnomprenomPerConf(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    <td className='px-6 py-4'>
                      <input
                        type='text'
                        value={newenQualitPerConf}
                        onChange={(e) => setNewenQualitPerConf(e.target.value)}
                        className='border px-2 py-1 w-full'
                      />
                    </td>
                    
                    
                  </>
                ) : (
                  <>
                    <td className='px-6 py-4'>{r.genre}</td>
                    <td className='px-6 py-4'>{r.nomBeni}</td>
                    <td className='px-6 py-4'>{r.prenomBeni}</td>
                    <td className='px-6 py-4'>{r.datenaiBeni}</td>
                    <td className='px-6 py-4'>{r.emailBeni}</td>
                    <td className='px-6 py-4'>{r.emailAnah}</td>
                    <td className='px-6 py-4'>{r.passwordAnah}</td>
                    <td className='px-6 py-4'>{r.villeBeni}</td>
                    <td className='px-6 py-4'>{r.numBeni}</td>
                    <td className='px-6 py-4'>{r.voieBeni}</td>
                    <td className='px-6 py-4'>{r.codepostalBeni}</td>
                    <td className='px-6 py-4'>{r.etageBeni}</td>
                    <td className='px-6 py-4'>{r.escalierBeni}</td>
                    <td className='px-6 py-4'>{r.communeBeni}</td>
                    <td className='px-6 py-4'>{r.porteBeni}</td>
                    <td className='px-6 py-4'>{r.batimentBeni}</td>
                    <td className='px-6 py-4'>{r.numTelBeni}</td>
                    <td className='px-6 py-4'>{r.numPortableBeni}</td>
                    <td className='px-6 py-4'>{r.RIBBeni}</td>
                    <td className='px-6 py-4'>{r.IBANBeni}</td>
                    <td className='px-6 py-4'>{r.ZoneClimaBeni}</td>
                    <td className='px-6 py-4'>{r.nomprenomPerConf}</td>
                    <td className='px-6 py-4'>{r.enQualitPerConf}</td>
                  </>
                )}

                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    <Link
                      to={`/dashboard/benificaires/view/${r._id}`}
                      className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'
                    >
                      <FaEye />
                    </Link>
                    {editBenificaire === r._id ? (
                      <>
                        <button
                          onClick={() => handleUpdate(r._id)}
                          className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-blue-500/50'
                        >
                          <FaSave />
                        </button>
                        <button
                          onClick={() => setEditBenificaire(null)}
                          className='p-[6px] bg-gray-500 rounded hover:shadow-lg hover:shadow-gray-500/50'
                        >
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                            setEditBenificaire(r._id);
                          setNewgenre(r.nomBeni);
                          setNewnomBeni(r.nomBeni);
                          setNewprenomBeni(r.prenomBeni);
                          setNewdatenaiBeni(r.datenaiBeni);
                          setNewemailBeni(r.emailBeni);
                          setNewemailAnah(r.emailAnah);
                          setNewpasswordAnah(r.passwordAnah);
                          setNewvilleBeni(r.villeBeni);
                          setNewnumBeni(r.numBeni);
                          setNewvoieBeni(r.voieBeni);
                          setNewcodepostalBeni(r.codepostalBeni);
                          setNewetageBeni(r.etageBeni);
                          setNewescalierBeni(r.escalierBeni);
                          setNewcommuneBeni(r.communeBeni);
                          setNewporteBeni(r.porteBeni);
                          setNewbatimentBeni(r.batimentBeni);
                          setNewnumTelBeni(r.numTelBeni);
                          setNewnumPortableBeni(r.numPortableBeni);
                          setNewRIBBeni(r.RIBBeni);
                          setNewIBANBeni(r.IBANBeni);
                          setNewZoneClimaBeni(r.ZoneClimaBeni);
                          setNewnomprenomPerConf(r.nomprenomPerConf);
                          setNewenQualitPerConf(r.enQualitPerConf);
                        }}
                        className='p-[6px] bg-[#1960a9] rounded hover:shadow-lg hover:shadow-yellow-500/50'
                      >
                        <FaEdit />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(r._id)}
                      className='p-[6px] bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50'
                    >
                      <FaTrash />
                    </button>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Benificaires;
