import React from 'react'
import SvgImage from "../../assets/logo-mar.png";

const Unable = () => {
  return (
    // <div>Unable</div>

    <div className="container">
        <div className="flex justify-between flex-wrap items-center min-h-screen">
          <div className="max-w-[500px] space-y-4">
            <div className="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white">
              <span className="inline-block w-[25px] bg-secondary-500 h-[1px]"></span>
              <span>Commençons à travailler</span>
            </div>
            <div className="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white">
              Glob-G
            </div>
            <p className="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]">
              Dossier + PDFs
            </p>
            <div className="bg-white flex items-center px-3 rounded">
              
              {/* <div className="flex-none">
                <button to="/dashboard/dossiers" type="button" className="btn btn-dark btn-sm px-6">
                 Start 
                </button>
              </div> */}
            </div>
            
          </div>
          <div>
            <img src={SvgImage} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Unable