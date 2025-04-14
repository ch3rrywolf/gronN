import React from 'react'
import { FaImage } from "react-icons/fa6"
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";

const Profile = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5'>
      <div className='bg-white gap-x-3 p-6 rounded flex justify-center items-center'>
        {/* <div>
          <label htmlFor="img" className={`w-[150px] h-[150px] flex rounded text-[#404040] gap-2 justify-center items-center cursor-pointer border-2 border-dashed`}>
            <div className='flex justify-center items-center flex-col gap-y-2'>
              <span className='text-2xl'><FaImage/></span>
              <span>Select Image</span>
            </div>
          </label>
          <input className='hidden' type="file" id='img' />
        </div> */}
        <div className='text-[#404040] flex flex-col gap-y-1 justify-center items-start'>
          <span>Nom et Prénom: Zellit Mootez</span>
          <span>Email: zellitmootez96@gmail.com</span>
          <span>Opération : IT</span>
        </div>
      </div>
      <div className='bg-white px-6 py-4 text-[#404040]'>
        <h2 className='pb-3 text-center'>Change mot de passe</h2>
        <form>
        <div className='grid grid-cols-1 gap-y-5 mb-3'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='old_password'>old mot de passe*</label>
              <input type='password' placeholder='Old mot de passe' name='old_password' id='old_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor='new_password'>New mot de Passe*</label>
              <input type='password' placeholder='New mot de passe' name='new_password' id='new_password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />         
            </div>
            <div className='mt-4'>
            <button className='px-3 py-[6px] bg-[#1960a9] rounded-sm text-white hover:bg-[#9fc327]'>Change mot de passe</button>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Profile