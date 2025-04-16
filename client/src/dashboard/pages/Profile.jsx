import React from 'react'
import { FaImage } from "react-icons/fa6"
import axios from "axios";
import storeContext from "../../context/storeContext";
import { base_url } from "../config/config";

const Profile = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-x-6 mt-5 px-4'>
    {/* 👤 Info Block */}
    <div className='bg-white p-6 rounded shadow flex justify-center items-center'>
      <div className='text-[#404040] flex flex-col gap-y-2 items-start'>
        <span className='font-bold'>Nom et Prénom: <span className='font-normal'>Zellit Mootez</span></span>
        <span className='font-bold'>Email: <span className='font-normal'>zellitmootez96@gmail.com</span></span>
        <span className='font-bold'>Opération: <span className='font-normal'>IT</span></span>
      </div>
    </div>
  
    {/* 🔐 Password Change Block */}
    <div className='bg-white p-6 rounded shadow text-[#404040] flex flex-col items-center'>
      <h2 className='text-lg font-bold text-[#1960a9] hover:text-[#9fc327] pb-4'>Changer le mot de passe</h2>
  
      <form className='w-full max-w-md'>
        <div className='grid grid-cols-1 gap-y-5'>
          <div className='flex flex-col gap-y-1'>
            <label htmlFor='old_password' className='text-sm font-semibold text-gray-600'>Ancien mot de passe*</label>
            <input 
              type='password' 
              id='old_password' 
              name='old_password' 
              placeholder='Ancien mot de passe' 
              className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-[#1960a9] h-10'
            />
          </div>
  
          <div className='flex flex-col gap-y-1'>
            <label htmlFor='new_password' className='text-sm font-semibold text-gray-600'>Nouveau mot de passe*</label>
            <input 
              type='password' 
              id='new_password' 
              name='new_password' 
              placeholder='Nouveau mot de passe' 
              className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-[#1960a9] h-10'
            />
          </div>
  
          <div className='mt-4'>
            <button 
              type='submit' 
              className='w-full px-3 py-2 bg-[#1960a9] rounded-md text-white font-semibold hover:bg-[#9fc327] transition-colors'
            >
              Changer le mot de passe
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Profile