import React, { useContext, useEffect, useState } from 'react'
import profile from '../../assets/admin.jpg'
import storeContext from '../../context/storeContext'
import { Clock } from 'lucide-react';

const Header = () => {
  const {store} = useContext(storeContext)

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='pl-4 fixed w-[calc(100vw-250px)] top-4 z-50'>
      <div className='w-full rounded h-[70px] flex justify-between items-center p-4 bg-white'>
      <div className='flex items-center gap-2 text-green-200 font-semibold text-lg'>
          <Clock className="w-6 h-6" /> {/* Clock icon */}
          <span>{time}</span>
        </div>
        <div className='mr-4'>
          <div className='flex gap-x-2'>
            <div className='flex flex-col justify-center items-end'>
              <span>{store.userInfo?.name}</span>
              <span>{store.userInfo?.role}</span>
            </div>
            <img className='w-10 h-10 rounded-full' src={profile} alt="profileImg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header